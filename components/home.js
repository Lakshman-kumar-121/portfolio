import styles from '../styles/Home.module.css';
const HomeCont = () => {
    return (
        <div>
            <div className={styles.text}>
                <p className={styles.h}>
                    Hello     !!!
                </p>
                <p className={styles.intr}>
                    I'm Lakshman
                </p>
                <div className={styles.fsd}>
                    SOFTWARE & FULL STACK DEVELOPER
                </div>
                <div className={styles.myself}>
                    I am a fast learner and exceptional problem solver, adept
                    at quickly absorbing information and finding innovative
                    solutions. With a keen analytical mindset, I thrive in
                    dynamic environments and embrace challenges with
                    enthusiasm. Committed to continuous growth, I bring a
                    resilient and adaptable approach to every task,
                    consistently delivering outstanding results                </div>
            </div>
            <hr className="hl" />
        </div>
    );
}

export default HomeCont;