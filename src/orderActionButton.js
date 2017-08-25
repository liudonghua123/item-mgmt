import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import loopbackRestClient from 'aor-loopback';
import { UPDATE } from 'admin-on-rest';
import { showNotification as showNotificationAction } from 'admin-on-rest';
import { push as pushAction } from 'react-router-redux';
import {REACT_APP_API_HOST} from './Configration';

const restClient = loopbackRestClient(`${REACT_APP_API_HOST}/api`);

class ApproveComponent extends Component {
    handleClick = () => {
        const { push, record, showNotification } = this.props;
        const updatedRecord = { ...record, isApproved: true, approver: localStorage.getItem('username'), approveDateTime: new Date() };
        restClient(UPDATE, 'orders', { id: record.id, data: updatedRecord })
            .then(() => {
                showNotification('订单已审批');
                // push('/orders');
                window.location.reload();
            })
            .catch((e) => {
                console.error(e);
                showNotification('错误: 订单未审批', 'warning')
            });
    }

    render() {
        const { record } = this.props;
        return <RaisedButton label="审批" onClick={this.handleClick} primary={true} disabled={record.isApproved} />;
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
        const updatedRecord = { ...record, isSended: true, sender: localStorage.getItem('username'), sendDateTime: new Date() };
        restClient(UPDATE, 'orders', { id: record.id, data: updatedRecord })
            .then(() => {
                showNotification('订单已发放');
                // push('/orders');
                window.location.reload();
            })
            .catch((e) => {
                console.error(e);
                showNotification('错误: 订单未发放', 'warning')
            });
    }

    render() {
        const { record } = this.props;
        return <RaisedButton label="发放" onClick={this.handleClick} secondary={true} disabled={!(record.isApproved && !record.isSended)} />;
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