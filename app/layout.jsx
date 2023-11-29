import { openSans } from './fonts';
import './globals.css';
import Footer from './layout/Footer';
import Header from './layout/Header';

export const metadata = {
  title: 'Roomio | Your favorite room await',
  description:
    'Explore the intersection of beautiful modern design and timeless aesthetics with Roomio, your premier destination for interior design in Richmond, Virginia.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${openSans.className}`}>
        <div className={`${styles.container}`}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

const styles = {
  container: 'min-h-screen flex flex-col justify-between bg-cream',
};
