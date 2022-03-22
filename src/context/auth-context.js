import { createContext } from "react";


export const AuthContext= createContext({
    role:null,
    token:null,
    id:null,
    login:()=>{},
    logout:()=>{},
});
