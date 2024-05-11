// eslint-disable-next-line no-unused-vars
    import React from "react";
    import { Link } from "react-router-dom";
    import { ROUTES } from "../../utils/routes.js"
    import styles from "../../styles/Header.module.css";
    import LOGO from "../../assets/header/Logo.svg";
    import PHONE from "../../assets/header/phone.svg"
    import CHEVRON_DOWN from "../../assets/header/chevron-down.svg"

    const TopHeader = () => {
        return (
            <div className={styles.topHeader}>
                <div className={styles.img}>
                    <Link to={ROUTES.HOME}>
                        <img src={LOGO} alt="BioVit" />
                    </Link>
                </div>
                <div className={styles.navigation_menu}>
                    <div className={styles.menu}>
                        <div className={styles.phone}>
                            <ul>
                                <li>
                                    <img src={PHONE} alt="phone" />
                                    <a href="#">+1 (123) 123-45-67</a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.navigation}>
                            <ul>
                                <li>
                                    <Link to={ROUTES.SALE}>SALE</Link>
                                </li>
                                <li>
                                    <Link to={ROUTES.BLOG} className={styles.center_li}>Blog</Link>
                                </li>
                                <li>
                                    <Link to={ROUTES.PARTNERS} className={styles.last_li}>For partners</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.language}>
                            <ul>
                                <li>
                                    <a href="#">ENG</a>
                                </li>
                                <li>
                                    <img src={CHEVRON_DOWN} alt="chevrone_down" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default TopHeader;