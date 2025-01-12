interface Song {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: { id: number; name: string; tns: string[]; alias: undefined[] }[];
  alia: undefined[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  crbt: object;
  cf: string;
  al: {
    id: number;
    name: string;
    picUrl: string;
    tns: undefined[];
    pic_str: string;
    pic: number;
  };
  dt: number;
  h: { br: number; fid: number; size: number; vd: number; sr: number };
  m: { br: number; fid: number; size: number; vd: number; sr: number };
  l: { br: number; fid: number; size: number; vd: number; sr: number };
  sq: { br: number; fid: number; size: number; vd: number; sr: number };
  hr: object;
  a: object;
  cd: string;
  no: number;
  rtUrl: object;
  ftype: number;
  rtUrls: undefined[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  originSongSimpleData: object;
  tagPicList: object;
  resourceState: boolean;
  version: number;
  songJumpInfo: object;
  entertainmentTags: object;
  single: number;
  noCopyrightRcmd: object;
  rtype: number;
  rurl: object;
  mst: number;
  cp: number;
  mv: number;
  publishTime: number;
  privilege: {
    id: number;
    fee: number;
    payed: number;
    st: number;
    pl: number;
    dl: number;
    sp: number;
    cp: number;
    subp: number;
    cs: boolean;
    maxbr: number;
    fl: number;
    toast: boolean;
    flag: number;
    preSell: boolean;
    playMaxbr: number;
    downloadMaxbr: number;
    maxBrLevel: string;
    playMaxBrLevel: string;
    downloadMaxBrLevel: string;
    plLevel: string;
    dlLevel: string;
    flLevel: string;
    rscl: object;
    freeTrialPrivilege: {
      resConsumable: boolean;
      userConsumable: boolean;
      listenType: number;
      cannotListenReason: number;
    };
    rightSource: number;
    chargeInfoList: {
      rate: number;
      chargeUrl: object;
      chargeMessage: object;
      chargeType: number;
    }[];
  };
}
interface Track {
  first: string;
  second: string;
}
interface Artist {
  id: number;
  name: string;
}
namespace Res {
  interface getDefaultKey {
    code: number;
    message: object;
    data: {
      showKeyword: string;
      styleKeyword: { keyWord: string; descWord: object };
      realkeyword: string;
      searchType: number;
      action: number;
      alg: string;
      gap: number;
      source: object;
      bizQueryInfo: string;
      logInfo: object;
      imageUrl: object;
      trp_type: object;
      trp_id: object;
    };
  }
  interface searchResult {
    result: {
      searchQcReminder: object;
      songs: Song[];
      songCount: number;
    };
    code: number;
  }

  interface rankListResult {
    list?: any[];
    subscribers: any[];
    subscribed?: any;
    creator?: any;
    artists?: any;
    tracks: Track[];
    updateFrequency: string;
    backgroundCoverId: number;
    backgroundCoverUrl?: any;
    titleImage: number;
    coverText?: any;
    titleImageUrl?: any;
    coverImageUrl?: any;
    iconImageUrl?: any;
    englishTitle?: any;
    opRecommend: boolean;
    recommendInfo?: any;
    socialPlaylistCover?: any;
    tsSongCount: number;
    highQuality: boolean;
    trackNumberUpdateTime: number;
    adType: number;
    anonimous: boolean;
    specialType: number;
    coverImgId: number;
    updateTime: number;
    newImported: boolean;
    trackCount: number;
    coverImgUrl: string;
    commentThreadId: string;
    trackUpdateTime: number;
    totalDuration: number;
    privacy: number;
    playCount: number;
    cloudTrackCount: number;
    subscribedCount: number;
    createTime: number;
    ordered: boolean;
    description: string;
    status: number;
    tags: any[];
    userId: number;
    name: string;
    id: number;
    coverImgId_str: string;
    toplistType: string;
  }

  interface getTrackId {
    id: number;
    v: number;
    t: number;
    at: number;
    alg?: any;
    uid: number;
    rcmdReason: string;
    sc?: any;
    f?: any;
    sr?: any;
    dpr?: any;
    ratio: number;
  }



   interface getmvData {
    id: number;
    cover: string;
    name: string;
    playCount: number;
    briefDesc?: any;
    desc?: any;
    artistName: string;
    artistId: number;
    duration: number;
    mark: number;
    mv: Mv;
    lastRank: number;
    score: number;
    subed: boolean;
    artists: Artist[];
    alias: string[];
  }

}
