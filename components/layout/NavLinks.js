import Link from 'next/link';
import React from 'react';

const NavLinks = ({ extraClassName }) => {
    return (
        <ul className={`navigation ${extraClassName}`}>
            <li className="current"><Link href="/">Home</Link></li>
            <li className="dropdown"><Link href="/">Services</Link>
                <ul>
                    <li><Link href="/facebook-services">Services Grid</Link></li>
                    <li><Link href="/page-service-details">Service Details</Link></li>
                    <li><Link href="/page-service-google">Google Ads</Link></li>
                    <li><Link href="/web-development">Web development</Link></li>
                    <li><Link href="/seo-services">SEO</Link></li>

                </ul>
            </li>
            <li className="dropdown"><Link href="/page-projects">Portfolio</Link>
                <ul>
                    <li><Link href="/page-projects">Portfolio Grid</Link></li>
                    <li><Link href="/page-project-details">Portfolio Details</Link></li>
                </ul>
            </li>
            <li><Link href="/page-about">About us</Link></li>
            <li><Link href="/page-contact">Contact</Link></li>
        </ul>
    );
};

export default NavLinks;