interface Props {
  label: string;
  options: Array<{ name: string; value: number }>;
  value: number;
  onChange: (value: number) => void;
}

const Select = ({ label, options, value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <form>
      <ol>
        <li>
          <label htmlFor="select">{label}</label>

          <select
            id="select"
            className="w-36 ms-2 rounded-l-sm px-2 py-1 text-shadow-runescape focus:outline-none border-2 border-grey-50 bg-primary-300"
            value={value}
            onChange={handleChange}
          >
            {options.map(({ name: optionName, value: optionValue }) => (
              <option
                key={optionValue}
                value={optionValue}
              >
                {optionName}
              </option>
            ))}
          </select>
        </li>
      </ol>
    </form>
  );
};

export default Select;
