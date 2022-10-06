import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductItem({ srcImg, title, price, priceSale, salePer ,to}) {
    return (
        <Link to={to} className={cx('wrapper')}>
            <Image className={cx('img-product')} src={srcImg} />
            <div className={cx('info')}>
                <span className={cx('title')}>{title}</span>
                <div className={cx('info-price')}>
                    <span className={cx('price')}>{price}</span>
                    <span className={cx('price-sale')}>{priceSale}</span>
                    {salePer && <span className={cx('sale-per')}>{salePer}</span>}
                </div>
            </div>
        </Link>
    );
}

export default ProductItem;
