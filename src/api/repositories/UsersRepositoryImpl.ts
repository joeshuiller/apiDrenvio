import Users, { IUsers } from "../../db/models/Users";
import UsersRepository from "../interfaz/UsersRepository";

class UsersRepositoryImpl implements UsersRepository {
    usersSave(users: IUsers): Promise<any> {
        return new Promise((resolve, reject) => {
            users.save().then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error)
            });
        });
    }
    usersAll(): Promise<any[] | undefined> {
        return new Promise((resolve, reject) => {
            Users.find().then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error)
            });
        });
    }

    usersUsers(userId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            Users.findOne({ _id: userId }).then(res => {
                resolve(res);
            }).catch((error) => {
                reject(error)
            });
        });
    }


}
export default new UsersRepositoryImpl();