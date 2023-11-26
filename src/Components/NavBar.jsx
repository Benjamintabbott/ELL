import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<nav>
				<div className="nav-items container">
					<div className="logo">
						<a href="/">
							<h1>ELL</h1>
						</a>
					</div>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/Scene1">Scene1</NavLink>
						</li>
						<li>
							<NavLink to="/Scene2">Scene2</NavLink>
						</li>
                        <li>
							<NavLink to="/Scene3">Scene3</NavLink>
						</li>
						<li>
							<NavLink to="/Scene4">Scene4</NavLink>
						</li>
                        <li>
							<NavLink to="/Scene5">Scene5</NavLink>
						</li>
						<li>
							<NavLink to="/Scene6">Scene6</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;