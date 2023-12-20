interface PostProps {
  params: {
    id: string;
  };
}

const Post = ({ params: { id } }: PostProps) => (
  <main>
    <h1>Post: {id}</h1>
  </main>
);

export default Post;
