interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

export const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  const sortedUsers = sortOrder === "name" ? sortByName() : sortByEmail();

  function sortByName() {
    return users.sort((a, b) => a.name > b.name ? 1 : -1 );
  }

  function sortByEmail() {
    return users.sort((a, b) => a.email > b.email ? 1 : -1 );
  }

  return (
    <table className="table table-zebra">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map(user => <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>)}
      </tbody>
    </table>
  );
};