import "./About.style.scss";

import aboutImage from "../../assets/images/about-me.jpeg";
import frontEndCircle from "../../assets/images/front-end-icon.png";
import frontEndIcon from "../../assets/images/front-end-man-icon.png";


export default function About() {
    return (
        <div className="wrapper__about" id="about">
            <div className="wrapper__about-container about">
                <div data-aos="fade-up" className="about__left">
                    <img alt="About image" className="about__left-image" src={aboutImage}/>
                    <div className="about__left-wrapper about-wrapper">
                        <img alt="circle" className="about-wrapper__circle" src={frontEndCircle}/>
                        <img alt="icon" className="about-wrapper__icon" src={frontEndIcon}/>
                    </div>
                </div>
                <div data-aos="fade-down" className="about__right">
                    <h3 className="about__right-subtitle">Обо мне</h3>
                    <h2 className="about__right-title">Front-End Разработчик из Нижнего Новгорода, Россия 📍</h2>
                    <p className="about__right-text">Привет, меня зовут Миша и я Front-End разработчик. Я занимаюсь созданием качественных и доступных Web-приложений для моих пользователей.</p>
                    <p className="about__right-text">Мой основной стек в настоящее время - React в сочетании с SCSS.</p>
                </div>
            </div>
        </div>
    );
}