import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function DataGridComponent({
  columns,
  rows,
  isFetching,
  handleRowClick,
}) {
  return (
    <Box
      sx={{
        height: 475,
        width: "100%",
        "& .MuiDataGrid-row": {
          cursor: "pointer",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        loading={isFetching}
        onRowClick={handleRowClick}
      />
    </Box>
  );
}
