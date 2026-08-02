import { supabase } from "./supabase";

export async function getMakes() {
  const response = await supabase
    .from("vehicles")
    .select("make");

  console.log(response);

  if (response.error) {
    throw response.error;
  }

  return [...new Set(response.data.map((item: any) => item.make))];
}

export async function getModels(make: string) {
  const { data, error } = await supabase
    .from("vehicles")
    .select("model")
    .eq("make", make);

  if (error) {
    console.error("getModels Error:", error);
    throw error;
  }

  return [...new Set(data.map((item: any) => item.model))].sort();
}

export async function getYears(make: string, model: string) {
  const { data, error } = await supabase
    .from("vehicles")
    .select("from_year,to_year")
    .eq("make", make)
    .eq("model", model);

  if (error) {
    console.error("getYears Error:", error);
    throw error;
  }

  const years = new Set<number>();

  data.forEach((row: any) => {
    for (let y = row.from_year; y <= row.to_year; y++) {
      years.add(y);
    }
  });

  return Array.from(years).sort((a, b) => b - a);
}

export async function getFuels(
  make: string,
  model: string,
  year: number
) {
  const { data, error } = await supabase
    .from("vehicles")
    .select("fuel")
    .eq("make", make)
    .eq("model", model)
    .lte("from_year", year)
    .gte("to_year", year);

  if (error) {
    console.error("getFuels Error:", error);
    throw error;
  }

  return [...new Set(data.map((item: any) => item.fuel))];
}
export async function getBattery(
  make: string,
  model: string,
  year: number,
  fuel: string
) {
  console.log("Searching Values:", {
    make,
    model,
    year,
    fuel,
    yearType: typeof year,
  });

  const { data, error } = await supabase
    .from("battery_master")
    .select("*")
    .eq("make", make)
    .eq("model", model)
    .eq("fuel", fuel)
    .lte("from_year", year)
    .gte("to_year", year)
    .eq("status", true);

  console.log("Supabase Error:", error);
  console.log("Battery Found:", data);

  return data ?? [];
}
export async function getBodyType(
  make: string,
  model: string,
  year: number,
  fuel: string
) {
  const { data, error } = await supabase
    .from("vehicles")
    .select("body_type")
    .eq("make", make)
    .eq("model", model)
    .eq("fuel", fuel)
    .lte("from_year", year)
    .gte("to_year", year)
    .limit(1)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data.body_type;
}