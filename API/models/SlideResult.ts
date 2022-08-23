/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Possible slide operation result codes. <ul> <li>ACCEPTED(0) - Value updated.</li> <li>ACCEPTED_ROUNDED_DOWN(1) - Value updated but rounded down.</li> <li>ACCEPTED_ROUNDED_UP(2) - Value updated but rounded up.</li> </ul> 
 */
export enum SlideResult {
    /**
     * ACCEPTED
     */
    ACCEPTED = 0,
    /**
     * ACCEPTED_ROUNDED_DOWN
     */
    ACCEPTED_ROUNDED_DOWN = 1,
    /**
     * ACCEPTED_ROUNDED_UP
     */
    ACCEPTED_ROUNDED_UP = 2,
}
