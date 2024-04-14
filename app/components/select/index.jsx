
const CommonSelect = ({defaultText, options, onChange }) => {
  return (
    <select
      id="countries"
      className="bg-[#f0f5f7] border border-[#c7ccce] text-gray-900 text-sm rounded-lg focus:none block w-full p-2.5 dark:placeholder-gray-400 dark:focus:none"
      onChange={onChange}
    >
      <option selected>{defaultText}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CommonSelect;
