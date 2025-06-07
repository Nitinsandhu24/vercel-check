import React from "react";

const App = () => {
  const [number, setnumber] = React.useState("");
  const [number2, setnumber2] = React.useState("");
  const [result, setResult] = React.useState(null);

  const handleadd = () => {
    setResult(parseInt(number) + parseInt(number2));
    setnumber("");
    setnumber2("");
  };
  const handlesub = () => {
    setResult(parseInt(number) - parseInt(number2));
    setnumber("");
    setnumber2("");
  };
  const handlediv = () => {
    setResult(parseInt(number) / parseInt(number2));
    setnumber("");
    setnumber2("");
  };
  const handlemul = () => {
    setResult(parseInt(number) * parseInt(number2));
    setnumber("");
    setnumber2("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-8">
        Simple Calculator
      </h1>

      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6">
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">First Number</label>
          <input
            type="number"
            placeholder="Enter first number"
            value={number}
            onChange={(e) => setnumber(e.target.value)}
          
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-black"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Second Number</label>
          <input
            type="number"
            placeholder="Enter second number"
            value={number2}
            onChange={(e) => setnumber2(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-black"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={handleadd}
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
          <button
            onClick={handlesub}
            className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Subtract
          </button>
          <button
            onClick={handlemul}
            className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Multiply
          </button>
          <button
            onClick={handlediv}
            className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Divide
          </button>
        </div>

        {result !== null && (
          <h2 className="text-center text-lg font-semibold text-gray-700">
            Result: {result}
          </h2>
        )}
      </div>
    </div>
  );
};

export default App;
