import React from "react";

const Input = ({ name, type, label, value, onChange, placeholder }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        className="form-control"
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
