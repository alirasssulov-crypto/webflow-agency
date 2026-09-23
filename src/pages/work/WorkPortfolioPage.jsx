import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const CATEGORIES = ["All", "UI Design", "Webflow Design", "Figma Design"];

const templates = [
  {
    id: 1,
    title: "Template 1",
    category: "UI Design",
    cta: "View Portfolio",
    frame: "bg-gradient-to-br from-sky-100 to-slate-300",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
  },
  {
    id: 2,
    title: "Template 2",
    category: "Webflow Design",
    cta: "View Portfolio",
    frame: "bg-gradient-to-br from-slate-900 to-indigo-600",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",
  },
  {
    id: 3,
    title: "Template 3",
    category: "Figma Design",
    cta: "Read case study",
    frame: "bg-gradient-to-br from-orange-200 to-stone-400",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80",
  },
  {
    id: 4,
    title: "Template 4",
    category: "UI Design",
    cta: "Read case study",
    frame: "bg-gradient-to-br from-cyan-100 to-blue-400",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
  },
  {
    id: 5,
    title: "Template 5",
    category: "Figma Design",
    cta: "Read case study",
    frame: "bg-gradient-to-br from-violet-300 to-emerald-300",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=900&q=80",
  },
  {
    id: 6,
    title: "Template 6",
    category: "Webflow Design",
    cta: "Read case study",
    frame: "bg-gradient-to-br from-indigo-200 to-purple-300",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80",
  },
];

const blurb =
  "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.";

function TemplateCard({ item }) {
  return (
    <div>
      <div
        className={`rounded-2xl p-3 sm:p-5 ${item.frame} overflow-hidden group cursor-pointer`}
      >
        <div className="rounded-xl overflow-hidden shadow-xl">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-6 mb-2">{item.title}</h3>

      <p className="text-slate-500 text-sm leading-relaxed max-w-md">
        {blurb}
      </p>

      <a
        href="#"
        className="inline-flex items-center gap-2 mt-4 font-medium text-slate-900 group"
      >
        {item.cta}

        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </a>
    </div>
  );
}

export default function WorkPortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* ---------- INTRO ---------- */}
      <section className="bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-slate-500 text-sm font-medium mb-3">
            What we created
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our Work Portfolio
          </h1>

          <p className="text-slate-500 leading-relaxed mb-8">
            We help teams create great digital products by providing them
            with tools and technology to make the design-to-code process
            universally accessible.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center justify-center gap-4">
            {[FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FILTERS ---------- */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="flex items-center justify-center gap-8 text-sm sm:text-base font-medium">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-1 transition-colors ${
                activeCategory === cat
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ---------- GRID ---------- */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-16">
          {filtered.map((item) => (
            <TemplateCard key={item.id} item={item} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-400 py-20">
            Пока нет проектов в этой категории.
          </p>
        )}
      </section>

      {/* ---------- CTA ---------- */}
      <section className="max-w-2xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Let&apos;s build something great together
        </h2>

        <p className="text-slate-500 leading-relaxed mb-8">
          Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
          ultricies nec dolor sit amet, scelerisque cursus purus.
        </p>

        <button className="bg-amber-300 hover:bg-amber-400 transition-colors text-slate-900 font-semibold px-8 py-3.5 rounded-full">
          Contact Us
        </button>
      </section>
    </div>
  );
}
