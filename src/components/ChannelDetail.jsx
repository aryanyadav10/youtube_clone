import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchData } from "../utils/fetchData";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(channelDetail, videos);
  useEffect(() => {
    fetchData(`channels?.part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchData(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <ChannelCard channelDetail={channelDetail} />
      </Box>
      <Box display={"flex"} mx={2}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};
export default ChannelDetail;
