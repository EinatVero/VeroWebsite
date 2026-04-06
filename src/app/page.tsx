export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-deep-green px-6 py-24 text-white sm:py-32 lg:px-8">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-green blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-green-light blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-light">
            AI-Powered Verification
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            The Truth Is Out There
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Vero-Lab helps you assess whether digital content is authentic,
            AI-generated, or manipulated. Start by sending content for
            verification via WhatsApp.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/14155238886"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-green-light hover:shadow-xl"
            >
              <span className="text-xl">&#9993;</span>
              Try Vero on WhatsApp
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Learn More
              <span>&#8595;</span>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-light-gray px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-deep-green sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              A simple, user-initiated process. No app downloads, no sign-ups
              &mdash; just WhatsApp.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal/10 text-3xl">
                &#128228;
              </div>
              <div className="absolute -top-3 left-8 flex h-7 w-7 items-center justify-center rounded-full bg-green text-sm font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold text-deep-green">
                Send Content
              </h3>
              <p className="mt-3 text-gray-600">
                Send any image, video, URL, or text you&apos;d like to verify to
                Vero-Lab via WhatsApp. You start the process &mdash; we respond
                with results.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal/10 text-3xl">
                &#129302;
              </div>
              <div className="absolute -top-3 left-8 flex h-7 w-7 items-center justify-center rounded-full bg-green text-sm font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold text-deep-green">
                AI Analysis
              </h3>
              <p className="mt-3 text-gray-600">
                Vero-Lab runs your content through multiple independent
                verification engines, including visual analysis, source
                verification, and content checks.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal/10 text-3xl">
                &#9989;
              </div>
              <div className="absolute -top-3 left-8 flex h-7 w-7 items-center justify-center rounded-full bg-green text-sm font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold text-deep-green">
                Get Results
              </h3>
              <p className="mt-3 text-gray-600">
                Receive a detailed trust score with clear reasoning, source
                analysis, and actionable insights &mdash; typically within
                30-60 seconds, right in your WhatsApp chat.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-gray-500">
            The verification flow is always user-initiated &mdash; you choose what to send, and Vero-Lab responds with structured results.
          </p>
        </div>
      </section>

      {/* What We Verify */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-deep-green sm:text-4xl">
              What We Verify
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Vero-Lab reviews all major content types to help assess authenticity
              and identify potential concerns.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Images */}
            <div className="group rounded-2xl border border-gray-100 p-8 text-center transition-all hover:border-green/30 hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition-colors group-hover:bg-green/10">
                &#128247;
              </div>
              <h3 className="text-lg font-semibold text-deep-green">Images</h3>
              <p className="mt-3 text-sm text-gray-600">
                Review images for signs of AI generation, manipulation,
                or misleading visual content.
              </p>
            </div>

            {/* Videos */}
            <div className="group rounded-2xl border border-gray-100 p-8 text-center transition-all hover:border-green/30 hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition-colors group-hover:bg-green/10">
                &#127909;
              </div>
              <h3 className="text-lg font-semibold text-deep-green">Videos</h3>
              <p className="mt-3 text-sm text-gray-600">
                Assess video content for deepfake indicators, AI-generated
                elements, and signs of manipulation.
              </p>
            </div>

            {/* URLs */}
            <div className="group rounded-2xl border border-gray-100 p-8 text-center transition-all hover:border-green/30 hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition-colors group-hover:bg-green/10">
                &#128279;
              </div>
              <h3 className="text-lg font-semibold text-deep-green">URLs</h3>
              <p className="mt-3 text-sm text-gray-600">
                Check source credibility, cross-reference claims, and
                assess content reliability for shared links and articles.
              </p>
            </div>

            {/* Text */}
            <div className="group rounded-2xl border border-gray-100 p-8 text-center transition-all hover:border-green/30 hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition-colors group-hover:bg-green/10">
                &#128221;
              </div>
              <h3 className="text-lg font-semibold text-deep-green">Text</h3>
              <p className="mt-3 text-sm text-gray-600">
                Review forwarded messages, claims, and quotes for factual
                accuracy and signs of AI-generated or misleading text.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Score */}
      <section className="bg-light-gray px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-deep-green sm:text-4xl">
                The Trust Score
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Each analysis produces a trust score from 0 to 100,
                giving you a clear, at-a-glance assessment of authenticity. The
                score is backed by detailed reasoning so you understand exactly
                why content was rated the way it was.
              </p>
              <p className="mt-4 text-gray-600">
                The scoring process cross-references multiple independent
                verification engines to provide a structured, multi-layered
                assessment.
              </p>
            </div>

            <div className="space-y-4">
              {/* Score Ranges */}
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-700">
                    80+
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-green">
                      High Authenticity
                    </h4>
                    <p className="text-sm text-gray-600">
                      Content verified from credible sources with strong
                      evidence of authenticity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-100 text-lg font-bold text-lime-700">
                    60+
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-green">
                      Mostly Credible
                    </h4>
                    <p className="text-sm text-gray-600">
                      Generally reliable with minor concerns. Some elements may
                      need additional verification.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-lg font-bold text-yellow-700">
                    40+
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-green">
                      Uncertain
                    </h4>
                    <p className="text-sm text-gray-600">
                      Mixed signals detected. Exercise caution and seek
                      additional sources before sharing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-lg font-bold text-orange-700">
                    20+
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-green">
                      Significant Concerns
                    </h4>
                    <p className="text-sm text-gray-600">
                      Multiple red flags identified. Content likely contains
                      manipulations or false claims.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-lg font-bold text-red-700">
                    0+
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-green">
                      Likely Fake
                    </h4>
                    <p className="text-sm text-gray-600">
                      Strong evidence of AI generation, deepfake manipulation,
                      or confirmed misinformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powered By */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-deep-green sm:text-4xl">
            Built on Multiple Verification Engines
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Vero-Lab uses multiple independent verification tools to provide
            structured analysis. No single method catches everything &mdash;
            a multi-engine approach helps cover more ground.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 p-8 transition-shadow hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green/10 text-3xl">
                &#129504;
              </div>
              <h3 className="text-xl font-semibold text-deep-green">
                AI Content Analysis
              </h3>
              <p className="mt-3 text-gray-600">
                AI models for content understanding, contextual analysis,
                and structured assessment of text, images, and video.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 p-8 transition-shadow hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green/10 text-3xl">
                &#128065;
              </div>
              <h3 className="text-xl font-semibold text-deep-green">
                Visual Forensics
              </h3>
              <p className="mt-3 text-gray-600">
                Forensic analysis tools for reviewing image integrity,
                AI-generated indicators, and visual manipulation signals.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 p-8 transition-shadow hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green/10 text-3xl">
                &#128101;
              </div>
              <h3 className="text-xl font-semibold text-deep-green">
                Source Verification
              </h3>
              <p className="mt-3 text-gray-600">
                Profile analysis and source cross-referencing to provide
                context on where content originates and who shared it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Vero-Lab */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold text-deep-green">About Vero-Lab</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Vero-Lab is a content verification tool developed and operated by
            Meditance Investments Ltd. It is designed to help users review
            digital content shared online and receive structured verification
            results through a simple, user-initiated process.
          </p>
          <p className="mt-3 text-gray-500 text-sm">
            Every verification begins with the user. Vero-Lab does not collect,
            scrape, or analyze content without explicit user action.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-deep-green px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Verify Before You Share
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Check the content you encounter online. Make informed decisions
            about what you see and share.
          </p>
          <div className="mt-10">
            <a
              href="https://wa.me/14155238886"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-green-light hover:shadow-xl"
            >
              <span className="text-xl">&#9993;</span>
              Try Vero-Lab on WhatsApp
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            Start by sending content for verification via WhatsApp.
          </p>
          <p className="mt-2 text-xs text-gray-400">
            No account required. No automated outreach. You start every request.
          </p>
        </div>
      </section>
    </div>
  );
}
