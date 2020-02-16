import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import Faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today ar 4:45PM"
        comment="It was a nice post !!"
        avatar={Faker.image.avatar()}
      />
      <ApprovalCard />
      <CommentDetail
        author="Alex"
        timeAgo="Today ar 2:00PM"
        comment="I loved your blog."
        avatar={Faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday ar 0:45PM"
        comment="Wow this was eye catching :)"
        avatar={Faker.image.avatar()}
      />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
