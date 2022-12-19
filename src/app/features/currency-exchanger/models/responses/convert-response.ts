export interface ConvertResponse {
  success: boolean;
  query: {
    from: string,
    to: string,
    amount: number
  };
  info: {
    timestamp: string,
    rate: number
  };
  historical?: string;
  date: string;
  result: number;
}
