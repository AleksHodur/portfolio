import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
    component: ReactNode
}

const animations = {
    hidden: {
        opacity: 0,
        display: 'none'
    },
    animate: {
        opacity: 1,
        display: 'flex',
        transition : {delay: 0.5, duration: 1}
    },
    exit: {
        opacity: 0
    }
}

function PageTransition (children: PageTransitionProps) {
    return ( 
        <motion.div
            className='page-slide'
            variants={animations}
            initial='hidden'
            animate='animate'
            exit='exit'
        >
            { children.component }
        </motion.div>
     );
}

export default PageTransition ;