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
import { IsNumber, IsOptional, IsString, IsEnum } from "class-validator";
import { EnumRazorpayPaymentStatus } from "./EnumRazorpayPaymentStatus";

@InputType()
class RazorpayPaymentCreateInput {
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
  currency?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  orderId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  paymentId?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumRazorpayPaymentStatus,
  })
  @IsEnum(EnumRazorpayPaymentStatus)
  @IsOptional()
  @Field(() => EnumRazorpayPaymentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { RazorpayPaymentCreateInput as RazorpayPaymentCreateInput };
