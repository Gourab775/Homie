"use client"

import { useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { PropertyBookingCard } from "./property-booking-card"

const properties = [
  {
    propertyName: "Sunset Beach Villa",
    location: "Malibu, California",
    duration: "Min. 3 nights",
    availableDate: "Available now",
    image: "/images/property-beach-villa.jpg",
    pricePerNight: 450,
    propertyType: "Beachfront Villa",
    features: ["Ocean View", "Private Beach", "Hot Tub", "Chef Kitchen"],
    amenities: ["Free Wifi", "Parking", "Pool"],
    rating: 4.9,
  },
  {
    propertyName: "Mountain Retreat Cabin",
    location: "Aspen, Colorado",
    duration: "Min. 2 nights",
    availableDate: "Dec 15 - Jan 30",
    image: "/images/property-mountain-cabin.jpg",
    pricePerNight: 320,
    propertyType: "Mountain Cabin",
    features: ["Ski-in/Ski-out", "Fireplace", "Mountain Views", "Game Room"],
    amenities: ["Free Wifi", "Parking", "4 Guests"],
    rating: 4.8,
  },
  {
    propertyName: "Downtown Luxury Loft",
    location: "New York City, NY",
    duration: "Min. 1 night",
    availableDate: "Available now",
    image: "/images/property-city-loft.jpg",
    pricePerNight: 280,
    propertyType: "City Loft",
    features: ["Skyline View", "Rooftop Access", "Designer Interior", "Central Location"],
    amenities: ["Free Wifi", "2 Guests", "Parking"],
    rating: 4.7,
  },
  {
    propertyName: "Tuscan Countryside Estate",
    location: "Florence, Italy",
    duration: "Min. 4 nights",
    availableDate: "Available now",
    image: "/images/property-tuscan-estate.jpg",
    pricePerNight: 520,
    propertyType: "Country Estate",
    features: ["Vineyard Views", "Private Pool", "Wine Cellar", "Olive Grove"],
    amenities: ["Free Wifi", "Parking", "8 Guests"],
    rating: 4.9,
  },
  {
    propertyName: "Tropical Paradise Bungalow",
    location: "Bali, Indonesia",
    duration: "Min. 2 nights",
    availableDate: "Available now",
    image: "/images/property-tropical-bungalow.jpg",
    pricePerNight: 180,
    propertyType: "Jungle Bungalow",
    features: ["Rice Terrace View", "Open Air Living", "Private Garden", "Yoga Deck"],
    amenities: ["Free Wifi", "Pool", "2 Guests"],
    rating: 4.8,
  },
  {
    propertyName: "Lakefront Modern House",
    location: "Lake Tahoe, California",
    duration: "Min. 3 nights",
    availableDate: "Year-round",
    image: "/images/property-lakefront-modern.jpg",
    pricePerNight: 380,
    propertyType: "Lakefront Home",
    features: ["Lake Access", "Private Dock", "Floor-to-ceiling Windows", "Hot Tub"],
    amenities: ["Free Wifi", "Parking", "6 Guests"],
    rating: 4.9,
  },
]

export function PricingSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef(0)
  const isHoveredRef = useRef(false)
  const animationRef = useRef<number | null>(null)
  // Mouse-controlled glide via the side arrows; null when auto-scrolling
  const glideRef = useRef<{ from: number; to: number; start: number } | null>(null)

  // Glide the carousel by one card pitch (smooth tween inside the rAF loop)
  const glideBy = (direction: 1 | -1) => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    const firstCard = scrollContainer.firstElementChild as HTMLElement | null
    const pitch = (firstCard ? firstCard.offsetWidth : 400) + 24
    const totalWidth = scrollContainer.scrollWidth / 3
    let from = positionRef.current
    if (direction < 0 && from < totalWidth) {
      // Reposition to the identical spot in a later copy first, so gliding
      // backward never reveals an empty gap at the left edge
      from += totalWidth
      positionRef.current = from
    }
    glideRef.current = { from, to: from + direction * pitch, start: performance.now() }
  }

  const duplicatedProperties = [...properties, ...properties, ...properties]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime

      const totalWidth = scrollContainer.scrollWidth / 3

      if (glideRef.current) {
        const glide = glideRef.current
        const t = Math.min((currentTime - glide.start) / 400, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        positionRef.current = glide.from + (glide.to - glide.from) * eased
        if (t >= 1) {
          // Snap to the equivalent spot in the first copy (seamless, tripled content)
          glideRef.current = null
          positionRef.current = ((glide.to % totalWidth) + totalWidth) % totalWidth
        }
      } else {
        const speed = isHoveredRef.current ? 0.3 : 1
        positionRef.current += speed * (deltaTime / 16)

        if (positionRef.current >= totalWidth) {
          positionRef.current -= totalWidth
        }
      }

      scrollContainer.style.transform = `translateX(-${positionRef.current}px)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <section id="pricing" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">Featured properties</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Discover handpicked homes from verified owners. Book with confidence.
        </p>
      </div>

      <div
        className="relative w-full"
        onMouseEnter={() => {
          isHoveredRef.current = true
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false
        }}
      >
        <div ref={scrollRef} className="flex gap-6" style={{ width: "fit-content" }}>
          {duplicatedProperties.map((property, index) => (
            <div key={index} className="flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-[400px]">
              <PropertyBookingCard {...property} onBook={() => console.log(`Booking ${property.propertyName}`)} />
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Scroll to previous property"
          onClick={() => glideBy(-1)}
          className="absolute left-6 top-1/2 z-10 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur border border-border shadow-lg flex items-center justify-center hover:bg-foreground hover:text-background transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          aria-label="Scroll to next property"
          onClick={() => glideBy(1)}
          className="absolute right-6 top-1/2 z-10 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur border border-border shadow-lg flex items-center justify-center hover:bg-foreground hover:text-background transition-colors cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
