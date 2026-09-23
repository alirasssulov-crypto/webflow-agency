import { useState } from "react";

const subjects = ["General question", "Project inquiry", "Partnership", "Support"];

const inputClass =
  "w-full rounded-md border border-slate-300 bg-[#f4f5fa] px-6 py-4 text-sm text-[#171827] placeholder:text-[#171827] outline-none transition focus:border-[#20205b] focus:bg-white";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <section className="bg-white px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="animate-fade-up text-center">
          <h1 className="text-4xl font-bold text-[#282938] md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-slate-500 md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-14 max-w-4xl rounded-lg bg-[#f4f5fa] px-6 py-10 md:px-16 md:py-14"
        >
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <label className="block">
              <span className="mb-3 block font-medium">Name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className={inputClass}
              />
            </label>

            <label className="block">
              <span className="mb-3 block font-medium">Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your Email"
                className={inputClass}
              />
            </label>

            <label className="block">
              <span className="mb-3 block font-medium">Subject</span>
              <input
                type="text"
                name="context"
                placeholder="Provide context"
                className={inputClass}
              />
            </label>

            <label className="block">
              <span className="mb-3 block font-medium">Subject</span>
              <select
                name="subject"
                defaultValue=""
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" disabled>
                  Select Subject
                </option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <label className="block md:col-span-2">
              <span className="mb-3 block font-medium">Message</span>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Write your  question here"
                className={`${inputClass} resize-none`}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 rounded-full bg-[#282938] px-16 py-4 font-medium text-white transition hover:bg-[#20205b]"
          >
            Send Messege
          </button>

          {sent && (
            <p className="mt-5 text-sm text-green-600">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
