/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ModeUpdateResponse = {
/**
 * Possible result codes from a set mode operation. <ul><li>ERROR(-1) - Failed setting mode.</li><li>SUCCESS_NEW_MODE(0) - Success, another mode was previously set.</li><li>SUCCESS_SAME_MODE(1) - Success, the same mode was previously set.</li>
 */
result: ModeUpdateResponse.result;
};

export namespace ModeUpdateResponse {

    /**
     * Possible result codes from a set mode operation. <ul><li>ERROR(-1) - Failed setting mode.</li><li>SUCCESS_NEW_MODE(0) - Success, another mode was previously set.</li><li>SUCCESS_SAME_MODE(1) - Success, the same mode was previously set.</li>
     */
    export enum result {
        ERROR = -1,
        SUCCESS_NEW_MODE = 0,
        SUCCESS_SAME_MODE = 1,
    }


}
