import React from "react";

/**
 * BlogArticlePage — React + Tailwind
 * Клон страницы отдельной статьи блога (без хедера и футера).
 * Требуется: react, tailwindcss
 */

function InlineLink({ children }) {
  return (
    <a href="#" className="text-indigo-600 hover:underline">
      {children}
    </a>
  );
}

function HoverImage({ src, alt, className = "" }) {
  return (
    <div className={`rounded-2xl overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
      />
    </div>
  );
}

export default function BlogArticlePage() {
  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* ---------- TITLE ---------- */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-10 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
          A UX Case Study on Creating a Studious Environment for Students
        </h1>
        <p className="text-slate-500 text-sm">
          <span className="font-medium text-slate-700">Andrew Jonson</span>{" "}
          <span className="font-semibold">Posted on 27th January 2021</span>
        </p>
      </section>

      {/* ---------- HERO IMAGE ---------- */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <HoverImage
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80"
          alt="Team collaborating in a studio"
          className="h-64 sm:h-96"
        />
      </section>

      {/* ---------- ARTICLE BODY ---------- */}
      <article className="max-w-3xl mx-auto px-6 pb-16 space-y-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. <InlineLink>Excepteur sint occaecat</InlineLink>{" "}
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-4">
            Ut enim ad minim veniam, quis nostrud.
          </h2>
          <p className="text-slate-500 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat{" "}
            <InlineLink>cupidatat non</InlineLink> proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <ul className="space-y-2 mb-6">
            {[1, 2, 3].map((i) => (
              <li key={i} className="flex gap-3 text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5 shrink-0" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do.
              </li>
            ))}
          </ul>

          <p className="text-slate-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud{" "}
            <InlineLink>exercitation ullamco</InlineLink> laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
        </div>

        {/* ---------- INLINE IMAGE ---------- */}
        <HoverImage
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
          alt="Team putting hands together"
          className="h-64 sm:h-80"
        />

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-4">
            Ut enim ad minim veniam, quis nostrud.
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud{" "}
            <InlineLink>exercitation ullamco</InlineLink> laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
        </div>
      </article>
    </div>
  );
}
