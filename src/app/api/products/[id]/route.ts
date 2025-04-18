// app/api/products/[id]/route.ts
import { getCardById } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params; // ✅ Proper way to access params
  const card = await getCardById(id);

  if (!card) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(card);
}