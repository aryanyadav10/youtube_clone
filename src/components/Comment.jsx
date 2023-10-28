import { Link, useParams } from "react-router-dom";
const Comment = ({ setId }) => {
  const { id } = useParams();
  setId(id);
  return (
    <>
      <Link to={"/video/comments"}>
        <button className="btn" style={{ padding: "2.5px", fontSize: "15px" }}>
          Show Comments
        </button>
      </Link>
    </>
  );
};
export default Comment;
