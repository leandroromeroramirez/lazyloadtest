import { Votes } from './votes';

export interface ResponsePool {
  status: string;
  message: string;
  votes: Votes;
}
