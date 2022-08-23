/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoopSettingResponse = {
    type: 'all-of',
    contains: [{
    type: 'RPCResult',
}, {
    properties: {
        activated: {
    type: 'Looping',
    isRequired: true,
},
    },
}],
} as const;
