'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'

type FormData = {
  productType: string
  size: string
  quantity: string
  mesh: string
  surface: string
  color: string
  load: string
  accessories: string
  delivery: string
  deliveryTime: string
  notes: string
}

export default function FRPRequestForm() {
  const { register, handleSubmit } = useForm<FormData>()
  const [quote, setQuote] = useState<string | null>(null)

  const onSubmit = (data: FormData) => {
    const generated = `
Dear [Supplier Name],

We are looking to purchase FRP Gratings 
with the following specifications:

- Type: ${data.productType}
- Size: ${data.size}
- Mesh: ${data.mesh}
- Quantity: ${data.quantity}
- Surface: ${data.surface}
- Color: ${data.color}
- Load: ${data.load}
- Accessories: ${data.accessories}
- Delivery: ${data.delivery}
- Delivery time: ${data.deliveryTime}

${data.notes ? `Additional Notes:\n${data.notes}\n` : ""}

Please send us your best quotation with TDS and product photos. 
Looking forward to your reply.

Best regards,  
[Your Name / Company]
    `.trim()

    setQuote(generated)
  }

  return (
    <div className="max-w-3xl mx-auto py-12 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-4">🧾 FRP Grating Inquiry generator</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Card>
          <CardContent className="space-y-4 p-4">
            <div>
              <Label>Product Type</Label>
              <Input placeholder="e.g. Molded FRP Grating" {...register("productType")} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Size (L×W×H)</Label>
                <Input placeholder="e.g. 1220×3660×38mm" {...register("size")} />
              </div>
              <div>
                <Label>Mesh Size</Label>
                <Input placeholder="e.g. 38×38mm" {...register("mesh")} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Quantity</Label>
                <Input placeholder="e.g. 200 pieces" {...register("quantity")} />
              </div>
              <div>
                <Label>Surface</Label>
                <Input placeholder="e.g. Gritted anti-slip" {...register("surface")} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Color</Label>
                <Input placeholder="e.g. Yellow" {...register("color")} />
              </div>
              <div>
                <Label>Load Type</Label>
                <Input placeholder="e.g. Medium load (pedestrian)" {...register("load")} />
              </div>
            </div>

            <div>
              <Label>Accessories</Label>
              <Input placeholder="e.g. M-type clips, bolts" {...register("accessories")} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Delivery Terms</Label>
                <Input placeholder="e.g. CIF Singapore" {...register("delivery")} />
              </div>
              <div>
                <Label>Delivery Time</Label>
                <Input placeholder="e.g. Within 4 weeks" {...register("deliveryTime")} />
              </div>
            </div>

            <div>
              <Label>Additional Notes</Label>
              <Textarea placeholder="e.g. Please include TDS and test reports" {...register("notes")} />
            </div>

            <Button type="submit" className="w-full mt-4">
              ✉️ Generate English inquiry content
            </Button>
          </CardContent>
        </Card>
      </form>

      {quote && (
        <Card>
          <CardContent className="p-4 whitespace-pre-wrap">
            <h2 className="text-xl font-semibold mb-2">📄 Generated email content：</h2>
            <pre className="text-sm bg-muted p-4 rounded">{quote}</pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
