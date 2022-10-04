import classNames from 'classnames/bind';
import styles from './Fillter.module.scss';
const cx = classNames.bind(styles);
function Select({ options = [], label}) {
    return (
        <div className={cx('wrapper')}>
            <select className={cx('select')} multiple={false}>
                {options.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.option}
                    </option>
                ))}
            </select>
            <label>{label}</label>
        </div>
    );
}
export default Select;
