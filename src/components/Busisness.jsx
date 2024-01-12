import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'
 
const FeactureCard = ({icon,title,content,index}) => (
  <div className={`flex-row flex p-6 rounded-[20px] ${index !== features.length -1  ? "mb-6" :"mb-0"} feature-card` }>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className='flex-1 flex flex-col ml-3 '>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)
const Busisness = () => {
  return (
    <section id="features" className={layout}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>You do the Business,<br className='sm:block hidden'/> we'll handle the funds</h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>with the right credit card, you can improve your financial life by building credit , 
         earning rewards
        and saving money, But with hundreds of credit cars on the market.
      </p>
      <Button styles='mt-10'/>
    
      </div>
    <div className={`${layout.sectionImg}   flex flex-col md:flex-row`}> 
    {features.map((feature,index) =>
      <FeactureCard key={feature.id} {...feature}/>
    )}
    </div>
    </section>
  )
}

export default Busisness