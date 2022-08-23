/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HAMPVelocityPercentResponse = {
    type: 'all-of',
    contains: [{
    type: 'RPCResult',
}, {
    properties: {
        velocity: {
    type: 'PercentValue',
    isRequired: true,
},
    },
}],
} as const;
