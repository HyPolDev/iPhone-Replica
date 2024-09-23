import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const HowItWorks = () => {

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })

        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut'
        })
    }, []);

    useGSAP(() => {
        gsap.fromTo(
            "#videoContainer",
            {
                scale: 1.5,
                y: 0
            }, // Start at 2x scale (double size)
            {
                scale: 0.6, // End at normal size
                ease: "none",
                y: 300,
                scrollTrigger: {
                    trigger: containerRef.current, // The element that triggers the animation
                    start: "top center", // When the top of the frame hits the center of the viewport
                    end: "bottom top", // When the bottom of the frame reaches the top of the viewport
                    scrub: true, // Smooth scrubbing as you scroll
                }
            }
        );
    }, []);

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div id="chip" className="flex-center w-full my-20">
                    <img src={chipImg} alt="chip" width={180} height={180} />
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="hiw-title">
                        A17 Pro chip.
                        <br /> A monster win for gaming.
                    </h2>

                    <p className="hiw-subtitle">
                        It's here. The biggest redesign in the history of Apple GPUs.
                    </p>
                </div>

                <div id="videoContainer" className="mt-20 md:mt-40 mb-14">
                    <div ref={containerRef} className="relative h-full flex-center">
                        <div className="overflow-hidden">
                            <img
                                src={frameImg}
                                alt="frame"
                                className="bg-transparent relative z-10"
                            />
                        </div>
                        <div className="hiw-video">
                            <video
                                className="pointer-events-none"
                                playsInline
                                preload="none"
                                muted
                                autoPlay
                                ref={videoRef}
                                loop={true}
                            >
                                <source src={frameVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>
                </div>

                <div className="hiw-text-container mt-60">
                    <div className="flex flex-1 justify-center flex-col">
                        <p className="hiw-text g_fadeIn">
                            A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                            <span className="text-white">
                                best graphic performance by far
                            </span>.
                        </p>

                        <p className="hiw-text g_fadeIn">
                            Mobile {' '}
                            <span className="text-white">
                                games will look and feel so immersive
                            </span>,
                            with incredibly detailed environments and characters.
                        </p>
                    </div>


                    <div className="flex-1 flex justify-center flex-col g_fadeIn">
                        <p className="hiw-text">New</p>
                        <p className="hiw-bigtext">Pro-class GPU</p>
                        <p className="hiw-text">with 6 cores</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks