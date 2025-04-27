import { NextRequest, NextResponse } from 'next/server'
import { getCardById } from '@/lib/data'

// 自定义 ParamsContext
interface ParamsContext {
  params: Promise<{ id: string }>
}

export async function GET(
  req: NextRequest,
  context: ParamsContext
) {
  const { id } = await context.params // 异步等待 params

  const card = await getCardById(id)

  if (!card) {
    return NextResponse.json({ error: 'Not Found' }, { status: 404 })
  }

  return NextResponse.json(card)
}
