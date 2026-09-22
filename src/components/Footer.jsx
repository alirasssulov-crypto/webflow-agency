import { Link } from "react-router-dom";

export default function Footer() {
     return ( 
     <footer className="bg-[#20205b] text-white">
  <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 lg:px-8">

    <div>
      <div className="text-2xl font-black">
        {"{Finsweet"}
      </div>

      <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
        We are always open to discuss your project and improve your
        online presence.
      </p>

      <div className="mt-8 grid max-w-md grid-cols-2 overflow-hidden rounded-lg bg-[#ffd56a] text-[#20205b]">

        <div className="p-5">
          <p className="text-xs font-semibold">
            Email me at
          </p>

          <p className="mt-2 text-xs">
            contact@finsweet.com
          </p>
        </div>

        <div className="p-5">
          <p className="text-xs font-semibold">
            Call us
          </p>

          <p className="mt-2 text-xs">
            0927 6277 28525
          </p>
        </div>

      </div>
    </div>

    <div>
      <h3 className="text-3xl font-bold">
        Lets Talk!
      </h3>

      <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
        We are always open to discuss your project, improve your
        online presence and help with your UX/UI design challenges.
      </p>

      <div className="mt-5 flex gap-4 text-sm text-white/70">
        <span>f</span>
        <span>𝕏</span>
        <span>◎</span>
        <span>in</span>
      </div>
    </div>

  </div>

  <div className="border-t border-white/10 bg-white py-5 text-[#171827]">

    <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-5 text-xs md:flex-row lg:px-8">

      <span>
        Copyright 2026, Finsweet.com
      </span>

      <div className="flex flex-wrap gap-5">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <a href="/#features">Features</a>
        <a href="/#pricing">Pricing</a>
        <a href="/#faq">FAQ</a>
        <a href="/#blog">Blog</a>
      </div>

    </div>

  </div>

</footer>
); 
}