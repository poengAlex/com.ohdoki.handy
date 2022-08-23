/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FixedPos } from './FixedPos';
import type { PercentValue } from './PercentValue';

export type SlideSettings = ({
min: PercentValue;
max: PercentValue;
} | {
min: PercentValue;
fixed?: FixedPos;
} | {
max: PercentValue;
fixed?: FixedPos;
});
