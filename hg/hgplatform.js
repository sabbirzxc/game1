//  ---------------- 广告
var videoAd = null;
var callBcak = null;
var flag = true;
let isRewardVideoReady
function showRewardedVideoMini(f) {
    isRewardVideoReady = MiniGameAds.isRewardvideoReady();

    console.log("是否播放激励视频==>", isRewardVideoReady)

    callBcak = f;

    if (isRewardVideoReady) {
        // @ts-ignore
        MiniGameAds.showRewardedVideo().then(() => {
            console.info("====> show RewardedVideo success");
            callBcak && callBcak(true);
            callBcak = null;
        }).catch(e => {
            console.error("====> show RewardedVideo error: " + e.message);
        });
    } else {
        console.info("====> RewardedVideo not ready");
    }
}

let isBannerReady
function showBannerMini() {
    
    isBannerReady = MiniGameAds.isBannerReady();
    console.log("是否展示banner==>", isBannerReady)
    if (isBannerReady) {
        // @ts-ignore
        MiniGameAds.showBanner().then(() => {
            console.info("====> show banner success");
        }).catch(e => {
            console.error("====> show banner error: " + e.message);
        });
    } else {
        console.info("====> banner not ready");
    }
}

function hideBannerMini() {
    console.log("隐藏banner")
    MiniGameAds.hideBanner().then(() => {
        console.info("====> hide banner success");
    }).catch(e => {
        console.error("====> hide banner error: " + e.message);
    });
}

let isInterstitialReady
function showInterstitialMini() {
    isInterstitialReady = MiniGameAds.isInterstitialReady();
    console.log("是否展示插屏==>", isInterstitialReady)
    if (isInterstitialReady) {
        // @ts-ignore
        MiniGameAds.showInterstitial().then(() => {
            console.info("====> show interstitial success");
        }).catch(e => {
            console.error("====> show interstitial error: " + e.message);
        });
    } else {
        console.info("====> interstitial not ready");
    }
}