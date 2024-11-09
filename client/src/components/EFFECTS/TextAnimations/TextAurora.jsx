import { cn } from '@/lib/utils'
import React from 'react'

export const TextAurora = ({children = 'Aryan Panja', className, ...props}) => {
    return (
        <div {...props}>
            <div className="content">
                <h1 className={cn(`title text-[clamp(3rem,8vw,7rem)] font-extrabold tracking-[clamp(-1.75px,-0.25vw,-3.5px)] relative overflow-hidden bg-black m-0`, className)}>
                    {children}
                    <div className="aurora absolute inset-0 z-10 mix-blend-darken pointer-events-none">
                        <div className="aurora__item"></div>
                        <div className="aurora__item"></div>
                        <div className="aurora__item"></div>
                        <div className="aurora__item"></div>
                    </div>
                </h1>
            </div>
            <style jsx>{`
        .aurora__item {
          overflow: hidden;
          position: absolute;
          width: 60vw;
          height: 60vw;
          background-color: #00c2ff;
          border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
          filter: blur(1rem);
          mix-blend-mode: overlay;
        }

        .aurora__item:nth-of-type(1) {
          top: -50%;
          animation: aurora-border 6s ease-in-out infinite,
            aurora-1 12s ease-in-out infinite alternate;
        }

        .aurora__item:nth-of-type(2) {
          background-color: #ffc640;
          right: 0;
          top: 0;
          animation: aurora-border 6s ease-in-out infinite,
            aurora-2 12s ease-in-out infinite alternate;
        }

        .aurora__item:nth-of-type(3) {
          background-color: #33ff8c;
          left: 0;
          bottom: 0;
          animation: aurora-border 6s ease-in-out infinite,
            aurora-3 8s ease-in-out infinite alternate;
        }

        .aurora__item:nth-of-type(4) {
          background-color: #e54cff;
          right: 0;
          bottom: -50%;
          animation: aurora-border 6s ease-in-out infinite,
            aurora-4 24s ease-in-out infinite alternate;
        }

        @keyframes aurora-1 {
          0% {
            top: 0;
            right: 0;
          }
          50% {
            top: 100%;
            right: 75%;
          }
          75% {
            top: 100%;
            right: 25%;
          }
          100% {
            top: 0;
            right: 0;
          }
        }

        @keyframes aurora-2 {
          0% {
            top: -50%;
            left: 0%;
          }
          60% {
            top: 100%;
            left: 75%;
          }
          85% {
            top: 100%;
            left: 25%;
          }
          100% {
            top: -50%;
            left: 0%;
          }
        }

        @keyframes aurora-3 {
          0% {
            bottom: 0;
            left: 0;
          }
          40% {
            bottom: 100%;
            left: 75%;
          }
          65% {
            bottom: 40%;
            left: 50%;
          }
          100% {
            bottom: 0;
            left: 0;
          }
        }

        @keyframes aurora-4 {
          0% {
            bottom: -50%;
            right: 0;
          }
          50% {
            bottom: 0%;
            right: 40%;
          }
          90% {
            bottom: 50%;
            right: 25%;
          }
          100% {
            bottom: -50%;
            right: 0;
          }
        }

        @keyframes aurora-border {
          0% {
            border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
          }
          25% {
            border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%;
          }
          50% {
            border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%;
          }
          75% {
            border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%;
          }
          100% {
            border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
          }
        }
      `}</style>
        </div>
    )
}
