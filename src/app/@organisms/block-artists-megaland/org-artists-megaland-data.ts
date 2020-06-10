import { Artist } from '../../@models/restful/artist';

export interface OrgArtistsMegalandData {
  status: string;
  title: string;
  textBuyTicket: string;
  urlBuyTicket: string;
  artists: Artist[];
}
