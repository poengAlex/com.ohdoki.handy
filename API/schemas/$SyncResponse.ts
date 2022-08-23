/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SyncResponse = {
    type: 'all-of',
    contains: [{
    type: 'RPCResult',
}, {
    properties: {
        dtserver: {
    type: 'Timestamp',
    isRequired: true,
},
    },
}],
} as const;
