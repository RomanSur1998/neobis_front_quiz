import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/slices/ArticlesSlice";

const MyPagination = ({ lengthPagination }) => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.articles);

  const handleChangePage = (page) => {
    dispatch(setPage(page));
  };

  const num = Math.ceil(lengthPagination / 2);

  return (
    <>
      <Stack spacing={2} style={{ margin: "40px auto" }}>
        <Pagination
          count={num ? num : 1}
          page={page}
          onChange={(_, num) => {
            handleChangePage(num);
          }}
          variant="outlined"
          shape="rounded"
          style={{ margin: "0 auto", display: "block" }}
        />
      </Stack>
    </>
  );
};

export default MyPagination;
