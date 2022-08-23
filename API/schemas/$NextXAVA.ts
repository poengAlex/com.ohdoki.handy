/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $NextXAVA = {
    type: 'all-of',
    contains: [{
    type: 'HDSPRequest',
}, {
    properties: {
        position: {
    type: 'PositionAbsolute',
    isRequired: true,
},
        velocity: {
    type: 'VelocityAbsolute',
    isRequired: true,
},
    },
}],
} as const;
