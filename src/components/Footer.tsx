import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">James Edozie Nnadi</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Cloud DevOps & Site Reliability Engineer specializing in scaling tech infrastructure and client acquisition.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#results" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Results
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a 
                  href="mailto:james@example.com"
                  className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/80">
            <p>&copy; {currentYear} James Edozie Nnadi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
