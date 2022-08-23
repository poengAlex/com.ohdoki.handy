/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PositionAbsolute } from './PositionAbsolute';
import type { RPCResult } from './RPCResult';

export type PositionAbsoluteResponse = (RPCResult & {
position: PositionAbsolute;
});
