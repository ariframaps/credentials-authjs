export interface ApiSuccessResponse<T> {
  data: T;
  success: true;
  status_code: number;
}

export interface ApiErrorResponse {
  errors: string;
  success: false;
  status_code: number;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
