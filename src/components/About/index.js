import React, { useEffect } from 'react';
import myImage from '../../images/My-photo.jpeg';
function About(props) {

    return (
        <section id="about-me" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 fix">
                        <div class="tabs-main">
                            <div class="tab-content">

                                <div role="tabpanel" class="tab-pane fade in active" id="welcome">
                                    <div class="about-text">
                                        <h2 class="tab-title">About Me</h2>
                                        <div class="row">
                                            <div class="col-md-4 col-sm-4 col-xs-12">

                                                <div class="single-image">
                                                    <img src={myImage} alt=""></img>
                                                </div>
                                            </div>

                                            <div class="col-md-8 col-sm-12 col-xs-12">
                                                <div class="content">
                                                    <p>Hello! My name is Irina Golubitsky. I got a bachelor's degree in Math at Perm State University (Russia), and have five years of experience working as a Software Developer with 1C:Enterprise script. I am looking forward to start my new career as a Full Stack Web Developer after taking the Coding Boot Camp at UCLA Extension.</p>
                                                    <p>Welcome to my website. This is my place to share my works with potential empoyers and fellow developers. If you have any questions or suggestions, please feel free to contact me.</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;