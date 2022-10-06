import styles from './Cmt.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CtmRep from './CmtRep';

const cx = classNames.bind(styles);

function Ctm({ src, name, status, time, cmt, rep = {} }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('cmt-main')}>
                <Image className={cx('avatar')} src={src} />
                <div className={cx('cmt-box')}>
                    <div className={cx('line-1')}>
                        <span>{name}</span>
                        {status && (
                            <span>
                                <FontAwesomeIcon icon={faCartShopping} /> {status}
                            </span>
                        )}
                    </div>
                    <span className={cx('time')}>Bình luận vào {time}</span>
                    <p>{cmt}</p>
                    <button className={cx('rep')}>Trả lời</button>
                </div>{' '}
            </div>
            <div className={cx('rep-box')}>
                {rep.map((item, index) => (
                    <CtmRep rep={item} />
                ))}
            </div>
        </div>
    );
}

export default Ctm;
