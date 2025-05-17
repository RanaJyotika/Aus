// "use client";


// import React, { useEffect, useState } from "react";
// import { Mail, Phone, MapPin } from "lucide-react";

// export default function ContactUs() {
//   const [animateShapes, setAnimateShapes] = useState(true);
//   const [animateShapes2, setAnimateShapes2] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   // Animation for floating shapes - alternating cycles
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimateShapes((prev) => !prev);
//     }, 5000);

//     const interval2 = setInterval(() => {
//       setAnimateShapes2((prev) => !prev);
//     }, 7000);

//     return () => {
//       clearInterval(interval);
//       clearInterval(interval2);
//     };
//   }, []);

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     console.log({ name, email, message });
//     // In a real app, send data to server here
//     alert("Message sent! (This is just a demo)");
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-800 p-6 flex items-center justify-center relative overflow-hidden mt-15">
//       {/* Animated Shapes */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Primary animated shapes */}
//         <div
//           className={`absolute bottom-10 left-10  w-32 h-32 rounded-full bg-[#3fb5dd] opacity-20 transition-all duration-5000 ${
//             animateShapes ? "translate-x-15" : "-translate-x-15"
//           }`}
//         ></div>
//         <div
//           className={`absolute top-40 right-20  w-40 h-40 rounded-full bg-[#3fb5dd] opacity-20 transition-all duration-5000 delay-1000 ${
//             animateShapes ? "-translate-y-10" : "translate-y-10"
//           }`}
//         ></div>
//         <div
//           className={`absolute top-1/3 right-1/4   w-52 h-52 rounded-full bg-[#3fb5dd] opacity-15 transition-all duration-5000 delay-2000 ${
//             animateShapes ? "translate-y-8" : "-translate-y-8"
//           }`}
//         ></div>

//         {/* Additional animated shapes */}
//         <div
//           className={`absolute top-[7rem] left-[47rem] w-3 h-3 rounded-full bg-[#3fb5dd] z-20  transition-all duration-7000 ${
//             animateShapes2 ? "translate-x-25" : "-translate-x-23"
//           }`}
//         ></div>
//         <div
//           className={`absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full bg-[#3fb5dd] opacity-20 transition-all duration-7000 delay-1000 ${
//             animateShapes2 ? "translate-y-10" : "-translate-y-10"
//           }`}
//         ></div>
//         <div
//           className={`absolute top-3/4 left-2/3 w-20 h-20 rounded-full bg-[#3fb5dd] opacity-25 transition-all duration-7000 delay-2000 ${
//             animateShapes2 ? "scale-110" : "scale-90"
//           }`}
//         ></div>

//         {/* Animated polygons */}
//         <div
//           className={`absolute top-[11rem] left-1/2 w-10 h-10 bg-[#3fb5dd]  z-20 rotate-45 rounded- `}
//         ></div>
//         <div
//           className={`absolute top-[50px] rounded-xl right-2/3 w-10 h-10 bg-[#3fb5dd] opacity-15 rotate-12 z-20 transition-all duration-8000 delay-1500 ${
//             animateShapes2 ? "rotate-45" : "rotate-12"
//           }`}
//         ></div>

//         {/* Static Shapes */}
//         <div className="absolute top-0 left-0 w-96 h-96 bg-[#3fb5dd] opacity-20 blur-2xl rounded-br-full"></div>
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3fb5dd] opacity-20 blur-2xl rounded-tl-full"></div>
//         <div className="relative  top-1/3 left-3/4 w-24 h-24 bg-[#3fb5dd] opacity-50 blur-xl  z-20 rotate-45"></div>
//       </div>

//       <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl  p-8 md:p-12 relative z-10 ">
//         <div className="flex flex-col items-center mb-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#3fb5dd]">
//             Contact Us
//           </h2>
//           <div className="w-[200px] h-[5px] rounded-full bg-[#3fb5dd]"></div>
//         </div>

//         <div className="grid md:grid-cols-2  gap-8 mb-12">
//           {/* Form Section */}
//           <div className="space-y-6">
//             <div className="relative">
//               <label className="block mb-2 text-sm font-medium text-[#3fb5dd]">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="w-full p-3 rounded-lg bg-blue-50 border border-[#3fb5dd] border-opacity-30 focus:outline-none focus:ring-2 focus:ring-[#3fb5dd] focus:border-transparent transition-all"
//                 placeholder="Your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="relative">
//               <label className="block mb-2 text-sm font-medium text-[#3fb5dd]">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="w-full p-3 rounded-lg bg-blue-50 border border-[#3fb5dd] border-opacity-30 focus:outline-none focus:ring-2 focus:ring-[#3fb5dd] focus:border-transparent transition-all"
//                 placeholder="Your Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="relative">
//               <label className="block mb-2 text-sm font-medium text-[#3fb5dd]">
//                 Message
//               </label>
//               <textarea
//                 className="w-full p-3 rounded-lg bg-blue-50 border border-[#3fb5dd] border-opacity-30 focus:outline-none focus:ring-2 focus:ring-[#3fb5dd] focus:border-transparent transition-all"
//                 placeholder="Your Message"
//                 rows={5}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               ></textarea>
//             </div>
//             <button
//               onClick={handleSubmit}
//               className="bg-[#3fb5dd] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 hover:shadow-lg transition duration-200 w-full md:w-auto"
//             >
//               Send Message
//             </button>
//           </div>

//           {/* Contact Details */}
//           <div className=" h-[70%] mt-10 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-8 shadow-lg flex flex-col justify-center space-y-6 border-2 border-[#3fb5dd] border-opacity-50">
//             <h3 className="text-xl font-semibold mb-4 text-[#3fb5dd]">
//               Get In Touch
//             </h3>

//             <div className="flex items-center space-x-4 p-2 hover:bg-blue-800 rounded-lg transition-all">
//               <div className="bg-[#3fb5dd] p-2 rounded-full">
//                 <Phone size={20} className="text-blue-900" />
//               </div>
//               <span>+1 234 567 890</span>
//             </div>

//             <div className="flex items-center space-x-4 p-2 hover:bg-blue-800 rounded-lg transition-all">
//               <div className="bg-[#3fb5dd] p-2 rounded-full">
//                 <Mail size={20} className="text-blue-900" />
//               </div>
//               <span>info@example.com</span>
//             </div>

//             <div className="flex items-center space-x-4 p-2 hover:bg-blue-800 rounded-lg transition-all">
//               <div className="bg-[#3fb5dd] p-2 rounded-full">
//                 <MapPin size={20} className="text-blue-900" />
//               </div>
//               <span>123 Main St, Anytown, USA</span>
//             </div>
//           </div>
//         </div>

//         {/* Map Section */}
//         {/* <div className="w-full rounded-xl overflow-hidden shadow-lg h-64 md:h-80 border-4 border-[#3fb5dd] border-opacity-20 relative">
//           <div className="absolute inset-0 flex items-center justify-center bg-[#3fb5dd] bg-opacity-10">
//             <div className="absolute w-16 h-16 bg-[#3fb5dd] rounded-full flex items-center justify-center animate-pulse">
//               <MapPin size={24} className="text-white" />
//             </div>
//           </div>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316952596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1621863310125!5m2!1sen!2sng"
//             width="100%"
//             height="100%"
//             allowFullScreen
//             loading="lazy"
//             className="border-0"
//           ></iframe>
//         </div> */}
//       </div>
//     </div>
//   );
// }








"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (This is just a demo)");
    setName("");
    setEmail("");
    setMessage("");
  };

  // Animation variants for floating shapes
  const floating = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulse = {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-300 to-blue-100 relative overflow-hidden flex items-center justify-center mt-16">
      {/* Background Shapes */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-700 opacity-10 blur-3xl"
        variants={pulse}
        animate="animate"
      />
      <motion.div
        className="absolute top-32 left-10 w-6 h-6 rounded-full bg-blue-700 opacity-20"
        variants={floating}
        animate="animate"
      />
      <motion.div
        className="absolute top-60 right-24 w-4 h-4 rounded-full bg-blue-700 opacity-30"
        variants={floating}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-40 left-20 w-32 h-32 rounded-lg bg-blue-700 opacity-15 rotate-45"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 w-64 h-64 rounded-full  bg-white opacity-20"
        variants={pulse}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-20 h-20 rounded-md bg-blue-800 opacity-15 rotate-12"
        variants={floating}
        animate="animate"
      />

      {/* Content */}
      <div className="w-full max-w-5xl  rounded-2xl  p-8 md:p-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <motion.div
            className="inline-block relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 tracking-tight">
              Contact Us
            </h2>

            <motion.div
              className="absolute -top-6 -left-8 text-blue-400 opacity-50"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4" fill="currentColor" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -right-6 text-blue-400 opacity-50"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3L14.5 8.5L21 9.5L16.5 14L18 20.5L12 17.5L6 20.5L7.5 14L3 9.5L9.5 8.5L12 3Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-[#2C3E94] via-[#39A4D8] to-[#2C3E94] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "60%" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          />

          <motion.p
            className="mt-6 text-lg text-cyan-800 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            We'd love to hear from you! Please reach out using the form below or
            through our contact details.
          </motion.p>
        </div>

        {/* Form and Info */}
        <div className="grid md:grid-cols-2 border-white bg-gradient-to-b from-[#2C3E94]/5 via-[#39A4D8]/5 to-[#2C3E94]/5 shadow-xl rounded-2xl p-8 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-blue-800 font-semibold">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-blue-50 border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-blue-800 font-semibold">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-blue-50 border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-blue-800 font-semibold">
                Message
              </label>
              <textarea
                className="w-full p-3 rounded-lg bg-blue-50 border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition duration-200"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-8 shadow-lg flex flex-col justify-center space-y-6 border-2 border-blue-300">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">
              Get In Touch
            </h3>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-300 p-2 rounded-full">
                <Phone size={20} className="text-blue-900" />
              </div>
              <span>+1 234 567 890</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-300 p-2 rounded-full">
                <Mail size={20} className="text-blue-900" />
              </div>
              <span>info@example.com</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-300 p-2 rounded-full">
                <MapPin size={20} className="text-blue-900" />
              </div>
              <span>123 Main St, Anytown, USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
