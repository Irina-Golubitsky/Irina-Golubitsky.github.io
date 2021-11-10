import React from 'react';
import contacts from '../../utils/contacts';

import { NavLink, Link } from "react-router-dom";
//import { BrowserRouter } from 'react-router-dom';

function Header() {

	return (
		<div>
			<header id="header">
				<div class="container">
					<div class="row">
						<div class="col-md-3 col-sm-12 col-xs-12">
							<div class="logo">
								<a href="/about">Irina Golubitsky</a>
							</div>
							<div class="mobile-nav"></div>
						</div>
						<div class="col-md-9 col-sm-12 col-xs-12">
							<div class="nav-area">

								<nav class="mainmenu">

									<div class="collapse navbar-collapse">
										<ul class="nav navbar-nav menu">

											<li ><Link to="/about"><i class="fa fa-home"></i>Homepage</Link></li>
											<li><Link to="/portfolio"><i class="fa fa-briefcase"></i>Portfolio</Link></li>
											<li><Link to="/resume"><i class="fa fa-file"></i>Resume</Link></li>
											<li><Link to="/contact"><i class="fa fa-address-book"></i>Contact</Link></li>

										</ul>
										<ul class="social-icon">
											<li><a href="#"><i class="fa fa-plus"></i></a></li>
										</ul>
										<ul class="social">
											<li><a href={contacts.linkedin} target="_blank"><i class="fa fa-linkedin"></i></a></li>
											<li><a href={contacts.github} target="_blank"><i class="fa fa-github"></i></a></li>
											<li><a href={contacts.facebook} target="_blank"><i class="fa fa-facebook"></i></a></li>


										</ul>
									</div>

								</nav>

							</div>
						</div>
					</div>
				</div>
			</header>
			<section id="personal-area">
				<div class="personal-main">
					<div class="personal-single">
						<div class="container">
							<div class="row">
								<div class="col-md-12 col-sm-12 col-xs-12">

									<div class="personal-text">
										<div class="my-info">
											<h1></h1>
											<h2 class="cd-headline clip is-full-width">
												Full stack
												<span class="cd-words-wrapper">
													<b class="is-visible"> &nbsp; Web Developer</b>


												</span>
											</h2>
											<div class="button">
												<Link to="/contact" class="btn primary shine"><i class="fa fa-rocket"></i>Hire Me</Link>
												<Link to="/portfolio" class="btn shine"><i class="fa fa-briefcase"></i>My Projects</Link>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}
export default Header;