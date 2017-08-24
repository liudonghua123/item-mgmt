export const AppTranslations = {
    en: {
        resources: {
            title: 'Order Management',
            accounts: {
                name: 'accounts',
                fields: {
                    id: 'id',
                    username: 'username',
                    password: 'password',
                    role: 'role',
                }
            },
            items: {
                name: 'items',
                fields: {
                    id: 'id',
                    name: 'name',
                    description: 'description',
                    amount: 'amount',
                    balance: 'balance',
                },
            },
            orders: {
                name: 'orders',
                fields: {
                    id: 'id',
                    creator: 'creator',
                    createDateTime: 'createDateTime',
                    itemId: 'itemId',
                    count: 'count',
                    approver: 'approver',
                    approveDateTime: 'approveDateTime',
                    sender: 'sender',
                    sendDateTime: 'sendDateTime',
                }
            },
        }
    },
    zh: {
        resources: {
            title: '物品审批管理',
            accounts: {
                name: '用户',
                fields: {
                    id: 'id',
                    username: '用户名',
                    password: '密码',
                    role: '角色',
                }
            },
            items: {
                name: '物品',
                fields: {
                    id: 'id',
                    name: '名称',
                    description: '描述',
                    amount: '数量',
                    balance: '剩余',
                },
            },
            orders: {
                name: '订单',
                fields: {
                    id: 'id',
                    creator: '创建者',
                    createDateTime: '创建时间',
                    itemId: '物品',
                    count: '数量',
                    approver: '审批者',
                    approveDateTime: '审批时间',
                    sender: '发放者',
                    sendDateTime: '发放时间',
                }
            },
        }
    }
};