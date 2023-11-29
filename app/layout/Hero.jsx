import { poppins, openSans } from '../fonts';
import heroImg from '../../public/interior-04.webp';

const styles = {
  section: 'relative',

  bgGrid: 'grid grid-cols-2',

  textCol: 'col-span-2 lg:col-span-1 order-last lg:order-first px-4 sm:px-8 md:px-14 lg:px-32 flex flex-col justify-center bg-primary',

  imageCol: 'col-span-2 lg:col-span-1 order-first lg:order-last min-h-[40vh] sm:min-h-[120vh] md:min-h-[50vh] lg:min-h-[85vh] col-span-2 lg:col-span-1',

  heroContent: 'py-6 sm:py-10 lg:py-0 flex flex-col justify-center items-center lg:block',

  heading: 'mb-2 ml-[-4px] text-5xl md:text-7xl leading-[4rem] md:leading-[5.5rem] tracking-[1px] text-center lg:text-left text-cream',

  subheading: 'mb-14 text-xl text-gray',

  btnContainer: 'w-full sm:w-2/3 md:w-2/5 lg:w-auto',

  btn: 'block mb-6 py-4 lg:py-3 flex justify-center items-center rounded-[10px] uppercase tracking-[0.5px] shadow-xl',

  btnSecondary: 'text-dark bg-secondary',
  
  btnOutline: 'border-[2px] border-cream text-cream bg-transparent'
}

export default function Hero() {
  return (
    <section className={`${styles.section} ${openSans.className}`}>
      <div className={`${styles.bgGrid}`}>
        <div className={`${styles.textCol}`}>
          <div className={`${styles.heroContent}`}>
            <h1 className={`${styles.heading} ${poppins.className}`}>Simply beautiful.</h1>
            <p className={`${styles.subheading}`}>Your favorite room awaits.</p>
            <div className={`${styles.btnContainer}`}>
              <a href="#" className={`${styles.btn} ${styles.btnSecondary}`}>
                Request a Quote
              </a>
              <a href="#" className={`${styles.btn} ${styles.btnOutline}`}>
                View Work
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.imageCol}`} style={{
          backgroundImage: `url(${heroImg.src})`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        </div>
      </div>
    </section>
  )
}