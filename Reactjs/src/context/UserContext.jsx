

import React, { createContext } from "react";
 export  const DataContext = createContext()

const UserContext = ({ children }) => {
      const userData={
        username:"Tohid Mulla",
        age:21,
        city:"Miraj"
      }
  return (
    <div>
      <DataContext.Provider value={userData}>
        {/* //created the context and just wrappedn the children inside it now the value username is available for all the components inside the app component// */}
        {children}
      </DataContext.Provider>
       

    </div>
  );
};

export default UserContext;
