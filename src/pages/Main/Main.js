import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills,/* Testimonials,  Blog ,*/ Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}Saif's Portfolio</title>
                <meta property="og:description"
                      content="Software Engineer @BRAC IT Services LTD." />
                <meta property="og:image" content="https://images2.imgbox.com/9e/db/Gpy3v3gd_o.jpg" />
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievement />
            <Services />
            {/* <Testimonials /> */}
            {/* <Blog /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
