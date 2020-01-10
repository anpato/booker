class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

const HandleError = (err, res) => {
  const { statusCode, message } = res
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  })
}

export { ErrorHandler, HandleError }
