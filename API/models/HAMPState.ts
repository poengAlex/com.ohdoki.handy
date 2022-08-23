/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Possible HAMP states: <ul> <li>STOPPED(1) - The device slide is not moving.</li> <li>MOVING(2) - The device slide is moving</li> </ul>
 */
export enum HAMPState {
    /**
     * STOPPED
     */
    STOPPED = 1,
    /**
     * MOVING
     */
    MOVING = 2,
}
