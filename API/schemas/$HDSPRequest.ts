/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HDSPRequest = {
    properties: {
        stopOnTarget: {
    type: 'boolean',
    description: `Flag to indicate whether or not the movement of the slide should stop when the specified target position have been reached. Setting this value to <code>false</code> should in most cases give a smoother movement when sending a stream HDSP commands continuously to the device.`,
},
        immediateResponse: {
    type: 'boolean',
    description: `Flag to indicate if the server should return a response immediately upon receinving the command from the client or wait for a response from the device before returning a response to the client.`,
},
    },
} as const;
