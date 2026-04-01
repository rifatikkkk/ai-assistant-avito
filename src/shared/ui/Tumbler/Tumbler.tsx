import "./Tumbler.style.css";

export const Tumbler = () => {
  return (
    <label className="tumbler">
      <input type="checkbox" />
      <span className="tumbler__slider"></span>
    </label>
  );
};
