import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync("password123", 10),
        isAdmin: true,
    },
     {
        name: "John Doe",
        email: "johndoe@example.com",
        password: bcrypt.hashSync("password123", 10),
        isAdmin: false,
    },
    {
        name: "Jane Smith",
        email: "janesmith@example.com",
        password: bcrypt.hashSync("password123", 10),
        isAdmin: false,
    }
];

export default users;