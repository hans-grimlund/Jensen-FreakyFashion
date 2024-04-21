import { motion } from 'framer-motion';
import './ProductCard.css'
import {Link} from "react-router-dom";

interface Props {
    title: string;
    price: number;
    image: string;
    name: string;
}

export const ProductCard = ({ title, price, image, name}:Props) => {
    const cardStyle = {
        backgroundImage: `url(https://freakyfashion.blob.core.windows.net/items/${image}.jpeg)`,
    }

    return (
        <motion.div whileHover={{ scale: 1.1 }} className={'product-card rounded-4 p-0'} style={cardStyle}>
            <Link className={'col-12 h-100 d-flex flex-column justify-content-between bg-transparent'} to={'/product/' + name}>
                <div></div>
                <div className={'p-2 bg-light'}>
                    <div className={'d-flex justify-content-between text-nowrap'}>
                        <span className={'me-2 overflow-hidden'}>{title}</span>
                        <span>{price} SEK</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}