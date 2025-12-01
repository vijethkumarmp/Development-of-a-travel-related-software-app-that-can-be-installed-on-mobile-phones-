import React from 'react';
import { Feature } from './types';
import { HomeIcon } from './components/icons/HomeIcon';
import { CompassIcon } from './components/icons/CompassIcon';
import { MapIcon } from './components/icons/MapIcon';
import { CreditCardIcon } from './components/icons/CreditCardIcon';
import { ShieldIcon } from './components/icons/ShieldIcon';
import { MoodIcon } from './components/icons/MoodIcon';
import { BriefcaseIcon } from './components/icons/BriefcaseIcon';
import { CameraIcon } from './components/icons/CameraIcon';
import { TicketIcon } from './components/icons/TicketIcon';
import { LiveGuideIcon } from './components/icons/LiveGuideIcon';
import { LanguageIcon } from './components/icons/LanguageIcon';
import { SouvenirIcon } from './components/icons/SouvenirIcon';
import { JetLagIcon } from './components/icons/JetLagIcon';

export const FEATURES: Feature[] = [
  { 
    id: 'dashboard', 
    name: 'Dashboard', 
    Icon: HomeIcon,
    description: "Welcome! Get an overview of your trips and quick access to tools."
  },
  { 
    id: 'itinerary', 
    name: 'Smart Itinerary', 
    Icon: CompassIcon,
    description: "Let AI craft your perfect, personalized trip itinerary in seconds."
  },
  { 
    id: 'language', 
    name: 'Language Helper', 
    Icon: LanguageIcon,
    description: "Translate phrases, learn pronunciation, and use a handy phrasebook to communicate like a local."
  },
  {
    id: 'guide',
    name: 'Live Local Guide',
    Icon: LiveGuideIcon,
    description: "Your proactive AI companion. Get timely, context-aware suggestions, cultural tips, and navigation help as you explore."
  },
  { 
    id: 'packing', 
    name: 'Packing Assistant', 
    Icon: BriefcaseIcon,
    description: "Get a hyper-personalized packing list based on real-time weather and your planned activities. Never forget an essential again."
  },
  { 
    id: 'souvenir', 
    name: 'Souvenir Finder', 
    Icon: SouvenirIcon,
    description: "Your personal shopping guru. Find the perfect, authentic souvenir for anyone based on their interests and your budget."
  },
  { 
    id: 'jetlag', 
    name: 'Jet Lag Assistant', 
    Icon: JetLagIcon,
    description: "Get a personalized, science-based plan to minimize jet lag by managing your light exposure, sleep, and nutrition schedule."
  },
  { 
    id: 'booking', 
    name: 'Booking Manager', 
    Icon: TicketIcon,
    description: "Keep all your flight, hotel, and activity bookings organized in one central hub. No more frantic email searches."
  },
  { 
    id: 'expense', 
    name: 'Expense Manager', 
    Icon: CreditCardIcon,
    description: "Track group expenses, split bills in real-time, and manage multiple currencies with live conversion rates. Group travel finance made simple."
  },
  { 
    id: 'mood', 
    name: 'Mood Tracker', 
    Icon: MoodIcon,
    description: "Log your travel moods and discover what makes your trips amazing. Get insights to personalize future adventures based on your experiences."
  },
  { 
    id: 'maps', 
    name: 'Offline Maps', 
    Icon: MapIcon,
    description: "Your digital failsafe. Access maps, tickets, and all critical trip info offline, ensuring you're never stranded without data."
  },
  { 
    id: 'scrapbook', 
    name: 'Travel Scrapbook', 
    Icon: CameraIcon,
    description: "Create a living record of your adventures. Visualize past trips on a world map and track travel stats to gamify your journeys."
  },
  { 
    id: 'sos', 
    name: 'SOS & Safety', 
    Icon: ShieldIcon,
    description: "Your one-tap safety net. Access local emergency numbers, your hotel address in the local language, and share your location with trusted contacts."
  },
];
