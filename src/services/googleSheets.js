/**
 * Service to submit form submissions to Google Sheets via Google Apps Script Web App
 */

// Default to the active Google Apps Script Web App URL if not defined in env
const DEFAULT_URL = 'https://script.google.com/macros/s/AKfycbzAA5RltwI4lN3tg_BTclIm5HGLFaw729Fk34Lywf3KXSSjRGMM-hWel-oIunrQmVcf/exec';
const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || DEFAULT_URL;

export async function submitToGoogleSheets(data) {
  const targetUrl = SCRIPT_URL || DEFAULT_URL;
  try {
    const payload = {
      timestamp: new Date().toISOString(),
      ...data
    };

    console.log('[Chandys] Transmitting to Google Sheets:', targetUrl, payload);

    await fetch(targetUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload)
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting form to Google Sheets:', error);
    return { success: false, error };
  }
}
