import { getUsers } from "../lib/data-service";

export default async function AllTicket() {
//  const users = await getUsers();

  return (
    <div>
      <h1>Users</h1>
      {/* {users.map((user) => (
        <p key={user.id}>{user.email}</p>
      ))} */}
    </div>
  );
}
