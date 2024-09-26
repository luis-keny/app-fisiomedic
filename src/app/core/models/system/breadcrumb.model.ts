export interface BreadcrumbItem  {
    name: string;
    route?: string;
}

export interface BreadcrumbBar {
    items: BreadcrumbItem[],
    hasButton?: boolean
}