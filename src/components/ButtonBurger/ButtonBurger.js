import "./ButtonBurger.css";

const ButtonBurger = () => {
  const handleClickOpen = () => {
    setIsBurgerOpen(true);
  };

  return (
    <button
      className="burger-button"
      onClick={handleClickOpen}
      type="button"
    ></button>
  );
};

export default ButtonBurger;
