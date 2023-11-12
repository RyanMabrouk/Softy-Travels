import { SUPABASE } from "./supabase.config";

export default async function postData(table, payload) {
  const { data, error } = await SUPABASE.from(table).insert(payload).select();
  return { data: data, error: error };
}
