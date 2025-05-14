// app/layout.jsx
import './globals.css';
import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata = {
  title: "Maritha's Portfolio",
  description: "Creative front-end developer showcasing projects, design, and code.",
  openGraph: {
      title: "Maritha's Portfolio",
      description: "Creative full-stack developer showcasing projects, design, and code.",
      images: [{
          url: "/Screenshot 2025-05-14 at 12.35.56.png", // Place this image in your /public folder
          width: 1200,
          height: 630,
          alt: "Maritha's Portfolio Preview",
      }, ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add other <meta> or <link> tags here */}
      </head>
      <body className="font-mono bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
