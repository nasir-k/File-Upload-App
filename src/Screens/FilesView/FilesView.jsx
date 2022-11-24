import React, { useContext, useState } from "react";

import { Box, Button, Dialog, DialogActions } from "@mui/material";
import DataGridComponent from "../../Components/DataGrid/DataGrid";
import FileContext from "../../context/FileContext/FileContext";
import { Link } from "react-router-dom";

const FilesView = () => {
  const [preview, setPreview] = useState(null);

  const handleViewClick = (fileUrl) => {
    let fileType = fileUrl.includes("image")
      ? "image"
      : fileUrl.includes("video")
      ? "video"
      : "Not Supported File Type";

    setPreview({ fileUrl, fileType });
  };
  const columns = [
    { field: "fileName", headerName: "file name", width: 400 },
    {
      field: "fileSize",
      headerName: "file size",
      width: 400,
    },
    {
      field: "uploadDate",
      headerName: "upload date",
      width: 400,
      editable: true,
    },
    {
      field: "view",
      headerName: "view",
      width: 400,
      renderCell: (params) => {
        console.log(params);
        return (
          <Button onClick={() => handleViewClick(params.value)}>View</Button>
        );
      },
    },
  ];

  const filesContext = useContext(FileContext);

  return (
    <Box sx={{ padding: "5rem 1rem 1rem" }}>
      <DataGridComponent columns={columns} rows={filesContext.files} />
      <Dialog open={!!preview?.fileUrl}>
        {preview?.fileType === "image" ? (
          <img src={preview?.fileUrl} alt="Selected" />
        ) : (
          <video controls src={preview?.fileUrl}></video>
        )}
        <DialogActions>
          <Button onClick={() => setPreview(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FilesView;
