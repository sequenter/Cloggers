interface Props {
  label: string;
  options: Array<{ name: string; value: number }>;
  onChange: (value: number) => void;
}

const Select = ({ label, options, onChange }: Props) => {
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
            onChange={handleChange}
          >
            {options.map(({ name, value }, i) => (
              <option
                selected={i === 0}
                value={value}
              >
                {name}
              </option>
            ))}
          </select>
        </li>
      </ol>
    </form>
  );
};

export default Select;
