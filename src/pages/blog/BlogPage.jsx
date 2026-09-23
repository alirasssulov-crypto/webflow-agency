import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const posts = [
  {
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=700&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=700&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=700&q=80",
  },
].map((p, i) => ({
  id: i + 1,
  date: "27 Jan 2021",
  title:
    "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
  text: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract",
  img: p.img,
}));

function BlogCard({ post }) {
  return (
    <article className="group">
      <div className="rounded-xl overflow-hidden mb-5">
        <img
          src={post.img}
          alt={post.title}
          className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      <p className="text-slate-400 text-sm mb-3">{post.date}</p>
      <h3 className="text-xl font-bold leading-snug mb-3 group-hover:text-indigo-600 transition-colors">
        {post.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.text}</p>
      <a
        href="#"
        className="inline-flex items-center gap-2 font-semibold text-slate-900"
      >
        Read More
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </a>
    </article>
  );
}

export default function BlogPage() {
  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* ---------- FEATURED POST ---------- */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-14 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
          A UX Case Study on Creating a Studious Environment for Students
        </h1>
        <p className="text-slate-500 text-sm mb-10">
          <span className="font-medium text-slate-700">Andrew Jonson</span>{" "}
          <span className="font-semibold">Posted on 27th January 2021</span>
        </p>

        <div className="rounded-2xl overflow-hidden mb-8 group">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80"
            alt="Team collaborating"
            className="w-full h-64 sm:h-96 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto mb-4">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside.
        </p>
        <Link
          to="/CaseStudyPage"
          className="text-indigo-600 font-semibold hover:underline"
        >
          Read more
        </Link>
      </section>

      {/* ---------- BLOG GRID ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
          Our Blog
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
