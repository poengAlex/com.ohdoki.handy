/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The different possible MAINTENANCE mode specific error codes. <p> <ul> <li>ERROR(6000) - Unspecified MAINTENANCE error</li> <li>OPERATION_FAILED(6001) - The device failed to complete the MAINTENANCE operation successfully.</li> </ul>
 */
export enum MAINTENANCEModeErrors {
    /**
     * Unspecified MAINTENANCE error
     */
    ERROR = 6000,
    /**
     * Failed to restart the device.
     */
    RESTART_FAILED = 6001,
}
