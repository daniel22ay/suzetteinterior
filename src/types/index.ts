export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  scope: string[];
  location?: string;
  highlight?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  quote: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  since: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  actionResult?: {
    type: 'availability_checked' | 'appointment_booked' | 'enquiry_saved';
    date?: string;
    availableSlots?: string[];
    booking?: any;
    lead?: any;
    success?: boolean;
    error?: string;
  };
}

export interface BookingSubmission {
  clientName: string;
  email: string;
  phone?: string;
  preferredDate: string;
  preferredTimeSlot: string;
  format: 'virtual' | 'onsite';
  projectType: string;
  projectDescription: string;
}
