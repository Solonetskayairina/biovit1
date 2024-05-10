// eslint-disable-next-line no-unused-vars
    import React, { useState } from "react";
    import { Link } from "react-router-dom";
    import { ROUTES } from "../../utils/routes";
    import styles from "../../styles/Header.module.css";
    import LOGO1 from "../../assets/header/LOGO1.svg";
    import MENU from "../../assets/header/menu.svg";
    import SEARCH from "../../assets/header/search.svg";
    import HEART from "../../assets/header/heart.svg";
    import GROUP from "../../assets/header/group.svg";
    import BACKET from "../../assets/header/backet.svg";
    import ELLIPSE from "../../assets/header/Ellipse .svg";
    import CHEVRON_DOWN from "../../assets/header/chevron-down.svg"


    const BottomHeader = () => {
        const [isSearchOpen, setSearchOpen] = useState(false);

        const toggleSearch = () => {
            setSearchOpen(!isSearchOpen);
        };

        return (
            <div className={styles.bottomHeader}>
                <div className={styles.categoryMenu}>
                    <img src={MENU} alt="menu" />
                    <h2>Menu</h2>
                </div>
                <div className={styles.icons}>
                    <img className={styles.image} src={LOGO1} alt="BioVit" />
                    <form className={styles.form}>
                        <div className={styles.inputWithIcon}>
                            <input
                                type="search"
                                name="search"
                                autoComplete="off"
                                className={isSearchOpen ? styles.visible : styles.hidden}
                            />
                            <div className={styles.iconSearch} onClick={toggleSearch}>
                                <img src={SEARCH} alt="search" />
                            </div>
                        </div>
                    </form>
                    <div className={styles.icon}>
                        <Link to={ROUTES.HOME}>
                            <img src={HEART} alt="heart" />
                        </Link>
                        <Link to={ROUTES.PROFILE}>
                            <img src={GROUP} alt="group" />
                        </Link>
                        <Link to={ROUTES.CART} className={styles.cartCount}>
                            <img src={BACKET} alt="backet" />
                            <img src={ELLIPSE} alt="ellipse" className={styles.ellipse}/>
                            <span className={styles.count}>1</span>
                        </Link>
                        <div className={styles.mobile}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className={styles.mobile}>
                                <path d="M13.9104 7.55809C14.6586 7.70378 15.3462 8.06898 15.8852 8.60696C16.4242 9.14494 16.7901 9.83121 16.9361 10.5779M13.9104 4.5C15.4648 4.67235 16.9143 5.3671 18.0209 6.47018C19.1275 7.57326 19.8254 9.0191 20 10.5703M19.234 16.6712V18.9648C19.2349 19.1777 19.1912 19.3884 19.1057 19.5835C19.0203 19.7786 18.8949 19.9537 18.7377 20.0977C18.5805 20.2416 18.3949 20.3512 18.1928 20.4194C17.9908 20.4876 17.7766 20.513 17.5642 20.4938C15.2071 20.2382 12.943 19.4343 10.9537 18.1467C9.10295 16.9729 7.53384 15.4068 6.35779 13.5596C5.06326 11.5651 4.25765 9.29431 4.00622 6.93118C3.98708 6.71976 4.01225 6.50669 4.08014 6.30551C4.14802 6.10434 4.25713 5.91948 4.40052 5.7627C4.54391 5.60592 4.71843 5.48066 4.91298 5.39489C5.10753 5.30912 5.31785 5.26472 5.53053 5.26452H7.82849C8.20022 5.26087 8.56061 5.39226 8.84247 5.63419C9.12433 5.87613 9.30843 6.21211 9.36046 6.5795C9.45745 7.31349 9.63732 8.03418 9.89665 8.72781C9.99971 9.00145 10.022 9.29884 9.96092 9.58474C9.89983 9.87065 9.7579 10.1331 9.55195 10.3409L8.57915 11.3119C9.66958 13.2259 11.2574 14.8107 13.1751 15.899L14.1479 14.9281C14.3561 14.7225 14.6191 14.5809 14.9055 14.5199C15.192 14.4589 15.4899 14.4812 15.7641 14.584C16.4591 14.8429 17.1811 15.0224 17.9165 15.1192C18.2886 15.1716 18.6284 15.3587 18.8713 15.6448C19.1143 15.931 19.2433 16.2962 19.234 16.6712Z" stroke="#3F3E3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <img src={CHEVRON_DOWN} alt="chevrone_down" className={styles.mobile_down}/>
                        </div>

                    </div>
                </div>
            </div>
        );
    };

    export default BottomHeader;