import type { Metadata } from 'next';
import AboutClient from './aboutPageClient';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Who am I?',
  icons: {
    icon: '/testArt.webp',
  },
};

export default function AboutPage() {
  return <AboutClient />
}