"use client";

import React, { useState } from "react";
import GetInTouchSection from "@/app/sections/contact/GetInTouchSection";
import ContactInfoSection from "@/app/sections/contact/ContactInfoSection";
import ContactFormSection from "@/app/sections/contact/ContactFormSection";
import ContactFormModal from "@/app/components/ui/ContactFormModal";

const Page = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
      <GetInTouchSection onRequestQuote={() => setQuoteModalOpen(true)} />
      <ContactInfoSection />
      <ContactFormSection />

      <ContactFormModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
};

export default Page;
