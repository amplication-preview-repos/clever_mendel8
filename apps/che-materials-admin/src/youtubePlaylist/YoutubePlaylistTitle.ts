import { YoutubePlaylist as TYoutubePlaylist } from "../api/youtubePlaylist/YoutubePlaylist";

export const YOUTUBEPLAYLIST_TITLE_FIELD = "id";

export const YoutubePlaylistTitle = (record: TYoutubePlaylist): string => {
  return record.id?.toString() || String(record.id);
};
