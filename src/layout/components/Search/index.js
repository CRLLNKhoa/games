import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchItem from './SearchItem';

const cx = classNames.bind(styles);
const SLIDE_TEXT = [
    {
        title: 'Chia sẻ tài khoản Netflix và nhận doanh thu',
        href: '/'
    },
    {
        title: 'MONSTER HUNTER RISE (CD Key Steam)',
        href: '/'
    },
    {
        title: 'Thần Trùng - Game kinh dị thuần Việt',
        href: '/'
    },
    {
        title: 'Nâng cấp AutoDesk giá cực rẻ ',
        href: '/'
    },
    {
        title: 'Adobe Full App (1 năm) chỉ từ 1190k',
        href: '/'
    },
       
];

function Search() {
    return (
        <div className={cx('wrapper')}>
            <input type="text" placeholder="Tìm kiếm sản phẩm" />
            <FontAwesomeIcon className={cx('icon')} icon={faClose} />
            <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <div className={cx('search-box')}>
                {SLIDE_TEXT.map((item,index) => <SearchItem title={item.title} href={item.href} key={index} />)}
            </div>
        </div>
    );
}

export default Search;
