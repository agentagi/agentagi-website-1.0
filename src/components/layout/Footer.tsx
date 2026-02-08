import { FaTwitter, FaTelegram } from 'react-icons/fa';
import Marquee from '../ui/Marquee';
import { SOCIAL_LINKS, FOOTER_LINKS, MARQUEE_FOOTER_TEXT } from '../../utils/constants';

const Footer = () => {
  return (
    <footer>
      {/* Footer Marquee */}
      <Marquee
        bgColor="bg-pudgy-navy"
        textColor="text-white"
        speed="normal"
        className="text-lg md:text-xl py-1"
      >
        {MARQUEE_FOOTER_TEXT}
      </Marquee>

      {/* Main Footer */}
      <div className="bg-cute-blue">
        <div className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Logo */}
            <div className="lg:col-span-2 flex flex-col items-start gap-4">
              <h3 className="text-3xl font-display text-pudgy-navy uppercase tracking-tight">
                $AGI
              </h3>
              <p className="text-pudgy-navy/80 font-medium text-sm">
                AgentPad's AI Agent Mascot
              </p>
            </div>

            {/* The Team */}
            <div>
              <h4 className="font-display text-pudgy-navy uppercase tracking-wider text-sm mb-4">
                THE TEAM
              </h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.theTeam.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-pudgy-navy/70 hover:text-pudgy-navy transition-colors font-medium text-sm uppercase"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Agent Lore */}
            <div>
              <h4 className="font-display text-pudgy-navy uppercase tracking-wider text-sm mb-4">
                AGENT LORE
              </h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.agentLore.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-pudgy-navy/70 hover:text-pudgy-navy transition-colors font-medium text-sm uppercase"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-display text-pudgy-navy uppercase tracking-wider text-sm mb-4">
                FOLLOW US
              </h4>
              <div className="flex gap-3">
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pudgy-navy text-white hover:bg-[#2a2a6e] transition-all duration-300 flex items-center justify-center text-lg"
                >
                  <FaTwitter />
                </a>
                <a
                  href={SOCIAL_LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pudgy-navy text-white hover:bg-[#2a2a6e] transition-all duration-300 flex items-center justify-center text-lg"
                >
                  <FaTelegram />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t-2 border-pudgy-navy/20 mt-10 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-pudgy-navy/70">
              <p className="font-medium uppercase text-xs tracking-wider">
                &copy; 2026 AgentPad $AGI. All Rights Reserved.
              </p>
              <div className="flex gap-6 text-xs uppercase tracking-wider font-medium">
                <a href="#" className="hover:text-pudgy-navy transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-pudgy-navy transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
