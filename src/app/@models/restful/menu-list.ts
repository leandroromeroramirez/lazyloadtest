import { EmojiData } from '../../atoms/emoji/emoji-data';
import { IconSectionData } from './../../atoms/icon-section/icon-section-data';

export interface MenuList {
  key: string;
  title: string;
  uri: string;
  alias: string;
  external: boolean;
  absolute: string;
  weight: string;
  expanded: boolean;
  emoji?: EmojiData;
  below?: MenuList[];
  machineName?: string;
  isTerm?: boolean;
}
