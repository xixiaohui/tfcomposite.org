/* eslint-disable @next/next/no-img-element */
// app/cards/[id]/page.tsx

import { notFound } from "next/navigation";
import { getCardById, getAllCardIds } from "@/lib/data";
import ThreeColumnLayout from "@/components/ThreeColumnLayout";
import { Card } from "@/components/ui/card";

import RightSidebarFRPChecklist from "@/components/right-sidebar-frp-checklist";


type Props = {
  params: {
    id: string;
  };
};

// eslint-disable-next-line @next/next/no-async-client-component
export default async function CardDetailPage({ params }: Props) {
  const card = await getCardById(params.id);

  if (!card) return notFound();

  return (
    <ThreeColumnLayout
      //   left={
      //     <Card className="p-4">
      //       <h2 className="text-lg font-semibold">左栏内容</h2>
      //       <p className="text-sm text-muted-foreground">菜单、个人资料等</p>
      //     </Card>
      //   }
      center={
        <main className="p-4 max-w-2xl mx-auto">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-auto rounded-md mb-4"
          />
          <h1 className="text-2xl font-bold mb-4">{card.title}</h1>
          <p className="text-base text-gray-700">{card.content}</p>
        </main>
      }
      right={
        <Card className="p-4">
          <RightSidebarFRPChecklist />

          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="mailto:info@tfcomposite.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request Quote
          </a>
        </Card>
      }
    />
  );
}

// ✅ 支持静态路径构建
export async function generateStaticParams() {
  const ids = await getAllCardIds();
  return ids.map((item) => ({ id: item.id }));
}
