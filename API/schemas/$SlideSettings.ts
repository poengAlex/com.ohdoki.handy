/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SlideSettings = {
    type: 'any-of',
    contains: [{
    properties: {
        min: {
    type: 'PercentValue',
    isRequired: true,
},
        max: {
    type: 'PercentValue',
    isRequired: true,
},
    },
}, {
    properties: {
        min: {
    type: 'PercentValue',
    isRequired: true,
},
        fixed: {
    type: 'FixedPos',
},
    },
}, {
    properties: {
        max: {
    type: 'PercentValue',
    isRequired: true,
},
        fixed: {
    type: 'FixedPos',
},
    },
}],
} as const;
