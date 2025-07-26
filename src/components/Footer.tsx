import { Brain, Mail, Phone, MapPin, Twitter, Linkedin, Github, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "Product Overview", href: "/product" },
        { label: "Seven Pillars", href: "/pillars" },
        { label: "AI Advantage", href: "/ai-advantage" },
        { label: "Video Guide", href: "/guide" }
      ]
    },
    {
      title: "Community",
      links: [
        { label: "SDS Community", href: "/community" },
        { label: "Success Stories", href: "/stories" },
        { label: "Events", href: "/events" },
        { label: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Documentation", href: "/docs" },
        { label: "API Reference", href: "/api" },
        { label: "Contact Us", href: "/contact" },
        { label: "FAQ", href: "/faq" }
      ]
    },
    {
      title: "Dashboards",
      links: [
        { label: "Student Dashboard", href: "/dashboard/student" },
        { label: "Teacher Dashboard", href: "/dashboard/teacher" },
        { label: "Parent Dashboard", href: "/dashboard/parent" },
        { label: "Admin Dashboard", href: "/dashboard/admin" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-darker-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-electric-purple">SeenaDsaviour</span>
                  <span className="text-sm text-muted-foreground -mt-1">AI-Powered Education</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Revolutionizing education with AI-powered learning management systems. 
                Empowering students, teachers, parents, and administrators with intelligent insights and automation.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-electric-purple" />
                  <span className="text-muted-foreground">hello@seenadsaviour.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-neon-blue" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-neon-pink" />
                  <span className="text-muted-foreground">Silicon Valley, CA</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section, index) => (
              <div key={section.title} className="lg:col-span-1">
                <h4 className="text-foreground font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-electric-purple transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div>
              <h4 className="text-xl font-bold text-foreground mb-2">Stay Updated</h4>
              <p className="text-muted-foreground">
                Get the latest updates on AI innovations and educational technology.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-electric-purple focus:border-transparent outline-none transition-all duration-200"
              />
              <Button className="btn-futuristic px-6">
                <span>Subscribe</span>
              </Button>
            </div>
              <div className="flex items-center space-x-4 " >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-muted hover:border-electric-purple transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-electric-purple transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="text-sm text-muted-foreground text-center">
              <div>
                 <a href="/privacy" className="hover:text-electric-purple m1-1">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-electric-purple ml-1">Terms of Service</a> |
              <a href="/sdssecuritydisclosure" className="hover:text-electric-purple ml-1">SeenaDSaviour Security Disclosure Program</a> |
              <a href="/cookies"> Cookies prefrences</a>
              </div>
            
              <br />
              © 2024 SeenaDsaviour. All rights reserved.  
             
            </div>

           
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-electric-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-neon-blue/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;