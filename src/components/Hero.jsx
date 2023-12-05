import styles from '../style';
import { discount, robot, computer } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px] '/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>Every Problem has a Solution</span>
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            Innovate. <br className='sm:block hidden'/> {" "}
            <span className={`${styles.flexCenter} text-gradient`}>Empower.</span>
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'></div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          Succeed.
        </h1>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>Discover unparalleled business growth with our cutting-edge IT solutions. We specialize in empowering enterprises through innovation, fostering digital excellence to propel your success to new heights.</p>
      </div>

      <div className={`flex-1 flex-row ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={computer} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>

      </div>


      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>
    </section>
)

export default Hero