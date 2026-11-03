"use client"
import { useEffect, useRef, useState } from "react"
import { AnimatedText } from "./animated-text"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const targetProgress = useRef(0)
  const currentProgress = useRef(0)
  const animationFrame = useRef<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const updateProgress = () => {
      const difference = targetProgress.current - currentProgress.current
      currentProgress.current += difference * 0.12
      setScrollProgress(currentProgress.current)

      if (Math.abs(difference) > 0.001) {
        animationFrame.current = requestAnimationFrame(updateProgress)
      } else {
        currentProgress.current = targetProgress.current
        setScrollProgress(targetProgress.current)
        animationFrame.current = null
      }
    }

    const handleScroll = () => {
      targetProgress.current = Math.min(window.scrollY / 400, 1)
      if (animationFrame.current === null) {
        animationFrame.current = requestAnimationFrame(updateProgress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  const easeOutQuad = (t: number) => t * (2 - t)
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

  const scale = 1 - easeOutQuad(scrollProgress) * 0.15
  const borderRadius = easeOutCubic(scrollProgress) * 48
  const heightVh = 100 - easeOutQuad(scrollProgress) * 37.5

  return (
    <section className="pt-32 pb-12 px-6 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 top-0 z-0 bg-zinc-900 bg-[url('/images/hero-bg.png')] bg-cover bg-center">
        <div
          className="w-full will-change-transform overflow-hidden"
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${borderRadius}px`,
            height: `${heightVh}vh`,
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/af7687fd-f2ad-4f2a-96f0-b56fa7d3769c-08wERpo5U1sktxs1vcRsJW9ueslNZv.mp4"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-10 flex items-end justify-center"
        style={{
          transform: `translateY(${scrollProgress * 150}px)`,
          opacity: 1 - scrollProgress * 0.8,
          height: "100%",
        }}
      >
        <span
          className="block text-white mix-blend-difference font-bold text-[28vw] sm:text-[25vw] md:text-[22vw] lg:text-[20vw] tracking-tighter select-none text-center leading-none"
          style={{ marginBottom: "0" }}
        >
          HOMIE
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="text-center mb-12">
          <div
            className={`transition-all duration-1000 delay-[800ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <h1 className="font-serif text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] 2xl:text-[8.5rem] font-normal leading-tight mb-6 w-full px-4 max-w-6xl mx-auto text-balance">
              <AnimatedText text="Find your home away from home" delay={0.3} />
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="relative z-30">
            <div
              className={`relative w-[234px] md:w-[281px] lg:w-[351px] will-change-transform transition-all duration-[1500ms] ease-out delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[400px]"
              }`}
            >
              <img
                src="/images/homie-app-interface.jpg"
                alt="Homie travel rental app interface"
                className="relative z-10 w-full h-auto rounded-[12%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
