/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The different possible HSSP mode specific error codes. <p> <ul> <li>ERROR(4000) - Unspecified HSSP error.</li> <li>DOWNLOAD_FAILED(4001) - The device could not download the specified script.</li> <li>HASH_ERROR(4002) - Script hash validation error</li> <li>SYNC_REQUIRED(4003) - The device need to resync with the server before HSSP setup can be peformed. Only returned from devices running firmware version <= 3.1.x</li> <li>TOKEN_ERROR(4004) - Unspecified token error. Check error response data property for chained error info.</li> <li>MAX_SCRIPT_SIZE_ERROR(4005) - The script is too large for the device. The maximum supported CSV file size is 524288 bytes.</li> <li>DEVICE_STORAGE_FULL_ERROR(4006) - The setup failed because the device storage is full.</li> <li>DEVICE_STORAGE_FREE_ERROR(4007) - The setup failed. Not enough space left to store the script on the device.</li> <li>DEVICE_STORAGE_CLEAN_ERROR(4008) - The setup failed. An attempt to free up device space failed.</li> </ul>
 */
export enum HSSPModeErrors {
    /**
     * Unspecified HSSP error.
     */
    ERROR = 4000,
    /**
     * The device could not download the specified script.
     */
    DOWNLOAD_FAILED = 4001,
    /**
     * The validation of the script hash failed.
     */
    HASH_ERROR = 4002,
    /**
     * The device need to resync with the server before the setup can be peformed.
     */
    SYNC_REQUIRED = 4003,
    /**
     * Generic token error.
     */
    TOKEN_ERROR = 4004,
    /**
     * The script is too large for the device.
     */
    MAX_SCRIPT_SIZE_ERROR = 4005,
    /**
     * The device storage is full.
     */
    DEVICE_STORAGE_FULL_ERROR = 4006,
    /**
     * The device storage does not have enough free space to store the script.
     */
    DEVICE_STORAGE_FREE_ERROR = 4007,
    /**
     * An attempt to free up device storage space failed.
     */
    DEVICE_STORAGE_CLEAN_ERROR = 4008,
}
