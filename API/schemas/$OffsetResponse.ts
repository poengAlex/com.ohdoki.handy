/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OffsetResponse = {
    type: 'all-of',
    contains: [{
    type: 'RPCResult',
}, {
    properties: {
        offset: {
    type: 'Offset',
    isRequired: true,
},
    },
}],
} as const;
