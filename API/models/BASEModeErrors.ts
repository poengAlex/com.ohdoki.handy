/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The different possible mode independent specific error codes. <p> <ul> <li>ERROR(2000) - Unspecified error.</li> <li>INVALID_REQUEST(2001) - The request could not be processed by the device due to the request content.</li> <li>METHOD_NOT_FOUND(2002) - The requested operation is not supported by the device or the current device mode.</li> </ul>
 */
export enum BASEModeErrors {
    /**
     * Unspecified error
     */
    ERROR = 2000,
    /**
     * The request could not be processed by the device due to the request content.
     */
    INVALID_REQUEST = 2001,
    /**
     * The requested operation is not supported on the device.
     */
    METHOD_NOT_FOUND = 2002,
}
