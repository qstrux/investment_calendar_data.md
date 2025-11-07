import type { CalendarEvent } from "./investmentData";

/**
 * Generate ICS (iCalendar) file content for a calendar event
 */
export function generateICS(event: CalendarEvent): string {
  const eventDate = new Date(event.date);
  
  // Format date for ICS (YYYYMMDD)
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };

  // Parse time if available, otherwise use default times
  let startTime = '083000'; // 8:30 AM default
  let endTime = '093000';   // 9:30 AM default
  
  if (event.time) {
    if (event.time.includes('8:30 AM')) {
      startTime = '083000';
      endTime = '093000';
    } else if (event.time.includes('2:00 PM')) {
      startTime = '140000';
      endTime = '150000';
    } else if (event.time.includes('After Market Close')) {
      startTime = '160000'; // 4:00 PM
      endTime = '170000';   // 5:00 PM
    }
  }

  const dateStr = formatDate(eventDate);
  const startDateTime = `${dateStr}T${startTime}`;
  const endDateTime = `${dateStr}T${endTime}`;
  
  // Create timestamp for DTSTAMP
  const now = new Date();
  const timestamp = formatDate(now) + 'T' + 
    String(now.getHours()).padStart(2, '0') +
    String(now.getMinutes()).padStart(2, '0') +
    String(now.getSeconds()).padStart(2, '0') + 'Z';

  const description = event.description 
    ? `${event.description}\\n\\nSource: 2025 Investment Cycle Navigator | Jenna Ryan CFA`
    : 'Source: 2025 Investment Cycle Navigator | Jenna Ryan CFA';

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//2025 Investment Cycle Navigator//Jenna Ryan CFA//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.id}@investment-calendar.jenna-ryan.com`,
    `DTSTAMP:${timestamp}`,
    `DTSTART:${startDateTime}`,
    `DTEND:${endDateTime}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${description}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'BEGIN:VALARM',
    'TRIGGER:-PT1H',
    'ACTION:DISPLAY',
    'DESCRIPTION:Reminder: ' + event.title,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  return icsContent;
}

/**
 * Generate ICS file for multiple events
 */
export function generateMultipleICS(events: CalendarEvent[]): string {
  const now = new Date();
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };

  const timestamp = formatDate(now) + 'T' + 
    String(now.getHours()).padStart(2, '0') +
    String(now.getMinutes()).padStart(2, '0') +
    String(now.getSeconds()).padStart(2, '0') + 'Z';

  const eventBlocks = events.map(event => {
    const eventDate = new Date(event.date);
    let startTime = '083000';
    let endTime = '093000';
    
    if (event.time) {
      if (event.time.includes('8:30 AM')) {
        startTime = '083000';
        endTime = '093000';
      } else if (event.time.includes('2:00 PM')) {
        startTime = '140000';
        endTime = '150000';
      } else if (event.time.includes('After Market Close')) {
        startTime = '160000';
        endTime = '170000';
      }
    }

    const dateStr = formatDate(eventDate);
    const startDateTime = `${dateStr}T${startTime}`;
    const endDateTime = `${dateStr}T${endTime}`;
    
    const description = event.description 
      ? `${event.description}\\n\\nSource: 2025 Investment Cycle Navigator | Jenna Ryan CFA`
      : 'Source: 2025 Investment Cycle Navigator | Jenna Ryan CFA';

    return [
      'BEGIN:VEVENT',
      `UID:${event.id}@investment-calendar.jenna-ryan.com`,
      `DTSTAMP:${timestamp}`,
      `DTSTART:${startDateTime}`,
      `DTEND:${endDateTime}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${description}`,
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'BEGIN:VALARM',
      'TRIGGER:-PT1H',
      'ACTION:DISPLAY',
      'DESCRIPTION:Reminder: ' + event.title,
      'END:VALARM',
      'END:VEVENT'
    ].join('\r\n');
  }).join('\r\n');

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//2025 Investment Cycle Navigator//Jenna Ryan CFA//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    eventBlocks,
    'END:VCALENDAR'
  ].join('\r\n');

  return icsContent;
}

/**
 * Download ICS file
 */
export function downloadICS(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

/**
 * Generate Google Calendar URL
 */
export function generateGoogleCalendarUrl(event: CalendarEvent): string {
  const eventDate = new Date(event.date);
  
  // Format: YYYYMMDDTHHmmss
  let startTime = '083000';
  let endTime = '093000';
  
  if (event.time) {
    if (event.time.includes('8:30 AM')) {
      startTime = '083000';
      endTime = '093000';
    } else if (event.time.includes('2:00 PM')) {
      startTime = '140000';
      endTime = '150000';
    } else if (event.time.includes('After Market Close')) {
      startTime = '160000';
      endTime = '170000';
    }
  }

  const year = eventDate.getFullYear();
  const month = String(eventDate.getMonth() + 1).padStart(2, '0');
  const day = String(eventDate.getDate()).padStart(2, '0');
  
  const startDateTime = `${year}${month}${day}T${startTime}`;
  const endDateTime = `${year}${month}${day}T${endTime}`;
  
  const description = event.description 
    ? `${event.description}\n\nSource: 2025 Investment Cycle Navigator | Jenna Ryan CFA`
    : 'Source: 2025 Investment Cycle Navigator | Jenna Ryan CFA';

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${startDateTime}/${endDateTime}`,
    details: description,
    sf: 'true',
    output: 'xml'
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
