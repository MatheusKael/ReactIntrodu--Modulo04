import React, { Component } from "react";

// Cada parte do corpo da aplicação terá que ser divido. 

function PostHeader({ author, date }) {
  return (
    <div className="postHeader">

      <div className="details">
        <span> {author.name}</span>
        <span>{date}</span>
      </div>

    </div>
  );

}

function PostComment({ comments }) {
  return (
    <div className="postComments">
      <div className="linha"></div>
      {comments.map(comment => (
        <div key={comment.key} className="comment">

          <p>
            <span>{comment.author.name}</span>

            {comment.content}
          </p>
        </div>
      ))}

    </div>
  );

}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <div className="postConteudo">{content}</div>
      <PostComment comments={comments} />


    </div>
  );
}


export default PostItem; 