import { Module } from "@nestjs/common";
import { YoutubePlaylistModuleBase } from "./base/youtubePlaylist.module.base";
import { YoutubePlaylistService } from "./youtubePlaylist.service";
import { YoutubePlaylistController } from "./youtubePlaylist.controller";
import { YoutubePlaylistResolver } from "./youtubePlaylist.resolver";

@Module({
  imports: [YoutubePlaylistModuleBase],
  controllers: [YoutubePlaylistController],
  providers: [YoutubePlaylistService, YoutubePlaylistResolver],
  exports: [YoutubePlaylistService],
})
export class YoutubePlaylistModule {}
