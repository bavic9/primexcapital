// import { onAuthStateChanged } from 'firebase/auth';
// import React, { useEffect, useState } from 'react'
// import { Navigate, Outlet } from 'react-router-dom'
// import { auth } from '../firebase'

// const PrivateRoutes = () => {


//   const [authUser, setAuthUser] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setAuthUser(user);
//       } else {
//         setAuthUser(null);
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     authUser ? (<Outlet />) : (<Navigate to={"/login"} />)

//   )

// }

// export default PrivateRoutes