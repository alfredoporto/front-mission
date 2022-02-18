import React from 'react'
import useStyles from './styles';

const Home = () => {
    const classes = useStyles();

    return (

        <section className={classes.cSection}>
            <h2 className={classes.cSectionTitle}>
                <span>Our Services</span>
            </h2>
            <ul className={classes.cSectionServices} >
                <li className={classes.cSectionServicesItem}>
                    <h3 className={classes.cSectionServicesItemTitle}>Responsive Web Design</h3>
                    <p>We leverage the concept of mobile-first design. Through our work, we focus on designing an experience that works across different screen sizes.</p>
                </li>
                <li className={classes.cSectionServicesItem}>
                    <h3 className={classes.cSectionServicesItemTitle}>UX Auditing</h3>
                    <p>If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your product. From there, we can take it further and fix all issues.</p>
                </li>
                <li className={classes.cSectionServicesItem}>
                    <h3 className={classes.cSectionServicesItemTitle}>Front End Development</h3>
                    <p>We are Front End masters with a deep focus on HTML, CSS. The result of our work is a responsive, accessible, and performant websites. Either you have the design ready and want us to code it, or you want us to do both design and code, we’re happy to do so.</p>
                </li>
                <li className={classes.cSectionServicesItem}>
                    <h3 className={classes.cSectionServicesItemTitle}>UX Consultation</h3>
                    <p>If you don’t know what kind of service to request from us, don’t worry. We can help and see what fits your business and your budget.</p>
                </li>
                <li className={classes.cSectionServicesItem}>
                    <h3 className={classes.cSectionServicesItemTitle}>Mobile Apps Design</h3>
                    <p>To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype.</p>
                </li>
                <li className={classes.cSectionServicesItem}>
                    <h3 className={classes.cSectionServicesItemTitle}>UX Research</h3>
                    <p>It’s important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis and much more.</p>
                </li>
            </ul>
        </section>

    )
}

export default Home;