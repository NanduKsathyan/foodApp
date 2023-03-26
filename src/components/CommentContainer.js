import { useState } from "react";
import { COMMENTS } from "../util/constants";

const Comment = ({ comments }) => {
  const { name, message } = comments;
  return (
    <>
      <div className="flex p-2">
        <h1>{name}</h1>
        <p> : {message}</p>
      </div>
    </>
  );
};

const CommentContainer = () => {
  return (
    <div>
      Comments
      <CommentList comments={COMMENTS} />
    </div>
  );
};

const CommentList = ({ comments }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {comments?.map((comments) => {
        return (
          <>
            <Comment comments={comments} />
            {comments?.replies?.length > 0 && (
              <>
                {/* <span onClick={() => setIsVisible(!isVisible)}>
                  {isVisible ? "Hide" : "Show"}
                </span> */}
                {isVisible && (
                  <div className="ml-5 border border-l-black">
                    <CommentList comments={comments?.replies} />
                  </div>
                )}
              </>
            )}
          </>
        );
      })}
    </>
  );
};

export default CommentContainer;
