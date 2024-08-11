import { PersonaHc } from "../index.model.api";
import { LOCAL_STORAGE } from "../index.model.system";

export function setLocalStorage(key: LOCAL_STORAGE, value: object) {
    if (!funcionaLocalStorageSSR()) return;
    let item = JSON.stringify(value);
    localStorage.setItem(key, item);
    return;
}

export function getLocalStoragePersona(): PersonaHc | null {
    if (!funcionaLocalStorageSSR()) return null;
    const key: LOCAL_STORAGE = 'idPersona'
    const value = localStorage.getItem(key);
    if (!value) return null;
    return JSON.parse(value);
}

export function getLocalStorageAny(key: LOCAL_STORAGE) {
    if (!funcionaLocalStorageSSR()) return false;
    const value: string | null = localStorage.getItem(key);
    if (value === null) return null;
    return JSON.parse(value);
}

export function existeLocalStorage(key: LOCAL_STORAGE): boolean {
    if (!funcionaLocalStorageSSR()) return false;
    const value: string | null = localStorage.getItem(key);
    if (value === null) return false;
    return true;
}

export function funcionaLocalStorageSSR(): boolean {
    return typeof localStorage !== 'undefined';
}