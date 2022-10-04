import classNames from 'classnames/bind';
import styles from './Fillter.module.scss';
const cx = classNames.bind(styles);

function PriceFill() {
    return ( 
        <div className={cx('price-fill')}>
            <span className={cx('label')}>Mức giá </span>
            <input className={cx('inputPrice','inputPrice-from')} type='number'></input>
            <span> - </span>
            <input className={cx('inputPrice','inputPrice-from')} type='number'></input>
        </div>
    )
}

export default PriceFill;