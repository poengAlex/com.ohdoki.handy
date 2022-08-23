/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectionKey } from '../models/ConnectionKey';
import type { ErrorResponse } from '../models/ErrorResponse';
import type { OffsetResponse } from '../models/OffsetResponse';
import type { OffsetUpdate } from '../models/OffsetUpdate';
import type { Outliers } from '../models/Outliers';
import type { RPCResult } from '../models/RPCResult';
import type { SyncCount } from '../models/SyncCount';
import type { Timestamp } from '../models/Timestamp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class HstpService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get the current time of the device.
     * Get the current time of the device. When the device and the server time is synchronized, this will be the server time estimated by the device.
     * @param xConnectionKey Device connection key.
     * @returns any DeviceTimeResponse
     * @throws ApiError
     */
    public getDeviceTime(
xConnectionKey: ConnectionKey,
): CancelablePromise<(ErrorResponse | (RPCResult & {
time: Timestamp;
}))> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hstp/time',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * Get the HSTP offset of the device.
     * The purpose of the offset value is to provide a way to manually adjust the device/server clock synchronization.<br> One usecase is when playing scripts (see HSSP). Eg. if the script and video is not in perfect sync, a user could adjust the offset value to compensate.<br> <br> Example:<br> If we assume that the current offset value of the device is 0, and the script is 100ms ahead of the video, setting the offset to -100ms could fix the synchronization issue.<br> If the script is 100ms behind the video, setting the offset to 100ms could do the same.<br> In most cases, the device/server clock synchronization is good enough. In some special cases a manual adjustment might be required to get perfect sync.
     * @param xConnectionKey Device connection key.
     * @returns any OffsetResponse
     * @throws ApiError
     */
    public getOffset(
xConnectionKey: ConnectionKey,
): CancelablePromise<(ErrorResponse | OffsetResponse)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hstp/offset',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * Set the HSTP offset of the device.
     * The purpose of the offset value is to provide a way to manually adjust the device/server clock synchronization.<br> One usecase is when playing scripts (see HSSP). Eg. if the script and video is not in perfect sync, a user could adjust the offset value to compensate.<br> <br> Example:<br> If we assume that the current offset value of the device is 0, and the script is 100ms ahead of the video, setting the offset to -100ms could fix the synchronization issue.<br> If the script is 100ms behind the video, setting the offset to 100ms could do the same.<br> In most cases, the device/server clock synchronization is good enough, but in some special cases a manual adjustment might be required to achieve perfect synchronization.
     * @param xConnectionKey Device connection key.
     * @param requestBody 
     * @returns any RPCResult
     * @throws ApiError
     */
    public setOffset(
xConnectionKey: ConnectionKey,
requestBody: OffsetUpdate,
): CancelablePromise<(ErrorResponse | RPCResult)> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hstp/offset',
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
     * Get the round-trip-delay-time (rtd) between the device and the server.
     * Get the round-trip-delay-time (rtd) between the device and the server. The rtd is calculated when the synchronization of the server and device time is triggered. See hstp/sync for more information.
     * @param xConnectionKey Device connection key.
     * @returns any RTDResponse
     * @throws ApiError
     */
    public getRoundTripDelay(
xConnectionKey: ConnectionKey,
): CancelablePromise<(ErrorResponse | (RPCResult & {
rtd: Timestamp;
}))> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hstp/rtd',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * Syncronize the connected device with the server clock.
     * Syncronizes the device with the server clock and calculates the round-trip-delay between the device and the server.
     * @param xConnectionKey Device connection key.
     * @param syncCount The number of round-trip samples to use in synchronization.
     * @param outliers The number of sample outliers to discard in synchronization.
     * @returns any HSTPSyncResponse
     * @throws ApiError
     */
    public sync(
xConnectionKey: ConnectionKey,
syncCount?: SyncCount,
outliers?: Outliers,
): CancelablePromise<(ErrorResponse | (RPCResult & {
time?: Timestamp;
rtd?: Timestamp;
}))> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hstp/sync',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            query: {
                'syncCount': syncCount,
                'outliers': outliers,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

}
