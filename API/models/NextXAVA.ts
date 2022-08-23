/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HDSPRequest } from './HDSPRequest';
import type { PositionAbsolute } from './PositionAbsolute';
import type { VelocityAbsolute } from './VelocityAbsolute';

export type NextXAVA = (HDSPRequest & {
position: PositionAbsolute;
velocity: VelocityAbsolute;
});
