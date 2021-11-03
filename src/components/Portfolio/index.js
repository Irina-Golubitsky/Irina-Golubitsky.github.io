import React, { useEffect } from 'react';
import ProjectsList from '../ProjectsList';

function Portfolio() {
    const  currentCategory  ={name: "works"};

    return (
        <section id="portfolio" class="section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="section-title">
                        <h1><span>My</span> Portfolio<i class="fa fa-briefcase"></i></h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                    </div>
                </div>
            </div>
            <div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						
						<div class="portfolio-nav">
							<ul>
								<li class="active" data-filter="*"><span>10</span><i class="fa fa-tasks"></i>All</li>
								<li data-filter=".development"><span>08</span><i class="fa fa-pencil"></i>My works</li>
								<li data-filter=".design"><span>02</span><i class="fa fa-paint-brush"></i>Group projects</li>
							
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