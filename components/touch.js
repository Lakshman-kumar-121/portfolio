import styles from '../styles/About.module.css';

const Gettouch = () => {
    return (
        <div className={styles.outer}>
            <div className={styles.txts}>
                <p className={styles.first}>GET IN TOUCH</p>
                <p className={styles.second}>Let's Work Together</p>
            </div>

            <div className={styles.logo}>
                <div className={styles.phone}>
                    <div className={styles.img}>
                        <img src={"/phone.gif"} alt="" />
                    </div>
                    <div className={styles.content}>
                        Phone & Mobile
                    </div>
                    <div className={styles.discription}>
                        +91 8095222577
                    </div>
                </div>
                <div className={styles.email}>
                    <div className={styles.img}>
                        <img src={"/phone.gif"} alt="" />
                    </div>
                    <div className={styles.content}>
                        Phone & Mobile
                    </div>
                    <div className={styles.discription}>
                        +91 8095222577
                    </div>
                </div>
                <div className={styles.address}>
                    <div className={styles.img}>
                        <img src={"/phone.gif"} alt="" />
                    </div>
                    <div className={styles.content}>
                        Phone & Mobile
                    </div>
                    <div className={styles.discription}>
                        +91 8095222577
                    </div>
                </div>
                <div className={styles.linked}>
                    <div className={styles.img}>
                        <img src={"/phone.gif"} alt="" />
                    </div>
                    <div className={styles.content}>
                        Phone & Mobile
                    </div>
                    <div className={styles.discription}>
                        +91 8095222577
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Gettouch;
