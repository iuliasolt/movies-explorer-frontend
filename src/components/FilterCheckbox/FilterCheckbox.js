import "./FilterCheckbox.css";

const FilterCheckbox = ({ title, onFilter, isActive }) => {
  return (
    <>
      <input
        className="switch"
        id="switch"
        type="checkbox"
        onChange={onFilter}
        checked={isActive}
      />
      <label className="switch-label" htmlFor="switch">
        {title}
      </label>
    </>
  );
};

export default FilterCheckbox;
