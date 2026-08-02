import { supabase } from "./supabase";

export async function getDetailingServices(bodyType: string) {
  const { data, error } = await supabase
    .from("detailing_master")
    .select("*")
    .eq("body_type", bodyType)
    .eq("status", true)
    .order("service_name", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}