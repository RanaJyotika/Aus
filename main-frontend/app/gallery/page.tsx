// "use client";

// import Footer from "@/components/LandingComps/Footer";
// import Navbar from "@/components/LandingComps/Navbar";
// import React, { useEffect, useState } from "react";
// import { ParallaxScroll } from "../../components/ui/parallax-scroll";

// const page = () => {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [isLoaded, setIsLoaded] = useState(false);

//   // const galleryItems = [
//   //   {
//   //     id: 1,
//   //     title: "Project Alpha",
//   //     category: "design",
//   //     image: "/api/placeholder/600/400",
//   //     description: "Modern UI design exploration",
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Brand Evolution",
//   //     category: "branding",
//   //     image: "/api/placeholder/600/400",
//   //     description: "Corporate identity redesign",
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "Mobile Application",
//   //     category: "development",
//   //     image: "/api/placeholder/600/400",
//   //     description: "iOS app development",
//   //   },
//   //   {
//   //     id: 4,
//   //     title: "E-commerce Platform",
//   //     category: "development",
//   //     image: "/api/placeholder/600/400",
//   //     description: "Full-stack shopping solution",
//   //   },
//   //   {
//   //     id: 5,
//   //     title: "Brand Guidelines",
//   //     category: "branding",
//   //     image: "/api/placeholder/600/400",
//   //     description: "Style guide and assets",
//   //   },
//   //   {
//   //     id: 6,
//   //     title: "Website Redesign",
//   //     category: "design",
//   //     image: "/api/placeholder/600/400",
//   //     description: "Full UX/UI overhaul",
//   //   },
//   // ];

//   // Animation on mount

//   // useEffect(() => {
//   //   setIsLoaded(true);
//   // }, []);

//   // // Filter gallery items
//   // const filteredItems =
//   //   activeFilter === "all"
//   //     ? galleryItems
//   //     : galleryItems.filter((item) => item.category === activeFilter);

//   const images = [
//     "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//     "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//     "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//     "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//     "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//     "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//     "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//     "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//     "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//     "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
//     "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//     "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//     "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//     "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//     "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//     "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//     "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//     "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//     "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//     "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//     "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//     "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//     "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//     "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//     "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//   ];

//   return (
//     <>
//       <Navbar />
//       <section className="relative py-20 px-6 overflow-hidden">
//         {/* Background decorative elements */}
//         <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 bg-gradient-radial -translate-x-1/2 -translate-y-1/2"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 bg-gradient-radial translate-x-1/3 translate-y-1/3"></div>
//         <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full opacity-10 bg-gradient-animation"></div>

//         {/* SVG decorative shapes */}
//         <svg
//           className="absolute top-10 right-10 w-32 h-32 text-primary-500 opacity-5"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="currentColor"
//             d="M42.7,-57.2C56.1,-45.7,68.1,-32.5,73.2,-16.9C78.3,-1.3,76.5,16.8,69,32C61.4,47.2,48,59.6,32.7,65.3C17.4,71.1,0.1,70.3,-16.9,66.8C-33.8,63.4,-50.5,57.4,-62.3,45.3C-74.1,33.2,-81.1,15.1,-79.5,-1.6C-78,-18.3,-67.9,-33.6,-55.1,-45.2C-42.2,-56.8,-26.6,-64.8,-10.8,-64C5,-63.3,29.3,-68.8,42.7,-57.2Z"
//             transform="translate(100 100)"
//           />
//         </svg>
//         <svg
//           className="absolute bottom-20 left-10 w-24 h-24 text-primary-dark opacity-5"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="currentColor"
//             d="M45.3,-51.2C59.2,-35.9,71.3,-18,73.4,2.1C75.4,22.2,67.4,44.5,53.5,57.9C39.7,71.4,19.8,76.1,0.9,75.2C-18.1,74.3,-36.1,67.8,-53.2,54.4C-70.2,41,-86.2,20.5,-88.4,-1.2C-90.5,-23,-78.7,-46,-62.1,-61.3C-45.5,-76.6,-22.7,-84.1,-2.7,-81.2C17.4,-78.2,31.4,-66.5,45.3,-51.2Z"
//             transform="translate(100 100)"
//           />
//         </svg>

//         <div className="container mx-auto max-w-6xl relative z-10">
//           {/* Section heading */}
//           <div className="text-center mb-12">
//             <h2
//               className="text-4xl md:text-5xl font-bold mb-4"
//               style={{ color: "var(--color-primary-dark)" }}
//             >
//               Our <span className="text-gradient">Gallery</span>
//             </h2>
//             <p
//               className="text-lg max-w-xl mx-auto"
//               style={{ color: "var(--color-text-muted)" }}
//             >
//               Explore our latest works and creative projects showcasing our
//               expertise and innovation
//             </p>
//           </div>
//           {/* Images */}
//           <ParallaxScroll images={images} />;
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default page;

// {
//   /* Filter tabs */
// }
// {
//   /* <div className="flex flex-wrap justify-center mb-10 gap-2">
//       {["all", "design", "development", "branding"].map((filter) => (
//         <button
//           key={filter}
//           onClick={() => setActiveFilter(filter)}
//           className={`px-6 py-2 rounded-full transition-all duration-300 ${
//             activeFilter === filter
//               ? "shadow-glow font-medium"
//               : "hover:bg-white"
//           }`}
//           style={{
//             backgroundColor:
//               activeFilter === filter
//                 ? "var(--color-primary-500)"
//                 : "var(--color-accent-soft)",
//             color:
//               activeFilter === filter
//                 ? "var(--color-white)"
//                 : "var(--color-text-strong)",
//           }}
//         >
//           {filter.charAt(0).toUpperCase() + filter.slice(1)}
//         </button>
//       ))}
//     </div> */
// }

// {
//   /* Gallery grid */
// }
// {
//   /* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {filteredItems.map((item) => (
//         <div
//           key={item.id}
//           className={`bg-white rounded-lg overflow-hidden transform transition-all duration-500 shadow hover:shadow-glow ${
//             isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
//           }`}
//           style={{
//             transitionDelay: `${item.id * 100}ms`,
//             borderColor: "var(--color-accent-soft)",
//             borderWidth: "1px",
//           }}
//         >
//           <div className="relative overflow-hidden group">
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//               <span className="text-white text-sm uppercase tracking-wider">
//                 {item.category}
//               </span>
//             </div>
//           </div>
//           <div className="p-6">
//             <h3
//               className="text-xl font-bold mb-2"
//               style={{ color: "var(--color-primary-dark)" }}
//             >
//               {item.title}
//             </h3>
//             <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
//               {item.description}
//             </p>
//             <div className="mt-4">
//               <a
//                 href="#"
//                 className="inline-flex items-center text-sm font-medium transition-all duration-300"
//                 style={{ color: "var(--color-primary-500)" }}
//               >
//                 View Project
//                 <svg
//                   className="w-4 h-4 ml-1 transform translate-x-0 transition-transform group-hover:translate-x-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M14 5l7 7m0 0l-7 7m7-7H3"
//                   ></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div> */
// }

// {
//   /* View More button */
// }
// {
//   /* <div className="text-center mt-16">
//       <button
//         className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-glow"
//         style={{
//           background:
//             "linear-gradient(90deg, var(--gradient-blue-start), var(--gradient-blue-end))",
//           color: "var(--color-white)",
//         }}
//       >
//         View More Projects
//       </button>
//     </div> */
// }

"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Footer from "@/components/LandingComps/Footer";
import Navbar from "@/components/LandingComps/Navbar";

const ImageGrid = ({
  images,
  onImageClick,
}: {
  images: string[];
  onImageClick?: (src: string) => void;
}) => (
  <div className="grid grid-cols-4 gap-4 mb-16">
    {images.map((src, index) => (
      <img
        key={index}
        src={src}
        alt="gallery"
        onClick={() => onImageClick?.(src)}
        className="h-20 md:h-44 lg:h-60 w-full rounded-lg object-cover cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
      />
    ))}
  </div>
);

export default function TimelineDemo() {
  const commonImages = [
    "https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/children-play-nature-kids-free-run-shut.jpg",
    "https://i.pinimg.com/474x/a1/71/b7/a171b70d08e23407122eecef27d6a01d.jpg",
    "https://st2.depositphotos.com/3243153/8048/i/950/depositphotos_80482382-stock-photo-kids-playing-in-a-park.jpg",
  ];

  const data = [
    {
      title: "Marathon 2025",
      content: <ImageGrid images={Array(16).fill(commonImages[0])} />,
    },
    {
      title: "Picnic 2024",
      content: <ImageGrid images={Array(16).fill(commonImages[1])} />,
    },
    {
      title: "Contest 2023",
      content: <ImageGrid images={Array(16).fill(commonImages[2])} />,
    },
  ];

  return (
    <div className="relative w-full overflow-clip mt-16">
      <Navbar />
      <section className="relative py-10 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 bg-gradient-radial -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 bg-gradient-radial translate-x-1/3 translate-y-1/3"></div>

        <svg
          className="absolute top-10 right-10 w-32 h-32 text-primary-500 opacity-5"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M42.7,-57.2C56.1,-45.7,68.1,-32.5,73.2,-16.9C78.3,-1.3,76.5,16.8,69,32C61.4,47.2,48,59.6,32.7,65.3C17.4,71.1,0.1,70.3,-16.9,66.8C-33.8,63.4,-50.5,57.4,-62.3,45.3C-74.1,33.2,-81.1,15.1,-79.5,-1.6C-78,-18.3,-67.9,-33.6,-55.1,-45.2C-42.2,-56.8,-26.6,-64.8,-10.8,-64C5,-63.3,29.3,-68.8,42.7,-57.2Z"
            transform="translate(100 100)"
          />
        </svg>

        <div className="container mx-auto max-w-9xl relative z-10">
          <div className="text-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--color-primary-dark)" }}
            >
              Our <span className="text-gradient">Gallery</span>
            </h2>
            <p
              className="text-lg max-w-xl mx-auto mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              Explore our latest works and creative projects showcasing our
              expertise and innovation
            </p>
          </div>
          <Timeline data={data} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
