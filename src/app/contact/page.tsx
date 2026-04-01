export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-deep-green px-6 py-20 text-white sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-300">
            Have questions about Vero? Want to report an issue or give feedback? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-deep-green mb-8">Get In Touch</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-2xl flex-shrink-0">
                    ✉
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-green mb-1">Email</h3>
                    <a href="mailto:info@vero-lab.com" className="text-gray-600 hover:text-green transition-colors">
                      info@vero-lab.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-2xl flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-green mb-1">WhatsApp</h3>
                    <p className="text-gray-600">Send us a message on WhatsApp to try Vero or get support.</p>
                    <a
                      href="https://wa.me/14155238886"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block rounded-full bg-green px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-light"
                    >
                      Message Us on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-2xl flex-shrink-0">
                    🌐
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-green mb-1">Website</h3>
                    <a href="https://www.vero-lab.com" className="text-gray-600 hover:text-green transition-colors">
                      www.vero-lab.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-semibold text-deep-green mb-3">Company Info</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Vero-Lab is a project owned and operated by Meditance Investments Ltd.</p>
                  <p className="mt-2 font-medium text-gray-700">Meditance Investments Ltd.</p>
                  <p>BVI Registration Number: 1856997</p>
                  <p>Palm Grove House, P.O. Box 438, Road Town, Tortola, British Virgin Islands</p>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-deep-green mb-8">Send Us a Message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-green focus:ring-2 focus:ring-green/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-green focus:ring-2 focus:ring-green/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-green focus:ring-2 focus:ring-green/20"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press / Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-green focus:ring-2 focus:ring-green/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-green px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-green-light focus:outline-none focus:ring-2 focus:ring-green/50 focus:ring-offset-2"
                >
                  Send Message
                </button>
                <p className="text-xs text-gray-500 text-center">
                  We typically respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
