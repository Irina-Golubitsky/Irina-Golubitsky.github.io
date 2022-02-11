import React  from 'react';
import myImage from '../../images/My-photo.jpeg';
function About() {

    return (
        <section id="about-me" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 fix">
                        <div class="tabs-main">
                            <div class="tab-content">                       
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
                                                    <p>Hello! My name is Irina Golubitsky. I got a bachelor's degree in Math at Perm State University (Russia), and have five years of experience working as a Software Developer. Recently I have completed the program with full stack web development skills at UCLA Extension.</p>
                                                    <p>Welcome to my website. This is my place to share my works with potential employers and fellow developers. If you have any questions or suggestions, please feel free to contact me.</p>
                                                    <p>I am participating in <a href="https://adventofcode.com/2021">advent-of-code-2021</a>, my solutions <a href="https://github.com/Irina-Golubitsky/adventofcode-2021"> repo</a>.</p>
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