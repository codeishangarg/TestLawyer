/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LawyerWhereUniqueInput } from "../../lawyer/base/LawyerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LawyerUpdateManyWithoutUsersInput {
  @Field(() => [LawyerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LawyerWhereUniqueInput],
  })
  connect?: Array<LawyerWhereUniqueInput>;

  @Field(() => [LawyerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LawyerWhereUniqueInput],
  })
  disconnect?: Array<LawyerWhereUniqueInput>;

  @Field(() => [LawyerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LawyerWhereUniqueInput],
  })
  set?: Array<LawyerWhereUniqueInput>;
}

export { LawyerUpdateManyWithoutUsersInput as LawyerUpdateManyWithoutUsersInput };
