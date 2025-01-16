import Intro from '../pages/intro/Intro';
import About from '../pages/about/About';
import PageTransition from '../transitions/PageTransition';

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const IntroAnimated = <Intro />;
const AboutAnimated = <About />;

function AnimatedRoutes () {

    const location = useLocation();

    return ( 
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<PageTransition component={IntroAnimated}/>} />
                <Route path='/about' element={<PageTransition component={AboutAnimated}/>} />
            </Routes>
        </AnimatePresence>
     );
}

export default AnimatedRoutes ;