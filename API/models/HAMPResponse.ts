/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HAMPState } from './HAMPState';
import type { PercentValue } from './PercentValue';

export type HAMPResponse = {
    state: HAMPState;
    slideMax: PercentValue;
    slideMin: PercentValue;
    velocity?: PercentValue;
};
