import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    const autenticado = localStorage.getItem("autenticado");

    if (!autenticado) {
      router.push("/");
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("autenticado");
    router.push("/");
  };
  return (
    <div>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>Dashboard</div>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Sair
        </button>
      </aside>

      <main className={styles.mainContent}>
        <h1>Bem-vindo!</h1>
        <p>Área administrativa</p>
      </main>
    </div>
  );
}
