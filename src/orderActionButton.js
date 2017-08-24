import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import loopbackRestClient from 'aor-loopback';
import { UPDATE } from 'admin-on-rest';
import { showNotification as showNotificationAction } from 'admin-on-rest';
import { push as pushAction } from 'react-router-redux';
import {REACT_APP_API_HOST} from './Configration';

const restClient = loopbackRestClient(`${REACT_APP_API_HOST}/api`);

class ApproveComponent extends Component {
    handleClick = () => {
        const { push, record, showNotification } = this.props;
        const updatedRecord = { ...record, approver: localStorage.getItem('username'), approveDateTime: new Date() };
        restClient(UPDATE, 'orders', { id: record.id, data: updatedRecord })
            .then(() => {
                showNotification('Order approved');
                push('/comments');
            })
            .catch((e) => {
                console.error(e);
                showNotification('Error: order not approved', 'warning')
            });
    }

    render() {
        return <FlatButton label="Approve" onClick={this.handleClick} />;
    }
}

ApproveComponent.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export const ApproveButton = connect(null, {
    showNotification: showNotificationAction,
    push: pushAction,
})(ApproveComponent);


class SendComponent extends Component {
    handleClick = () => {
        const { push, record, showNotification } = this.props;
        const updatedRecord = { ...record, sender: localStorage.getItem('username'), sendDateTime: new Date() };
        restClient(UPDATE, 'orders', { id: record.id, data: updatedRecord })
            .then(() => {
                showNotification('Order sended');
                push('/comments');
            })
            .catch((e) => {
                console.error(e);
                showNotification('Error: order not sended', 'warning')
            });
    }

    render() {
        return <FlatButton label="Send" onClick={this.handleClick} />;
    }
}



ApproveComponent.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export const SendButton = connect(null, {
    showNotification: showNotificationAction,
    push: pushAction,
})(SendComponent);