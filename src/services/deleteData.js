import { SUPABASE } from "./supabase.config";

export default async function deleteData(table, id) {
  const { error } = await SUPABASE.from(table).delete().eq("id", id);
}
