import React, {useState} from 'react';

const Navbar = ( ) => {
    const [isActive, setActive] = useState('');

    return (
			<nav
				className='navbar is-danger'
				role='navigation'
				aria-label='main navigation'>
				<div className='container'>
					<div className='navbar-brand'>
						<div className='navbar-item'>
							<a className='has-margin-left-4 is-size-3-mobile is-size-2-tablet is-size-2-desktop has-text-black'>
							<i className='fas fa-terminal has-text-black'></i>{`Sarthak`}
							</a>
						</div>

						<a
							role='button'
							className={`navbar-burger burger ${isActive}`}
							aria-label='menu'
							aria-expanded='false'
							data-target='navbar'
							onClick={e =>
								isActive === '' ? setActive('is-active') : setActive('')
							}>
							<span aria-hidden='true'></span>
							<span aria-hidden='true'></span>
							<span aria-hidden='true'></span>
						</a>
					</div>
					<div id='navbarf' className={`navbar-menu has-background-danger ${isActive}`}>
						<div className='navbar-start'>
							<a href="#me-skills" className='navbar-item has-text-white' id='text-black'>Skills</a>
							<hr className='navbar-divider'></hr>
							<a href="#about-me" className='navbar-item has-text-white'>About</a>
						</div>
						<div className='navbar-end has-margin-right-4'>
							<div className='navbar-item'>
								<div className='buttons'>
									<a href='https://github.com/globalkonvict' className='button is-black ' target='_blank'>
										<span className='icon'>
											<i className='fab fa-github'></i>
										</span>
										<span>GitHub</span>
									</a>
									<a className='button is-link ' href='https://www.linkedin.com/in/i-am-sarthak-dwivedi' target='_blank'>
										<span className='icon'>
											<i className='fab fa-linkedin'> </i>
										</span>

										<span>LinkedIn</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
};

export default Navbar; 