import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="content">
      <div className="notfound">
        <div className="notfound__container">
          <h1 className="notfound__title">404</h1>
          <p className="notfound__subtitle">Страница не найдена</p>
          <button
            className="notfound__button"
            onClick={() => navigate(-1)}
            type="button"
          >
            Назад
          </button>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;