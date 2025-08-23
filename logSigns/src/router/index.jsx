import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './AppRouter.module.scss';
import { getUser } from '../utilities/users-service';
import AuthPage from '../pages/AuthPage/AuthPage';
import MainPage from '../pages/MainPage/MainPage';

const AppRouter = () => {
  const [user, setUser] = useState(getUser());

  return (
    <Router>
      <main className={styles.App}>
        {user ? (
          <Routes>
            {/* Route for MainPage */}
            <Route
              path="/main"
              element={<MainPage user={user} setUser={setUser} />}
            />
            {/* Catch-all redirects to /main */}
            <Route path="/*" element={<Navigate to="/main" />} />
          </Routes>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </main>
    </Router>
  );
};

export default AppRouter;
