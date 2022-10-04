import Image from '../../components/Image';
import classNames from 'classnames/bind';
import styles from './Foolter.module.scss';
import * as data from '../../../data';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Foolter() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('pay')}>
                {data.payImg.map((item, index) => (
                    <Link to="/pay">
                        <Image className={cx('img-pay')} src={item} key={index} />
                    </Link>
                ))}
                <Link to="/pay">
                    <small>và nhiều hình thức thanh toán khác</small>
                </Link>
            </div>
            <div className={cx('social')}>
                {data.social.map((item, index) => (
                    <a href={item.link} target="'_blank'">
                        <Image className={cx('img-pay')} src={item.srcImg} key={index} />
                    </a>
                ))}
            </div>
            <div className={cx('about-me')}>
                <ul>
                    GIỚI THIỆU
                    <li>
                        <a href="https://help.divineshop.vn/gioi-thieu/ly-do-nen-mua-game-ban-quyen">
                            Game bản quyền là gì?
                        </a>
                    </li>
                    <li>
                        <a href="https://help.divineshop.vn/gioi-thieu/gioi-thieu-divine-shop">
                            Giới thiệu Divine Shop
                        </a>
                    </li>
                    <li>
                        <a href="https://help.divineshop.vn/gioi-thieu/dieu-khoan-dich-vu">Điều khoản dịch vụ</a>
                    </li>
                    <li>
                        <a href="https://help.divineshop.vn/gioi-thieu/chinh-sach-bao-mat">Chính sách bảo mật</a>
                    </li>
                </ul>
                <ul>
                    Tài khoản
                    <li>
                        <a href="https://help.divineshop.vn/gioi-thieu/ly-do-nen-mua-game-ban-quyen">Đăng nhập</a>
                    </li>
                    <li>
                        <a href="https://help.divineshop.vn/gioi-thieu/gioi-thieu-divine-shop">Đăng ký</a>
                    </li>
                </ul>
                <ul>
                    LIÊN HỆ
                    <li>
                        Tạm ngừng làm việc 03/10 - 05/10
                        <a href="https://help.divineshop.vn/gioi-thieu/ly-do-nen-mua-game-ban-quyen">
                            <font>Chi tiết</font>
                        </a>
                    </li>
                    <li>
                        Hotline tự động
                        <a href="https://help.divineshop.vn/gioi-thieu/gioi-thieu-divine-shop">
                            <font>1900 633 305</font>
                        </a>
                    </li>
                    <li>
                        <a href="https://help.divineshop.vn/gioi-thieu/gioi-thieu-divine-shop">Liên hệ hỗ trợ</a>
                    </li>
                    <li>
                        <a href="https://help.divineshop.vn/gioi-thieu/gioi-thieu-divine-shop">Chat với CSKH</a>
                    </li>
                </ul>
                <Image src='https://images.dmca.com/Badges/_dmca_premi_badge_2.png?ID=18522dc6-fdd6-4b49-ab40-395a79849050' />
            </div>
        </div>
    );
}

export default Foolter;
