import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  SearchBar,
  CommentFeed,
} from "./components";
const App = () => {
  const [id, setId] = useState({});
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail setId={setId} />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          <Route path="/video/comments" element={<CommentFeed id={id} />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
export default App;
