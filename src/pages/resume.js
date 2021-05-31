import React from 'react';
import { Helmet } from 'react-helmet';

export default function Resume(){
    return(

        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{'Resume'}</title>
                <html lang={'en'}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link rel="stylesheet' href='https://fonts.googleapis.com/css?family=Roboto"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Helmet>
            <body class="w3-dark-grey" style={{textAlign:"justify"}}>

                {/* <!-- Page Container --> */}
                <div class="w3-content w3-margin-top" style={{maxWidth:'1400px'}}>

                    {/* <!-- The Grid --> */}
                    <div class="w3-row-padding">

                        {/* <!-- Left Column --> */}
                        <div class="w3-third">

                            <div class="w3-white w3-text-grey w3-card-4">
                                <div class="w3-display-container">
                                    <img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/177614585_111705671047296_3938329687955614318_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=yNolARPtMWIAX_7zyNP&_nc_ht=scontent.fktm10-1.fna&oh=20fcb0ace4ec0e9e3246e6609f5d90ed&oe=60D7A248"
                                        style={{width:"100%"}} alt="Avatar"/>
                                    <div class="w3-display-bottomleft w3-container w3-text-white">
                                        <h2>Swagat Koirala</h2>
                                    </div>
                                </div>
                                <br/>
                                <div class="w3-container">
                                    <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Software Developer
                                    </p>
                                    <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Balaju-16,Kathmandu</p>
                                    <p><i
                                            class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>swagatrajkoirala@gmail.com
                                    </p>
                                    <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+977-9869051179</p>
                                    <hr/>

                                    <p class="w3-large"><b><i
                                                class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                                    <p>Core Python</p>
                                    <div class="w3-light-grey w3-round-xlarge w3-small">
                                        <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{height:"10px" ,width:"40%"}}></div>
                                    </div><br/>

                                    <p>Django</p>
                                    <div class="w3-light-grey w3-round-xlarge w3-small">
                                        <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{height:"10px" ,width:"60%"}}></div>
                                    </div><br/>

                                    <p>Django Rest Framework</p>
                                    <div class="w3-light-grey w3-round-xlarge w3-small">
                                        <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{height:"10px" ,width:"70%"}}></div>
                                    </div><br/>

                                    <p>Angular</p>
                                    <div class="w3-light-grey w3-round-xlarge w3-small">
                                        <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{height:"10px" ,width:"50%"}}></div>
                                    </div><br/>

                                    <p>HTML/CSS</p>
                                    <div class="w3-light-grey w3-round-xlarge w3-small">
                                        <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{height:"10px" ,width:"65%"}}></div>
                                    </div>
                                    <br/>

                                    <p class="w3-large"><b><i
                                                class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Other Known Skills</b></p>

                                    <p>GIT</p>
                                    <div class="w3-light-grey w3-round-xlarge w3-small">
                                        <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{ height:"10px" ,width:"60%"}}></div>
                                    </div><br/>

                                    <p>postgreSQL</p>
                                    <div class="w3-light-grey w3-round-xlarge w3-small">
                                        <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{height:"10px" ,width:"50%"}}></div>
                                    </div><br/>

                                    <p>JAVA | spring framework</p>
                                    <div class="w3-light-grey w3-round-xlarge w3-small">
                                        <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{height:"10px" ,width:"20%"}}></div>
                                    </div><br/>

                                    <p>Wordpress</p>
                                    <div class="w3-light-grey w3-round-xlarge w3-small">
                                        <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{height:"10px" ,width:"40%"}}></div>
                                    </div><br/>

                                    <p>React JS | Gatsby framework</p>
                                    <div class="w3-light-grey w3-round-xlarge w3-small">
                                        <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{height:"10px" ,width:"15%"}}></div>
                                    </div>
                                    <br/>
                                </div>
                            </div><br/>

                            {/* <!-- End Left Column --> */}
                        </div>

                        {/* <!-- Right Column --> */}
                        <div class="w3-twothird">

                            <div class="w3-container w3-card w3-white w3-margin-bottom">
                                <h2 class="w3-text-grey w3-padding-16"><i
                                        class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience
                                </h2>
                                <div class="w3-container">
                                    <h5 class="w3-opacity"><b>Full Stack Developer / Finnove Technologies</b></h5>
                                    <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>January 2021 -
                                        <span class="w3-tag w3-teal w3-round">Current</span></h6>
                                    <p>After the sucessful completion of my internship period i was offered job in the same company.
                                        I gotta appreciate the trust they put on me and offered me the job, really thankful to them.
                                        I am currently working as the associate software developer here handling full stack i.e.
                                        frontend as well as backend.</p>
                                    <hr/>
                                </div>
                                <div class="w3-container">
                                    <h5 class="w3-opacity"><b>Backend Developer / internalaya.com</b></h5>
                                    <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>january 2021 -
                                        march 2021</h6>
                                    <p>Mainly, this was my internships period as a backend developer where i got to work and learn
                                        with amazing team beside me. Though it was an startup company i got to learn more and more
                                        with the project progress going by.</p>
                                    <hr/>
                                </div>
                            </div>

                            <div class="w3-container w3-card w3-white w3-margin-bottom">
                                <h2 class="w3-text-grey w3-padding-16"><i
                                        class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                                <div class="w3-container">
                                    <h5 class="w3-opacity"><b>Nepalaya College / Kalankisthan, Kathmandu</b></h5>
                                    <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2016 - 2021</h6>
                                    <p>Bachelor Degree</p>
                                    <hr/>
                                </div>
                                <div class="w3-container">
                                    <h5 class="w3-opacity"><b>National School of Sciences / Lainchaur, Kathamandu</b></h5>
                                    <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>
                                    <p>HSEB</p>
                                    <hr/>
                                </div>
                                <div class="w3-container">
                                    <h5 class="w3-opacity"><b>Modern English Boarding School / Gorkha</b></h5>
                                    <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 </h6>
                                    <p>SLC</p><br/>
                                </div>
                            </div>

                            <div class="w3-container w3-card w3-white">
                                <h2 class="w3-text-grey w3-padding-16"><i
                                        class="fa fa-folder-open fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Projects</h2>
                                <div class="w3-container">
                                    <h5 class="w3-opacity"><b>Internalaya</b></h5>
                                    <h6 class="w3-text-teal"><i class="fa fa-code fa-fw w3-margin-right"></i>Python/Django and vue.js</h6>
                                    <a style={{fontSize:"15px"}} target={"_blank"} href="https://www.internalaya.com/"><i class="fa fa-globe fa-fw w3-margin-right"></i>Live Preview</a>
                                    <hr/>
                                </div>
                                <div class="w3-container">
                                    <h5 class="w3-opacity"><b>Computer Pasal</b></h5>
                                    <h6 class="w3-text-teal"><i class="fa fa-code fa-fw w3-margin-right"></i>Python/Django and HTML/CSS</h6>
                                    <a style={{fontSize:"15px"}} target={"_blank"} href="http://computerpasal.pythonanywhere.com/"><i class="fa fa-globe fa-fw w3-margin-right"></i>Live Preview</a>
                                    <hr/>
                                </div>
                            </div>


                            {/* <!-- End Right Column --> */}
                        </div>

                        {/* <!-- End Grid --> */}
                    </div>

                    {/* <!-- End Page Container --> */}
                </div>
            </body>
            
        </>

    )
}
