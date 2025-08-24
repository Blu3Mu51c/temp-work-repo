import { logOut } from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  if (!user) return null; // or a simple placeholder

  return (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <button onClick={handleLogOut}>LOG OUT</button>
    </div>
  );
}
