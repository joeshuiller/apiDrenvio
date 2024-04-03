import { IUsers } from "../../db/models/Users";

export default interface UsersRepository {
    usersSave(users: IUsers): Promise<any | undefined>;
    usersAll(): Promise<any[]| undefined>;
    usersUsers(userId: string): Promise<any | undefined>;
}