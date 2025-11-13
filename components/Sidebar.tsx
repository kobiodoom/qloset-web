import React, { useState } from 'react';
import { Page } from '../types';

interface IconProps {
  className?: string;
}

const HomeIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const SparklesIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);

const SettingsIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.007 1.11-.962a8.25 8.25 0 0 1 8.25 8.25c0 .548-.42.997-.962 1.11-.252.05-.506.078-.766.078h-.991a.75.75 0 0 1-.75-.75V11.3a.75.75 0 0 0-.75-.75h-.991a.75.75 0 0 0-.75.75v.75c0 .414.336.75.75.75h.991c.26 0 .514.028.766.078.55.105 1.02.57 1.11.962.09.542.09 1.103 0 1.645-.09.543-.56 1.007-1.11.962a8.25 8.25 0 0 1-8.25-8.25c0-.548.42-1.007.962-1.11a48.06 48.06 0 0 1 1.532 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75a7.5 7.5 0 0 1 11.474-5.023.75.75 0 0 0 .755-.755A8.25 8.25 0 0 0 3 10.5a.75.75 0 0 0 .75-.75Z" />
  </svg>
);

const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const CloseIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);


interface SidebarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const designStudioPages: Page[] = [
  'Virtual Try-On',
  'Text to Image',
  'Image to Flat Lay',
  'Image to Ghost Mannequin',
  'Image to Tech Pack',
  'Image to 3D',
  'Image to Video',
  'Image to GIF',
  'Model Swap',
];

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, isOpen, setIsOpen }) => {
  const [isStudioOpen, setStudioOpen] = useState(true);

  const NavItem: React.FC<{ page: Page; icon: React.ReactNode }> = ({ page, icon }) => (
    <li>
      <button
        onClick={() => setActivePage(page)}
        className={`w-full flex items-center p-2 rounded-lg text-left transition-colors duration-200 ${
          activePage === page
            ? 'bg-black text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        {icon}
        <span className="ml-3 font-medium">{page}</span>
      </button>
    </li>
  );

  const SubNavItem: React.FC<{ page: Page }> = ({ page }) => (
    <li>
      <button
        onClick={() => setActivePage(page)}
        className={`w-full text-left p-2 pl-11 text-sm rounded-lg transition-colors duration-200 ${
          activePage === page
            ? 'font-semibold text-black'
            : 'text-gray-500 hover:bg-gray-100 hover:text-black'
        }`}
      >
        {page.replace('Virtual Try-On/ ', '')}
      </button>
    </li>
  );

  return (
     <>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}></div>
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r border-gray-200 transform transition-transform md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 h-16">
            <img src="/qloset_logo.png" alt="qloset Logo" className="h-8 w-auto" />
            <button onClick={() => setIsOpen(false)} className="md:hidden text-gray-400 hover:text-gray-600">
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-4 overflow-y-auto">
            <ul className="space-y-2">
              <NavItem page="Home" icon={<HomeIcon className="w-5 h-5" />} />
              <li>
                <button
                  onClick={() => setStudioOpen(!isStudioOpen)}
                  className="w-full flex items-center justify-between p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <SparklesIcon className="w-5 h-5" />
                    <span className="ml-3 font-medium">Design Studio</span>
                  </div>
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${isStudioOpen ? 'rotate-180' : ''}`} />
                </button>
                {isStudioOpen && (
                  <ul className="pt-2 space-y-1">
                    {designStudioPages.map(page => <SubNavItem key={page} page={page} />)}
                  </ul>
                )}
              </li>
              <NavItem page="Settings" icon={<SettingsIcon className="w-5 h-5" />} />
            </ul>
          </nav>
        </div>
      </aside>
     </>
  );
};

export default Sidebar;