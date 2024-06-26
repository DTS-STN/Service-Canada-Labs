import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import Select, { components } from "react-select";
import { useState } from "react";

export function MultiSelectField(props) {
  const { t } = useTranslation("multiSelect");

  const removeItem = (e) => {
    let filteredArray = props.selectedOptions.filter((obj) => {
      return obj.value !== e.currentTarget.id;
    });
    props.onChange(filteredArray);
  };

  const Option = (props) => {
    return (
      <components.Option {...props}>
        <div className="flex">
          <input
            className="flex-none"
            aria-labelledby="optionLabel"
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label className="flex-auto pl-3" id="optionLabel">
            {props.label}
          </label>
        </div>
      </components.Option>
    );
  };

  const selectedOptionsPills = props.options
    .filter((option) => {
      const selectedOptionsIds = new Set();
      props.selectedOptions.forEach((o) => selectedOptionsIds.add(o.id));
      return selectedOptionsIds.has(option.id);
    })
    .map((option) => {
      return (
        <div
          key={option.value}
          className="flex bg-custom-gray-lighter rounded-[16px] my-1 px-3 py-1 text-sm font-body font-semibold"
        >
          <span className="self-center">{option.label}</span>
          <div className="flex pl-2">
            <button
              aria-label={`${t("ariaPillsRemove")}${option.label}`}
              className="self-center"
              id={option.value}
              onClick={removeItem}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </button>
          </div>
        </div>
      );
    });

  return (
    <div
      className={`block leading-tight${
        props.className ? " " + props.className : " mb-10px"
      }`}
    >
      <label
        id="multiSelectLabel"
        className={`select-field-label block leading-tight text-sm lg:text-p font-body mb-2 ${
          props.boldLabel ? "font-semibold" : ""
        }`}
      >
        {props.label}
      </label>
      <Select
        aria-labelledby="multiSelectLabel"
        placeholder={props.placeholder}
        // ariaLiveMessages={{ onFocus }}
        controlShouldRenderValue={false}
        isMulti
        isClearable
        escapeClearsValue
        backspaceRemovesValue
        isSearchable={false}
        // noOptionsMessage={() => "no options friendo"}
        options={props.options}
        onChange={props.onChange}
        components={{ Option }}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        value={props.selectedOptions}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderWidth: "2px",
            borderColor: "black",
            borderRadius: "3px",
            boxShadow: state.isFocused ? "0 0 0 2px #2684FF" : "",
          }),
          dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            color: "black",
          }),
          indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
            display: "none",
          }),
          clearIndicator: (baseStyles) => ({
            ...baseStyles,
            display: "none",
            color: "black",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "black",
            fontSize: "20px",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            marginTop: "0px",
            borderWidth: "1px",
            borderColor: "black",
            borderRadius: "3px",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            color: "black",
            fontWeight: "600",
            fontSize: "20px",
            backgroundColor: state.isFocused ? "#b2d4ff" : "white",
          }),
          multiValueLabel: (baseStyles) => ({
            ...baseStyles,
            fontSize: "20px",
            fontWeight: "500",
          }),
          multiValueRemove: (baseStyles) => ({
            ...baseStyles,
            color: "black",
            fontSize: "20px",
            fontWeight: "500",
          }),
        }}
      />
      <div className="mt-1 flex flex-col items-start">
        {selectedOptionsPills}
      </div>
    </div>
  );
}

MultiSelectField.defaultProps = {
  value: "",
};

MultiSelectField.propTypes = {
  /**
   * additional css for the component
   */
  className: PropTypes.string,

  /**
   * the id of the text field
   */
  id: PropTypes.string.isRequired,

  /**
   * the name of the text field
   */
  name: PropTypes.string.isRequired,

  /**
   * the label of the text field
   */
  label: PropTypes.string.isRequired,

  /**
   * whether ot not the field is required
   */
  required: PropTypes.bool,

  /**
   * value of the text field
   */
  value: PropTypes.string.isRequired,

  /**
   * call back for when the value of the text field changes
   */
  onChange: PropTypes.func,

  /**
   * message to display if there is an error
   */
  error: PropTypes.string,

  /**
   * Other option for dropdown
   */
  other: PropTypes.bool,

  /**
   * if label should be bold
   */
  boldLabel: PropTypes.bool,

  /**
   * boolean flag to specify that this input should be uncontrolled by react
   */
  uncontrolled: PropTypes.bool,

  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),

  /**
   * unit test selector
   */
  dataTestId: PropTypes.string,

  /**
   * cypress tests selector
   */
  dataCy: PropTypes.string,

  /**
   * if true, skip sorting the options
   */
  ignoreSort: PropTypes.bool,
};
