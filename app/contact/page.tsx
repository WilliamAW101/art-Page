import type { Metadata } from 'next';
import ContactClient from './contactPageClient';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Page where you can contact me and send commissions',
  icons: {
    icon: '/testArt.webp',
  },
};

export default function AboutPage() {
  return <ContactClient />
}