import classNames from 'classnames/bind';
import styles from './LinkHasIcon.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);


function LinkHasIcon({ title, icon1,icon2, href = '#', target }) {
    
    return (
        <a className={cx('style')} href={href} target={target}>
            {icon1}
            {icon2}
            <span className={cx('title')}>{title}</span>
        </a>
    );
}

LinkHasIcon.prototype = {
    title: PropTypes.string,
};

export default LinkHasIcon;
