import { motion } from 'framer-motion';
import './Spot.css'
import {Link} from "react-router-dom";

interface Props {
    text?: string;
    img?: string;
    link: string;
}

export const Spot = ({ text, img, link }: Props) => {
    const spotStyle = {
        backgroundImage: 'url(https://freakyfashion.blob.core.windows.net/site/' + img + ')',
    }

    return (
        <motion.div whileHover={{ scale: 1.1 }} className="spot bg-transparent rounded-4 p-0" style={spotStyle}>
            <Link to={link} className={'w-100 h-100'}>
                <div className={'spot-text p-4 rounded-4 text-center h-100 w-100 d-flex align-items-center justify-content-center'}>{text}</div>
            </Link>
        </motion.div>
    )
}