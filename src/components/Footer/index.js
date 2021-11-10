import React from 'react';
import contacts from '../../utils/contacts';

function Footer() {

    return (
        <div>
        <div class="section-title">
        <h1> be in touch <i class="fa fa-rocket"></i></h1>
        </div>
        <footer id="footer">
       
            <div class="container">
				<div class="row">
					
					<div class="col-md-12 col-sm-12 col-xs-12">
					
						<ul class="social">
							<li><a href={contacts.linkedin} target="_blank"><i class="fa fa-linkedin fa-3x"></i></a></li>
							<li><a href={contacts.github} target="_blank"><i class="fa fa-github fa-3x"></i></a></li>
							<li><a href={contacts.facebook} target="_blank"><i class="fa fa-facebook fa-3x"></i></a></li>
						</ul>
				
					</div>
				</div>
			</div>
            </footer>
            </div>
        
                    );
    }
                export default Footer;