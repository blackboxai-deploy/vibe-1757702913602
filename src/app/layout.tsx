import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ImageToText - Advanced AI OCR Platform | Extract Text from Images',
  description: 'Transform images into editable text with our advanced AI-powered OCR technology. Process single images or batch multiple files with 99.5% accuracy. Supports 50+ languages, JPEG, PNG, WebP, GIF formats.',
  keywords: ['OCR', 'image to text', 'text extraction', 'AI OCR', 'batch processing', 'document digitization', 'AI text recognition'],
  authors: [{ name: 'ImageToText Team' }],
  creator: 'ImageToText',
  publisher: 'ImageToText',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'ImageToText - AI-Powered OCR Platform',
    description: 'Advanced OCR platform with 99.5% accuracy. Extract text from images using AI. Single and batch processing available.',
    siteName: 'ImageToText',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ImageToText - AI OCR Platform',
    description: 'Extract text from images with 99.5% AI accuracy. Batch processing available.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen bg-background`}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">
            {children}
          </main>
        </div>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}