import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { MAIN_MENU, SERVICES_SUBMENU, SubmenuItem } from '../data/siteContent';
import { ParisMagicLogo } from './ParisMagicLogo';

interface NavbarProps {
  onSelectServiceFilter: (filter: NonNullable<SubmenuItem['filterValue']>) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSelectServiceFilter,
  onNavigateToSection,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(true);
  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setSubmenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSubmenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSubmenuClick = (item: SubmenuItem) => {
    if (item.filterValue) {
      onSelectServiceFilter(item.filterValue);
    }
    setSubmenuOpen(false);
    setMobileMenuOpen(false);
    onNavigateToSection(item.targetSection);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAFBFD]/95 backdrop-blur-md border-b border-[#1E3264]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Logo & Wordmark */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            onNavigateToSection('#inicio');
          }}
          className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB539F]"
        >
          <ParisMagicLogo
            size={42}
            showWordmark={true}
            wordmarkClassName="font-serif text-lg sm:text-xl xl:text-2xl font-semibold tracking-tight text-[#1E3264]"
          />
        </a>

        {/* Zone 2: Horizontal navigation links (Desktop lg: 1024px+ so tablet never overlaps) */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-normal text-[#42506B]"
        >
          {MAIN_MENU.map((item) => {
            if (item.hasSubmenu) {
              return (
                <div
                  key={item.label}
                  ref={submenuRef}
                  className="relative"
                  onMouseEnter={() => setSubmenuOpen(true)}
                  onMouseLeave={() => setSubmenuOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={submenuOpen}
                    aria-haspopup="true"
                    onClick={() => setSubmenuOpen((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 py-2 text-[#1E3264] hover:text-[#EB539F] transition-colors duration-150 whitespace-nowrap border-b border-transparent hover:border-[#EB539F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB539F]"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-150 ${
                        submenuOpen ? 'rotate-180 text-[#EB539F]' : 'text-[#42506B]'
                      }`}
                    />
                  </button>

                  {/* Accessible Submenu Dropdown */}
                  {submenuOpen && (
                    <div
                      role="menu"
                      aria-label="Submenú de servicios y planes"
                      className="absolute left-0 top-full pt-2 w-80 z-50"
                    >
                      <div className="bg-white rounded-2xl border-2 border-[#1E3264] shadow-[0_0_0_2px_#ffffff,0_0_0_4px_#EB539F] p-3 space-y-1">
                        <div className="px-3 py-1.5 border-b border-[#1E3264]/10">
                          <p className="text-xs font-semibold text-[#EB539F]">
                            Submenú · Planes y Servicios a Medida
                          </p>
                        </div>
                        {SERVICES_SUBMENU.map((subItem) => (
                          <button
                            key={subItem.id}
                            type="button"
                            role="menuitem"
                            onClick={() => handleSubmenuClick(subItem)}
                            className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#FDF2F8] transition-colors duration-150 group focus-visible:outline-2 focus-visible:outline-[#EB539F]"
                          >
                            <div className="text-sm font-semibold text-[#1E3264] group-hover:text-[#EB539F] transition-colors">
                              {subItem.label}
                            </div>
                            <div className="text-xs text-[#42506B] line-clamp-1 mt-0.5">
                              {subItem.description}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToSection(item.href);
                }}
                className={`${
                  item.hideBelowXl ? 'hidden xl:inline-flex' : 'inline-flex'
                } py-2 text-[#42506B] hover:text-[#EB539F] border-b border-transparent hover:border-[#EB539F] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EB539F]`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary action & Mobile/Tablet Menu Trigger */}
        <div className="flex items-center gap-3.5 pr-1 shrink-0">
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToSection('#contacto');
            }}
            className="hidden sm:inline-flex btn-logo-primary px-5 py-2 text-xs sm:text-sm font-semibold shrink-0"
          >
            Planificar mi viaje
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex lg:hidden btn-logo-secondary w-10 h-10 p-0 shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu Drawer (shown below lg: 1024px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#1E3264]/10 px-5 pt-3 pb-6 space-y-3 max-h-[82vh] overflow-y-auto shadow-lg">
          <div className="space-y-1">
            {MAIN_MENU.map((item) => {
              if (item.hasSubmenu) {
                return (
                  <div key={item.label} className="border-b border-[#1E3264]/8 pb-2">
                    <button
                      type="button"
                      aria-expanded={mobileSubmenuOpen}
                      onClick={() => setMobileSubmenuOpen((prev) => !prev)}
                      className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-[#1E3264]"
                    >
                      <span>{item.label} (Submenú)</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileSubmenuOpen ? 'rotate-180 text-[#EB539F]' : ''
                        }`}
                      />
                    </button>
                    {mobileSubmenuOpen && (
                      <div className="pl-3 mt-1 space-y-1 border-l-2 border-[#EB539F]">
                        {SERVICES_SUBMENU.map((subItem) => (
                          <button
                            key={subItem.id}
                            type="button"
                            onClick={() => handleSubmenuClick(subItem)}
                            className="w-full text-left py-2 px-2 rounded-lg hover:bg-[#FDF2F8]"
                          >
                            <div className="text-sm font-semibold text-[#1E3264]">
                              {subItem.label}
                            </div>
                            <div className="text-xs text-[#42506B]">{subItem.description}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    onNavigateToSection(item.href);
                  }}
                  className="block py-2.5 text-base text-[#1E3264] hover:text-[#EB539F] border-b border-[#1E3264]/8"
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 px-1">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigateToSection('#contacto');
              }}
              className="w-full inline-flex btn-logo-primary px-5 py-3 text-sm font-semibold"
            >
              Empezar a planificar mi viaje
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
