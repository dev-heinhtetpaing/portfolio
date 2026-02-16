// 'use client'

// import { Button } from "@/components/ui/button"
// import { useActiveSection } from "@/hook/useActiveSection"
// import { ArrowRight, Code2, Sparkles } from "lucide-react"
// import { motion } from "motion/react"
// import { useRouter } from "next/navigation"

// export function HeroSection() {
//   const router = useRouter()
//   const redirectToGitRepo = () => {
//     window.location.assign("https://github.com/dev-heinhtetpaing/Portfolio")
//   }

//   const { ref } = useActiveSection("Home", 0.5)

//   return (
//     <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-5" />
//       <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

//       <div className="container mx-auto px-4 text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
//           >
//             <Sparkles className="w-4 h-4" />
//             Available for new opportunities
//           </motion.div>

//           <h1 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
//             Crafting Modern
//             <br />
//             <span className="text-accent">Web Applications</span>
//           </h1>

//           <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
//             Full-stack developer specializing in TypeScript, React, and cutting-edge web technologies. Building
//             scalable, performant applications with exceptional user experiences.
//           </p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           >
//             <Button size="lg" onClick={() => router.push("/mywork")} className="group">
//               View My Work
//               <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button onClick={() => redirectToGitRepo()} variant="outline" size="lg" className="group bg-transparent">
//               <Code2 className="mr-2 w-4 h-4" />
//               See My Code
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
"use client";
import { useRef } from "react";
import Image from "next/image";
// import { useGSAP } from "@gsap/react";
import {useGSAP} from "@gsap/react"
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { Badge } from "@/components/ui/badge";
// import { personalInfo } from "@/lib/data";
import { TextPlugin } from "gsap/all";

export const HeroSection = () => {
  // const scrollToView = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }
  // const badgeContainer=document.querySelector(".badges-container");
  const mobileWidth = useMediaQuery({ query: "(max-width: 760px)" });
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin,TextPlugin);
  const sectionRef = useRef<HTMLDivElement>(null);
  const badgesContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const start = "top top"
    // const end = mobileWidth ? "bottom+=10%" : "bottom+=50%"
    const end = "bottom top"
    const imageAnimationStyle={
      right:0,
      bottom:0,
      translateX:0,
      translateY:0,
      scale:1,
      ease: "power2.inOut"
    }
    const imageOverlayAnimationStyle={
      opacity:1,
      ease: "power2.inOut"
    }
    const containerSize = {
      width: badgesContainerRef?.current?.offsetWidth || 0,
      height: badgesContainerRef?.current?.offsetHeight || 0
    }
    console.log(containerSize);
    const b1Size = { width: document.querySelector(".b1")?.getBoundingClientRect().width || 0, height: document.querySelector(".b1")?.getBoundingClientRect().height || 0 };
    const B2endPoint = mobileWidth ? { x: 10, y: -containerSize.width + b1Size.width * 1.8 || 0 } : { x: ((containerSize.width - b1Size.width || 0) / 1.5 || 0), y: -(containerSize.height - b1Size.height / 2) || 0 };

    const B1endPoint = mobileWidth ? { x: 10, y: -containerSize.width + b1Size.width * 0.6 || 0 } : { x: ((containerSize.width - b1Size.width || 0) / 1.1 || 0), y: -(containerSize.height - b1Size.height) || 0 };

    const B3endPoint = mobileWidth ? { x: 10, y: -containerSize.width + b1Size.width * 3 || 0 } : { x: ((containerSize.width - b1Size.width || 0) / 2.2 || 0), y: -(containerSize.height - b1Size.height) || 0 };

    const midPoint = mobileWidth ? { x: 0, y: -containerSize.width / 2 - b1Size.width / 2 || 0 } : { x: ((containerSize.width + b1Size.width || 0) / 5 || 0), y: -(containerSize.height / 2 + b1Size.height * 2) || 0 };
    // const startPoint = mobileWidth ? { x: 0, y: -b1Size.height * 1.5 || 0 } : { x: (b1Size.width || 0), y: -(2 * b1Size.height || 0) };
    const initialPoint = { x: 5, y: 0 };
   

    const MasterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: start,
        end: end,
        pin: true,
        scrub: 1.5,
        anticipatePin: 1,
        markers: true,
        // pinSpacing: true,
      }
    })
    MasterTimeline.to(".image",{...imageAnimationStyle},)
      // .to(".Image-overlay",{...imageOverlayAnimationStyle},)
  
    .to(".b1", {
      motionPath: {
        path: [
          initialPoint,
          // startPoint,
          midPoint,
          B2endPoint,
          B1endPoint,
        ],
        curviness: 1.5
      },
      opacity: 1,
      ease: "power2.inOut"
    })
    .to(".b2", {
      motionPath: {
        path: [
          initialPoint,
          // startPoint,
          midPoint,
          B2endPoint,
        ],
        curviness: 1.5
      },
      opacity: 1,
      ease: "power2.inOut"
    }).to(".b3", {
      motionPath: {
        path: mobileWidth ? [
          initialPoint,
          B3endPoint,
        ] : [initialPoint,
          midPoint,
          B3endPoint,],
        curviness: 1.5
      },
      opacity: 1,
      ease: "power2.inOut"
    },)
   
  }, { scope: sectionRef });
  return (
    <div ref={sectionRef} id="hero-section" className=" w-full  layer relative sm:py-20 py-10  ">
      <main className="sm:w-1/2 w-full sm:mr-auto sm:h-full h-[50%] flex flex-row justify-center items-center ">
        <div className="mx-5 sm:mx-15 space-y-5 ">
          <h1 className="text-2xl sm:text-5xl font-bold bg-linear-to-t from-primary to-slate-500 text-transparent bg-clip-text text-center pt-10 sm:text-left container mx-auto ">Hi,it&apos;s Hein </h1>
          <h2 className="text-xl sm:text-4xl font-bold bg-linear-to-t from-primary to-slate-500 text-transparent bg-clip-text text-center sm:text-left container mx-auto  flex flex-row gap-2 sm:justify-start justify-center items-center">
            I&apos;m 
            <span className=" text-center">Web Developer</span>
          </h2>
          <section className="container mx-auto space-y-5">
            {/* <p className="text-sm sm:text-base text-center  leading-loose tracking-normal sm:leading-loose sm:tracking-wide sm:text-left container text-muted-foreground mx-auto ">{personalInfo.shortObjectives}</p> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio officiis eum provident nihil est ad ea sint? Adipisci consequatur ipsam earum dolore, animi incidunt deserunt sed architecto culpa repellat.</p>
            <div className="container mx-auto flex gap-2 justify-center items-center sm:justify-start">
              {/* {personalInfo.cta.map(cta => <Badge key={cta.label} onClick={() => scrollToView(cta.href)} className="cursor-pointer ">{cta.label}</Badge>)} */}
            </div>
          </section>
        </div>
      </main>

      <div className="absolute bottom-0 h-[50%] w-full sm:h-[80vh] 
     ">
        <div className=" image  relative">
        <div className="Image-overlay"></div>
          <Image src="/hein-no-bg.webp" alt="Hein Htet Paing" className="absolute  drop-shadow-foreground drop-shadow-2xl object-cover object-top" fill={true} />
         
        </div>
      </div>
      <div className="absolute bottom-0  right-0 md:right-15 sm:right-10 xl:right-25 sm:w-1/2 w-full  xl:w-1/2 h-2/3 sm:h-[80%] ">
        <div className="relative w-full h-full  " ref={badgesContainerRef}>

          <div className="absolute badge bottom-0 opacity-0 left-0 b1 w-15 h-15 sm:w-18 sm:h-18 shadow-lg rounded-full border-2 border-gray-200">
            <Image src="/icon-nextjs.svg" alt="Next.js" fill className="p-2" />


          </div>
          <div className="absolute badge bottom-0 opacity-0 left-0 b2 w-15 h-15 sm:w-18 sm:h-18 shadow-lg rounded-full border-2 border-gray-200">
            <Image src="/icon-react.svg" alt="React" fill className="p-2" />
          </div>
          <div className="absolute badge bottom-0 opacity-0 left-0 b3 w-15 h-15 sm:w-18 sm:h-18 shadow-lg rounded-full border-2 border-gray-200">
            <Image src="/icon-nodejs.svg" alt="Node.js" fill className="p-2" />

          </div>
        </div>

      </div>


    </div>
  );
};

