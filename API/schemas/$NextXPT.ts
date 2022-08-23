/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $NextXPT = {
    type: 'all-of',
    contains: [{
    type: 'HDSPTimeRequest',
}, {
    properties: {
        position: {
    type: 'PercentValue',
    isRequired: true,
},
    },
}],
} as const;
