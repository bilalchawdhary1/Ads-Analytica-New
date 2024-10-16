import { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Footer from './Footer';
import Header1 from './Header1';
import Header1Boxed from './Header1-boxed';
import PageHead from './PageHead';

const Layout = ({ children, HeaderStyle }) => {
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState(0)
    const handleToggle = () => setSearchToggled(!searchToggle);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-visible");
    }

    const handleRemove = () => {
        document.body.classList.remove("mobile-menu-visible");
    }
    return (
        <>
            <PageHead />
            <div className="page-wrapper" id="top">
                {!HeaderStyle && <Header1 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "one" && <Header1 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "one-boxed" && <Header1Boxed handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {children}

                <Footer />
            </div>
            <BackToTop />
        </>
    );
};

export default Layout;