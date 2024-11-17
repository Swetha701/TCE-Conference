// import React from "react";
// import { useRouter } from "next/router";
// import { motion } from "framer-motion";

// interface FeeEntry {
//   category: string;
//   fee: string;
// }

// const feeData: FeeEntry[] = [
//   { category: "Research Scholar/Academicians/Student", fee: "Rs. 9000 /-" },
//   { category: "Industry and Others", fee: "Rs. 12000 /-" },
//   { category: "Presentation Only", fee: "Rs. 3000 /-" },
//   { category: "Conference Kit", fee: "Rs. 2000 /-" },
//   { category: "One Day Excursion", fee: "NIL" },
// ];

// const RegistrationFeesTable: React.FC = () => {
//   const router = useRouter();

//   const handleNavigate = () => {
//     router.push("/PaymentPage"); // Update with the correct route to PaymentPage
//   };

//   return (
//     <div className="sm:p-6 md:p-8 rounded-lg">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-bold text-gray-800">
//           Participation and Delegate Fees
//         </h2>
        
//         {/* <button
//               onClick={handleNavigate}
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
//             >
//               Go to Payment
//         </button> */}

//       </div>
//       <button
//           // onClick={handleNavigate}
//           className="bg-primary-accent text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 border"
//         >
//           Go to Payment
//         </button>
//       <div className="overflow-hidden rounded-lg">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white"
//         >
//           <div className="grid grid-cols-2 bg-gray-200 p-4 font-bold">
//             <div>Categories</div>
//             <div>Fees (INR)</div>
//           </div>
//           {feeData.map((entry, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className={`grid grid-cols-2 p-4 ${
//                 index % 2 === 0 ? "bg-gray-50" : "bg-white"
//               }`}
//             >
//               <div>{entry.category}</div>
//               <div>{entry.fee}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationFeesTable;
