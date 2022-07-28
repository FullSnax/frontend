import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faGithub,
	faGoogle,
	faInstagram,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
library.add(
	faFacebookF,
	faTwitter,
	faInstagram,
	faGithub,
	faGoogle,
	faLinkedin
);

export default function Footer() {
	return (
		<footer className="bg-dark text-center text-white footer fixed-bottom">
			<div className="container p-4 pb-0">
				<section className="mb-4">
					<a
						className="btn btn-outline-light btn-floating m-1"
						href="#!"
						role="button"
					>
						<a className="icon-footer" href="#!">
							<FontAwesomeIcon
								icon={['fab', 'facebook-f']}
							/>
						</a>
					</a>

					<a
						className="btn btn-outline-light btn-floating m-1"
						href="#!"
						role="button"
					>
						<a className="icon-footer" href="#!">
							<FontAwesomeIcon icon={['fab', 'twitter']} />
						</a>
					</a>

					<a
						className="btn btn-outline-light btn-floating m-1"
						href="#!"
						role="button"
					>
						<a className="icon-footer" href="#!">
							<FontAwesomeIcon
								icon={['fab', 'instagram']}
							/>
						</a>
					</a>

					<a
						className="btn btn-outline-light btn-floating m-1"
						href="#!"
						role="button"
					>
						<a className="icon-footer" href="#!">
							<FontAwesomeIcon icon={['fab', 'github']} />
						</a>
					</a>

					<a
						className="btn btn-outline-light btn-floating m-1"
						href="#!"
						role="button"
					>
						<a className="icon-footer" href="#!">
							<FontAwesomeIcon icon={['fab', 'google']} />
						</a>
					</a>

					<a
						className="btn btn-outline-light btn-floating m-1"
						href="#!"
						role="button"
					>
						<a className="icon-footer" href="#!">
							<FontAwesomeIcon
								icon={['fab', 'linkedin']}
							/>
						</a>
					</a>
				</section>
			</div>

			<div
				className="text-center p-3"
				style={{ backGroundColor: 'rgba(0, 0, 0, 0.2)' }}
			>
				© 2022 Copyright &nbsp; | &nbsp; FullSnax.com
			</div>
		</footer>
	);
}
