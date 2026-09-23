import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * CaseStudyPage — React + Tailwind
 * Клон страницы "Finsweet Design case studies" (без хедера и футера).
 * Требуется: react, tailwindcss, lucide-react
 */

const meta = [
  { label: "Client", value: "facebook.com" },
  { label: "Service", value: "Product Design" },
  { label: "Deliverable", value: "UI Screens, UX Flow & Prototype" },
];

const projectBullets = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
];

const howBullets = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
];

const keywords = ["Design", "UI/UX", "Wireframing", "Branding", "Development", "webflow"];

const teamPhotos = [
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
];

function HoverFrame({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl p-3 sm:p-6 bg-gradient-to-br from-amber-50 via-slate-200 to-slate-300 group ${className}`}
    >
      <div className="rounded-xl overflow-hidden bg-white shadow-xl transition-transform duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-2xl">
        {children}
      </div>
    </div>
  );
}

export default function CaseStudyPage() {
  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* ---------- HERO / INTRO ---------- */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-10">
        <p className="text-slate-500 text-sm font-medium mb-3">
          Web design and development
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Finsweet Design case studies
        </h1>
        <p className="text-slate-500 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </p>
      </section>

      {/* ---------- HERO IMAGE (browser mockup) ---------- */}
      <section className="max-w-5xl mx-auto px-6 pb-14">
        <HoverFrame>
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 text-sm">
            <span className="font-semibold">{"{finsweet"}</span>
            <div className="hidden sm:flex gap-6 text-slate-500 text-xs">
              <span>About Us</span>
              <span>Careers</span>
              <span>Services</span>
              <span>Blog</span>
            </div>
            <span className="bg-amber-300 text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-full">
              Contact Us
            </span>
          </div>

          <div className="bg-sky-50 px-8 py-10 flex items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold leading-tight mb-2">
                We&apos;re estate
                <br />
                agents in london.
              </h2>
              <p className="text-slate-500 text-xs max-w-xs mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam leo odio, sagittis quis ornare quis.
              </p>
              <div className="flex items-center gap-4 text-xs">
                <span className="bg-orange-400 text-white px-4 py-2 rounded-md font-medium">
                  Sign Up
                </span>
                <span className="text-slate-700">See All Services</span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
              alt="Estate agent"
              className="hidden sm:block w-40 h-48 object-cover rounded-lg"
            />
          </div>

          <div className="flex items-center justify-between px-6 py-4 text-sm">
            <span>We advise more than 1500 companies</span>
            <div className="flex gap-3 text-slate-400">
              <ArrowLeft size={16} />
              <ArrowRight size={16} />
            </div>
          </div>
        </HoverFrame>
      </section>

      {/* ---------- META ROW ---------- */}
      <section className="max-w-5xl mx-auto px-6 pb-16 border-b border-slate-100">
        <div className="grid sm:grid-cols-3 gap-8">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="text-slate-400 text-sm mb-1">{m.label}</p>
              <p className="font-semibold text-lg">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- ABOUT THE PROJECT ---------- */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-5">About the project</h2>
        <p className="text-slate-500 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul className="space-y-3">
          {projectBullets.map((b) => (
            <li key={b} className="flex gap-3 text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- TEAM IMAGE ---------- */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <HoverFrame>
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-xl font-bold leading-snug max-w-xs">
                Teamwork Is The Only Way We Work
              </h3>
              <div className="flex gap-3 text-slate-400">
                <ArrowLeft size={16} />
                <ArrowRight size={16} />
              </div>
            </div>
            <p className="text-slate-500 text-xs max-w-md mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ante enim blandit, mattis et, mattis vivamus commodo
              suscipit tellus et pellentesque.
            </p>
            <div className="grid grid-cols-4 gap-3">
              {teamPhotos.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Team member"
                  className="w-full h-32 sm:h-44 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </HoverFrame>
      </section>

      {/* ---------- HOW WE DO IT ---------- */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-5">How we do it</h2>
        <p className="text-slate-500 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul className="space-y-3">
          {howBullets.map((b) => (
            <li key={b} className="flex gap-3 text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- KEYWORDS ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-8 border-y border-slate-100">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-sm">
          <span className="text-indigo-600 font-semibold">Keywords</span>
          {keywords.map((k) => (
            <span key={k} className="text-slate-500">
              {k}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
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
