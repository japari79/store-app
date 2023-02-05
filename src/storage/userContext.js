import { createContext } from "react";

// Creación del Provider
export const userContext = createContext({user : "Valor por defecto" });

// Se inicializa el Provider
function UserProvider(props) {

    return(
        <userContext.Provider value={{user : "Jofran Aparicio"}}>
            {props.children}
        </userContext.Provider>
    );
}

export { UserProvider }