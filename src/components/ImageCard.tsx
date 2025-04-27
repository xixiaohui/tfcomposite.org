/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { items } from "@/lib/data"


export default function CardDialogPage() {
  const [data, setData] = useState<typeof items | null>(null);

  useEffect(() => {
    setTimeout(() => setData(items), 100); // 模拟加载
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        FRP Moulded Grating Manufacturer
      </h1>
      <h2 className="text-xl font-bold mb-4 text-center">
        Anhui Tianfu New Material co., Ltd
      </h2>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data
          ? data.map((item) => (
              <Link key={item.id} href={`/products/${item.id}`}>
                <Card
                  key={item.id}
                  className="hover:cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover rounded-t-md"
                  />
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.content.slice(0, 30)}...</p>
                  </CardContent>
                </Card>
              </Link>
            ))
          : Array.from({ length: 3 }).map((_, i) => (
              <Card key={i}>
                <Skeleton className="w-full h-[150px] rounded-t-md" />
                <CardHeader>
                  <Skeleton className="w-1/2 h-5" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="w-full h-4 mb-2" />
                  <Skeleton className="w-3/4 h-4" />
                </CardContent>
              </Card>
            ))}
      </div>
    </main>
  );
}
