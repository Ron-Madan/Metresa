import { code } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section id="products" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <div className={`${styles.flexCenter}`}>
        <img src={code} className="w-[100%] h-[100%] mt-2"/>
      </div>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Explore Our Innovative <br className='sm:block hidden'/> Product Lineup.
      </h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
      Discover a World of Possibilities: Elevate Your Business with Our Diverse and Cutting-Edge Product Lineup, Tailored to Meet Your Unique Needs and Aspirations.
      </p>

    </div>
  </section>
)

export default Billing