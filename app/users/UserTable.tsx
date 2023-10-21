interface User {
  id: number;
  name: string;
  email: string;
}

export const UserTable = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <table className="table table-zebra">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>)}
      </tbody>
    </table>
  );
};