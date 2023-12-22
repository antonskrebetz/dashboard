export interface IUsersData {
    key: string;
    name: string;
    surname: string;
    age: number;
    address: string;
    company: string;
}

export interface IMobileDevicesData {
    id: number;
    brand: string;
    model: string;
    storage: number;
    color: string;
    price: number;
    tags: string[];
    key: string;
}

export interface ICarsData {
    brand: string;
    model: string;
    year: number;
    color: string;
    price: number;
}