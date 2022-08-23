/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Possible HSSP setup result codes. <ul><li>USING_CACHED(0) - Script already present on the device.</li><li>DOWNLOADED(1) - Script downloaded successfully.</li></ul>
 */
export enum HSSPSetupResult {
    /**
     * USING_CACHED
     */
    USING_CACHED = 0,
    /**
     * DOWNLOADED
     */
    DOWNLOADED = 1,
}
