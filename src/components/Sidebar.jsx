import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyc3xlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/antoniohenriquessoma.png" />
        <strong>Clesio Carvalho</strong>
        <span>Ui Desding</span>
      </div>
      <footer>
        <a href="http://">
          <PencilLine size={20} />
          Editar Seu Perfil
        </a>
      </footer>
    </aside>
  );
}
