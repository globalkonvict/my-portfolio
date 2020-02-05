import React from 'react';

const About = () => {
	return (
		<div className="clip-shadow">
		<section className='me section has-text-centered has-text-white is-medium' id='about-me'>
			<div className='container'>
				<div className='columns is-mobile is-multiline is-centered'>
					<div className='is-narrow'>
						<h3 className='is-size-1 is-size-4-mobile about-p section-heading'>About Me!</h3>
					</div>
					<div className='column is-12'>
						<p className=' about-p is-size-3 is-size-5-touch has-text-justified has-text-weight-light has-text-left-touch'>
							Hello, I am Sarthak. Currently doing my UG in Electronics and
							Communications Engineering. I am passionate about programming,
							learning and staying upto date with the latest trends in
							technology. Lover of aesthetics, peace and technology, that's all
							I can say.
							Want to work together? Reach out to me @<span className="is-size-5-mobile" id="email">sarthakwarlock@gmail.com</span>. 
						</p>
					</div>
				</div>
			</div>
		</section>
		</div>
	);
};

export default About;
