import Fillter from '../../layout/components/Fillter';
import classNames from 'classnames/bind';
import styles from './search.module.scss';
import * as data from '../../data';
import ProductItem from '../../layout/components/ProductIteam';
const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('center--col','fillter')}><Fillter title="Tìm kiếm" /></div>
            <div className={cx('featured-products', 'center--col')}>
                    <div className={cx('featured-products__list')}>
                        {data.studys.map((study, index) => (
                            <ProductItem
                                srcImg={study.image}
                                title={study.title}
                                price={study.price}
                                priceSale={study.priceSale}
                                salePer={study.salePer}
                                key={study.index}
                            />
                        ))}
                    </div>
                    <div className={cx('featured-products__bottom')}>
                        <span className={cx('see-more')}>Xem thêm</span>
                    </div>
            </div>
        </div>
    );
}

export default Search;
