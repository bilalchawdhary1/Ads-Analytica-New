import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,

            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    const [isSubActive, setSubIsActive] = useState({
        status: false,
        key: "",
    });

    const handleSubClick = (key) => {
        if (isSubActive.key === key) {
            setSubIsActive({
                status: false,

            });
        } else {
            setSubIsActive({
                status: true,
                key,
            });
        }
    };



    return (
        <>
            <ul className="navigation clearfix">
                <li className="current"><Link href="/">Home</Link>
                </li>
                <li className="dropdown"><Link href="/">Services</Link>
                    <ul className={isActive.key === 3 ? "d-block" : "d-none"}>
                        <li><Link href="/facebook-services">facebook ads</Link></li>
                        <li><Link href="/page-service-google">Google Ads</Link></li>
                        <li><Link href="/web-development">Web Development</Link></li>
                        <li><Link href="/page-service-details">Service Details</Link></li>
                        <li><Link href="/seo-services">SEO</Link></li>
                    </ul>
                    <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)}>
                        <i className="fa fa-angle-down"></i>
                    </div>
                </li>
                <li className="dropdown"><Link href="/">Portfolio</Link>
                    <ul className={isActive.key === 4 ? "d-block" : "d-none"}>
                        <li><Link href="/page-projects">Portfolio Grid</Link></li>
                        <li><Link href="/page-project-details">Portfolio Details</Link></li>
                    </ul>
                    <div className={isActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(4)}>
                        <i className="fa fa-angle-down"></i>
                    </div>
                </li>
                <li><Link href="/page-about">About us</Link></li>
                <li><Link href="/page-contact">Contact</Link></li>
            </ul>


        </>
    );
};

export default MobileMenu;
