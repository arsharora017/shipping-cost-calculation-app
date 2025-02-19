import { useSelector } from "react-redux";
import ColorBox from "../components/ColorBox";

const TableView = () => {
  // Get the boxes from the Redux store
  const boxes = useSelector((state) => state.boxes.boxes);
  return (
    <div className="max-w-4xl mx-auto mt-8 flex flex-col space-y-4 items-center w-full">
      <h2 className="text-2xl font-semibold mb-4">Shipping Boxes List</h2>
      {boxes.length === 0 ? (
        <p className="text-gray-600 text-lg">
          No Boxes Available. Please add a box.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-lg">
                <th className="py-2 px-4 border-b">Receiver Name</th>
                <th className="py-2 px-4 border-b">Weight (in kg)</th>
                <th className="py-2 px-4 border-b">Box Color</th>
                <th className="py-2 px-4 border-b">Destination Country</th>
                <th className="py-2 px-4 border-b">Shipping Cost (INR)</th>
              </tr>
            </thead>
            <tbody>
              {boxes.map((box) => (
                <tr key={box.id} className="text-center ">
                  <td>{box.receiverName}</td>
                  <td>{box.boxWeight}</td>
                  <td className="py-2 px-4">
                    <div
                      className="w-full h-10 rounded"
                      style={{ backgroundColor: box.boxColor }}
                    ></div>
                  </td>
                  <td>{box.destinationCountry}</td>
                  <td>{box.shippingCost.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TableView;
