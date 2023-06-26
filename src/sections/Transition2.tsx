import { motion } from "framer-motion";

const Transition = (OgComponent) => {
    const ComponentWithTransition = () => (
        <>
            <OgComponent />
            <motion.div
                className="slide-in2"
                initial={{ scaleY: 0.5 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
                className="slide-out2"
                initial={{ scaleY: 0.5 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );

    return ComponentWithTransition;
};

// Assign a display name to the component
Transition.displayName = "Transition";

export default Transition;
