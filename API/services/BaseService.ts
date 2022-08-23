/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectedResponse } from '../models/ConnectedResponse';
import type { ConnectionKey } from '../models/ConnectionKey';
import type { ErrorResponse } from '../models/ErrorResponse';
import type { InfoResponse } from '../models/InfoResponse';
import type { Mode } from '../models/Mode';
import type { ModeUpdate } from '../models/ModeUpdate';
import type { ModeUpdateResponse } from '../models/ModeUpdateResponse';
import type { RPCResult } from '../models/RPCResult';
import type { SettingsResponse } from '../models/SettingsResponse';
import type { StatusResponse } from '../models/StatusResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BaseService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get the current mode of the device.
     * Get the current mode of the device.
     * @param xConnectionKey Device connection key or a channel reference.
     * @returns any ModeResponse
     * @throws ApiError
     */
    public getMode(
xConnectionKey: string,
): CancelablePromise<((RPCResult & {
mode: Mode;
}) | ErrorResponse)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/mode',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * Set the current mode of the device.
     * Set the current mode of the device.
     * @param xConnectionKey Device connection key or a channel reference.
     * @param requestBody 
     * @returns any ModeUpdateResponse
     * @throws ApiError
     */
    public setMode(
xConnectionKey: string,
requestBody: ModeUpdate,
): CancelablePromise<(ModeUpdateResponse | ErrorResponse)> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/mode',
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
     * Check device connectivity.
     * Check if a specifc device is connected and online. This is the fastest way to check device connectivity.<br><br> If you need a continuous device connectivity check, this is the endpoint you should be using.
     * @param xConnectionKey Device connection key.
     * @returns ConnectedResponse Machine connected status
     * @throws ApiError
     */
    public isConnected(
xConnectionKey: ConnectionKey,
): CancelablePromise<ConnectedResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/connected',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * Get extended device information.
     * Returns information about the device; hardware version, firmware version, firmware status, firmware branch and device model.<br><br> The most important information returned is the firmware status value (fwStatus).<br> Depending on the value the device may or may not need an update for the device to work with your service.<br><br> The following values are possible: <ul> <li>UP_TO_DATE(0) - The device is running the latest available firmware. No action required for using your service.</li> <li>UPDATE_REQUIRED(1) - The device is running an out-of-date firmware version. An update is required before the device will work with your service.</li> <li>UPDATE_AVAILABLE(2) - The device is running a firmware with available updates. The update is not stricly neccessary for the device to work with your service, but the update might improve the user experience.</li> </ul> Whenever the firmware status is not UP_TO_DATE(0), it's recommended that you forward the user to <a href="https://www.handyfeeeling.com">https://www.handyfeeeling.com</a> so the user can easily update their device.
     * @param xConnectionKey Device connection key.
     * @returns any Device information
     * @throws ApiError
     */
    public getInfo(
xConnectionKey: ConnectionKey,
): CancelablePromise<(ErrorResponse | InfoResponse)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/info',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * Extended device settings.
     * Get various device settings.
     * @param xConnectionKey Device connection key.
     * @returns any Device settings.
     * @throws ApiError
     */
    public getSettings(
xConnectionKey: ConnectionKey,
): CancelablePromise<(ErrorResponse | SettingsResponse)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/settings',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * Get the device status.
     * A convenient endpoint for fetching the current mode of the device and the state within the current mode.<br> For modes with a single state, the returned state value will always be 0.<br> For modes with multiple states, see the schema definition for possible values.<br>
     * @param xConnectionKey Device connection key.
     * @returns any Device status
     * @throws ApiError
     */
    public getStatus(
xConnectionKey: ConnectionKey,
): CancelablePromise<(ErrorResponse | StatusResponse)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/status',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

}
