import React, { useState } from 'react';


const ProjectsList = ({ category }) => {

    

    var projects = [
        {
            name: 'Progressive Web Applications (PWA): Budget Tracker',
            category: 'works',
            description: 'Express.js, MongoDB, Mongoose.',
            description1: ' This app allows the user to add expenses and deposits to their budget with or without a connection.',
            github: 'https://github.com/Irina-Golubitsky/My-Budget-Tracker',
            deployed: 'https://ig-budget-tracker.herokuapp.com/',
            img: 'budget-tracker.png'
        },
        {
            name: 'NoSQL: Social Network API',
            category: 'works',
            description: 'Express.js, MongoDB, Mongoose.',
            description1: ' This app allows the user to add expenses and deposits to their budget with or without a connection.',
            description1: '  An API for a social network web application​',
            github: 'https://github.com/Irina-Golubitsky/my-sn-api',
            deployed: 'none',
            img: 'sn-api.png'
        },
        {
            name: 'MVC: Tech Blog',
            category: 'works',
            description: 'Sequelize, Handlebars.js, Express-session.',
            description1: ' A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.',
            github: 'https://github.com/Irina-Golubitsky/My-Tech-Blog',
            deployed: 'https://ig-tech-blog.herokuapp.com/',
            img: 'tech-blog.png'
        },
        {
            name: 'ORM: E-commerce Back End',
            category: 'works',
            description: 'JavaScript (Node.js, Express.js), Sequelize.',
            description1: ' A back end for an e-commerce site.',
            github: 'https://github.com/Irina-Golubitsky/My-E-commerce',
            deployed: 'none',
            img: 'e-commerce.png'
        },
        {
            name: 'Code Quiz',
            category: 'group',
            description: 'Sequelize, Handlebars.js, Express-session.',
            description1: ' ​A timed coding quiz with multiple-choice questions​.',
            github: 'https://github.com/daphne1014/quiz-code',
            deployed: 'https://ucla-code-quiz.herokuapp.com/',
            img: 'code-quiz.png'
        },
        {
            name: 'Weather Dashboard',
            category: 'works',
            description: 'JavaScript(Query), HTML, CSS',
            description1: ' ​A weather dashboard that uses the OpenWeather One Call API to show current weather and 5-day forcast for a city.',
            github: 'https://github.com/Irina-Golubitsky/City-Weather-Dashboard',
            deployed: 'https://irina-golubitsky.github.io/City-Weather-Dashboard/',
            img: 'weather-dashboard.png'
        },
        {
            name: 'Oculus Octopus',
            category: 'group',
            description: 'JavaScript(jQuery), HTML, CSS(Tailwind)',
            description1: ' A video game discovery servise using data from RAWG API, the largest video game database, and Giant Bomb API.',
            github: 'https://github.com/mcarieri/oculus-octopus/',
            deployed: 'https://mcarieri.github.io/oculus-octopus/',
            img: 'oculus.png'
        },
        {
            name: 'Note Taker',
            category: 'works',
            description: 'JavaScript, Node.js, Express.js',
            description1: ' This application uses an Express.js back end and saves and retrieves note data from a JSON file.',
            github: 'https://github.com/Irina-Golubitsky/My-Note-Taker',
            deployed: 'https://young-tor-62851.herokuapp.com/',
            img: 'note-taker.png'
        },

    ];

  

    //const currentProjects = projects.filter((project) => project.category === category);
    //   if (category=== "all") {
    //       setCategory(projects)} 
    //   else {currentProjects = projects.filter((project) => project.category === category)};
  
   console.log(projects);
   console.log(category);
    if (category !== 'all') {
        projects =projects.filter((projects) => projects.category === category);
    
    } 

    return (
        <div>
            {projects.map((image, i) => (

                <div class="mix development html5 col-md-4 col-sm-6 col-xs-12 col-fix ">
                    <div class="portfolio-single">
                        <div class="portfolio-head">
                            <img src={require(`../../images/${image.img}`).default}
                                alt={image.name} key={image.name} />
                        </div>
                        <div class="portfolio-hover"  >
                            <h4><span>Project</span><a href="#">{image.name}</a></h4>
                            <p>{image.description}  {image.description1}</p>
                            <div class="button">
                                {image.deployed === "none" ? (
                                    <></>

                                ) : (
                                    <a href={image.deployed} target="_blank"><i class="fa fa-link fa-3x "></i></a>
                                )}


                                <a href={image.github} class="primary" target="_blank"><i class="fa fa-github fa-3x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    );
};

export default ProjectsList;
