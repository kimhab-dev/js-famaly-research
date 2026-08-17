class User {
    public name: string;
    public email: string;
    private password: string;

    constructor(name: string, email: string, password: string){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    
    changePassword (newPass: string) {
        if (newPass.length < 8) {
            console.log("Password must have length > 8");
            return;
        }
        return this.password = newPass;
    }
    displayUser () {
        console.log("Username :", this.name);
        console.log("Email :", this.email);
        console.log("Password :", this.password);
    }
}

const user1 = new User('kimhab', 'kimhabsok@gmail.com', 'Kimhab@1234');
user1.changePassword("1234")
user1.displayUser();
