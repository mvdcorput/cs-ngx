export class JwtHelpers
{
    public getJwtExpiration = (token: string): Date => {
        if (!this.isJwtToken(token))
        {
            return null;
        }
        
        const jwtToken = this.parseJwt(token);
    
        return new Date(jwtToken.exp * 1000); 
    }
    
    public isJwtToken = (token: string): boolean => {
        const jwtPattern = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;
    
        return jwtPattern.test(token);
    }
    
    public parseJwt = (token: String): IJwtToken => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    
        return JSON.parse(window.atob(base64));
    };
}

export interface IJwtToken {
    aud: string;
    exp: number;
    iis: string;
}