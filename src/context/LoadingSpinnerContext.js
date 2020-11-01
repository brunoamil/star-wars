// import React, { createContext, useState } from 'react';

// import LoadingSpinner from '../../components/LoadingSpinner';

// export const LoadingContext = createContext({
//   loading: false,
//   exibeLoading: () => { },
//   escondeLoading: () => { }
// });

// export const LoadingProvider = ({ children }) => {

//   const [loading, setLoading] = useState(false);

//   const exibeLoading = () => {
//     setLoading(true);
//   }
//   const escondeLoading = () => {
//     setLoading(false);
//   }

//   return (
//     <LoadingContext.Provider value={{ exibeLoading, escondeLoading }}>
//       {children}
//     </LoadingContext.Provider>
//   )
// }

