"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";

export default function SignupSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/eobrie22@uwo.ca",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(e.target),
        }
      );
      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        setSubmitted(true);
        setError(null);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error(err);
      setError("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section id="signup" className="py-20 bg-[var(--color-tertiary)]">
      <div className="container mx-auto px-6">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-primary)]">
            Ready to Transform Your Classroom?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Join our Fall 2025 pilot program and experience the difference
            Dialogix can make in your teaching environment.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col md:flex-row gap-4"
          >
            {/* Keep your hidden config fields */}
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />

            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md bg-white shadow-md focus:ring-2 focus:ring-[var(--color-secondary)] text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={submitted}
              className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondaryDark)] text-white px-6 py-3 rounded-md transition-colors duration-300 whitespace-nowrap disabled:opacity-50"
            >
              {submitted ? "Sent!" : "Get Started"}
            </button>
          </form>

          {/* Success & Error Messages */}
          {submitted && (
            <p className="text-green-600 mt-4">
              Thank you! We’ll be in touch with next steps.
            </p>
          )}
          {error && <p className="text-red-600 mt-4">{error}</p>}
        </FadeIn>
      </div>
    </section>
  );
}
