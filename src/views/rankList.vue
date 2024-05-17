<template>
  <div class="w-[100vw] bg-[#F4F4F4]">
    <div class="flex items-center h-[15vw] px-[5vw]">
      <Icon icon="material-symbols-light:arrow-back-ios" class="text-[7vw]" />
      <div class="text-center w-[90vw] font-bold text-[5vw]">排行榜</div>
    </div>
    <van-tabs
      v-model:active="active"
      swipeable
      background="#F4F4F4"
      color="red"
      line-width="5vw"
      line-height="1vw"
    >
      <van-tab title="官方" class="px-[5vw]">
        <div class="pt-[3vw]">
          <span class="font-bold text-[4.5vw]">榜单推荐</span>
          <ul class="flex justify-between mt-[2vw]">
            <li v-for="item in rewardRankList" :key="item.id" class="relative">
              <img
                :src="item.coverImgUrl"
                alt=""
                class="w-[28vw] h-[28vw] rounded-lg"
              />
              <Icon
                icon="solar:play-bold"
                class="text-[#fff] absolute bottom-[2vw] right-[2vw]"
              />
            </li>
          </ul>
        </div>
        <!-- 官方榜 -->
        <div class="mt-[10vw]">
          <div class="flex items-center">
            <Icon
              icon="ri:netease-cloud-music-fill"
              class="text-[7vw] mr-[1vw]"
              style="color: red"
            />
            <span class="font-bold text-[4.5vw]">官方榜</span>
          </div>
          <ul class="pt-[3vw]">
            <li
              v-for="item in publicRankList"
              :key="item.id"
              class="bg-[#fff] rounded-[5vw] py-[3vw] mb-[5vw] px-[3vw]"
            >
              <div class="flex justify-between items-center">
                <span class="text-[5vw] font-bold">{{ item.name }}</span>
                <span class="text-[3vw] text-[#999]">{{
                  item.updateFrequency
                }}</span>
              </div>
              <div class="mt-[3vw] flex">
                <img
                  :src="item.coverImgUrl"
                  alt=""
                  class="w-[20vw] rounded-lg relative"
                />

                <ul class="ml-[5vw]">
                  <li
                    v-for="(item2, index) in item.tracks"
                    :key="item2"
                    class="overflow-hidden flex items-center justify-between"
                  >
                    <p
                      class="truncate text-ellipsis w-[45vw] mt-[2vw] text-[#999] text-[3.5vw]"
                    >
                      <span class="mr-[3vw] text-[black] font-bold">{{
                        index + 1
                      }}</span>
                      <span class="text-[black] font-bold">{{
                        item2.first
                      }}</span>
                      <span class="mx-[1vw] text-[#999]">-</span>
                      <span class="text-[#999]">{{ item2.second }}</span>
                    </p>
                    <!-- <div class="text-[2vw] mt-[2vw] " :class="item.updateFrequency=='刚刚更新'?'text-[green]':'text-[#999]'" v-if="item.updateFrequency=='刚刚更新'">新</div> -->
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div class="bg-[#fff] rounded-[5vw] py-[3vw] mb-[5vw] px-[3vw]">
            <div class="flex justify-between items-center">
              <span class="text-[5vw] font-bold">MV榜</span>
              <span class="text-[3vw] text-[#999]">每日更新</span>
            </div>
            <div class="mt-[3vw] flex">
              <img :src="mvPic" alt="" class="w-[20vw] rounded-lg relative" />

              <ul class="ml-[5vw]">
                <li
                  v-for="(item, index) in mvList.data"
                  :key="item.id"
                  class="overflow-hidden flex items-center justify-between"
                >
                  <p
                    class="truncate text-ellipsis w-[45vw] mt-[2vw] text-[#999] text-[3.5vw]"
                  >
                    <span class="mr-[3vw] text-[black] font-bold">{{
                      index + 1
                    }}</span>
                    <span class="text-[black] font-bold">{{ item.name }}</span>
                    <span class="mx-[1vw] text-[#999]">-</span>
                    <span class="text-[#999]">{{ item.artistName }}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
         
        </div>
        <!-- 精选榜 -->
         <div>
            <div class="text-[5vw] font-bold"> 精选榜 </div>
            <ul class="flex flex-wrap">
              <li v-for="item in selectRankList" :key="item.id">
                <img :src="item.coverImgUrl" alt="" class="w-[26vw] rounded-lg mt-[3vw] mr-[3vw]">
              </li>
            </ul>
          </div>
      </van-tab>
      <van-tab title="精选"> 精选 </van-tab>
      <van-tab title="曲风"> 曲风 </van-tab>
      <van-tab title="全球"> 全球 </van-tab>
      <van-tab title="语种"> 语种 </van-tab>
      <van-tab title="特色"> 特色 </van-tab>
    </van-tabs>
  </div>
</template>
<script setup lang="ts">
import { getTopList, getTrackId, getSongDetail, getMVList } from "@/service";
import { useRequest } from "vue-request";
const { data: topList } = useRequest(getTopList, {});
// const { data: playList, run: runGetTrackId } = useRequest(getTrackId, {
//   manual: true,
// });
// const { data: songDetail, run: runGetsongDetail } = useRequest(getSongDetail, {
//   manual: true,
// });
const { data: mvList, run: runmvList } = useRequest(getMVList, {
  manual: true,
});

const rewardRankList = ref([]);
const publicRankList = ref([]);
// const songsFirstPic = ref([]);
const selectRankList = ref([]);
const mvPic = ref("");
const active = ref(0);
// runGetTrackId({ id: 19723756 });
// runGetsongDetail({ ids: 2155423468 });
runmvList({ limit: 3 });
watchEffect(() => {
  rewardRankList.value = topList.value?.list?.slice(0, 3);
  publicRankList.value = topList.value?.list?.slice(0, 4);
  selectRankList.value = topList.value?.list?.slice(0, 11);

  // for (let i = 0; i < publicRankList.value?.length; i++) {
  //   runGetTrackId({ id: publicRankList.value?.privileges[i]?.id });
  //   runGetsongDetail({ ids: playList[i].id }); //传第一个的id
  //   songsFirstPic.value.push(songDetail.value?.songs[i]?.al?.picUrl);
  // }
  mvPic.value = mvList.value?.data[0]?.cover;
  // console.log(mvList.value);
});
</script>
<style lang="css">
.van-tabs__wrap {
  font-size: 4vw;
}
</style>
