import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { YoutubePlaylistServiceBase } from "./base/youtubePlaylist.service.base";

@Injectable()
export class YoutubePlaylistService extends YoutubePlaylistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
