import { useState } from "react";
import { useDispatch } from "react-redux";
import ColorBox from "../components/ColorBox";

const destinationCountriesList = {
  Sweden: 7.35,
  China: 11.53,
  Brazil: 15.63,
  Australia: 50.09,
};

const AddBoxForm = () => {
  const [receiverName, setReceiverName] = useState("");
  const [boxWeight, setBoxWeight] = useState("");
  const [boxColor, setBoxColor] = useState("#FFFFFF");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const inputConatiners = "flex flex-col space-y-1 w-[300px] text-lg px-2";
  const inputWrapper = "border border-gray-300 rounded p-1 w-full p-1";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!receiverName || boxWeight <= 0) {
      setError(
        "Please fill all the fields and ensure weight is greater than 0"
      );
    }

    const shippingCost =
      boxWeight * destinationCountriesList[destinationCountry];

    // Create box object

    const newBox = {
      id: Date.now(),
      receiverName,
      boxWeight,
      destinationCountry,
      shippingCost,
      boxColor,
    };

    // Dispatch the addBox action
    dispatch({ type: "box/addBox", payload: newBox });

    // Reset form fields
    setReceiverName("");
    setBoxWeight(0);
    setBoxColor("#FFFFFF");
    setDestinationCountry("");
    setError(null);
  };
  //mt-8 flex flex-col space-y-4 items-center w-full
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-8">
        <div className="flex flex-col space-y-4 items-center w-full">
          <h2 className="text-2xl font-semibold mb-4 content-center">
            Add Box Form
          </h2>
        </div>
        <div className="flex justify-center w-full">
          <form onSubmit={handleSubmit} className="space-y-4 content-center">
            <div className={inputConatiners}>
              <label htmlFor="receiverName">Receiver Name</label>
              <input
                type="text"
                id="receiverName"
                value={receiverName}
                onChange={(e) => setReceiverName(e.target.value)}
                className={inputWrapper}
                required
              />
            </div>
            <div className={inputConatiners}>
              <label htmlFor="weight">Weight (in kg)</label>
              <input
                type="number"
                id="weight"
                value={boxWeight}
                onChange={(e) => setBoxWeight(e.target.value)}
                className={inputWrapper}
                placeholder="0"
                required
              />
            </div>
            <div className={inputConatiners}>
              <label htmlFor="boxColor">Box Color</label>
              <ColorBox
                color={boxColor}
                onChange={(color) => setBoxColor(color)}
              />
            </div>
            <div className={inputConatiners}>
              <label htmlFor="dCountry">Destination Country</label>
              <select
                id="dCountry"
                value={destinationCountry}
                onChange={(e) => setDestinationCountry(e.target.value)}
                className={inputWrapper}
              >
                <option value="">Select Country</option>
                {Object.keys(destinationCountriesList).map((country) => (
                  <option key={country} className={inputWrapper}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
              >
                Save
              </button>
            </div>
          </form>
          {error && <p className="text-lg text-red-600 mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default AddBoxForm;
