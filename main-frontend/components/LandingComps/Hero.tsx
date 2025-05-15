"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

import  TestimonialCard from "./TestimonialCards";

// const products = [
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
//   {
//     name: "Sarah Thompson",
//     review:
//       "This childcare service has been life-changing. My son loves the staff, and I feel confident in the education he's receiving.",
//     rating: 5,
//     date: "2024-12-20T09:00:00Z",
//   },
// ];


type Testimonial = {
  _id: string;
  name: string;
  message: string;
  photo: string;
  createdAt: string;
};


export default function Hero() {
  const [alltestimonials, setAllTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  // const firstRow = products.slice(0, 5);
  // const secondRow = products.slice(6, 11);
  // const thirdRow = products.slice(12, 17);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // ✅ Reduced from 1000 to 300
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0.1, 0.2], [0.4, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 300]),
    springConfig
  );




  
    useEffect(() => {
      const fetchTestimonials = async () => {
        try {
          const res = await fetch("http://localhost:5000/api/testimonials", );
          if (!res.ok) throw new Error("Failed to fetch");
          const data = await res.json();
          setAllTestimonials(data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTestimonials();
    }, []);
  


  return (
    <section
      ref={ref}
      className="relative w-full h-[60vh]  md:h-[200vh] overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full bg-[var(--color-background)] opacity-20 z-10 " />

      {/* Parallax Background */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=" hidden md:block  absolute top-[60%] md:top-[20%] left-[5%] w-[100%] pt-20 px-4 z-0 [perspective:1000px] [transform-style:preserve-3d]"
      >
        <motion.div
          className="flex flex-row-reverse space-x-reverse space-x-10 mb-10"
          animate={{ x: ["0%", "-20%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {loading ? (
            <p className="text-center text-gray-500">Loading testimonials...</p>
          ) : alltestimonials.length === 0 ? (
            <p className="text-center text-gray-500">
              No testimonials available.
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
              {alltestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial._id}
                  testimonial={{
                    name: testimonial.name,
                    review: testimonial.message,
                    rating: 5, // static or derive from data if available
                    date: testimonial.createdAt,
                    avatar: testimonial.photo,
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* <motion.div
          className="flex flex-row space-x-10 mb-10"
          animate={{ x: ["0%", "-20%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {secondRow.map((product) => (
            // <ProductCard
            //   product={product}
            //   translate={translateXReverse}
            //   key={product.title}
            <TestimonialCard testimonial={product} key={product.name} />
            // />
          ))}
        </motion.div>

        <motion.div
          className="flex flex-row-reverse space-x-reverse space-x-10"
          animate={{ x: ["0%", "-20%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {thirdRow.map((product) => (
            <TestimonialCard testimonial={product} key={product.name} />
          ))}
        </motion.div> */}
      </motion.div>

      <div className="relative z-5 flex top-55 flex-col items-center px-5">
        {/* Lamp Layer */}
        <div className="absolute top-1/3 w-full h-[57%] scale-y-125 flex items-center justify-center isolate z-10">
          <motion.div
            initial={{ width: "10rem" }}
            whileInView={{ width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className=" block md:hidden absolute inset-auto z-30 h-36 w-[30rem] -translate-y-[6rem] rounded-full bg-[var(--color-primary-500)] opacity-60 blur-2xl"
          />
          <motion.div
            initial={{ width: "20rem" }}
            whileInView={{ width: "45rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-auto z-50 h-[3px] rounded-xl w-[45rem] -translate-y-[7rem] bg-[var(--color-primary-500)]"
          />
          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[var(--color-background)]" />
        </div>

        {/* Desktop Hero Content */}
        <div className="hidden  absolute top-[40%] left-0 w-full z-50 md:flex flex-col items-center px-5 text-center">
          <motion.div
            className="px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl text-start font-bold leading-tight "
            >
              <span className="text-gradient pl-22">NURTURE</span>
              <span className="relative inline-block ml-8">
                <span className="absolute -top-2 -left-2 rotate-2 px-2 py-1 font-bold z-0 bg-[var(--gradient-blue-start)] text-white shadow-glow ">
                  CHILDCARE
                </span>
                <span className="invisible">Digital</span>
              </span>
              <br />
              <span className="text-gradient"> AND EDUCATION SERVICES.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="mt-6 text-3xl mx-auto text-[var(--color-primary-dark)]"
            >
              A Community of Passionate Family Day Care Educators and Learners
            </motion.p>

            <motion.a
              href="/template"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "var(--color-accent-hover)",
              }}
              transition={{ duration: 0.3 }}
              className="mt-10 inline-block px-8 py-3 rounded-full font-semibold text-lg shadow-glow"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary-500), var(--color-accent-hover))",
                color: "var(--color-white)",
              }}
            >
              Explore ↗
            </motion.a>
          </motion.div>
        </div>

        {/* Mobile View  */}
        <div className=" md:hidden absolute -top-26 left-0 w-full z-50 flex flex-col items-center px-4 sm:px-5 text-center">
          <motion.div
            className="w-full max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-5xl md:text-7xl font-bold leading-snug sm:leading-tight text-center sm:text-start   "
            >
              <span className="text-gradient mr-16 ">NURTURE</span>
              <span className="relative inline-block ml-3 sm:ml-8">
                <span className="absolute -top-7 -left-18 -rotate-2 px-1.5 sm:px-2 py-0.5 sm:py-1 font-bold z-0 bg-[var(--color-primary-dark)] text-white shadow-glow text-xl sm:text-base">
                  CHILDCARE
                </span>
              </span>
              <br />
              <span className="text-gradient">AND EDUCATION SERVICES.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="mt-4 sm:mt-6 text-lg sm:text-2xl text-[var(--color-primary-dark)]"
            >
              A Community of Passionate Family Day Care Educators and Learners
            </motion.p>

            <motion.a
              href="/template"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "var(--color-accent-hover)",
              }}
              transition={{ duration: 0.3 }}
              className="mt-6 sm:mt-10 inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg shadow-glow"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary-500), var(--color-accent-hover))",
                color: "var(--color-white)",
              }}
            >
              Explore ↗
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Single product card component
function ProductCard({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product h-30 w-[8rem] md:h-60 md:w-[16rem]  relative shrink-0 rounded-lg overflow-hidden"
    >
      <a href={product.link} className="block">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover object-left-top absolute h-full w-full inset-0 transition-transform duration-300"
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition duration-300" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-xl font-semibold transition duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
}
