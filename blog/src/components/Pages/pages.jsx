import React, { useState, useEffect, Suspense } from "react";
import { useParams, Link } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import axios from "axios";

import parse from "html-react-parser";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";


function Loader() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  );
}
export default function Pages() {
  const { id } = useParams();
  const [pageContent, setPageContent] = useState();

  useEffect(() => {
    const getData = async () => {
      // console.log("get data here");
      try {
        const response = await axios.get(`/pages/single/${id}`);

        // console.log("response is", response);

        if (response.data.success) setPageContent({ ...response.data.pages });
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);

  console.log("Responsed Page Content are:", pageContent);
  console.log("--------------------------------------------");
  // console.log("Responsed Page List are:", pageList);

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Link to="/">Back to home</Link>
        <h1>{pageContent?.title}</h1>
        <h4>{pageContent?.subTitle}</h4>
        <CssBaseline />

        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          {pageContent?.body ? parse(pageContent?.body) : ""}
        </Box>
      </div>
    </Suspense>
  );
}
