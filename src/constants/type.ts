export type PackageType = {
    id: string;
    name: string;
    data: string;
    usedTime: string;
    price: string;
    description: string;
}

export type ModalPackageInfo = {
    status: boolean;
    data?: PackageType;
}

export type ModalRegister = {
    status: boolean;
    id?: string;
}