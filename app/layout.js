import { Geist, Geist_Mono, Baloo_2, Dancing_Script } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import { SITE_URL } from '@/lib/siteConfig';
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const description =
  'Automation and Robotics student with expertise in Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, and Data Science. Skilled in Python, Java, TensorFlow, and Scikit-learn for developing AI-powered, data-driven solutions and predictive analytics models.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Naman Lohiya | AI and Robotics Engineer',
    template: '%s | Naman Lohiya',
  },
  description,
  keywords: [
    'Naman Lohiya',
    'AI Engineer',
    'Robotics Engineer',
    'Machine Learning Engineer',
    'Data Scientist',
    'Python Developer',
    'Deep Learning',
    'Computer Vision',
    'Automation Specialist',
    'AI Projects',
    'Robotics Projects',
  ],
  authors: [{ name: 'Naman Lohiya', url: SITE_URL }],
  creator: 'Naman Lohiya',
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: SITE_URL,
    siteName: 'Naman Lohiya',
    title: 'Naman Lohiya | AI and Robotics Engineer',
    description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Naman Lohiya | AI and Robotics Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naman Lohiya | AI and Robotics Engineer',
    description,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicons/16 x 16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/32 X 32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/48 X 48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicons/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png' },
      { url: '/favicons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicons/naman_logo_192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/favicons/Naman_logo_512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/favicons/manifest.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${dancing.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${dancing.variable} h-full antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Naman Lohiya',
              url: SITE_URL,
              email: 'namanLohiya145@gmail.com',
              jobTitle: 'AI and Robotics Engineer',
              sameAs: [
                'https://ctm-log-analyzer.netlify.app/',
                'https://www.linkedin.com/posts/naman-lohiya-221572289_scienceexpo-nationalscienceday-jspm-activity-7433473628496666624-p43b',
              ],
            }),
          }}
        />
        <Cursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
