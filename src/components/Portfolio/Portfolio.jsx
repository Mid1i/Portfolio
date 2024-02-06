import "./Portfolio.style.scss";

import lastify from "../../assets/images/lastify.jpg";
import pero from "../../assets/images/pero.jpg";
import k2fintech from "../../assets/images/k2fintech.jpg";


export default function Portfolio() {
    return (
        <div className="wrapper__portfolio portfolio" id="portfolio">
            <h3 className="portfolio__subtitle">Портфолио</h3>
            <h2 className="portfolio__title">Каждый проект - это уникальная разработка 🧩</h2>
            <div data-aos="flip-right" className="portfolio__item">
                <div className="portfolio__item-left item-left">
                    <img alt="lastify" className="item-left__image" src={lastify}/>
                </div>
                <div className="portfolio__item-right item-right">
                    <h3 className="item-right__title">Lastify 💥</h3>
                    <p className="item-right__text">Админ панель для сайта Lastify, которая позволяет пользователю смотреть историю покупок и продаж, аккаунты и статистику, цены и логи сайта.</p>
                    <div className="item-right__stack">
                        <span className="item-right__stack-tech">React</span>
                        <span className="item-right__stack-tech">SCSS</span>
                    </div>
                    <div className="item-right__links">
                        <a className="item-right__links-el item-link" href="https://github.com/Mid1i/Lastify">
                            <span className="item-link__text">Код</span>
                            <svg className="item-link__icon item-link__icon--fill" fill="none" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M12.0006 0C5.37027 0 0 5.50598 0 12.3038C-0.00143433 14.8866 0.790344 17.4043 2.26309 19.4996C3.73581 21.5951 5.8147 23.1619 8.2048 23.9777C8.80484 24.0847 9.03046 23.7156 9.03046 23.3921C9.03046 23.1005 9.01486 22.1321 9.01486 21.1011C6.00031 21.6708 5.22028 20.348 4.98026 19.6554C4.84464 19.301 4.26022 18.2097 3.75018 17.9169C3.33017 17.6868 2.73013 17.1171 3.73459 17.1023C4.68024 17.0863 5.35468 17.9944 5.58029 18.3634C6.66034 20.2238 8.38483 19.7009 9.07486 19.3785C9.18045 18.5787 9.49487 18.0411 9.84048 17.7335C7.17035 17.4259 4.38022 16.3641 4.38022 11.6578C4.38022 10.3192 4.84464 9.21313 5.61029 8.35181C5.49026 8.04419 5.07025 6.78308 5.73029 5.09131C5.73029 5.09131 6.73474 4.7677 9.03046 6.3512C10.0074 6.07361 11.0168 5.9342 12.0306 5.93665C13.0507 5.93665 14.0707 6.07434 15.0308 6.3512C17.3265 4.75171 18.3309 5.09131 18.3309 5.09131C18.9909 6.78308 18.5709 8.04419 18.4509 8.35181C19.2154 9.21313 19.681 10.3044 19.681 11.6578C19.681 16.3801 16.8764 17.4259 14.2063 17.7335C14.6407 18.1174 15.0164 18.8556 15.0164 20.0098C15.0164 21.6548 15.0008 22.9774 15.0008 23.3933C15.0008 23.7156 15.2263 24.0995 15.8264 23.9764C18.2083 23.1516 20.278 21.5818 21.7443 19.4879C23.2105 17.394 23.9994 14.8815 24 12.3038C24 5.50598 18.6297 0 11.9994 0L12.0006 0Z" fill="#2D2E32" fillRule="evenodd"/>
                            </svg>
                        </a>
                        <a className="item-right__links-el item-link">
                            <span className="item-link__text">На сайт</span>
                            <svg className="item-link__icon" fill="none" height="20" viewBox="0 0 20 20" width="20">
                                <path d="M12 1L19 1L19 8M19 12.7368L19 17.5C19 18.3285 18.3285 19 17.5 19L2.5 19C1.67157 19 1 18.3285 1 17.5L1 2.5C1 1.67163 1.67157 1 2.5 1L7 1M10.8999 9.09998L18.5499 1.44995" stroke="#2D2E32" strokeWidth="2" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left" className="portfolio__item">
                <div className="portfolio__item-right item-right">
                    <h3 className="item-right__title">PERO</h3>
                    <p className="item-right__text">Интернет-магазин Pero позволяет пользователю смотреть каталог товаров, регистрироваться, добавлять товары в избранное, а также совершать покупки.</p>
                    <div className="item-right__stack">
                        <span className="item-right__stack-tech">React</span>
                        <span className="item-right__stack-tech">SCSS</span>
                    </div>
                    <div className="item-right__links">
                        <a className="item-right__links-el item-link" href="https://github.com/Mid1i/pero">
                            <span className="item-link__text">Код</span>
                            <svg className="item-link__icon item-link__icon--fill" fill="none" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M12.0006 0C5.37027 0 0 5.50598 0 12.3038C-0.00143433 14.8866 0.790344 17.4043 2.26309 19.4996C3.73581 21.5951 5.8147 23.1619 8.2048 23.9777C8.80484 24.0847 9.03046 23.7156 9.03046 23.3921C9.03046 23.1005 9.01486 22.1321 9.01486 21.1011C6.00031 21.6708 5.22028 20.348 4.98026 19.6554C4.84464 19.301 4.26022 18.2097 3.75018 17.9169C3.33017 17.6868 2.73013 17.1171 3.73459 17.1023C4.68024 17.0863 5.35468 17.9944 5.58029 18.3634C6.66034 20.2238 8.38483 19.7009 9.07486 19.3785C9.18045 18.5787 9.49487 18.0411 9.84048 17.7335C7.17035 17.4259 4.38022 16.3641 4.38022 11.6578C4.38022 10.3192 4.84464 9.21313 5.61029 8.35181C5.49026 8.04419 5.07025 6.78308 5.73029 5.09131C5.73029 5.09131 6.73474 4.7677 9.03046 6.3512C10.0074 6.07361 11.0168 5.9342 12.0306 5.93665C13.0507 5.93665 14.0707 6.07434 15.0308 6.3512C17.3265 4.75171 18.3309 5.09131 18.3309 5.09131C18.9909 6.78308 18.5709 8.04419 18.4509 8.35181C19.2154 9.21313 19.681 10.3044 19.681 11.6578C19.681 16.3801 16.8764 17.4259 14.2063 17.7335C14.6407 18.1174 15.0164 18.8556 15.0164 20.0098C15.0164 21.6548 15.0008 22.9774 15.0008 23.3933C15.0008 23.7156 15.2263 24.0995 15.8264 23.9764C18.2083 23.1516 20.278 21.5818 21.7443 19.4879C23.2105 17.394 23.9994 14.8815 24 12.3038C24 5.50598 18.6297 0 11.9994 0L12.0006 0Z" fill="#2D2E32" fillRule="evenodd"/>
                            </svg>
                        </a>
                        <a className="item-right__links-el item-link">
                            <span className="item-link__text">На сайт</span>
                            <svg className="item-link__icon" fill="none" height="20" viewBox="0 0 20 20" width="20">
                                <path d="M12 1L19 1L19 8M19 12.7368L19 17.5C19 18.3285 18.3285 19 17.5 19L2.5 19C1.67157 19 1 18.3285 1 17.5L1 2.5C1 1.67163 1.67157 1 2.5 1L7 1M10.8999 9.09998L18.5499 1.44995" stroke="#2D2E32" strokeWidth="2" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="portfolio__item-left item-left">
                    <img alt="lastify" className="item-left__image" src={pero}/>
                </div>
            </div>
            <div data-aos="flip-right" className="portfolio__item">
                <div className="portfolio__item-left item-left">
                    <img alt="lastify" className="item-left__image" src={k2fintech}/>
                </div>
                <div className="portfolio__item-right item-right">
                    <h3 className="item-right__title">k2fintech 💰</h3>
                    <p className="item-right__text">Сайт-лендинг K2Fintech позволяет пользователю просмотреть основную информацию о компании, о её сотрудниках, а также о её услугах.</p>
                    <div className="item-right__stack">
                        <span className="item-right__stack-tech">JavaScript</span>
                        <span className="item-right__stack-tech">SCSS</span>
                    </div>
                    <div className="item-right__links">
                        <a className="item-right__links-el item-link" href="https://github.com/Mid1i/Lastify">
                            <span className="item-link__text">Код</span>
                            <svg className="item-link__icon item-link__icon--fill" fill="none" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M12.0006 0C5.37027 0 0 5.50598 0 12.3038C-0.00143433 14.8866 0.790344 17.4043 2.26309 19.4996C3.73581 21.5951 5.8147 23.1619 8.2048 23.9777C8.80484 24.0847 9.03046 23.7156 9.03046 23.3921C9.03046 23.1005 9.01486 22.1321 9.01486 21.1011C6.00031 21.6708 5.22028 20.348 4.98026 19.6554C4.84464 19.301 4.26022 18.2097 3.75018 17.9169C3.33017 17.6868 2.73013 17.1171 3.73459 17.1023C4.68024 17.0863 5.35468 17.9944 5.58029 18.3634C6.66034 20.2238 8.38483 19.7009 9.07486 19.3785C9.18045 18.5787 9.49487 18.0411 9.84048 17.7335C7.17035 17.4259 4.38022 16.3641 4.38022 11.6578C4.38022 10.3192 4.84464 9.21313 5.61029 8.35181C5.49026 8.04419 5.07025 6.78308 5.73029 5.09131C5.73029 5.09131 6.73474 4.7677 9.03046 6.3512C10.0074 6.07361 11.0168 5.9342 12.0306 5.93665C13.0507 5.93665 14.0707 6.07434 15.0308 6.3512C17.3265 4.75171 18.3309 5.09131 18.3309 5.09131C18.9909 6.78308 18.5709 8.04419 18.4509 8.35181C19.2154 9.21313 19.681 10.3044 19.681 11.6578C19.681 16.3801 16.8764 17.4259 14.2063 17.7335C14.6407 18.1174 15.0164 18.8556 15.0164 20.0098C15.0164 21.6548 15.0008 22.9774 15.0008 23.3933C15.0008 23.7156 15.2263 24.0995 15.8264 23.9764C18.2083 23.1516 20.278 21.5818 21.7443 19.4879C23.2105 17.394 23.9994 14.8815 24 12.3038C24 5.50598 18.6297 0 11.9994 0L12.0006 0Z" fill="#2D2E32" fillRule="evenodd"/>
                            </svg>
                        </a>
                        <a className="item-right__links-el item-link">
                            <span className="item-link__text">На сайт</span>
                            <svg className="item-link__icon" fill="none" height="20" viewBox="0 0 20 20" width="20">
                                <path d="M12 1L19 1L19 8M19 12.7368L19 17.5C19 18.3285 18.3285 19 17.5 19L2.5 19C1.67157 19 1 18.3285 1 17.5L1 2.5C1 1.67163 1.67157 1 2.5 1L7 1M10.8999 9.09998L18.5499 1.44995" stroke="#2D2E32" strokeWidth="2" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}