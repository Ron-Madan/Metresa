import styles from '../style';
import { logo } from '../assets'; 
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={logo} alt='Metresa' className='w-[266px] h-[72px] object-contain'/>
        <p className={`${styles.paragraph} ml-4 mt-4 max-w-[310px]`}>
          Innovate. Empower. Succeed.
        </p>
      </div>

      
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
        2023 Metresa. All Rights Reserved.
      </p>

      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((social, index) => (
          <a
            key={social.id}
            href={social.link}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index != socialMedia.length - 1 ? 'mr-6' : 'mr-0' }`}>
            <img src={social.icon}/>
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Footer