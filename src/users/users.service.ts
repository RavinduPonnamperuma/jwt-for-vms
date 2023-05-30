import { Injectable } from '@nestjs/common';
import { type } from 'os';
export type User=any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId:1,
            username:'Ravindu',
            password:'RA2000',
            
        },
        {
            userId:2,
            username:'Supun',
            password:'supunMax',
        },
    ];
    async findOne(username:string): Promise<User | undefined>{
        return this.users.find(user => user.username === username);
    }

}
