const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.27.128:8080';

interface ApiResponse<T> {
  code: number;
  status: string;
  data: T;
}

export interface Artwork {
    ID: number;
    Title:  string;    
    description:    string;   
    image_url:   string;    
    CreatedAt:  string;
    UpdatedAt:  string; 
    Width:  number;
    Height: number;       
    DisplayOrder:    number;
    alt_text:    string;    
}

export async function GetFeaturedArtworks(): Promise<Artwork[]> {
  const res = await fetch(`${API_URL}/api/homepage`, {
    cache: 'no-store', // Always fetch fresh data
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch artworks');
  }

  const json: ApiResponse<Artwork[]> = await res.json();
  
  return json.data;
}