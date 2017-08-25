import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, Show, SimpleShowLayout, Responsive, SimpleList } from 'admin-on-rest';
import { DateField, TextField, NumberField } from 'admin-on-rest';
import { EditButton, DisabledInput, TextInput, LongTextInput, DateInput, SelectInput, NumberInput } from 'admin-on-rest';

export const ItemList = (props) => (
    <List {...props}>
        <Responsive
            small={
                <Datagrid>
                    <TextField source="name" />
                    <NumberField source="amount" />
                    <NumberField source="balance" />
                    <EditButton basePath="/items" />
                </Datagrid>
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="description" />
                    <NumberField source="amount" />
                    <NumberField source="balance" />
                    <EditButton basePath="/items" />
                </Datagrid>
            }
        />
    </List>
);

export const ItemShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="amount" />
            <TextField source="balance" />
        </SimpleShowLayout>
    </Show>
);

export const ItemEdit = (props) => (
    <Edit {...props}>
        <SimpleForm redirect="show">
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
        <SimpleForm redirect="list">
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="amount" />
            <NumberInput source="balance" />
        </SimpleForm>
    </Create>
);