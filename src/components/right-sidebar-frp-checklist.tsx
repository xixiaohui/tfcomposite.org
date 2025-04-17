'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FRPQuoteChecklist() {
  return (
    <Card className="w-full max-w-2xl mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">
          📋 FRP Grating Request Quote Checklist
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Accordion type="multiple" className="space-y-2">
          <AccordionItem value="type">
            <AccordionTrigger>🧱 Product Type</AccordionTrigger>
            <AccordionContent>
              Molded / Pultruded / Mini Mesh, etc.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="size">
            <AccordionTrigger>📐 Size & Mesh</AccordionTrigger>
            <AccordionContent>
              e.g. 1220×3660×38mm, mesh: 38×38mm
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="surface">
            <AccordionTrigger>✨ Surface</AccordionTrigger>
            <AccordionContent>
              Gritted, smooth, concave
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="color">
            <AccordionTrigger>🎨 Color</AccordionTrigger>
            <AccordionContent>
              Yellow / Gray / Green / RAL #
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="load">
            <AccordionTrigger>🏋️ Load</AccordionTrigger>
            <AccordionContent>
              Pedestrian / Vehicle / Heavy load
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="quantity">
            <AccordionTrigger>🔢 Quantity</AccordionTrigger>
            <AccordionContent>
              e.g. 200 pcs
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="accessories">
            <AccordionTrigger>🔩 Accessories</AccordionTrigger>
            <AccordionContent>
              M clips / L clips / Bolts
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="delivery">
            <AccordionTrigger>🚢 Delivery</AccordionTrigger>
            <AccordionContent>
              e.g. CIF Singapore, 4 weeks
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="extra">
            <AccordionTrigger>📝 Notes</AccordionTrigger>
            <AccordionContent>
              TDS, certifications, custom packing
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
