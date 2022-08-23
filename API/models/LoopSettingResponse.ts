/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Looping } from './Looping';
import type { RPCResult } from './RPCResult';

export type LoopSettingResponse = (RPCResult & {
activated: Looping;
});
