/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Possible HSSP play result codes. <ul><li>SUCCESS(0) - Script is playing.</li><li>ERROR(-1) - Script is not playing.</li></ul>
 */
export enum HSSPPlayResult {
    /**
     * Success. Script is playing.
     */
    SUCCESS = 0,
    /**
     * Error. Script is not playing.
     */
    ERROR = -1,
}
