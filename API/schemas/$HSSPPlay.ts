/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HSSPPlay = {
    properties: {
        estimatedServerTime: {
    type: 'number',
    description: `The client side estimated server time in milliseconds (Unix Epoch).`,
    isRequired: true,
},
        startTime: {
    type: 'number',
    description: `The time index to start playing from in milliseconds.`,
    isRequired: true,
},
    },
} as const;
