import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/slices/ArticlesSlice";

const MyPagination = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.articles);

  const handleChangePage = (page) => {
    dispatch(setPage(page));
  };
  console.log(page, "page");
  return (
    <>
      <Stack spacing={2} style={{ margin: "40px auto" }}>
        <Pagination
          count={10}
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
