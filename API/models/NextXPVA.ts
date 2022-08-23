/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HDSPRequest } from './HDSPRequest';
import type { PercentValue } from './PercentValue';
import type { VelocityAbsolute } from './VelocityAbsolute';

export type NextXPVA = (HDSPRequest & {
position: PercentValue;
velocity: VelocityAbsolute;
});
