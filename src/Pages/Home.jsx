import React, { Fragment } from 'react';

import Banner from '../Components/Home/Banner/Banner';
import Covid from '../Components/Home/Covid/Covid';
import LiveAnyWhere from '../Components/Home/LiveAnyWhere/LiveAnyWhere';
import Places from '../Components/Home/Places/Places';
import Header from './Header/Header'
import Footer  from "../Pages/Footer/Footer";
import Experiences from '../Components/Home/Experiences/Experiences';
import Gift from '../Components/Home/Gift/Gift';
import JionUs from '../Components/Home/JionUs/JionUs';

const Home = () => {
	return (
		<Fragment>
			<Covid />
			<Header/>
			<Banner />
			<Places />
			<LiveAnyWhere />
			<Experiences />
			<Gift />
			<JionUs />
			<Footer />
		</Fragment>
	);
};

export default Home;
