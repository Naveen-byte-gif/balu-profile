import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Agent PBN",
  description:
    "Performance Marketer offering Google Ads, Meta Ads, and conversion optimization to help businesses scale faster with measurable ROI..",
  keywords: [
    // Core Tech
    "Performance Marketer",
    "Digital Performance Marketer",
    "Growth Marketer",
    "Paid Media Specialist",
    "Paid Ads Expert",
    "Digital Marketing Strategist",
    "Online Advertising Specialist",
    "ROI Focused Marketer",
    "Google Ads Specialist",
    "Meta Ads Specialist",
    "Facebook Ads Expert",
    "Instagram Ads Expert",
    // Skills & Features
    "Lead Generation",
    "Conversion Rate Optimization",
    "Landing Page Optimization",
    "Marketing Funnel Expert",
    "Audience Targeting",
    "Ad Campaign Optimization",
    "A/B Testing",
    "Ad Creative Strategy",
    "Google Analytics",
    "GA4 Specialist",
    "Performance Analytics",
    "Conversion Tracking",
    // Professional Roles
    "Professional Performance Marketer",
    "Freelance Performance Marketer",
    "Freelance Digital Marketer",
    "Remote Performance Marketer",
    "Growth Marketing Consultant",
    // Project / Outcome Keywords
    "ROI Driven Marketing",
    "High Converting Campaigns",
    "Sales Focused Marketing",
    "Revenue Growth Strategy",
    "Scalable Marketing Solutions",
    // Location / Hiring Keywords
    "Performance Marketer India",
    "Digital Marketer India",
    "Performance Marketer Hyderabad",
    "Hire Performance Marketer India",
    "Hire Google Ads Expert India",
  ],
  authors: [{ name: "Digital Agent PBN" }],
  icons: { icon: "/favicon.ico" },
  manifest: "/site.webmanifest",
  themeColor: "#0d6efd",
  openGraph: {
    title: "Digital Agent PBN | Perfomance Marketer (Meta ads & Google ads)",
    description:
      "Performance Marketer specializing in Meta Ads, Google Ads, lead generation, and ROI-driven digital growth strategies.",
    url: "https://agentpbn.netlify.app/",
    siteName: "Tungana Naveen Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://agentpbn.netlify.app//og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tungana Naveen Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tungana Naveen | Full Stack Developer (Flutter & Next.js)",
    description:
      "Full Stack Developer specializing in Flutter & Next.js. Building elegant, performant, and user-friendly digital experiences.",
    creator: "@tungananaveen",
    images: ["https://agentpbn.netlify.app//og-image.jpg"],
  },
  metadataBase: new URL("https://agentpbn.netlify.app/"),
  alternates: {
    canonical: "https://agentpbn.netlify.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KG8764LN');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="M8n5Fw16mgtmPyKmHGhsjvYuGBRi16huHXB3r_V86lI"
        />

        {/* ✅ Canonical Link */}
        <link rel="canonical" href="https://agentpbn.netlify.app/" />

        {/* ✅ Sitemap Reference */}
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />

        {/* ✅ Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KG8764LN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
