/**
 * Service to submit form submissions to Google Sheets via Google Apps Script Web App
 */

// Reads the Web App URL from environment variables, or falls back to an empty string.
const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || '';

export async function submitToGoogleSheets(data) {
  if (!SCRIPT_URL) {
    console.warn(
      'Google Sheets submission: VITE_GOOGLE_SHEETS_URL is not configured yet. ' +
      'Data logged to console:',
      data
    );
    return { success: true, simulated: true };
  }

  try {
    const payload = {
      timestamp: new Date().toISOString(),
      ...data
    };

    // Using POST with no-cors to avoid cross-origin restrictions from Google Apps Script in browser
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting form to Google Sheets:', error);
    return { success: false, error };
  }
}
