
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mt-6">
      <a 
        href="https://www.linkedin.com/in/tien-lai-3aba6a193/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <a 
        href="mailto:tienlai@example.com" 
        className="social-icon"
        aria-label="Email"
      >
        <Mail size={20} />
      </a>
      <a 
        href="https://github.com/tienlai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="GitHub"
      >
        <Github size={20} />
      </a>
      <a 
        href="https://twitter.com/tienlai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Twitter"
      >
        <Twitter size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
