import { SUPABASE } from "./supabase.config";
export const MAX_PER_PAGE = 8;
export async function fetchData(table, condition, { page = null, sort }) {
  const { data, error } = page
    ? await SUPABASE.from(table)
        .select(condition)
        .range((page - 1) * MAX_PER_PAGE, page * MAX_PER_PAGE - 1)
        .order(sort.orderBy, { ascending: sort.asc })
    : await SUPABASE.from(table).select(condition);
  if (error) {
    console.error(error);
    return null;
  } else if (data) {
    return data;
  }
}
