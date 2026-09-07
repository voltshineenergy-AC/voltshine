import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://voltshine.in";

  /*
   * STATIC SEO PAGES
   */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/battery`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/detailing`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/windshield`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pune`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ups`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solar`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  /*
   * DYNAMIC BATTERY VEHICLE PAGES
   *
   * Example:
   * /battery/maruti/swift
   * /battery/hyundai/creta
   * /battery/tata/nexon
   */
  const { data, error } = await supabase
    .from("battery_master")
    .select("make, model");

  if (error) {
    console.error("Sitemap battery query error:", error);

    return staticPages;
  }

  /*
   * Remove duplicate Make + Model combinations
   */
  const uniqueVehicles = new Map<
    string,
    {
      make: string;
      model: string;
    }
  >();

  for (const vehicle of data ?? []) {
    if (!vehicle.make || !vehicle.model) {
      continue;
    }

    const make = String(vehicle.make).trim();
    const model = String(vehicle.model).trim();

    const makeSlug = slugify(make);
    const modelSlug = slugify(model);

    if (!makeSlug || !modelSlug) {
      continue;
    }

    const key = `${makeSlug}/${modelSlug}`;

    if (!uniqueVehicles.has(key)) {
      uniqueVehicles.set(key, {
        make: makeSlug,
        model: modelSlug,
      });
    }
  }

  /*
   * CREATE BATTERY URLS
   */
  const batteryPages: MetadataRoute.Sitemap = Array.from(
    uniqueVehicles.values()
  ).map((vehicle) => ({
    url: `${baseUrl}/battery/${vehicle.make}/${vehicle.model}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  /*
   * FINAL SITEMAP
   */
  return [...staticPages, ...batteryPages];
}
