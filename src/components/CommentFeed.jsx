import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { Box, Typography, Stack, CardMedia } from "@mui/material";
import { demoProfilePicture } from "../utils/constants";
const CommentFeed = ({ id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchData(`commentThreads?part=snippet&videoId=${id}`).then((data) =>
      data.items ? setComments(data.items) : "No Comments"
    );
  }, [id]);
  return (
    <div style={{ width: "100%" }}>
      {comments.length === 0 ? (
        <Box
          sx={{
            backgroundColor: "black",
            height: "87vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            textAlign={"center"}
            color={"white"}
            fontSize={"2.5rem"}
            marginTop={10}
          >
            No Comments
          </Typography>
        </Box>
      ) : (
        <Box margin={5} sx={{ borderBottom: "1px solid white" }}>
          <Typography
            variant="h6"
            textAlign={"center"}
            color={"white"}
            fontSize={"2.5rem"}
            marginTop={8}
          >
            Comments
          </Typography>
        </Box>
      )}
      {console.log(comments)}
      {comments.map((item) => {
        return (
          <Box px={5} py={2} mx={5} sx={{ margin: { xs: "1", sm: "1" } }}>
            <Stack direction={"row"} sx={{ alignItems: "center" }}>
              <Box paddingRight={1}>
                <CardMedia
                  image={
                    item?.snippet?.topLevelComment?.snippet
                      ?.authorProfileImageUrl || demoProfilePicture
                  }
                  alt={"Pic"}
                  sx={{
                    borderRadius: "50%",
                    height: "40px",
                    width: "40px",
                    border: "1px solid #e3e3e3",
                  }}
                />
              </Box>
              <Typography variant="subtitle2" fontSize={14} color={"#fff"}>
                {`@${item?.snippet?.topLevelComment?.snippet?.authorDisplayName}`}
              </Typography>
            </Stack>
            <Typography
              mt={2}
              variant="subtitle1"
              color={"#fff"}
              fontSize={12}
              textAlign={"start"}
            >
              {item?.snippet?.topLevelComment?.snippet?.textDisplay}
            </Typography>
          </Box>
        );
      })}
    </div>
  );
};
export default CommentFeed;
