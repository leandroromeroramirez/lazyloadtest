import { ItemPoolData } from './item-pool';
import { VotePrevNextData } from '../../molecules/vote-prev-next/vote-prev-next-data';

export interface CategoryPool {
  categoryId: number;
  categoryName: String;
  allowedVoting: boolean;
  nominess: ItemPoolData[];
  state: boolean;
  pre_next: VotePrevNextData;
}
