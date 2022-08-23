/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Branch } from '../models/Branch';
import type { Model } from '../models/Model';
import type { OtaLatestResponse } from '../models/OtaLatestResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OtaService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get the latest available firmware available for the provided model and branch.
     * Get the latest available firmware available for the provided model and branch.
     * @param model The model to get latest firmware for.
     * @param branch The branch to get latest firmware for.
     * @returns OtaLatestResponse OTA latest response
     * @throws ApiError
     */
    public latest(
model: Model,
branch: Branch,
): CancelablePromise<OtaLatestResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ota/latest',
            query: {
                'model': model,
                'branch': branch,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

}
