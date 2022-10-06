import classNames from 'classnames/bind';
import styles from './detail.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '../../layout/components/ProductIteam';
import Ctm from '../../layout/components/Cmt';
// import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import * as data from '../../data';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from '../../layout/components/Image';
import Button from '../../layout/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faTag, faBell, faHeart, faCartShopping, faCopy, faCode } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Detail() {

    return (
        <div className={cx('wrapper', 'center')}>
            <div className={cx('info')}>
                <div className={cx('image-box')}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        pagination={{ clickable: true }}
                        navigation={{ clickable: true }}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {data.detail.images.map((item, index) => (
                            <SwiperSlide>
                                <Image className={cx('img-slider')} src={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={cx('info-box')}>
                    <a href="/">Sản phẩm trên Steam</a>
                    <h2>{data.detail.title}</h2>
                    <span>
                        <FontAwesomeIcon icon={faBox} /> Tình trạng: <font>{data.detail.status}</font>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faTag} /> Thể loại:{' '}
                        <font>
                            {data.detail.type.map((item) => (
                                <span>{item}</span>
                            ))}
                        </font>
                    </span>
                    <div className={cx('price')}>
                        <h3>{data.detail.price}</h3>
                        <FontAwesomeIcon className={cx('icon')} icon={faBell} />
                        <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                    </div>
                    <Button buy leftIcon={<FontAwesomeIcon icon={faCartShopping} />}>
                        Mua bằng Steam Wallet
                    </Button>
                </div>
                <div className={cx('coppon')}>
                    <p>Mã sản phẩm</p>
                    <span className={cx('bold')}>{data.detail.coppon}</span>
                    <h4 className={cx('bold')}>Giới thiệu bạn bè</h4>
                    <p>Bạn bè được giảm 5% giá sản phẩm và bạn nhận hoa hồng vĩnh viễn.</p>
                    <div className={cx('share')}>
                        <input type="text" value="https://divineshop.vn/the-office-quest" />
                        <button className={cx('btn')}>
                            <FontAwesomeIcon icon={faCopy} />
                        </button>
                        <button className={cx('btn')}>
                            <FontAwesomeIcon icon={faCode} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={cx('detail')}>
                <h1>Chi tiết sản phẩm</h1>
                <div className={cx('detail-group')}>
                    <Image className={cx('img-detail')} src={data.detail.images[1]} />
                    <p>{data.detail.content}</p>
                    <Image className={cx('img-detail')} src={data.detail.images[4]} />
                </div>
                {data.detail.contentMain.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                <h1>Cấu hình</h1>
                <div className={cx('detail-group')}>
                    <p>
                        Minimun<span>{data.detail.setting.minimun}</span>
                    </p>
                    <p>OS: {data.detail.setting.OS}</p>
                    <p>Processor:: {data.detail.setting.Processor}</p>
                    <p>Memory: {data.detail.setting.Memory}</p>
                    <p>Graphics: {data.detail.setting.Graphis}</p>
                    <p>DirectX: {data.detail.setting.Directx}</p>
                    <p>Storage: {data.detail.setting.Storage}</p>
                    <p>Sound Card: {data.detail.setting.SoundCard}</p>
                </div>
            </div>
            <div className={cx('featured-products', 'center--col')}>
                <div className={cx('featured-products__header')}>
                    <div className={cx('header-title')}>
                        <span>Sản phẩm tương tự</span>
                        <Button primary small>
                            Khám phá
                        </Button>
                    </div>
                    <span className={cx('subtitle')}>
                        Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích
                    </span>
                </div>
                <div className={cx('featured-products__list')}>
                    {data.featuredProducts4.map((featuredProduct, index) => (
                        <ProductItem
                            srcImg={featuredProduct.image}
                            title={featuredProduct.title}
                            price={featuredProduct.price}
                            priceSale={featuredProduct.priceSale}
                            salePer={featuredProduct.salePer}
                            key={featuredProduct.index}
                            to={featuredProduct.to}
                        />
                    ))}
                </div>
            </div>
            <div className={cx('featured-products', 'center--col')}>
                <div className={cx('featured-products__header')}>
                    <div className={cx('header-title')}>
                        <span>Bình luận</span>
                    </div>
                    <span className={cx('subtitle')}>Thời gian phản hồi trung bình: 5 phút!</span>
                </div>
                <div className={cx('cmt-div')}>
                    <textarea className={cx('cmt-box')} placeholder="Nhập nội dung bình luận"></textarea>
                    <Button primary>Gửi bình luận</Button>
                </div>
                <div className={cx('box-cmt')}>
                    {data.Ctm.map((item, index) => (
                        <Ctm src={item.src} name={item.name} status={item.status} time={item.time} cmt={item.cmt} rep={item.rep} />
                    ))}
                </div>
                <span className={cx('more')}>Xem thêm các bình luận khác</span>
            </div>
        </div>
    );
}

export default Detail;
