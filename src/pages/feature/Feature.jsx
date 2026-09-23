import React, { useState, useEffect, useRef } from "react";
import {
  Settings,
  PenLine,
  Wand2,
  Users,
  Plus,
  X,
} from "lucide-react";

function useCountUp(target, duration = 2000, startWhenVisible = true) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!startWhenVisible) {
      animate();
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            animate();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function animate() {
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      // ease-out для более приятной анимации
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    }
    requestAnimationFrame(tick);
  }

  return [value, ref];
}
const benefits = [
  {
    icon: PenLine,
    title: "Customize with ease",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: Wand2,
    title: "Perfectly Responsive",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: Users,
    title: "Friendly Support",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const faqItems = [
  {
    q: "How much time does it take?",
    a: "Обычно стандартный проект из пяти страниц занимает около одной недели с момента согласования технического задания. Сложные проекты с кастомной анимацией могут занимать до трёх недель.",
  },
  {
    q: "What is your class naming convention?",
    a: "Мы используем методологию Client-first: понятные, предсказуемые имена классов, сгруппированные по компонентам, чтобы с проектом было легко работать любому дизайнеру или разработчику.",
  },
  {
    q: "How do we communicate?",
    a: "Основное общение проходит в Slack или по email, плюс еженедельные короткие созвоны, чтобы синхронизироваться по статусу проекта и следующим шагам.",
  },
  {
    q: "I have a bigger project. Can you handle it?",
    a: "Да, мы работаем и с небольшими лендингами, и с крупными многостраничными продуктами. Перед стартом мы оцениваем объём работ и предлагаем реалистичный план и сроки.",
  },
  {
    q: "What is your class naming convention?",
    a: "Мы придерживаемся единой системы именования во всех проектах: она делает код читаемым, ускоряет ревью и упрощает передачу проекта другой команде.",
  },
];

const featureImages = [
  {
    eyebrow: "Free Revision Rounds",
    title: "Get free Revisions and one week of free maintenance",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&q=80",
    imgFirst: true,
    bg: "bg-slate-100",
  },
  {
    eyebrow: "24/7 Support",
    title: "Working with us, you will be getting 24/7 priority support",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80",
    imgFirst: false,
    bg: "bg-white",
  },
  {
    eyebrow: "Quick Delivery",
    title: "Guaranteed 1 week delivery for standard five pager website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=900&q=80",
    imgFirst: true,
    bg: "bg-amber-50",
  },
];

// ---------- Переиспользуемая карточка с картинкой и ховером ----------
function HoverImage({ src, alt, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl shadow-lg group cursor-pointer ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
    </div>
  );
}

// ---------- FAQ Item ----------
function FaqItem({ item, index, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-200 py-5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <div className="flex items-baseline gap-4">
          <span className="text-indigo-600 font-semibold text-sm shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-slate-900 font-medium text-base sm:text-lg">
            {item.q}
          </span>
        </div>
        <span className="shrink-0 text-slate-500">
          {isOpen ? <X size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
        }`}
        style={{ display: "grid" }}
      >
        <div className="overflow-hidden">
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed pl-0 sm:pl-10 pr-6">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- Основной компонент ----------
export default function FeaturesPage() {
  const [count, countRef] = useCountUp(100000, 2000);
  const [openFaq, setOpenFaq] = useState(0); // первый вопрос открыт по умолчанию, как на макете

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* ---------- HERO ---------- */}
      <section className="bg-[#171246] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              All the features
              <br />
              you need
            </h1>
            <p className="text-indigo-200/70 max-w-md mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-amber-300 hover:bg-amber-400 transition-colors text-slate-900 font-semibold px-7 py-3.5 rounded-full">
              View Pricing
            </button>
          </div>

          <div className="relative">
            <div className="bg-indigo-950/60 border border-white/10 rounded-2xl p-5 shadow-2xl">
              <div className="flex gap-1.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-indigo-900/70 rounded-lg h-14" />
                  <div className="bg-indigo-900/70 rounded-lg h-14" />
                  <div className="bg-indigo-900/70 rounded-lg h-14 col-span-2" />
                </div>
                <div className="bg-indigo-900/70 rounded-lg p-3 space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full ${
                        i % 3 === 0
                          ? "bg-amber-300/70 w-3/4"
                          : i % 3 === 1
                          ? "bg-sky-400/60 w-1/2"
                          : "bg-rose-400/60 w-2/3"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 bg-indigo-900/70 rounded-lg p-3 w-2/3 space-y-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-2 rounded-full bg-white/20"
                    style={{ width: `${70 - i * 15}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-300 rounded-full p-4 shadow-xl">
              <Settings className="text-slate-900" size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- STATS / LOGOS ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div
          ref={countRef}
          className="flex flex-wrap items-center justify-between gap-8"
        >
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-slate-900 tabular-nums">
              {count.toLocaleString("en-US")}+
            </p>
            <p className="text-sm text-slate-500">Figma Users</p>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-slate-400 font-semibold text-sm">
            <span>◈ logoipsum</span>
            <span>◗ logoipsum</span>
            <span>⊘ logoipsum</span>
            <span>∿ logoipsum</span>
            <span>◫ logoipsum</span>
          </div>
        </div>
      </section>

      {/* ---------- BENEFITS ---------- */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center max-w-2xl mx-auto mb-10">
          The benefits of working with our team
        </h2>

        <div className="grid sm:grid-cols-3 gap-5">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-slate-50 hover:bg-slate-100 transition-colors rounded-2xl p-7"
            >
              <Icon className="text-indigo-600 mb-4" size={28} />
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CLIENT-FIRST ---------- */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-indigo-600 font-medium text-sm mb-3">
            Use Client-first
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Top agencies and freelancers around the world use Client-first
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <HoverImage
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80"
          alt="Team meeting"
          className="h-80"
        />
      </section>

      {/* ---------- FEATURE ROWS ---------- */}
      {featureImages.map((f, i) => (
        <section key={f.title} className={f.bg}>
          <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
            {f.imgFirst && (
              <HoverImage src={f.img} alt={f.title} className="h-72 md:h-80 order-1" />
            )}
            <div className={f.imgFirst ? "order-2" : "order-1"}>
              <p className="text-slate-500 text-sm font-medium mb-3">
                {f.eyebrow}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
                {f.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{f.text}</p>
            </div>
            {!f.imgFirst && (
              <HoverImage src={f.img} alt={f.title} className="h-72 md:h-80 order-2" />
            )}
          </div>
        </section>
      ))}

      {/* ---------- FAQ ---------- */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10">
          <div>
            <h2 className="text-3xl font-bold leading-tight mb-3">
              Frequently
              <br />
              asked question
            </h2>
            <a href="#" className="text-indigo-600 text-sm font-medium">
              Contact us for more info
            </a>
          </div>

          <div>
            {faqItems.map((item, i) => (
              <FaqItem
                key={item.q + i}
                item={item}
                index={i}
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
