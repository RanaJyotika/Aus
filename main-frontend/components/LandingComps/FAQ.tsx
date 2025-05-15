"use client";

import { JSX, SVGProps, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Custom decorative shapes for background
const BackgroundShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient blob top-right */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: `linear-gradient(135deg, var(--gradient-purple-start), var(--gradient-blue-end))`,
        }}
      />

      {/* Gradient blob bottom-left */}
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{
          background: `linear-gradient(225deg, var(--gradient-blue-start), var(--gradient-purple-end))`,
        }}
      />

      {/* Animated small dots */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="smallDots"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="1"
                fill="var(--color-accent-soft)"
                opacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallDots)" />
        </svg>
      </div>
    </div>
  );
};

const ChevronDownIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const faqData = [
  {
    id: 1,
    question: "What is SEO and why is it important?",
    answer:
      "SEO stands for Search Engine Optimization. It's the practice of increasing the quantity and quality of traffic to your website through organic search engine results. It matters because higher visibility in search results leads to more visitors, potential customers, and revenue for your business.",
  },
  {
    id: 2,
    question: "How long does it take to see results from SEO?",
    answer:
      "The timeline for SEO results can vary significantly depending on factors like your website's current state, industry competition, and strategy quality. Generally, you might start seeing noticeable improvements within 3–6 months, but significant results often take 6–12 months of consistent effort.",
  },
  {
    id: 3,
    question: "What are the key factors that influence SEO rankings?",
    answer:
      "Key factors include: high-quality, relevant content; strategic keyword research and optimization; website speed and mobile-friendliness; secure website (HTTPS); user experience signals; backlink quality and quantity; and technical SEO elements like structured data and site architecture.",
  },
  {
    id: 4,
    question: "Do I need to hire an SEO agency, or can I do SEO myself?",
    answer:
      "While it's possible to learn and implement basic SEO yourself, an SEO agency brings specialized expertise, tools, and efficiency to the process. The best approach depends on your resources, time availability, and the complexity of your market. Many businesses benefit from professional guidance, especially in competitive industries.",
  },
];

interface AccordionItemProps {
  item: {
    id: number;
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ item, isOpen, onToggle }: AccordionItemProps) => {
  return (
    <div
      className="mb-6 last:mb-0 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
      style={{
        borderColor: isOpen ? "var(--color-accent-glow)" : "transparent",
        borderWidth: "1px",
        borderStyle: "solid",
      }}
    >
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-5 px-6 text-left transition-colors duration-300 focus:outline-none"
        style={{
          backgroundColor: isOpen
            ? "var(--color-accent-tint)"
            : "var(--color-white)",
          color: "var(--color-text-strong)",
        }}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className="text-lg font-medium">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          className="flex-shrink-0 ml-4 p-2 rounded-full"
          style={{
            background: `linear-gradient(135deg, var(--gradient-blue-start), var(--gradient-purple-end))`,
            boxShadow: isOpen ? "0 0 10px rgba(124, 58, 237, 0.4)" : "none",
          }}
        >
          <ChevronDownIcon className="w-5 h-5 text-white" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-5 pt-3 text-base leading-relaxed"
              style={{
                backgroundColor: "var(--color-white)",
                color: "var(--color-text-muted)",
              }}
            >
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(1); // Start with first FAQ open
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleToggle = (id: number) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <section
      className="relative w-full py-20 md:py-10 overflow-hidden"
      style={{
        backgroundColor: "var(--color-off-white)",
        color: "var(--color-text)",
      }}
    >
      <BackgroundShapes />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=" mb-3  font-semibold px-4 py-1.5 rounded-full text-sm"
            style={{
              background:
                "linear-gradient(to right, var(--color-accent-tint), var(--color-primary-light))",
              color: "var(--color-accent-glow)",
            }}
          >
            Help Center
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gradient text-4xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--color-text-muted)" }}
          >
            Find answers to common questions about our SEO services
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <AccordionItem
                item={item}
                isOpen={openAccordionId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 text-white"
            style={{
              background:
                "linear-gradient(to right, var(--gradient-blue-start), var(--gradient-purple-end))",
              boxShadow: "0 4px 14px rgba(124, 58, 237, 0.3)",
            }}
          >
            Still have questions? Contact us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
