import { buttonVariants } from './Button'
import { FC, ReactNode } from 'react';


interface GhostButtonProps {
    key?: string;
    children?: ReactNode;
}

const GhostButton: FC<GhostButtonProps> = ( { key, children } ) => {
    return (
        <div key={key} className={buttonVariants( {
            size: "sm",
            variant: "ghost",
        } )}>
            {children}
        </div>
    );
};

export default GhostButton