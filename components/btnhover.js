import { useState } from "react";

const useHover = ()=>{
    const [hover , changehover] = useState(false);

    const onhovertrue = ()=>{
changehover(true);
    }
    const onhoverfalse = ()=>{
        changehover(false);
            }
    return {hover , onhovertrue , onhoverfalse};
}
export default useHover;