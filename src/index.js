settings.logAddedRecipes = false
settings.logRemovedRecipes = true

events.listen('block.break', (event) => {
  event.cancel()
})
