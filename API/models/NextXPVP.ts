/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HDSPRequest } from './HDSPRequest';
import type { PercentValue } from './PercentValue';

export type NextXPVP = (HDSPRequest & {
position: PercentValue;
velocity: PercentValue;
});
