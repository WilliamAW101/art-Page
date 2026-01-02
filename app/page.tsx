import type { Metadata } from 'next';
import HomeClient from './homePageClient';
import { GetFeaturedArtworks } from '../hooks/api';

export const metadata: Metadata = {
  title: 'Home | Artpage',
  description: 'Welcome to my artpage where I showcase my artistic and graphic design skills.',
  icons: {
    icon: '/hotdog.webp',
  },
};

export default async function HomePage() {

  const featuredArtworks = await GetFeaturedArtworks();

  // console.log("Featured Artworks:", featuredArtworks);

  return <HomeClient featuredArtworks={featuredArtworks}/>;
}