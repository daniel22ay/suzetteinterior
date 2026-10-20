import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  Calendar,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Clock,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { ChatMessage } from '../types';

interface ChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenBookingModalWithSlot?: (date: string, slot: string) => void;
}

const INITIAL_WELCOME_MESSAGE: ChatMessage = {
  id: 'msg_welcome',
  role: 'assistant',
  content:
    "Hello and welcome to VISION Interior Design! I'm here to help you explore our services, discuss your project and arrange a consultation. How can I help you today?",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

const QUICK_REPLIES = [
  'Explore Our Services',
  'Discuss My Project',
  'Book a Consultation',
  'Ask a Question'
];

export const Chatbot: React.FC<ChatbotProps> = ({
  isOpen,
  onToggle,
  onOpenBookingModalWithSlot
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_WELCOME_MESSAGE]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [lastFailedMessage, setLastFailedMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: `usr_${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);
    setInputText('');
    setIsLoading(true);
    setHasError(false);
    setLastFailedMessage(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedHistory.map((m) => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Server responded with an error');
      }

      const assistantMessage: ChatMessage = {
        id: `asst_${Date.now()}`,
        role: 'assistant',
        content: data.reply || "Thank you for reaching out to VISION Interior Design.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionResult: data.actionResult
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    } catch (err) {
      console.error('Chat error:', err);
      setIsLoading(false);
      setHasError(true);
      setLastFailedMessage(text);
    }
  };

  const handleRetry = () => {
    if (lastFailedMessage) {
      handleSendMessage(lastFailedMessage);
    }
  };

  const handleResetConversation = () => {
    setMessages([
      {
        ...INITIAL_WELCOME_MESSAGE,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setHasError(false);
    setLastFailedMessage(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={onToggle}
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2.5 p-4 bg-[#0D5C63] hover:bg-[#09474D] text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-none focus:outline-none focus:ring-2 focus:ring-[#0D5C63] focus:ring-offset-2 ${
          isOpen ? 'scale-90 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
        }`}
        aria-label="Open VISION Design Assistant Chat"
      >
        <Sparkles className="w-4 h-4 text-[#A2E2E8]" />
        <span className="text-xs uppercase tracking-[0.18em] font-semibold hidden sm:inline">
          VISION Assistant
        </span>
        <MessageSquare className="w-5 h-5" />
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh] bg-white border border-[#CBD5E1] shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          
          {/* Header */}
          <div className="bg-[#132A2F] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#1C3E45]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#0D5C63] flex items-center justify-center text-[#A2E2E8]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif-luxury text-base font-medium tracking-wide">
                  VISION Design Assistant
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-[#A2E2E8] font-sans-clean font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
                  <span>Online &bull; Commercial Interior Guidance</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetConversation}
                className="p-1.5 text-[#94A3B8] hover:text-white transition-colors"
                title="Restart Conversation"
                aria-label="Restart Conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={onToggle}
                className="p-1.5 text-[#94A3B8] hover:text-white transition-colors"
                title="Close Chat"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#FAF9F5]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.role === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                {/* Role Label */}
                <span className="text-[10px] uppercase font-sans-clean tracking-wider text-[#94A3B8] mb-1 px-1">
                  {msg.role === 'user' ? 'You' : 'VISION Assistant'} &bull; {msg.timestamp}
                </span>

                {/* Message Bubble */}
                <div
                  className={`max-w-[85%] p-3.5 text-xs sm:text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#0D5C63] text-white font-sans-clean'
                      : 'bg-white text-[#1E252B] border border-[#E2E8F0] shadow-sm font-sans-clean'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>

                  {/* Interactive Action Card: Availability Checked */}
                  {msg.actionResult && msg.actionResult.type === 'availability_checked' && (
                    <div className="mt-3 pt-3 border-t border-[#E2E8F0] text-xs">
                      <span className="font-semibold text-[#132A2F] block mb-2">
                        Confirmed Available Slots for {msg.actionResult.date}:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.actionResult.availableSlots?.map((slot: string) => (
                          <button
                            key={slot}
                            onClick={() => {
                              if (onOpenBookingModalWithSlot) {
                                onOpenBookingModalWithSlot(msg.actionResult!.date!, slot);
                              } else {
                                handleSendMessage(`I would like to book the ${slot} slot on ${msg.actionResult!.date}.`);
                              }
                            }}
                            className="bg-[#EAF5F6] hover:bg-[#0D5C63] text-[#0D5C63] hover:text-white px-2.5 py-1 text-[11px] font-medium border border-[#CBD5E1] transition-colors"
                          >
                            <Clock className="w-3 h-3 inline mr-1" />
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Interactive Action Card: Appointment Booked */}
                  {msg.actionResult && msg.actionResult.type === 'appointment_booked' && msg.actionResult.success && (
                    <div className="mt-3 p-2.5 bg-[#EAF5F6] border border-[#0D5C63]/30 text-xs text-[#0D5C63]">
                      <div className="flex items-center gap-1.5 font-semibold mb-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Confirmed Booking: {msg.actionResult.booking?.referenceCode}</span>
                      </div>
                      <p className="text-[11px] text-[#334155]">
                        Date: {msg.actionResult.booking?.preferredDate} at {msg.actionResult.booking?.preferredTimeSlot}
                      </p>
                    </div>
                  )}

                  {/* Interactive Action Card: Enquiry Saved */}
                  {msg.actionResult && msg.actionResult.type === 'enquiry_saved' && (
                    <div className="mt-3 p-2.5 bg-[#F0FDF4] border border-green-200 text-xs text-green-800">
                      <div className="flex items-center gap-1.5 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>Project Enquiry Recorded ({msg.actionResult.lead?.id})</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2 animate-fade-in">
                <div className="p-3 bg-white border border-[#E2E8F0] shadow-sm text-xs text-[#64748B] flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-[#0D5C63] animate-spin" />
                  <span>Suzette's assistant is thinking...</span>
                </div>
              </div>
            )}

            {/* Error Feedback */}
            {hasError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Connection issue. Could not reach assistant.</span>
                </div>
                <button
                  onClick={handleRetry}
                  className="font-semibold underline ml-2 hover:text-red-900"
                >
                  Retry
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies Strip */}
          <div className="px-3 py-2 bg-[#F1F5F9] border-t border-[#E2E8F0] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {QUICK_REPLIES.map((reply) => (
              <button
                key={reply}
                disabled={isLoading}
                onClick={() => handleSendMessage(reply)}
                className="whitespace-nowrap bg-white hover:bg-[#EAF5F6] text-[#0D5C63] hover:text-[#083A3F] border border-[#CBD5E1] text-[11px] px-2.5 py-1 transition-colors shrink-0 disabled:opacity-50"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-[#E2E8F0]">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about commercial design, retail fit-ups, or booking..."
                rows={1}
                disabled={isLoading}
                className="flex-1 max-h-24 p-2 text-xs sm:text-sm border border-[#CBD5E1] focus:border-[#0D5C63] focus:ring-1 focus:ring-[#0D5C63] outline-none resize-none transition-colors"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading || !inputText.trim()}
                className="bg-[#0D5C63] hover:bg-[#09474D] disabled:opacity-50 disabled:cursor-not-allowed text-white p-2.5 transition-colors shrink-0"
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
            <div className="flex justify-between items-center text-[10px] text-[#94A3B8] mt-1.5 px-0.5">
              <span>Press Enter to send &bull; Shift+Enter for new line</span>
              <span>VISION Interior Design</span>
            </div>
          </div>

        </div>
      )}
    </>
  );
};
