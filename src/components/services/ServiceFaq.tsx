import React from "react";
import { Accordion } from "@/components/ui/Accordion";

export function ServiceFaq({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const accordionItems = faqs.map(faq => ({
    title: faq.question,
    desc: faq.answer,
    items: []
  }));

  return (
    <div className="w-full">
      <Accordion items={accordionItems} />
    </div>
  );
}
