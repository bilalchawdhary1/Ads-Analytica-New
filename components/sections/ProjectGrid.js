import Link from 'next/link';
import React from 'react';

const ProjectOne = ({ addClass }) => {
    const data = [
        {
            img: "project-5.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-6.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-7.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-8.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-6.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-5.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        }
    ];
    return (
        <>
            <section className={`project-section ${addClass}`}>
                <div className="container">
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="col-xl-4 col-lg-6" key={i}>
                                <div className="project-block-two mb-30">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="page-project-details"><img src={`images/resource/${item.img}`} alt /></Link>
                                        </figure>
                                        <Link href="page-project-details" className="read-more"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                        <div className="info-box">
                                            <h4 className="title"><Link href="page-project-details">{item.title}</Link></h4>
                                        </div>
                                        </div>
                                        <div className="overlay-content">
                                            <div className="info-box">
                                                <h4 className="title"><Link href="page-project-details">{item.title}</Link></h4>
                                                <div className="text">{item.desc}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectOne;