import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ValueTransferService {
    private personaSubject = new BehaviorSubject<any | null>(null);
    public persona$ = this.personaSubject.asObservable();

    emitPersona(obj: any) {
        this.personaSubject.next(obj);
    }
}
