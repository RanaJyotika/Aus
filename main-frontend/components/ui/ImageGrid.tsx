"use client";

export default function ImageGrid({
  images,
  onImageClick,
}: {
  images: string[];
  onImageClick?: (src: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="Gallery"
          onClick={() => onImageClick?.(src)}
          className="cursor-pointer h-44 w-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
        />
      ))}
    </div>
  );
}
