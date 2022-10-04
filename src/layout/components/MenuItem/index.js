import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './MenuItem.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ to, children, iconLeft, iconRight, textsmall = false, onClick, className = false, ...props }) {
    const classes = cx('wrapper', {
        [className]: className,
        textsmall,
    });

    return (
        <p onClick={onClick} className={cx(classes)} {...props}>
            <Link to={to}>
                {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
                <span className={cx('label')}>{children}</span>
                {iconRight && <span className={cx('icon')}>{iconRight}</span>}
            </Link>
        </p>
    );
}

export default MenuItem;
