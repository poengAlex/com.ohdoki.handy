/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $NextXPVP = {
    type: 'all-of',
    contains: [{
    type: 'HDSPRequest',
}, {
    properties: {
        position: {
    type: 'PercentValue',
    isRequired: true,
},
        velocity: {
    type: 'PercentValue',
    isRequired: true,
},
    },
}],
} as const;
