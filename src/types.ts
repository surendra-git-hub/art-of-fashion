export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  url: string;
  description?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Runway" | "Street Style" | "Editorial" | "Sustainable";
  tags: string[];
  authorId: string;
  date: string; // ISO
  readingTime: string;
  mainImage: string;
  galleryImages: string[];
  excerpt: string;
  content: string;
  products?: Product[];
  likes: number;
  shares: number;
  isPopular: boolean;
}

export type ViewName = "HOME" | "ARTICLE" | "CATEGORY" | "ABOUT";

export interface RouteParams {
  id?: string;
  category?: string;
}

export interface RouterContextType {
  currentView: ViewName;
  params: RouteParams;
  navigate: (view: ViewName, params?: RouteParams) => void;
  goBack: () => void;
}
