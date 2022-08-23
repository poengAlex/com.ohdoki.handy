/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RPCResult } from './RPCResult';

export type UpdateStatusResponse = (RPCResult & {
/**
 * Possible update status values.<ul><li>PENDING(0)<li>IN_PROGRESS(1)</li><li>SUCCESS(2)</li><li>FAILED(3)</li></ul>
 */
status: UpdateStatusResponse.status;
progress: number;
});

export namespace UpdateStatusResponse {

    /**
     * Possible update status values.<ul><li>PENDING(0)<li>IN_PROGRESS(1)</li><li>SUCCESS(2)</li><li>FAILED(3)</li></ul>
     */
    export enum status {
        PENDING = 0,
        IN_PROGRESS = 1,
        SUCCESS = 2,
        FAILED = 3,
    }


}
