import Image from 'next/image'
import whatsapp from '../../public/whatsapp.svg'
import { Button} from '@nextui-org/react';
//import { HeartIcon } from './HeartIcon';

const Whats = () => {
    return (
        <Button>
            <Image src={whatsapp} 
        alt="Whatsapp Icon"/>
        </Button>
        
        
    )
}

export default Whats