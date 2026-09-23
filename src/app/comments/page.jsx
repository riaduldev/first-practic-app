import Link from "next/link";

const CommentsPage =async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await res.json();
    return (
        <div>
            <h1>Comments page: {comments.length}</h1>
            <div className="grid grid-cols-4 gap-4">
                {comments.map((com) => <div key={com.id} className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{com.name}</h2>
    <p></p>
    <div className="card-actions justify-end">
      <Link href={`/comments/${com.id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>)}
            </div>
        </div>
    )
};

export default CommentsPage;