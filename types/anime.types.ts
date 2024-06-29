export interface AnimeList {
  list: List[];
  pagination: Pagination;
}

export interface List {
  id: number;
  code: string;
  names: Names;
  franchises: Franchise[];
  announce: any;
  status: Status;
  posters: Posters;
  updated: number;
  last_change: number;
  type: Type;
  genres: string[];
  team: Team;
  season: Season;
  description: string;
  in_favorites: number;
  blocked: Blocked;
  player: Player;
  torrents: Torrents;
}

export interface Names {
  ru: string;
  en: string;
  alternative?: string;
}

export interface Franchise {
  franchise: Franchise2;
  releases: Release[];
}

export interface Franchise2 {
  id: string;
  name: string;
}

export interface Release {
  id: number;
  code: string;
  ordinal: number;
  names: Names2;
}

export interface Names2 {
  ru: string;
  en: string;
  alternative: any;
}

export interface Status {
  string: string;
  code: number;
}

export interface Posters {
  small: Small;
  medium: Medium;
  original: Original;
}

export interface Small {
  url: string;
  raw_base64_file: any;
}

export interface Medium {
  url: string;
  raw_base64_file: any;
}

export interface Original {
  url: string;
  raw_base64_file: any;
}

export interface Type {
  full_string: string;
  code: number;
  string: string;
  episodes: number;
  length?: number;
}

export interface Team {
  voice: string[];
  translator: string[];
  editing: any[];
  decor: string[];
  timing: string[];
}

export interface Season {
  string: string;
  code: number;
  year: number;
  week_day: number;
}

export interface Blocked {
  copyrights: boolean;
  geoip: boolean;
  geoip_list: any[];
}

export interface Player {
  alternative_player: any;
  host: string;
  is_rutube: boolean;
  episodes: Episodes;
  list: List[];
  rutube: Rutube;
}

export interface Episodes {
  first: number;
  last: number;
  string: string;
}

export interface List2 {
  "1": N1;
  "2": N2;
  "3": N3;
  "4": N4;
  "5": N5;
  "6": N6;
  "7": N7;
  "8": N8;
  "9": N9;
  "10": N10;
  "11": N11;
  "12"?: N12;
}

export interface N1 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips;
  hls: Hls;
}

export interface Skips {
  opening: number[];
  ending: any[];
}

export interface Hls {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N2 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips2;
  hls: Hls2;
}

export interface Skips2 {
  opening: number[];
  ending: any[];
}

export interface Hls2 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N3 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips3;
  hls: Hls3;
}

export interface Skips3 {
  opening: number[];
  ending: any[];
}

export interface Hls3 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N4 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips4;
  hls: Hls4;
}

export interface Skips4 {
  opening: number[];
  ending: any[];
}

export interface Hls4 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N5 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips5;
  hls: Hls5;
}

export interface Skips5 {
  opening: number[];
  ending: any[];
}

export interface Hls5 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N6 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips6;
  hls: Hls6;
}

export interface Skips6 {
  opening: number[];
  ending: any[];
}

export interface Hls6 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N7 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips7;
  hls: Hls7;
}

export interface Skips7 {
  opening: number[];
  ending: any[];
}

export interface Hls7 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N8 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips8;
  hls: Hls8;
}

export interface Skips8 {
  opening: number[];
  ending: any[];
}

export interface Hls8 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N9 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips9;
  hls: Hls9;
}

export interface Skips9 {
  opening: number[];
  ending: any[];
}

export interface Hls9 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N10 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips10;
  hls: Hls10;
}

export interface Skips10 {
  opening: number[];
  ending: any[];
}

export interface Hls10 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N11 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips11;
  hls: Hls11;
}

export interface Skips11 {
  opening: number[];
  ending: any[];
}

export interface Hls11 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N12 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips12;
  hls: Hls12;
}

export interface Skips12 {
  opening: number[];
  ending: any[];
}

export interface Hls12 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface Rutube {}

export interface Torrents {
  episodes: Episodes2;
  list: List3[];
}

export interface Episodes2 {
  first: number;
  last: number;
  string: string;
}

export interface List3 {
  torrent_id: number;
  episodes: Episodes3;
  quality: Quality;
  leechers: number;
  seeders: number;
  downloads: number;
  total_size: number;
  size_string: string;
  url: string;
  magnet: string;
  uploaded_timestamp: number;
  hash: string;
  metadata: any;
  raw_base64_file: any;
}

export interface Episodes3 {
  first: number;
  last: number;
  string: string;
}

export interface Quality {
  string: string;
  type: string;
  resolution: string;
  encoder: string;
  lq_audio: any;
}

export interface Pagination {
  pages: number;
  current_page: number;
  items_per_page: number;
  total_items: number;
}

export interface PlayerCustom {
  list: List[];
  host: string;
}

export interface List {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips;
  hls: Hls;
}

export interface Skips {
  opening: number[];
  ending: any[];
}

export interface Hls {
  fhd: string;
  hd: string;
  sd: string;
}
