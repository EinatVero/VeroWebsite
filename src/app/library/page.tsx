'use client';

import { useState, useMemo } from 'react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type ContentType = 'Image' | 'Video' | 'Text' | 'URL';
type Category = 'Deepfake' | 'Misinformation' | 'Manipulated Media' | 'AI-Generated' | 'Scam' | 'Other';

interface LibraryEntry {
  id: number;
  contentType: ContentType;
  category: Category;
  title: string;
  description: string;
  trustScore: number;
  dateSubmitted: string;
  views: number;
}

/* ------------------------------------------------------------------ */
/*  Sample data                                                        */
/* ------------------------------------------------------------------ */

const SAMPLE_ENTRIES: LibraryEntry[] = [
  {
    id: 1,
    contentType: 'Video',
    category: 'Deepfake',
    title: 'Fake Celebrity Endorsement Video',
    description:
      'A deepfake video showing a well-known actor endorsing a cryptocurrency scheme. Face-swap artifacts visible around the jawline and inconsistent lighting on the face.',
    trustScore: 8,
    dateSubmitted: '2026-03-14',
    views: 4_821,
  },
  {
    id: 2,
    contentType: 'Text',
    category: 'Misinformation',
    title: 'Fabricated Breaking-News Headline',
    description:
      'A manipulated screenshot of a major news outlet with a completely fabricated headline about a government policy change. The font spacing and logo resolution are off.',
    trustScore: 15,
    dateSubmitted: '2026-03-10',
    views: 3_294,
  },
  {
    id: 3,
    contentType: 'Image',
    category: 'AI-Generated',
    title: 'AI-Generated "Photograph" of a Natural Disaster',
    description:
      'An image created by a generative model depicting a fictional earthquake. Telltale signs include warped text on buildings and inconsistent shadow directions.',
    trustScore: 5,
    dateSubmitted: '2026-03-08',
    views: 7_112,
  },
  {
    id: 4,
    contentType: 'Text',
    category: 'Misinformation',
    title: 'Viral Health Misinformation Post',
    description:
      'A social media post claiming a common household item cures a serious disease, citing a non-existent research paper and a fake university name.',
    trustScore: 12,
    dateSubmitted: '2026-03-05',
    views: 9_430,
  },
  {
    id: 5,
    contentType: 'URL',
    category: 'Scam',
    title: 'Phishing Page Mimicking a Bank Login',
    description:
      'A URL designed to look like a legitimate banking portal. The domain uses a Unicode homograph attack and the SSL certificate was issued minutes before distribution.',
    trustScore: 3,
    dateSubmitted: '2026-03-02',
    views: 2_105,
  },
  {
    id: 6,
    contentType: 'Text',
    category: 'AI-Generated',
    title: 'AI-Written "Investigative" News Article',
    description:
      'A lengthy article presenting fabricated quotes from real officials. Linguistic analysis shows repetitive sentence patterns and hallucinated source citations typical of LLM output.',
    trustScore: 18,
    dateSubmitted: '2026-02-27',
    views: 5_678,
  },
];

const CONTENT_TYPES: ContentType[] = ['Image', 'Video', 'Text', 'URL'];
const CATEGORIES: Category[] = [
  'Deepfake',
  'Misinformation',
  'Manipulated Media',
  'AI-Generated',
  'Scam',
  'Other',
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function trustScoreColor(score: number): string {
  if (score < 40) return 'text-red-600 bg-red-50 border-red-200';
  if (score <= 70) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
  return 'text-green-600 bg-green-50 border-green-200';
}

function trustScoreDot(score: number): string {
  if (score < 40) return 'bg-red-500';
  if (score <= 70) return 'bg-yellow-500';
  return 'bg-green-500';
}

function contentTypeBadge(type: ContentType): string {
  const map: Record<ContentType, string> = {
    Image: 'bg-purple-100 text-purple-700',
    Video: 'bg-blue-100 text-blue-700',
    Text: 'bg-amber-100 text-amber-700',
    URL: 'bg-emerald-100 text-emerald-700',
  };
  return map[type];
}

function categoryBadge(cat: Category): string {
  const map: Record<Category, string> = {
    Deepfake: 'bg-rose-100 text-rose-700',
    Misinformation: 'bg-orange-100 text-orange-700',
    'Manipulated Media': 'bg-fuchsia-100 text-fuchsia-700',
    'AI-Generated': 'bg-cyan-100 text-cyan-700',
    Scam: 'bg-red-100 text-red-700',
    Other: 'bg-gray-100 text-gray-700',
  };
  return map[cat];
}

function formatNumber(n: number): string {
  return n.toLocaleString('en-US');
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function LibraryPage() {
  /* Filters */
  const [filterType, setFilterType] = useState<ContentType | 'All'>('All');
  const [filterCategory, setFilterCategory] = useState<Category | 'All'>('All');

  /* Submit form state */
  const [formType, setFormType] = useState<ContentType>('Image');
  const [formInput, setFormInput] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formCategory, setFormCategory] = useState<Category>('Deepfake');
  const [toastVisible, setToastVisible] = useState(false);

  const filtered = useMemo(() => {
    return SAMPLE_ENTRIES.filter((e) => {
      if (filterType !== 'All' && e.contentType !== filterType) return false;
      if (filterCategory !== 'All' && e.category !== filterCategory) return false;
      return true;
    });
  }, [filterType, filterCategory]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3500);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast */}
      {toastVisible && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3 rounded-lg border border-green/30 bg-white px-5 py-3 shadow-lg animate-fade-in">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/10 text-teal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
              />
            </svg>
          </span>
          <p className="text-sm font-medium text-deep-green">
            Coming soon — submissions opening in beta.
          </p>
          <button
            onClick={() => setToastVisible(false)}
            className="ml-2 text-gray-400 hover:text-gray-600"
            aria-label="Dismiss"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* ---- Hero ---- */}
      <section className="bg-gradient-to-br from-deep-green to-deep-green-light py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Content Library
          </h1>
          <p className="mt-4 text-lg text-gray-300 sm:text-xl">
            A community-driven collection of verified and analyzed content.
            Explore real-world examples to sharpen your ability to evaluate
            what you see online.
          </p>
        </div>
      </section>

      {/* ---- Submit Section ---- */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-deep-green">
            Submit an Example
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Found fake or misleading content? Help the community by sharing it.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {/* Content type selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Content Type
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {CONTENT_TYPES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormType(t)}
                    className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                      formType === t
                        ? 'border-green bg-green text-white'
                        : 'border-gray-300 bg-white text-gray-600 hover:border-green hover:text-green'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* URL / text input */}
            <div>
              <label
                htmlFor="content-input"
                className="block text-sm font-medium text-gray-700"
              >
                {formType === 'Text' ? 'Paste the text' : 'URL'}
              </label>
              <input
                id="content-input"
                type={formType === 'Text' ? 'text' : 'url'}
                value={formInput}
                onChange={(e) => setFormInput(e.target.value)}
                placeholder={
                  formType === 'Text'
                    ? 'Paste the misleading text here...'
                    : 'https://example.com/...'
                }
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-green focus:outline-none focus:ring-1 focus:ring-teal"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                value={formCategory}
                onChange={(e) => setFormCategory(e.target.value as Category)}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm focus:border-green focus:outline-none focus:ring-1 focus:ring-teal"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Tell us more
              </label>
              <textarea
                id="description"
                rows={3}
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
                placeholder="Explain what you noticed about this content..."
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-green focus:outline-none focus:ring-1 focus:ring-teal"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-light focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Submit Example
            </button>
          </form>
        </div>
      </section>

      {/* ---- Filter Bar ---- */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-deep-green">
            Browse Examples
            <span className="ml-2 text-sm font-normal text-gray-400">
              ({filtered.length} result{filtered.length !== 1 ? 's' : ''})
            </span>
          </h2>

          <div className="flex flex-wrap gap-3">
            {/* Type filter */}
            <select
              value={filterType}
              onChange={(e) =>
                setFilterType(e.target.value as ContentType | 'All')
              }
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 focus:border-green focus:outline-none focus:ring-1 focus:ring-teal"
            >
              <option value="All">All Types</option>
              {CONTENT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            {/* Category filter */}
            <select
              value={filterCategory}
              onChange={(e) =>
                setFilterCategory(e.target.value as Category | 'All')
              }
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 focus:border-green focus:outline-none focus:ring-1 focus:ring-teal"
            >
              <option value="All">All Categories</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* ---- Gallery ---- */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-gray-400">
              No examples match the selected filters.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((entry) => (
              <article
                key={entry.id}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Card header */}
                <div className="flex items-center gap-2 border-b border-gray-100 px-5 py-3">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${contentTypeBadge(
                      entry.contentType,
                    )}`}
                  >
                    {entry.contentType}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryBadge(
                      entry.category,
                    )}`}
                  >
                    {entry.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col px-5 py-4">
                  <h3 className="text-base font-semibold text-deep-green group-hover:text-green transition-colors">
                    {entry.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                    {entry.description}
                  </p>
                </div>

                {/* Card footer */}
                <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3">
                  {/* Trust score */}
                  <div
                    className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${trustScoreColor(
                      entry.trustScore,
                    )}`}
                  >
                    <span
                      className={`inline-block h-2 w-2 rounded-full ${trustScoreDot(
                        entry.trustScore,
                      )}`}
                    />
                    {entry.trustScore}/100
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      {formatNumber(entry.views)}
                    </span>
                    <span>{entry.dateSubmitted}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
