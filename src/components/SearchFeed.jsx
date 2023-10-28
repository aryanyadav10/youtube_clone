import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { fetchData } from "../utils/fetchData";
import { useParams } from "react-router-dom";
import { Videos } from "./";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchData(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Videos videos={videos} />
    </Box>
  );
};
export default SearchFeed;
