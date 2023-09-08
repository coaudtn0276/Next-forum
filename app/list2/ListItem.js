"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  //   console.log(result[0]._id);
  return (
    <div>
      {result.map((el, idx) => {
        return (
          <div className="list-item" key={idx}>
            <Link prefetch={false} href={`/detail/${el._id}`}>
              <h4>{el.title}</h4>
            </Link>
            <Link href={`/edit/${el._id}`}>✏️</Link>
            <span
              onClick={(e) => {
                // quert string 이용
                fetch(`/api/post/delete?_id=${el._id}`)
                  .then((r) => {
                    return r.json();
                  })
                  .then((r) => {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  });

                // URL parameter 이용
                // fetch(`/api/post/${el._id}`)
                //   .then((r) => {
                //     return r.json();
                //   })
                //   .then((r) => {
                //     e.target.parentElement.style.opacity = 0;
                //     setTimeout(() => {
                //       e.target.parentElement.style.display = "none";
                //     }, 1000);
                //   });

                // fetch("/api/test?name=kim&age=20");
                // fetch("/api/abc/kim");
              }}
            >
              🗑️
            </span>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
