import { EstadoDiagnostico } from '../../index.model.api';

export interface Diagnostico {
    idhc?: number
    inic_enferm?: string
    etiologia?: string
    diagnostico?: string
    observacion?: string
    fecha_eval?: string
    peso?: number
    talla?: number
    enf_cronica?: string
    n_sesion?: number
    plan_pago?: string
    monto_total?: number
    edad?: number
    esta_DiagDTO?: EstadoDiagnostico
}