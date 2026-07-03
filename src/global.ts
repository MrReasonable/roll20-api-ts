/**
 * Ambient global declarations for Roll20 scripts that use the API globals
 * directly, without importing them (the usual Roll20 authoring style).
 *
 * Enable by adding `"roll20-api-ts/global"` to your tsconfig `types`, or with a
 * triple-slash reference at the top of a script:
 *
 *   /// <reference types="roll20-api-ts/global" />
 *
 * For the import style (`import { on, findObjs } from 'roll20-api-ts'`), use the
 * package's main entry point instead — you do not need this file.
 */
import type * as Roll20 from './index'

declare global {
  const Campaign: typeof Roll20.Campaign
  const createObj: typeof Roll20.createObj
  const getObj: typeof Roll20.getObj
  const findObjs: typeof Roll20.findObjs
  const filterObjs: typeof Roll20.filterObjs
  const getAllObjs: typeof Roll20.getAllObjs
  const getAttrByName: typeof Roll20.getAttrByName
  const log: typeof Roll20.log
  const on: typeof Roll20.on
  const onSheetWorkerCompleted: typeof Roll20.onSheetWorkerCompleted
  const playerIsGM: typeof Roll20.playerIsGM
  const randomInteger: typeof Roll20.randomInteger
  const sendChat: typeof Roll20.sendChat
  const sendPing: typeof Roll20.sendPing
  const spawnFx: typeof Roll20.spawnFx
  const spawnFxBetweenPoints: typeof Roll20.spawnFxBetweenPoints
  const spawnFxWithDefinition: typeof Roll20.spawnFxWithDefinition
  const playJukeboxPlaylist: typeof Roll20.playJukeboxPlaylist
  const stopJukeboxPlaylist: typeof Roll20.stopJukeboxPlaylist
  const toFront: typeof Roll20.toFront
  const toBack: typeof Roll20.toBack
  const setDefaultTokenForCharacter: typeof Roll20.setDefaultTokenForCharacter
  const state: Roll20.State
}

export {}
