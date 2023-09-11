"use client";

import { useEffect, useState } from "react";

export default function Comment({ _id }) {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/list?_id=${_id}`)
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        // console.log(data);
        setCommentList(data);
      });
  }, []);

  return (
    <div>
      <hr />
      <div>댓글목록 보줄 부분</div>
      {commentList.length > 0
        ? commentList.map((el, idx) => {
            return <div key={idx}>{el.content}</div>;
          })
        : "댓글없음"}

      <input
        type="text"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          //   console.log(comment);
          fetch("/api/comment/new", { method: "POST", body: JSON.stringify({ comment: comment, _id: _id }) });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
