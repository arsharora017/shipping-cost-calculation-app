const ColorBox = ({ color, onChange }) => {
  // Handle change event from the color input
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={handleChange}
        className="border border-gray-300 rounded p-1 w-[50%] h-12"
      />
    </div>
  );
};

export default ColorBox;
