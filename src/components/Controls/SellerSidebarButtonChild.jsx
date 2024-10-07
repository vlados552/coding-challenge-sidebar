import { useState } from "react";


function SellerSidebarButtonChild({name, callback, selected}){
    const [hover, setHover] = useState(false);
    const [_selected, setSelected] = useState(selected);

    function onHover(){
        setHover(!hover);
    }
    
    return (
            <div 
                className={`flex items-center cursor-pointer px-3 py-2 rounded-lg${ hover || _selected ? " bg-white" : ""}`} 
                onClick={callback} 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
            >
                <div className="">
                    <p className="font-main text-xs text-black-lidabro">{name}</p>
                </div>
            </div>  
    );
};

export default SellerSidebarButtonChild;