import React from 'react';


const ProjectsList = ({ category }) => {  
    // array of my projectrs
    var projects = [
    
        {
            name: 'Tutor-pro',
            category: 'works',
            description: 'React, GraphQL with a Node.js and Express.js server, MongoDB and the Mongoose ODM, JWT, Bootstrap.',
            description1: ' A platform where private tutors can create a webpage with thier timetable',
            github: 'https://github.com/Irina-Golubitsky/tutorpro',
            deployed: 'https://ig-tutorpro.herokuapp.com/',
            img: 'tutor-pro.png'
        },
        {
            name: 'Code Quiz',
            category: 'works',
            description: 'Sequelize, Handlebars.js, Express-session.',
            description1: ' ​A timed coding quiz with multiple-choice questions​.',
            github: 'https://github.com/daphne1014/quiz-code',
            deployed: 'https://ucla-codequiz.herokuapp.com/',
            img: 'code-quiz.png'
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
            name: 'Oculus Octopus',
            category: 'works',
            description: 'JavaScript(jQuery), HTML, CSS(Tailwind).',
            description1: ' A video game discovery servise using data from RAWG API, the largest video game database, and Giant Bomb API.',
            github: 'https://github.com/Irina-Golubitsky/oculus-octopus',
            deployed: 'https://irina-golubitsky.github.io/oculus-octopus/',
            img: 'oculus.png'
        },
   
        {
            name: 'NoSQL: Social Network API',
            category: 'works',
            description: 'Express.js, MongoDB, Mongoose.',
            description1: '  An API for a social network web application​',
            github: 'https://github.com/Irina-Golubitsky/my-sn-api',
            deployed: 'none',
            img: 'sn-api.png'
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
            name: 'Weather Dashboard',
            category: 'works',
            description: 'JavaScript(Query), HTML, CSS.',
            description1: ' ​A weather dashboard that uses the OpenWeather One Call API to show current weather and 5-day forcast for a city.',
            github: 'https://github.com/Irina-Golubitsky/City-Weather-Dashboard',
            deployed: 'https://irina-golubitsky.github.io/City-Weather-Dashboard/',
            img: 'weather-dashboard.png'
        },
    
        {
            name: 'Note Taker',
            category: 'works',
            description: 'JavaScript, Node.js, Express.js.',
            description1: ' This application uses an Express.js back end and saves and retrieves note data from a JSON file.',
            github: 'https://github.com/Irina-Golubitsky/My-Note-Taker',
            deployed: 'https://young-tor-62851.herokuapp.com/',
            img: 'note-taker.png'
        },
    
         
        {
            name: 'Run Buddy',
            category: 'works',
            description: 'HTML5, CSS3.',
            description1: ' A website that offers fitness training services.',
            github: 'https://github.com/Irina-Golubitsky/run-buddy',
            deployed: 'https://irina-golubitsky.github.io/run-buddy/',
            img: 'run-buddy.png'
        }

    ];
    // if category=all show all progects, else filter by category
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
                            <h4><span>Project</span>{image.name}</h4>
                            <p>{image.description}  {image.description1}</p>
                            <div class="button">
                                {image.deployed === "none" ? (
                                    <></>
                                ) : (
                                    <a href={image.deployed} target="_blank"><i class="fa fa-link fa-2x "></i></a>
                                )}
                                <a href={image.github} class="primary" target="_blank"><i class="fa fa-github fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    );
};

export default ProjectsList;
