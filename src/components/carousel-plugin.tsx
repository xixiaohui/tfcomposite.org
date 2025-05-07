"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import Image from 'next/image'

interface MyComponentProps {
  id: string
}

export function CarouselPlugin({ id }: MyComponentProps) {

  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  const numericId = Number(id)
  // const wrapToRange1To4 = (n: number) => {
  //   return ((n - 1) % 4 + 4) % 4 + 1
  // }
  const wrapToRange1To7 = (n: number) => {
    return ((n - 1) % 7 + 7) % 7 + 1;
  }

  const offset = 5 * (wrapToRange1To7(numericId)-1) 

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-screen-sm"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>

        
        {Array.from({ length: 5 }).map((_, index) => (
          
          <CarouselItem key={index}>
            <div className="p-1">
              
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    {/* <span className="text-4xl font-semibold">{wrapToRange1To4(numericId)}</span> */}
                    <Image
                      key={index}
                      src={`/productsImage/${ index + 1 + offset }.webp`}
                      alt="tf composite frp grating"
                      className="w-full h-auto rounded-lg mb-4"
                      width={1000}
                      height={1000}
                    />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}