import { JwtHelpers } from './jwt';

describe("helpers.jwt", function() {

    const jwtHelpers = new JwtHelpers();
    const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibXZkY28iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJ1cGxvYWRlciIsIm9yZ2FuaXNhdGlvbiI6IjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtdmRjb0B6b3JndmFuZGV6YWFrLm5sIiwiZXhwIjoxNTUyOTM4MTE5LCJpc3MiOiJuZ3gtaGVscGVyIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzMjUvIn0.ESXxWU8d6Q2kGRvDt-ycZwJlVAgQ-A5HCnwhiZQ6bPQ';
    
    describe("when decodeJwtToken is called", function() {
        it("should return object", function() {
            expect(jwtHelpers.parseJwt(validToken)).toBeDefined();
        });
    });

    describe("when getJwtExpiration is called", function() {
        it("should return valid date object", function() {
            expect(jwtHelpers.getJwtExpiration(validToken) instanceof Date).toEqual(new Date() instanceof Date);
        });     
    });

    describe("when isJwtToken is called", function() {
        it("should return false if incorrect jwt is given", function() {
            const invalidToken = '1589o74819348709hjkidfgljkkljsdknl23klj348p242332';

            expect(jwtHelpers.isJwtToken(invalidToken)).toBe(false);
        });

        it("should return true if correct jwt token is given", function() {
            expect(jwtHelpers.isJwtToken(validToken)).toBe(true);
        });
    });

    
});

