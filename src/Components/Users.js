export default function Users() {
    const users = [{name: "John", age: 21}, {name: "Ravi", age: 24}];

    return (
        <div>
            {users.map((user, index) => (
                <div key={index}>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                </div>
            ))}
        </div>
    );
}
