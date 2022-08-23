/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StatusResponse = {
    description: `Machine status`,
    properties: {
        mode: {
    type: 'Mode',
    isRequired: true,
},
        state: {
    type: 'one-of',
    contains: [{
    type: 'HSSPState',
}, {
    type: 'HAMPState',
}],
},
    },
} as const;
