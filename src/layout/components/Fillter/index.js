import classNames from 'classnames/bind';
import styles from './Fillter.module.scss';
import Select from './Select';
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)

const CATEGORY = [
    {
        option: 'Tất cả',
        value: 0
    },
    {
        option: 'Account Steam',
        value: 1
    },
    {
        option: 'Adobe',
        value: 2
    },
    {
        option:  'Battel.net',
        value: 3
    },
    {
        option: 'CD key',
        value: 4
    },
    {
        option: 'Flash sale',
        value: 5
    },
    {
        option: 'Orginris',
        value: 6
    },
    {
        option: 'Postify',
        value: 7
    },
    {
        option: 'Steam',
        value: 8
    },
    {
        option: 'Steam wallet',
        value: 9
    },
    {
        option: 'Tiện ích',
        value: 10
    },   
]

const SORT = [
    {
        option: 'Mặc định',
        value: 0
    },
    {
        option: 'A - Z',
        value: 1
    },
    {
        option: 'Z - A',
        value: 2
    },
    {
        option: 'Từ thấp đến cao',
        value: 3
    },
    {
        option: 'Từ cao đến thấp',
        value: 4
    },
]

const PRICE = [
    {
        option: 'Tất cả',
        value: 5
    },
    {
        option: 'Dưới 1 triệu',
        value: 0
    },
    {
        option: '1 triệu - 2 triệu',
        value: 1
    },
    {
        option: '2 triệu - 3 triệu',
        value: 2
    },
    {
        option: '4 triệu - 5 triệu',
        value: 3
    },
    {
        option: 'Trên 5 triệu',
        value: 4
    },
]


function Fillter({title}) {
    return ( 
        <div className={cx('wrapper')}>
            <span className={cx('title')}>{title}</span>
            <div className={cx('fillter')}>
                <Select label='Danh mục' options={CATEGORY.map((item, index)=> (item))}/>
                <Select label='Thể loại' options={CATEGORY.map((item, index)=> (item))}/>
                <Select label='Giá' options={PRICE.map((item, index)=> (item))} />
                <Select label='Sắp xếp' options={SORT.map((item, index)=> (item))} />
                <Button primary leftIcon={<FontAwesomeIcon icon={faFilter} />}>Lọc</Button>
            </div>
        </div>
     );
}

export default Fillter;