
const CommentsDetailsPage = async({params}) => {
    const {comId} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${comId}`);
    const comment = await res.json();
    return (
        <div>
            <h1>{comment.name}</h1>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentsDetailsPage;