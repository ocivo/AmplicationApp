import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BookCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="书籍名" source="bookName" />
      </SimpleForm>
    </Create>
  );
};
