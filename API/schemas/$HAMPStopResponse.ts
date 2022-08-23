/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HAMPStopResponse = {
    type: 'all-of',
    contains: [{
    properties: {
        result: {
    type: 'StateResult',
    isRequired: true,
},
    },
}],
} as const;
