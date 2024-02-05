

export class LoggingService{
    
    login:boolean  = false;
    
    isLogin(data:boolean)
    {
        // console.log(data);
        
        this.login = data;
        
    }
}