/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $InfoResponse = {
    properties: {
        fwVersion: {
    type: 'FirmwareVersion',
    isRequired: true,
},
        fwStatus: {
    type: 'FirmwareStatus',
    isRequired: true,
},
        hwVersion: {
    type: 'HardwareVersion',
    isRequired: true,
},
        model: {
    type: 'Model',
    isRequired: true,
},
        branch: {
    type: 'Branch',
    isRequired: true,
},
        sessionId: {
    type: 'SessionId',
    isRequired: true,
},
    },
} as const;
