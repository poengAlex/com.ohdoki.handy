/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Possible result codes returned from a HAMP start/stop operation.<ul><li>ERROR(-1) - Failed stop/starting motion.</li><li>SUCCESS_NEW_STATE(0) - Started/stopped motion.</li><li>SUCCESS_SAME_STATE(1) - Already started/stopped.</li></ul>
 */
export enum StateResult {
    /**
     * ERROR
     */
    ERROR = -1,
    /**
     * SUCCESS_NEW_STATE
     */
    SUCCESS_NEW_STATE = 0,
    /**
     * SUCCESS_SAME_STATE
     */
    SUCCESS_SAME_STATE = 1,
}
