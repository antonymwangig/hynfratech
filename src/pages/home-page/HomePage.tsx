import type { PropsWithChildren } from 'react'
import { WebHeader } from '../../components/header'

import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Plans from './Plans'
import ServerIconOne from '../../components/icons/ServerIconOne'
import { ConsoleTerminal } from '../../components/console-terminal'

const HomePage=()=> {

  
  useEffect(() => {
  }, [])
  


  return (
    <div
      className={
        'relative mx-auto my-0 flex min-h-screen  flex-col overflow-hidden bg-white shadow-2xl'
       }
    >
      <WebHeader />
      <main className="flex-shrink-0 flex-grow items-center lg:flex">

        <section className={'text-center lg:w-full lg:py-20 lg:text-left'}>
          <div className="hero mx-auto w-full max-w-6xl px-6">
            <div className="hero-inner relative lg:flex">
              <div className="hero-copy pb-16 pt-10 lg:min-w-[40rem] lg:pr-20 lg:pt-16">
                <div className="mx-auto w-full max-w-3xl">
                  <h1 className="mb-4 mt-0 text-4xl font-bold md:text-5xl " >
                  Hynfra Technologies
                  </h1>
                  <p className="prose prose-xl m-auto text-gray-600" >
                  Hynfra Technologies is a Managed Services and Cloud Provider with a combination of expertise, methodologies and innovative delivery models. We are uniquely positioned to help you achieve your specific goals using the appropriate combination of technologies.</p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        to="/signin-account"
                        className={`w-full flex items-center justify-center px-8 py-3 border  text-white border-transparent text-base font-medium rounded-md text-background bg-blue-500 hover:bg-border hover:text-gray md:py-4 md:text-lg md:px-10`}
                      >
                        <span>Get Started</span>
                      </Link>
                    </div>
                </div>
                </div>
              </div>

                <div className="relative -mx-6 py-10 lg:mx-0 lg:p-0">
                <div >
                    <div  className="absolute left-16 top-4 lg:-top-20 lg:left-24">
                      <svg width="124" height="64" viewBox="0 0 124 64" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient x1="0%" y1="50%" x2="114.418%" y2="50%" id="squares-1-a">
                            <stop stopColor="#6EFACC" offset="0%" />
                            <stop stopColor="#6EFACC" stopOpacity="0" offset="100%" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 0h4v4H0V0zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zM12 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM24 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM36 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM48 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM60 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM72 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM84 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM96 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4z"
                          fill="url(#squares-1-a)"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div
                      className="absolute hidden lg:-bottom-28 lg:left-40 lg:block"
                    >
                      <svg width="64" height="88" viewBox="0 0 64 88" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient x1="0%" y1="50%" x2="114.418%" y2="50%" id="squares-2-a">
                            <stop stopColor="#6EFACC" offset="0%" />
                            <stop stopColor="#6EFACC" stopOpacity="0" offset="100%" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M80 574h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4z"
                          transform="rotate(90 359 279)"
                          fill="url(#squares-2-a)"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div
                      className="absolute -top-48 left-96 hidden drop-shadow-2xl lg:block"
                    >
                      <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <radialGradient
                            cx="56.15%"
                            cy="27.43%"
                            fx="56.15%"
                            fy="27.43%"
                            r="57.526%"
                            gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
                            id="ball-1-a"
                          >
                            <stop stopColor="#eef2ff" offset="0%" />
                            <stop stopColor="#c7d2fe" offset="34.827%" />
                            <stop stopColor="#818cf8" offset="100%" />
                          </radialGradient>
                        </defs>
                        <circle cx="200" cy="200" r="200" fill="#ffffff" fillRule="evenodd" />
                        <circle cx="200" cy="200" r="200" fill="url(#ball-1-a)" fillRule="evenodd" />
                      </svg>
                    </div>
                    {/* <div
                      className="absolute z-9 top-20 h-29 left-16 hidden drop-shadow-2xl lg:block"
                    >
                   
                   </div> */}
                    <div
                      className="hero-ball hero-ball-2 absolute left-16 top-72 drop-shadow-2xl lg:-left-16 lg:top-80"
                     
                    >
                     
                      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <radialGradient
                            cx="56.15%"
                            cy="27.43%"
                            fx="56.15%"
                            fy="27.43%"
                            r="57.526%"
                            gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
                            id="ball-2-a"
                          >
                            <stop stopColor="#eef2ff" offset="0%" />
                            <stop stopColor="#c7d2fe" offset="34.827%" />
                            <stop stopColor="#818cf8" offset="100%" />
                          </radialGradient>
                        </defs>
                        <circle cx="100" cy="100" r="100" fill="#ffffff" fillRule="evenodd" />
                        <circle cx="100" cy="100" r="100" fill="url(#ball-2-a)" fillRule="evenodd" />
                      </svg>
                    </div>
                    <div  className="hero-illustration-browser drop-shadow-2xl relative">
                      <div className='absolute h-full w-full top-8'>
                            <ConsoleTerminal/>
                    </div>
                      <svg
                        className="ml-auto max-w-screen-sm lg:max-w-none"
                        width="800"
                        height="450"
                        viewBox="0 0 800 450"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        
                        <defs>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="browser-a">
                            <stop stopColor="#F89595" offset="0%" />
                            <stop stopColor="#EF5C5C" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="browser-b">
                            <stop stopColor="#FFDFB0" offset="0%" />
                            <stop stopColor="#FFBB78" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="browser-c">
                            <stop stopColor="#83E78D" offset="0%" />
                            <stop stopColor="#4BCA55" offset="100%" />
                          </linearGradient>
                          
                        </defs>
                        <g fill="none" fillRule="evenodd">
                          <rect width="800" height="450" rx="2" fill="#ffffff" filter="url(#dropshadow-1)" />
                          <rect width="800" height="450" rx="2" fill="#ffffff" />
                          <path fill="#e2e8f0" d="M0 32h800v1H0z" />
                          <circle fill="url(#browser-a)" cx="24" cy="16" r="4" />
                          <circle fill="url(#browser-b)" cx="40" cy="16" r="4" />
                          <circle fill="url(#browser-c)" cx="56" cy="16" r="4" />
                          <g filter="url(#browser-d)" transform="translate(505 196)" fillRule="nonzero">
                            <path
                              d="M100 100l100-50.426L103.193.762a7.087 7.087 0 0 0-6.393 0L0 49.574 100 100z"
                              fill="url(#browser-e)"
                            />
                            <path d="M199 90L99 139.875v-40L199 50v40z" fill="url(#browser-f)" />
                            <path d="M100 139.875L0 90V50l100 49.875v40z" fill="url(#browser-g)" />
                          </g>
                          <g strokeWidth="2">
                            <path
                              stroke="url(#browser-h)"
                              d="M498.336 298.7l-62.117 30.105L194 208"
                              transform="translate(169 54)"
                            />
                            <path
                              d="M511.219 127.805L269 7"
                              stroke="url(#browser-i)"
                              transform="translate(169 54)"
                            />
                            <path
                              d="M312 157.547L533.512 43"
                              stroke="url(#browser-j)"
                              transform="translate(169 54)"
                            />
                            <path
                              d="M222 114.547L443.512 0"
                              stroke="url(#browser-k)"
                              transform="translate(169 54)"
                            />
                            <path
                              d="M0 356.547L221.512 242"
                              stroke="url(#browser-l)"
                              transform="translate(169 54)"
                            />
                            <path
                              d="M215 319.266L312.031 268"
                              stroke="url(#browser-j)"
                              transform="translate(169 54)"
                            />
                          </g>
                        </g>
                      </svg>
                      </div>
                    <div
                      className="hero-ball hero-ball-3 absolute drop-shadow-2xl"
                      
                      style={{ top: '402px', left: '440px' }}
                    >
                      <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <radialGradient
                            cx="56.15%"
                            cy="27.43%"
                            fx="56.15%"
                            fy="27.43%"
                            r="57.526%"
                            gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
                            id="ball-3-a"
                          >
                            <stop stopColor="#eef2ff" offset="0%" />
                            <stop stopColor="#c7d2fe" offset="34.827%" />
                            <stop stopColor="#818cf8" offset="100%" />
                          </radialGradient>
                        </defs>
                        <circle cx="40" cy="40" r="40" fill="#ffffff" fillRule="evenodd" />
                        <circle cx="40" cy="40" r="40" fill="url(#ball-3-a)" fillRule="evenodd" />
                      </svg>
                    </div>
                    <div
                      className="hero-ball hero-ball-4 absolute -top-5 left-44 lg:-top-20 lg:left-72"
                      
                    >

                      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <radialGradient
                            cx="56.15%"
                            cy="27.43%"
                            fx="56.15%"
                            fy="27.43%"
                            r="57.526%"
                            gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
                            id="ball-4-a"
                          >
                            <stop stopColor="#eef2ff" offset="0%" />
                            <stop stopColor="#c7d2fe" offset="34.827%" />
                            <stop stopColor="#818cf8" offset="100%" />
                          </radialGradient>
                          <filter
                            x="-500%"
                            y="-500%"
                            width="1000%"
                            height="1000%"
                            filterUnits="objectBoundingBox"
                            id="dropshadow-ball-4"
                          >
                            <feOffset dx="24" dy="24" in="SourceAlpha" result="shadowOffsetOuter" />
                            <feGaussianBlur stdDeviation="24" in="shadowOffsetOuter" result="shadowBlurOuter" />
                            <feColorMatrix
                              values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
                              in="shadowBlurOuter"
                            />
                          </filter>
                        </defs>
                        <circle
                          cx="20"
                          cy="20"
                          r="20"
                          fill="#ffffff"
                          fillRule="evenodd"
                          filter="url(#dropshadow-ball-4)"
                        />
                        <circle cx="20" cy="20" r="20" fill="url(#ball-4-a)" fillRule="evenodd" />
                      </svg>
                    </div>
                    <div
                      className="hero-ball hero-ball-5 absolute lg:-bottom-20 lg:left-80"
                    
                    >

                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <radialGradient
                            cx="56.15%"
                            cy="27.43%"
                            fx="56.15%"
                            fy="27.43%"
                            r="57.526%"
                            gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
                            id="ball-5-a"
                          >
                            <stop stopColor="#eef2ff" offset="0%" />
                            <stop stopColor="#c7d2fe" offset="34.827%" />
                            <stop stopColor="#818cf8" offset="100%" />
                          </radialGradient>
                          <filter
                            x="-500%"
                            y="-500%"
                            width="1000%"
                            height="1000%"
                            filterUnits="objectBoundingBox"
                            id="dropshadow-ball-5"
                          >
                            <feOffset dx="24" dy="24" in="SourceAlpha" result="shadowOffsetOuter" />
                            <feGaussianBlur stdDeviation="24" in="shadowOffsetOuter" result="shadowBlurOuter" />
                            <feColorMatrix
                              values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
                              in="shadowBlurOuter"
                            />
                          </filter>
                        </defs>
                        <circle
                          cx="12"
                          cy="12"
                          r="12"
                          fill="#ffffff"
                          fillRule="evenodd"
                          filter="url(#dropshadow-ball-5)"
                        />
                        <circle cx="12" cy="12" r="12" fill="url(#ball-5-a)" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                </div>
              
            </div>
          </div>
        </section>
        
      </main>
      {<Plans/>}
    </div>
  )
}

export default HomePage
