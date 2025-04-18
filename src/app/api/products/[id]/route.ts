// src/app/api/products/[id]/route.ts
import { getCardById } from '@/lib/data'
import { NextRequest, NextResponse } from 'next/server'


type Params = {
  params: {
    id: string
  }
}

export async function GET(
  request: NextRequest,
  context: Params
){
  const { id } = await context.params
  const card = getCardById(id)

  if (!card) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json(card)
}
