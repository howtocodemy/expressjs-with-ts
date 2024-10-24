import { User, UserBase } from "./user";

// A post request should not contain an id.
// export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers" | "age">;

export class UsersService {
    public get(id: number, name?: string): User {
        return {
            id,
            email: "jane@doe.com",
            name: name ?? "Jane Doe",
            status: "Happy",
            phoneNumbers: [],
            age: 30,
        };
    }

    public create(userCreationParams: UserBase): User {
        return {
            id: Math.floor(Math.random() * 10000), // Random
            status: "Happy",
            ...userCreationParams,
        };
    }
}
