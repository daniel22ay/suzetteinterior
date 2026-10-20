import fs from 'fs';
import path from 'path';

export interface Booking {
  id: string;
  clientName: string;
  email: string;
  phone?: string;
  preferredDate: string; // YYYY-MM-DD
  preferredTimeSlot: string; // e.g. "10:00 AM"
  timeZone: string; // e.g. "America/Toronto" (Eastern Time)
  format: 'virtual' | 'onsite';
  projectType: string;
  projectDescription: string;
  status: 'confirmed' | 'rescheduled' | 'cancelled';
  createdAt: string;
  referenceCode: string;
}

export interface Lead {
  id: string;
  clientName: string;
  email: string;
  phone?: string;
  projectType: string;
  location?: string;
  timeline?: string;
  budgetRange?: string;
  description: string;
  source: 'website_contact_form' | 'ai_chatbot';
  createdAt: string;
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Read bookings safely
export function getBookings(): Booking[] {
  ensureDataDir();
  if (!fs.existsSync(BOOKINGS_FILE)) {
    // Initial sample booking to demonstrate conflict resolution
    const initialBookings: Booking[] = [
      {
        id: 'bk_sample_1',
        clientName: 'KeyComm Office Fit-Up Review',
        email: 'info@keycomm.ca',
        preferredDate: '2026-10-22',
        preferredTimeSlot: '11:00 AM',
        timeZone: 'America/Toronto (EDT)',
        format: 'onsite',
        projectType: 'Professional Office Fit-Up',
        projectDescription: 'Preliminary space layout review for Kanata commercial floor',
        status: 'confirmed',
        createdAt: '2026-10-18T10:00:00.000Z',
        referenceCode: 'VID-2026-KC1'
      }
    ];
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(initialBookings, null, 2), 'utf-8');
    return initialBookings;
  }
  try {
    const raw = fs.readFileSync(BOOKINGS_FILE, 'utf-8');
    return JSON.parse(raw) as Booking[];
  } catch (err) {
    console.error('Failed to parse bookings file, resetting:', err);
    return [];
  }
}

// Save bookings
export function saveBooking(bookingData: Omit<Booking, 'id' | 'createdAt' | 'status' | 'referenceCode'>): {
  success: boolean;
  booking?: Booking;
  error?: string;
} {
  ensureDataDir();
  const bookings = getBookings();

  // Conflict check: cannot book the same slot on the same date
  const conflict = bookings.find(
    (b) =>
      b.status === 'confirmed' &&
      b.preferredDate === bookingData.preferredDate &&
      b.preferredTimeSlot.toLowerCase().trim() === bookingData.preferredTimeSlot.toLowerCase().trim()
  );

  if (conflict) {
    return {
      success: false,
      error: `The ${bookingData.preferredTimeSlot} slot on ${bookingData.preferredDate} is already reserved. Please select another available time.`
    };
  }

  const randomRef = Math.random().toString(36).substring(2, 7).toUpperCase();
  const year = new Date().getFullYear();
  const newBooking: Booking = {
    ...bookingData,
    id: `bk_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    status: 'confirmed',
    createdAt: new Date().toISOString(),
    referenceCode: `VID-${year}-${randomRef}`
  };

  bookings.push(newBooking);
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), 'utf-8');

  return {
    success: true,
    booking: newBooking
  };
}

// Available time slots standard schedule (Eastern Time)
export const STANDARD_DAILY_SLOTS = [
  '09:30 AM',
  '11:00 AM',
  '01:30 PM',
  '03:00 PM',
  '04:30 PM'
];

export function getAvailableSlots(dateString: string): string[] {
  const bookings = getBookings();
  const reservedForDate = new Set(
    bookings
      .filter((b) => b.status === 'confirmed' && b.preferredDate === dateString)
      .map((b) => b.preferredTimeSlot.trim().toUpperCase())
  );

  return STANDARD_DAILY_SLOTS.filter(
    (slot) => !reservedForDate.has(slot.trim().toUpperCase())
  );
}

// Read leads safely
export function getLeads(): Lead[] {
  ensureDataDir();
  if (!fs.existsSync(LEADS_FILE)) {
    return [];
  }
  try {
    const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(raw) as Lead[];
  } catch (err) {
    console.error('Failed to parse leads file:', err);
    return [];
  }
}

// Save lead
export function saveLead(leadData: Omit<Lead, 'id' | 'createdAt'>): {
  success: boolean;
  lead?: Lead;
  error?: string;
} {
  ensureDataDir();
  const leads = getLeads();

  const newLead: Lead = {
    ...leadData,
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    createdAt: new Date().toISOString()
  };

  leads.push(newLead);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');

  return {
    success: true,
    lead: newLead
  };
}
