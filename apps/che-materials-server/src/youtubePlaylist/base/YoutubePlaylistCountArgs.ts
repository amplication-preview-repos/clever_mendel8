/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { YoutubePlaylistWhereInput } from "./YoutubePlaylistWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class YoutubePlaylistCountArgs {
  @ApiProperty({
    required: false,
    type: () => YoutubePlaylistWhereInput,
  })
  @Field(() => YoutubePlaylistWhereInput, { nullable: true })
  @Type(() => YoutubePlaylistWhereInput)
  where?: YoutubePlaylistWhereInput;
}

export { YoutubePlaylistCountArgs as YoutubePlaylistCountArgs };