import { useState } from "react"; 
import { Link, useLocation } from "react-router-dom";

const nav = [
  ["Home", "/"],
  ["About us", "/about"],
  ["Features", "/Feature"],
  ["Pricing", "/pricing"],
  ["Work", "/WorkPortfolioPage"],
  ["Blog", "/BlogPage"],
];
export default function Header() {
     const [open, setOpen] = 
     useState(false); 
     const location = useLocation();

const go = (href) => {
     setOpen(false);
if (href.includes("#")) {
  setTimeout(() => {
    const id = href.split("#")[1];
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }, 50);
}
};
return ( <header className="sticky top-0 z-50 bg-[#20205b]/95 text-white backdrop-blur-md"> <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
    <Link
      to="/"
      onClick={() => setOpen(false)}
      className="text-xl font-black"
    >
      {"{Finsweet"}
    </Link>

    <nav className="hidden items-center gap-7 md:flex">
      {nav.map(([label, href]) =>
        href.includes("#") ? (
          <Link
            key={label}
            to={href}
            onClick={() => go(href)}
            className="text-sm text-white/75 transition hover:text-white"
          >
            {label}
          </Link>
        ) : (
          <Link
            key={label}
            to={href}
            className={`text-sm transition ${
              location.pathname === href
                ? "text-white"
                : "text-white/75 hover:text-white"
            }`}
          >
            {label}
          </Link>
        )
      )}
    </nav>

    <Link
      to="/contact"
      onClick={() => go("/contact")}
      className="hidden rounded-full border border-white/25 px-6 py-2.5 text-sm font-semibold transition hover:bg-white hover:text-[#20205b] md:block"
    >
      Contact us
    </Link>

    <button
      onClick={() => setOpen(!open)}
      className="rounded-lg p-2 md:hidden"
      aria-label="Open menu"
    >
      <span className="block h-0.5 w-6 bg-white" />
      <span className="my-1.5 block h-0.5 w-6 bg-white" />
      <span className="block h-0.5 w-6 bg-white" />
    </button>
  </div>

  {open && (
    <div className="border-t border-white/10 bg-[#20205b] px-5 py-5 md:hidden">
      <div className="flex flex-col gap-4">
        {nav.map(([label, href]) => (
          <Link
            key={label}
            to={href}
            onClick={() => go(href)}
            className="text-white/80 hover:text-white"
          >
            {label}
          </Link>
        ))}

        <Link
          to="/contact"
          onClick={() => go("/contact")}
          className="mt-2 rounded-full bg-[#ffd56a] px-5 py-3 text-center font-semibold text-[#20205b]"
        >
          Contact us
        </Link>
      </div>
    </div>
  )}
</header>
);
}