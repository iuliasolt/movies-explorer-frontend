import "./AboutProject.css";
 
const AboutProject = () => {
    return (
    <section className="project">
        <h2 className="project__title">О проекте</h2>
        <div className="project__descriptions">
            <div className="description">
                <h3 className="description__title">
                    Дипломный проект включал 5 этапов
                </h3>
                <p className="description__subtitle">
                Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                </p>
            </div>
            <div className="description">
                <h3 className="description__title">
                На выполнение диплома ушло 5 недель
                </h3>
                <p className="description__subtitle">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                </p>
                </div>
        </div>

        <div className="project__progressline">
            <div className="progressline-item">
                <p className="progressline-item__title progressline-item__title_backend">1 неделя</p>
                <p className="progressline-item__subtitle">Back-end</p>
            </div>
            <div className="progressline-item">
                <p className="progressline-item__title">4 недели</p>
                <p className="progressline-item__subtitle">Front-end</p>
            </div>
        </div>
    </section>
    )
}

export default AboutProject;