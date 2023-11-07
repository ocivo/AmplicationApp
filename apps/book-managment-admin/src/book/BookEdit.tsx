import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BookEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="书籍名" source="bookName" />
      </SimpleForm>
    </Edit>
  );
};
