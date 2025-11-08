/**
 * Date utilities for handling dates in New York timezone (America/New_York)
 * All dates in the investment calendar are based on Eastern Time (ET)
 */

/**
 * Parse a date string (YYYY-MM-DD) as if it's in New York timezone
 * This ensures consistent date display regardless of user's local timezone
 * 
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Date object representing the date at noon ET
 */
export function parseETDate(dateString: string): Date {
  // Parse as YYYY-MM-DD and treat as noon ET to avoid timezone issues
  const [year, month, day] = dateString.split('-').map(Number);
  // Create date at noon ET (12:00 PM) to avoid day boundary issues
  const date = new Date(year, month - 1, day, 12, 0, 0);
  return date;
}

/**
 * Get the month (0-11) from a date string in ET
 * 
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Month index (0-11)
 */
export function getETMonth(dateString: string): number {
  const date = parseETDate(dateString);
  return date.getMonth();
}

/**
 * Get the day of month from a date string in ET
 * 
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Day of month (1-31)
 */
export function getETDay(dateString: string): number {
  const date = parseETDate(dateString);
  return date.getDate();
}

/**
 * Format a date string for display in ET
 * 
 * @param dateString - Date string in YYYY-MM-DD format
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 */
export function formatETDate(
  dateString: string, 
  options: Intl.DateTimeFormatOptions = { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric',
    year: 'numeric',
    timeZone: 'America/New_York'
  }
): string {
  const date = parseETDate(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

/**
 * Check if a date string falls within a specific month in ET
 * 
 * @param dateString - Date string in YYYY-MM-DD format
 * @param month - Month index (0-11)
 * @param year - Year (default 2025)
 * @returns True if date is in the specified month
 */
export function isInETMonth(dateString: string, month: number, year: number = 2025): boolean {
  const date = parseETDate(dateString);
  return date.getMonth() === month && date.getFullYear() === year;
}

/**
 * Compare two date strings in ET
 * 
 * @param dateA - First date string
 * @param dateB - Second date string
 * @returns Negative if A < B, positive if A > B, 0 if equal
 */
export function compareETDates(dateA: string, dateB: string): number {
  const timeA = parseETDate(dateA).getTime();
  const timeB = parseETDate(dateB).getTime();
  return timeA - timeB;
}

/**
 * Get the current date in ET timezone
 * 
 * @returns Date object representing current time in ET
 */
export function getCurrentETDate(): Date {
  const now = new Date();
  // Convert to ET timezone
  const etString = now.toLocaleString('en-US', { timeZone: 'America/New_York' });
  return new Date(etString);
}

/**
 * Create an ICS-compatible date string in ET
 * 
 * @param dateString - Date string in YYYY-MM-DD format
 * @param timeString - Optional time string (e.g., "2:00 PM ET")
 * @returns ICS date string in format YYYYMMDDTHHMMSS
 */
export function toICSDate(dateString: string, timeString?: string): string {
  const date = parseETDate(dateString);
  
  if (timeString) {
    // Parse time from string like "2:00 PM ET" or "8:30 AM ET"
    const timeMatch = timeString.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
    if (timeMatch) {
      let hours = parseInt(timeMatch[1], 10);
      const minutes = parseInt(timeMatch[2], 10);
      const period = timeMatch[3].toUpperCase();
      
      if (period === 'PM' && hours !== 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;
      
      date.setHours(hours, minutes, 0, 0);
    }
  } else {
    // Default to 9:00 AM ET if no time specified
    date.setHours(9, 0, 0, 0);
  }
  
  // Format as YYYYMMDDTHHMMSS
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const mins = String(date.getMinutes()).padStart(2, '0');
  const secs = String(date.getSeconds()).padStart(2, '0');
  
  return `${year}${month}${day}T${hours}${mins}${secs}`;
}

/**
 * Get timezone display string
 * 
 * @returns "ET" or "EST/EDT" depending on preference
 */
export function getTimezoneDisplay(): string {
  return 'ET'; // Eastern Time (covers both EST and EDT)
}
