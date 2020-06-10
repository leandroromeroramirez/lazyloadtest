import { Image } from './image';
import { Artist } from './artist';
import { MolVideoLyricsData } from './../../molecules/video-lyrics/mol-video-lyrics-data';

export interface Song {
  name: string;
  image: Image;
  artist: Artist;
  mvl?: MolVideoLyricsData;
  state?: string;
}
