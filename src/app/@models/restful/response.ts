import { MetadataFactory } from '@angular/compiler/src/core';

export interface Response {
  data: any[];
  metadata: Metadata;
}
export interface Metadata {
  count: number;
  limit: number;
  page: Pager;
  pages: number;
  path: string;
  name?: string;
  root: string;
  pager?: Pager;
  urlSeeMore?: string;
  structured_data?: any;
  week: string;
  backgroundColor?: string;
  imgFeaturedDesk?: string;
  imgFeatruedMobile?: string;
  buttonLabel?: string;
  buttonUrl?: string;
  blockTitle?: string;
  voting: Voting;
  featuredCam?: boolean;
}

export interface Pager {
  prev: Prev;
  next: Next;
  current: Current;
}

export interface Prev {
  path: string;
  top_id: string;
  top_type_id: string;
}

export interface Next {
  path: string;
  top_id: string;
  top_type_id: string;
}

export interface Current {
  path: string;
  top_id: string;
  top_type_id: string;
}

export interface Voting {
  id: number;
  title: string;
  description: string;
  voteStartDate: number;
  voteEndDate: number;
  iframeEndVoting: string;
}
