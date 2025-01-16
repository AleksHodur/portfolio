import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
    component: ReactNode
}

function PageTransition (children: PageTransitionProps) {
    return ( 
        <motion.div
            className='page-slide'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth }}
            transition={{ duration: 1 }}
        >
            { children.component }
        </motion.div>
     );
}

export default PageTransition ;