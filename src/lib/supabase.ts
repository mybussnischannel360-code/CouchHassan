import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  phone: string | null;
  goal: string | null;
  role: 'student' | 'admin' | 'coach';
  membership_tier: 'free' | 'basic' | 'pro' | 'elite';
  membership_expires_at: string | null;
  created_at: string;
  updated_at: string;
};

export type TrainingLevel = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price_monthly: number;
  price_yearly: number;
  features: string[];
  icon: string | null;
  order_index: number;
  created_at: string;
};

export type Module = {
  id: string;
  level_id: string;
  title: string;
  description: string | null;
  order_index: number;
  created_at: string;
};

export type Lesson = {
  id: string;
  module_id: string;
  title: string;
  description: string | null;
  video_url: string | null;
  video_type: 'embed' | 'upload' | 'stream';
  duration_minutes: number;
  order_index: number;
  is_preview: boolean;
  created_at: string;
};

export type Testimonial = {
  id: string;
  user_id: string | null;
  name: string;
  avatar_url: string | null;
  content: string;
  rating: number;
  video_url: string | null;
  is_approved: boolean;
  featured: boolean;
  created_at: string;
};

export type Payment = {
  id: string;
  user_id: string;
  stripe_payment_intent_id: string | null;
  amount: number;
  currency: string;
  status: string;
  membership_tier: string | null;
  interval: 'monthly' | 'yearly' | null;
  created_at: string;
};
