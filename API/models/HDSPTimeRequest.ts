/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Duration } from './Duration';
import type { HDSPRequest } from './HDSPRequest';

export type HDSPTimeRequest = (HDSPRequest & {
duration: Duration;
});
