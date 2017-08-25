import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, Responsive, SimpleList } from 'admin-on-rest';
import { DateField, TextField } from 'admin-on-rest';
import { EditButton, DisabledInput, TextInput, LongTextInput, DateInput, SelectInput } from 'admin-on-rest';
// export AccountIcon from 'material-ui/svg-icons/action/book';

export const AccountList = (props) => (
    <List {...props}>
        <Responsive
            small={
                <Datagrid>
                    <TextField source="username" />
                    <TextField source="role" />
                    <EditButton basePath="/accounts" />
                </Datagrid>
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="username" />
                    <TextField source="role" />
                    <EditButton basePath="/accounts" />
                </Datagrid>
            }
        />
    </List>
);

export const AccountEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="username" />
            <TextInput source="password" />
            <SelectInput source="role" choices={[
                { id: 'user', name: 'user' },
                { id: 'approver', name: 'approver' },
                { id: 'sender', name: 'sender' },
                { id: 'admin', name: 'admin' },
            ]} />
        </SimpleForm>
    </Edit>
);

export const AccountCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="password" />
            <SelectInput source="role" choices={[
                { id: 'user', name: 'user' },
                { id: 'approver', name: 'approver' },
                { id: 'sender', name: 'sender' },
                { id: 'admin', name: 'admin' },
            ]} />
        </SimpleForm>
    </Create>
);