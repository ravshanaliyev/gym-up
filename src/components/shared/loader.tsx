import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function LoaderSimple({ loading }: { loading: boolean }) {
    const controls = useAnimation();
    useEffect(() => {
        if (loading) {
            controls.start({
                opacity: 1,
                transition: { duration: 2 }
            });
        } else {
            controls.start({
                opacity: 0,
                transition: { duration: 1 }
            });
        }
    }, [loading, controls]);

    return (
        <motion.div
            className="fixed bg-white h-screen top-0 left-0 w-full  flex justify-center items-center z-10"
            animate={controls}
        >
            <div className="p-4 rounded-md">
                <div className="flex justify-center">
                    <>
                        <motion.span
                            className="w-5 h-5 my-12 mx-1 bg-[#3c50e0] rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0], // Fades out
                                transition: { duration: 2, repeat: 4, delay: 0 }
                            }}
                        />
                        <motion.span
                            className="w-5 h-5 my-12 mx-1 bg-[#3c50e0] rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0], // Fades out
                                transition: { duration: 2, repeat: 3, delay: 0.2 }
                            }}
                        />
                        <motion.span
                            className="w-5 h-5 my-12 mx-1 bg-[#3c50e0] rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0], // Fades out
                                transition: { duration: 2, repeat: 2, delay: 0.4 }
                            }}
                        />
                    </>
                </div>
            </div>
        </motion.div>
    );
}

export default LoaderSimple;