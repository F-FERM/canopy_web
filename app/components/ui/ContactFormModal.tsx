"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { toast } from "sonner";

import { createContactFormApi } from "@/app/api/web/ContactLanding";
import Button from "./Button";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

export default function ContactFormModal({
  isOpen,
  onClose,
}: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  // ───── Lock body scroll when open ─────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ───── Close on Escape ─────
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // ───── Input handler ─────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ───── Submit handler ─────
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      await createContactFormApi({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      toast.success("Message sent successfully!");

      setFormData({ name: "", email: "", subject: "", message: "" });
      onClose();
    } catch (error) {
      console.error("Contact Form Modal Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ───── Input field base class ─────
  const inputBase = `
    w-full
    h-[52px]
    rounded-[10px]
    border border-[#E3E3E3]
    px-4
    bg-white
    outline-none
    text-[15px]
    text-[#111111]
    placeholder:text-[#C6C6C6]
    focus:border-[#F26A23]
    transition-all
  `;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* ── Modal Panel ── */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              px-4
              py-8
              pointer-events-none
            "
          >
            <div
              className="
                relative
                bg-white
                rounded-[20px]
                shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                w-full
                max-w-[560px]
                max-h-[90vh]
                overflow-y-auto
                pointer-events-auto
                px-6
                sm:px-10
                py-8
                sm:py-10
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close contact form"
                className="
                  absolute
                  top-4
                  right-4
                  w-9 h-9
                  flex items-center justify-center
                  rounded-full
                  bg-gray-100
                  hover:bg-gray-200
                  text-[#555]
                  transition-all duration-200
                  active:scale-90
                "
              >
                <X size={18} strokeWidth={2.2} />
              </button>

              {/* Header */}
              <div className="mb-7">
                <span className="
                  inline-block
                  text-[12px]
                  font-semibold
                  tracking-[0.12em]
                  uppercase
                  text-[#F26A23]
                  mb-2
                ">
                  Request A Quote
                </span>
                <h2
                  id="contact-modal-title"
                  className="
                    text-[26px]
                    sm:text-[30px]
                    font-semibold
                    leading-[110%]
                    tracking-[-0.02em]
                    text-[#111111]
                  "
                >
                  Get In Touch
                </h2>
                <p className="mt-2 text-[14px] text-[#777] leading-relaxed">
                  Fill out the form below and our team will get back to you shortly.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-[14px] font-medium text-[#111111] mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name..."
                    required
                    className={inputBase}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[14px] font-medium text-[#111111] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                    className={inputBase}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[14px] font-medium text-[#111111] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Title..."
                    required
                    className={inputBase}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[14px] font-medium text-[#111111] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type Here..."
                    required
                    className="
                      w-full
                      h-[120px]
                      rounded-[10px]
                      border border-[#E3E3E3]
                      p-4
                      bg-white
                      outline-none
                      resize-none
                      text-[15px]
                      text-[#111111]
                      placeholder:text-[#C6C6C6]
                      focus:border-[#F26A23]
                      transition-all
                    "
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={submitting}
                    label={submitting ? "Sending..." : "Send Message"}
                    variant="primary"
                    className="
                      w-full
                      h-[52px]
                      rounded-[10px]
                      bg-[#F26A23]
                      hover:bg-[#df5f1d]
                      text-white
                      text-[16px]
                      font-semibold
                      transition-all
                      duration-300
                    "
                  />
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
