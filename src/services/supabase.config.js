import { createClient } from "@supabase/supabase-js";
import { API_KEY, MAIN_URL } from "./Constants";
export const supabaseUrl = MAIN_URL;
const supabaseKey = API_KEY;
export const SUPABASE = createClient(supabaseUrl, supabaseKey);
