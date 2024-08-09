import { Diagnostico, Telefono } from "../../index.model.api"

export interface Persona {
    idpersona?: number
    nombre?: string
    apellido?: string
    domicilio?: string
    fecha_nac?: string
    lugar_nac?: string
    residencia?: string
    estado_civil?: string
    genero?: string
    n_hijos?: number
    referencia?: string
    tipo_documento?: boolean // debe ser un string u otro valor
    ndoc_documento?: number
    correo?: string
    telefono?: number
    edad?: number
}

export interface PersonaHc extends Persona {
    telefonos?: Telefono[]
    diagnosticosDTO?: Diagnostico[]
}