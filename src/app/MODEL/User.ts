export class User{
    userId : number | null = null;
    userName : string | null = null;
    userEmail : string | null = null;
    userPassword : string | null = null;
    userRole : string | null = null;
    permission?:string[] = [];
    isLogin:Boolean = false;
}