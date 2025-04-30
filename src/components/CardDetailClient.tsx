/* eslint-disable @next/next/no-img-element */
// components/CardDetailClient.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ThreeColumnLayout from "@/components/ThreeColumnLayout";
import { Card } from "@/components/ui/card";
import RightSidebarFRPChecklist from "@/components/right-sidebar-frp-checklist";
import Link from "next/link";

import Fiberglass from "@/content/products/frp-grating.mdx";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { useMDXComponents } from "@/mdx-components";
import WhatsAppQRCode from "@/components/WhatsAppQRCode"

import {CarouselPlugin} from "@/components/carousel-plugin"

import Image from 'next/image'
import Script from 'next/script';

interface CardData {
  id: string;
  title: string;
  content: string;
  image: string;
}

// 声明 window 方法（方式 2）
declare global {
  interface Window {
    gtag_report_conversion: (url: string) => void;
  }
}


export default function CardDetailClient() {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );

  const params = useParams();
  const { id } = params as { id: string };
  const [card, setCard] = useState<CardData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/products/${id}`);
      if (!res.ok) return;
      const data = await res.json();
      setCard(data);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchMdx() {
      const res = await fetch(`/api/mdx/${id}`);
      const data = await res.json();
      if (data?.mdxSource?.compiledSource) {
        setMdxSource(data.mdxSource);
      }
    }
    fetchMdx();
  }, [id]);

  const handleClick = () => {
    // 你可以选择添加一个跳转链接，例如：
    const targetUrl = 'mailto:someone@example.com';
    window.gtag_report_conversion(targetUrl);
  };

  if (!card) return <div className="p-4 text-center">Loading...</div>;

  if (!mdxSource) return <div className="p-4 text-center">Loading...</div>;

  return (
    <ThreeColumnLayout
      center={
        <main className="p-4 max-w-2xl mx-auto">
          <div className="w-2/3 mx-auto mb-7">
            <CarouselPlugin id={id}/>
          </div>

          <Image
            src={card.image}
            alt={card.title}
            className="w-full h-auto rounded-lg mb-4"
            width={1240}
            height={1770}
          />
          {/* <h1 className="text-2xl font-bold mb-4">{card.title}</h1> */}
          {/* <p className="text-base text-gray-700">{card.content}</p> */}


          
          <div className="prose prose-lg">
            <MDXRemote {...mdxSource} components={useMDXComponents} />

            <Fiberglass />
          </div>
        </main>
      }
      right={

        <Card className="p-4">
          <RightSidebarFRPChecklist />
          
          {/* 注入脚本代码（只加载一次） */}
          <Script id="gtag-conversion" strategy="afterInteractive">
            {`
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-16665079521/u_M5CJbj5MgZEOHdw4o-',
                  'event_callback': callback
                });
                return false;
              }
            `}
          </Script>
          
          <Link
            onClick={handleClick}
            href="mailto:sales@tfcomposite.com"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
              Request Quote
          </Link>

          <div className="max-w-md mx-auto mt-10">
            <WhatsAppQRCode />
          </div>
        </Card>
      }
    />
  );
}
