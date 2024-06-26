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
import { IsNumber, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";
import { Type } from "class-transformer";
import { LawyerWhereUniqueInput } from "../../lawyer/base/LawyerWhereUniqueInput";
import { EnumPaymentStatus } from "./EnumPaymentStatus";

@InputType()
class PaymentCreateInput {
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
    enum: EnumPaymentStatus,
  })
  @IsEnum(EnumPaymentStatus)
  @IsOptional()
  @Field(() => EnumPaymentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { PaymentCreateInput as PaymentCreateInput };
