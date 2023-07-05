import React, {ReactNode, FC} from  "react";
import "./Button.scss";

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button className="button" onClick={onClick} >{children}</button>
    )
}
export default Button;