export interface ErrorResponse {
  success: symbol;
  error: {
    code: number,
    info: string
  }
}
