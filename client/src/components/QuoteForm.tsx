/**
 * QuoteForm — inline quote/inquiry form for the hero section.
 * Design: White panel, amber focus borders, IBM Plex Sans labels.
 * Compact 2-column layout on wider screens.
 */
import { SITE } from "@/lib/siteConfig";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

interface FormState {
  name: string;
  phone: string;
  email: string;
  containerSize: string;
  rentalDuration: string;
  useCase: string;
  message: string;
}

const INITIAL: FormState = {
  name: "",
  phone: "",
  email: "",
  containerSize: "",
  rentalDuration: "",
  useCase: "",
  message: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.containerSize) {
      setError("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    // Simulate submission — replace with real API call or form service
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-sm p-8 flex flex-col items-center text-center gap-4 min-h-[320px] justify-center">
        <CheckCircle size={40} className="text-[var(--amber)]" />
        <div>
          <p
            className="text-xl font-bold mb-1"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Quote Request Received
          </p>
          <p className="text-sm text-muted-foreground">
            We'll contact you within one business day. You can also reach us directly at{" "}
            <a href={SITE.phoneHref} className="text-[var(--amber)] font-medium">
              {SITE.phone}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-sm shadow-sm border border-[var(--border)]">
      <div className="px-6 pt-6 pb-4 border-b border-[var(--border)]">
        <p
          className="text-lg font-bold leading-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Get a Quote in 60 Seconds
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          No commitment. We'll follow up within one business day.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-4">
        {/* Row 1: Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="form-field">
            <label className="stencil-label block mb-1.5" htmlFor="name">
              Name <span className="text-[var(--amber)]">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-input"
              placeholder="Jane Smith"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label className="stencil-label block mb-1.5" htmlFor="phone">
              Phone <span className="text-[var(--amber)]">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="form-input"
              placeholder="(555) 000-0000"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 2: Email */}
        <div className="form-field">
          <label className="stencil-label block mb-1.5" htmlFor="email">
            Email <span className="text-[var(--amber)]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            placeholder="jane@company.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Row 3: Container size + Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="form-field">
            <label className="stencil-label block mb-1.5" htmlFor="containerSize">
              Container Size <span className="text-[var(--amber)]">*</span>
            </label>
            <select
              id="containerSize"
              name="containerSize"
              className="form-input form-select"
              value={form.containerSize}
              onChange={handleChange}
              required
            >
              <option value="">Select size</option>
              <option value="10ft">10FT Standard</option>
              <option value="20ft">20FT Standard</option>
              <option value="40ft">40FT Standard</option>
              <option value="40hc">40FT High Cube</option>
            </select>
          </div>
          <div className="form-field">
            <label className="stencil-label block mb-1.5" htmlFor="rentalDuration">
              Rental Duration
            </label>
            <select
              id="rentalDuration"
              name="rentalDuration"
              className="form-input form-select"
              value={form.rentalDuration}
              onChange={handleChange}
            >
              <option value="">Select duration</option>
              <option value="1month">1 Month</option>
              <option value="3months">3 Months</option>
              <option value="6months">6 Months</option>
              <option value="1year">1 Year</option>
              <option value="longterm">Long-term (1+ year)</option>
            </select>
          </div>
        </div>

        {/* Row 4: Message */}
        <div className="form-field">
          <label className="stencil-label block mb-1.5" htmlFor="message">
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            className="form-input resize-none"
            rows={2}
            placeholder="Delivery address, site access notes, intended use..."
            value={form.message}
            onChange={handleChange}
          />
        </div>

        {error && (
          <p className="text-xs text-destructive">{error}</p>
        )}

        <button
          type="submit"
          className="btn-primary w-full justify-center"
          disabled={submitting}
        >
          {submitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            "Request My Quote"
          )}
        </button>

        <p className="text-[11px] text-muted-foreground text-center">
          Or call us directly:{" "}
          <a href={SITE.phoneHref} className="text-[var(--amber)] font-medium">
            {SITE.phone}
          </a>
        </p>
      </form>
    </div>
  );
}
