import { buttonVariants } from './Button'
import React from 'react';


interface GhostButtonProps {
    key?: string;
    children?: React.ReactNode;
}

const GhostButton: React.FC<GhostButtonProps> = ({ key, children }) => {
    return (
        <div key={key} className={buttonVariants({
            size: "sm",
            variant: "ghost",
        })}>
            {children}
        </div>
    );
};

export default GhostButton