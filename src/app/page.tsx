export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-deep-blue px-6 py-24 text-white sm:py-32 lg:px-8">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-teal blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-teal-light blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-light">
            AI-Powered Verification
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Verify the Truth
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            In a world flooded with AI-generated content and misinformation,
            Vero gives you the power to know what&apos;s real. Send any content
            via WhatsApp and get an instant, AI-powered trust score.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-teal-light hover:shadow-xl"
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
            <h2 className="text-3xl font-bold text-deep-blue sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Verifying content takes seconds. No app downloads, no sign-ups
              &mdash; just WhatsApp.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal/10 text-3xl">
                &#128228;
              </div>
              <div className="absolute -top-3 left-8 flex h-7 w-7 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold text-deep-blue">
                Send Content
              </h3>
              <p className="mt-3 text-gray-600">
                Forward any suspicious image, video, URL, or text to our
                WhatsApp bot. It works with content from any platform &mdash;
                social media, messaging apps, or websites.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal/10 text-3xl">
                &#129302;
              </div>
              <div className="absolute -top-3 left-8 flex h-7 w-7 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold text-deep-blue">
                AI Analysis
              </h3>
              <p className="mt-3 text-gray-600">
                Our multi-engine AI pipeline analyzes your content using advanced
                models for deepfake detection, manipulation analysis, source
                verification, and fact-checking.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal/10 text-3xl">
                &#9989;
              </div>
              <div className="absolute -top-3 left-8 flex h-7 w-7 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold text-deep-blue">
                Get Results
              </h3>
              <p className="mt-3 text-gray-600">
                Receive a detailed trust score with clear reasoning, source
                analysis, and actionable insights &mdash; all within seconds,
                right in your WhatsApp chat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Verify */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-deep-blue sm:text-4xl">
              What We Verify
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Vero analyzes all major content types to detect AI generation,
              manipulation, and misinformation.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Images */}
            <div className="group rounded-2xl border border-gray-100 p-8 text-center transition-all hover:border-teal/30 hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition-colors group-hover:bg-teal/10">
                &#128247;
              </div>
              <h3 className="text-lg font-semibold text-deep-blue">Images</h3>
              <p className="mt-3 text-sm text-gray-600">
                Detect AI-generated images, deepfakes, Photoshop manipulations,
                and misleading visual content from any source.
              </p>
            </div>

            {/* Videos */}
            <div className="group rounded-2xl border border-gray-100 p-8 text-center transition-all hover:border-teal/30 hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition-colors group-hover:bg-teal/10">
                &#127909;
              </div>
              <h3 className="text-lg font-semibold text-deep-blue">Videos</h3>
              <p className="mt-3 text-sm text-gray-600">
                Analyze video content frame-by-frame for deepfake indicators, AI
                watermarks, synthetic voices, and manipulated footage.
              </p>
            </div>

            {/* URLs */}
            <div className="group rounded-2xl border border-gray-100 p-8 text-center transition-all hover:border-teal/30 hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition-colors group-hover:bg-teal/10">
                &#128279;
              </div>
              <h3 className="text-lg font-semibold text-deep-blue">URLs</h3>
              <p className="mt-3 text-sm text-gray-600">
                Verify articles and web pages for misinformation, check source
                credibility, cross-reference claims, and assess content
                reliability.
              </p>
            </div>

            {/* Text */}
            <div className="group rounded-2xl border border-gray-100 p-8 text-center transition-all hover:border-teal/30 hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition-colors group-hover:bg-teal/10">
                &#128221;
              </div>
              <h3 className="text-lg font-semibold text-deep-blue">Text</h3>
              <p className="mt-3 text-sm text-gray-600">
                Analyze forwarded messages, claims, and quotes for factual
                accuracy, detect AI-generated text, and identify viral
                misinformation.
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
              <h2 className="text-3xl font-bold text-deep-blue sm:text-4xl">
                The Trust Score
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Every piece of content receives a trust score from 0 to 100,
                giving you a clear, at-a-glance assessment of authenticity. The
                score is backed by detailed reasoning so you understand exactly
                why content was rated the way it was.
              </p>
              <p className="mt-4 text-gray-600">
                Our scoring combines multiple AI engines, cross-referencing
                results to minimize false positives and deliver reliable
                assessments you can act on.
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
                    <h4 className="font-semibold text-deep-blue">
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
                    <h4 className="font-semibold text-deep-blue">
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
                    <h4 className="font-semibold text-deep-blue">
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
                    <h4 className="font-semibold text-deep-blue">
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
                    <h4 className="font-semibold text-deep-blue">
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
          <h2 className="text-3xl font-bold text-deep-blue sm:text-4xl">
            Powered By Leading AI
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Vero combines multiple AI engines to deliver comprehensive analysis.
            No single model has all the answers &mdash; our multi-engine
            approach ensures thorough verification.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {/* Gemini */}
            <div className="rounded-2xl border border-gray-100 p-8 transition-shadow hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                &#9670;
              </div>
              <h3 className="text-xl font-semibold text-deep-blue">
                Google Gemini
              </h3>
              <p className="mt-3 text-gray-600">
                Advanced multimodal AI for deep content understanding, fact
                verification, and contextual analysis of text, images, and
                video.
              </p>
            </div>

            {/* Sightengine */}
            <div className="rounded-2xl border border-gray-100 p-8 transition-shadow hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                &#128065;
              </div>
              <h3 className="text-xl font-semibold text-deep-blue">
                Sightengine
              </h3>
              <p className="mt-3 text-gray-600">
                Specialized visual AI for detecting image manipulations,
                AI-generated visuals, and forensic-level analysis of visual
                media.
              </p>
            </div>

            {/* XPOZ */}
            <div className="rounded-2xl border border-gray-100 p-8 transition-shadow hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                &#128270;
              </div>
              <h3 className="text-xl font-semibold text-deep-blue">XPOZ</h3>
              <p className="mt-3 text-gray-600">
                Deepfake detection engine specialized in identifying synthetic
                faces, voice cloning, and AI-generated human likenesses in media
                content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-deep-blue px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Stop the Spread of Misinformation
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Every piece of fake content you verify is one less piece of
            misinformation in the world. Join thousands of users who are already
            using Vero to check before they share.
          </p>
          <div className="mt-10">
            <a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-teal-light hover:shadow-xl"
            >
              <span className="text-xl">&#9993;</span>
              Start Verifying on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Free to use. No app download required. Just send a message.
          </p>
        </div>
      </section>
    </div>
  );
}
