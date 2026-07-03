// Type-level smoke test for the ambient `global` entry point: the API globals
// (loaded via test-d/tsconfig.json including ../src/global.ts) are usable here
// are usable WITHOUT importing them (Roll20's usual authoring style).

on('ready', () => {
  log('ready')

  const campaign = Campaign()
  const pageId: string | false = campaign.get('playerpageid')
  void pageId

  const g = createObj('graphic', { left: 0, top: 0 })
  toFront(g)
  toBack(g)

  const graphics = findObjs({ _type: 'graphic', _pageid: 'p1' })
  graphics.forEach((graphic) => void graphic.get('left'))

  state.myFlag = true
  void getAttrByName('char1', 'strength')
  void playerIsGM('p1')
})
