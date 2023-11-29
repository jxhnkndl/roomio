import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo-dark.png';

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.brandBox}`}>
          <Link className={`${styles.logo}`} href='/'>
            <Image src={logo} alt={"Visit Roomio's home page"} />
          </Link>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: 'px-4 sm:px-8 md:px-14 lg:px-32 py-6',
  container: 'max-w-[1240px]',
  brandBox: 'w-[150px]' 
};
