
import React, { useState, useCallback } from 'react';
import { Page } from './types';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import TextToImagePage from './pages/TextToImagePage';
import SettingsPage from './pages/SettingsPage';
import PlaceholderPage from './pages/PlaceholderPage';

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('Text to Image');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSetPage = useCallback((page: Page) => {
    setActivePage(page);
    setSidebarOpen(false);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <HomePage />;
      case 'Text to Image':
        return <TextToImagePage />;
      case 'Settings':
        return <SettingsPage />;
      default:
        return <PlaceholderPage pageTitle={activePage} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar activePage={activePage} setActivePage={handleSetPage} isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white md:justify-end h-16">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-gray-500 hover:text-gray-700"
              aria-label="Open sidebar"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-semibold md:hidden">{activePage}</h1>
            <div className="flex items-center space-x-4">
               {/* Header content like profile, notifications etc. can go here */}
            </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50">
          {renderPage()}
        </div>
      </main>
    </div>
  );
};

export default App;