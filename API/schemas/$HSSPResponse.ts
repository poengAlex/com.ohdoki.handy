/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HSSPResponse = {
    properties: {
        state: {
    type: 'HSSPState',
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
        offset: {
    type: 'Offset',
    isRequired: true,
},
    },
} as const;
