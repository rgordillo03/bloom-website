import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Graceful fallback: if env vars are missing, we still export a stub
// so the build doesn't fail. The functions below handle missing keys.
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const isSupabaseConfigured = () => supabase !== null;

/**
 * Add an email to the waitlist.
 * Returns { success: true } on success, { success: false, error } on failure.
 * Treats "already on the list" as a success (better UX than an error).
 */
export async function joinWaitlist(email: string) {
  if (!supabase) {
    return {
      success: false,
      error: 'Supabase is not configured yet. Email saved locally.',
    };
  }

  const normalizedEmail = email.trim().toLowerCase();

  if (!normalizedEmail || !normalizedEmail.includes('@')) {
    return { success: false, error: 'Please enter a valid email.' };
  }

  const { error } = await supabase.from('waitlist').insert({
    email: normalizedEmail,
  });

  // 23505 = unique_violation = already on the list (treat as success)
  if (error && error.code !== '23505') {
    console.error('Waitlist insert error:', error);
    return { success: false, error: 'Something went wrong. Please try again.' };
  }

  return { success: true };
}

/**
 * Get the public count of waitlist signups.
 * Uses a SECURITY DEFINER function so no email data is exposed.
 * Returns 0 on error (silent failure — counter just doesn't show).
 */
export async function getWaitlistCount(): Promise<number> {
  if (!supabase) return 0;

  const { data, error } = await supabase.rpc('get_waitlist_count');

  if (error) {
    console.error('Waitlist count error:', error);
    return 0;
  }

  return Number(data) || 0;
}
