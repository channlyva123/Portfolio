import profile from "/images/profile.png";
import Typing from "@/animations/typing.jsx";
import FadeRight from "@/animations/FadeRight";
import FadeLeft from "@/animations/FadeLeft";
import { Link } from "react-router-dom";
import Socials from "@/components/sections/SocialSectionComponen.jsx";

const HeroSectionComponent = () => {
  return (
    <section className='relative min-w-full min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background with overlay */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: "url('/images/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-br from-white/10 via-white/10 to-white/10'></div>
      </div>
      {/* Content */}
      <div className='container relative z-10 mx-auto px-4 md:px-6 lg:px-8 py-4'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16'>
          {/* Left: Text Content */}
          <div className='flex-1 max-w-2xl text-center lg:text-left'>
            <FadeLeft delay={200}>
              <div className='mb-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm md:text-base font-medium'>
                <span className='animate-wave'>👋</span>
                Hello! I'm
              </div>
            </FadeLeft>

            <FadeLeft delay={250}>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight'>
                Va Channly
              </h1>
            </FadeLeft>

            <FadeLeft delay={300}>
              <div className='mb-6'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2'>
                  I am a{" "}
                  <span className='relative inline-block'>
                    <Typing text={"Web Developer"} className='text-primary' />
                    <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary/50'></span>
                  </span>
                </h2>
              </div>
            </FadeLeft>

            <FadeLeft delay={350}>
              <p className='text-lg md:text-xl text-white mb-8 leading-relaxed'>
                Passionate Web Developer with a strong focus on building
                scalable and user-friendly web applications. Continuously
                learning new technologies to improve development efficiency and
                code quality. Dedicated to contributing to organizational
                success through teamwork and innovative problem-solving.
              </p>
            </FadeLeft>

            <FadeLeft delay={400}>
              <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4'>
                <a
                  href='/files/VA_CHANNLY.pdf'
                  download='Va_Channly.pdf'
                  className='group inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-primary/90'
                >
                  <svg
                    className='w-5 h-5 group-hover:animate-bounce'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                  </svg>
                  Download Resume
                </a>
                <Link
                  to='/contact'
                  className='inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300'
                >
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  Contact Me
                </Link>
              </div>
            </FadeLeft>
            <FadeLeft delay={500}>
              <div className=' w-full flex justify-center lg:justify-start'>
                <Socials />
              </div>
            </FadeLeft>
          </div>

          {/* Right: Profile Image */}
          <FadeRight delay={200}>
            <div className='flex-1 flex justify-center lg:justify-end relative'>
              <div className='relative group'>
                <div className='absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500'></div>
                <div className='relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-2xl'>
                  <img
                    src={profile}
                    alt='Va Channly - Front-End Developer'
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                </div>
                {/* Decorative elements */}
                <div className='absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary/20 animate-pulse'></div>
                <div className='absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-secondary/20 animate-pulse delay-300'></div>
              </div>
            </div>
          </FadeRight>
        </div>
        {/* Scroll indicator */}
        <FadeLeft delay={500}>
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block'>
            <div className='flex flex-col items-center text-gray-500'>
              <span className='text-sm mb-2'>Scroll down</span>
              <div className='w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center'>
                <div className='w-1 h-3 bg-primary rounded-full mt-2 animate-bounce'></div>
              </div>
            </div>
          </div>
        </FadeLeft>
      </div>
    </section>
  );
};

export default HeroSectionComponent;
