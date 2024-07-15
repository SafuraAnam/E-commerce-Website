import React, { createContext, useState, useContext } from "react";

const ShareContext = createContext();

export const ShareProvider = ({ children }) => {
  const [sharedProduct, setSharedProduct] = useState(null);
  const [recipientUser, setRecipientUser] = useState(null);

  return (
    <ShareContext.Provider
      value={{
        sharedProduct,
        setSharedProduct,
        recipientUser,
        setRecipientUser,
      }}
    >
      {children}
    </ShareContext.Provider>
  );
};

export const useShare = () => useContext(ShareContext);
