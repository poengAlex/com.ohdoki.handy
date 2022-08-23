/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HSSPState } from './HSSPState';
import type { Offset } from './Offset';
import type { PercentValue } from './PercentValue';

export type HSSPResponse = {
    state: HSSPState;
    slideMax: PercentValue;
    slideMin: PercentValue;
    offset: Offset;
};
