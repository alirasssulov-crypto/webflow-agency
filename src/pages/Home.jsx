import { useState } from "react";
const projects = [ 
    { 
        image: "/images/project-main.jpg", 
        title: "Creative Webflow Website Design", 
        large: true, 
    }, 
    { 
        image: "/images/project-1.jpg", 
        title: "Modern Business Website", 
    }, 
    { 
        image: "/images/project-2.jpg", 
        title: "Creative Landing Page", 
    }, 
];
const features = [ 
    { 
        icon: "👥", 
        title: "Uses Client First", 
        text: "A clear and organized approach that keeps every project simple, flexible and easy to maintain.", 
    }, 
    { 
        icon: "✓", 
        title: "Two Free Revision Rounds", 
        text: "We listen to your feedback and improve the design until everything feels right.", 
    }, 
    { 
        icon: "✣", 
        title: "Template Customization", 
        text: "Every design can be customized to match your brand, goals and visual identity.", 
    }, 
    { 
        icon: "◔", 
        title: "24/7 Support", 
        text: "We stay available and help you whenever you need assistance with your website.", 
    }, 
    { 
        icon: "◉", 
        title: "Quick Delivery", 
        text: "Our streamlined process helps us deliver modern websites without unnecessary delays.", 
    }, 
    { 
        icon: "▣", 
        title: "Hands-on approach", 
        text: "We work closely with you throughout the whole project from the first idea to launch.", 
    }, 
];
const faqs = [ 
    { 
        question: "How much time does it take?", 
        answer: "Most projects are completed within a few weeks depending on the size, content and required functionality.", 
    }, 
    { 
        question: "What is your class naming convention?", 
        answer: "We use a consistent and organized naming system so the project stays clean and easy to maintain.", 
    }, 
    {
         question: "How do you communicate?", 
         answer: "We communicate regularly during the project and keep you updated about important changes and progress.", 
        }, 
        { 
            question: "I have a bigger project. Can you handle it?", 
            answer: "Yes. The process can be adapted for larger websites and more complex projects.", 
        }, 
        { 
            question: "Can you help after the website is finished?", 
            answer: "Yes. We can continue helping with updates, improvements and additional website features.", 
        }, 
    ];
const blogs = [ 
    { 
        image: "/images/blog-1.jpg", 
        title: "How one Webflow user grew his single person consultancy", 
    }, 
    { 
        image: "/images/blog-2.jpg", 
        title: "How one Webflow user built a modern online presence", 
    }, 
    { 
        image: "/images/blog-3.jpg", 
        title: "How great website design can attract more customers", 
    }, 
];
function Home() { 
    const [openFaq, setOpenFaq] = 
    useState(0);

return ( 
<main className="overflow-hidden bg-white text-slate-900"> 
    {/* HERO */} 
    <section className="relative 
    overflow-hidden bg-[#20205d] text-white"> 
    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:px-16 lg:py-28">
      <div className="animate-[fadeUp_.7s_ease-out]">
        <span className="mb-5 inline-block text-sm font-medium text-yellow-300">
          Creative digital agency
        </span>

        <h1 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Building stellar websites for early startups
        </h1>

        <p className="mt-6 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
          We create modern digital experiences that help businesses look
          professional, connect with customers and grow online.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            href="#projects"
            className="rounded-full bg-[#ffd86b] px-7 py-3.5 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            View our work
          </a>

          <a
            href="#contact"
            className="group text-sm font-medium text-white"
          >
            View Pricing
            <span className="ml-2 inline-block transition group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="animate-[float_5s_ease-in-out_infinite]">
        <img
          src="/images/hero.jpg"
          alt="Creative website design"
          className="mx-auto w-full max-w-xl rounded-2xl object-cover shadow-2xl"
        />
      </div>
    </div>
  </section>

  {/* HOW WE WORK */}
  <section className="bg-[#f5f6fb] py-20 lg:py-24">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[.8fr_1.4fr] lg:px-16">
      <div>
        <h2 className="text-3xl font-bold sm:text-4xl">How we work</h2>

        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
          Our process is simple, clear and focused on creating the best
          possible result for every client.
        </p>

        <a
          href="#contact"
          className="mt-5 inline-flex text-sm font-semibold text-indigo-700"
        >
          Get in touch with us
          <span className="ml-2">→</span>
        </a>
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        {["Strategy", "Wireframing", "Design", "Development"].map(
          (item, index) => (
            <div
              key={item}
              className="group transition duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-xs font-bold text-white shadow-lg">
                0{index + 1}
              </div>

              <h3 className="text-xl font-semibold">{item}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                A carefully planned step that keeps the project organized,
                effective and focused on your goals.
              </p>
            </div>
          ),
        )}
      </div>
    </div>
  </section>

  {/* PROJECTS */}
  <section id="projects" className="py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
      <div className="mb-10 flex items-end justify-between gap-5">
        <h2 className="text-3xl font-bold sm:text-4xl">
          View our projects
        </h2>

        <a
          href="#projects"
          className="hidden text-sm font-medium sm:block"
        >
          View More →
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="group relative min-h-[430px] overflow-hidden rounded-sm">
          <img
            src={projects[0].image}
            alt={projects[0].title}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#20205d] via-[#20205d]/40 to-transparent" />

          <div className="absolute bottom-0 left-0 max-w-md p-7 text-white">
            <h3 className="text-2xl font-bold">{projects[0].title}</h3>
            <p className="mt-4 text-sm text-white/70">
              A modern digital experience designed around the needs of a
              growing business.
            </p>

            <a href="#contact" className="mt-5 inline-block text-sm">
              View project →
            </a>
          </div>
        </div>

        <div className="grid gap-5">
          {projects.slice(1).map((project) => (
            <div
              key={project.image}
              className="group relative min-h-[202px] overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-[#20205d]/65 transition group-hover:bg-[#20205d]/45" />

              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm">View portfolio →</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* FEATURES */}
  <section className="bg-[#f5f6fb] py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
<div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="text-sm font-medium text-indigo-700">
          Features
        </span>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Design that solves problems, one product at a time
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="text-2xl text-indigo-600">{feature.icon}</div>

            <h3 className="mt-6 text-lg font-semibold">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* TESTIMONIAL */}
  <section className="bg-[#f8f9fc] py-20">
    <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[.7fr_1.3fr] lg:px-16">
      <div>
        <h2 className="text-3xl font-bold">What our clients say about us</h2>

        <p className="mt-4 text-sm leading-6 text-slate-500">
          Real feedback from people who trusted us with their digital
          projects.
        </p>
      </div>

      <div>
        <blockquote className="text-2xl font-medium leading-relaxed sm:text-3xl">
          “The best agency we’ve worked with so far. They understand our
          product and are able to add new features with a great focus.”
        </blockquote>

        <div className="mt-7 flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200">
            <img
              src="/images/team-1.jpg"
              alt="Client"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold">Jenny Wilson</p>
            <p className="text-xs text-slate-500">Vice President</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ */}
  <section className="py-20 lg:py-28">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[.7fr_1.3fr] lg:px-16">
      <div>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Frequently asked questions
        </h2>

        <a
          href="#contact"
          className="mt-5 inline-block text-sm font-semibold text-indigo-700"
        >
          Contact us for more info
        </a>
      </div>

      <div className="divide-y divide-slate-200">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;

          return (
            <div key={faq.question}>
              <button
                onClick={() => setOpenFaq(isOpen ? -1 : index)}
                className="flex w-full items-center gap-5 py-5 text-left"
              >
                <span className="text-sm font-semibold text-indigo-700">
                  0{index + 1}
                </span>

                <span className="flex-1 font-medium">
                  {faq.question}
                </span>

                <span className="text-xl text-slate-400">
                  {isOpen ? "×" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="pb-5 pl-12 pr-8 text-sm leading-7 text-slate-500">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* CONTACT */}
  <section id="contact" className="py-10">
    <div className="mx-auto grid max-w-6xl overflow-hidden md:grid-cols-2">
      <div className="relative min-h-[420px]">
        <img
          src="/images/contact.jpg"
          alt="Contact us"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#20205d]/60" />
<div className="relative z-10 p-10 text-white lg:p-14">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Building stellar websites for early startups
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
            Tell us about your idea and let’s create something modern,
            useful and memorable together.
          </p>
        </div>
      </div>

      <div className="bg-[#20205d] p-10 text-white lg:p-14">
        <h2 className="text-3xl font-bold">Send inquiry</h2>

        <p className="mt-3 text-sm text-white/70">
          Tell us about your project and we will get back to you.
        </p>

        <form
          className="mt-7 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-white/10 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-white/40 focus:border-yellow-300"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-white/10 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-white/40 focus:border-yellow-300"
          />

          <input
            type="text"
            placeholder="Paste your Figma design URL"
            className="w-full border border-white/10 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-white/40 focus:border-yellow-300"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-[#ffd86b] py-3.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-1"
          >
            Send an Inquiry
          </button>
        </form>

        <a href="#contact" className="mt-6 inline-block text-sm">
          Get in touch with us →
        </a>
      </div>
    </div>
  </section>

  {/* BLOG */}
  <section className="py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
      <h2 className="text-3xl font-bold sm:text-4xl">Our blog</h2>

      <div className="mt-10 grid gap-7 md:grid-cols-3">
        {blogs.map((blog) => (
          <article key={blog.image} className="group">
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <p className="mt-5 text-xs text-slate-400">19 Jan 2022</p>

            <h3 className="mt-3 text-lg font-semibold leading-7">
              {blog.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Discover useful ideas about modern websites, digital
              experiences and growing an online business.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-block text-sm font-medium"
            >
              Read More →
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
</main>
); }
export default Home