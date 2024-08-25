import { YoutubePlaylistWhereInput } from "./YoutubePlaylistWhereInput";
import { YoutubePlaylistOrderByInput } from "./YoutubePlaylistOrderByInput";

export type YoutubePlaylistFindManyArgs = {
  where?: YoutubePlaylistWhereInput;
  orderBy?: Array<YoutubePlaylistOrderByInput>;
  skip?: number;
  take?: number;
};
