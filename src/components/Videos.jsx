import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...!";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap={"wrap"}
      display={"flex"}
      gap={2}
      justifyContent={"center"}
      alignItems={"center"}
      mx={"auto"}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};
export default Videos;
