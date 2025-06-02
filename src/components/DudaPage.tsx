import React from "react";

const DudaPage = () => {
  return (
    <div className="bg-dark text-white min-h-screen">
      {/* Hero Section */}
      <div className="py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Optimise every Duda page in one click
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Titles, slugs, schema &amp; indexing—sorted while your coffee's still hot.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button className="px-8 py-3 bg-electric-cyan text-dark rounded-xl font-semibold hover:bg-electric-cyan/90 transition-all transform hover:scale-105">
            Start free →
          </button>
          <a
            href="#tour"
            className="px-8 py-3 border-2 border-electric-cyan text-electric-cyan rounded-xl font-semibold hover:bg-electric-cyan/10 transition-all flex items-center justify-center"
          >
            Watch 2‑min tour
          </a>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="py-6 bg-[#181A20] border-b border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
          <span className="text-gray-400 text-lg">
            Used by agencies that build hundreds of Duda sites every month
          </span>
          <div className="flex gap-6 mt-2 md:mt-0">
            <span className="bg-gray-700 rounded px-3 py-1 text-sm font-semibold">AgencyOne</span>
            <span className="bg-gray-700 rounded px-3 py-1 text-sm font-semibold">PixelForge</span>
            <span className="bg-gray-700 rounded px-3 py-1 text-sm font-semibold">WebWorks</span>
            <span className="bg-gray-700 rounded px-3 py-1 text-sm font-semibold">LaunchLab</span>
          </div>
        </div>
      </div>

      {/* SEO Wall Table */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          The Duda SEO Wall – Why good pages never rank
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border border-gray-700 rounded-xl overflow-hidden">
            <thead className="bg-[#23262F] text-gray-300">
              <tr>
                <th className="py-3 px-4 font-semibold">Roadblock</th>
                <th className="py-3 px-4 font-semibold">Why it happens in Duda</th>
                <th className="py-3 px-4 font-semibold">Business impact</th>
              </tr>
            </thead>
            <tbody className="bg-[#1A1C23]">
              <tr className="border-t border-gray-700">
                <td className="py-3 px-4">Meta tags &amp; slugs tweaked one‑by‑one</td>
                <td className="py-3 px-4">No bulk interface; editor exposes fields per page only</td>
                <td className="py-3 px-4">Slow launches, forgotten "Lorem ipsum" metas</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3 px-4">Template‑driven duplicate content</td>
                <td className="py-3 px-4">Dynamic pages reuse same layout/copy; canonical tags must be manual</td>
                <td className="py-3 px-4">Diluted rankings, crawl budget wasted</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3 px-4">Widget bloat hurts Core Web Vitals</td>
                <td className="py-3 px-4">Third‑party embeds load extra JS/CSS; images uncompressed</td>
                <td className="py-3 px-4">Failing LCP/INP knocks you down the SERP</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3 px-4">No instant index ping</td>
                <td className="py-3 px-4">Sitemap is passive; no IndexNow or URL Inspection triggers</td>
                <td className="py-3 px-4">New pages wait days to appear in Google</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3 px-4">URL clean‑up is manual</td>
                <td className="py-3 px-4">Mass renames &amp; 301s need dev time</td>
                <td className="py-3 px-4">Legacy clutter lives on for years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Meet RankSync – AI SEO that plugs straight into Duda
        </h2>
        <p className="text-lg text-gray-300 mb-8 font-medium">
          One‑click optimisation. Zero copy‑paste.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <ul className="space-y-3">
            <li>
              <span className="font-bold text-electric-cyan">•</span> Bulk Meta Rewrite – AI rewrites every title & description, aligned to keyword intent.
            </li>
            <li>
              <span className="font-bold text-electric-cyan">•</span> Smart Slug Cleaner – Scans the whole site, suggests clean URLs and auto‑builds 301s.
            </li>
            <li>
              <span className="font-bold text-electric-cyan">•</span> Schema Injection – Instantly adds Product, FAQ, Local & Article JSON‑LD—no code widgets.
            </li>
          </ul>
          <ul className="space-y-3">
            <li>
              <span className="font-bold text-electric-cyan">•</span> IndexNow + Google API Push – Pings all major engines the second you hit publish.
            </li>
            <li>
              <span className="font-bold text-electric-cyan">•</span> Core Web Vitals Guardrails – Compresses heavy images, lazy‑loads embeds, flags slow widgets.
            </li>
            <li>
              <span className="font-bold text-electric-cyan">•</span> Health Dashboard – Real‑language checklist keeps duplicates, cannibals & orphan pages away.
            </li>
          </ul>
        </div>
        <p className="mt-8 text-gray-400">
          Everything is included in the{" "}
          <span className="font-semibold text-white">$29/mo Starter plan</span>—no add‑ons, no page‑count fees.
        </p>
      </div>

      {/* How it Works */}
      <div className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          How RankSync works on your Duda site
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-lg text-gray-200">
          <li>
            <span className="text-white font-semibold">Install from the Duda App Store</span> – OAuth lets you pick the site(s) to connect.
          </li>
          <li>
            <span className="text-white font-semibold">Choose optimisation scope</span> – All pages, a collection, or any folder path.
          </li>
          <li>
            <span className="text-white font-semibold">Preview AI suggestions</span> – Edit anything inline or approve in bulk.
          </li>
          <li>
            <span className="text-white font-semibold">Click "Optimise"</span> – RankSync writes to Duda via API, injects schema, 301s & publishes.
          </li>
          <li>
            <span className="text-white font-semibold">Watch the dashboard</span> – Track Core Web Vitals, index status & ranking lifts in real time.
          </li>
        </ol>
        <blockquote className="mt-8 text-center text-lg text-electric-cyan font-semibold">
          Total hands‑on time: ≈ 3 minutes for a 100‑page site.
        </blockquote>
      </div>

      {/* Results / Case Study */}
      <div className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Results that speak (case study)</h2>
        <blockquote className="text-xl text-gray-200 italic mb-4">
          "We shaved 11 hours off launch and saw{" "}
          <span className="text-electric-cyan font-bold">+34 % organic clicks in 30 days.</span>{" "}
          Our clients never saw a single SEO warning in Search Console."
          <br />
          <span className="not-italic font-semibold text-white">— Alex R., Agency Owner</span>
        </blockquote>
        <a href="#" className="inline-block mt-2 text-electric-cyan underline font-semibold">
          Download full case study →
        </a>
      </div>

      {/* FAQs */}
      <div className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">FAQs</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Will RankSync overwrite my custom copy?</h3>
            <p className="text-gray-300">
              No. You choose which pages and fields to optimise. Nothing changes until you click <em>Approve</em>.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Does it slow my Duda site down?</h3>
            <p className="text-gray-300">
              No. RankSync works via the Duda API and injects lightweight JSON‑LD; no extra scripts run on your site.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">How fast will I see ranking gains?</h3>
            <p className="text-gray-300">
              Most users notice improvements in index coverage within days and traffic lifts within 4–6 weeks, depending on competition.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Can I cancel anytime?</h3>
            <p className="text-gray-300">
              Yes. There are no contracts and you can downgrade or cancel inside the dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 px-4 text-center bg-[#181A20] border-t border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start your free optimisation audit now
        </h2>
        <button className="mt-4 px-10 py-4 bg-electric-cyan text-dark rounded-xl font-semibold text-lg hover:bg-electric-cyan/90 transition-all transform hover:scale-105">
          Get started free →
        </button>
        <p className="mt-2 text-gray-400">5‑minute setup • No credit card required</p>
      </div>
    </div>
  );
};

export default DudaPage;
