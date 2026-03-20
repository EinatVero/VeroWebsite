import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Vero | AI Content Verification",
  description:
    "Learn about Vero's mission to combat misinformation with AI-powered content verification.",
};

const values = [
  {
    title: "Truth",
    description:
      "We are committed to surfacing the truth. Every analysis we deliver is grounded in evidence, not opinion.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "We show our reasoning. Every verification comes with a detailed breakdown so you understand why content is scored the way it is.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "Accessibility",
    description:
      "Verification should be available to everyone. That is why Vero works through WhatsApp, the app billions already use every day.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "We combine cutting-edge AI models, forensic analysis, and multi-source verification to stay ahead of evolving manipulation techniques.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

const teamMembers = [
  { role: "Founder & CEO", placeholder: "Team Member" },
  { role: "AI Lead", placeholder: "Team Member" },
  { role: "Product Lead", placeholder: "Team Member" },
  { role: "Engineering Lead", placeholder: "Team Member" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Vero
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Vero is an AI-powered content verification platform that helps
            people distinguish real content from manipulated or AI-generated
            media. We are building the trust layer for the information age.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
              We believe in a fake-free world
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Vero was founded by a group of people who care deeply about truth.
              In a world where AI-generated content is becoming indistinguishable
              from reality, we saw the need for a simple, accessible tool that
              empowers everyone to verify what they see, read, and share.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our mission is to make the world more truthful and safer by giving
              people the tools to fight misinformation, one message at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
            Our Values
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0d9488]/10 text-[#0d9488]">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1e3a5f]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Vero Works */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
            How Vero Works
          </h2>
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-sm font-bold text-white">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Send content via WhatsApp
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Forward any suspicious image, video, text, or URL to the
                    Vero WhatsApp number. No app to install, no signup required.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-sm font-bold text-white">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    AI-powered multi-source analysis
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Vero analyzes your content using advanced AI models including
                    Google Gemini, forensic image analysis, deepfake detection,
                    and reverse image search to cross-reference multiple sources.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-sm font-bold text-white">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Get a trust score and detailed report
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Within seconds, receive a clear trust score (0-100) along
                    with a detailed breakdown explaining why the content was
                    scored that way, including AI probability, manipulation
                    indicators, and fact-check results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
            Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            A passionate team of engineers, researchers, and product builders
            united by a shared commitment to truth.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.role}
                className="flex flex-col items-center rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1e3a5f]/10">
                  <svg
                    className="h-10 w-10 text-[#1e3a5f]/40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <p className="mt-4 font-medium text-gray-400">
                  {member.placeholder}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0d9488]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-[#1e3a5f] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Vision
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            A world where everyone can verify what they see, read, and share.
            Where misinformation loses its power because people have the tools
            to question, verify, and trust with confidence.
          </p>
          <div className="mt-10">
            <a
              href="/"
              className="inline-flex items-center rounded-full bg-[#0d9488] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0d9488]/90"
            >
              Learn more about what we do
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
