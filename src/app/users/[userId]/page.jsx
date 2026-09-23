
const UserDetailsPage = async({params}) => {
    const {userId} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    const {name, email, username,phone } = user;
    return (
        <div>
            <h1>user details page</h1>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.username}</p>
            <p>{user.phone}</p>
        </div>
    );
};

export default UserDetailsPage;