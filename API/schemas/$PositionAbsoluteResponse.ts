/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionAbsoluteResponse = {
    type: 'all-of',
    contains: [{
    type: 'RPCResult',
}, {
    properties: {
        position: {
    type: 'PositionAbsolute',
    isRequired: true,
},
    },
}],
} as const;
