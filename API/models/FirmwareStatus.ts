/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Possible device firmware status. <p> <ul> <li>0 - UP_TO_DATE - The firmware is up-tp-date (latest version).</li> <li>1 - UPDATE_REQUIRED - A critical update is available.</li> <li>2 - UPDATE_AVAILABLE - An non critical update to the firmware is available.</li> </ul>
 */
export enum FirmwareStatus {
    /**
     * The firmware is up-tp-date (latest version).
     */
    UP_TO_DATE = 0,
    /**
     * A critical update is available.
     */
    UPDATE_REQUIRED = 1,
    /**
     * An non critical update to the firmware is available.
     */
    UPDATE_AVAILABLE = 2,
}
