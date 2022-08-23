/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectionKey } from '../models/ConnectionKey';
import type { ErrorResponse } from '../models/ErrorResponse';
import type { HDSPResponse } from '../models/HDSPResponse';
import type { NextXAT } from '../models/NextXAT';
import type { NextXAVA } from '../models/NextXAVA';
import type { NextXPT } from '../models/NextXPT';
import type { NextXPVA } from '../models/NextXPVA';
import type { NextXPVP } from '../models/NextXPVP';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class HdspService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Sets the next absolute position (xa) of the device, and the absolute velocity (va) the device should use to reach the position.
     * Sets the next absolute position (xa) of the device, and the absolute velocity (va) the device should use to reach the position.
     * @param xConnectionKey Device connection key.
     * @param requestBody 
     * @returns any Position
     * @throws ApiError
     */
    public nextPostionAbsVelocityAbs(
xConnectionKey: ConnectionKey,
requestBody: NextXAVA,
): CancelablePromise<(ErrorResponse | HDSPResponse)> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hdsp/xava',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * Sets the next percent position (xp) of the device, and the absolute velocity (va) the device should use to reach the position.
     * Sets the next percent position (xp) of the device, and the absolute velocity (va) the device should use to reach the position.
     * @param xConnectionKey Device connection key.
     * @param requestBody 
     * @returns any Position
     * @throws ApiError
     */
    public nextPositionPercentVelocityAbsolute(
xConnectionKey: ConnectionKey,
requestBody: NextXPVA,
): CancelablePromise<(ErrorResponse | HDSPResponse)> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hdsp/xpva',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * Sets the next percent position (xp) of the device, and the percent velocity (vp) the device should use to reach the position.
     * Sets the next percent position (xp) of the device, and the percent velocity (vp) the device should use to reach the position.
     * @param xConnectionKey Device connection key.
     * @param requestBody 
     * @returns any Position
     * @throws ApiError
     */
    public nextPositionPercentVelocityPercent(
xConnectionKey: ConnectionKey,
requestBody: NextXPVP,
): CancelablePromise<(ErrorResponse | HDSPResponse)> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hdsp/xpvp',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * Sets the next absolute position (xa) of the device, and the time (t) the device should use to reach the position.
     * Sets the next absolute position (xa) of the device, and the time (t) the device should use to reach the position.
     * @param xConnectionKey Device connection key.
     * @param requestBody 
     * @returns any HDSPResponse
     * @throws ApiError
     */
    public nextPositionAbsInTime(
xConnectionKey: ConnectionKey,
requestBody: NextXAT,
): CancelablePromise<(ErrorResponse | HDSPResponse)> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hdsp/xat',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * Sets the next percent position (xp) of the device, and the time (t) the device should use to reach the position.
     * Sets the next percent position (xp) of the device, and the time (t) the device should use to reach the position.
     * @param xConnectionKey Device connection key.
     * @param requestBody 
     * @returns any HDSPResponse
     * @throws ApiError
     */
    public nextPositionPercentInTime(
xConnectionKey: ConnectionKey,
requestBody: NextXPT,
): CancelablePromise<(ErrorResponse | HDSPResponse)> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hdsp/xpt',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
            },
        });
    }

}
