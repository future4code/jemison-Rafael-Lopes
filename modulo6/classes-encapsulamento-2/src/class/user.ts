// --------------------------------Exercício 1 ------------------------------------ //
// Modifique o type User para que ele se torne uma classe.

export class User {
    private id: string
    private email: string
    private password: string

    // Construtor
    constructor(id: string, email: string, password: string) {
        this.id = id;
        this.email = email;
        this.password = password;
    };

    // Método de acesso
    public getId(): string {
        return this.id;
    };
    public getEmail(): string {
        return this.email;
    };
    public getPassword(): string {
        return this.password;
    };

    // Método de alteração ou definição de atributos
    public setId(newId: string): void {
        this.id = newId;
    };
    public setEmail(newEmail: string): void {
        this.email = newEmail;
    };
    public setPassword(newPassword: string): void {
        this.password = newPassword;
    };
};
