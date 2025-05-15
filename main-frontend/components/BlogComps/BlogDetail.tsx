"use client";

import React, { useEffect, useState } from "react";
import {
  CalendarIcon,
  Share2Icon,
  FacebookIcon,
  TwitterIcon,
  TagIcon,
} from "lucide-react";

type Blog = {
  title: string;
  content: string;
  tags: string[];
  images: string[];
  createdAt: string;
};

export default function BlogDetail({ blog }: { blog: Blog }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const shapes = [
    {
      top: "5%",
      left: "10%",
      size: "w-32 h-32",
      opacity: "opacity-10",
      type: "circle",
    },
    {
      top: "15%",
      right: "5%",
      size: "w-40 h-40",
      opacity: "opacity-5",
      type: "square",
    },
    {
      top: "70%",
      left: "5%",
      size: "w-24 h-24",
      opacity: "opacity-20",
      type: "circle",
    },
    {
      top: "60%",
      right: "10%",
      size: "w-48 h-48",
      opacity: "opacity-10",
      type: "square",
    },
    {
      top: "40%",
      left: "25%",
      size: "w-36 h-36",
      opacity: "opacity-5",
      type: "circle",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen text-[#092337] relative overflow-hidden mt-10">
      {/* Background animated blob */}
      <div
        className="absolute w-96 h-96 rounded-full bg-blue-200 opacity-20 blur-3xl"
        style={{
          left: `${mousePosition.x / 20}px`,
          top: `${mousePosition.y / 20}px`,
          transition: "left 3s ease-out, top 3s ease-out",
        }}
      />

      {/* Static decorative shapes */}
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`absolute ${shape.size} ${shape.opacity} blur-lg`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            backgroundColor: shape.type === "circle" ? "#3fb5dd" : "#092337",
            borderRadius: shape.type === "circle" ? "50%" : "15%",
          }}
        />
      ))}

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#3fb5dd] mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {blog.tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              <TagIcon className="w-3 h-3 mr-1" />
              {tag}
            </div>
          ))}
        </div>

        {/* Image */}
        {blog.images?.[0] && (
          <div className="relative mb-8 rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse rounded-lg -m-1 z-0 group-hover:animate-none transition-all duration-300" />
            <div className="relative z-10 overflow-hidden rounded-lg">
              <img
                src={blog.images[0]}
                alt={blog.title}
                className="w-full h-[25rem] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="prose max-w-none text-[#092337] relative">
          <div className="absolute -left-10 top-0 w-1 h-full bg-gradient-to-b from-blue-300 to-blue-100 rounded-full opacity-70" />
          {blog.content.split("\n").map((para, index) => (
            <p key={index} className="text-lg mb-4">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
