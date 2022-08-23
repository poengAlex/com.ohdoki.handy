/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BASEModeErrors } from './BASEModeErrors';
import type { HAMPModeErrors } from './HAMPModeErrors';
import type { HDSPModeErrors } from './HDSPModeErrors';
import type { HSSPModeErrors } from './HSSPModeErrors';
import type { MAINTENANCEModeErrors } from './MAINTENANCEModeErrors';

export type ErrorResponse = {
    error?: {
connected: boolean;
name: string;
message: string;
code: (1000 | 1001 | 1002 | BASEModeErrors | HAMPModeErrors | HSSPModeErrors | HDSPModeErrors | MAINTENANCEModeErrors);
data?: any;
};
};
