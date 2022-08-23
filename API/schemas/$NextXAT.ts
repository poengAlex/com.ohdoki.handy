/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $NextXAT = {
    type: 'all-of',
    contains: [{
    type: 'HDSPTimeRequest',
}, {
    properties: {
        position: {
    type: 'PositionAbsolute',
    isRequired: true,
},
    },
}],
} as const;
