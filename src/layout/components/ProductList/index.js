import classNames from 'classnames/bind'
import styles from './ProductList.module.scss'
import ProductItem from '../ProductIteam';

const cx = classNames.bind(styles)

function ProductList({props}) {

    const {posts} = props;

    return ( 
        <div className={cx('.wrapper')}>
            {posts.map(post => (
                <ProductItem title={post.title}/>
            ))}
        </div>
     );
}

export default ProductList;