// app/api/products/[id]/route.ts
import { getCardById } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const card = await getCardById(params.id);
  if (!card) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(card);
}
