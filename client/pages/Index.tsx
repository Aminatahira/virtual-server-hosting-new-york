import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Server, Globe, Shield, Clock, Zap, Users } from "lucide-react";

export default function Index() {
  const currentYear = new Date().getFullYear();

  const vpsPlans = [
    {
      name: "Starter VPS",
      price: "$12.50",
      period: "/month",
      specs: "1 vCore | 2 GB RAM | 20 GB SSD NVMe | 250 Mbps",
      description:
        "A great choice for testing, personal projects, and lightweight websites hosted directly in New York.",
      popular: false,
    },
    {
      name: "Value VPS",
      price: "$16.00",
      period: "/month",
      specs: "1 vCore | 2 GB RAM | 40 GB SSD NVMe | 250 Mbps",
      description:
        "Built for growing websites or lightweight apps that need East Coast proximity and consistent uptime.",
      popular: false,
    },
    {
      name: "Essential VPS",
      price: "$34.00",
      period: "/month",
      specs: "2 vCores | 4 GB RAM | 80 GB SSD NVMe | 500 Mbps",
      description:
        "Perfect for WordPress, WooCommerce, or business CMS hosting with low-latency access from New York.",
      popular: true,
    },
    {
      name: "Comfort VPS",
      price: "$54.00",
      period: "/month",
      specs: "4 vCores | 8 GB RAM | 160 GB SSD NVMe | 1 Gbps",
      description:
        "Designed for digital agencies and developers who need to manage multiple client sites in one powerful NY-based VPS.",
      popular: false,
    },
    {
      name: "Elite VPS",
      price: "$60.00",
      period: "/month",
      specs: "8 vCores | 32 GB RAM | 640 GB SSD NVMe | 2 Gbps",
      description:
        "Built for large apps, high-traffic portals, media servers, or real-time trading tools in the financial capital of the world.",
      popular: false,
    },
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "SSD NVMe Storage for Fast Performance",
      description:
        "Your apps load faster with cutting-edge NVMe SSD drives — offering up to 10x the speed of traditional storage.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "DDoS Protection & Real-Time Monitoring",
      description:
        "Keep your server online even during unexpected cyber threats with our integrated firewall and DDoS mitigation.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Expert Technical Support",
      description:
        "Our support team is available day and night to assist with server management, performance issues, or OS-level troubleshooting.",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Choice of Operating System",
      description:
        "Whether it's Ubuntu, CentOS, Debian, or Windows — choose the OS that works best for your project.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Scalable Anytime",
      description:
        "Need more resources? Easily scale your server RAM, storage, or CPU without any downtime or hassle.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Free Server Setup & Rebuilds",
      description:
        "Instantly deploy, rebuild, or reconfigure your New York VPS at any time through our simple control panel.",
    },
  ];

  const useCases = [
    {
      title: "Local Businesses in New York or East Coast",
      description:
        "Enjoy low-latency hosting that serves your audience where it matters most.",
    },
    {
      title: "Developers & Agencies",
      description:
        "Build, test, and launch your apps or websites on a flexible and secure server platform.",
    },
    {
      title: "Financial or Trading Platforms",
      description:
        "New York VPS is perfect for latency-sensitive operations like stock trading bots or real-time data feeds.",
    },
    {
      title: "Startups & Global Projects",
      description:
        "Deliver fast page loads and low ping times to users worldwide — starting from a strategic U.S. location.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a
                href="https://arzhost.com/"
                className="text-2xl font-bold text-primary"
              >
                ARZ Host
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="https://arzhost.com/vps/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                VPS Hosting
              </a>
              <a
                href="https://arzhost.com/region-based-vps/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                VPS Regions
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Lifetime Web Hosting
              </a>
              <a
                href="https://arzhost.com/about-us/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="https://arzhost.com/contact-us/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </nav>
            <Button asChild>
              <a href="https://arzhost.com/vps/">Get Started</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Virtual Server Hosting New York – Fast, Reliable & Powered by{" "}
            <a
              href="https://arzhost.com/"
              className="text-primary hover:underline"
            >
              ARZ Host
            </a>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Host in the Heart of New York – Power, Speed & Control in One Place
          </p>
          <p className="text-lg text-foreground mb-8 max-w-4xl mx-auto">
            Looking for{" "}
            <a
              href="https://arzhost.com/vps/"
              className="text-primary hover:underline"
            >
              VPS hosting Hong Kong
            </a>{" "}
            that combines blazing speed with top-level security and full
            control?
            <a
              href="https://arzhost.com/"
              className="text-primary hover:underline ml-1"
            >
              ArzHost
            </a>{" "}
            delivers powerful VPS solutions from its New York data center —
            offering the ideal environment for startups, developers, agencies,
            and growing businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <p className="text-lg font-semibold text-foreground">
              Launch your VPS in New York within minutes!
            </p>
          </div>
          <Button size="lg" asChild className="mr-4">
            <a href="https://arzhost.com/vps/">Get Started with ArzHost VPS</a>
          </Button>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Why Choose{" "}
            <a
              href="https://arzhost.com/"
              className="text-primary hover:underline"
            >
              ArzHost
            </a>{" "}
            Virtual Servers in New York?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Ultra-Low Latency for East Coast Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our New York-based VPS ensures lightning-fast connectivity for
                  users in the U.S. and Canada. Whether you serve local traffic
                  or need edge proximity to Wall Street — we've got you covered.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Perfect for Businesses in NYC & Beyond
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Host eCommerce sites, CRMs, SaaS platforms, or blogs — all on
                  high-performance SSD-backed virtual servers that scale as you
                  grow.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Full Root Access with Flexible Setup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get total control of your server environment. Install custom
                  applications, choose your operating system, and configure your
                  VPS the way you want.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Global Reach with Local Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  While based in NYC, our infrastructure connects globally —
                  making it ideal for both domestic and international visitors.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <a href="https://arzhost.com/vps/">Explore VPS Hosting Plans</a>
            </Button>
          </div>
        </div>
      </section>

      {/* VPS Plans Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            <a
              href="https://arzhost.com/vps/"
              className="text-primary hover:underline"
            >
              VPS Hosting
            </a>{" "}
            Plans from{" "}
            <a
              href="https://arzhost.com/"
              className="text-primary hover:underline"
            >
              ArzHost
            </a>{" "}
            (Live from NYC)
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            All plans include NVMe SSD, full root access, 24/7 expert support,{" "}
            <a
              href="https://en.wikipedia.org/wiki/DDoS_mitigation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              DDoS protection
            </a>
            , and free setup.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {vpsPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}
              >
                {plan.popular && (
                  <Badge
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                    variant="default"
                  >
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <CardDescription className="text-sm font-mono">
                    {plan.specs}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.description}
                  </p>
                  <Button className="w-full" asChild>
                    <a href="https://arzhost.com/vps/">
                      {plan.name === "Starter VPS"
                        ? "Launch This Plan"
                        : plan.name === "Value VPS"
                          ? "Select Value Plan"
                          : plan.name === "Essential VPS"
                            ? "Order Essential VPS"
                            : plan.name === "Comfort VPS"
                              ? "Get Comfort Plan"
                              : "Start Elite VPS Now"}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            What's Included in All NY VPS Plans?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Who Should Choose New York VPS by{" "}
            <a
              href="https://arzhost.com/"
              className="text-primary hover:underline"
            >
              ArzHost
            </a>
            ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why ArzHost Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Why{" "}
            <a
              href="https://arzhost.com/"
              className="text-primary hover:underline"
            >
              ArzHost
            </a>{" "}
            for New York-Based VPS?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="font-semibold">
                    Data Center in NYC with Reliable Uptime
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="font-semibold">
                    Fully Managed & Unmanaged Plans Available
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="font-semibold">
                    Secure Infrastructure with Privacy Controls
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="font-semibold">
                    Transparent Pricing with No Hidden Fees
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="font-semibold">
                    99.9% Uptime SLA & Instant Deployment
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <blockquote className="text-xl italic text-foreground mb-8 max-w-2xl mx-auto">
              "Choose{" "}
              <a
                href="https://arzhost.com/"
                className="text-primary hover:underline"
              >
                ArzHost
              </a>{" "}
              for reliable VPS hosting that delivers enterprise-grade
              performance with the simplicity your business needs."
            </blockquote>
            <Button size="lg" asChild>
              <a href="https://arzhost.com/vps/">
                Deploy Your New York VPS Today
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <a
                  href="https://arzhost.com/"
                  className="hover:text-primary transition-colors"
                >
                  ARZ Host
                </a>
              </h3>
              <p className="text-sm opacity-80 mb-4">
                Professional VPS hosting solutions with global reach and local
                performance.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  Website:{" "}
                  <a
                    href="https://arzhost.com/"
                    className="text-primary hover:underline"
                  >
                    arzhost.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+16315948060"
                    className="text-primary hover:underline"
                  >
                    +1 (631) 594-8060
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://arzhost.com/vps/"
                    className="opacity-80 hover:text-primary transition-colors"
                  >
                    VPS Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/region-based-vps/"
                    className="opacity-80 hover:text-primary transition-colors"
                  >
                    VPS Regions
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/lifetime-web-hosting/"
                    className="opacity-80 hover:text-primary transition-colors"
                  >
                    Lifetime Web Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/"
                    className="opacity-80 hover:text-primary transition-colors"
                  >
                    Our Hosting Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://arzhost.com/about-us/"
                    className="opacity-80 hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/contact-us/"
                    className="opacity-80 hover:text-primary transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://arzhost.com/terms-conditions/"
                    className="opacity-80 hover:text-primary transition-colors"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/privacy-policy/"
                    className="opacity-80 hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/disclaimer/"
                    className="opacity-80 hover:text-primary transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>
              &copy; {currentYear}{" "}
              <a
                href="https://arzhost.com/"
                className="text-primary hover:underline"
              >
                ARZ Host
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
