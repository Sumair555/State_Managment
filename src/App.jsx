// export default function App() {
//   const totalQuestions = 40;
//   const questionStatus = [
//     "attended", "attended", "skipped", "skipped", "default",
//     "default", "default", "default", "skipped", "current",
//     ...Array(30).fill("default"),
//   ];

//   const statusColors = {
//     attended: "bg-green-500 text-white",
//     skipped: "bg-yellow-400 text-white",
//     current: "bg-gray-500 text-white",
//     default: "bg-gray-200 text-gray-700",
//   };

//   return (
//     <div className="flex h-screen font-sans">
//       {/* LEFT SIDE */}
// <div className="w-3/4 bg-white p-4 border-r border-gray-300 flex flex-col h-full gap-2">
  
//   {/* 1. Header (1 part) */}
//   <div className="flex bg-gray-100 px-6 py-4 rounded flex justify-between items-center">
//     <h1 className="text-xl font-semibold text-gray-800">SUMAIR(Quiz) - Python</h1>
//     <div className="text-sm text-gray-700 font-medium flex items-center gap-2">
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//       </svg>
//       50m : 42s Left
//     </div>
//   </div>

//   {/* 2. Question Section (4 parts) */}
//   <div className="flex-[4] overflow-auto p-2">
//     <h2 className="text-lg font-semibold text-gray-800 mb-10">10. Conditional and Control Flow</h2>
//     <pre className="bg-gray-100 text-sm p-10 rounded font-mono text-gray-800 overflow-auto whitespace-pre-wrap">
// {`def pyfun(r):

//   for x in range(r):

//     print(' '*(r-x-1)+'**'*(2*x+1))


// pyfun(3)

// `}
//     </pre>
//   </div>

//   {/* 3. Answer Section with Options (3 parts) */}
//   <div className="flex-[3] p-2 flex flex-col justify-center gap-4">
//     <p className="text-gray-800 font-medium">Find the output</p>
//     <div className="grid grid-cols-2 gap-4">
//       <input type="text" value="12342" className="border border-green-500 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-green-500" readOnly />
//       <input type="text" value="12342" className="border rounded px-4 py-2 bg-gray-100 text-gray-700" readOnly />
//       <input type="text" value="12342" className="border rounded px-4 py-2 bg-gray-100 text-gray-700" readOnly />
//       <input type="text" value="12342" className="border rounded px-4 py-2 bg-gray-100 text-gray-700" readOnly />
//     </div>
//   </div>

//   {/* 4. Navigation Buttons (1 part) */}
//   <div className="flex-[1] flex justify-between items-center px-2">
//     <button className="px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50 transition">
//       Previous question
//     </button>
//     <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
//       Next question
//     </button>
//   </div>

// </div>
      

//       {/* RIGHT SIDE */}
//       <div className="w-1/4 bg-white p-12">
//         <h3 className="text-md font-semibold text-gray-800 mb-4 pt-20">Questions(30)</h3>

//         <div className="grid grid-cols-5 gap-1 text-center text-sm mb-16">
//           {Array.from({ length: totalQuestions }, (_, i) => {
//             const status = questionStatus[i] || "default";
//             return (
//               <div
//                 key={i}
//                 className={`w-10 h-10 rounded flex items-center justify-center font-medium ${statusColors[status]}`}
//               >
//                 {i + 1}
//               </div>
//             );
//           })}
//         </div>

//         {/* Legend */}
//         <div className="text-sm space-y-2">
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4 bg-green-500 rounded" />
//             <span className="text-gray-700">Attended</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4 bg-yellow-400 rounded" />
//             <span className="text-gray-700">Skipped</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4 bg-gray-200 rounded" />
//             <span className="text-gray-700">Yet to attend</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  function handleIncrement() {
    setCount(count + 1);
    setHistory([...history, "Increment"]);
  }

  function handleDecrement() {
    setCount(count - 1);
    setHistory([...history, "Decrement"]);
  }

  function handleReset() {
    setCount(0);
    setHistory([...history, "Reset"]);
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold bg-red-300">Counter : {count}</h1>
        <div className="pt-5">
          <button className="p-2 border-2 bg-green-200" onClick={handleIncrement}>Increment</button>
          <button className="p-2 border-2 bg-green-200" onClick={handleDecrement}>Decrement</button>
          <button className="p-2 border-2 bg-green-200" onClick={handleReset}>Reset</button>
        </div>
        <div className="pt-5">
          <h2 className="text-lg font-semibold">Action History:</h2>
          <ul className="list-disc list-inside">
            {history.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
