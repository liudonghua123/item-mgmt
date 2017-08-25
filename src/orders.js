import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, Filter } from 'admin-on-rest';
import { DateField, TextField, NumberField, ReferenceField } from 'admin-on-rest';
import { EditButton, DisabledInput, TextInput, LongTextInput, DateInput, SelectInput, NumberInput, ReferenceInput, BooleanInput } from 'admin-on-rest';
import authClient from './authClient';
import { SwitchPermissions, Permission } from 'aor-permissions';
import { ApproveButton, SendButton } from './orderActionButton';

const checkUserCanApprove = (params) => {
    const role = params.permissions;
    if (role === 'approver') {
        return true;
    }
    return false;
};

const checkUserCanSend = (params) => {
    const role = params.permissions;
    if (role === 'sender') {
        return true;
    }
    return false;
};

export const OrderList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="creator" />
            <DateField source="createDateTime" locales="zh-CN" showTime />
            <ReferenceField source="itemId" reference="items" linkType={false}>
                <TextField source="name" />
            </ReferenceField>
            <NumberField source="count" />
            <SwitchPermissions authClient={authClient} {...props}>
                <Permission value={['approver', 'admin']}>
                    <ApproveButton />
                </Permission>
            </SwitchPermissions>
            <SwitchPermissions authClient={authClient} {...props}>
                <Permission value={['sender', 'admin']}>
                    <SendButton />
                </Permission>
            </SwitchPermissions>
        </Datagrid>
    </List>
);

export const OrderEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="creator" />
            <ReferenceInput source="itemId" reference="items" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <NumberInput source="count" />
        </SimpleForm>
    </Edit>
);

export const OrderCreate = (props) => (
    <Create title="Create a Order" {...props}>
        <SimpleForm>
            <DisabledInput source="creator" defaultValue={localStorage.getItem('username')} />
            <ReferenceInput source="itemId" reference="items" sort={{ field: 'id', order: 'ASC' }} allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <NumberInput source="count" />
            <DateInput label="createDateTime" source="createDateTime" defaultValue={new Date()} style={{display: "none"}} />
        </SimpleForm>
    </Create>
);