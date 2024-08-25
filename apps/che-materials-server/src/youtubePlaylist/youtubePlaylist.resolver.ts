import * as graphql from "@nestjs/graphql";
import { YoutubePlaylistResolverBase } from "./base/youtubePlaylist.resolver.base";
import { YoutubePlaylist } from "./base/YoutubePlaylist";
import { YoutubePlaylistService } from "./youtubePlaylist.service";

@graphql.Resolver(() => YoutubePlaylist)
export class YoutubePlaylistResolver extends YoutubePlaylistResolverBase {
  constructor(protected readonly service: YoutubePlaylistService) {
    super(service);
  }
}
