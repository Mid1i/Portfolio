import "./Contacts.style.scss";


export default function Contacts() {
    return (
        <div className="wrapper__contacts" id="contacts">
            <div data-aos="zoom-out" className="wrapper__contacts-container contacts">
                <h3 className="contacts__subtitle">Контакты</h3>
                <h2 className="contacts__title">Вот, как со мной можно связаться 👇</h2>
                <div className="contacts__links">
                    <a className="contacts__links-link contact-link" href="https://kwork.ru/user/m1d1">
                        <span className="contact-link__wrapper">
                            <svg className="contact-link__wrapper-icon" fill="none" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M7.53623 0H0V3.29858H2.31884V11.3744L7.53623 5.11848V0Z" fill="#147EFB"/>
                                <path d="M15.9999 0L2.31876 16.9479V24H7.88397V16.3791L9.73905 14.3318L17.3912 24H23.9999L13.3332 11.0332L22.4927 0H15.9999Z" fill="#147EFB"/>
                            </svg>
                        </span>
                        <span className="contact-link__right">
                            <span className="contact-link__right-title">Kwork</span>
                            <span className="contact-link__right-text">Mid1i</span>
                        </span>
                    </a>
                    <a className="contacts__links-link contact-link" href="https://t.me/Mid1i">
                        <span className="contact-link__wrapper">
                            <svg className="contact-link__wrapper-icon" fill="none" height="24" viewBox="0 0 26 24" width="26">
                                <path d="M1.7871 10.332C8.76774 6.94532 13.4215 4.71242 15.7484 3.63367C22.3998 0.553279 23.7802 0.0182828 24.6818 0.000157925C24.8801 -0.00338372 25.3215 0.0511988 25.6096 0.310572C25.849 0.52932 25.9163 0.825152 25.95 1.03286C25.9799 1.24036 26.0211 1.71327 25.9874 2.08243C25.6283 6.29907 24.0683 16.5315 23.2752 21.2544C22.9423 23.2527 22.2801 23.9227 21.6404 23.9881C20.2488 24.1306 19.1938 22.9648 17.8471 21.9819C15.7409 20.4431 14.5513 19.4856 12.505 17.9844C10.1407 16.2494 11.6745 15.2957 13.0212 13.7373C13.3729 13.3294 19.5006 7.12323 19.6165 6.56032C19.6315 6.4899 19.6465 6.2274 19.5043 6.08907C19.3659 5.95032 19.1601 5.99782 19.0105 6.03532C18.7973 6.08865 15.4341 8.56697 8.9099 13.4699C7.95595 14.2007 7.09179 14.5569 6.31367 14.5382C5.46073 14.5178 3.81471 13.9998 2.59141 13.5574C1.09503 13.0144 -0.0983409 12.7274 0.00640607 11.8053C0.0587795 11.3253 0.653593 10.834 1.7871 10.332Z" fill="#147EFB"/>
                            </svg>
                        </span>
                        <span className="contact-link__right">
                            <span className="contact-link__right-title">Telegram</span>
                            <span className="contact-link__right-text">Mid1i</span>
                        </span>
                    </a>
                </div>
                <a className="contacts__link contact-link contact-link--last" href="mailto:michac.tchernov@yandex.ru">
                    <span className="contact-link__wrapper">
                        <svg className="contact-link__wrapper-icon" fill="none" height="20" viewBox="0 0 26 20" width="26">
                            <path d="M1.75 3.75C1.75 3.08696 2.01339 2.45107 2.48223 1.98223C2.95107 1.51339 3.58696 1.25 4.25 1.25H21.75C22.413 1.25 23.0489 1.51339 23.5178 1.98223C23.9866 2.45107 24.25 3.08696 24.25 3.75M1.75 3.75V16.25C1.75 16.913 2.01339 17.5489 2.48223 18.0178C2.95107 18.4866 3.58696 18.75 4.25 18.75H21.75C22.413 18.75 23.0489 18.4866 23.5178 18.0178C23.9866 17.5489 24.25 16.913 24.25 16.25V3.75M1.75 3.75L13 11.25L24.25 3.75" stroke="#147EFB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span className="contact-link__right">
                        <span className="contact-link__right-title">Почта</span>
                        <span className="contact-link__right-text">michac.tchernov@yandex.ru</span>
                    </span>
                </a>
                <div className="contacts__link contact-link contact-link--last">
                    <span className="contact-link__wrapper">
                        <svg className="contact-link__wrapper-icon" fill="none" height="26" viewBox="0 0 27 26" width="27">
                            <path d="M11.75 19.5L9.25 18.25M9.25 18.25L1.75 22V5.75L9.25 2M9.25 18.25V2M9.25 2L16.75 5.75M16.75 5.75L24.25 2V11.375M16.75 5.75V12M23.25 22.25L25.5 24.5M16.75 19.5C16.75 20.4946 17.1451 21.4484 17.8483 22.1517C18.5516 22.8549 19.5054 23.25 20.5 23.25C21.4946 23.25 22.4484 22.8549 23.1517 22.1517C23.8549 21.4484 24.25 20.4946 24.25 19.5C24.25 18.5054 23.8549 17.5516 23.1517 16.8483C22.4484 16.1451 21.4946 15.75 20.5 15.75C19.5054 15.75 18.5516 16.1451 17.8483 16.8483C17.1451 17.5516 16.75 18.5054 16.75 19.5Z" stroke="#147EFB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span className="contact-link__right">
                        <span className="contact-link__right-title">Местоположение</span>
                        <span className="contact-link__right-text">Нижний Новгород, Россия</span>
                    </span>
                </div>
            </div>
        </div>
    );
}