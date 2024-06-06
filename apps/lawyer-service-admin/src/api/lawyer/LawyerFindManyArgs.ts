import { LawyerWhereInput } from "./LawyerWhereInput";
import { LawyerOrderByInput } from "./LawyerOrderByInput";

export type LawyerFindManyArgs = {
  where?: LawyerWhereInput;
  orderBy?: Array<LawyerOrderByInput>;
  skip?: number;
  take?: number;
};
