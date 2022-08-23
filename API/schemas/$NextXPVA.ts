/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $NextXPVA = {
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
    type: 'VelocityAbsolute',
    isRequired: true,
},
    },
}],
} as const;
