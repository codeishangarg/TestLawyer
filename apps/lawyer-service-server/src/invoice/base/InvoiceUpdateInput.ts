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
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";
import { Type } from "class-transformer";
import { LawyerWhereUniqueInput } from "../../lawyer/base/LawyerWhereUniqueInput";
import { EnumInvoiceStatus } from "./EnumInvoiceStatus";

@InputType()
class InvoiceUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  caseReference?: string | null;

  @ApiProperty({
    required: false,
    type: () => ClientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClientWhereUniqueInput)
  @IsOptional()
  @Field(() => ClientWhereUniqueInput, {
    nullable: true,
  })
  client?: ClientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  gst?: number | null;

  @ApiProperty({
    required: false,
    type: () => LawyerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LawyerWhereUniqueInput)
  @IsOptional()
  @Field(() => LawyerWhereUniqueInput, {
    nullable: true,
  })
  lawyer?: LawyerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumInvoiceStatus,
  })
  @IsEnum(EnumInvoiceStatus)
  @IsOptional()
  @Field(() => EnumInvoiceStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalAmount?: number | null;
}

export { InvoiceUpdateInput as InvoiceUpdateInput };
