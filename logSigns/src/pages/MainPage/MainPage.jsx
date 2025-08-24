import NavBar from "../../components/NavBar/NavBar";
import styles from "./MainPage.module.scss"

export default function MainPage({ user, setUser }) {
  return (
    <main className={styles.MainPage}>
      <aside>
        <NavBar user={user} setUser={setUser} />
      </aside>

      <section style={{ padding: '1rem' }}>
        {user.role === 'admin' && (
          <div>
            <h2>Admin Dashboard</h2>
            <p>Campus A</p>
            <p>Campus B</p>
            <button>Add Inventory</button>
          </div>
        )}

        {user.role === 'student' && (
          <div>
            <h2>Student Dashboard</h2>
            <p>Campus A</p>
            <p>Campus B</p>
            <button>Request Inventory</button>
          </div>
        )}
      </section>

    </main>
  );
}
