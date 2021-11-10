import React, { useEffect, useState } from 'react';
import ProjectsList from '../ProjectsList';



    function Portfolio() {
        const [currentCategory, setCurrentCategory] = useState({ name: "all" });
        useEffect(() => {
            //  Update the document title using the browser API
           
          
        });



        return (
            <section id="portfolio" class="section">

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="section-title">
                                <h1><span>My</span> Portfolio<i class="fa fa-briefcase"></i></h1>
                                <p> A portfolio of web applications to showcase my knowledge and skills.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">

                            <div class="portfolio-nav">
                                <ul>
                                    <li  onClick={() => setCurrentCategory({ name: "all" })} ><span>8</span><i class="fa fa-tasks"></i>All</li>
                                    <li data-filter="works"  onClick={() => setCurrentCategory({ name: "works" })} ><span>6</span><i class="fa fa-user"></i>My works</li>
                                    <li data-filter="group" onClick={() => setCurrentCategory ({ name: "group" })} ><span>2</span><i class="fa fa-users"></i>Group projects</li>

                                </ul>
                            </div>

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