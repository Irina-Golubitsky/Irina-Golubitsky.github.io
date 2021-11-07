import React, { useEffect } from 'react';
import resumePDF from '../../images/Resume_Irina-Golubitsky.pdf';
function Resume() {

    return (

        <section id="resume">
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
                        <p>I have five years of experience working as a Software Developer with 1C:Enterprise script in Russia. After taking the Coding Boot Camp at UCLA Extension, I would like to start my new career as a Full Stack Web Developer.</p>
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
                        <p>ООО Янтарь Плюс / Software Developer (1C:Enterprise script)
                            June  2008 -  Aug 2010  PERM, RUSSIA</p>
                        <p>Би Софт / Software Developer (1C:Enterprise script)
                            Dec 2007 - Apr 2008,  PERM, RUSSIA
                        </p>
                        <p>ООО Красивый Слон / Software Developer (1C:Enterprise script)
                            Sept 2006 - Dec 2007,   PERM, RUSSIA
                        </p>
                    </div>
                </div><br></br>
                <div class="row">
                    <div class="col-md-2 col-sm-12 col-xs-12 ">
                        <h3>Education</h3><br></br>
                    </div>
                    <div class="col-md-10 col-sm-12 col-xs-12 " >
                        <p><strong>Coding Boot Camp at UCLA Extension</strong> / Degree
June 2021 - Nov 2021
</p>
<p><strong>Perm State University</strong>, Faculty of Mechanics and Mathematics / Bachelor
Sept 2002 - June 2006,  PERM, RUSSIA
</p>
                    </div>
                </div><br></br>

           
            <div class="row">
            <div class="col-12 text-center">
            <h4><a  href={resumePDF} download> 
                  Download Resume
                </a></h4>
                </div>
                </div>
                </div>
        </section>
    );
}
export default Resume;