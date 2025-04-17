import ImageCard from "@/components/ImageCard";

export default function Home() {
  return (
    <div className="grid grid-cols-6 gap-4">
        
        <div className="col-span-6 md:col-span-6 lg:col-span-4 col-start-1 md:col-start-1 lg:col-start-2">
            
          
          <ImageCard />


        </div>
    </div>
  );
}
