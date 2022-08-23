/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HAMPResponse = {
    properties: {
        state: {
    type: 'HAMPState',
    isRequired: true,
},
        slideMax: {
    type: 'PercentValue',
    isRequired: true,
},
        slideMin: {
    type: 'PercentValue',
    isRequired: true,
},
        velocity: {
    type: 'PercentValue',
},
    },
} as const;
