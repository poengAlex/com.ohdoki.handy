/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { BaseService } from './services/BaseService';
import { HampService } from './services/HampService';
import { HdspService } from './services/HdspService';
import { HsspService } from './services/HsspService';
import { HstpService } from './services/HstpService';
import { MaintenanceService } from './services/MaintenanceService';
import { OtaService } from './services/OtaService';
import { SlideService } from './services/SlideService';
import { TimesyncService } from './services/TimesyncService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class handyApi {

    public readonly base: BaseService;
    public readonly hamp: HampService;
    public readonly hdsp: HdspService;
    public readonly hssp: HsspService;
    public readonly hstp: HstpService;
    public readonly maintenance: MaintenanceService;
    public readonly ota: OtaService;
    public readonly slide: SlideService;
    public readonly timesync: TimesyncService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://www.handyfeeling.com/api/handy/v2',
            VERSION: config?.VERSION ?? '2.0.0-beta-3',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.base = new BaseService(this.request);
        this.hamp = new HampService(this.request);
        this.hdsp = new HdspService(this.request);
        this.hssp = new HsspService(this.request);
        this.hstp = new HstpService(this.request);
        this.maintenance = new MaintenanceService(this.request);
        this.ota = new OtaService(this.request);
        this.slide = new SlideService(this.request);
        this.timesync = new TimesyncService(this.request);
    }
}
