import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import FileContext from "../../context/FileContext/FileContext";

import "./FileInput.css";

const FileInput = () => {
  const filesContext = useContext(FileContext);

  const onFileDrop = (e) => {
    console.log(e.target.files);
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      filesContext.addFile({
        id: Math.random() + file.name,
        file: file,
        imagePreviewUrl: reader.result,
        fileName: file.name,
        fileSize: file.size,
        uploadDate: new Date().toLocaleString(),
        view: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    console.log(filesContext.files);
  }, [filesContext.files]);

  return (
    <Box
      sx={{
        mb: 4,
        width: { xs: "100%", sm: "400px" },
        position: "absolute",
        top: "40%",
        left: "40%",
      }}
    >
      <div className="drop-file-input">
        <div className="drop-file-input__label">
          <p>
            Drag & Drop or <span>browse</span>
          </p>
          <p className="drop-file-input-size">
            Supports with a (PDF, CSV, Excel) format files.
          </p>
        </div>
        <input type="file" onChange={onFileDrop} />
      </div>
    </Box>
  );
};

export default FileInput;
