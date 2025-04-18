"use client"

import dynamic from 'next/dynamic';

// 动态导入 Client 组件
const CardDetailClient = dynamic(() => import('@/components/CardDetailClient'), {
  ssr: false,
});

export default function Page() {
  return <CardDetailClient />;
}
