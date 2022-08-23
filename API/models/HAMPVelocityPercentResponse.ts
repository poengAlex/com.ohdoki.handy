/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PercentValue } from './PercentValue';
import type { RPCResult } from './RPCResult';

export type HAMPVelocityPercentResponse = (RPCResult & {
velocity: PercentValue;
});
