import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glossary | Vero",
  description:
    "Understand every parameter in your Vero Trust Report. Simple explanations of scores, verdicts, and analysis results.",
};

function Term({
  icon,
  name,
  range,
  children,
}: {
  icon: string;
  name: string;
  range?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 py-3">
      <span className="text-lg shrink-0 mt-0.5">{icon}</span>
      <div>
        <div className="flex items-baseline gap-2 flex-wrap">
          <h4 className="font-semibold text-deep-green">{name}</h4>
          {range && (
            <span className="text-xs text-gray-400 font-mono">{range}</span>
          )}
        </div>
        <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

function VerdictItem({
  icon,
  label,
  desc,
}: {
  icon: string;
  label: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-2 py-1">
      <span className="text-sm shrink-0">{icon}</span>
      <p className="text-sm text-gray-600">
        <span className="font-medium text-deep-green">{label}</span>
        <span className="text-gray-400"> — </span>
        {desc}
      </p>
    </div>
  );
}

function SectionHeader({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-2xl font-bold text-deep-green">{title}</h2>
      </div>
      <p className="mt-1 text-sm text-gray-500 italic">{subtitle}</p>
      <div className="mt-3 border-b border-gray-200" />
    </div>
  );
}

export default function GlossaryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-green to-deep-green-light text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Glossary
          </h1>
          <p className="mt-4 text-green-pale">
            Understand every parameter in your Vero Trust Report.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              href="#source"
              className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              Source Analysis
            </a>
            <a
              href="#content"
              className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              Image / Video
            </a>
            <a
              href="#text"
              className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              Text Reliability
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* SOURCE ANALYSIS */}
        <section id="source" className="scroll-mt-24 mb-16">
          <SectionHeader
            icon="🌍"
            title="Source Analysis"
            subtitle="How trustworthy is the account that posted this content?"
          />

          <div className="divide-y divide-gray-100">
            <Term icon="🔰" name="Source Trust" range="0-100%">
              How credible the source account is, based on its history,
              verification status, and behavior.
            </Term>

            <div className="py-3">
              <div className="flex gap-3">
                <span className="text-lg shrink-0 mt-0.5">✅</span>
                <div>
                  <h4 className="font-semibold text-deep-green">Verdict</h4>
                  <div className="mt-2 space-y-0.5">
                    <VerdictItem icon="✅" label="Verified Source" desc="Established, verified account" />
                    <VerdictItem icon="🟢" label="Likely Authentic" desc="Credible account" />
                    <VerdictItem icon="🟡" label="Unverified" desc="Cannot fully verify" />
                    <VerdictItem icon="🟠" label="Use Caution" desc="Low credibility" />
                    <VerdictItem icon="🤖" label="Likely Bot" desc="Account appears automated" />
                    <VerdictItem icon="⚠️" label="Suspicious" desc="Suspicious patterns detected" />
                    <VerdictItem icon="⛔" label="Known Misinformation" desc="Flagged for spreading false info" />
                    <VerdictItem icon="❓" label="Anonymous" desc="Cannot determine identity" />
                  </div>
                </div>
              </div>
            </div>

            <Term icon="👤" name="Account">
              The name of the source account. A checkmark means it&apos;s verified.
            </Term>

            <Term icon="📊" name="Reliability" range="0-100">
              How reliable the source account is overall.
            </Term>

            <Term icon="🤖" name="Bot Risk" range="0-100%">
              The likelihood the account is automated.
            </Term>

            <Term icon="👥" name="Followers">
              The account&apos;s follower count, for context on its reach.
            </Term>
          </div>
        </section>

        {/* IMAGE / VIDEO ANALYSIS */}
        <section id="content" className="scroll-mt-24 mb-16">
          <SectionHeader
            icon="🖼️"
            title="Image / Video Analysis"
            subtitle="Is the image or video real, AI-generated, or manipulated?"
          />

          <div className="divide-y divide-gray-100">
            <div className="py-3">
              <div className="flex gap-3">
                <span className="text-lg shrink-0 mt-0.5">📊</span>
                <div>
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-semibold text-deep-green">Content Trust</h4>
                    <span className="text-xs text-gray-400 font-mono">0-100%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">
                    How confident Vero is that the content is authentic. Higher is better.
                  </p>
                  <div className="mt-3 space-y-0.5">
                    <VerdictItem icon="🟢" label="Likely Authentic" desc="80-100%" />
                    <VerdictItem icon="🟡" label="Mostly Credible" desc="60-79%" />
                    <VerdictItem icon="🟠" label="Questionable" desc="40-59%" />
                    <VerdictItem icon="🔴" label="Likely Manipulated" desc="20-39%" />
                    <VerdictItem icon="⛔" label="Fake Or Manipulated" desc="0-19%" />
                  </div>
                </div>
              </div>
            </div>

            <Term icon="🤖" name="AI Generated" range="Low / Medium / High / Very High">
              The likelihood the content was created using AI tools.
            </Term>

            <Term icon="🎭" name="Deepfake" range="Low / Medium / High / Very High">
              The likelihood that faces have been swapped, manipulated, or generated by AI.
            </Term>

            <Term icon="✂️" name="Manipulation" range="Low / Medium / High / Very High">
              The likelihood the content has been digitally edited to change the story.
            </Term>

            <Term icon="💬" name="Explanation">
              A plain-language summary of what Vero found.
            </Term>

            <Term icon="⚠️" name="Red Flags">
              Specific concerns detected, such as inconsistent lighting, unnatural edges, or signs of editing. Only shown when the score is low.
            </Term>
          </div>
        </section>

        {/* TEXT RELIABILITY */}
        <section id="text" className="scroll-mt-24 mb-16">
          <SectionHeader
            icon="📝"
            title="Text Reliability"
            subtitle="Are the claims in the text backed by reputable sources?"
          />

          <div className="divide-y divide-gray-100">
            <div className="py-3">
              <div className="flex gap-3">
                <span className="text-lg shrink-0 mt-0.5">📋</span>
                <div>
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-semibold text-deep-green">Text Reliability</h4>
                    <span className="text-xs text-gray-400 font-mono">0-100%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">
                    Whether the claims are corroborated by reputable news sources.
                  </p>
                  <div className="mt-3 space-y-0.5">
                    <VerdictItem icon="🟢" label="70-100%" desc="Found on multiple reputable sources" />
                    <VerdictItem icon="🟡" label="50-69%" desc="Found on one reputable source" />
                    <VerdictItem icon="🟠" label="30-49%" desc="Found online but not on trusted outlets" />
                    <VerdictItem icon="🔴" label="0-29%" desc="No other sources found" />
                  </div>
                </div>
              </div>
            </div>

            <Term icon="🔗" name="Found on">
              Links to reputable news sources reporting the same information.
            </Term>

            <Term icon="📊" name="Factual Accuracy" range="0-100%">
              How factually accurate the claims appear to be.
            </Term>

            <Term icon="📝" name="Caption Analysis">
              Plain-language analysis of the caption for misleading framing or manipulation.
            </Term>

            <div className="py-3">
              <div className="flex gap-3">
                <span className="text-lg shrink-0 mt-0.5">📋</span>
                <div>
                  <h4 className="font-semibold text-deep-green">Fact Check</h4>
                  <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">
                    Individual claims, each marked:
                  </p>
                  <div className="mt-2 space-y-0.5">
                    <VerdictItem icon="✓" label="Verified" desc="Claim appears to be factually correct" />
                    <VerdictItem icon="✗" label="False" desc="Claim appears to be factually incorrect" />
                    <VerdictItem icon="~" label="Unverified" desc="Cannot determine accuracy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AFTER YOUR RESULT */}
        <section id="commands" className="scroll-mt-24">
          <SectionHeader
            icon="💬"
            title="After Your Result"
            subtitle="Commands and feedback options available after each analysis."
          />

          <div className="divide-y divide-gray-100">
            <Term icon="📄" name="details">
              Type this to get the full detailed report after receiving your initial result.
            </Term>

            <Term icon="💬" name="Feedback">
              Write text, send a voice message, or rate 1-5 to help us improve.
            </Term>
          </div>
        </section>
      </div>
    </main>
  );
}
