import "./FilterCheckbox.css";

const FilterCheckbox = ({ title }) => {
  return (
    <>
      <input className="switch" id="switch" type="checkbox" />
      <label className="switch-label" htmlFor="switch">
        {title}
      </label>
    </>
  );
};

export default FilterCheckbox;
