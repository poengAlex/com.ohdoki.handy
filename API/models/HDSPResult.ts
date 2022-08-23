/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Possible HDSP result codes. <ul><li>ERROR(-3) - Device failed processing the command.</li><li>SUCCESS_POSITION_REACHED(0)</li><li>SUCCESS_POSITION_NOT_REACHED(1)</li><li>SUCCES_ALREADY_AT_POSITION(2)</li><li>SUCCESS_INTERRTUPTED(3)</li></ul>
 */
export enum HDSPResult {
    /**
     * ERROR
     */
    ERROR = -3,
    /**
     * SUCCESS_POSITION_REACHED
     */
    SUCCESS_POSITION_REACHED = 0,
    /**
     * SUCCESS_POSITION_NOT_REACHED
     */
    SUCCESS_POSITION_NOT_REACHED = 1,
    /**
     * SUCCES_ALREADY_AT_POSITION
     */
    SUCCES_ALREADY_AT_POSITION = 2,
    /**
     * SUCCESS_INTERRTUPTED
     */
    SUCCESS_INTERRTUPTED = 3,
}
