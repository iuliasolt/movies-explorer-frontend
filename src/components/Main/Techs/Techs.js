import "./Techs.css";

const Techs = () => {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__content">
        <h3 className="techs__content-title">7 технологий</h3>
        <p className="techs__content-subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs-items">
            <li className="techs-items__item">HTML</li>
            <li className="techs-items__item">CSS</li>
            <li className="techs-items__item">JS</li>
            <li className="techs-items__item">React</li>
            <li className="techs-items__item">Git</li>
            <li className="techs-items__item">Express.js</li>
            <li className="techs-items__item">MongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
