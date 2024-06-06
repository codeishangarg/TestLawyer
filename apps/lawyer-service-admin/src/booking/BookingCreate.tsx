import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";
import { LawyerTitle } from "../lawyer/LawyerTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="Client" label="client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <ReferenceInput source="lawyer.id" reference="Lawyer" label="lawyer">
          <SelectInput optionText={LawyerTitle} />
        </ReferenceInput>
        <DateTimeInput label="scheduledAt" source="scheduledAt" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
