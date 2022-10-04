import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Image from '../../layout/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItem from '../../layout/components/MenuItem';
import Button from '../../layout/components/Button';
import ProductItem from '../../layout/components/ProductIteam';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import * as data from '../../data';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import {
    faGamepad,
    faBriefcase,
    faGraduationCap,
    faQuestion,
    faStarOfDavid,
    faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const CATEGORY_MENU = [
    {
        label: 'Giải trí',
        icon: <FontAwesomeIcon icon={faGamepad} />,
        to: '/search'
    },
    {
        label: 'Học tập',
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        to: '/search'
    },
    {
        label: 'Làm việc',
        icon: <FontAwesomeIcon icon={faGraduationCap} />,
        to: '/search'
    },
    {
        label: 'Game steam',
        icon: <FontAwesomeIcon icon={faQuestion} />,
        to: '/search'
    },
    {
        label: 'Game origin',
        icon: <FontAwesomeIcon icon={faStarOfDavid} />,
        to: '/search'
    },
    {
        label: 'Window, office',
        icon: <FontAwesomeIcon icon={faQuestion} />,
        to: '/search'
    },
    {
        label: 'Google drive',
        icon: <FontAwesomeIcon icon={faQuestion} />,
        to: '/search'
    },
    {
        label: 'Steam wallet',
        icon: <FontAwesomeIcon icon={faWallet} />,
        to: '/search'
    }
];

function Home() {
    // const [postList, setPostList] = useState([]);

    // useEffect(() => {
    //     async function fetchPostList(){
    //         try {
    //             const requestUrl = 'https://api.jikan.moe/v4/anime';
    //             const res = await fetch(requestUrl);
    //             const resJSON = await res.json();
    //             const {data} = resJSON;
    //             setPostList(data);
    //         } catch (error) {
    //             console.log("Lỗi kết nối server!",error.message)
    //         }
    //     }
    //     fetchPostList()
    // }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('')}>
                <div className={cx('ads', 'center--col')}>
                    <div className={cx('ads-top')}>
                        <div className={cx('ads-menu')}>
                            {CATEGORY_MENU.map((item, index) => (
                                <MenuItem className={cx('item-category')} to={item.to} key={index} iconLeft={item.icon}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </div>
                        <div className={cx('ads-slider')}>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                pagination={{ clickable: true }}
                                navigation={{ clickable: true }}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <Image
                                        className={cx('img-slider')}
                                        src="https://cdn.divineshop.vn/image/catalog/Anh/24.12.21/t%E1%BB%91i%20%C6%B0u%20c%C3%B4ng%20vi%E1%BB%87c-45178.png?hash=1640349471"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className={cx('img-slider')}
                                        src="https://cdn.divineshop.vn/image/catalog/Anh/Banner/Divine%20Shop%20tuy%E1%BB%83n%20d%E1%BB%A5ng-66809.png?hash=1659769500"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className={cx('img-slider')}
                                        src="https://cdn.divineshop.vn/image/catalog/Banner/banner-wescan-32282.jpg?hash=1662792290"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className={cx('img-slider')}
                                        src="https://cdn.divineshop.vn/image/catalog/Banner/banner%20Google%20One%20(3)-10567.png?hash=1658937523"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className={cx('img-slider')}
                                        src="https://cdn.divineshop.vn/image/catalog/Anh/14.03.2022/AutoDesk%20Main%20banner-89472.png?hash=1656637545"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className={cx('img-slider')}
                                        src="https://cdn.divineshop.vn/image/catalog/Anh/24.12.21/th%E1%BB%AD%20th%C3%A1ch%2010%20ph%C3%BAt-40175.png?hash=1640349471"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className={cx('img-slider')}
                                        src="https://cdn.divineshop.vn/image/catalog/Anh/24.12.21/netflix-49596.png?hash=1640349471"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className={cx('ads-show-2')}>
                            <Link to="/">
                                <Image
                                    className={cx('img-ads')}
                                    src="https://cdn.divineshop.vn/image/catalog/Anh/14.03.2022/Adobe%20(1)-26373.png?hash=1657766058"
                                />
                            </Link>
                            <Link to="/">
                                <Image
                                    className={cx('img-ads')}
                                    src="https://cdn.divineshop.vn/image/catalog/Anh/14.03.2022/Spotify%20(3)-17078.png?hash=1657766022"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={cx('ads-bottom')}>
                        <Link>
                            <Image
                                className={cx('img-ads')}
                                src="https://cdn.divineshop.vn/image/catalog/Anh/14.03.2022/Steam%20(1)-13036.png?hash=1657766037"
                            />
                        </Link>
                        <Link>
                            <Image
                                className={cx('img-ads')}
                                src="https://cdn.divineshop.vn/image/catalog/Anh/14.03.2022/Discord%20(1)-70592.png?hash=1657766010"
                            />
                        </Link>
                        <Link>
                            <Image
                                className={cx('img-ads')}
                                src="https://cdn.divineshop.vn/image/catalog/Anh/14.03.2022/gmail%20(1)-60969.png?hash=1657766079"
                            />
                        </Link>
                        <Link>
                            <Image
                                className={cx('img-ads')}
                                src="https://cdn.divineshop.vn/image/catalog/Anh/14.03.2022/Microsoft%20Office%20(1)-16160.png?hash=1657766091"
                            />
                        </Link>
                    </div>
                </div>
                <div className={cx('featured-products', 'center--col')}>
                    <div className={cx('featured-products__header')}>
                        <div className={cx('header-title')}>
                            <span>Sản phẩm nổi bật</span>
                            <Button primary small>
                                Khám phá
                            </Button>
                        </div>
                        <span className={cx('subtitle')}>
                            Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích
                        </span>
                    </div>
                    <div className={cx('featured-products__list')}>
                        {data.featuredProducts.map((featuredProduct, index) => (
                            <ProductItem
                                srcImg={featuredProduct.image}
                                title={featuredProduct.title}
                                price={featuredProduct.price}
                                priceSale={featuredProduct.priceSale}
                                salePer={featuredProduct.salePer}
                                key={featuredProduct.index}
                            />
                        ))}
                    </div>
                    <div className={cx('featured-products__bottom')}>
                        <span className={cx('see-more')}>Xem thêm</span>
                    </div>
                </div>
                <div className={cx('featured-products', 'center--col')}>
                    <div className={cx('selling-products__header')}>
                        <div className={cx('header-title')}>
                            <span className={cx('key-title')}>Từ khóa nổi bậc</span>
                            <br></br>
                        </div>
                        <div className={cx('list-key')}>
                            {data.featuredKey.map((item, index) => (
                                <Button featuredKey key={index}>{item}</Button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('selling')}>
                    <div className={cx('selling-products', 'center--col')}>
                        <div className={cx('selling-products__header')}>
                            <div className={cx('header-title')}>
                                <span>Sản phẩm bán chạy</span>
                                <Button primary small>
                                    Khám phá
                                </Button>
                            </div>
                            <span className={cx('subtitle')}>
                                Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích
                            </span>
                        </div>
                        <div className={cx('selling-products__list')}>
                            {data.featuredProducts.map((featuredProduct, index) => (
                                <ProductItem
                                    srcImg={featuredProduct.image}
                                    title={featuredProduct.title}
                                    price={featuredProduct.price}
                                    priceSale={featuredProduct.priceSale}
                                    salePer={featuredProduct.salePer}
                                    key={featuredProduct.index}
                                />
                            ))}
                        </div>
                        <div className={cx('featured-products__bottom')}>
                            <span className={cx('selling-see-more')}>Xem thêm</span>
                        </div>
                    </div>
                </div>
                <div className={cx('featured-products', 'center--col')}>
                    <div className={cx('selling-products__header')}>
                        <div className={cx('header-title')}>
                            <span className={cx('key-title')}>Giá phù hợp</span>
                            <br></br>
                        </div>
                        <div className={cx('list-price')}>
                            {data.price.map((item, index) => (
                                <Button featuredKey key={index}>{item}</Button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('featured-products', 'center--col')}>
                    <div className={cx('featured-products__header')}>
                        <div className={cx('header-title')}>
                            <span>Game trên Steam</span>
                            <Button primary small>
                                Khám phá
                            </Button>
                        </div>
                        <span className={cx('subtitle')}>
                            Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích
                        </span>
                    </div>
                    <div className={cx('featured-products__list')}>
                        {data.games.map((game, index) => (
                            <ProductItem
                                srcImg={game.image}
                                title={game.title}
                                price={game.price}
                                priceSale={game.priceSale}
                                salePer={game.salePer}
                                key={game.index}
                            />
                        ))}
                    </div>
                    <div className={cx('featured-products__bottom')}>
                        <span className={cx('see-more')}>Xem thêm</span>
                    </div>
                </div>
                <div className={cx('featured-products', 'center--col')}>
                    <div className={cx('featured-products__header')}>
                        <div className={cx('header-title')}>
                            <span>Học tập</span>
                            <Button primary small>
                                Khám phá
                            </Button>
                        </div>
                        <span className={cx('subtitle')}>
                            <br></br>
                        </span>
                    </div>
                    <div className={cx('featured-products__list')}>
                        {data.studys.map((study, index) => (
                            <ProductItem
                                srcImg={study.image}
                                title={study.title}
                                price={study.price}
                                priceSale={study.priceSale}
                                salePer={study.salePer}
                                key={study.index}
                            />
                        ))}
                    </div>
                    <div className={cx('featured-products__bottom')}>
                        <span className={cx('see-more')}>Xem thêm</span>
                    </div>
                </div>
                <div className={cx('featured-products', 'center--col')}>
                    <div className={cx('featured-products__header')}>
                        <div className={cx('header-title')}>
                            <span>Giải trí</span>
                            <Button primary small>
                                Khám phá
                            </Button>
                        </div>
                        <span className={cx('subtitle')}>
                            <br></br>
                        </span>
                    </div>
                    <div className={cx('featured-products__list')}>
                        {data.games.map((game, index) => (
                            <ProductItem
                                srcImg={game.image}
                                title={game.title}
                                price={game.price}
                                priceSale={game.priceSale}
                                salePer={game.salePer}
                                key={game.index}
                            />
                        ))}
                    </div>
                    <div className={cx('featured-products__bottom')}>
                        <span className={cx('see-more')}>Xem thêm</span>
                    </div>
                </div>
                <div className={cx('featured-products', 'center--col')}>
                    <div className={cx('featured-products__header')}>
                        <div className={cx('header-title')}>
                            <span>Làm việc</span>
                            <Button primary small>
                                Khám phá
                            </Button>
                        </div>
                        <span className={cx('subtitle')}>
                            <br></br>
                        </span>
                    </div>
                    <div className={cx('featured-products__list')}>
                        {data.works.map((work, index) => (
                            <ProductItem
                                srcImg={work.image}
                                title={work.title}
                                price={work.price}
                                priceSale={work.priceSale}
                                salePer={work.salePer}
                                key={work.index}
                            />
                        ))}
                    </div>
                    <div className={cx('featured-products__bottom')}>
                        <span className={cx('see-more')}>Xem thêm</span>
                    </div>
                </div>
                <div className={cx('please-register')}>
                    <div className={cx('please-register__body', 'center--col')}>
                        <div className={cx('img-please')}>
                            <Image src="https://cdn.divineshop.vn/static/528b91cfa29c7ffd85418f4b1e8cc8ce.svg" />
                        </div>
                        <div className={cx('please-content')}>
                            <h1>Bạn chưa có tài khoản?</h1>
                            <p>
                                Hãy tạo ngay một tài khoản để sử dụng đầy đủ các tính năng, tích lũy ưu đãi khi thanh
                                toán các sản phẩm và tham gia vào chương trình Giới thiệu bạn bè nhận hoa hồng vĩnh viễn
                                tại Divine Shop.
                            </p>
                            <span>
                                <Button primary>Đăng ký ngay</Button>
                                <span>Hoặc bạn đã có tài khoản?<Link>Đăng nhập</Link></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
