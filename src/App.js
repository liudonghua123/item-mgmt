import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { simpleRestClient, Admin, Resource } from 'admin-on-rest';
import { AccountList, AccountEdit, AccountCreate } from './accounts';
import { ItemList, ItemEdit, ItemCreate } from './items';
import { OrderList, OrderEdit, OrderCreate } from './orders';
import loopbackRestClient from 'aor-loopback';
import authClient from './authClient';
import { AuthProvider } from 'aor-permissions';
import Menu from './menu';

import { translate } from 'admin-on-rest';
import {englishMessages} from 'admin-on-rest';
import chineseMessages from 'aor-language-chinese';
import {AppTranslations} from './translation'

const messages = {
    en: {...englishMessages, ...AppTranslations.en},
    zh: {...chineseMessages, ...AppTranslations.zh}
};

const resolveAccessToAccounts = ({ resource, permissions, exact, value }) => {
    alert(permissions);
    if (permissions === 'admin') {
        return true;
    }
    return false;
};

const resolveAccessToItems = ({ resource, permissions, exact, value }) => {
    if (permissions === 'admin') {
        return true;
    }
    return false;
};

class App extends Component {
  render() {
    return (
        <Admin title="物品审批管理" locale="zh" messages={messages} menu={Menu} authClient={authClient} restClient={loopbackRestClient('http://localhost:4000/api')}>
            <Resource name="orders" list={OrderList} edit={OrderEdit} create={OrderCreate} />
            <Resource name="accounts" resolve={resolveAccessToAccounts} createExact={true} list={AccountList} edit={AccountEdit} create={AccountCreate}/>
            <Resource name="items" resolve={resolveAccessToItems} createExact={true} list={ItemList} edit={ItemEdit} create={ItemCreate}/>
        </Admin>
    );
  }
}

export default App;
