"use client";

export default function VideoGrid({ videos }: { videos: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((src, index) => (
        <video
          key={index}
          controls
          className="w-full h-60 object-cover rounded-lg shadow-md"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
}
