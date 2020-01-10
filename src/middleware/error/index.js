class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

const HandleError = (err, res) => {
  const { statusCode, message } = err
  return res.status(statusCode).send({
    status: 'error',
    statusCode,
    message
  })
}

export { ErrorHandler, HandleError }
