/**
 * formatDate - Formats a date string or Date object
 * @param date - Date string or Date object
 * @param locale - Locale string (default: 'en-US')
 */
export const formatDate = (
  date: string | Date,
  locale = 'en-US',
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' }
): string => {
  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
};

/**
 * timeAgo - Returns a human-readable relative time string
 */
export const timeAgo = (date: string | Date): string => {
  const diff = (Date.now() - new Date(date).getTime()) / 1000;
  if (diff < 60) return `${Math.floor(diff)}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
};
