"use client";

import { useState } from "react";
import { Send, Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submissionState, setSubmissionState] = useState("idle"); // idle, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Basic validation
    if (!email || !email.includes("@") || !email.includes(".")) {
      setSubmissionState("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // Simulate form submission
    setSubmissionState("loading");

    // Mock API call with timeout
    setTimeout(() => {
      setSubmissionState("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="w-full py-4 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Animated gradient background with low opacity */}
        <div className="absolute inset-0 bg-gradient-animation opacity-10"></div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-radial rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial rounded-full blur-3xl opacity-20 -translate-y-1/4 -translate-x-1/4"></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 bg-white bg-opacity-30"
          style={{
            backgroundImage: `radial-gradient(rgba(57, 164, 216, 0.1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Content container */}
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="rounded-3xl overflow-hidden shadow-glow">
          <div className="grid md:grid-cols-2">
            {/* Left column: Decorative element */}
            <div className="bg-gradient-animation p-12 text-white relative hidden md:flex flex-col justify-center">
              {/* Decorative mail icon with glow */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <Mail size={240} strokeWidth={1} />
              </div>

              <h2 className="text-3xl font-bold mb-6 relative z-10">
                Stay Ahead of the Curve
              </h2>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-white" />
                  <span>Exclusive industry insights</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-white" />
                  <span>Product updates and announcements</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-white" />
                  <span>Expert tips and best practices</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-white" />
                  <span>Special offers and event invitations</span>
                </li>
              </ul>
            </div>

            {/* Right column: Newsletter form */}
            <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
              <div className="max-w-md mx-auto w-full">
                {/* Mobile heading (shows only on mobile) */}
                <div className="md:hidden mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Stay <span className="text-gradient">Ahead</span> of the
                    Curve
                  </h2>
                  <p className="text-text-muted text-sm mb-4">
                    Join our newsletter for exclusive insights and updates
                  </p>
                </div>

                {/* Desktop heading */}
                <div className="hidden md:block">
                  <h3 className="text-2xl font-bold mb-2">
                    Subscribe to Our{" "}
                    <span className="text-gradient">Newsletter</span>
                  </h3>
                  <p className="text-text-muted mb-6">
                    Get the latest updates delivered straight to your inbox
                  </p>
                </div>

                {submissionState === "success" ? (
                  <div className="bg-success bg-opacity-10 border border-success text-success rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle size={20} />
                    <span>
                      Thank you for subscribing! Check your inbox soon.
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text-strong mb-1"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (submissionState === "error")
                              setSubmissionState("idle");
                          }}
                          placeholder="your@email.com"
                          className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all ${
                            submissionState === "error"
                              ? "border-danger focus:ring-danger/20"
                              : "border-accent-soft focus:ring-primary-500/20 focus:border-primary-500"
                          }`}
                          required
                        />
                        <Mail
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
                          size={20}
                        />
                      </div>
                      {submissionState === "error" && (
                        <p className="mt-1 text-danger text-sm flex items-center gap-1">
                          <AlertCircle size={14} />
                          <span>{errorMessage}</span>
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={submissionState === "loading"}
                        className="flex-1 bg-primary-500 hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                      >
                        {submissionState === "loading" ? (
                          <>
                            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            <span>Subscribing...</span>
                          </>
                        ) : (
                          <>
                            <span>Subscribe Now</span>
                            <Send size={18} />
                          </>
                        )}
                      </button>

                      {/* Mobile view displays benefits here */}
                      <div className="md:hidden">
                        <button
                          type="button"
                          className="w-full border border-accent-soft hover:border-primary-500 text-text-strong font-medium py-3 px-6 rounded-lg transition-all"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </form>
                )}

                <div className="mt-6 text-xs text-text-muted">
                  <p>
                    By subscribing, you agree to our{" "}
                    <a href="#" className="text-primary-500 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary-500 hover:underline">
                      Terms of Service
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Frequency note */}
        <div className="text-center mt-6 text-sm text-text-muted">
          <p>
            We send newsletters twice a month. No spam, just valuable content.
          </p>
        </div>
      </div>
    </section>
  );
}
