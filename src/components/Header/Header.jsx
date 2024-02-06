import {useReducer} from "react";
import classNames from "classnames";

import "./Header.style.scss";


export default function Header({theme, changeTheme}) {
    const [openMenu, setOpenMenu] = useReducer(prev => !prev, false);

    const onChangeTheme = () => {
        if (theme === 'light') {
            changeTheme('dark');
        } else {
            changeTheme('light');
        }
    }


    return (
        <header className="wrapper__header header">
            <div className="header__left">
                <h3 className="header__left-title">Midi</h3>
                <span className="header__left-theme theme" onClick={onChangeTheme}>
                    <svg className={classNames("theme__sun", theme === 'dark' && 'theme__sun--dark')} fill="none" height="14" viewBox="0 0 14 14" width="14">
                        <path d="M2.98669 9.79999L2.05334 11.97L4.22333 11.0367C3.73334 10.6867 3.31335 10.2667 2.98669 9.79999ZM11.0133 4.20001L11.9467 2.03L9.79999 2.96332C10.2667 3.31332 10.6866 3.73334 11.0133 4.20001ZM2.19336 6.13666L0 7L2.19336 7.86334C2.12335 7.58334 2.09998 7.30334 2.09998 7C2.09998 6.69666 2.12335 6.41666 2.19336 6.13666ZM11.8066 7.86334L14 7L11.8066 6.13666C11.8533 6.41666 11.9 6.72 11.9 7C11.9 7.30334 11.8766 7.58334 11.8066 7.86334ZM4.20001 2.98666L2.03003 2.05334L2.96332 4.22333C3.31335 3.73334 3.73334 3.31332 4.20001 2.98666ZM9.79999 11.0133L11.97 11.9467L11.0367 9.77667C10.6866 10.2667 10.2667 10.6867 9.79999 11.0133ZM7.86334 2.19333L7 0L6.13666 2.19333C6.41669 2.14667 6.71997 2.10001 7 2.10001C7.28003 2.10001 7.58331 2.12332 7.86334 2.19333ZM6.13666 11.8067L7 14L7.86334 11.8067C7.58331 11.8767 7.30334 11.9 7 11.9C6.69666 11.9 6.41669 11.8767 6.13666 11.8067Z" fill="#FFCE31"/>
                        <path d="M11.4333 6.99997C11.4333 9.44846 9.44849 11.4333 7.00006 11.4333C4.55157 11.4333 2.56671 9.44846 2.56671 6.99997C2.56671 4.55151 4.55157 2.56665 7.00006 2.56665C9.44849 2.56665 11.4333 4.55151 11.4333 6.99997Z" fill="#FFCE31" fillRule="evenodd"/>
                    </svg>
                    <svg className={classNames("theme__moon", theme === 'light' && 'theme__moon--light')} fill="none" height="14" viewBox="0 0 14 14" width="14">
                        <path d="M0.142334 9.44583C0.220215 9.35165 0.324463 9.28107 0.442749 9.24255C0.561157 9.20404 0.688477 9.19922 0.80957 9.22864C1.93945 9.50616 3.12842 9.46387 4.23413 9.10678C5.33972 8.74973 6.31519 8.09302 7.04358 7.21533C7.77209 6.33765 8.22266 5.27615 8.34143 4.15799C8.46021 3.03979 8.24207 1.91232 7.71326 0.910553C7.65662 0.803253 7.6333 0.682495 7.646 0.562744C7.65869 0.442993 7.70691 0.329315 7.78491 0.235291C7.86292 0.141266 7.96729 0.0708923 8.08569 0.0325928C8.2041 -0.0057373 8.33142 -0.0103455 8.45239 0.0192566C9.64587 0.312286 10.744 0.889099 11.6465 1.69699C12.549 2.50485 13.2269 3.51794 13.6183 4.64365C14.0096 5.76932 14.1019 6.97162 13.8867 8.14056C13.6714 9.30951 13.1556 10.4077 12.3864 11.3349C11.6171 12.262 10.6189 12.9883 9.48315 13.4475C8.34741 13.9066 7.11035 14.084 5.88513 13.9632C4.65991 13.8424 3.48572 13.4274 2.46997 12.7561C1.4541 12.0849 0.62915 11.1788 0.0704346 10.1208C0.013916 10.0135 -0.00939941 9.89279 0.00341797 9.7731C0.0161133 9.65341 0.0644531 9.53979 0.142334 9.44583Z" fill="#F8F8F8" fillRule="evenodd"/>
                    </svg>
                </span>
            </div>
            <div className={classNames("header__burger", openMenu && "active")} onClick={setOpenMenu}>
                <span className="header__burger-span"></span>
            </div>
            <ul className={classNames("header__right", openMenu && "active")}>
                <li className="header__right-el"><a href="#home">Главная</a></li>
                <li className="header__right-el"><a href="#about">Обо мне</a></li>
                <li className="header__right-el"><a href="#portfolio">Проекты</a></li>
                <li className="header__right-el"><a href="#contacts">Контакты</a></li>
            </ul>
        </header>
    );
}