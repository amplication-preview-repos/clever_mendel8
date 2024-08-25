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
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { YoutubePlaylistOrderByInput } from "./YoutubePlaylistOrderByInput";

@ArgsType()
class YoutubePlaylistFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => YoutubePlaylistWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => YoutubePlaylistWhereInput, { nullable: true })
  @Type(() => YoutubePlaylistWhereInput)
  where?: YoutubePlaylistWhereInput;

  @ApiProperty({
    required: false,
    type: [YoutubePlaylistOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [YoutubePlaylistOrderByInput], { nullable: true })
  @Type(() => YoutubePlaylistOrderByInput)
  orderBy?: Array<YoutubePlaylistOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { YoutubePlaylistFindManyArgs as YoutubePlaylistFindManyArgs };
