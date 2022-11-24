import React, { useState } from "react";
import FileContext from "./FileContext";

const FileProvider = ({ children }) => {
  const [files, setFiles] = useState([]);

  const addFile = (file) => {
    setFiles((prevFiles) => [...prevFiles, file]);
  };

  const context = {
    files,
    addFile,
  };

  return (
    <FileContext.Provider value={context}>{children}</FileContext.Provider>
  );
};

export default FileProvider;
