export interface Quote {
  id: number;
  body: string;
  author: string;
  tags: string[];
  author_permalink: string;
  favorites_count: number;
  upvotes_count: number;
  downvotes_count: number;
  dialogue: boolean;
  url: string;
}

export interface QuoteParams {
  count: number;
  tag?: string;
}

export interface QuoteFormData {
  count: number;
  tag: string;
}

export interface FavQsResponse {
  page: number;
  last_page: boolean;
  quotes: Quote[];
}
