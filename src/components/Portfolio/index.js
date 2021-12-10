import React, { useState } from 'react';
import ProjectsList from '../ProjectsList';
    function Portfolio() {
        const [currentCategory, setCurrentCategory] = useState({ name: "all" });
        return (
            <section id="portfolio" class="section">

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="section-title">
                                <h1><span>My</span> Portfolio<i class="fa fa-briefcase"></i></h1>
                               
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">

                          

                        </div>
                    </div>



                    <div class="portfolio-inner">
                        <div class="row stylex">
                            <div class="isotop-active">
                                <ProjectsList category={currentCategory.name}></ProjectsList>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
    export default Portfolio;