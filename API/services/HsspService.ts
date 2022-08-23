/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectionKey } from '../models/ConnectionKey';
import type { ErrorResponse } from '../models/ErrorResponse';
import type { HSSPPlay } from '../models/HSSPPlay';
import type { HSSPPlayResponse } from '../models/HSSPPlayResponse';
import type { HSSPSetupResult } from '../models/HSSPSetupResult';
import type { HSSPState } from '../models/HSSPState';
import type { LoopSettingResponse } from '../models/LoopSettingResponse';
import type { LoopSettingUpdate } from '../models/LoopSettingUpdate';
import type { RPCResult } from '../models/RPCResult';
import type { Setup } from '../models/Setup';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class HsspService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Start script playing.
     * Start script playing from a specified time index. <p>For the script and a video to be correctly synchronized, the client must provide a client-side-estimated-server-time.<p>See TIMESYNC for further details on how to create a good client-side-estimated-server-time.
     * @param xConnectionKey Device connection key.
     * @param requestBody 
     * @returns any HSSPPlayResponse
     * @throws ApiError
     */
    public play(
xConnectionKey: ConnectionKey,
requestBody: HSSPPlay,
): CancelablePromise<(HSSPPlayResponse | ErrorResponse)> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hssp/play',
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
     * Stop script playing.
     * Stop script playing.
     * @param xConnectionKey Device connection key.
     * @returns any HSSPStopResponse
     * @throws ApiError
     */
    public hsspStop(
xConnectionKey: ConnectionKey,
): CancelablePromise<(ErrorResponse | RPCResult)> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hssp/stop',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * Setup script synchronization.
     * Setup script synchronization by providing the device with an URL from where the script can be downloaded. The device need to be able to access the URL for setup to work. <p><b>NOTE: The maximum CSV script size that a device can handle is 524288 bytes. Script larger than this will return an error.</b></p> <p>If the sha-256 value of the script is provided, the device will only download the script if it can not be found in the device cache.</p> <p>See the hssp/setup response examples and the HSSPModeErrors schema for possible responses and error code descriptions.</p> <h2>Using token URLs</h2> <p>NOTE: This secions is only applicable for partners that have integrated with the Script API.</p> <p>If the URL provided to the hssp/setup is a token URL, the sha-256 value is ignored. In addition, more information is available in potential error responses if the error is caused by the token.</p> 
     * @param xConnectionKey Device connection key.
     * @param requestBody 
     * @returns any SetupResponse
     * @throws ApiError
     */
    public setup(
xConnectionKey: ConnectionKey,
requestBody: Setup,
): CancelablePromise<(ErrorResponse | {
result: HSSPSetupResult;
})> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hssp/setup',
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
     * Get the HSSP loop setting of the device. Only available in firmware >= 3.2.x
     * Get the HSSP loop setting of the device. Only available in firmware >= 3.2.x
     * @param xConnectionKey Device connection key.
     * @returns any LoopSettingResponse
     * @throws ApiError
     */
    public getLoopSetting(
xConnectionKey: ConnectionKey,
): CancelablePromise<(ErrorResponse | LoopSettingResponse)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hssp/loop',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * Set the HSSP loop setting of the device. Only available in firmware >= 3.2.x
     * If looping is enabled, the device will start replaying the script from the beginning when the end of the script is reached. Only available in firmware >= 3.2.x
     * @param xConnectionKey Device connection key.
     * @param requestBody 
     * @returns any RPCResult
     * @throws ApiError
     */
    public setLoopSetting(
xConnectionKey: ConnectionKey,
requestBody: LoopSettingUpdate,
): CancelablePromise<(ErrorResponse | RPCResult)> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hssp/loop',
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
     * Get the HSSP state of the device.
     * Get the HSSP state of the device.
     * @param xConnectionKey Device connection key.
     * @returns any HSSPState
     * @throws ApiError
     */
    public getHsspState(
xConnectionKey: ConnectionKey,
): CancelablePromise<(ErrorResponse | (RPCResult & {
state: HSSPState;
}))> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hssp/state',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

}
