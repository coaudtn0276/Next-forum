export default function Write() {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input type="text" name="title" placeholder="글제목" />
        <input type="text" name="content" placeholder="글내용" />
        <button type="submit">버튼</button>
      </form>
      {/* <form action="/api/list" method="POST">
        <button type="submit">날짜 데이터 버튼</button>
      </form>
      <form action="/api/list" method="POST">
        <input placeholder="제목" name="title" />
        <input placeholder="내용" name="content" />
        <button type="submit">내용 전달</button>
      </form> */}
    </div>
  );
}
