import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from '@/i18n/I18nProvider';
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://hank199599.github.io";

export const metadata: Metadata = {
  title: "游紹宏 Shao-Hung Yu | Cloud Engineer Portfolio",
  description:
    "游紹宏 (Shao-Hung Yu) — Cloud Engineer at Trend Micro. Specialized in cloud architecture, backend development, and AI applications. Previously at LINE TV.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: siteUrl,
    siteName: "Shao-Hung Yu Portfolio",
    title: "游紹宏 Shao-Hung Yu | Cloud Engineer Portfolio",
    description:
      "Cloud Engineer at Trend Micro. Specialized in cloud architecture, backend development, and AI applications.",
    images: [
      {
        url: `${siteUrl}/img/blog/blog_pic.jpg`,
        width: 1200,
        height: 630,
        alt: "Shao-Hung Yu — Cloud Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "游紹宏 Shao-Hung Yu | Cloud Engineer Portfolio",
    description:
      "Cloud Engineer at Trend Micro. Specialized in cloud architecture, backend development, and AI applications.",
    images: [`${siteUrl}/img/blog/blog_pic.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shao-Hung Yu",
  alternateName: "游紹宏",
  url: siteUrl,
  image: `${siteUrl}/img/blog/blog_pic.jpg`,
  jobTitle: "Cloud Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Trend Micro",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "National Taiwan University of Science and Technology",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "National Chi Nan University",
    },
  ],
  knowsAbout: [
    "Cloud Architecture",
    "Backend Development",
    "Kubernetes",
    "Python",
    "Go",
    "Azure",
    "Oracle Cloud",
    "GCP",
    "CI/CD",
  ],
  sameAs: [
    "https://github.com/hank199599",
    "https://www.linkedin.com/in/shaohungyu/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <SiteHeader />
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
    </>
  );
}
