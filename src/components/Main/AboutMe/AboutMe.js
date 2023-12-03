import "./AboutMe.css";
import avatar from "../../../images/avatar.png";
import Portfolio from "../Portfolio/Portfolio";

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <article className="about-me__container">
        <h3 className="about-me__name">Юлия</h3>
        <p className="about-me__speciality">Фронтенд-разработчик</p>
        <p className="about-me__text">
          Я родилась и живу в Саратове, закончила факультет экономики СГУ. У
          меня есть муж и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начала кодить. С 2015 года работала в компании «СКБ Контур».
          После того, как прошла курс по веб-разработке, начала заниматься
          фриланс-заказами и ушла с постоянной работы.
        </p>
        <a
          className="about-me__link link"
          href="https://github.com/iuliasolt"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <img
          className="about-me__img"
          src={avatar}
          alt="Фотография специалиста"
        />
      </article>
      <Portfolio />
    </section>
  );
};

export default AboutMe;
