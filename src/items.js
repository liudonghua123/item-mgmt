import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm } from 'admin-on-rest';
import { DateField, TextField, NumberField } from 'admin-on-rest';
import { EditButton, DisabledInput, TextInput, LongTextInput, DateInput, SelectInput, NumberInput } from 'admin-on-rest';

export const ItemList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <NumberField source="amount" />
            <NumberField source="balance" />
            <EditButton basePath="/items" />
        </Datagrid>
    </List>
);

const ItemTitle = ({ record }) => {
    return <span>Item {record ? `"${record.title}"` : ''}</span>;
};

export const ItemEdit = (props) => (
    <Edit title={<ItemTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="amount" />
            <NumberInput source="balance" />
        </SimpleForm>
    </Edit>
);

export const ItemCreate = (props) => (
    <Create title="Create a Item" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="amount" />
            <NumberInput source="balance" />
        </SimpleForm>
    </Create>
);