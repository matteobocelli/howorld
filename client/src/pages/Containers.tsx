import FadeUp from "@/components/FadeUp";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";

// Define news data outside for performance
const MICROELECTRONICS_NEWS = [
  {
    newsId: "news-001",
    headline: "Semiconductor Industry Breakthrough in 3nm Process",
    summary:
      "Leading fabs have achieved commercial 3nm chip production, promising faster and more power-efficient devices.",
    datePublished: "2024-04-25",
    sourceName: "Electronics Weekly",
    sourceUrl: "https://electronicsweekly.com/article/3nm-breakthrough",
    category: "Manufacturing",
    tags: ["Semiconductors", "Process", "Innovation"],
    relevanceScore: 9.8,
  },
  {
    newsId: "news-002",
    headline: "Major Investment in AI Chip R&D",
    summary:
      "Top chip manufacturers announce a combined $5B investment to accelerate AI hardware development.",
    datePublished: "2024-04-24",
    sourceName: "TechNews",
    sourceUrl: "https://technews.com/article/ai-chip-investment",
    category: "Investment",
    tags: ["AI", "Chips", "R&D"],
    relevanceScore: 9.5,
  },
  {
    newsId: "news-003",
    headline: "New Memory Tech Promises Faster Mobile Storage",
    summary:
      "Researchers develop a new non-volatile memory with faster read/write speeds suitable for smartphones.",
    datePublished: "2024-04-23",
    sourceName: "EE Times",
    sourceUrl: "https://eetimes.com/article/new-memory-tech",
    category: "Research",
    tags: ["Memory", "Mobile", "Research"],
    relevanceScore: 9.3,
  },
  {
    newsId: "news-004",
    headline: "Quantum Chips Enter Commercial Trials",
    summary:
      "Quantum processors from multiple vendors are now in pilot testing for cryptography and complex simulations.",
    datePublished: "2024-04-22",
    sourceName: "Quantum Daily",
    sourceUrl: "https://quantumdaily.com/article/quantum-chips-trials",
    category: "Quantum Computing",
    tags: ["Quantum", "Cryptography", "Processors"],
    relevanceScore: 9.7,
  },
  {
    newsId: "news-005",
    headline: "Flexible Electronics for Wearables Made Possible",
    summary:
      "New flexible materials enable foldable smart devices, opening opportunities in health tech and fashion.",
    datePublished: "2024-04-21",
    sourceName: "Flexible Electronics News",
    sourceUrl: "https://flexibleelectronics.com/article/foldable-devices",
    category: "Materials",
    tags: ["Flexible", "Wearables", "Materials"],
    relevanceScore: 9.4,
  },
];

// NewsUpdate component
function NewsUpdate({ news }) {
  if (!news) return null; // Defensive check

  return (
    <div
      id={news.newsId}
      className="scroll-mt-20 py-12 lg:py-16 border-b last:border-0 border-[var(--border)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left: Headline, summary, date */}
        <div className="lg:col-span-4">
          <FadeUp>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-5xl font-bold leading-none"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "#D97706",
                }}
              >
                {news.relevanceScore >= 9.5 ? "🔥" : "📰"}
              </span>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {news.headline}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {news.summary}
            </p>
            <div className="text-sm text-muted-foreground mb-4">
              <strong>Date:</strong> {news.datePublished}
            </div>
            {/* Source link */}
            <div className="mt-4">
              <a
                href={news.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--amber)] hover:underline"
              >
                <ExternalLink size={14} /> Read More
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Right: Details table */}
        <div className="lg:col-span-8">
          <FadeUp delay={1}>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th
                    colSpan={2}
                    className="text-left py-2.5 px-4 bg-[var(--surface)] text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-3 px-4 border-b border-[var(--border)] w-1/2">
                    Category
                  </td>
                  <td className="py-3 px-4 border-b border-[var(--border)]">
                    {news.category}
                  </td>
                </tr>
                <tr className="bg-[var(--surface)]">
                  <td className="py-3 px-4 border-b border-[var(--border)]">
                    Tags
                  </td>
                  <td className="py-3 px-4 border-b border-[var(--border)]">
                    {news.tags.join(", ")}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 border-b border-[var(--border)]">
                    Source
                  </td>
                  <td className="py-3 px-4 border-b border-[var(--border)]">
                    {news.sourceName}
                  </td>
                </tr>
                <tr className="bg-[var(--surface)]">
                  <td className="py-3 px-4 border-b border-[var(--border)]">
                    Relevance
                  </td>
                  <td className="py-3 px-4 border-b border-[var(--border)]">
                    {news.relevanceScore}
                  </td>
                </tr>
              </tbody>
            </table>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

// Main page/component
export default function MicroelectronicsNews() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#1C1C1E] pt-32 pb-16">
        <div className="container">
          <FadeUp>
            <span className="stencil-label">Industry Updates</span>
            <h1
              className="text-white mt-3"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              Microelectronics Industry News
            </h1>
            <p className="text-white/60 mt-3 max-w-xl text-base">
              Stay updated with the latest breakthroughs, investments, and
              research in microelectronics technology. Contact us for more
              details.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* News list */}
      <div className="bg-[var(--background)]">
        <div className="container">
          {MICROELECTRONICS_NEWS.map(news => (
            <NewsUpdate key={news.newsId} news={news} />
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-[var(--surface)] py-14 border-t border-[var(--border)]">
        <div className="container">
          <FadeUp>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Want to stay ahead?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Sign up for our newsletter or contact us for tailored updates.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="btn-primary text-sm py-2.5 px-5"
                >
                  Contact Us
                </Link>
                {/* Add other buttons if needed */}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
