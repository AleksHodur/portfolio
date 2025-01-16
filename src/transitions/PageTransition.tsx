import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
    component: ReactNode
}

const animations = {
    hidden: {
        opacity: 0
    },
    animate: {
        opacity: 1,
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