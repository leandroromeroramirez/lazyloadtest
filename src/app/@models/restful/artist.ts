import { Image } from './image';

export interface Artist {
  name: string;
  image?: Image;
  url?: string;
  isFeatured?: boolean;
  type?: string;
  description?: string;
}
