/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Branch } from './Branch';
import type { FirmwareStatus } from './FirmwareStatus';
import type { FirmwareVersion } from './FirmwareVersion';
import type { HardwareVersion } from './HardwareVersion';
import type { Model } from './Model';
import type { SessionId } from './SessionId';

export type InfoResponse = {
    fwVersion: FirmwareVersion;
    fwStatus: FirmwareStatus;
    hwVersion: HardwareVersion;
    model: Model;
    branch: Branch;
    sessionId: SessionId;
};
