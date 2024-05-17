import http from "./http";
import to from "await-to-js";

// 获取排行榜详情
export const getTopList = async () => {
    const [err, res] = await to(http.post<Res.rankListResult>("/toplist/detail"));
    if (err) throw new Error("请求失败");
    return res.data;
};

// 歌单接口参数
interface getTrackIdParams {
  id: number;
  s?: 8;
}

// ids
// 歌曲接口参数
interface getSongParams {
  ids: number;
}

// mv排行接口参数
interface getmvParams {
  limit?: number;
  area?: string;
  offset?: 0;
}
  
// 获取歌单详情
// /playlist/detail?id=19723756
export const getTrackId = async (params:getTrackIdParams) => {
  const [err, res] = await to(http.get<Res.getTrackId>("/playlist/detail",{params}));
  if (err) throw new Error("请求失败");
  return res.data;
};

// 获取歌曲详情
// /song/detail?ids=2155423468
export const getSongDetail = async (params:getSongParams) => {
  const [err, res] = await to(http.get<Song>("/song/detail",{params}));
  if (err) throw new Error("请求失败");
  return res.data;
};

// 获取mv排行
export const getMVList = async (params:getmvParams) => {
  const [err, res] = await to(http.get<Res.getmvData>("/top/mv",{params}));
  if (err) throw new Error("请求失败");
  return res.data;
};