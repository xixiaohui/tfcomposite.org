export default function YouTubeEmbed({ videoId }: { videoId: string }) {
    return (
      <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg my-6">
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    )
  }
  
