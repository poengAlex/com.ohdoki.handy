/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HDSPTimeRequest = {
    type: 'all-of',
    contains: [{
    type: 'HDSPRequest',
}, {
    properties: {
        duration: {
    type: 'Duration',
    isRequired: true,
},
    },
}],
} as const;
