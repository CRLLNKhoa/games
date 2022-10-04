import classNames from 'classnames/bind';
import styles from './LinkHasImg.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);


function LinkHasImg({ title, children , href = '#', target }) {
    
    return (
        <a className={cx('style')} href={href} target={target}>
            {children}
            <span className={cx('title')}>{title}</span>
        </a>
    );
}

LinkHasImg.prototype = {
    title: PropTypes.string,
};

export default LinkHasImg;
