// @ts-ignore - google-play-scraper doesn't have proper TypeScript types
import gplay from "google-play-scraper";

interface AppStoreData {
  title: string;
  description: string;
  icon: string;
  developer: string;
}

interface PlayStoreData {
  title: string;
  description: string;
  icon: string;
  developer: string;
}

/**
 * Extract App ID from App Store URL
 * Examples:
 * - https://apps.apple.com/in/app/voy-salir-planes-y-amigos/id1480241417 -> id1480241417
 * - https://apps.apple.com/app/id123456789 -> id123456789
 */
function extractAppStoreId(url: string): string | null {
  const match = url.match(/\/id(\d+)/);
  return match ? match[1] : null;
}

/**
 * Extract App ID from Play Store URL
 * Examples:
 * - https://play.google.com/store/apps/details?id=com.voy.salir -> com.voy.salir
 * - https://play.google.com/store/apps/details?id=com.example.app&hl=en -> com.example.app
 */
function extractPlayStoreId(url: string): string | null {
  const match = url.match(/[?&]id=([^&]+)/);
  return match ? match[1] : null;
}

/**
 * Fetch app data from App Store using iTunes Search API
 */
export async function fetchAppStoreData(
  url: string
): Promise<AppStoreData | null> {
  try {
    const appId = extractAppStoreId(url);
    if (!appId) {
      console.warn(`Could not extract App ID from URL: ${url}`);
      return null;
    }

    // iTunes Search API
    const response = await fetch(
      `https://itunes.apple.com/lookup?id=${appId}&country=in`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const app = data.results[0];
      return {
        title: app.trackName || app.collectionName || "",
        description: app.description || "",
        icon: app.artworkUrl512 || app.artworkUrl100 || "",
        developer: app.artistName || "",
      };
    }

    return null;
  } catch (error) {
    console.error(`Error fetching App Store data for ${url}:`, error);
    return null;
  }
}

/**
 * Fetch app data from Play Store using google-play-scraper
 */
export async function fetchPlayStoreData(
  url: string
): Promise<PlayStoreData | null> {
  try {
    const appId = extractPlayStoreId(url);
    if (!appId) {
      console.warn(`Could not extract App ID from URL: ${url}`);
      return null;
    }

    // @ts-ignore
    const app = await gplay.app({ appId });
    return {
      title: app.title || "",
      description: app.description || app.summary || "",
      icon: app.icon || "",
      developer: app.developer || "",
    };
  } catch (error) {
    console.error(`Error fetching Play Store data for ${url}:`, error);
    return null;
  }
}

/**
 * Fetch app data from both stores and merge the results
 */
export async function fetchAppData(
  appStoreLink?: string,
  playStoreLink?: string
): Promise<{
  title: string;
  description: string;
  icon: string;
  developer: string;
}> {
  let appStoreData: AppStoreData | null = null;
  let playStoreData: PlayStoreData | null = null;

  // Fetch from both stores in parallel
  const [appStore, playStore] = await Promise.all([
    appStoreLink ? fetchAppStoreData(appStoreLink) : Promise.resolve(null),
    playStoreLink ? fetchPlayStoreData(playStoreLink) : Promise.resolve(null),
  ]);

  appStoreData = appStore;
  playStoreData = playStore;

  // Prefer App Store data, fallback to Play Store
  const title = appStoreData?.title || playStoreData?.title || "";
  const description =
    appStoreData?.description || playStoreData?.description || "";
  const icon = appStoreData?.icon || playStoreData?.icon || "";
  const developer = appStoreData?.developer || playStoreData?.developer || "";

  // Clean up description - take first paragraph and limit length
  const cleanDescription = description
    .split("\n")
    .find((p) => p.trim().length > 0) || description;
  const limitedDescription =
    cleanDescription.length > 200
      ? cleanDescription.substring(0, 200) + "..."
      : cleanDescription;

  return {
    title: title || "App",
    description: limitedDescription || "Mobile app",
    icon,
    developer,
  };
}

