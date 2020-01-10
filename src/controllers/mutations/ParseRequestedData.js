export const ParseRequestedData = (models, returnType) =>
  models.map(model => {
    return model[returnType]
  })
