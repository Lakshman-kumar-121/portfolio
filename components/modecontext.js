import React, { useState , useContext } from "react";

const Mode = React.createContext();
const Changemode = React.createContext();

export function thememde(){
    return useContext(Mode);
  }
  export function changetheme(){
    return useContext(Changemode);
  }

const ModeContext = ({children}) => {
    
    const [thememode, setthememode] = useState(false);

    const changetheme = ()=>{
        setthememode(!thememode);
    }
    return ( 
        <Mode.Provider value={thememode}>
<Changemode.Provider value={changetheme}>
    {children}

</Changemode.Provider>
        </Mode.Provider>
     );
}
 
export default ModeContext;