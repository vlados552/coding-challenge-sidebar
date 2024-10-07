import { useState, useEffect } from "react";
import SellerSidebarButtonChild from "./SellerSidebarButtonChild";
import { ChevronDownSVG, ChevronUpSVG } from "../../images/SVGAssets";

function SellerSidebarButton({ name, icon, children, callback }) {
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const [hover, setHover] = useState(false);

    function onHover() {
        setHover(!hover);
    }

    function renderChevron() {
        return (
            <div>{dropdownIsOpen ? <ChevronUpSVG /> : <ChevronDownSVG />}</div>
        );
    }

    function renderChildren(children) {
        if (!children) {
            return null;
        }

        return (
            <div className="flex flex-col gap-1 pt-2 px-9">
                {children.map((child) => (
                    <SellerSidebarButtonChild
                        key={child.name}
                        name={child.name}
                        callback={child.callback}
                        selected={child.selected}
                    />
                ))}
            </div>
        );
    }

    useEffect(() => {}, [dropdownIsOpen]);

    return (
        <>
            <div
                className={`flex items-center justify-end cursor-pointer px-3 py-2.5 rounded-lg${
                    hover || dropdownIsOpen ? " bg-white" : ""
                }`}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                onClick={() => {
                    setDropdownIsOpen(!dropdownIsOpen);
                }}
            >
                <div className="flex items-center mr-auto">
                    {icon}
                    <p
                        className="font-main text-sm text-black-lidabro ml-3"
                        onClick={callback}
                    >
                        {name}
                    </p>
                </div>
                {children ? renderChevron() : null}
            </div>
            {dropdownIsOpen ? renderChildren(children) : null}
        </>
    );
}

export default SellerSidebarButton;
