import "./ButtonBurger.css";

const ButtonBurger = ({ setIsBurgerOpen }) => {

  const handleClickBurger = () => {
    setIsBurgerOpen(true);
  };

  return (
    <button
      className="burger-button"
      onClick={handleClickBurger}
      type="button"
    />
  );
};

export default ButtonBurger;
