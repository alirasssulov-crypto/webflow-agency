import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play, Plus } from "lucide-react";

const plans = [
  {
    price: 299,
    unit: "Per Design",
    title: "Landing Page",
    text: "When you’re ready to go beyond prototyping in Figma,",
    features: [
      ["All limited links", true],
      ["Own analytics platform", true],
      ["Chat support", true],
      ["Optimize hashtags", false],
      ["Unlimited users", false],
    ],
    cta: ["Get started", "/contact"],
  },
  {
    price: 399,
    unit: "Multi Design",
    title: "Website Page",
    text: "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    features: [
      ["All limited links", true],
      ["Own analytics platform", true],
      ["Chat support", true],
      ["Optimize hashtags", true],
      ["Unlimited users", true],
    ],
    cta: ["Get started", "/contact"],
    featured: true,
  },
  {
    price: 499,
    plus: true,
    unit: "Per Design",
    title: "Complex Project",
    text: "When you’re ready to go beyond prototyping in Figma,",
    features: [
      ["All limited links", true],
      ["Own analytics platform", true],
      ["Chat support", true],
      ["Optimize hashtags", true],
      ["Unlimited users", true],
      ["Assist and Help", true],
    ],
    cta: ["Contact us", "/contact"],
  },
];

const faqs = [
  {
    q: "How much time does it take ?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "What is your class naming convention ?",
    a: "We use a clear, consistent naming system so your project stays easy to maintain and scale.",
  },
  {
    q: "How do we communicate ?",
    a: "We communicate regularly during the project and keep you updated about important changes and progress.",
  },
  {
    q: "I have a bigger project. Can you handle it ?",
    a: "Yes. We work on projects of any size and can scale the team to match your timeline and scope.",
  },
  {
    q: "What is your class naming convention ?",
    a: "Every class follows a predictable structure, so anyone on your team can pick up the project quickly.",
  },
];

// Появление элемента при прокрутке
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// Плавный счётчик цены
function CountUp({ to, start, duration = 1200 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to, start, duration]);

  return value;
}

function PlanCard({ plan, index, visible }) {
  const dark = plan.featured;

  return (
    <article
      style={
        visible
          ? { animation: `fadeUp 0.8s ease ${index * 150}ms backwards` }
          : undefined
      }
      className={`group relative flex flex-col overflow-hidden rounded-lg px-8 pb-12 pt-14 transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl ${
        dark
          ? "bg-[#1c1e53] text-white hover:shadow-[#1c1e53]/40"
          : "bg-[#f4f6fc] text-[#282938] hover:shadow-slate-300/60"
      } ${visible ? "" : "opacity-0"}`}
    >
      {dark && (
        <div className="pointer-events-none absolute -left-1/4 top-0 h-[75%] w-[150%] rounded-b-[50%] bg-[#282a67] transition-transform duration-700 group-hover:scale-105" />
      )}

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">
            $<CountUp to={plan.price} start={visible} />
            {plan.plus && " +"}
          </span>
          <span
            className={`text-sm ${dark ? "text-[#fcd980]" : "text-[#4c3ef5]"}`}
          >
            {plan.unit}
          </span>
        </div>

        <h3 className="mt-6 text-xl font-medium">{plan.title}</h3>

        <p
          className={`mt-4 min-h-[4.5rem] text-sm leading-6 ${
            dark ? "text-white/70" : "text-slate-500"
          }`}
        >
          {plan.text}
        </p>

        <ul className="mt-8 space-y-4">
          {plan.features.map(([label, on], i) => (
            <li
              key={label}
              style={{
                transitionDelay: visible ? `${index * 150 + 300 + i * 80}ms` : "0ms",
              }}
              className={`flex items-center gap-3 text-sm transition-all duration-500 ${
                visible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              } ${on ? "" : dark ? "text-white/50" : "text-slate-400"}`}
            >
              <Play
                size={16}
                className={`shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                  on
                    ? "fill-[#7fd99a] text-[#7fd99a]"
                    : "fill-slate-400 text-slate-400"
                }`}
              />
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex justify-center pt-14">
        <Link
          to={plan.cta[1]}
          className={`relative inline-flex items-center justify-center overflow-hidden rounded-full px-16 py-4 font-medium transition-all duration-300 hover:scale-105 active:scale-95 before:absolute before:inset-0 before:-translate-x-full before:skew-x-12 before:bg-white/25 before:transition-transform before:duration-500 hover:before:translate-x-full ${
            dark
              ? "bg-[#fcd980] text-[#1c1e53]"
              : "bg-[#282938] text-white"
          }`}
        >
          <span className="relative">{plan.cta[0]}</span>
        </Link>
        </div>
      </div>
    </article>
  );
}

function FaqItem({ item, index, isOpen, onToggle, visible }) {
  return (
    <div
      style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
      className={`border-b border-slate-200 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-start justify-between gap-4 py-7 text-left"
      >
        <div className="flex items-baseline gap-8">
          <span className="text-xl font-medium text-[#4c3ef5]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-lg font-medium text-[#282938] transition-colors group-hover:text-[#4c3ef5] sm:text-xl">
            {item.q}
          </span>
        </div>
        <Plus
          size={22}
          className={`mt-1 shrink-0 text-slate-500 transition-transform duration-300 group-hover:text-[#4c3ef5] ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-8 pl-0 pr-10 leading-7 text-slate-600 sm:pl-[4.25rem]">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [cardsRef, cardsVisible] = useInView(0.15);
  const [faqRef, faqVisible] = useInView(0.15);

  return (
    <div className="bg-white">
      {/* ---------- Pricing ---------- */}
      <section className="mx-auto max-w-6xl px-5 pt-20 md:pt-28 lg:px-8">
        <div className="animate-fade-up text-center">
          <h1 className="text-4xl font-bold text-[#282938] md:text-5xl">
            Our Pricing Plans
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-slate-500">
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>

        <div ref={cardsRef} className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <PlanCard key={plan.title} plan={plan} index={i} visible={cardsVisible} />
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <div ref={faqRef} className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div
            className={`transition-all duration-700 ${
              faqVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold leading-tight text-[#282938] md:text-5xl">
              Frequently asked questions
            </h2>
            <Link
              to="/contact"
              className="group mt-5 inline-block text-[#4c3ef5]"
            >
              Contact us For More Info
              <span className="block h-px w-0 bg-[#4c3ef5] transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>

          <div>
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q + i}
                item={item}
                index={i}
                visible={faqVisible}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
