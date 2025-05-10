"use client";

import PrivacyContent from "@/content/privacy.mdx";
import ThreeColumnLayout from "@/components/ThreeColumnLayout";

export default function About() {
  return (
    <ThreeColumnLayout
      center={
        <main className="p-4 max-w-2xl mx-auto">
          
          
          <div className="prose prose-lg">
            

            <PrivacyContent />
          </div>
        </main>
      }
     
    />
  );
}