import React from 'react';

export interface Feature {
  id: string;
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  description: string;
}

export type ActivityType = 'Food' | 'Sightseeing' | 'Travel' | 'Accommodation' | 'Shopping' | 'Entertainment' | 'Other';

export interface ItineraryActivity {
  time: string;
  description: string;
  details: string;
  location?: string;
  activity_type: ActivityType;
}

export interface ItineraryDay {
  day: number;
  date_suggestion: string;
  theme: string;
  activities: ItineraryActivity[];
}

export interface Itinerary {
  trip_title: string;
  destination: string;
  duration_days: number;
  itinerary_plan: ItineraryDay[];
}

export interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export interface LandmarkInfo {
  name: string;
  description: string;
  location: string;
  opening_hours?: string;
  wait_time?: string;
}

export interface DetailedLandmarkInfo {
  historical_context: string;
  visitor_reviews_summary: string;
}

export interface ScanHistoryEntry {
  landmark: LandmarkInfo;
  image: string; // base64 encoded image
  timestamp: string; // ISO date string
}

export interface PackingItem {
  item_name: string;
  quantity: string | number;
}

export interface PackingCategory {
  category_name: string;
  items: PackingItem[];
}

export interface PackingListResponse {
  trip_title: string;
  packing_list: PackingCategory[];
}

export interface TrustedContact {
  name: string;
  relationship: string;
}

export interface TripMember {
  id: number;
  name: string;
}

export type ExpenseCategory = 'Food' | 'Transport' | 'Accommodation' | 'Activities' | 'Shopping' | 'Other';

export interface Expense {
  id: number;
  description: string;
  amount: number;
  currency: string;
  paidBy: number; // Corresponds to TripMember id
  splitBetween: number[]; // Array of TripMember ids
  category: ExpenseCategory;
}

export interface SimplifiedDebt {
  from: number; // TripMember id
  to: number; // TripMember id
  amount: number;
}

export type Mood = 'Ecstatic' | 'Happy' | 'Neutral' | 'Sad' | 'Stressed';

export interface MoodEntry {
  id: number;
  mood: Mood;
  activities: string[];
  location: string;
  notes: string;
  timestamp: string;
}

export interface MoodInsight {
  insight_title: string;
  pattern_description: string;
  travel_suggestion: string;
  // Category helps in picking an icon for the UI
  category: 'Activity' | 'Location' | 'Pacing' | 'Social' | 'Other';
}

export interface MoodInsightResponse {
  insights: MoodInsight[];
}

export interface VisitedPlace {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  bookingId: number; // Link back to the original booking
  status: 'past' | 'upcoming';
}

export interface OfflineFlight {
  airline: string;
  flightNumber: string;
  departure: { city: string; code: string; time: string; };
  arrival: { city: string; code: string; time: string; };
  gate: string;
  seat: string;
}

export interface OfflineHotel {
  name: string;
  address: string;
  checkIn: string;
  checkOut: string;
  confirmationNumber: string;
}

export interface OfflineContact {
  name: string;
  number: string;
  type: 'Emergency' | 'Info';
}

export interface EmergencyContact {
  service: 'Police' | 'Ambulance' | 'Fire';
  number: string;
}

// Booking System Types
export type BookingType = 'Flight' | 'Hotel' | 'Car Rental' | 'Activity' | 'Cab';

export interface Attachment {
  name: string;
  type: string; // MIME type
  data: string; // base64 encoded data
}

export interface BaseBooking {
  id: number;
  type: BookingType;
  notes?: string;
  attachments?: Attachment[];
  reminder?: string; // e.g., 'none', '1h', '1d'
}

export interface FlightBooking extends BaseBooking {
  type: 'Flight';
  airline: string;
  flightNumber: string;
  confirmationNumber: string;
  departure: { airport: string; code: string; dateTime: string };
  arrival: { airport: string; code: string; dateTime: string };
}

export interface HotelBooking extends BaseBooking {
  type: 'Hotel';
  hotelName: string;
  address: string;
  checkInDate: string;
  checkOutDate: string;
  confirmationNumber: string;
}

export interface CarRentalBooking extends BaseBooking {
  type: 'Car Rental';
  company: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDateTime: string;
  dropoffDateTime: string;
  confirmationNumber: string;
}

export interface ActivityBooking extends BaseBooking {
  type: 'Activity';
  name: string;
  location: string;
  date: string;
  time: string;
  confirmationNumber?: string;
}

export interface CabBooking extends BaseBooking {
  type: 'Cab';
  cabCompany: string;
  pickupLocation: string;
  dropoffLocation?: string;
  pickupDateTime: string;
  confirmationNumber?: string;
  driverName?: string;
  driverContact?: string;
  bookingLink?: string; // Link to the booking website
}


export type Booking = FlightBooking | HotelBooking | CarRentalBooking | ActivityBooking | CabBooking;

// Scrapbook Types
export interface JournalEntry {
    notes: string;
    photos: Attachment[];
}

// Language Helper Types
export interface TranslationResponse {
  translation: string;
  pronunciation_guide: string;
}

export interface Phrase {
  source_phrase: string;
  translated_phrase: string;
  pronunciation_guide: string;
}

export interface PhrasebookResponse {
  phrases: Phrase[];
}

// AR Menu Scan Types
export interface MenuItem {
  item_name: string;
  translation: string;
  description: string;
  calorie_estimate: number;
}

export interface MenuAnalysisResponse {
  menu_items: MenuItem[];
}

// Souvenir Finder Types
export interface SouvenirSuggestion {
  souvenir_name: string;
  description: string;
  shop_name: string;
  shop_location: string;
  price_range: string;
  category: 'Craft' | 'Food' | 'Fashion' | 'Pop Culture' | 'Unique';
}

export interface SouvenirResponse {
  suggestions: SouvenirSuggestion[];
}

// Jet Lag Assistant Types
export type JetLagActionCategory = 'Light' | 'Sleep' | 'Nutrition' | 'Activity' | 'Other';

export interface JetLagAction {
  time_description: string;
  action_title: string;
  action_description: string;
  category: JetLagActionCategory;
}

export interface JetLagPhase {
  phase_name: 'Pre-Flight Adjustment' | 'During The Flight' | 'Post-Flight Recovery';
  actions: JetLagAction[];
}

export interface JetLagPlanResponse {
  plan_title: string;
  plan_summary: string;
  plan_phases: JetLagPhase[];
}