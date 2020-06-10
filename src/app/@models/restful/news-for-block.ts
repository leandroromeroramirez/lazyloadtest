import { Image } from './image';
import { Section } from './section';
import { InfoReview } from './info-review';
import { InfoEvent } from './info-event';

export interface NewsForBlock {
  title: string;
  url: string;
  reaction?: any;
  isFeatured: boolean;
  section: Section;
  image: Image;
  type: string;
  infoReview?: InfoReview;
  review?: Section;
  infoEvent?: InfoEvent;
}

