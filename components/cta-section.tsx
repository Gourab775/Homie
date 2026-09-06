import { ArrowUpRight, ArrowRight } from "lucide-react"
import { AnimatedRevenueChart } from "./animated-revenue-chart"

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-bold font-sans tracking-tighter leading-none text-zinc-100 whitespace-nowrap">
          SIMPLIFY
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight max-w-4xl mx-auto mb-4 sm:mb-6 font-serif">
            Ready to simplify your rentals?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-10 text-sm sm:text-base">
            Join thousands of owners and tenants who trust Homie for their real estate transactions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="relative flex items-center justify-center gap-0 bg-foreground text-background rounded-full pl-5 sm:pl-6 pr-1.5 py-1.5 transition-all duration-300 group overflow-hidden">
              <span className="text-xs sm:text-sm pr-3 sm:pr-4">List a property</span>
              <span className="w-8 h-8 sm:w-10 sm:h-10 bg-background rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground" />
              </span>
            </button>

            <button className="relative flex items-center justify-center gap-0 border border-border rounded-full pl-5 sm:pl-6 pr-1.5 py-1.5 transition-all duration-300 group overflow-hidden">
              <span className="absolute inset-0 bg-foreground rounded-full scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300" />
              <span className="text-xs sm:text-sm text-foreground group-hover:text-background pr-3 sm:pr-4 relative z-10 transition-colors duration-300">
                Search properties
              </span>
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center relative z-10">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground group-hover:opacity-0 absolute transition-opacity duration-300" />
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground group-hover:text-background opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-center mb-10 sm:mb-16">
          <AnimatedRevenueChart />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          <div className="text-center">
            <p className="text-4xl sm:text-5xl md:text-7xl font-light text-foreground">50K+</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Users</p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl md:text-7xl font-light text-foreground">15K+</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Properties listed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl md:text-7xl font-light text-foreground">$12M+</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Transactions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
