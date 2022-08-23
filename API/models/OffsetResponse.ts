/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Offset } from './Offset';
import type { RPCResult } from './RPCResult';

export type OffsetResponse = (RPCResult & {
offset: Offset;
});
