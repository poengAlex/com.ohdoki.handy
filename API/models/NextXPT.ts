/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HDSPTimeRequest } from './HDSPTimeRequest';
import type { PercentValue } from './PercentValue';

export type NextXPT = (HDSPTimeRequest & {
position: PercentValue;
});
