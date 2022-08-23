/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RPCResult } from './RPCResult';
import type { Timestamp } from './Timestamp';

export type SyncResponse = (RPCResult & {
dtserver: Timestamp;
});
