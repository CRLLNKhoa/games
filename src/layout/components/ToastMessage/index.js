import styles from './ToastMessage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ToastMessage({ content, className = false, success, wraning, error, ...passProps }) {
    const props = {
        ...passProps,
    };

    const classes = cx('wrapper', {
        [className]: className,
        success,
        wraning,
        error,
    });

    return(
        <div className={classes} {...props}>
            <span>{content}</span>
        </div>
    )
   
}

export default ToastMessage;
