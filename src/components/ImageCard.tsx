/* eslint-disable @next/next/no-img-element */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ImageCard() {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>MOULDED GRATING</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src="/images/1.webp"
          alt=""
          className="w-full h-auto rounded-lg shadow"
        />
      </CardContent>
    </Card>
  );
}
