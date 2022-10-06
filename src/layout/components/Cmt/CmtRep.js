import styles from './Cmt.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CtmRep({ rep }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('cmt-main')}>
                <Image className={cx('avatar')} src={rep.src} />
                <div className={cx('cmt-box')}>
                    <div className={cx('line-1')}>
                        <span>{rep.name}</span>
                        {rep.status && (
                            <span>
                                <FontAwesomeIcon icon={faCartShopping} />
                                {rep.status}
                            </span>
                        )}
                    </div>
                    <span className={cx('time')}>Bình luận vào {rep.time}</span>
                    <p>{rep.cmt}</p>
                    <button className={cx('rep')}>Trả lời</button>
                </div>
            </div>
        </div>
    );
}

export default CtmRep;
