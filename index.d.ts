/**
 * Roll20 Full API TypeScript Definitions
 * Generated from:
 *   - API Objects: https://help.roll20.net/hc/en-us/articles/360037772793-API-Objects
 *   - API Function Documentation: https://help.roll20.net/hc/en-us/articles/360037772833-API-Function-Documentation
 *   - API Events: https://help.roll20.net/hc/en-us/articles/360037772813-API-Events
 *   - API Utility Functions: https://help.roll20.net/hc/en-us/articles/360037256774-API-Utility-Functions
 */

///////////////////////
// Object Interfaces //
///////////////////////

export type Layer = "gmlayer" | "objects" | "map" | "walls" | "foreground";
export type BarrierType = "wall" | "oneWay" | "transparent";
export type Pathv2Shape = "pol" | "free" | "eli" | "rec";

export interface Campaign {
  _id: "root";
  _type: "campaign";
  turnorder: string;
  initiativepage: string | false;
  playerpageid: string | false;
  playerspecificpages: Record<string, string> | false;
  _journalfolder: string;
  _jukeboxfolder: string;
  foregroundLayerVisible: boolean;
}

export interface Page {
  _id: string;
  _type: "page";
  _zorder: string;
  name: string;
  showgrid: boolean;
  showdarkness: boolean;
  showlighting: boolean;
  width: number;
  height: number;
  snapping_increment: number;
  grid_opacity: number;
  fog_opacity: number;
  background_color: string;
  gridcolor: string;
  grid_type: "square" | "hex" | "hexr";
  scale_number: number;
  scale_units: string;
  gridlabels: boolean;
  diagonaltype: "foure" | "pythagorean" | "threefive" | "manhattan";
  archived: boolean;
  lightupdatedrop: boolean;
  lightenforcelos: boolean;
  lightrestrictmove: boolean;
  lightglobalillum: boolean;
  daylight_mode_enabled: boolean;
  daylightModeOpacity: number;
  explorer_mode: "off" | "basic";
  darknessEffect: "none" | "darkfog" | "lightfog";
}

export interface Graphic {
  _id: string;
  _type: "graphic";
  _subtype: "token" | "card";
  _pageid: string;
  imgsrc: string;
  bar1_link: string;
  bar2_link: string;
  bar3_link: string;
  represents: string;
  left: number;
  top: number;
  width: number;
  height: number;
  rotation: number;
  layer: Layer;
  flipv: boolean;
  fliph: boolean;
  name: string;
  gmnotes: string;
  controlledby: string;
  bar1_value: string;
  bar2_value: string;
  bar3_value: string;
  bar1_max: string;
  bar2_max: string;
  bar3_max: string;
  aura1_radius: string;
  aura2_radius: string;
  aura1_color: string;
  aura2_color: string;
  aura1_square: boolean;
  aura2_square: boolean;
  tint_color: string;
  statusmarkers: string;
  light_radius: string;
  light_dimradius: string;
  light_otherplayers: boolean;
  light_hassight: boolean;
  light_angle: string;
  light_losangle: string;
  lastmove: string;
  light_multiplier: string;
  adv_fow_view_distance: string;
  light_sensitivity_multiplier: number;
  night_vision_effect: string;
  bar_location: string;
  compact_bar: string;
  lockMovement: boolean;
  baseOpacity: number;
  fadeOnOverlap: boolean;
  fadeOpacity: number;
  renderAsScenery: boolean;
}

export interface Path {
  _id: string;
  _type: "path";
  _pageid: string;
  _path: string;
  fill: string;
  stroke: string;
  rotation: number;
  layer: Layer;
  stroke_width: number;
  width: number;
  height: number;
  top: number;
  left: number;
  scaleX: number;
  scaleY: number;
  barrierType: BarrierType;
  oneWayReversed: boolean;
  fadeOnOverlap: boolean;
  fadeOpacity: number;
  renderAsScenery: boolean;
}

export interface Pathv2 {
  _id: string;
  _type: "pathv2";
  _pageid: string;
  shape: Pathv2Shape;
  points: string;
  fill: string;
  stroke: string;
  rotation: number;
  layer: Layer;
  stroke_width: number;
  x: number;
  y: number;
  controlledby: string;
  barrierType: BarrierType;
  oneWayReversed: boolean;
  fadeOnOverlap: boolean;
  fadeOpacity: number;
  renderAsScenery: boolean;
}

export interface Text {
  _id: string;
  _type: "text";
  _pageid: string;
  top: number;
  left: number;
  width: number;
  height: number;
  text: string;
  font_size: number;
  rotation: number;
  color: string;
  stroke: string;
  font_family: string;
  layer: Layer;
  controlledby: string;
  fadeOnOverlap: boolean;
  fadeOpacity: number;
  renderAsScenery: boolean;
}

export interface Window {
  _id: string;
  _type: "window";
  color: string;
  x: number;
  y: number;
  isOpen: boolean;
  isLocked: boolean;
}

export interface Door {
  _id: string;
  _type: "door";
  color: string;
  x: number;
  y: number;
  isOpen: boolean;
  isLocked: boolean;
  isSecret: boolean;
  path: string;
}

export interface Player {
  _id: string;
  _type: "player";
  _d20userid: string;
  _displayname: string;
  _online: boolean;
  _lastpage: string;
  _macrobar: string;
  speakingas: string;
  color: string;
  showmacrobar: boolean;
}

export interface Macro {
  _id: string;
  _type: "macro";
  _playerid: string;
  name: string;
  action: string;
  visibleto: string;
  istokenaction: boolean;
}

export interface RollableTable {
  _id: string;
  _type: "rollabletable";
  name: string;
  showplayers: boolean;
}

export interface TableItem {
  _id: string;
  _type: "tableitem";
  _rollabletableid: string;
  avatar: string;
  name: string;
  weight: number;
}

export interface Character {
  _id: string;
  _type: "character";
  avatar: string;
  name: string;
  bio: string;
  gmnotes: string;
  archived: boolean;
  inplayerjournals: string;
  controlledby: string;
  _defaulttoken: string;
}

export interface Attribute {
  _id: string;
  _type: "attribute";
  _characterid: string;
  name: string;
  current: string;
  max: string;
}

export interface Ability {
  _id: string;
  _type: "ability";
  _characterid: string;
  name: string;
  description: string;
  action: string;
  istokenaction: boolean;
}

export interface Handout {
  _id: string;
  _type: "handout";
  avatar: string;
  name: string;
  notes: string;
  gmnotes: string;
  inplayerjournals: string;
  archived: boolean;
  controlledby: string;
}

export interface Deck {
  _id: string;
  _type: "deck";
  name: string;
  _currentDeck: string;
  _currentIndex: number;
  _currentCardShown: boolean;
  showplayers: boolean;
  playerscandraw: boolean;
  avatar: string;
  shown: boolean;
  players_seenumcards: boolean;
  players_seefrontofcards: boolean;
  gm_seenumcards: boolean;
  gm_seefrontofcards: boolean;
  infinitecards: boolean;
  _cardSequencer: number;
  cardsplayed: "faceup" | "facedown";
  defaultheight: string;
  defaultwidth: string;
  discardpilemode: "none" | "choosebacks" | "choosefronts" | "drawtop" | "drawbottom";
  _discardPile: string;
}

export interface Card {
  _id: string;
  _type: "card";
  name: string;
  avatar: string;
  card_back: string;
  _deckid: string;
}

export interface Hand {
  _id: string;
  _type: "hand";
  currentHand: string;
  _parentid: string;
  currentView: "bydeck" | "bycard";
}

export interface JukeboxTrack {
  _id: string;
  _type: "jukeboxtrack";
  playing: boolean;
  softstop: boolean;
  title: string;
  volume: number;
  loop: boolean;
}

export interface CustomFX {
  _id: string;
  _type: "custfx";
  name: string;
  definition: Record<string, unknown>;
}

/////////////////////
// Object Wrappers //
/////////////////////

/** Wrapper type for Roll20 objects */
export type Roll20Object<T> = {
  id: string;
  get<K extends keyof T>(property: K, callback?: (value: T[K]) => void): void;
  set<K extends keyof T>(property: K, value: T[K], callback?: () => void): void;
  set(properties: Partial<T>, callback?: () => void): void;
  remove(): void;
  setWithWorker?(properties: Partial<T>): void;
};

export interface Roll20ObjectMap {
  campaign: Campaign;
  page: Page;
  graphic: Graphic;
  text: Text;
  path: Path;
  pathv2: Pathv2;
  window: Window;
  door: Door;
  player: Player;
  handout: Handout;
  character: Character;
  attribute: Attribute;
  ability: Ability;
  macro: Macro;
  rollabletable: RollableTable;
  tableitem: TableItem;
  deck: Deck;
  card: Card;
  hand: Hand;
  jukeboxtrack: JukeboxTrack;
  custfx: CustomFX;
}

//////////////////////
// Global Functions //
//////////////////////

declare function Campaign(): Roll20Object<Campaign>;
declare function createObj<K extends keyof Roll20ObjectMap>(
  type: K,
  attributes: Partial<Omit<Roll20ObjectMap[K], '_type' | '_id'>>
): Roll20Object<Roll20ObjectMap[K]>;
declare function getObj<K extends keyof Roll20ObjectMap>(
  type: K,
  id: string
): Roll20Object<Roll20ObjectMap[K]> | undefined;
declare function findObjs(
  attrs: Partial<Record<string, unknown>>,
  options?: { caseInsensitive?: boolean }
): Roll20Object<Roll20ObjectMap[keyof Roll20ObjectMap]>[];
declare function filterObjs(
  callback: (obj: Roll20Object<Roll20ObjectMap[keyof Roll20ObjectMap]>) => boolean
): Roll20Object<Roll20ObjectMap[keyof Roll20ObjectMap]>[];
declare function getAllObjs(): Roll20Object<Roll20ObjectMap[keyof Roll20ObjectMap]>[];
declare function getAttrByName(
  characterID: string,
  attributeName: string,
  valueType?: 'current' | 'max'
): string | number;
declare function log(message: unknown): void;
declare function randomInteger(max: number): number;
declare function sendChat(
  speakingAs: string,
  message: string,
  callback?: (results: unknown[]) => void,
  options?: { noarchive?: boolean; use3d?: boolean }
): void;
declare function sendPing(
  left: number,
  top: number,
  pageid: string,
  playerid?: string | null,
  moveAll?: boolean,
  visibleTo?: string | string[]
): void;
declare function playJukeboxPlaylist(playlistID: string): void;
declare function stopJukeboxPlaylist(): void;
declare function spawnFx(
  left: number,
  top: number,
  type: string,
  pageid?: string
): void;
declare function spawnFxBetweenPoints(
  start: { x: number; y: number },
  end: { x: number; y: number },
  type: string,
  pageid?: string
): void;
declare function spawnFxWithDefinition(
  left: number,
  top: number,
  definition: Record<string, unknown>,
  pageid?: string
): void;
declare function on(event: 'ready', callback: () => void): void;
declare function on<K extends keyof Roll20ObjectMap>(
  event: `add:${K}`,
  callback: (obj: Roll20Object<Roll20ObjectMap[K]>) => void
): void;
declare function on<K extends keyof Roll20ObjectMap>(
  event: `destroy:${K}`,
  callback: (obj: Roll20Object<Roll20ObjectMap[K]>) => void
): void;
declare function on<K extends keyof Roll20ObjectMap>(
  event: `change:${K}`,
  callback: (obj: Roll20Object<Roll20ObjectMap[K]>, prev: Partial<Record<keyof Roll20ObjectMap[K], unknown>>) => void
): void;
declare function on<K extends keyof Roll20ObjectMap, P extends keyof Roll20ObjectMap[K]>(
  event: `change:${K}:${Extract<P, string>}`,
  callback: (obj: Roll20Object<Roll20ObjectMap[K]>, prev: unknown) => void
): void;
declare function on(
  event: 'chat:message',
  callback: (msg: unknown) => void
): void;
declare function onSheetWorkerCompleted(callback: () => void): void;
declare function playerIsGM(playerID: string): boolean;

/////////////////////////
// Utility & Globals   //
/////////////////////////
interface State {
    [key: string]: unknown;
}
declare let state: State;
