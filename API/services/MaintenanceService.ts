/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectionKey } from '../models/ConnectionKey';
import type { ErrorResponse } from '../models/ErrorResponse';
import type { RPCResult } from '../models/RPCResult';
import type { UpdatePerform } from '../models/UpdatePerform';
import type { UpdateStatusResponse } from '../models/UpdateStatusResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MaintenanceService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Restart the device.
     * Restart the device. If the optional reconnect flag is set to <code>true</code>, the device will reconnect to the server after restart. The reconnect value defaults to <code>true</code> if not specified.
     * @param xConnectionKey Device connection key.
     * @param requestBody 
     * @returns any RestartResponse
     * @throws ApiError
     */
    public restart(
xConnectionKey: ConnectionKey,
requestBody?: {
reconnect: boolean;
},
): CancelablePromise<(ErrorResponse | RPCResult)> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/maintenance/restart',
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
     * Perform firmware update.
     * Perform firmware update.
     * @param xConnectionKey Device connection key.
     * @param requestBody 
     * @returns any UpdatePerformResponse
     * @throws ApiError
     */
    public updatePerformFw(
xConnectionKey: ConnectionKey,
requestBody: UpdatePerform,
): CancelablePromise<(ErrorResponse | RPCResult)> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/maintenance/update/perform',
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
     * Get the device update status.
     * Get the device update status.
     * @param xConnectionKey Device connection key.
     * @returns any UpdateStatusResponse
     * @throws ApiError
     */
    public getUpdateStatus(
xConnectionKey: ConnectionKey,
): CancelablePromise<(ErrorResponse | UpdateStatusResponse)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/maintenance/update/status',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

}
