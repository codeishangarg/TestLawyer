/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClientCreateNestedManyWithoutUsersInput } from "./ClientCreateNestedManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { LawyerCreateNestedManyWithoutUsersInput } from "./LawyerCreateNestedManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => ClientCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ClientCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ClientCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  clients?: ClientCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  lastLogin?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => LawyerCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => LawyerCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => LawyerCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  lawyers?: LawyerCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  resetToken?: string | null;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { UserCreateInput as UserCreateInput };
