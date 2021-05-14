import { ReactNode } from "react";
import Header from "./Header";
import styles from "./styles/Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        {children}
      </main>
    </>
  );
};

export default Layout;