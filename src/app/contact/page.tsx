"use client";

import ContactContent from "@/content/contact.mdx";
import ThreeColumnLayout from "@/components/ThreeColumnLayout";

export default function Contact() {
  return (
    <ThreeColumnLayout
      center={
        <main className="p-4 max-w-2xl mx-auto">
          
          
          <div className="prose prose-lg">
            

            <ContactContent />
          </div>
        </main>
      }
     
    />
  );
}
