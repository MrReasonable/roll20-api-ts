// Type-level smoke tests for the module (import) entry point.
// Compiled by `pnpm run test:types` — no runtime, existence is the assertion.
import {
  on,
  findObjs,
  getObj,
  createObj,
  toFront,
  toBack,
  state,
  Campaign,
  type Graphic,
  type Roll20Object,
  type TokenMarker,
} from '../src/index'

on('ready', () => {
  const token = getObj('graphic', 'abc')
  if (!token) return

  // Regression guard: `.get()` returns the property value synchronously
  // (it was previously mistyped as `void`).
  const left: number = token.get('left')
  const name: string = token.get('name')
  void name
  token.set('left', left + 10)
  token.set({ top: 5, rotation: 0 })
  toFront(token)
  toBack(token)

  // Async (callback) form of `.get()` returns void.
  token.get('gmnotes', (value) => void value.length)

  // Generic findObjs: a literal `_type` narrows the element type so `.get` is typed.
  const graphics: Roll20Object<Graphic>[] = findObjs({ _type: 'graphic' })
  graphics.forEach((g) => void g.get('rotation'))
})

on('change:graphic:left', (obj, prev) => {
  void obj.get('left')
  void prev
})

// Token markers parsed from the campaign.
const markers: TokenMarker[] = JSON.parse(Campaign().get('token_markers'))
void markers[0]?.tag

// createObj returns a typed wrapper.
const created = createObj('graphic', { left: 0, top: 0 })
void created.id

// state is usable and augmentable.
state.myPluginData = { hello: 'world' }
