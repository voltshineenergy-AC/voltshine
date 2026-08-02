import { supabase } from "./supabase";

export async function getWindshield(
  make: string,
  model: string,
  year: number
) {
  const { data, error } = await supabase
    .from("windshield_master")
    .select("*")
    .eq("make", make)
    .eq("model", model)
    .lte("from_year", year)
    .gte("to_year", year)
    .eq("status", true);

  if (error) throw error;

  return data;
}