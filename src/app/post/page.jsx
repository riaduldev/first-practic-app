import Link from "next/link";

const PostPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return (
        <div>
            <h1>Our post</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    posts.map((post) => <div key={post.id} className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{post.userId}</h2>
    <p>{post.title}</p>
    <div className="card-actions justify-end">
      <Link href={`/post/${post.id}`}><button className="btn btn-primary">Post Details</button></Link>
    </div>
  </div>
</div>)
                }
            </div>
        </div>
    );
};

export default PostPage;