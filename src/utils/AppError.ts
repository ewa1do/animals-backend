class AppError extends Error {
  public statusCode;
  public status;
  protected isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';

    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
