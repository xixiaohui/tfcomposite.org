

import CardDetailClient from "@/components/CardDetailClient"



export default async function ProductPage({ params }: { params: { id: string } }) {

  const { id } = await params
  
  return (
    <div>
      <CardDetailClient product_id = {id} />

      
    </div>
    
  );
}
