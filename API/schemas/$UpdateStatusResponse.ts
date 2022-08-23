/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UpdateStatusResponse = {
    type: 'all-of',
    contains: [{
    type: 'RPCResult',
}, {
    properties: {
        status: {
    type: 'Enum',
    isRequired: true,
},
        progress: {
    type: 'number',
    isRequired: true,
    maximum: 100,
},
    },
}],
} as const;
