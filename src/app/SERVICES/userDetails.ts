import { User } from './../MODEL/User';
export class userDetails{

    constructor(){}

    userDetail:User[] = [
        {userId:1,userName:'abc',userEmail:'abc@gmail.com',userPassword:'123',userRole:"Supper-Admin",permission:["company",'employee','branch'],isLogin:false},
        {userId:2,userName:'xyz',userEmail:'xyz@gmail.com',userPassword:'123',userRole:"Admin",permission:["company"],isLogin:false},
        {userId:3,userName:'pqr',userEmail:'pqr@gmail.com',userPassword:'123',userRole:"Admin",permission:["employee"],isLogin:false},
        {userId:4,userName:'str',userEmail:'str@gmail.com',userPassword:'123',userRole:"Admin",permission:["branch"],isLogin:false},
      ]
    
}