import type { Metadata } from 'next';
import GalleryClient from './galleryPageClient';

export const metadata: Metadata = {
  title: 'Gallary',
  description: 'Welcome to the gallary of my art.',
  icons: {
    icon: '/testArt.webp',
  },
};

export default function AboutPage() {
  return <GalleryClient />
}