const NewPost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  return (
    <main className="NewPost">
      <h2>NewPost</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="postTitle"
          value={postTitle}
          required
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="body">Post:</label>
        <textarea
          id="postBody"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
