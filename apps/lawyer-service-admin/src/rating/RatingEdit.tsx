import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";
import { LawyerTitle } from "../lawyer/LawyerTitle";

export const RatingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="Client" label="client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <TextInput label="comments" multiline source="comments" />
        <ReferenceInput source="lawyer.id" reference="Lawyer" label="lawyer">
          <SelectInput optionText={LawyerTitle} />
        </ReferenceInput>
        <NumberInput label="rating" source="rating" />
      </SimpleForm>
    </Edit>
  );
};
