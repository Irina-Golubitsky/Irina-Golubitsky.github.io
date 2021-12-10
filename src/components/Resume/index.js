import React from 'react';
import resumePDF from '../../images/Resume-Irina_Golubitsky.pdf';
function Resume() {

    return (

        <section id="resume" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="section-title">
                            <h1><span>Resume</span><i class="fa fa-star"></i></h1>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-2 col-sm-12 col-xs-12 ">
                        <h3>Summary</h3><br></br>
                    </div>
                    <div class="col-md-10 col-sm-12 col-xs-12 " >
                        <p>I have five years of experience working as a Software Developer. Recently I have completed the program with full stack web development skills at UCLA Extension.</p>
                    </div>
                </div><br></br>
                <div class="row">
                    <div class="col-md-2 col-sm-12 col-xs-12 ">
                        <h3>Skills</h3><br></br>
                    </div>
                    <div class="col-md-10 col-sm-12 col-xs-12 " >
                        <p><u>HTML5</u>, <u>CSS3</u>, <u>JavaScript</u>, <u>jQuery</u>, <u>Express.js</u>, <u>React.js</u>, <u>Node.js</u>, <u>progressive web apps</u>, <u>agile methodology</u>, <u>computer science</u>, <u>database theory</u>, <u>MongoDB</u>, <u>MySQL</u>, <u>Git</u>,
                            <u>1C:Enterprise script</u>.</p>
                    </div>
                </div><br></br>
                <div class="row">
                    <div class="col-md-2 col-sm-12 col-xs-12 ">
                        <h3>Experience</h3><br></br>
                    </div>
                    <div class="col-md-10 col-sm-12 col-xs-12 " >
                        <p><b>Yantar Plus / Software Developer</b></p>
                        <p class="years"> June  2008 -  Aug 2010  PERM, RUSSIA </p>
                        <p>Automation of internal processes of the company.</p>
                        <p>Integration of 1C system with third-party software.</p>
                        <p>Implementation of financial reporting.</p>
                        <p>Development of pricing module and products’ logistics module.</p> <br />
                        <p><b>Bi Soft / Software Developer </b></p>
                         <p class="years">   Dec 2007 - Apr 2008,  PERM, RUSSIA
                        </p>
                        <p>Modification of the configuration of 1C Accounting and Salary.</p>
                        <br />
                        <p><b>Krasiviy Slon / Software Developer  </b></p>
                         <p class="years">   Sept 2006 - Dec 2007,   PERM, RUSSIA
                        </p>
                        <p>Development on the 1C 7.7 platform (programming, testing, implementation, support). Accounting and management reports. </p>
                        <p>Export / import of data from / to 1C, Excel, DBF, XML, csv, json.</p>
                        <p>Modification of the 1C configuration for the company's tasks, support of the existing configuration.</p>
                    </div>
                </div><br></br>
                <div class="row">
                    <div class="col-md-2 col-sm-12 col-xs-12 ">
                        <h3>Education</h3><br></br>
                    </div>
                    <div class="col-md-10 col-sm-12 col-xs-12 " >
                        <p><strong>Coding Boot Camp at UCLA Extension</strong> </p>
                          <p class="years">  June 2021 - Nov 2021
                        </p>
                        <p><strong>Perm State University</strong>, Faculty of Mechanics and Mathematics / Bachelor </p>
                         <p  class="years">  Sept 2002 - June 2006,  PERM, RUSSIA
                        </p>
                    </div>
                </div><br></br>
                <div class="row">
                    <div class="col-12 text-center">
                        <h4><a href={resumePDF} download>
                            Download Resume
                        </a></h4>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Resume;