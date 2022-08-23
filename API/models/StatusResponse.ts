/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HAMPState } from './HAMPState';
import type { HSSPState } from './HSSPState';
import type { Mode } from './Mode';

/**
 * Machine status
 */
export type StatusResponse = {
    mode: Mode;
    state?: (HSSPState | HAMPState);
};
