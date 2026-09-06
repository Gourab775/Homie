import Link from "next/link"
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  product: [
    { label: "Search", href: "#" },
    { label: "List", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "App", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  legal: [
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Legal", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Report", href: "#" },
  ],
}

export function Footer() {
  return (
    <div className="relative">
      <div className="absolute -top-[20vw] left-0 right-0 w-full h-[50vw] z-0 overflow-hidden">
        <Image src="/images/footer-bg.png" alt="Tuscan landscape" fill className="object-cover" priority />
      </div>

      <div className="absolute -top-[15vw] left-0 right-0 flex items-end justify-center overflow-visible pointer-events-none z-10">
        <h2 className="font-bold text-center text-[28vw] sm:text-[25vw] md:text-[22vw] lg:text-[20vw] leading-[0.85] tracking-tighter text-white whitespace-nowrap">
          HOMIE
        </h2>
      </div>

      <footer id="contact" className="relative z-20 border-t border-border py-10 sm:py-16 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-3 sm:mb-4">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span className="text-sm sm:text-base font-medium text-foreground">Homie</span>
              </Link>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Peer-to-peer rentals, simplified.</p>
              <div className="flex gap-3 sm:gap-4">
                <Link
                  href="#"
                  className="w-7 h-7 sm:w-9 sm:h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-7 h-7 sm:w-9 sm:h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-7 h-7 sm:w-9 sm:h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-7 h-7 sm:w-9 sm:h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-medium text-foreground mb-3 sm:mb-4 uppercase tracking-wider">Product</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.product.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-medium text-foreground mb-3 sm:mb-4 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.company.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-medium text-foreground mb-3 sm:mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.legal.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-medium text-foreground mb-3 sm:mb-4 uppercase tracking-wider">Support</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.support.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-[10px] sm:text-xs text-muted-foreground">© 2026 Homie. All rights reserved.</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground">Homie Inc. - Registered real estate agent</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
