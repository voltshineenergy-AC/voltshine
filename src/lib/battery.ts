import { supabase } from "./supabase";

export async function getBatteryData() {
  const { data, error } = await supabase
    .from("battery_master")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}