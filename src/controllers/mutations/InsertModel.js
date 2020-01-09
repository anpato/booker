export const InsertModel = (model, params) => {
  const newModel = new model(params)
  newModel.save()
  return newModel
}
