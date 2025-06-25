import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigationItems = [
    { id: 'hero', label: 'Home' },
    { id: 'abstract', label: 'Abstract' },
    { id: 'problem', label: 'Problem' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'results', label: 'Results' },
    { id: 'cost', label: 'Cost' },
    { id: 'team', label: 'Team' },
    { id: 'future', label: 'Future Work' },
    { id: 'acknowledgement', label: 'Acknowledgement' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-gray-200 z-50 transition-all duration-300">
      <div className="nav-progress" style={{ width: `${scrollProgress}%` }} />
      
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-[var(--color-secondary)]" />
            <span className="font-extrabold text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 bg-clip-text text-transparent tracking-widest drop-shadow-lg uppercase hover:scale-110 hover:bg-gradient-to-l hover:from-pink-400 hover:to-blue-500 transition-all duration-300 cursor-pointer">TEAM AZ</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id 
                    ? 'bg-[var(--color-secondary)] text-white shadow-md' 
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-secondary)] hover:bg-gray-100'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-secondary)] hover:bg-gray-100 transition-colors"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="grid grid-cols-2 gap-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`p-3 rounded-lg text-left transition-colors ${
                    activeSection === item.id
                      ? 'bg-[var(--color-secondary)] text-white'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-secondary)] hover:bg-gray-100'
                  }`}
                >
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;