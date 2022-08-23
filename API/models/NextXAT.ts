/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HDSPTimeRequest } from './HDSPTimeRequest';
import type { PositionAbsolute } from './PositionAbsolute';

export type NextXAT = (HDSPTimeRequest & {
position: PositionAbsolute;
});
