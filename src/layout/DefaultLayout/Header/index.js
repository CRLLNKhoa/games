import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import LinkHasIcon from '../../components/LinkHasIcon';
import Search from '../../components/Search';
import Image from '../../components/Image';
import Button from '../../components/Button';
import Tippy from '@tippyjs/react/headless';
import MenuItem from '../../components/MenuItem';
import LinkHasImg from '../../components/LinkHasImg';
import { Wrapper as PropperWapper } from '../../../layout/components/Popper';
import { useState, useEffect } from 'react';
import ToastMessage from '../../components/ToastMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faPhone,
    faGift,
    faChevronLeft,
    faChevronRight,
    faCreditCard,
    faMap,
    faPercent,
    faFire,
    faEye,
    faCartShopping,
    faPlus,
    faBars,
    faGamepad,
    faBriefcase,
    faGraduationCap,
    faQuestion,
    faStarOfDavid,
    faMessage,
    faEllipsis,
    faMinus,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const SLIDE_TEXT = [
    'Chia sẻ tài khoản Netflix và nhận doanh thu',
    'MONSTER HUNTER RISE (CD Key Steam)',
    'Thần Trùng - Game kinh dị thuần Việt',
    'Nâng cấp AutoDesk giá cực rẻ ',
    'Adobe Full App (1 năm) chỉ từ 1190k',
];

const ACCOUNT_MENU = [
    {
        label: 'Số dư tài khoản',
        icon: null,
    },
    {
        label: '0đ',
        icon: <FontAwesomeIcon icon={faPlus} />,
    },
    {
        label: 'Quản lí tài khoản',
        icon: null,
    },
    {
        label: 'Lịch sử đơn hàng',
        icon: null,
    },
    {
        label: 'Sản phẩm yêu thích',
        icon: null,
    },
    {
        label: 'Đăng xuất',
        icon: null,
        onClick: 'handleLogout',
    },
];

const CATEGORY_MENU = [
    {
        label: 'Giải trí',
        icon: <FontAwesomeIcon icon={faGamepad} />,
    },
    {
        label: 'Học tập',
        icon: <FontAwesomeIcon icon={faBriefcase} />,
    },
    {
        label: 'Làm việc',
        icon: <FontAwesomeIcon icon={faGraduationCap} />,
    },
    {
        label: 'Game steam',
        icon: <FontAwesomeIcon icon={faQuestion} />,
    },
    {
        label: 'Game origin',
        icon: <FontAwesomeIcon icon={faStarOfDavid} />,
    },
    {
        label: 'Window, office',
        icon: <FontAwesomeIcon icon={faQuestion} />,
    },
    {
        label: 'Google drive',
        icon: <FontAwesomeIcon icon={faQuestion} />,
    },
];

const user = {
    name: 'lnkhoa1205',
    products: '0',
};

function Header() {
    const [count, setCount] = useState(0);
    const [currentLogin, setCurrentLogin] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [formLogin, setFormLogin] = useState(1);
    const [modalLogin, setModalLogin] = useState(false);
    const [toast, setToast] = useState(false)
    const [toastOut, setToastOut] = useState(false)

    const hanldeLogin = () => {
        setModalLogin(true);
        setFormLogin(1)
    };

    const hanldeBtnLogin = () => {
        setModalLogin(false);
        setCurrentLogin(true)
        setToast(true)
        setTimeout(() => {
            setToast(false)
        }, 3000);
    };

    const hanldeLoginExit = () => {
        setModalLogin(false);
    };

    const hanldeChat = () => {
        if (showChat) {
            setShowChat(false);
        } else setShowChat(true);
    };

    const hanldeChatExit = () => {
        setShowChat(false);
    };

    const handleLogout = () => {
        setCurrentLogin(false);
        setToastOut(true)
        setTimeout(() => {
            setToastOut(false)
        }, 3000);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(Math.floor(Math.random() * 5));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={cx('wrapper')}>
            {toast && <ToastMessage content='Đăng nhập thành công!' success/>}
            {toastOut && <ToastMessage content='Đăng Xuất thành công!' wraning/>}
            <div className={cx('header-top')}>
                <div className={cx('center')}>
                    <div className={cx('header-top__left')}>
                        <LinkHasIcon
                            className={cx('slide')}
                            href="https://github.com/"
                            icon1={<FontAwesomeIcon icon={faChevronLeft} />}
                            icon2={<FontAwesomeIcon icon={faChevronRight} />}
                            title={SLIDE_TEXT[count]}
                            target="_blank"
                        />
                    </div>
                    <div className={cx('header-top__right')}>
                        <LinkHasIcon
                            href="https://github.com/"
                            icon1={<FontAwesomeIcon icon={faBook} />}
                            title="Hướng dẫn mua hàng"
                            target="_blank"
                        />
                        <LinkHasIcon
                            href="https://github.com/"
                            icon1={<FontAwesomeIcon icon={faGift} />}
                            title="Ưu đãi khách hàng"
                            target="_blank"
                        />
                        <LinkHasIcon
                            href="https://github.com/"
                            icon1={<FontAwesomeIcon icon={faPhone} />}
                            title="Thông tin liên hệ"
                            target="_blank"
                        />
                    </div>
                </div>
            </div>
            <div className={cx('header-main')}>
                <div className={cx('center', 'header-main__container')}>
                    <div className={cx('header-main__top')}>
                        <Link to="/" className={cx('logo')}>
                            <Image
                                className={cx('img-logo')}
                                src="https://cdn.divineshop.vn/static/b1402e84a947ed36cebe9799e47f61c2.svg"
                                alt="Divine Shop"
                                to="/"
                            />
                            <h4>Divine Shop</h4>
                        </Link>
                        <div>
                            <Search />
                        </div>
                        {currentLogin ? (
                            <Tippy
                                placement="bottom"
                                delay={[0, 500]}
                                interactive
                                render={(attrs) => (
                                    <div className="box" tabIndex="-1" {...attrs}>
                                        <PropperWapper>
                                            {ACCOUNT_MENU.map((item, index) => (
                                                <MenuItem
                                                    key={index}
                                                    iconRight={item.icon}
                                                    onClick={item.onClick && handleLogout}
                                                >
                                                    {item.label}
                                                </MenuItem>
                                            ))}
                                        </PropperWapper>
                                    </div>
                                )}
                            >
                                <div className={cx('logined')}>
                                    <Image
                                        className={cx('img-login')}
                                        src="https://cdn.divineshop.vn/image/catalog/icon/avatar-khach-hang-2-52544.png?hash=1649933269"
                                        title={user.name}
                                    />
                                    <span className={cx('user-name')}>{user.name}</span>
                                </div>
                            </Tippy>
                        ) : (
                            <div className={cx('not-login')}>
                                <Image
                                    className={cx('img-notlogin')}
                                    src="https://toppng.com/uploads/preview/vu-thi-ha-user-pro-icon-115534024853ae3gswzwd.png"
                                    title={user.name}
                                />
                                <span className={cx('user-name')} onClick={hanldeLogin}>
                                    Đăng nhập / Đăng ký
                                </span>
                            </div>
                        )}
                        <Button
                            outline
                            primary
                            leftIcon={<FontAwesomeIcon icon={faCartShopping} />}
                            num={user.products}
                        >
                            Giỏ hàng
                        </Button>
                    </div>
                    <div className={cx('header-main__bottom')}>
                        <LinkHasIcon
                            className={cx('slide')}
                            href="https://github.com/"
                            icon1={<FontAwesomeIcon icon={faEye} />}
                            title="Sản phẩm bạn vừa xem"
                            target="_blank"
                        />
                        <LinkHasIcon
                            className={cx('slide')}
                            href="https://github.com/"
                            icon1={<FontAwesomeIcon icon={faFire} />}
                            title="Sản phẩm mua nhiều"
                            target="_blank"
                        />
                        <LinkHasIcon
                            className={cx('slide')}
                            href="https://github.com/"
                            icon1={<FontAwesomeIcon icon={faPercent} />}
                            title="Sản phẩm khuyến mại"
                            target="_blank"
                        />
                        <LinkHasIcon
                            className={cx('slide')}
                            href="https://github.com/"
                            icon1={<FontAwesomeIcon icon={faMap} />}
                            title="Đại lí giao dịch"
                            target="_blank"
                        />
                        <LinkHasIcon
                            className={cx('slide')}
                            href="https://github.com/"
                            icon1={<FontAwesomeIcon icon={faCreditCard} />}
                            title="Hình thức thanh toán"
                            target="_blank"
                        />
                    </div>
                </div>
            </div>
            <div className={cx('header-bottom')}>
                <div className={cx('center')}>
                    <Tippy
                        placement="bottom"
                        delay={[0, 500]}
                        interactive
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <PropperWapper>
                                    {CATEGORY_MENU.map((item, index) => (
                                        <MenuItem
                                            className={cx('item-category')}
                                            to="/search"
                                            key={index}
                                            iconLeft={item.icon}
                                        >
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </PropperWapper>
                            </div>
                        )}
                    >
                        <span className={cx('category')}>
                            <FontAwesomeIcon className={cx('icon-category')} icon={faBars} />
                            Danh mục sản phẩm
                        </span>
                    </Tippy>
                    <div className={cx('header-bottom__link')}>
                        <LinkHasImg title="Thủ thuật và tin tức">
                            <Image
                                className={cx('img-link')}
                                src="https://cdn.divineshop.vn/image/catalog/Anh/Icon%20svg/Nap-thesvg-30724.svg?hash=1640449820"
                            />
                        </LinkHasImg>
                        <LinkHasImg title="Giới thiệu bạn bè">
                            <Image
                                className={cx('img-link')}
                                src="https://cdn.divineshop.vn/image/catalog/Anh/Icon%20svg/Gioi-thieu-ban-be-87652.svg?hash=1640449820"
                            />
                        </LinkHasImg>
                        <LinkHasImg title="Liên hệ hợp tác">
                            <Image
                                className={cx('img-link')}
                                src="https://cdn.divineshop.vn/image/catalog/Anh/Icon%20svg/Lien-he-hop-tac-33199.svg?hash=1640449820"
                            />
                        </LinkHasImg>
                        <LinkHasImg title="Ưu đãi khách hàng VIP">
                            <Image
                                className={cx('img-link')}
                                src="https://cdn.divineshop.vn/image/catalog/Anh/Icon%20svg/Uu-dai-khach-vip-79547.svg?hash=1640449820"
                            />
                        </LinkHasImg>
                    </div>
                </div>
            </div>
            <div className={cx('chat-box')} onClick={hanldeChat}>
                <FontAwesomeIcon icon={faMessage} className={cx('box-chat__icon')} />
                {showChat ? (
                    <div className={cx('chat')}>
                        <div className={cx('chat-header')}>
                            <Image
                                className={cx('logo-chat')}
                                src="https://scontent.fvca2-1.fna.fbcdn.net/v/t1.6435-1/187077644_3956254741095392_947272388826355861_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=100&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=r-h0m1eX3BsAX8npQGZ&_nc_ht=scontent.fvca2-1.fna&oh=00_AT8F3NblMd9OUZUBMaDa5e-I2OL6E2WzC3FyBtTpPCklJQ&oe=6360A059"
                            />
                            <div className={cx('menu-chat')}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </div>
                            <div className={cx('chat-exit')} onClick={hanldeChatExit}>
                                <FontAwesomeIcon icon={faMinus} />
                            </div>
                        </div>
                        <p className={cx('title')}>Chat với Divine Shop - Game bản quyền</p>
                        <p className={cx('message')}>Nếu cần hỗ trợ, chat ngay với chúng tôi</p>
                        <Button primary className={cx('btn-chat')}>
                            Bất đầu chat
                        </Button>
                        <p className={cx('by')}>
                            <FontAwesomeIcon icon={faMessage} /> Do messager cung cấp
                        </p>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            {modalLogin && (
                <div className={cx('form-login')}>
                    <div className={cx('overlay')}>
                        <div className={cx('form')}>
                            <div className={cx('form-header')}>
                                <span
                                    className={formLogin === 1 ? cx('acctive-tabs') : cx('span')}
                                    onClick={() => setFormLogin(1)}
                                >
                                    Đăng nhập
                                </span>
                                <span
                                    className={formLogin === 2 ? cx('acctive-tabs') : cx('span')}
                                    onClick={() => setFormLogin(2)}
                                >
                                    Đăng ký
                                </span>
                                <span className={cx('close')} onClick={hanldeLoginExit}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </span>
                            </div>
                            <div className={cx('form-body')}>
                                <div className={cx('body')}>
                                    <div className={formLogin === 1 ? cx('acctive-tabs', 'login') : cx('hide')}>
                                        <p>
                                            Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận
                                            nhiều ưu đãi hấp dẫn
                                        </p>
                                        <input type="text" placeholder="Email hoặc tên đăng nhập"></input>
                                        <input type="password" placeholder="Mật khẩu"></input>
                                        <span className={cx('password-hide')}>Bạn quên mật khẩu?</span>
                                        <Button primary onClick={hanldeBtnLogin}>Đăng nhập</Button>
                                        <p className={cx('label')}>Hoặc đăng nhập bằng</p>
                                        <div className={cx('login-with')}>
                                            <Image src="https://cdn.divineshop.vn/static/0b314f30be0025da88c475e87a222e5a.svg" />
                                            <Image src="https://cdn.divineshop.vn/static/4ba68c7a47305b454732e1a9e9beb8a1.svg" />
                                        </div>
                                    </div>
                                    <div className={formLogin === 2 ? cx('acctive-tabs', 'register') : cx('hide')}>
                                        <p>
                                            Đăng ký để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều
                                            ưu đãi hấp dẫn
                                        </p>
                                        <input type="text" placeholder="Họ và tên"></input>
                                        <input type="password" placeholder="Email"></input>
                                        <input type="text" placeholder="Tên đăng nhập"></input>
                                        <input type="text" placeholder="Mật khẩu"></input>
                                        <input type="text" placeholder="Nhập lại mật khẩu"></input>
                                        <input type="text" placeholder="Số điện thoại"></input>
                                        <input type="text" placeholder="Mã giới thiệu (nếu có)"></input>
                                        <Button primary>Tạo tài khoản</Button>
                                        <p className={cx('label')}>
                                            Khi bấm Tạo tài khoản, bạn đã đồng ý với{' '}
                                            <a href="/">Điều khoản dịch vụ của Divine Shop</a>
                                        </p>
                                    </div>
                                </div>
                                {formLogin === 1 && (
                                    <Image
                                        className={cx('img-form')}
                                        src="https://cdn.divineshop.vn/static/368e705d45bfc8742aa9d20dbcf4c78c.svg"
                                    />
                                )}
                                {formLogin === 2 && (
                                    <Image
                                        className={cx('img-form')}
                                        src="https://cdn.divineshop.vn/static/235dccb09069e3d4eebc6227236f9dc2.svg"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
