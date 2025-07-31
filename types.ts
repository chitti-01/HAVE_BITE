export enum UserRole {
  REPLATER = 'Replater',
  SHAREBITE = 'Sharebite',
  LOOKLOOKER = 'LookLooker',
  ADMIN = 'Admin',
}

export interface User {
  id: string;
  email: string;
  password?: string; // Should not be stored long-term, used for dummy auth
  role: UserRole;
  name: string;
}

export interface Donation {
  id: string;
  providerId: string;
  providerName: string;
  foodType: string;
  quantity: string;
  bestBefore: string;
  address: string;
  status: 'Pending' | 'Verified' | 'Distributed';
  qualityScore?: number;
  review?: Review;
  imageUrl?: string;
  pickupTimeWindow?: string;
  storageCondition?: string;
  claimedBy?: string;
}

export interface CompostDonation {
  id:string;
  providerId: string;
  providerName: string;
  foodType: string; // e.g., 'Vegetable Peels', 'Fruit Scraps', 'Coffee Grounds'
  quantity: string; // e.g., '1 bucket', '5 kg'
  address: string;
  status: 'Pending' | 'Verified' | 'Collected';
  imageUrl?: string;
  claimedBy?: string;
}

export interface Review {
  id: string;
  donationId: string;
  receiverId: string;
  rating: number; // 1-5
  comment: string;
}

export interface EntertainmentVideo {
  id: string;
  title: string;
  url: string; // a direct link to a video file or embed
  thumbnail: string;
}

export interface Recipe {
  name: string;
  region: string;
  description: string;
  ingredients: string[];
}

export interface FeaturedRecipe {
  id: string;
  name: string;
  imageUrl: string;
  ingredients: string[];
  instructions: string[];
}
