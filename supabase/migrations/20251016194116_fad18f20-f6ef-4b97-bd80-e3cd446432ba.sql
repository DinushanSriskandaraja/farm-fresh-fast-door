-- Create wishlists table for FarmEra landing page
CREATE TABLE public.wishlists (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  contact TEXT NOT NULL,
  location TEXT NOT NULL,
  preferred_products TEXT[] NOT NULL DEFAULT '{}',
  excitement_reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.wishlists ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert wishlists (public landing page)
CREATE POLICY "Anyone can insert wishlists"
ON public.wishlists
FOR INSERT
WITH CHECK (true);

-- Create policy to allow anyone to view wishlists (for admin purposes later)
CREATE POLICY "Anyone can view wishlists"
ON public.wishlists
FOR SELECT
USING (true);

-- Create index on location for demand mapping
CREATE INDEX idx_wishlists_location ON public.wishlists(location);

-- Create index on created_at for sorting
CREATE INDEX idx_wishlists_created_at ON public.wishlists(created_at DESC);