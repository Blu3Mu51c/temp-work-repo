import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import styles from './SignUpForm.module.scss';

export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student', // default role
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await signUp(formData);
      setUser(user);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.input} name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input className={styles.input} name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input className={styles.input} type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />

      <section>
      <select className={styles.input} name="role" value={formData.role} onChange={handleChange}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
      </select>
      </section>

      <button type="submit" className={styles.button}>Sign Up</button>
    </form>
  );
}