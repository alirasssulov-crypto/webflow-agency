
const benefits = [ 
    { 
        icon: "▣", 
        title: "Customize with ease", 
        text: "Flexible solutions that can be adapted to your brand, content and business goals.", 
    }, 
    { 
        icon: "✣", 
        title: "Perfectly Responsive", 
        text: "Every section is designed to look great on phones, tablets and desktop screens.", 
    }, 
    { 
        icon: "👥", 
        title: "Friendly Support", 
        text: "We stay close to our clients and provide support throughout the whole process.", 
    }, 
];
const team = [ 
    { 
        image: "/images/team-1.jpg", 
        name: "John Smith", 
        role: "CEO", 
    }, 
    { 
        image: "/images/team-2.jpg", 
        name: "Simon Adams", 
        role: "CTO", 
    }, 
    { 
        image: "/images/team-3.jpg", 
        name: "Paul Jones", role: "Design Lead", 
    }, 
    { 
        image: "/images/team-4.jpg", 
        name: "Sara Hardin", 
        role: "Project Manager", 
    }, 
];
function About() { return ( <main className="overflow-hidden bg-white text-slate-900"> {/* ABOUT HERO */} <section className="py-20 lg:py-28"> <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:px-16"> <div className="animate-[fadeUp_.7s_ease-out]"> <span className="text-sm font-medium text-indigo-700"> About us </span>
        <h1 className="mt-4 max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Our designs solve problems
        </h1>

        <p className="mt-6 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
          We create thoughtful digital experiences that combine clean
          design, useful functionality and a clear focus on your business.
        </p>
      </div>

      <div className="overflow-hidden">
        <img
          src="/images/about-top.jpg"
          alt="Our team working together"
          className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[400px]"
        />
      </div>
    </div>
  </section>

  {/* WHO WE ARE */}
  <section className="pb-20 lg:pb-28">
    <div className="mx-auto max-w-6xl bg-[#f5f5f6] px-7 py-12 md:px-12 lg:px-14">
      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
        Who we are
      </span>

      <div className="mt-5 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Goal focussed
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            We begin every project by understanding the real problem,
            defining clear goals and creating a strategy that can produce
            measurable results.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Continuous improvement
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            We believe good products can always become better. We test,
            improve and refine our ideas throughout the project.
          </p>
        </div>
      </div>
    </div>

    <div className="mx-auto mt-0 max-w-6xl overflow-hidden">
      <img
        src="/images/about-wide.jpg"
        alt="Team planning a project"
        className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[430px]"
      />
    </div>
  </section>

  {/* PROCESS */}
  <section className="py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        The process we follow
      </h2>

      <div className="mt-14 grid gap-10 md:grid-cols-4">
        {[
          ["Planning", "We understand your goals and create a clear plan."],
          [
            "Conception",
            "We turn ideas into practical and creative concepts.",
          ],
          ["Design", "We create a modern visual experience for your users."],
          [
            "Development",
            "We build and test the final digital experience.",
          ],
        ].map(([title, text], index) => (
          <div key={title} className="relative">
            <div className="flex items-center">
              <span className="h-4 w-4 rounded-full bg-indigo-600" />

              {index !== 3 && (<span className="ml-2 hidden h-px flex-1 border-t border-dashed border-slate-300 md:block" />
              )}
            </div>

            <h3 className="mt-5 text-lg font-semibold">{title}</h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* MISSION / VISION */}
  <section className="bg-[#edf5ff]">
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="text-sm font-medium text-indigo-700">
            Our Mission
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Inspire, Innovate, Share
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Our mission is to create digital experiences that inspire
            people, solve real problems and help businesses communicate
            their ideas clearly.
          </p>
        </div>

        <div className="overflow-hidden">
          <img
            src="/images/mission.jpg"
            alt="Our mission"
            className="h-[330px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>

      <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 overflow-hidden lg:order-1">
          <img
            src="/images/vision.jpg"
            alt="Our vision"
            className="h-[330px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sm font-medium text-indigo-700">
            Our Vision
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Laser focus
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
            We want to build a future where beautiful design and useful
            technology work together to make businesses stronger.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* BENEFITS */}
  <section className="py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          The benefits of working with us
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="bg-[#f5f6fb] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="text-2xl text-indigo-600">{benefit.icon}</div>

            <h3 className="mt-6 text-lg font-semibold">
              {benefit.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-7 border-t border-slate-200 pt-8">
        <strong className="text-2xl">100.000+</strong>

        <div className="flex flex-wrap gap-8 text-sm font-semibold text-slate-400">
          <span>logoipsum</span>
          <span>logoipsum</span>
          <span>logoipsum</span>
          <span>logoipsum</span>
          <span>logoipsum</span>
        </div>
      </div>
    </div>
  </section>

  {/* TEAM */}
  <section className="bg-[#f5f6fb] py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        Meet our team
      </h2>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white p-7 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl"
>
            <div className="mx-auto h-28 w-28 overflow-hidden rounded-full">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>

            <h3 className="mt-6 font-semibold">{member.name}</h3>

            <p className="mt-1 text-sm text-slate-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
</main>
); }
export default About;
