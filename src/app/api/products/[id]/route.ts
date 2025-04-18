/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/api/products/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getCardById } from '@/lib/data'

export async function GET(
  request: NextRequest,
  context: any // ✅ 用 any 类型避免 Vercel 报错
) {
  const id = context.params.id

  const card = getCardById(id)

  if (!card) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json(card)
}
