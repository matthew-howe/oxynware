import Link from "next/link";
import { useRouter } from "next/router";
import hstyles from "../styles/Home.module.css";
import styles from "../styles/Navbar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log("router", router);

  const isCur = (cur) => {
    if (cur === 'home') return router.pathname === '/';
    return router.pathname === '/' + cur;
  }
  const renderCur = (name) => <a className={styles.cur}>{name}</a>;
  const renderOthers = (name) => <a className={hstyles.navel}>{name}</a>;
  const renderNavel = name => {
    if (name === '/') name = 'home';
    const newName = name[0].toUpperCase() + name.slice(1);
    if (isCur(name)) {
      console.log('hi')
      return renderCur(newName)
    } else {
      return renderOthers(newName)
    }
  }

  return (
    <div className={hstyles.nav}>
      <Link href="/">
        {renderNavel('/')}
      </Link>
      <Link href="/poker">
        {renderNavel('poker')}
      </Link>
      <Link href="/trader">
        {renderNavel('trader')}
      </Link>
      <Link href="/support">
        {renderNavel('support')}
      </Link>
      <Link href="/account">
        {renderNavel('account')}
      </Link>
    </div>
  );
}
