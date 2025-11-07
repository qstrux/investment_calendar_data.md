export interface CalendarEvent {
  id: string;
  date: string;
  title: string;
  category: 'fomc' | 'economic' | 'earnings' | 'risk';
  description?: string;
  time?: string;
}

export const fomcMeetings: CalendarEvent[] = [
  { id: 'fomc-1', date: '2025-01-29', title: 'FOMC Meeting', category: 'fomc', description: 'Rate Decision', time: '2:00 PM ET' },
  { id: 'fomc-2', date: '2025-03-19', title: 'FOMC Meeting', category: 'fomc', description: 'Rate Decision + Economic Projections (Dot Plot)', time: '2:00 PM ET' },
  { id: 'fomc-3', date: '2025-04-30', title: 'FOMC Meeting', category: 'fomc', description: 'Rate Decision', time: '2:00 PM ET' },
  { id: 'fomc-4', date: '2025-06-18', title: 'FOMC Meeting', category: 'fomc', description: 'Rate Decision + Economic Projections (Dot Plot)', time: '2:00 PM ET' },
  { id: 'fomc-5', date: '2025-07-30', title: 'FOMC Meeting', category: 'fomc', description: 'Rate Decision', time: '2:00 PM ET' },
  { id: 'fomc-6', date: '2025-09-17', title: 'FOMC Meeting', category: 'fomc', description: 'Rate Decision + Economic Projections (Dot Plot)', time: '2:00 PM ET' },
  { id: 'fomc-7', date: '2025-10-29', title: 'FOMC Meeting', category: 'fomc', description: 'Rate Decision', time: '2:00 PM ET' },
  { id: 'fomc-8', date: '2025-12-10', title: 'FOMC Meeting', category: 'fomc', description: 'Rate Decision + Economic Projections (Dot Plot)', time: '2:00 PM ET' },
];

export const economicData: CalendarEvent[] = [
  // CPI Data
  { id: 'cpi-1', date: '2025-02-12', title: 'CPI (Jan)', category: 'economic', time: '8:30 AM ET' },
  { id: 'cpi-2', date: '2025-03-12', title: 'CPI (Feb)', category: 'economic', time: '8:30 AM ET' },
  { id: 'cpi-3', date: '2025-04-10', title: 'CPI (Mar)', category: 'economic', time: '8:30 AM ET' },
  { id: 'cpi-4', date: '2025-05-13', title: 'CPI (Apr)', category: 'economic', time: '8:30 AM ET' },
  { id: 'cpi-5', date: '2025-06-11', title: 'CPI (May)', category: 'economic', time: '8:30 AM ET' },
  { id: 'cpi-6', date: '2025-07-15', title: 'CPI (Jun)', category: 'economic', time: '8:30 AM ET' },
  { id: 'cpi-7', date: '2025-08-12', title: 'CPI (Jul)', category: 'economic', time: '8:30 AM ET' },
  { id: 'cpi-8', date: '2025-09-11', title: 'CPI (Aug)', category: 'economic', time: '8:30 AM ET' },
  { id: 'cpi-9', date: '2025-10-24', title: 'CPI (Sep)', category: 'economic', time: '8:30 AM ET' },
  { id: 'cpi-10', date: '2025-11-13', title: 'CPI (Oct)', category: 'economic', time: '8:30 AM ET' },
  { id: 'cpi-11', date: '2025-12-10', title: 'CPI (Nov)', category: 'economic', time: '8:30 AM ET' },
  
  // PPI Data
  { id: 'ppi-1', date: '2025-02-13', title: 'PPI (Jan)', category: 'economic', time: '8:30 AM ET' },
  { id: 'ppi-2', date: '2025-03-13', title: 'PPI (Feb)', category: 'economic', time: '8:30 AM ET' },
  { id: 'ppi-3', date: '2025-04-11', title: 'PPI (Mar)', category: 'economic', time: '8:30 AM ET' },
  { id: 'ppi-4', date: '2025-05-15', title: 'PPI (Apr)', category: 'economic', time: '8:30 AM ET' },
  { id: 'ppi-5', date: '2025-06-12', title: 'PPI (May)', category: 'economic', time: '8:30 AM ET' },
  { id: 'ppi-6', date: '2025-07-16', title: 'PPI (Jun)', category: 'economic', time: '8:30 AM ET' },
  { id: 'ppi-7', date: '2025-08-14', title: 'PPI (Jul)', category: 'economic', time: '8:30 AM ET' },
  { id: 'ppi-8', date: '2025-09-12', title: 'PPI (Aug)', category: 'economic', time: '8:30 AM ET' },
  { id: 'ppi-9', date: '2025-10-16', title: 'PPI (Sep)', category: 'economic', time: '8:30 AM ET' },
  { id: 'ppi-10', date: '2025-11-14', title: 'PPI (Oct)', category: 'economic', time: '8:30 AM ET' },
  { id: 'ppi-11', date: '2025-12-12', title: 'PPI (Nov)', category: 'economic', time: '8:30 AM ET' },
  
  // NFP Data
  { id: 'nfp-1', date: '2025-02-07', title: 'Nonfarm Payrolls (Jan)', category: 'economic', time: '8:30 AM ET' },
  { id: 'nfp-2', date: '2025-03-07', title: 'Nonfarm Payrolls (Feb)', category: 'economic', time: '8:30 AM ET' },
  { id: 'nfp-3', date: '2025-04-04', title: 'Nonfarm Payrolls (Mar)', category: 'economic', time: '8:30 AM ET' },
  { id: 'nfp-4', date: '2025-05-02', title: 'Nonfarm Payrolls (Apr)', category: 'economic', time: '8:30 AM ET' },
  { id: 'nfp-5', date: '2025-06-06', title: 'Nonfarm Payrolls (May)', category: 'economic', time: '8:30 AM ET' },
  { id: 'nfp-6', date: '2025-07-03', title: 'Nonfarm Payrolls (Jun)', category: 'economic', time: '8:30 AM ET' },
  { id: 'nfp-7', date: '2025-08-01', title: 'Nonfarm Payrolls (Jul)', category: 'economic', time: '8:30 AM ET' },
  { id: 'nfp-8', date: '2025-09-05', title: 'Nonfarm Payrolls (Aug)', category: 'economic', time: '8:30 AM ET' },
  { id: 'nfp-9', date: '2025-10-03', title: 'Nonfarm Payrolls (Sep)', category: 'economic', time: '8:30 AM ET' },
  { id: 'nfp-10', date: '2025-11-07', title: 'Nonfarm Payrolls (Oct)', category: 'economic', time: '8:30 AM ET' },
  { id: 'nfp-11', date: '2025-12-05', title: 'Nonfarm Payrolls (Nov)', category: 'economic', time: '8:30 AM ET' },
];

export const earningsData: CalendarEvent[] = [
  // Apple
  { id: 'aapl-q1', date: '2025-01-30', title: 'Apple (AAPL) Q1 Earnings', category: 'earnings', time: 'After Market Close' },
  { id: 'aapl-q2', date: '2025-05-01', title: 'Apple (AAPL) Q2 Earnings', category: 'earnings', time: 'After Market Close' },
  { id: 'aapl-q3', date: '2025-07-31', title: 'Apple (AAPL) Q3 Earnings', category: 'earnings', time: 'After Market Close' },
  { id: 'aapl-q4', date: '2025-10-30', title: 'Apple (AAPL) Q4 Earnings', category: 'earnings', time: 'After Market Close' },
  
  // Microsoft
  { id: 'msft-q2', date: '2025-01-28', title: 'Microsoft (MSFT) Q2 FY25 Earnings', category: 'earnings', time: 'After Market Close' },
  { id: 'msft-q3', date: '2025-04-29', title: 'Microsoft (MSFT) Q3 FY25 Earnings', category: 'earnings', time: 'After Market Close' },
  { id: 'msft-q4', date: '2025-07-29', title: 'Microsoft (MSFT) Q4 FY25 Earnings', category: 'earnings', time: 'After Market Close' },
  { id: 'msft-q1', date: '2025-10-28', title: 'Microsoft (MSFT) Q1 FY26 Earnings', category: 'earnings', time: 'After Market Close' },
  
  // Tesla
  { id: 'tsla-q4', date: '2025-01-29', title: 'Tesla (TSLA) Q4 2024 Earnings', category: 'earnings', time: 'After Market Close' },
  { id: 'tsla-q1', date: '2025-04-22', title: 'Tesla (TSLA) Q1 2025 Earnings', category: 'earnings', time: 'After Market Close' },
  { id: 'tsla-q2', date: '2025-07-22', title: 'Tesla (TSLA) Q2 2025 Earnings', category: 'earnings', time: 'After Market Close' },
  { id: 'tsla-q3', date: '2025-10-21', title: 'Tesla (TSLA) Q3 2025 Earnings', category: 'earnings', time: 'After Market Close' },
  
  // NVIDIA
  { id: 'nvda-q4', date: '2025-02-26', title: 'NVIDIA (NVDA) Q4 FY25 Earnings', category: 'earnings', time: 'After Market Close' },
  { id: 'nvda-q1', date: '2025-05-28', title: 'NVIDIA (NVDA) Q1 FY26 Earnings', category: 'earnings', time: 'After Market Close' },
  { id: 'nvda-q2', date: '2025-08-27', title: 'NVIDIA (NVDA) Q2 FY26 Earnings', category: 'earnings', time: 'After Market Close' },
  { id: 'nvda-q3', date: '2025-11-19', title: 'NVIDIA (NVDA) Q3 FY26 Earnings', category: 'earnings', time: 'After Market Close' },
];

export const riskAlerts: CalendarEvent[] = [
  { id: 'risk-1', date: '2025-01-15', title: 'Earnings Season Peak', category: 'risk', description: 'Increased volatility expected' },
  { id: 'risk-2', date: '2025-03-31', title: 'Quarter-End Rebalancing', category: 'risk', description: 'Portfolio adjustment window' },
  { id: 'risk-3', date: '2025-04-15', title: 'Tax Day', category: 'risk', description: 'Capital flow changes' },
  { id: 'risk-4', date: '2025-06-30', title: 'Mid-Year Rebalancing', category: 'risk', description: 'Major portfolio adjustments' },
  { id: 'risk-5', date: '2025-08-15', title: 'Summer Liquidity Low', category: 'risk', description: 'Reduced trading volume' },
  { id: 'risk-6', date: '2025-09-15', title: 'Historically Volatile Month', category: 'risk', description: 'September effect' },
  { id: 'risk-7', date: '2025-10-15', title: 'Q3 Earnings Season', category: 'risk', description: 'Market-moving reports' },
  { id: 'risk-8', date: '2025-12-20', title: 'Holiday Liquidity', category: 'risk', description: 'Year-end tax planning' },
];

export const monthlyQuotes = {
  1: "The stock market is a device for transferring money from the impatient to the patient. — Warren Buffett",
  2: "Risk comes from not knowing what you're doing. — Warren Buffett",
  3: "In investing, what is comfortable is rarely profitable. — Robert Arnott",
  4: "The four most dangerous words in investing are: 'This time it's different.' — Sir John Templeton",
  5: "Time in the market beats timing the market. — Ken Fisher",
  6: "The best investment you can make is in yourself. — Warren Buffett",
  7: "Diversification is protection against ignorance. It makes little sense if you know what you are doing. — Warren Buffett",
  8: "The stock market is filled with individuals who know the price of everything, but the value of nothing. — Philip Fisher",
  9: "Investing should be more like watching paint dry or watching grass grow. — Paul Samuelson",
  10: "The intelligent investor is a realist who sells to optimists and buys from pessimists. — Benjamin Graham",
  11: "Know what you own, and know why you own it. — Peter Lynch",
  12: "The goal of a successful trader is to make the best trades. Money is secondary. — Alexander Elder"
};

export const allEvents = [...fomcMeetings, ...economicData, ...earningsData, ...riskAlerts];
