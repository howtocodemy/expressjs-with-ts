// export interface User {
//     id: number;
//     email: string;
//     name: string;
//     status?: "Happy" | "Sad";
//     phoneNumbers: string[];
//     age: number
// }

export interface UserBase {
    email: string;
    name: string;
    phoneNumbers: string[];
    age: number;
}
export interface UserWithId extends UserBase {
    id: number;
}

export interface UserWithOptionalFields extends UserBase {
    status?: "Happy" | "Sad";
}

export interface User extends UserWithId, UserWithOptionalFields {

}