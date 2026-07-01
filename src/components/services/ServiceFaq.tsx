import React from "react";
import { Accordion } from "@/components/ui/Accordion";

export function ServiceFaq({ slug }: { slug: string }) {
  const faqs = [
    {
      title: "How long does the process take?",
      desc: "Timelines vary depending on the scope of the project, but typical engagements range from 4-8 weeks.",
      items: []
    },
    {
      title: "Do you offer ongoing support?",
      desc: "Yes, we provide ongoing maintenance and support packages to ensure your systems run smoothly.",
      items: []
    },
    {
      title: "What is your pricing structure?",
      desc: "We offer customized pricing based on the value and scope of the engagement. We provide transparent estimates after our initial strategy call.",
      items: []
    }
  ];

  return (
    <div className="w-full">
      <Accordion items={faqs} />
    </div>
  );
}
