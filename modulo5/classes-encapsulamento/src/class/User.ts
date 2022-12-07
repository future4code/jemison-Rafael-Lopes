export class User {
    constructor(private id: string, private email: string, private password: string) {
        this.email = email;
        this.password = password
    }

    public getEmail(): string {
        return this.email
    };
    public setEmail(newEmail: string): void {
        this.email = newEmail
    };
    public getPassword(): string {
        return this.password
    };
    public setPassword(newPassword: string): void {
        this.password = newPassword
    }
}