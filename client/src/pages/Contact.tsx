/**
 * Contact Page — full contact form + contact details sidebar.
 * Design: Two-column split, left = form, right = contact info + hours.
 */
import FadeUp from "@/components/FadeUp";
import { SITE } from "@/lib/siteConfig";
import { CheckCircle, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

// Social icons
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="20" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

interface ContactFormState {
  name: string;
  company: string;
  phone: string;
  email: string;
  containerSize: string;
  rentalDuration: string;
  deliveryAddress: string;
  message: string;
}

const INITIAL: ContactFormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  containerSize: "",
  rentalDuration: "",
  deliveryAddress: "",
  message: "",
};

function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      setError("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1400));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center gap-5 py-16">
        <CheckCircle size={48} className="text-[var(--amber)]" />
        <div>
          <h3
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Message Received
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            We'll be in touch within one business day. For urgent requests, send
            us whatsapp message at{" "}
            <a
              href={SITE.phoneHref}
              className="text-[var(--amber)] font-medium"
            >
              {SITE.phone}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-field">
          <label className="stencil-label block mb-1.5" htmlFor="c-name">
            Name <span className="text-[var(--amber)]">*</span>
          </label>
          <input
            id="c-name"
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
          <label className="stencil-label block mb-1.5" htmlFor="c-company">
            Company
          </label>
          <input
            id="c-company"
            name="company"
            type="text"
            className="form-input"
            placeholder="Acme Corp (optional)"
            value={form.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-field">
          <label className="stencil-label block mb-1.5" htmlFor="c-phone">
            Phone <span className="text-[var(--amber)]">*</span>
          </label>
          <input
            id="c-phone"
            name="phone"
            type="tel"
            className="form-input"
            placeholder="(555) 000-0000"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label className="stencil-label block mb-1.5" htmlFor="c-email">
            Email <span className="text-[var(--amber)]">*</span>
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            className="form-input"
            placeholder="jane@company.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-field">
          <label className="stencil-label block mb-1.5" htmlFor="c-size">Container Size</label>
          <select id="c-size" name="containerSize" className="form-input form-select" value={form.containerSize} onChange={handleChange}>
            <option value="">Select size</option>
            <option value="10ft">10FT Standard</option>
            <option value="20ft">20FT Standard</option>
            <option value="40ft">40FT Standard</option>
            <option value="40hc">40FT High Cube</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
        <div className="form-field ">
          <label className="stencil-label block mb-1.5" htmlFor="c-duration">Rental Duration</label>
          <select id="c-duration" name="rentalDuration" className="form-input form-select" value={form.rentalDuration} onChange={handleChange}>
            <option value="">Select duration</option>
            <option value="1month">1 Month</option>
            <option value="3months">3 Months</option>
            <option value="6months">6 Months</option>
            <option value="1year">1 Year</option>
            <option value="longterm">Long-term (1+ year)</option>
          </select>
        </div>
      </div> 

      <div className="form-field">
        <label className="stencil-label block mb-1.5" htmlFor="c-address">
          Delivery Address
        </label>
        <input
          id="c-address"
          name="deliveryAddress"
          type="text"
          className="form-input"
          placeholder="123 Main St, City, ST 00000"
          value={form.deliveryAddress}
          onChange={handleChange}
        />
      </div> */}

      <div className="form-field">
        <label className="stencil-label block mb-1.5" htmlFor="c-message">
          Additional Notes
        </label>
        <textarea
          id="c-message"
          name="message"
          className="form-input resize-none"
          rows={4}
          placeholder="Your enquiries"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}

      <button
        type="submit"
        className="btn-primary justify-center"
        disabled={submitting}
      >
        {submitting ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-[#1C1C1E] pt-32 pb-16">
        <div className="container">
          <FadeUp>
            <span className="stencil-label">Get in Touch</span>
            <h1
              className="text-white mt-3"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              Contact Us
            </h1>
            <p className="text-white/60 mt-3 max-w-lg text-base">
              Ready to rent, have questions, or need help choosing the right
              container? We're here.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[var(--background)] py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <FadeUp>
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Send Us a Message
                </h2>
                <ContactForm />
              </FadeUp>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-4 lg:col-start-9">
              <FadeUp delay={1}>
                <div className="flex flex-col gap-8">
                  {/* Direct contact */}
                  <div>
                    <span className="amber-rule" />
                    <h3
                      className="font-bold text-lg mb-4"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      Direct Contact
                    </h3>
                    <div className="flex flex-col gap-3">
                      <a
                        href={SITE.phoneHref}
                        className="flex items-start gap-3 text-sm hover:text-[var(--amber)] transition-colors duration-150 group"
                      >
                        <Phone
                          size={15}
                          className="mt-0.5 shrink-0 text-[var(--amber)]"
                        />
                        <div>
                          <p className="font-medium">{SITE.phone}</p>
                          <p className="text-xs text-muted-foreground">
                            Call or Whatsapp
                          </p>
                        </div>
                      </a>
                      <a
                        href={SITE.emailHref}
                        className="flex items-start gap-3 text-sm hover:text-[var(--amber)] transition-colors duration-150 group"
                      >
                        <Mail
                          size={15}
                          className="mt-0.5 shrink-0 text-[var(--amber)]"
                        />
                        <div>
                          <p className="font-medium">{SITE.email}</p>
                          <p className="text-xs text-muted-foreground">
                            We reply within 1 business day
                          </p>
                        </div>
                      </a>
                      <div className="flex items-start gap-3 text-sm">
                        <MapPin
                          size={15}
                          className="mt-0.5 shrink-0 text-[var(--amber)]"
                        />
                        <div>
                          <p className="font-medium">{SITE.address.street}</p>
                          <p className="text-muted-foreground">
                            {SITE.address.city}, {SITE.address.state}{" "}
                            {SITE.address.zip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={14} className="text-[var(--amber)]" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Business Hours
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-sm">
                      <p>{SITE.hours.weekdays}</p>
                      <p>{SITE.hours.saturday}</p>
                      <p className="text-muted-foreground">
                        {SITE.hours.sunday}
                      </p>
                    </div>
                  </div>

                  {/* Social */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Follow Us
                    </p>
                    <div className="flex items-center gap-4">
                      <a
                        href={SITE.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[var(--amber)] transition-colors duration-150"
                        aria-label="Facebook"
                      >
                        <FacebookIcon />
                      </a>
                      <a
                        href={SITE.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[var(--amber)] transition-colors duration-150"
                        aria-label="YouTube"
                      >
                        <YouTubeIcon />
                      </a>
                      <a
                        href={SITE.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[var(--amber)] transition-colors duration-150"
                        aria-label="Instagram"
                      >
                        <InstagramIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
