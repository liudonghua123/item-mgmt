import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import { WithPermission } from 'aor-permissions';
import authClient from './authClient';

const Menu = ({ onMenuTap, logout }) => (
    <div>
        {/* Other menu items */}

        <WithPermission authClient={authClient} value="admin">
            <MenuItem
                containerElement={<Link to="/accounts" />}
                primaryText="用户"
                leftIcon={<SettingsIcon />}
                onTouchTap={onMenuTap}
            />
        </WithPermission>
        <WithPermission authClient={authClient} value="admin">
            <MenuItem
                containerElement={<Link to="/items" />}
                primaryText="物品"
                leftIcon={<SettingsIcon />}
                onTouchTap={onMenuTap}
            />
        </WithPermission>

        <MenuItem
            containerElement={<Link to="/orders" />}
            primaryText="订单"
            leftIcon={<SettingsIcon />}
            onTouchTap={onMenuTap}
        />

        {logout}
    </div>
);

export default Menu;