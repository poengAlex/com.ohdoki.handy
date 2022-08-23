/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectionKey } from '../models/ConnectionKey';
import type { ErrorResponse } from '../models/ErrorResponse';
import type { PositionAbsoluteResponse } from '../models/PositionAbsoluteResponse';
import type { SlideResponse } from '../models/SlideResponse';
import type { SlideSettings } from '../models/SlideSettings';
import type { SlideUpdateResponse } from '../models/SlideUpdateResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SlideService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get the slide settings.
     * Get the slide min and max position.
     * @param xConnectionKey Device connection key or a channel reference.
     * @returns any Slider values.
     * @throws ApiError
     */
    public getSlide(
xConnectionKey: string,
): CancelablePromise<(ErrorResponse | SlideResponse)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/slide',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

    /**
     * Set slide settings.
     * Set the slide min and max position. <p>The slide min and max position decides the range of the movement of the slide. <p> Examples: <ul> <li>Use the full range of the slide: (min=0, max=100)</li> <li>Use only the top half of the slide: (min=50, max=100)</li> <li>Use only the bottom half of the slide: (min=0, max=50)</li> </ul> <p>You can update min and max individually or set both values. <p>The fixed flag can be set to move the current min-max-range relative to a new min or max value. By setting fixed=true, the current min-max-range will be shifted relative to the new value. <ul> <li>Existing (min=0, max=30) with new value (min=20, fixed=true) => New setting: (min=20, max=50)</li> <li>Existing (min=85, max=100) with new value (max=20, fixed=true) => New setting: (min=5, max=20)</li> <li>Existing (min=60, max=100) with new value (min=0, fixed=true) => New setting: (min=0, max=40)</li> <li>Existing (min=60, max=100) with new value (max=10, fixed=true) => New setting: (min=0, max=10)</li> <li>Existing (min=60, max=100) with new value (min=80, fixed=true) => New setting: (min=80, max=100)</li> </ul> The fixed flag is ignored when both min and max are specified. <p> When updating the slide values, the device will adjust the provided values if the provided values are not legal. Typical situations where this might occur: <ul> <li>Setting the slide min value higher than the current max.</li> <li>Setting the slide max value lower than the current min.</li> <li>Setting the slide range smaller than the minimum allowed distance (max-min >= MIN_ALLOWED).</li> </ul> </p> <p> If an adjustment was needed, it will be reflected in the response result code. See <b>SlideResult</b> schema for details. </p> 
     * @param xConnectionKey Device connection key or a channel reference.
     * @param requestBody 
     * @returns any SlideSettings
     * @throws ApiError
     */
    public setSlide(
xConnectionKey: string,
requestBody: SlideSettings,
): CancelablePromise<(ErrorResponse | SlideUpdateResponse)> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/slide',
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
     * Get the current slide position
     * Get the current slide position in millimeter (mm).
     * @param xConnectionKey Device connection key.
     * @returns any Current absolute position
     * @throws ApiError
     */
    public getPositionAbs(
xConnectionKey: ConnectionKey,
): CancelablePromise<(ErrorResponse | PositionAbsoluteResponse)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/slide/position/absolute',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }

}
