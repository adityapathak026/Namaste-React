import { createContext } from "react";

export const UserContext = createContext({
    user: {
        name: "Aditya Pathak",
        email: "adi@gmail.com",
    }
});