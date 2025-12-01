
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './features/Dashboard';
import ItineraryBuilder from './features/ItineraryBuilder';
import { Feature } from './types';
import { FEATURES } from './constants';
import PackingAssistant from './features/PackingAssistant';
import SOS from './features/SOS';
import ExpenseManager from './features/ExpenseManager';
import MoodTracker from './features/MoodTracker';
import OfflineMaps from './features/OfflineMaps';
import TravelScrapbook from './features/TravelScrapbook';
import BookingManager from './features/BookingManager';
import LiveLocalGuide from './features/LiveLocalGuide';
import LanguageHelper from './features/LanguageHelper';
import SouvenirFinder from './features/SouvenirFinder';
import JetLagAssistant from './features/JetLagAssistant';
import LoginPage from './features/LoginPage';

const App: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<Feature>(FEATURES[0]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const renderFeature = () => {
    switch (activeFeature.id) {
      case 'dashboard':
        return <Dashboard setActiveFeature={setActiveFeature} />;
      case 'itinerary':
        return <ItineraryBuilder />;
      case 'language':
        return <LanguageHelper />;
      case 'guide':
        return <LiveLocalGuide />;
      case 'packing':
        return <PackingAssistant />;
      case 'souvenir':
        return <SouvenirFinder />;
      case 'jetlag':
        return <JetLagAssistant />;
      case 'booking':
        return <BookingManager />;
      case 'sos':
        return <SOS />;
      case 'expense':
        return <ExpenseManager />;
      case 'mood':
        return <MoodTracker />;
      case 'maps':
        return <OfflineMaps />;
      case 'scrapbook':
        return <TravelScrapbook />;
      default:
        return <Dashboard setActiveFeature={setActiveFeature} />;
    }
  };

  return (
    <div 
      className="h-screen w-full bg-cover bg-center" 
      style={{backgroundImage: `url('https://picsum.photos/seed/solaris-chic/1920/1080')`}}
    >
      {!isAuthenticated ? (
        <div className="h-screen bg-[#1a1818]/70 backdrop-blur-md">
          <LoginPage onLogin={() => setIsAuthenticated(true)} />
        </div>
      ) : (
        <div className="flex h-screen bg-[#1a1818]/70 backdrop-blur-md text-[#a3a3a3]">
          <Sidebar activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
          <main className="flex-1 p-8 overflow-y-auto">
            {renderFeature()}
          </main>
        </div>
      )}
    </div>
  );
};

export default App;