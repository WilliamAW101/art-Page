import type { Metadata } from 'next';
import HomeClient from './homePageClient';

export const metadata: Metadata = {
  title: 'Home | My Artpage',
  description: 'Welcome to my artpage where I showcase my artistic and graphic design skills.',
  icons: {
    icon: '/hotdog.webp',
  },
};

export default function HomePage() {
  return <HomeClient />;
}