import styles from "../style"
import Button from "./Button"


const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <div>
    <h2 className={styles.heading2}>let`s try our service now!</h2>
    <p className={`${styles.paragraph}`}>Everthing you need to accept card payment and grow your Busisness anywhere on the planet</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-10`}>
      <Button/>
    </div>
    </section>

  )
}

export default CTA