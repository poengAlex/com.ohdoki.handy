/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HSSPPlayResponse = {
    type: 'all-of',
    description: `The response returned from a hssp/play operation.`,
    contains: [{
    properties: {
        result: {
    type: 'HSSPPlayResult',
    isRequired: true,
},
    },
}],
} as const;
