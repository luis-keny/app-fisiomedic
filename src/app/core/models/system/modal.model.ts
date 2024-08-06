import { Type } from "@angular/core";

export interface Modal {
    title?: string;
    component: Type<any>;
    alertMessage?: string;
}