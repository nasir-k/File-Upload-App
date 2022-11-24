import { createContext } from "react";

const initialContext = {
  files: [],
  addFile: (file) => {},
};

const FileContext = createContext(initialContext);

export default FileContext;
