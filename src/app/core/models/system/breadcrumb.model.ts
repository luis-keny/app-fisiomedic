export interface Breadcrumb {
    name: string;
    route?: string;
}

export interface BreadcrumbComportamiento {
    breadcrumbList: Breadcrumb[],
    btnAdd?: boolean
}