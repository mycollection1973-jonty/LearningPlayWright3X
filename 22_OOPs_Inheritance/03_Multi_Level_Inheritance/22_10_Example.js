// 01-09-2026

// Grand Father -> Father > Son
// BasePage -> Authpage -> AdminPage

class BasePage{
    constructor(name)
    {
        this.name = name;
    }

    open()
    {
        console.log("[OPEN] " + this.name);
    }
}

class AuthPage extends BasePage{
    log(user)
    {
        console.log("[LOGIN] " + user);
    }
}

class AdminPage extends BasePage{
    constructor()
    {
        super("Admin Panel");
    }

    manageUsers()
    {
        console.log("[ADMIN] Managing users");
    }
}

let admin = new AdminPage();
admin.open();
admin.log("Superadmin");
admin.manageUsers();