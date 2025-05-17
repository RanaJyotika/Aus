"use client";

import React, { useEffect, useState } from "react";
import {
  CalendarIcon,
  Share2Icon,
  FacebookIcon,
  TwitterIcon,
  TagIcon,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { Search } from "lucide-react";

type Blog = {
  title: string;
  content: string;
  tags: string[];
  images: string[];
  createdAt: string;
};

type Post = {
  id: string;
  title: string;
  imageUrl: string;
  url: string;
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

  // Dummy Posts
  const posts = [
    {
      id: 1,
      title: "Post Title 1",
      url: "#",
      imageUrl: "https://via.placeholder.com/48",
    },
    {
      id: 2,
      title: "Post Title 2",
      url: "#",
      imageUrl: "https://via.placeholder.com/48",
    },
  ];

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

  // //////////////////////////////////////////
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.6,
      },
    },
  };

  const headlineVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const underlineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const floatingShapeVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const rotatingShapeVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const pulseShapeVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.4, 0.7, 0.4],
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const randomMoveVariants = {
    animate: {
      x: [0, 10, -5, 10, 0],
      y: [0, -10, 5, -15, 0],
      transition: {
        duration: 12,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };
  // //////////////////////////////////////////

  return (
    // bg color
    <div className="bg-gradient-to-b from-blue-200 via-blue-400 to-blue-100 min-h-screen text-[#092337] relative overflow-hidden mt-10">
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
      {/* Background Shapes */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-700 opacity-10 blur-3xl"
        variants={pulseShapeVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-32 left-10 w-6 h-6 rounded-full bg-blue-700 opacity-20"
        variants={floatingShapeVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-60 right-24 w-4 h-4 rounded-full bg-blue-700 opacity-30"
        variants={randomMoveVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-40 left-20 w-32 h-32 rounded-lg bg-blue-700 opacity-15 rotate-45"
        variants={rotatingShapeVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/3 -right-40 w-64 h-64 rounded-full  bg-white opacity-20"
        variants={pulseShapeVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-20 h-20 rounded-md bg-blue-800 opacity-15 rotate-12"
        variants={floatingShapeVariants}
        animate="animate"
      />

      {/* Main content */}
      <div className="flex flex-col lg:flex-row lg:mx-15 mx-2 my-20 p-4 lg:gap-10 gap-8 ">
        {/* Left Section (Blog Content) */}
        <div className="lg:w-[65%] bg-gradient-to-br from-[#bce4f2] to-[#ffffff] relative border-zinc-200 h-full rounded-xl p-4">
          {/* Image */}
          {blog.images?.[0] && (
            <div className="relative mb-8 rounded-lg overflow-hidden group shadow-md shadow-gray-400">
              <div className="relative z-10 overflow-hidden rounded-lg">
                <img
                  src={blog.images[0]}
                  alt={blog.title}
                  className="w-full h-[25rem] lg:h-[30 rem] object-fill  transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 leading-tight tracking-wide">
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

        {/* Right Section (Sidebar) */}
        <div className="lg:w-[35%] p-4 relative">
          {/* Search Bar */}
          <div className="bg-blue-900 text-white p-4 rounded-lg mb-6">
            <label htmlFor="search" className="sr-only">
              Search blogs
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                placeholder="Search blogs..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white text-white"
              />
              <Search className="w-5 h-5 text-white absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Placeholder for Related/Latest Posts */}
          <div className="bg-gradient-to-tr from-[#bce4f2] to-[#ffffff] relative border-zinc-200 mb-6 p-5 rounded-lg">
            <h2 className="text-xl text-blue-800 font-bold mb-3">
              Recent Posts
            </h2>
            <ul className="space-y-4">
              {posts.map((post) => (
                <li key={post.id} className="transition-transform transform hover:scale-105 hover:shadow-md rounded-md">
                  <a
                    href={post.url}
                    className="flex items-center space-x-4 hover:bg-blue-200/50 p-2 rounded-lg transition"
                  >
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                    <span className="text-blue-800 font-medium">
                      {post.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Placeholder for Popular Tags */}
          <div className="bg-gradient-to-t from-[#a2d1e2] to-[#ffffff] relative border-zinc-200 mb-6 p-5 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              {/* Map your tags here */}
              {/* Example: blog.tags.map(tag => ...) */}
              <span className="bg-blue-100 text-blue-800 border border-blue-800 px-3 py-1 rounded-full text-sm transition-transform transform hover:scale-105 hover:shadow-md">
                React
              </span>
              <span className="bg-blue-100 text-blue-800 border border-blue-800 px-3 py-1 rounded-full text-sm transition-transform transform hover:scale-105 hover:shadow-md">
                Next.js
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full border border-blue-800 text-sm transition-transform transform hover:scale-105 hover:shadow-md">
                Tailwind
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-800 transition-transform transform hover:scale-105 hover:shadow-md">
                CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//  <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 leading-tight">
//           {blog.title}
//         </h1>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-8">
//           {blog.tags.map((tag, index) => (
//             <div
//               key={index}
//               className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
//             >
//               <TagIcon className="w-3 h-3 mr-1" />
//               {tag}
//             </div>
//           ))}
//         </div>

//         {/* Image */}
//         {blog.images?.[0] && (
//           <div className="relative mb-8 rounded-lg overflow-hidden group">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse rounded-lg -m-1 z-0 group-hover:animate-none transition-all duration-300" />
//             <div className="relative z-10 overflow-hidden rounded-lg">
//               <img
//                 src={blog.images[0]}
//                 alt={blog.title}
//                 className="w-full h-[25rem] object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//             </div>
//           </div>
//         )}

//         {/* Content */}
//         <div className="prose max-w-none text-[#092337] relative">
//           <div className="absolute -left-10 top-0 w-1 h-full bg-gradient-to-b from-blue-300 to-blue-100 rounded-full opacity-70" />
//           {blog.content.split("\n").map((para, index) => (
//             <p key={index} className="text-lg mb-4">
//               {para}
//             </p>
//           ))}
//         </div>
//       </div>
