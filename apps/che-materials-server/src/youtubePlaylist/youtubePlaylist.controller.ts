import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { YoutubePlaylistService } from "./youtubePlaylist.service";
import { YoutubePlaylistControllerBase } from "./base/youtubePlaylist.controller.base";

@swagger.ApiTags("youtubePlaylists")
@common.Controller("youtubePlaylists")
export class YoutubePlaylistController extends YoutubePlaylistControllerBase {
  constructor(protected readonly service: YoutubePlaylistService) {
    super(service);
  }
}
