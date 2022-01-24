import { InjectionToken } from "@angular/core";
import { OffLineService } from "./services/off-line.service";
import { OnLineService } from "./services/on-line.service";

export const DATA_SERVICE = new InjectionToken< OffLineService | OnLineService>("settings");
