// src/pages/api/vote.ts
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_KEY
);

export const POST: APIRoute = async ({ request }) => {
  const { prompt, hex } = await request.json();

  const { error } = await supabase
    .from('color_votes')
    .insert([{ prompt, hex_code: hex }]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};