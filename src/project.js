window.__require = function e(t, i, o) {
    function n(s, r) {
        if (!i[s]) {
            if (!t[s]) {
                var c = s.split("/");
                if (c = c[c.length - 1], !t[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!r && l) return l(c, !0);
                    if (a) return a(c, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = c
            }
            var d = i[s] = {
                exports: {}
            };
            t[s][0].call(d.exports, function (e) {
                return n(t[s][1][e] || e)
            }, d, d.exports, e, t, i, o)
        }
        return i[s].exports
    }
    for (var a = "function" == typeof __require && __require, s = 0; s < o.length; s++) n(o[s]);
    return n
}({
    AgreementButton: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "4f44cr9UU1LPpvi4nWO6Yen", "AgreementButton"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                PlatformCode !== PlatformList.QQ && PlatformCode !== PlatformList.VIVO && PlatformCode !== PlatformList.OPPO && PlatformCode !== PlatformList.华为 ? this.node.active = !1 : this.node.active = !0
            },
            buttonTouchEventCallBack: function (e) {
                adUtils.clearAllAdvertising(), cc.loader.loadRes("Platform/Prefabs/AgreementWindow", cc.Prefab, function (t, i) {
                    var o = cc.instantiate(i);
                    cc.director.getScene().addChild(o), o.getComponent("AgreementWindow").initialize(!1, null, e.target.name)
                })
            }
        }), cc._RF.pop()
    }, {}],
    AgreementWindow: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "1e238aa8epPl4t24/Ha2FXi", "AgreementWindow"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var e = this.node.getChildByName("window").getChildByName("content");
                this.first = e.getChildByName("first"), this.privacy = e.getChildByName("privacy"), this.service = e.getChildByName("service"), this.first.getChildByName("Node").getChildByName("name").getComponent(cc.Label).string = "《".concat(App.chineseName, "》用户协议与隐私政策条款:");
                var t = this.privacy.getChildByName("Node").getChildByName("scrollView").getChildByName("view").getChildByName("content").getChildByName("company").getComponent(cc.Label),
                    i = this.privacy.getChildByName("Node").getChildByName("scrollView").getChildByName("view").getChildByName("content").getChildByName("detail").getComponent(cc.Label);
                "" === App.companyName ? (t.string = "", i.string = "") : "ky" === App.companyName ? PlatformCode === PlatformList.OPPO ? (t.string = "", i.string = "") : (t.string = "石家庄凯益网络科技有限公司", i.string = "客服QQ：415166570\n邮箱：lic998h@163.com\n地址：石家庄天山世界之门F座618室") : "cx" === App.companyName ? PlatformCode === PlatformList.OPPO ? (t.string = "", i.string = "") : (t.string = "石家庄晨希互娱网络科技有限公司", i.string = "客服QQ：1592499140\n邮箱：cx20210308@163.com\n地址：石家庄天山世界之门G座808室") : "ch" === App.companyName ? PlatformCode === PlatformList.OPPO ? (t.string = "", i.string = "") : (t.string = "石家庄初灏网络科技有限公司", i.string = "客服QQ：188179945\n邮箱：ch20201223@163.com\n地址：石家庄天山世界之门H座623室") : "kg" === App.companyName && (PlatformCode === PlatformList.OPPO ? (t.string = "", i.string = "") : (t.string = "石家庄夸古网络科技有限公司", i.string = "客服QQ：415166570\n邮箱：kg20220401@163.com\n地址：石家庄天山世界之门F座2305室")), this.service.getChildByName("Node").getChildByName("scrollView").getChildByName("view").getChildByName("content").getChildByName("company").getComponent(cc.Label).string = t.string, this.service.getChildByName("Node").getChildByName("scrollView").getChildByName("view").getChildByName("content").getChildByName("detail").getComponent(cc.Label).string = i.string, this.buttonList = this.first.getChildByName("buttonList").children
            },
            initialize: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (this.allowButton = e, this.handle = t, this.handle || console.log("无效的句柄"), e || (this.buttonList[0].active = !1), i) switch (this.tName = i, i) {
                    case "service":
                        this.first.active = !1, this.service.active = !0;
                        break;
                    case "privacy":
                        this.first.active = !1, this.privacy.active = !0
                }
            },
            executeClose: function () {
                this.first.active || (this.privacy.active && (this.privacy.active = !1), this.service.active && (this.service.active = !1), this.first.active = !0)
            },
            buttonTouchEventCallBack: function (e) {
                switch (e.target.name) {
                    case "service":
                        this.first.active = !1, this.service.active = !0;
                        break;
                    case "privacy":
                        this.first.active = !1, this.privacy.active = !0;
                        break;
                    case "closeButton":
                        this.tName ? this.node.removeFromParent(!0) : this.executeClose();
                        break;
                    case "refuseButton":
                        console.log("执行拒绝"), PlatformCode === PlatformList.VIVO || PlatformCode === PlatformList.OPPO ? (console.log("exitApplication"), qg.exitApplication()) : PlatformCode === PlatformList.QQ ? qq.exitMiniProgram({}) : cc.game.end();
                        break;
                    case "agreeButton":
                        this.allowButton ? (cc.sys.localStorage.setItem("agreement-".concat(App.storageName), "1"), this.handle && this.handle(), this.node.removeFromParent(!0)) : this.node.removeFromParent(!0)
                }
            }
        }), cc._RF.pop()
    }, {}],
    AlertWindow: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "fc99bXo01NOe6KYcxjv89Kl", "AlertWindow"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.window = this.node.getChildByName("window"), this.window.scale = 0, this.msg = this.window.getChildByName("MessageItem").getChildByName("msg").getComponent(cc.Label)

                labelLanguage(this.node,"New Label")
            },
            initialize: function (e) {
                this.msg.string = getLng("恭喜获得金币%s",e)
            },
            start: function () {
                cc.tween(this.window).to(.2, {
                    scale: 1
                }, {
                    easing: "sineIn"
                }).start()
            },
            buttonTouchEventCallBack: function () {
                // SoundMgr.playEffect("button");
                this.node.removeFromParent(!0)
            }
        }), cc._RF.pop()
    }, {}],
    AutoRollControl: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "da78dKC4j9JHqay/+QRFaU9", "AutoRollControl"), cc.Class({
            extends: cc.Component,
            properties: {
                MoveSpeed: {
                    default: 0,
                    type: cc.Integer,
                    displayName: "滚动速度"
                }
            },
            onLoad: function () {
                this.itemList = [];
                for (var e = 0; e < this.node.children.length; e++) this.itemList.push(this.node.children[e])
            },
            update: function (e) {
                for (var t = 0; t < this.itemList.length; t++) {
                    var i = this.itemList[t],
                        o = i.height;
                    if (i.y += this.MoveSpeed * e, i.y > o) {
                        var n = this.itemList[this.itemList.length - 1].y,
                            a = this.itemList.shift();
                        a.y = n - o, this.itemList.push(a);
                        break
                    }
                }
            }
        }), cc._RF.pop()
    }, {}],
    ChildrenControl: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "34f17YlFRpOf6t85i2BnSIF", "ChildrenControl"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.node.active = PlatformCode !== PlatformList.华为
            }
        }), cc._RF.pop()
    }, {}],
    Config: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "a55fawYl4JEB6+HOHfQ7BYd", "Config"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.StrikeStyle = i.PlayerStatus = i.UnitStatus = i.UnitStyle = i.IncreaseValue = i.TowerWidth = i.LevelStatus = void 0;
        var o = cc.Enum({
            "完成": 1,
            "进行中": 2,
            "未开启": 3
        });
        i.LevelStatus = o;
        i.TowerWidth = 319;
        i.IncreaseValue = 100;
        var n = cc.Enum({
            "剑士": 1,
            "大剑士": 2,
            "双刀": 3,
            "弓箭手": 4,
            "魔法师": 5,
            "小喷火龙": 6,
            "盾兵": 7,
            "大盾兵": 8,
            "大剑": 9,
            "盾牌": 10,
            "小偷": 11,
            "巫师": 12,
            "龙蛋": 13,
            "双头喷火龙": 14,
            "狼人": 15,
            "狼": 16
        });
        i.UnitStyle = n;
        var a = cc.Enum({
            "待机": 1,
            "攻击": 2,
            "还击": 3,
            "死亡": 4,
            "孵化": 5
        });
        i.UnitStatus = a;
        var s = cc.Enum({
            "待机": 1,
            "跳跃": 2,
            "攻击": 3,
            "还击": 4,
            "胜利": 5,
            "死亡": 6
        });
        i.PlayerStatus = s;
        var r = cc.Enum({
            "无": 1,
            "近战": 2,
            "远程": 3,
            "增益": 4
        });
        i.StrikeStyle = r, window.SlotList = [{
            ZJ_1_tou: ["ZJ_1_tou", "ZJ1_2_tou", "ZJ1_2_tou", "ZJ1_2_tou"],
            ZJ_1_biaoqing: ["ZJ_1_biaoqing", "ZJ_1_biaoqing", "ZJ_1_biaoqing", "ZJ_1_biaoqing"],
            ZJ1_1_shenti: ["ZJ1_1_shenti", "ZJ1_1_shenti", "ZJ1_1_shenti", "ZJ1_1_shenti"],
            ZJ1_1_dabi1: ["ZJ1_1_dabi1", "ZJ1_1_dabi1", "ZJ1_1_dabi1", "ZJ1_1_dabi1"],
            ZJ1_1_xiaobi1: ["ZJ1_1_xiaobi1", "ZJ1_1_xiaobi1", "ZJ1_1_xiaobi1", "ZJ1_1_xiaobi1"],
            ZJ1_1_wuqi: ["ZJ1_1_wuqi", "ZJ1_2_wuqi", "ZJ1_3_wuqi", "ZJ1_4_wuqi"],
            ZJ1_1_dabi2: ["ZJ1_1_dabi2", "ZJ1_1_dabi2", "ZJ1_1_dabi2", "ZJ1_1_dabi2"],
            ZJ1_1_xiaobi2: ["ZJ1_1_xiaobi2", "ZJ1_1_xiaobi2", "ZJ1_1_xiaobi2", "ZJ1_1_xiaobi2"],
            ZJ1_1_pigu: ["ZJ1_1_pigu", "ZJ1_1_pigu", "ZJ1_1_pigu", "ZJ1_1_pigu"],
            ZJ1_1_datui1: ["ZJ1_1_datui1", "ZJ1_1_datui1", "ZJ1_1_datui1", "ZJ1_1_datui1"],
            ZJ1_1_xiaotui1: ["ZJ1_1_xiaotui1", "ZJ1_1_xiaotui1", "ZJ1_1_xiaotui1", "ZJ1_1_xiaotui1"],
            ZJ1_1_jiao1: ["ZJ1_1_jiao1", "ZJ1_1_jiao1", "ZJ1_1_jiao1", "ZJ1_1_jiao1"],
            ZJ1_1_datui2: ["ZJ1_1_datui2", "ZJ1_1_datui2", "ZJ1_1_datui2", "ZJ1_1_datui2"],
            ZJ1_1_xiaotui2: ["ZJ1_1_xiaotui2", "ZJ1_1_xiaotui2", "ZJ1_1_xiaotui2", "ZJ1_1_xiaotui2"],
            ZJ1_1_jiao2: ["ZJ1_1_jiao2", "ZJ1_1_jiao2", "ZJ1_1_jiao2", "ZJ1_1_jiao2"],
            ZJ1_4_chibang1: ["None", "None", "None", "ZJ1_4_chibang1"],
            ZJ1_4_chibang2: ["None", "None", "None", "ZJ1_4_chibang2"],
            ZJ1_3_weijin: ["None", "None", "ZJ1_3_weijin", "ZJ1_3_weijin"],
            ZJ1_3_kuijia1: ["None", "None", "ZJ1_3_kuijia1", "ZJ1_3_kuijia1"],
            ZJ1_3_kuijia2: ["None", "None", "ZJ1_3_kuijia2", "ZJ1_3_kuijia2"],
            ZJ1_3_huqun2: ["None", "None", "ZJ1_3_huqun2", "ZJ1_3_huqun2"],
            ZJ1_3_huqun3: ["None", "None", "ZJ1_3_huqun3", "ZJ1_3_huqun3"],
            ZJ1_3_huqun1: ["None", "None", "ZJ1_3_huqun1", "ZJ1_3_huqun1"]
        }, {
            ZJ_1_tou: ["ZJ2_1_tou", "ZJ2_1_tou", "ZJ2_1_tou", "ZJ2_1_tou"],
            ZJ2_3_toufa: ["None", "None", "ZJ2_3_toufa", "ZJ2_3_toufa"],
            ZJ2_3_maozi: ["None", "None", "ZJ2_3_maozi", "ZJ2_3_maozi"],
            ZJ2_3_bianzi1: ["None", "None", "ZJ2_3_bianzi1", "ZJ2_3_bianzi1"],
            ZJ2_3_bianzi2: ["None", "None", "ZJ2_3_bianzi2", "ZJ2_3_bianzi2"],
            ZJ_1_biaoqing: ["ZJ2_1_biaoqing", "ZJ2_1_biaoqing", "ZJ2_1_biaoqing", "ZJ2_1_biaoqing"],
            ZJ1_1_shenti: ["ZJ2_1_shenti", "ZJ2_2_shenti", "ZJ2_2_shenti", "ZJ2_2_shenti"],
            ZJ1_1_dabi1: ["ZJ2_1_dabi1", "ZJ2_1_dabi1", "ZJ2_1_dabi1", "ZJ2_1_dabi1"],
            ZJ1_1_xiaobi1: ["ZJ2_1_xiaobi1", "ZJ2_1_xiaobi1", "ZJ2_1_xiaobi1", "ZJ2_1_xiaobi1"],
            ZJ1_1_wuqi: ["ZJ2_1_wuqi", "ZJ2_2_wuqi", "ZJ2_3_wuqi", "ZJ2_4_wuqi"],
            ZJ1_1_dabi2: ["ZJ2_1_dabi2", "ZJ2_1_dabi2", "ZJ2_1_dabi2", "ZJ2_1_dabi2"],
            ZJ1_1_xiaobi2: ["ZJ2_1_xiaobi2", "ZJ2_1_xiaobi2", "ZJ2_1_xiaobi2", "ZJ2_1_xiaobi2"],
            ZJ1_1_datui1: ["ZJ2_1_datui1", "ZJ2_1_datui1", "ZJ2_1_datui1", "ZJ2_1_datui1"],
            ZJ1_1_xiaotui1: ["ZJ2_1_xiaotui1", "ZJ2_1_xiaotui1", "ZJ2_1_xiaotui1", "ZJ2_1_xiaotui1"],
            ZJ1_1_jiao1: ["ZJ2_1_jiao1", "ZJ2_1_jiao1", "ZJ2_1_jiao1", "ZJ2_1_jiao1"],
            ZJ1_1_datui2: ["ZJ2_1_datui2", "ZJ2_1_datui2", "ZJ2_1_datui2", "ZJ2_1_datui2"],
            ZJ1_1_xiaotui2: ["ZJ2_1_xiaotui2", "ZJ2_1_xiaotui2", "ZJ2_1_xiaotui2", "ZJ2_1_xiaotui2"],
            ZJ1_1_jiao2: ["ZJ2_1_jiao2", "ZJ2_1_jiao2", "ZJ2_1_jiao2", "ZJ2_1_jiao2"],
            ZJ1_3_huqun2: ["None", "ZJ2_1_cao1", "ZJ2_1_cao1", "ZJ2_1_cao1"],
            ZJ1_3_huqun3: ["None", "ZJ2_1_cao2", "ZJ2_1_cao2", "ZJ2_1_cao2"],
            ZJ1_3_huqun1: ["None", "ZJ2_1_qunzi", "ZJ2_1_qunzi", "ZJ2_1_qunzi"],
            ZJ2_4_pifeng: ["None", "None", "None", "ZJ2_4_pifeng"]
        }, {
            ZJ_1_tou: ["ZJ3_1_tou", "ZJ3_1_tou", "ZJ3_1_tou", "ZJ3_1_tou"],
            ZJ3_3_toukui: ["None", "None", "ZJ3_3_toukui", "ZJ3_3_toukui"],
            ZJ_1_biaoqing: ["ZJ3_1_biaoqing", "ZJ3_1_biaoqing", "ZJ3_1_biaoqing", "ZJ3_1_biaoqing"],
            ZJ3_2_kuijia1: ["None", "ZJ3_2_kuijia1", "ZJ3_2_kuijia1", "ZJ3_2_kuijia1"],
            ZJ1_1_shenti: ["ZJ3_1_shenti", "ZJ3_1_shenti", "ZJ3_1_shenti", "ZJ3_1_shenti"],
            ZJ1_1_pigu: ["ZJ3_1_pigu", "ZJ3_1_pigu", "ZJ3_1_pigu", "ZJ3_1_pigu"],
            ZJ1_1_dabi1: ["ZJ3_1_dabi1", "ZJ3_1_dabi1", "ZJ3_1_dabi1", "ZJ3_1_dabi1"],
            ZJ1_1_xiaobi1: ["ZJ3_1_xiaobi1", "ZJ3_1_xiaobi1", "ZJ3_1_xiaobi1", "ZJ3_1_xiaobi1"],
            ZJ1_1_wuqi: ["ZJ3_1_wuqi", "ZJ3_2_jian", "ZJ3_3_wuqi", "ZJ3_4_wuqi"],
            ZJ3_2_kuijia2: ["None", "ZJ3_2_kuijia2", "ZJ3_2_kuijia2", "ZJ3_2_kuijia2"],
            ZJ1_1_dabi2: ["ZJ3_1_dabi2", "ZJ3_1_dabi2", "ZJ3_1_dabi2", "ZJ3_1_dabi2"],
            ZJ1_1_xiaobi2: ["ZJ3_1_xiaobi2", "ZJ3_1_xiaobi2", "ZJ3_1_xiaobi2", "ZJ3_1_xiaobi2"],
            ZJ1_1_datui1: ["ZJ3_1_datui1", "ZJ3_1_datui1", "ZJ3_1_datui1", "ZJ3_1_datui1"],
            ZJ1_1_xiaotui1: ["ZJ3_1_xiaotui1", "ZJ3_1_xiaotui1", "ZJ3_1_xiaotui1", "ZJ3_1_xiaotui1"],
            ZJ1_1_jiao1: ["ZJ3_1_jiao1", "ZJ3_1_jiao1", "ZJ3_1_jiao1", "ZJ3_1_jiao1"],
            ZJ1_1_datui2: ["ZJ3_1_datui2", "ZJ3_1_datui2", "ZJ3_1_datui2", "ZJ3_1_datui2"],
            ZJ1_1_xiaotui2: ["ZJ3_1_xiaotui2", "ZJ3_1_xiaotui2", "ZJ3_1_xiaotui2", "ZJ3_1_xiaotui2"],
            ZJ1_1_jiao2: ["ZJ3_1_jiao2", "ZJ3_1_jiao2", "ZJ3_1_jiao2", "ZJ3_1_jiao2"],
            ZJ1_3_huqun2: ["None", "ZJ3_2_huqun1", "ZJ3_2_huqun1", "ZJ3_2_huqun1"],
            ZJ1_3_huqun3: ["None", "ZJ3_2_huqun2", "ZJ3_2_huqun2", "ZJ3_2_huqun2"],
            ZJ1_3_huqun1: ["None", "ZJ3_2_qunzi2", "ZJ3_2_qunzi2", "ZJ3_2_qunzi2"],
            ZJ3_2_qunzi1: ["None", "ZJ3_2_qunzi1", "ZJ3_2_qunzi1", "ZJ3_2_qunzi1"],
            ZJ2_4_pifeng: ["None", "None", "None", "ZJ3_4_pifeng"]
        }, {
            ZJ_1_tou: ["ZJ4_1_tou", "ZJ4_1_tou", "ZJ4_1_tou", "ZJ4_1_tou"],
            ZJ3_3_toukui: ["None", "None", "ZJ4_3_toukui", "ZJ4_3_toukui"],
            ZJ_1_biaoqing: ["ZJ4_1_biaoqing", "ZJ4_1_biaoqing", "ZJ4_1_biaoqing", "ZJ4_1_biaoqing"],
            ZJ3_2_kuijia1: ["None", "ZJ4_2_kuijia1", "ZJ4_2_kuijia1", "ZJ4_2_kuijia1"],
            ZJ1_1_shenti: ["ZJ4_1_shenti", "ZJ4_2_shenti", "ZJ4_2_shenti", "ZJ4_2_shenti"],
            ZJ1_1_pigu: ["ZJ4_1_pigu", "ZJ4_1_pigu", "ZJ4_1_pigu", "ZJ4_1_pigu"],
            ZJ1_1_dabi1: ["ZJ4_1_dabi1", "ZJ4_1_dabi1", "ZJ4_1_dabi1", "ZJ4_1_dabi1"],
            ZJ1_1_xiaobi1: ["ZJ4_1_xiaobi1", "ZJ4_1_xiaobi1", "ZJ4_1_xiaobi1", "ZJ4_1_xiaobi1"],
            ZJ1_1_wuqi: ["ZJ4_1_wuqi", "ZJ4_2_wuqi", "ZJ4_3_wuqi", "ZJ4_4_wuqi"],
            ZJ3_2_kuijia2: ["None", "ZJ4_2_kuijia2", "ZJ4_2_kuijia2", "ZJ4_2_kuijia2"],
            ZJ1_1_dabi2: ["ZJ4_1_dabi2", "ZJ4_1_dabi2", "ZJ4_1_dabi2", "ZJ4_1_dabi2"],
            ZJ1_1_xiaobi2: ["ZJ4_1_xaiobi2", "ZJ4_1_xaiobi2", "ZJ4_1_xaiobi2", "ZJ4_1_xaiobi2"],
            ZJ1_1_datui1: ["ZJ4_1_datui1", "ZJ4_1_datui1", "ZJ4_1_datui1", "ZJ4_1_datui1"],
            ZJ1_1_xiaotui1: ["ZJ4_1_xaiotui1", "ZJ4_1_xaiotui1", "ZJ4_1_xaiotui1", "ZJ4_1_xaiotui1"],
            ZJ1_1_jiao1: ["ZJ4_1_jiao1", "ZJ4_1_jiao1", "ZJ4_1_jiao1", "ZJ4_1_jiao1"],
            ZJ1_1_datui2: ["ZJ4_1_datui2", "ZJ4_1_datui2", "ZJ4_1_datui2", "ZJ4_1_datui2"],
            ZJ1_1_xiaotui2: ["ZJ4_1_xiaotui2", "ZJ4_1_xiaotui2", "ZJ4_1_xiaotui2", "ZJ4_1_xiaotui2"],
            ZJ1_1_jiao2: ["ZJ4_1_jiao2", "ZJ4_1_jiao2", "ZJ4_1_jiao2", "ZJ4_1_jiao2"],
            ZJ1_3_huqun2: ["None", "ZJ4_2_huqun1", "ZJ4_2_huqun1", "ZJ4_2_huqun1"],
            ZJ1_3_huqun3: ["None", "ZJ4_2_huqun2", "ZJ4_2_huqun2", "ZJ4_2_huqun2"],
            ZJ1_3_huqun1: ["None", "None", "None", "ZJ4_4_qunzi"],
            ZJ2_4_pifeng: ["None", "None", "None", "ZJ4_4_pifeng"]
        }, {
            ZJ_1_tou: ["ZJ5_1_tou", "ZJ5_2_tou", "ZJ5_2_tou", "ZJ5_2_tou"],
            ZJ5_2_sui1: ["None", "ZJ5_2_sui1", "ZJ5_2_sui1", "ZJ5_2_sui1"],
            ZJ5_2_sui2: ["None", "ZJ5_2_sui2", "ZJ5_2_sui2", "ZJ5_2_sui2"],
            ZJ_1_biaoqing: ["ZJ5_1_biaoqing", "ZJ5_1_biaoqing", "ZJ5_1_biaoqing", "ZJ5_1_biaoqing"],
            ZJ5_2_caihui: ["None", "ZJ5_2_caihui", "ZJ5_2_caihui", "ZJ5_2_caihui"],
            ZJ1_1_shenti: ["ZJ5_1_shenti", "ZJ5_1_shenti", "ZJ5_1_shenti", "ZJ5_1_shenti"],
            ZJ1_1_pigu: ["ZJ5_1_pigu", "ZJ5_1_pigu", "ZJ5_1_pigu", "ZJ5_1_pigu"],
            ZJ1_1_dabi1: ["ZJ5_1_dabi1", "ZJ5_2_dabi1", "ZJ5_2_dabi1", "ZJ5_2_dabi1"],
            ZJ1_1_xiaobi1: ["ZJ5_1_xiaobi1", "ZJ5_1_xiaobi1", "ZJ5_1_xiaobi1", "ZJ5_1_xiaobi1"],
            ZJ1_1_wuqi: ["ZJ5_1_wuqi", "ZJ5_2_wuqi", "ZJ5_3_wuqi", "ZJ5_4_wuqi"],
            ZJ1_1_dabi2: ["ZJ5_1_dabi2", "ZJ5_2_dabi2", "ZJ5_2_dabi2", "ZJ5_2_dabi2"],
            ZJ1_1_xiaobi2: ["ZJ5_1_xiaobi2", "ZJ5_1_xiaobi2", "ZJ5_1_xiaobi2", "ZJ5_1_xiaobi2"],
            ZJ1_1_datui1: ["ZJ5_1_datui1", "ZJ5_1_datui1", "ZJ5_1_datui1", "ZJ5_1_datui1"],
            ZJ1_1_xiaotui1: ["ZJ5_1_xiaotui1", "ZJ5_1_xiaotui1", "ZJ5_1_xiaotui1", "ZJ5_1_xiaotui1"],
            ZJ1_1_jiao1: ["ZJ5_1_jiao1", "ZJ5_1_jiao1", "ZJ5_1_jiao1", "ZJ5_1_jiao1"],
            ZJ1_1_datui2: ["ZJ5_1_datui2", "ZJ5_1_datui2", "ZJ5_1_datui2", "ZJ5_1_datui2"],
            ZJ1_1_xiaotui2: ["ZJ5_1_xiaotui2", "ZJ5_1_xiaotui2", "ZJ5_1_xiaotui2", "ZJ5_1_xiaotui2"],
            ZJ1_1_jiao2: ["ZJ5_1_jiao2", "ZJ5_1_jiao2", "ZJ5_1_jiao2", "ZJ5_1_jiao2"],
            ZJ1_3_huqun2: ["None", "None", "ZJ5_qunzi2", "ZJ5_qunzi2"],
            ZJ1_3_huqun3: ["None", "None", "ZJ5_qunzi3", "ZJ5_qunzi3"],
            ZJ1_3_huqun1: ["None", "None", "ZJ5_qunzi1", "ZJ5_qunzi1"],
            ZJ2_4_pifeng: ["None", "None", "None", "ZJ5_4_pifeng"]
        }, {
            ZJ_1_tou: ["ZJ6_1_tou", "ZJ6_1_tou", "ZJ6_1_tou", "ZJ6_1_tou"],
            ZJ1_1_shenti: ["ZJ6_1_shenti", "ZJ6_1_shenti", "ZJ6_1_shenti", "ZJ6_1_shenti"],
            ZJ1_1_pigu: ["ZJ6_1_pigu", "ZJ6_1_pigu", "ZJ6_1_pigu", "ZJ6_1_pigu"],
            ZJ1_1_dabi1: ["ZJ6_1_dabi1", "ZJ6_1_dabi1", "ZJ6_1_dabi1", "ZJ6_1_dabi1"],
            ZJ1_1_xiaobi1: ["ZJ6_1_xiaobi1", "ZJ6_2_xiaobi1", "ZJ6_2_xiaobi1", "ZJ6_2_xiaobi1"],
            ZJ1_1_wuqi: ["ZJ6_1_wuqi", "ZJ6_2_wuqi", "ZJ6_3_wuqi", "ZJ6_4_wuqi"],
            ZJ1_1_dabi2: ["ZJ6_1_dabi2", "ZJ6_1_dabi2", "ZJ6_1_dabi2", "ZJ6_1_dabi2"],
            ZJ1_1_xiaobi2: ["ZJ6_1_xiaobi2", "ZJ6_2_xiaobi2", "ZJ6_2_xiaobi2", "ZJ6_2_xiaobi2"],
            ZJ1_1_datui1: ["ZJ6_1_datui1", "ZJ6_1_datui1", "ZJ6_1_datui1", "ZJ6_1_datui1"],
            ZJ1_1_xiaotui1: ["ZJ6_1_xiaotui1", "ZJ6_1_xiaotui1", "ZJ6_1_xiaotui1", "ZJ6_1_xiaotui1"],
            ZJ1_1_jiao1: ["ZJ6_1_jiao1", "ZJ6_1_jiao1", "ZJ6_1_jiao1", "ZJ6_1_jiao1"],
            ZJ1_1_datui2: ["ZJ6_1_datui2", "ZJ6_1_datui2", "ZJ6_1_datui2", "ZJ6_1_datui2"],
            ZJ1_1_xiaotui2: ["ZJ6_1_xiaotui2", "ZJ6_1_xiaotui2", "ZJ6_1_xiaotui2", "ZJ6_1_xiaotui2"],
            ZJ1_1_jiao2: ["ZJ6_1_jiao2", "ZJ6_1_jiao2", "ZJ6_1_jiao2", "ZJ6_1_jiao2"],
            ZJ1_3_huqun2: ["None", "None", "ZJ6_3_huqun1", "ZJ6_3_huqun1"],
            ZJ1_3_huqun3: ["None", "None", "ZJ6_3_huqun2", "ZJ6_3_huqun2"],
            ZJ1_3_huqun1: ["None", "None", "ZJ6_3_qunzi", "ZJ6_3_qunzi"],
            ZJ2_4_pifeng: ["None", "None", "None", "ZJ6_4_pifeng"]
        }], cc._RF.pop()
    }, {}],
    DisplayControl: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "6a170Fv8nZFb7W/gpv4vXQl", "DisplayControl"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var e = this.node.getComponent(cc.Sprite),
                    t = e.spriteFrame.name,
                    i = t.split("@");
                t = PlatformCode === PlatformList.头条 || PlatformCode === PlatformList.QQ ? "".concat(i[0], "@tt") : "".concat(i[0], "@other"), AssetMgr.setSpriteFrameByTexture(e, "InterfaceTextures", t)
            }
        }), cc._RF.pop()
    }, {}],
    DisplayItem: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "491c1pEoc9A+rqd5vaQaN2W", "DisplayItem"), cc.Class({
            extends: cc.Component,
            properties: {
                Armature: {
                    default: null,
                    type: sp.Skeleton,
                    displayName: "角色动画"
                },
                ArmatureList: {
                    default: [],
                    type: sp.SkeletonData,
                    displayName: "动画列表"
                }
            },
            initialize: function (e) {
                console.log("角色展示动画序号 = ", e);
                var t = e - 1;
                console.log("数组下标 = ", t), this.Armature.skeletonData = this.ArmatureList[t];
                for (var i = SlotList[t], o = Object.keys(i), n = 0; n < o.length; n++) {
                    var a = o[n],
                        s = i[a][2];
                    console.log("Key = ", a, "ImgName = ", s), this.Armature.setAttachment(a, s)
                }
                this.Armature.clearTracks(), this.Armature.setAnimation(0, "Attack_LVL4", !1), this.Armature.addAnimation(0, "Attack_LVL4", !1, 0), this.Armature.addAnimation(0, "Idle", !0, 0)
            }
        }), cc._RF.pop()
    }, {}],
    DragonItem: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "3b21c12nnRN4qvUEKiz2QTi", "DragonItem"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var e = this;
                this.node.blood = 0, this.armature = this.node.getChildByName("armature").getComponent(sp.Skeleton), this.blood = this.node.getChildByName("blood").getComponent(cc.Label), this.blood.string = "", this.armature.setStartListener(function (t) {
                    "Attack" === t.animation.name && e.fireHandle && e.fireHandle()
                })
            },
            executeFire: function (e) {
                this.fireHandle = e, this.armature.clearTracks(), this.armature.setAnimation(0, "Attack", !1), this.armature.addAnimation(0, "Idle", !0, 0)
            },
            alterationBlood: function (e) {
                var t = this;
                if (e !== this.node.blood) {
                    var i = !0;
                    e > this.node.blood && (i = !1);
                    var o = Math.abs(this.node.blood - e);
                    this.schedule(function e() {
                        if (o <= 25) return i ? t.node.blood -= o : t.node.blood += o, t.blood.string = t.node.blood, void t.unschedule(e);
                        o -= 25, i ? t.node.blood -= 25 : t.node.blood += 25, t.blood.string = t.node.blood
                    }, .02)
                }
            }
        }), cc._RF.pop()
    }, {}],
    FailureWindow: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "821b8zWGnZJX76T8MH6XQ7m", "FailureWindow"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function () {
                SoundMgr.playEffect("failure");
                adUtils.executeShowFinishBox(function () {
                    adUtils.executeShowFinishAdvertising(!0), adUtils.executeShowFinishLogic(!1)
                })
            },
            initialize: function (e, t) {
                this.levelIndex = e, this.playerIndex = t
            },
            executeReturnToMenuScreen: function () {
                cc.director.loadScene("MenuScene", function () {
                    cc.director.getScene().getChildByName("Canvas").getComponent("MenuScript").initialize()
                })
            },
            executeReplay: function () {
                var e = this,
                    t = "App/Levels/level-".concat(this.levelIndex);
                cc.loader.loadRes(t, cc.Asset, function (t, i) {
                    var o = JsonMgr.deepClone(i.json);
                    cc.director.loadScene("MainScene", function () {
                        cc.director.getScene().getChildByName("Canvas").getComponent("MainScript").initialize(e.levelIndex, e.playerIndex, o)
                    })
                })
            },
            buttonTouchEventCallBack: function (e) {
                switch (SoundMgr.playEffect("button"), e.target.name) {
                    case "backButton":
                        this.executeReturnToMenuScreen();
                        break;
                    case "replayButton":
                        this.executeReplay()
                }
            }
        }), cc._RF.pop()
    }, {}],
    FloorItem: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "71298dwq0JFeJvPzyn8RreP", "FloorItem");
        var o = e("../../Config");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var e = this.node.getChildByName("lock");
                e.zIndex = cc.macro.MAX_ZINDEX, this.node.isEmpty = !0, this.node.isLock = this.node.index >= 5, e.active = this.node.isLock, this.node.isForbid = !0, this.node.childList = [], this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStartCallBack, this)
            },
            registerTouchHandle: function (e) {
                this.touch_handle = e
            },
            insertElement: function (e) {
                this.node.addChild(e), this.node.childList.push(e)
            },
            doCounterattack: function (e) {
                for (var t = 0; t < this.node.childList.length; t++) {
                    var i = this.node.childList[t];
                    i.strikeStyle !== o.StrikeStyle.无 && i.strikeStyle !== o.StrikeStyle.近战 && e.push(i)
                }
            },
            executeDestroy: function (e) {
                var t = this;
                cc.tween(this.node).to(.5, {
                    height: 0
                }).call(function () {
                    ArrayMgr.removeElement(t.node.tower.floorList, t.node), t.node.tower.getComponent("TowerItem").executeRefresh(), e && e(), t.node.removeFromParent(!0)
                }).start()
            },
            onTouchStartCallBack: function (e) {
                this.node.isForbid || this.node.isLock ? console.error("禁用或锁定中....") : this.touch_handle && this.touch_handle(this.node)
            }
        }), cc._RF.pop()
    }, {
        "../../Config": "Config"
    }],
    FrameAnimationControl: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "162bcTiA6RICoCu6CjjmzXM", "FrameAnimationControl"), cc.Class({
            extends: cc.Component,
            properties: {
                FrameList: {
                    default: [],
                    type: cc.SpriteFrame,
                    displayName: "纹理数组"
                },
                Time: {
                    default: 0,
                    type: cc.Float,
                    displayName: "间隔时间"
                }
            },
            onLoad: function () {
                this.Img = this.node.getComponent(cc.Sprite), this.frameIndex = 0, this.Img.spriteFrame = this.FrameList[this.frameIndex]
            },
            onEnable: function () {
                var e = this,
                    t = cc.tween().delay(this.Time).call(function () {
                        e.frameIndex++, e.Img.spriteFrame = e.FrameList[e.frameIndex]
                    });
                cc.tween(this.Img).repeat(this.FrameList.length, t).call(function () {
                    cc.Tween.stopAllByTarget(e.node), e.frameIndex = 0, e.node.active = !1
                }).start()
            }
        }), cc._RF.pop()
    }, {}],
    GuidanceItem: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "d31daPjZaZMYpNn6smvp0vD", "GuidanceItem"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var e = function (e, t) {
                    var i = t - e,
                        o = Math.random();
                    return e + Math.round(o * i)
                }(0, 100);
                this.node.active = e < ServerConfig.isShowHand
            }
        }), cc._RF.pop()
    }, {}],
    HealthControl: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "d61ccryKuxE/Kbz5BVDflzr", "HealthControl"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var e = this.node.getComponent(cc.Sprite),
                    t = cc.view.getVisibleSize(),
                    i = "Platform/Textures/".concat(t.width > t.height ? "notice-horizontal" : "notice-vertical");
                cc.loader.loadRes(i, cc.SpriteFrame, function (t, i) {
                    e.spriteFrame = i
                })
            }
        }), cc._RF.pop()
    }, {}],
    LevelItem: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "83389TKzftNcrYBdlaSbh2L", "LevelItem");
        var o = e("../../Config");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.img = this.node.getComponent(cc.Sprite), this.Lock = this.node.getChildByName("level-lock"), this.number = this.node.getChildByName("num").getComponent(cc.Label)
            },
            initialize: function (e, t, i) {
                this.levelIndex = e, this.status = t, this.touchHandle = i, AssetMgr.setSpriteFrameByTexture(this.img, "GameTextures", "level-item-".concat(this.status)), this.Lock.active = this.status === o.LevelStatus.未开启, this.number.string = String(e).padStart(2, "0")
            },
            buttonTouchEventCallBack: function (e) {
                SoundMgr.playEffect("button"), this.status !== o.LevelStatus.未开启 && this.touchHandle && this.touchHandle(this.levelIndex)
            }
        }), cc._RF.pop()
    }, {
        "../../Config": "Config"
    }],
    LevelWindow: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "fe6c2ZxqhpLtYjWBe/ABKfv", "LevelWindow"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var e = this;
                this.window = this.node.getChildByName("window"), this.window.scale = 0, this.pageView = this.window.getChildByName("PageView").getComponent(cc.PageView), this.pageView.node.on("scroll-ended", function () {
                    e.currentPages = e.pageView.getCurrentPageIndex() + 1, e.pageCode.string = "".concat(e.currentPages, "/").concat(e.maxPages)
                }, this), this.pageCode = this.window.getChildByName("node").getChildByName("pages").getComponent(cc.Label)
            },
            initialize: function (e) {
                var t = this,
                    i = 70;
                this.currentPages = 1, this.maxPages = Math.ceil(i / 20), console.log("总共页数为:", this.maxPages), this.pageCode.string = "".concat(this.currentPages, "/").concat(this.maxPages), AssetMgr.createPrefabByName("PageItem", function (o) {
                    for (var n = 0, a = 0; a < t.maxPages; a++) {
                        var s = 0;
                        s = i > 20 ? 20 : 20 - i;
                        var r = cc.instantiate(o);
                        t.pageView.addPage(r), r.getComponent("PageItem").initialize(n, s, e), i -= s, n += s
                    }
                })
            },
            start: function () {
                cc.tween(this.window).to(.2, {
                    scale: 1
                }, {
                    easing: "sineIn"
                }).start(), adUtils.executeShowOtherAdvertising(!0)
            },
            executeFlipOver: function (e) {
                var t = this.pageView.getPages().length;
                if (e) {
                    if (this.currentPages <= 1) return;
                    return this.currentPages--, void this.pageView.setCurrentPageIndex(this.currentPages - 1)
                }
                this.current >= t || (this.currentPages++, this.pageView.setCurrentPageIndex(this.currentPages - 1))
            },
            buttonTouchEventCallBack: function (e) {
                switch (SoundMgr.playEffect("button"), e.target.name) {
                    case "closeButton":
                        this.node.removeFromParent(!0);
                        break;
                    case "leftButton":
                        this.executeFlipOver(!0);
                        break;
                    case "rightButton":
                        this.executeFlipOver(!1)
                }
            }
        }), cc._RF.pop()
    }, {}],
    LineButton: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "c5d7cnXGzFKCZKJeVVl4fXR", "LineButton"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.flag1 = this.node.getChildByName("flag"), this.time = this.node.getChildByName("time").getComponent(cc.Label), this.allowReceive = !1, 0 === cc.Line.status ? (this.flag1.active = !1, this.time.node.active = !0, this.time.string = TimeMgr.formatTime(cc.Line.time, "/")) : 1 === cc.Line.status ? (this.allowReceive = !0, this.flag1.active = !0, this.time.node.active = !1) : 2 === cc.Line.status && (this.node.active = !1)
            },
            update: function (e) {
                0 === cc.Line.status ? this.time.string = TimeMgr.formatTime(cc.Line.time, "/") : this.time.node.active && (this.time.node.active = !1, 1 === cc.Line.status && (this.flag1.active || (this.allowReceive = !0, this.flag1.active = !0)))
            },
            registerReceiveHandle: function (e) {
                this.handle = e
            },
            buttonTouchEventCallBack: function (e) {
                if (SoundMgr.playEffect("button"), this.allowReceive) {
                    SoundMgr.playEffect("rGold");
                    var t = cc.Line.award[cc.Line.step];
                    if (cc.UserInfo.gold += t.value, SoundMgr.playEffect("receive"), AssetMgr.showAlertMessage(getLng("恭喜获得金币%s",value)), this.handle && this.handle(this.node), cc.Line.step++, cc.Line.step >= cc.Line.award.length) return cc.Line.status = 2, void(this.node.active = !1);
                    cc.Line.status = 0, this.allowReceive = !1, this.flag1.active = !1, cc.Line.time = cc.Line.award[cc.Line.step].time, this.time.node.active = !0, this.time.string = TimeMgr.formatTime(cc.Line.time, "/")
                } else SoundMgr.playEffect("button")
            }
        }), cc._RF.pop()
    }, {}],
    LoadScript: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "d3ddfT5uYdMma8Cp0iXXiAq", "LoadScript");
        var o = e("../../resources/Platform/PlatformUtils");
        window.urlPath = "", window.subpackage = ["bao1", "bao2"], window.NameList = cc.Enum({
            "塔楼守护者": 0,
            "迷你对决": 1,
            "迷你塔防": 2
        }), window.PlatformList = cc.Enum({
            "无": 0,
            "头条": 1,
            "华为": 2,
            OPPO: 3,
            VIVO: 4,
            QQ: 5,
            "微信": 6,
            "百度": 7,
            "快手": 8,
            "魅族": 9,
            UC: 10,
            "游家": 11,
            VIVO_APK: 12,
            OPPO_APK: 13,
            APK_233: 14,
            XIAOMI_APK: 15,
            OTHER_APK: 16,
            APK_4399: 17,
            "摸摸鱼": 18
        }), cc.Class({
            extends: cc.Component,
            properties: {
                Armature: {
                    default: null,
                    type: dragonBones.ArmatureDisplay,
                    displayName: "动画"
                },
                isDebug: {
                    default: !1,
                    displayName: "是否调试"
                },
                GameName: {
                    default: NameList.塔楼守护者,
                    type: NameList,
                    displayName: "游戏名"
                },
                PlatformCode: {
                    default: PlatformList.无,
                    type: PlatformList,
                    displayName: "平台编号"
                }
            },
            onLoad: function () {
                // , this.isDebug || (console.log = function () {}, console.warn = function () {}, console.error = function () {})
                var e = this;
                switch (cc.debug.setDisplayStats(!1), window.PlatformCode = this.PlatformCode, window.App = AppList[this.GameName], PlatformCode) {
                    case PlatformList.头条:
                        App.companyName = App.ByteDance.companyName, window.urlPath = "https://www.kaiygame.com/web/2022/toutiao/".concat(App.companyName, "/").concat(App.appName, "/config").concat(App.ByteDance.version, ".json");
                        break;
                    case PlatformList.华为:
                        App.companyName = App.HuaWei.companyName, window.SequenceNumber = "AE5B87FFEC1A4A5AAC770DC5842255EF", window.urlPath = "https://www.kaiygame.com/web/2022/huawei/".concat(App.companyName, "/").concat(App.appName, "/config").concat(App.HuaWei.version, ".json");
                        break;
                    case PlatformList.OPPO:
                        App.companyName = App.OPPO.companyName, window.SequenceNumber = "A9D369ECF3D945CC9652CA3875974F95", window.urlPath = "https://www.kaiygame.com/web/2022/oppo/".concat(App.companyName, "/").concat(App.appName, "/config").concat(App.OPPO.version, ".json");
                        break;
                    case PlatformList.VIVO:
                        App.companyName = App.VIVO.companyName, window.SequenceNumber = "6A61B8F2078B453991E5E80355EF32EE", window.urlPath = "https://www.kaiygame.com/web/2022/vivo/".concat(App.companyName, "/").concat(App.appName, "/config").concat(App.VIVO.version, ".json");
                        break;
                    case PlatformList.QQ:
                        App.companyName = App.Tencent.companyName, window.SequenceNumber = "EB5A06FD2BB049D69FF4D546687DE8E5", window.urlPath = "https://www.kaiygame.com/web/2022/qq/".concat(App.companyName, "/").concat(App.appName, "/config").concat(App.Tencent.version, ".json");
                        break;
                    case PlatformList.微信:
                        App.companyName = App.WeChat.companyName, window.SequenceNumber = "0740F749888746EF8747909B25778BFA", window.urlPath = "https://www.kaiygame.com/web/2022/weixin/".concat(App.companyName, "/").concat(App.appName, "/config").concat(App.WeChat.version, ".json");
                        break;
                    case PlatformList.百度:
                        App.companyName = App.BaiDu.companyName, window.urlPath = "https://www.kaiygame.com/web/2022/baidu/".concat(App.companyName, "/").concat(App.appName, "/config").concat(App.BaiDu.version, ".json");
                        break;
                    case PlatformList.快手:
                        App.companyName = App.Quick.companyName, window.SequenceNumber = "851C19AB9E4341289B007AAFAD140E7E", window.urlPath = "https://www.kaiygame.com/web/2022/kuaishou/".concat(App.companyName, "/").concat(App.appName, "/config").concat(App.Quick.version, ".json");
                        break;
                    case PlatformList.魅族:
                        App.companyName = App.MeiZu.companyName, window.SequenceNumber = "FFDEDDDBBA0F4D92AF8D69A29CDCF5F8", window.urlPath = "https://www.kaiygame.com/web/2022/meizu/".concat(App.companyName, "/").concat(App.appName, "/config").concat(App.MeiZu.version, ".json");
                        break;
                    case PlatformList.UC:
                        App.companyName = App.UC.companyName, window.urlPath = "https://www.kaiygame.com/web/2022/uc/".concat(App.companyName, "/").concat(App.appName, "/config").concat(App.UC.version, ".json");
                        break;
                    case PlatformList.游家:
                        App.companyName = App.YouJia.companyName, window.urlPath = "https://www.kaiygame.com/web/2022/youjia/".concat(App.companyName, "/").concat(App.appName, "/config").concat(App.YouJia.version, ".json");
                        break;
                    case PlatformList.VIVO_APK:
                        App.companyName = App.VIVO_APK.companyName, window.SequenceNumber = "788EFB87651C46D696B1BF8358DD9540", window.urlPath = "https://www.kaiygame.com/web/2022/gameapk/".concat(App.companyName, "/vivo/").concat(App.appName, "/config").concat(App.VIVO_APK.version, ".json");
                        break;
                    case PlatformList.OPPO_APK:
                        App.companyName = App.OPPO_APK.companyName, window.SequenceNumber = "E3A2319F38CE40F1942C10FE01C5D786", window.urlPath = "https://www.kaiygame.com/web/2022/gameapk/".concat(App.companyName, "/oppo/").concat(App.appName, "/config").concat(App.OPPO_APK.version, ".json");
                        break;
                    case PlatformList.APK_233:
                        App.companyName = App.APK_233.companyName, window.SequenceNumber = "7FAD8BF738EB4466A7874B0C819F2876", window.urlPath = "https://www.kaiygame.com/web/2022/gameapk/".concat(App.companyName, "/233/").concat(App.appName, "/config").concat(App.APK_233.version, ".json");
                        break;
                    case PlatformList.XIAOMI_APK:
                        App.companyName = App.XIAOMI_APK.companyName, window.SequenceNumber = "6E3312E35E2C426EB981AE12941F9CB6", window.urlPath = "https://www.kaiygame.com/web/2022/gameapk/".concat(App.companyName, "/xiaomi/").concat(App.appName, "/config").concat(App.XIAOMI_APK.version, ".json");
                        break;
                    case PlatformList.OTHER_APK:
                        App.companyName = App.OTHER_APK.companyName, window.SequenceNumber = "A55D65286E784411A94158801D778593", window.urlPath = "https://www.kaiygame.com/web/2022/gameapk/".concat(App.companyName, "/other/").concat(App.appName, "/config").concat(App.OTHER_APK.version, ".json");
                        break;
                    case PlatformList.APK_4399:
                        App.companyName = App.APK_4399.companyName, window.SequenceNumber = "71F7246C952A457092266A038B86DFD4", window.urlPath = "https://www.kaiygame.com/web/2022/gameapk/".concat(App.companyName, "/4399/").concat(App.appName, "/config").concat(App.OTHER_APK.version, ".json");
                        break;
                    case PlatformList.摸摸鱼:
                        App.companyName = App.Fish_APK.companyName, window.SequenceNumber = "CBB1AB01FE984CFA80412FB2899405BC", window.urlPath = "https://www.kaiygame.com/web/2022/gameapk/".concat(App.companyName, "/mmy/").concat(App.appName, "/config").concat(App.Fish_APK.version, ".json")
                }
                if ("" !== App.logoName && App.logoName ? this.Armature.playAnimation(App.logoName, -1) : this.Armature.node.active = !1, this.LoginWindow = this.node.getChildByName("hw-LoginWindow"), this.LoginWindow && (this.LoginWindow.getComponent("hw-LoginWindow").registerLoginHandle(function () {
                        e.executeLoginHuaWei(e.executeEnterNextScreen.bind(e))
                    }), this.LoginWindow.active = !1), PlatformCode !== PlatformList.游家) {
                    var t = Object.keys(PlatformList)[window.PlatformCode];
                    window.GAME_NAME = "".concat(App.chineseName, "_").concat(t)
                }
                window.adUtils = new o.PlatformUtils, this.progress = this.node.getChildByName("progress").getChildByName("mask"), this.progressCount = 0, this.maxWidth = this.progress.width, this.progress.width = 0
            },
            start: function () {

                window.initLng("en-us")

                var e = this;
                adUtils.requestLocation(function () {
                    console.log("实际游戏配置:", ServerConfig), adUtils.APK_SHOWAD(), adUtils.initialize(), ServerConfig.sendBox && 3 === ServerConfig.sendBox.length ? ServerConfig.sendBox[3] = ServerConfig.sendBox[0] : ServerConfig.sendBox = null, ServerConfig.winVideo && ServerConfig.winVideo > 0 ? ServerConfig.winCount = ServerConfig.winVideo : ServerConfig.winCount = 0, ServerConfig.loseVideo && ServerConfig.loseVideo > 0 ? ServerConfig.loseCount = ServerConfig.loseVideo : ServerConfig.loseVideo = 0, e.loadSpriteFramePath()
                })
            },
            instantiationStorage: function () {
                var e = cc.sys.localStorage.getItem(App.storageName);
                e && "" !== e ? cc.UserInfo = JSON.parse(e) : (console.log("当前为空对象, 初始化用户信息"), cc.UserInfo = UserInfo, cc.UserInfo.Login || (cc.UserInfo.Login = {}), cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.UserInfo)))
            },
            loadSpriteFramePath: function () {
                var e = this;
                cc.loader.loadRes("App/Json/ImageList", cc.Asset, function (t, i) {
                    t || AssetMgr.registerSpriteFramePath(i.json), e.loadPrefabPath()
                })
            },
            loadPrefabPath: function () {
                var e = this;
                cc.loader.loadRes("App/Json/PrefabList", cc.Asset, function (t, i) {
                    t || AssetMgr.registerPrefabPath(i.json), e.loadTexturePath()
                })
            },
            loadTexturePath: function () {
                var e = this;
                cc.loader.loadRes("App/Json/TextureList", cc.Asset, function (t, i) {
                    t || AssetMgr.registerTexturePath(i.json), e.loadAudioPath()
                })
            },
            loadAudioPath: function () {
                var e = this;
                cc.loader.loadRes("App/Json/AudioList", cc.Asset, function (t, i) {
                    t || SoundMgr.registerSoundPath(i.json), e.executeSimulationLoading()
                })
            },
            executeSimulationLoading: function () {
                var e = this;
                this.schedule(function () {
                    if (e.progressCount++, e.progress.width = e.progressCount / 100 * e.maxWidth, e.progressCount >= 100) {
                        var t = cc.sys.localStorage.getItem("agreement-".concat(App.storageName));
                        if (PlatformCode === PlatformList.VIVO || PlatformCode === PlatformList.OPPO || PlatformCode === PlatformList.QQ || PlatformCode === PlatformList.华为) return t ? void e.executeEnterNextScreen() : void cc.loader.loadRes("Platform/Prefabs/AgreementWindow", cc.Prefab, function (t, i) {
                            var o = cc.instantiate(i);
                            cc.director.getScene().addChild(o), o.getComponent("AgreementWindow").initialize(!0, e.executeEnterNextScreen.bind(e))
                        });
                        e.executeEnterNextScreen()
                    }
                }, .005, 99)
            },
            executeLoginHuaWei: function (e) {
                var t = this;
                t.LoginWindow.active = !1, qg.gameLogin({
                    forceLogin: 1,
                    appid: App.HuaWei.appId,
                    success: function (t) {
                        e && e()
                    },
                    fail: function (e, i) {
                        t.LoginWindow.active = !0
                    }
                })
            },
            executeEnterNextScreen: function () {
                var e = this,
                    t = function () {
                        e.instantiationStorage(), cc.director.loadScene("MenuScene", function () {
                            cc.director.getScene().getChildByName("Canvas").getComponent("MenuScript").initialize()
                        })
                    };
                if (PlatformCode === PlatformList.华为) return ServerConfig.allowLogin ? void this.executeLoginHuaWei(t) : void t();
                t()
            }
        }), cc._RF.pop()
    }, {
        "../../resources/Platform/PlatformUtils": "PlatformUtils"
    }],
    LoginRecord: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "de0e45Qo21Jma3eMJlFuFGR", "LoginRecord"), 
        cc.LoginRecord = cc.LoginRecord || {}, 
        cc.LoginRecord.setRegisterStatus = function (e) {
            cc.UserInfo.login.isAllowRegister = e, cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.UserInfo))
        }, cc.LoginRecord.getRegisterStatus = function () {
            if(cc.UserInfo.login.isAllowRegister!=null && (new Date).getDate() != cc.UserInfo.login.dayTime)
            {
                cc.UserInfo.login.isAllowRegister = null;
                cc.UserInfo.login.lastDay += 1;
                if(cc.UserInfo.login.lastDay >= 7)
                    cc.UserInfo.login.lastDay = 0;
            }
            return 1 === (cc.UserInfo.login.isAllowRegister || 1)
        }, cc.LoginRecord.setLastRegisterDay = function (e) {
            var t = e >= 7 ? 0 : e;
            cc.UserInfo.login.lastDay = t, cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.UserInfo))
        }, cc.LoginRecord.getLastRegisterDay = function () {
            var e = cc.UserInfo.login.lastDay || 0;
            return Number(e)
        }, cc.LoginRecord.setRegisterDay = function (e) {
            cc.UserInfo.login.dayTime = e, cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.UserInfo))
        }, cc.LoginRecord.getRegisterDay = function () {
            return cc.UserInfo.login.dayTime ? cc.UserInfo.login.dayTime : 0
        }, cc._RF.pop()
    }, {}],
    LoginWindow: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "1d7f9QuX2hBB6IE2p2xJXVQ", "LoginWindow"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.window = this.node.getChildByName("window"), this.itemList = this.window.getChildByName("content").children, this.window.scale = 0, this.isAllow = cc.LoginRecord.getRegisterStatus(), this.window.getChildByName("button").active = this.isAllow
            },
            initialize: function () {
                for (var e = cc.LoginRecord.getLastRegisterDay(), t = 0; t < this.itemList.length; t++) {
                    var i = this.itemList[t],
                        o = i.getComponent(cc.Sprite),
                        n = i.getChildByName("flag");
                    if (this.isAllow)
                        if (t < e) AssetMgr.setSpriteFrameByTexture(o, "GameTextures", "login-item-".concat(t + 1, "-1")), n.active = !0;
                        else if (t === e) {
                        n.active = !1, AssetMgr.setSpriteFrameByTexture(o, "GameTextures", "login-item-".concat(t + 1, "-1"));
                        var a = cc.tween().to(.5, {
                                scale: 1.05
                            }),
                            s = cc.tween().to(.5, {
                                scale: 1
                            });
                        cc.tween(i).repeatForever(cc.tween().sequence(a, s)).start()
                    } else n.active = !1, AssetMgr.setSpriteFrameByTexture(o, "GameTextures", "login-item-".concat(t + 1, "-2"));
                    else t <= e ? (AssetMgr.setSpriteFrameByTexture(o, "GameTextures", "login-item-".concat(t + 1, "-1")), n.active = !0) : (AssetMgr.setSpriteFrameByTexture(o, "GameTextures", "login-item-".concat(t + 1, "-2")), n.active = !1)
                }
            },
            start: function () {
                cc.tween(this.window).to(.2, {
                    scale: 1
                }, {
                    easing: "sineIn"
                }).start(), adUtils.executeShowOtherAdvertising(!0)
            },
            executeReceive: function (e) {
                var t = this,
                    i = function () {
                        var i = cc.LoginRecord.getLastRegisterDay(),
                            o = 0;
                        0 === i ? (o = 200 * (e ? 1 : 2), cc.UserInfo.gold += o) : 1 === i ? cc.UserInfo.skinList
                        [2].isLock ? cc.UserInfo.skinList
                        [2].isLock = !1 : (o = 700 * (e ? 1 : 2), cc.UserInfo.gold += o) : 2 === i ? (o = 300 * (e ? 1 : 2), cc.UserInfo.gold += o) : 3 === i ? (o = 400 * (e ? 1 : 2), cc.UserInfo.gold += o) : 4 === i ? (o = 600 * (e ? 1 : 2), cc.UserInfo.gold += o) : 5 === i ? (o = 700 * (e ? 1 : 2), cc.UserInfo.gold += o) : 5 === i && (cc.UserInfo.skinList
                            [10].isLock ? (cc.UserInfo.skinList
                            [2].isLock = !1, o = 1e3 * (e ? 1 : 2), cc.UserInfo.gold += o * (e ? 1 : 2)) : (o = 2600 * (e ? 1 : 2), cc.UserInfo.gold += o)), cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.UserInfo)), cc.LoginRecord.setRegisterStatus(2), cc.LoginRecord.setLastRegisterDay(i), cc.LoginRecord.setRegisterDay((new Date).getDate()), o > 0 && (SoundMgr.playEffect("receive"), AssetMgr.showAlertWindow(o)), t.node.removeFromParent(!0)
                    };
                e ? i() : adUtils.executeShowVideo(i)
            },
            buttonTouchEventCallBack: function (e) {
                switch (SoundMgr.playEffect("button"), e.target.name) {
                    case "closeButton":
                        this.node.removeFromParent(!0);
                        break;
                    case "normalButton":
                        this.executeReceive(!0);
                        break;
                    case "doubleButton":
                        this.executeReceive(!1)
                }
            }
        }), cc._RF.pop()
    }, {}],
    MainScript: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "d134b90vDBD54VwLGw5ghZN", "MainScript");
        var o = e("../Config");
        cc.Class({
            extends: cc.Component,
            levelIndex: 0,
            playerIndex: 0,
            isMovement: !1,
            towerContent: null,
            player: null,
            dragon: null,
            properties: {
                SkyImg: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "天空图"
                },
                SkyFrame: {
                    default: [],
                    type: cc.SpriteFrame,
                    displayName: "天空纹理"
                },
                Armature: {
                    default: null,
                    type: dragonBones.ArmatureDisplay,
                    displayName: "背景动画"
                },
                DragonAsset: {
                    default: [],
                    type: dragonBones.DragonBonesAsset,
                    displayName: "龙骨文件"
                },
                DragonAtlas: {  
                    default: [],
                    type: dragonBones.DragonBonesAtlasAsset,
                    displayName: "龙骨图集"
                },
                TowerPrefab: {
                    default: null,
                    type: cc.Prefab,
                    displayName: "高塔预制体"
                },
                FloorPrefab: {
                    default: null,
                    type: cc.Prefab,
                    displayName: "楼层预制体"
                },
                PlayerPrefab: {
                    default: [],
                    type: cc.Prefab,
                    displayName: "主角预制体"
                },
                UnitPrefab: {
                    default: [],
                    type: cc.Prefab,
                    displayName: "单位预制体"
                }
            },
            onLoad: function () {
                var e = this.node.getChildByName("main"),
                    t = this.node.getChildByName("ui");
                this.leftArrow = t.getChildByName("LeftArrow"), this.rightArrow = t.getChildByName("RightArrow"), this.leftArrow.active = !1, this.rightArrow.active = !1, this.levelNumber = t.getChildByName("frame").getChildByName("num").getComponent(cc.Label), this.towerContent = e.getChildByName("towerContent"), this.node.towerList = []
            },
            start: function () {
                adUtils.executeShowGameAdvertising(!0)
            },
            initialize: function (e, t, i) {
                console.log("levelIndex = ", e);
                var o = MathMgr.getRandomNum(0, 3);
                this.SkyImg.spriteFrame = this.SkyFrame[o], this.Armature.dragonAsset = this.DragonAsset[o], this.Armature.dragonAtlasAsset = this.DragonAtlas[o], this.Armature.playAnimation("CJ".concat(o + 1), -1), this.TowerCount = i.length, this.LeftBorderX = -360, this.RightBorderX = this.LeftBorderX - 360 * (this.TowerCount - 2), this.levelIndex = e, this.playerIndex = t;
                // this.levelNumber.string = e;
                this.levelNumber.string = window.getLng("第%s关",e);
                this.levelNumber.enableBold = true;
                this.executeCreateTower(i)
            },
            executeCreateTower: function (e) {
                for (var t = this, i = cc.view.getVisibleSize(), o = 0; o < e.length; o++) {
                    var n = cc.instantiate(this.TowerPrefab);
                    n.y = -i.height / 2 + 200, this.towerContent.addChild(n), this.node.towerList.push(n), n.index = o + 1, this.executeCreateFloor(n, e[o])
                }
                var a = function () {
                    for (var e = 0; e < t.node.towerList.length; e++) {
                        t.node.towerList[e].getComponent("TowerItem").setForbidStatus(!1)
                    }
                };
                this.towerContent.getComponent(cc.Layout).updateLayout();
                var s = this.towerContent.getComponent(cc.Widget);
                s.updateAlignment(), s.enabled = !1, this.towerContent.x = this.RightBorderX, this.LeftBorderX === this.RightBorderX ? (this.towerContent.x === this.RightBorderX ? this.rightArrow.active = !1 : this.rightArrow.active = !0, this.towerContent.x === this.LeftBorderX ? this.leftArrow.active = !1 : this.leftArrow.active = !0, AssetMgr.createPrefabByName("WeaponWindow", function (e) {
                    var i = cc.instantiate(e);
                    cc.director.getScene().addChild(i), i.getComponent("WeaponWindow").initialize(t.playerIndex, function () {
                        t.executeIncreaseBlood(!1)
                    })
                }), a()) : cc.tween(this.towerContent).delay(1).to(1, {
                    position: cc.v2(this.LeftBorderX, 0)
                }).call(function () {
                    t.towerContent.x === t.RightBorderX ? t.rightArrow.active = !1 : t.rightArrow.active = !0, t.towerContent.x === t.LeftBorderX ? t.leftArrow.active = !1 : t.leftArrow.active = !0, AssetMgr.createPrefabByName("WeaponWindow", function (e) {
                        var i = cc.instantiate(e);
                        cc.director.getScene().addChild(i), i.getComponent("WeaponWindow").initialize(t.playerIndex, function () {
                            t.executeIncreaseBlood(!1)
                        })
                    }), a()
                }).start()
            },
            executeCreateFloor: function (e, t) {
                for (var i = e.getComponent("TowerItem"), o = 0; o < t.length; o++) {
                    var n = cc.instantiate(this.FloorPrefab);
                    n.getComponent("FloorItem").registerTouchHandle(this.executeTransfer.bind(this)), n.tower = e, i.insertFloor(o + 1, n), this.executeCreateElement(n, t[o])
                }
            },
            executeCreateElement: function (e, t) {
                if (0 !== t.units.length) {
                    t.units = t.units.reverse(t.units);
                    var i = [];
                    switch (t.units.length) {
                        case 1:
                            i = [0];
                            break;
                        case 2:
                            i = [-5, 60];
                            break;
                        case 3:
                            i = [-31, 21, 73]
                    }
                    for (var o = e.getComponent("FloorItem"), n = 0; n < t.units.length; n++) {
                        var a = t.units[n];
                        if (0 === a.style) this.player ? console.warn("已存在主角, 无法进行二次创建") : (this.player = cc.instantiate(this.PlayerPrefab[this.playerIndex - 1]), o.insertElement(this.player), this.player.position = cc.v2(0, -67), this.player.getComponent("PlayerItem").initialize(this.playerIndex, a), this.player.srcTower = e.tower, this.player.srcFloor = e);
                        else {
                            var s = cc.instantiate(this.UnitPrefab[a.style - 1]);
                            s.y = -67, s.x = i[n], o.insertElement(s), s.getComponent("UnitItem").initialize(a), s.srcTower = e.tower, s.srcFloor = e
                        }
                    }
                }
            },
            executeDestroyFloor: function () {
                var e = this,
                    t = function () {
                        e.player.attackFloor = null;
                        for (var t = 0; t < e.node.towerList.length; t++) {
                            e.node.towerList[t].getComponent("TowerItem").setForbidStatus(!1)
                        }
                    };
                0 !== this.player.attackFloor.childList.length ? t() : this.player.attackFloor.getComponent("FloorItem").executeDestroy(function () {
                    var i = e.player.srcTower;
                    AssetMgr.createPrefabByName("FloorItem", function (o) {
                        var n = cc.instantiate(o);
                        i.getComponent("TowerItem").executeIncrease(n, t), n.getComponent("FloorItem").registerTouchHandle(e.executeTransfer.bind(e))
                    })
                })
            },
            executeFire: function (e, t) {
                var i = this.towerContent.parent,
                    n = i.convertToNodeSpaceAR(this.player.convertToWorldSpaceAR(cc.v2(0, 60))),
                    a = e.convertToWorldSpaceAR(cc.v2()),
                    s = e.detail.style;
                if (console.log("进行还击的单位类型为:".concat(Object.keys(o.UnitStyle)[s - 1])), s === o.UnitStyle.弓箭手) this.scheduleOnce(function () {
                    var o = a.add(cc.v2(-70, 100));
                    o = i.convertToNodeSpaceAR(o);
                    var s = MathMgr.getVectorDegree(o, n);
                    AssetMgr.createPrefabByName("ArrowItem", function (a) {
                        var r = cc.instantiate(a);
                        r.angle = s, r.position = o, i.addChild(r), cc.tween(r).to(.3, {
                            position: n
                        }).call(function () {
                            t && t(e.detail.blood), r.removeFromParent(!0)
                        }).start()
                    })
                }, .3);
                else if (s === o.UnitStyle.魔法师) {
                    var r = a.add(cc.v2(-45, 100));
                    r = i.convertToNodeSpaceAR(r);
                    var c = MathMgr.getVectorDegree(r, n);
                    AssetMgr.createPrefabByName("FireItem-2", function (o) {
                        var a = cc.instantiate(o);
                        a.angle = c, a.position = r, i.addChild(a), cc.tween(a).to(.5, {
                            position: n
                        }).call(function () {
                            t && t(e.detail.blood), a.removeFromParent(!0)
                        }).start()
                    })
                } else if (s === o.UnitStyle.小喷火龙) {
                    var l = a.add(cc.v2(-50, 95));
                    l = i.convertToNodeSpaceAR(l);
                    var d = MathMgr.getVectorDegree(l, n);
                    AssetMgr.createPrefabByName("FireItem-1", function (o) {
                        var a = cc.instantiate(o);
                        a.angle = d, a.position = l, i.addChild(a), cc.tween(a).to(.3, {
                            position: n
                        }).call(function () {
                            t && t(e.detail.blood), a.removeFromParent(!0)
                        }).start()
                    })
                } else if (s === o.UnitStyle.巫师) {
                    for (var u = e.srcFloor, h = 0; h < u.childList.length; h++) {
                        var p = u.childList[h];
                        Object.is(e, p) || p.getComponent("UnitItem").increaseBlood(p.detail.blood)
                    }
                    t && t(0)
                } else if (s === o.UnitStyle.双头喷火龙) {
                    var f = a.add(cc.v2(-70, 85));
                    f = i.convertToNodeSpaceAR(f);
                    var m = MathMgr.getVectorDegree(f, n);
                    AssetMgr.createPrefabByName("FireItem-1", function (o) {
                        var a = cc.instantiate(o);
                        a.angle = m, a.position = f, i.addChild(a), cc.tween(a).to(.3, {
                            position: n
                        }).call(function () {
                            t && t(e.detail.blood), a.removeFromParent(!0)
                        }).start()
                    })
                }
            },
            executeCounterattack: function () {
                for (var e = this, t = [], i = this.player.attackFloor.tower, n = 0; n < i.floorList.length; n++) {
                    var a = i.floorList[n];
                    a.isLock || a.getComponent("FloorItem").doCounterattack(t)
                }
                if (0 !== t.length) {
                    console.log("开启远程还击");
                    for (var s = 0, r = 0; r < t.length; r++) {
                        t[r].detail.style === o.UnitStyle.双头喷火龙 ? s += 2 : s += 1
                    }
                    console.log("击打主角次数 = ", s);
                    for (var c = function (t) {
                            if (s--, SoundMgr.playEffect("attack"), AssetMgr.createPrefabByName("NumberItem", function (i) {
                                    var o = cc.instantiate(i);
                                    o.position = cc.v2(0, 70), e.player.addChild(o), o.getComponent("NumberItem").initialize(Math.abs(t))
                                }), AssetMgr.createPrefabByName("HitItem", function (t) {
                                    var i = cc.instantiate(t);
                                    i.scale = 1.5, i.position = cc.v2(0, 70), e.player.addChild(i), cc.tween(i).delay(1.2).call(function () {
                                        i.removeFromParent(!0)
                                    }).start()
                                }), e.player.detail.extend > 0 ? e.player.getComponent("PlayerItem").executeAlterationExtend(-t) : e.player.detail.blood <= 0 ? e.player.isDeath = !0 : e.player.getComponent("PlayerItem").executeAlterationBlood(-t), console.log("玩家受到".concat(t, "点的打击, 剩余打击次数:").concat(s, "次")), s <= 0)
                                if (e.player.isDeath || e.player.detail.blood <= 0) {                                     
                                    e.player.getComponent("PlayerItem").executeDeath(),
                                    e.scheduleOnce(function () {
                                        console.log("游戏结束!!!"), AssetMgr.createPrefabByName("FailureWindow", function (t) {
                                            var i = cc.instantiate(t);
                                            cc.director.getScene().addChild(i), i.getComponent("FailureWindow").initialize(e.levelIndex, e.playerIndex),
                                            showInterstitialMini();
                                        })
                                    }, 2.5)
                                } else e.executeDestroyFloor()
                        }, l = 0; l < t.length; l++) {
                        t[l].getComponent("UnitItem").executeStrike(this.executeFire.bind(this), c)
                    }
                } else this.executeDestroyFloor()
            },
            retreatEndCallBack: function () {
                var e = this;
                console.log("回撤成功");
                var t = this.player.convertToWorldSpaceAR(cc.v2()),
                    i = this.player.srcFloor.convertToNodeSpaceAR(t);
                if (this.player.position = i, this.player.parent = this.player.srcFloor, 0 !== this.player.loss_blood || 0 !== this.player.loss_extend) {
                    var o = 2,
                        n = function () {
                            --o <= 0 && e.scheduleOnce(function () {
                                e.executeCounterattack()
                            }, .6)
                        };
                    if (this.player.getComponent("PlayerItem").executeAlterationBlood(this.player.loss_blood, n), this.player.getComponent("PlayerItem").executeAlterationExtend(this.player.loss_extend, n), this.player.isCarry && this.dragon) {
                        var a = Math.ceil(this.player.detail.blood / 10);
                        this.dragon.getComponent("DragonItem").alterationBlood(a)
                    }
                } else this.scheduleOnce(function () {
                    e.executeCounterattack()
                }, .6)
            },
            attackEndCallBack: function (isprop) {
                var e = this;
                if (console.log("attackEndCallBack"), this.player.isDeath) this.scheduleOnce(function () {
                    console.log("游戏结束!!!"), AssetMgr.createPrefabByName("FailureWindow", function (t) {
                        var i = cc.instantiate(t);
                        cc.director.getScene().addChild(i), i.getComponent("FailureWindow").initialize(e.levelIndex, e.playerIndex),
                        showInterstitialMini();
                    })
                }, 1.5);
                else {
                    var t = this.player.attackFloor.tower.floorList.length,
                        i = this.player.attackFloor.childList.length;
                    
                    var playerAtkIndex = this.player.attackFloor.tower.index;
                    var TowerCount = this.TowerCount;

                    var check_i = isprop ? 1 : 0;

                    if (t <= 1 && i <= check_i) {
                        var o = 2,
                            n = function () {
                                if (0 === --o) {
                                    if (e.towerContent.x <= e.RightBorderX && playerAtkIndex == TowerCount) return console.log("胜利了"), void AssetMgr.createPrefabByName("VictoryWindow", function (t) {
                                        e.scheduleOnce(function () {
                                            var i = cc.instantiate(t);
                                            cc.director.getScene().addChild(i), i.getComponent("VictoryWindow").initialize(e.playerIndex, e.levelIndex)
                                        }, 1.5)
                                    }),showInterstitialMini();;
                                    e.LeftBorderX -= 360, cc.tween(e.towerContent).by(1, {
                                        position: cc.v2(-360, 0)
                                    }).call(function () {
                                        var t = e.player.attackFloor,
                                            i = t.tower;
                                        e.player.getComponent("PlayerItem").executeReset(), e.player.srcTower = i, e.player.srcFloor = t;
                                        for (var o = 0; o < e.node.towerList.length; o++) {
                                            e.node.towerList[o].getComponent("TowerItem").setForbidStatus(!1)
                                        }
                                    }).start()
                                }
                            };
                        return this.player.getComponent("PlayerItem").executeAlterationBlood(this.player.loss_blood, n), void this.player.getComponent("PlayerItem").executeAlterationExtend(this.player.loss_extend, n)
                    }
                    console.log("打击结束, 开始回撤");
                    var a = this.player.convertToWorldSpaceAR(cc.v2()),
                        s = this.player.attackFloor.tower.convertToNodeSpaceAR(a);
                    this.player.position = s, this.player.parent = this.player.attackFloor.tower;
                    var r = this.player.srcFloor.convertToWorldSpaceAR(cc.v2(0, -67)),
                        c = this.player.attackFloor.tower.convertToNodeSpaceAR(r);
                    AssetMgr.createPrefabByName("EffectJump", function (t) {
                        console.log("创建起跳光圈");
                        var i = e.player.attackFloor.tower.convertToNodeSpaceAR(a),
                            o = cc.instantiate(t);
                        o.position = i, o.zIndex = 0, e.player.attackFloor.tower.addChild(o), e.player.getComponent("PlayerItem").executeRetreatJump(s, c, e.retreatEndCallBack.bind(e))
                    })
                }
            },
            hatchEndCallBack: function (e) {
                var t = this,
                    i = e.convertToWorldSpaceAR(cc.v2()),
                    o = this.player.armature.node.convertToNodeSpaceAR(i);
                AssetMgr.createPrefabByName("DragonItem", function (e) {
                    t.dragon = cc.instantiate(e), t.player.armature.node.addChild(t.dragon), t.dragon.position = o, t.dragon.getChildByName("armature").scaleX = -1, t.player.isCarry = !0, cc.tween(t.dragon).to(.3, {
                        position: cc.v2(-90, 65)
                    }).call(function () {
                        t.dragon.getChildByName("armature").scaleX = 1;
                        var e = Math.floor(t.player.detail.blood / 10);
                        t.dragon.getComponent("DragonItem").alterationBlood(e)
                    }).start()
                })
            },
            jumpEndCallback: function () {
                var e = this;
                console.log("玩家跳跃到指定位置");
                var t = this.player.attackFloor;
                if (t) {
                    var i = this.player.convertToWorldSpaceAR(cc.v2()),
                        n = t.convertToNodeSpaceAR(i);
                    this.player.position = n, this.player.parent = t;
                    var a = t.childList[0],
                        s = a.detail.style,
                        r = function () {
                            var t = e.player.detail.blood,
                                i = e.player.detail.extend,
                                n = a.detail.blood,
                                r = a.detail.extend;
                            if (e.player.isDeath = !1, a.isDeath = !1, e.player.loss_blood = 0, a.loss_blood = 0, e.player.loss_extend = 0, a.loss_extend = 0, s === o.UnitStyle.大剑 || s === o.UnitStyle.盾牌) 
                                return console.log("道具 = ", s), e.player.loss_blood = a.detail.blood, SoundMgr.playEffect("prop"), e.attackEndCallBack(s === o.UnitStyle.大剑 || s === o.UnitStyle.盾牌), void a.getComponent("UnitItem").executeDefense();
                            if (s === o.UnitStyle.小偷) n > t ? a.loss_blood = -t : (console.log("小偷被击杀"), e.player.loss_blood = a.detail.blood, a.loss_blood = -a.loss_blood, a.isDeath = !0);
                            else if (s === o.UnitStyle.龙蛋) a.getComponent("UnitItem").registerHatchHandle(e.hatchEndCallBack.bind(e));
                            else if (0 === i && 0 === r) t > n ? (e.player.loss_blood = e.player.isCarry ? a.realBlood : n, a.loss_blood = -n, a.isDeath = !0) : (e.player.loss_blood = -t, e.player.isDeath = !0, a.loss_blood = t);
                            else if (i > 0 && r > 0) a.loss_extend = t >= r ? -r : -t, e.player.loss_extend = n >= i ? -i : -n;
                            else if (i > 0 && 0 === r)
                                if (t >= n) e.player.loss_blood = e.player.isCarry ? a.realBlood : n, a.loss_blood = -n, a.isDeath = !0;
                                else {
                                    var c = Math.abs(t - n);
                                    a.loss_blood = -t, e.player.loss_extend = -c
                                }
                            else r > 0 && 0 === i && (t <= n ? (e.player.loss_blood = -t, e.player.isDeath = !0, a.loss_blood = t) : (a.loss_extend = t >= r ? -r : -t, e.player.loss_blood = -n));
                            if (e.player.loss_blood < 0) {
                                var l = e.player.convertToWorldSpaceAR(cc.v2()),
                                    d = e.node.convertToNodeSpaceAR(l);
                                AssetMgr.createPrefabByName("NumberItem", function (t) {
                                    var i = cc.instantiate(t);
                                    i.position = d.add(cc.v2(0, 70)), e.node.addChild(i), i.getComponent("NumberItem").initialize(Math.abs(e.player.loss_blood))
                                })
                            }
                            e.player.getComponent("PlayerItem").executeAttack(e.attackEndCallBack.bind(e)), a.getComponent("UnitItem").executeDefense()
                        };
                    if (this.player.isCarry) {
                        return void this.dragon.getComponent("DragonItem").executeFire(function () {
                            var t = e.towerContent.parent,
                                i = t.convertToNodeSpaceAR(a.convertToWorldSpaceAR(cc.v2()).add(cc.v2(0, 85))),
                                o = t.convertToNodeSpaceAR(e.dragon.convertToWorldSpaceAR(cc.v2()).add(cc.v2(35, 140))),
                                n = MathMgr.getVectorDegree(o, i);
                            AssetMgr.createPrefabByName("FireItem-1", function (s) {
                                var c = cc.instantiate(s);
                                c.scale = .3, c.angle = n, c.position = o, t.addChild(c), cc.tween(c).to(.2, {
                                    position: i
                                }).call(function () {
                                    AssetMgr.createPrefabByName("NumberItem", function (t) {
                                        var i = cc.instantiate(t);
                                        i.position = cc.v2(0, 70), a.addChild(i), i.getComponent("NumberItem").initialize(e.dragon.blood)
                                    }), a.getComponent("UnitItem").executeAlterationBlood(-e.dragon.blood), c.removeFromParent(!0), e.scheduleOnce(r, .8)
                                }).start()
                            })
                        })
                    }
                    r()
                } else {
                    console.log("跳跃结束, 无攻击楼层, 解除所有楼层的操作");
                    var c = this.player.convertToWorldSpaceAR(cc.v2()),
                        l = this.player.srcFloor.convertToNodeSpaceAR(c);
                    this.player.position = l, this.player.parent = this.player.srcFloor;
                    var d = function () {
                        for (var t = 0; t < e.node.towerList.length; t++) {
                            e.node.towerList[t].getComponent("TowerItem").setForbidStatus(!1)
                        }
                    };
                    if ((t = this.player.srcFloor).childList.length > 1)
                        for (var u = 0; u < t.childList.length; u++) {
                            var h = t.childList[u];
                            if (!Object.is(h, this.player)) {
                                var p = h.detail.style;
                                console.log("本楼层增益道具:".concat(Object.keys(o.UnitStyle)[p - 1]));
                                var f = h.detail.blood;
                                if (ArrayMgr.removeElement(h.srcFloor.childList, h).removeFromParent(!0), p === o.UnitStyle.大剑) {
                                    this.player.getComponent("PlayerItem").executeAlterationBlood(f, d);
                                    break
                                }
                                if (p === o.UnitStyle.盾牌) {
                                    this.player.getComponent("PlayerItem").executeAlterationExtend(f, d);
                                    break
                                }
                            }
                        } else d()
                }
            },
            executeTransfer: function (e) {
                var t = this;
                if (console.log("执行位置转换"), this.player && this.player.status === o.PlayerStatus.待机 && this.player.srcTower && this.player.srcFloor) {
                    var i = this.player.srcTower.index,
                        n = e.tower.index;
                    if (Math.abs(n - i) > 1) console.log("禁止越塔强杀...");
                    else if (Object.is(this.player.srcFloor, e)) console.log("点击主角所在的楼层, 无逻辑处理");
                    else {
                        for (var a = 0; a < this.node.towerList.length; a++) {
                            this.node.towerList[a].getComponent("TowerItem").setForbidStatus(!0)
                        }
                        var s = this.player.srcFloor;
                        if (Object.is(this.player.srcTower, e.tower)) {
                            var r = this.player.convertToWorldSpaceAR(cc.v2()),
                                c = this.player.srcTower.convertToNodeSpaceAR(r);
                            this.player.parent = this.player.srcTower, this.player.position = c, r = e.convertToWorldSpaceAR(cc.v2(0, -65));
                            var l = e.tower.convertToNodeSpaceAR(r);
                            return ArrayMgr.removeElement(s.childList, this.player), void AssetMgr.createPrefabByName("EffectJump", function (i) {
                                var o = cc.instantiate(i);
                                o.position = c, o.zIndex = 0, t.player.srcTower.addChild(o), t.player.srcFloor = e, t.player.srcFloor.childList.push(t.player), t.player.getComponent("PlayerItem").executePortraitJump(l, t.jumpEndCallback.bind(t))
                            })
                        }
                        if (console.log("进行攻击"), 0 !== e.childList.length) {
                            var d = this.player.convertToWorldSpaceAR(cc.v2()),
                                u = e.tower.convertToNodeSpaceAR(d);
                            this.player.position = u, this.player.parent = e.tower;
                            var h = e.childList[0].position.sub(cc.v2(60, 0)),
                                p = e.convertToWorldSpaceAR(h),
                                f = e.tower.convertToNodeSpaceAR(p);
                            this.player.attackFloor = e, ArrayMgr.removeElement(s.childList, this.player), AssetMgr.createPrefabByName("EffectJump", function (e) {
                                console.log("创建起跳光圈");
                                var i = s.tower.convertToNodeSpaceAR(d),
                                    o = cc.instantiate(e);
                                o.position = i, o.zIndex = 0, s.tower.addChild(o), t.player.getComponent("PlayerItem").executeLandscapeJump(u, f, t.jumpEndCallback.bind(t))
                            })
                        } else console.error("内部错误, 无效的攻击楼层【缺少攻击元素】")
                    }
                }
            },
            executeReturnToMenuScreen: function () {
                cc.director.loadScene("MenuScene", function () {
                    cc.director.getScene().getChildByName("Canvas").getComponent("MenuScript").initialize()
                })
            },
            executeMovement: function (e) {
                var t = this;

                if(this.player.status != 1)
                {
                    AssetMgr.showAlertMessage("无法移动");
                    return;
                }

                if (!this.isMovement) {
                    var i = this.towerContent.x;
                    e && i <= this.RightBorderX ? AssetMgr.showAlertMessage("无法移动") : !e && i >= this.LeftBorderX ? AssetMgr.showAlertMessage("无法移动") : (this.leftArrow.active = !1, this.rightArrow.active = !1, this.isMovement = !0, cc.tween(this.towerContent).by(.5, {
                        position: cc.v2(e ? -360 : 360, 0)
                    }).call(function () {
                        t.isMovement = !1, t.towerContent.x === t.RightBorderX ? t.rightArrow.active = !1 : t.rightArrow.active = !0, t.towerContent.x === t.LeftBorderX ? t.leftArrow.active = !1 : t.leftArrow.active = !0
                    }).start())
                }
            },
            executeSkip: function () {
                var e = this;
                adUtils.executeShowVideo(function () {
                    if(e.levelIndex >= 70){
                        return
                    }

                    var t = e.levelIndex + 1;
                    t > cc.UserInfo.openIndex && (cc.UserInfo.openIndex = t, cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.UserInfo)));
                    var i = "App/Levels/level-".concat(t);
                    cc.loader.loadRes(i, cc.Asset, function (i, o) {
                        var n = JsonMgr.deepClone(o.json);
                        cc.director.loadScene("MainScene", function () {
                            cc.director.getScene().getChildByName("Canvas").getComponent("MainScript").initialize(t, e.playerIndex, n)
                        })
                    })
                })
            },
            executeReplay: function () {
                var e = this,
                    t = this.levelIndex,
                    i = "App/Levels/level-".concat(t);
                cc.loader.loadRes(i, cc.Asset, function (i, o) {
                    var n = JsonMgr.deepClone(o.json);
                    cc.director.loadScene("MainScene", function () {
                        cc.director.getScene().getChildByName("Canvas").getComponent("MainScript").initialize(t, e.playerIndex, n)
                    })
                })
            },
            executeIncreaseBlood: function (e) {
                var t = this;
                adUtils.executeShowVideo(function () {
                    var i = t.player.detail.blood;
                    if (e) adUtils.executeShowVideo(function () {
                        var e = Math.ceil(.1 * i);
                        t.player.getComponent("PlayerItem").executeAlterationBlood(e)
                    });
                    else {
                        var o = Math.ceil(.5 * i);
                        t.player.getComponent("PlayerItem").executeAlterationBlood(o)
                    }
                })
            },
            executeReleasePower: function () {
                var e = this;
                adUtils.executeShowVideo(function () {
                    var t = e.node.getChildByName("main");
                    AssetMgr.createPrefabByName("ThunderItem", function (i) {
                        SoundMgr.playEffect("lightning");
                        var n = cc.instantiate(i);
                        t.addChild(n), n.getComponent("ThunderItem").initialize(function () {
                            AssetMgr.createPrefabByName("NumberItem", function (t) {
                                for (var i = function (i) {
                                        for (var n = i.floorList, a = 0; a < n.length; a++) {
                                            var s = n[a].childList;
                                            if (0 !== s.length)
                                                for (var r = 0; r < s.length; r++) {
                                                    var c = s[r],
                                                        l = c.detail.style;
                                                    if (l !== o.UnitStyle.盾牌 && l !== o.UnitStyle.大剑 && l !== o.UnitStyle.龙蛋) {
                                                        var d = Math.floor(c.detail.blood / 10);
                                                        c.getComponent("UnitItem").executeAlterationBlood(-d);
                                                        var u = c.convertToWorldSpaceAR(cc.v2()).add(cc.v2(0, 60)),
                                                            h = e.node.convertToNodeSpaceAR(u),
                                                            p = cc.instantiate(t);
                                                        p.position = h, e.node.addChild(p), p.getComponent("NumberItem").initialize(d)
                                                    }
                                                }
                                        }
                                    }, n = e.player.srcTower, a = 0; a < e.node.towerList.length; a++) {
                                    var s = e.node.towerList[a];
                                    Object.is(n, s) || i(s)
                                }
                            })
                        })
                    })
                })
            },
            buttonTouchEventCallBack: function (e) {
                switch (SoundMgr.playEffect("button"), e.target.name) {
                    case "backButton":
                        this.executeReturnToMenuScreen();
                        break;
                    case "skipButton":
                        this.executeSkip();
                        break;
                    case "replayButton":
                        this.executeReplay();
                        break;
                    case "upgradeButton":
                        this.executeIncreaseBlood(0);
                        break;
                    case "powerButton":
                        this.executeReleasePower();
                        break;
                    case "LeftArrow":
                        this.executeMovement(!1);
                        break;
                    case "RightArrow":
                        this.executeMovement(!0)
                }
            }
        }), cc._RF.pop()
    }, {
        "../Config": "Config"
    }],
    MenuScript: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "95b28OIfgJLVKT3i+A2ZQze", "MenuScript"), cc.Class({
            extends: cc.Component,
            properties: {
                Armature: {
                    default: null,
                    type: dragonBones.ArmatureDisplay,
                    displayName: "动画"
                },
                MoreButton: {
                    type: cc.Node,
                    default: null,
                    displayName: "更多游戏按钮"
                },
                ShortcutButton: {
                    type: cc.Node,
                    default: null,
                    displayName: "添加桌面按钮"
                },
                Loading: {
                    default: null,
                    type: cc.Node,
                    displayName: "加载节点"
                }
            },
            onLoad: function () {
                "" !== App.logoName && App.logoName ? this.Armature.playAnimation(App.logoName, -1) : this.Armature.node.active = !1, adUtils.setMoreButtonStatus(this.MoreButton), adUtils.setShortcutButtonStatus(this.ShortcutButton), this.Loading.active = !1, this.goldNumber = this.node.getChildByName("goldButton").getChildByName("num").getComponent(cc.Label);
                var newnode=new cc.Node("Label");  //创建一个新的节点
                var sp=newnode.addComponent(cc.Label);   //给新节点添加一个<Sprite组件>
                sp.string = "Music:ON"
                console.log("=========");
                console.log(isPlayMusic)
                isPlayMusic ? sp.string = "Music:ON" : sp.string = "Music:OFF";
                newnode.setPosition(200,(this.node.height / 2) - 80)
                this.node.addChild(newnode)
                newnode.on("touchend",()=>{
                    if(sp.string == "Music:ON"){
                        sp.string = "Music:OFF";
                        cc.audioEngine.setEffectsVolume(0), cc.audioEngine.setMusicVolume(0);
                        isPlayMusic = false;
                    }else{
                        sp.string = "Music:ON";
                        cc.audioEngine.setEffectsVolume(1), cc.audioEngine.setMusicVolume(1);
                        isPlayMusic = true;
                    }
                   
                },this)
            },
            initialize: function () {
                var e = this;
                if (this.ShortcutButton.active) {
                    adUtils.isAdditionDesktop(function () {
                        e.ShortcutButton.active = !1
                    }, null)
                }
            },
            start: function () {
                SoundMgr.playMusic("bgm"), cc.LoginRecord.getRegisterStatus() ? this.executeShowLoginWindow() : adUtils.executeShowBannerAdvertising(), adUtils.executeShowStartVideo()
            },
            update: function (e) {
                this.goldNumber.string = cc.UserInfo.gold
            },
            executeEnterSkinScreen: function () {
                cc.director.loadScene("SkinScene", function () {
                    cc.director.getScene().getChildByName("Canvas").getComponent("SkinScript").initialize()
                })
            },
            receiveSuccessCallBack: function () {
                SoundMgr.playEffect("receive"), AssetMgr.showAlertWindow(300);
            },
            executeEnterGameScreen: function (e) {
                var _this = this;
                var t = this,
                    i = cc.director.getScene().getChildByName("LevelWindow");
                var levelWindowParent = i && i.parent;
                var levelWindow = i;
                i && i.removeFromParent(!0);
                for (var o = function (i) {
                        i || (i = cc.UserInfo.skinIndex), t.Loading.active = !0;
                        var o = "App/Levels/level-".concat(e);
                        cc.loader.loadRes(o, cc.Asset, function (t, o) {
                            try {
                                var n = JsonMgr.deepClone(o.json);
                                cc.director.loadScene("MainScene", function () {
                                    cc.director.getScene().getChildByName("Canvas").getComponent("MainScript").initialize(e, i, n)
                                })
                            }
                            catch(e)
                            {
                                _this.Loading.active = false;
                                if(levelWindowParent != null && levelWindow != null) {
                                    levelWindowParent.addChild(levelWindow);
                                }
                            }
                        })
                    }, n = [], a = 0; a < cc.UserInfo.skinList.length; a++) {
                    cc.UserInfo.skinList[a].isLock && n.push(a + 1)
                }
                if (n.length > 0) {
                    ArrayMgr.randomArray(n);
                    var s = n[MathMgr.getRandomNum(0, n.length - 1)];
                    AssetMgr.createPrefabByName("PushWindow", function (e) {
                        var t = cc.instantiate(e);
                        cc.director.getScene().addChild(t), t.getComponent("PushWindow").initialize(s, o)
                    })
                } else if (0 === n.length) {
                    n = (n = [1, 2, 3, 4, 5, 6]).filter(function (e, t) {
                        return e !== cc.UserInfo.skinIndex
                    }), ArrayMgr.randomArray(n);
                    var r = n[MathMgr.getRandomNum(0, n.length - 1)];
                    AssetMgr.createPrefabByName("PushWindow", function (e) {
                        var t = cc.instantiate(e);
                        cc.director.getScene().addChild(t), t.getComponent("PushWindow").initialize(r, o)
                    })
                }
            },
            executeShowLevelWindow: function () {
                var e = this;
                AssetMgr.createPrefabByName("LevelWindow", function (t) {
                    var i = cc.instantiate(t);
                    cc.director.getScene().addChild(i), i.getComponent("LevelWindow").initialize(e.executeEnterGameScreen.bind(e))
                })
            },
            executeShowLoginWindow: function () {
                AssetMgr.createPrefabByName("LoginWindow", function (e) {
                    var t = cc.instantiate(e);
                    cc.director.getScene().addChild(t), t.getComponent("LoginWindow").initialize()
                })
            },
            buttonTouchEventCallBack: function (e) {
                switch (SoundMgr.playEffect("button"), e.target.name) {
                    case "supplyButton":
                        AssetMgr.showSupplyWindow(this.receiveSuccessCallBack.bind(this));
                        break;
                    case "moreButton":
                        adUtils.executeShowMoreGame();
                        break;
                    case "shortcutButton":
                        adUtils.executeAdditionDesktop(e.target);
                        break;
                    case "loginButton":
                        this.executeShowLoginWindow();
                        break;
                    case "onLineButton":
                        break;
                    case "skinButton":
                        this.executeEnterSkinScreen();
                        break;
                    case "startButton":
                        this.executeEnterGameScreen(cc.UserInfo.openIndex);
                        break;
                    case "levelButton":
                        this.executeShowLevelWindow()
                }
            }
        }), cc._RF.pop()
    }, {}],
    MessageItem: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "fd4a9BeOV5NS5Ng15n1sPHX", "MessageItem"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.msg = this.node.getChildByName("msg").getComponent(cc.Label), this.msg.string = ""
            },
            initialize: function (e) {
                e = getLng(e)
                this.msg.string = e, this.node.x = cc.view.getVisibleSize().width / 2, this.node.y = cc.view.getVisibleSize().height / 2 + 80
            },
            start: function () {
                var e = this,
                    t = cc.tween().to(1, {
                        opacity: 0
                    }),
                    i = cc.tween().to(1, {
                        position: this.node.position.add(cc.v2(0, 200))
                    });
                cc.tween(this.node).delay(1).parallel(t, i).call(function () {
                    e.node.removeFromParent(!0)
                }).start()
            }
        }), cc._RF.pop()
    }, {}],
    MoveAction: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "4a3615DzhBKBY+kV8Y1g+mJ", "MoveAction"), cc.Class({
            extends: cc.Component,
            properties: {
                isLandscape: {
                    default: !1,
                    displayName: "是否横向移动"
                },
                Time: {
                    default: 0,
                    type: cc.Float,
                    displayName: "移动时间"
                },
                Distance: {
                    default: 0,
                    type: cc.Float,
                    displayName: "移动距离"
                }
            },
            start: function () {
                if (this.isLandscape) {
                    var e = cc.tween().by(this.Time, {
                            position: cc.v2(this.Distance, 0)
                        }),
                        t = cc.tween().by(this.Time, {
                            position: cc.v2(-this.Distance, 0)
                        }),
                        i = cc.tween().by(this.Time, {
                            position: cc.v2(-this.Distance, 0)
                        }),
                        o = cc.tween().by(this.Time, {
                            position: cc.v2(this.Distance, 0)
                        }),
                        n = cc.tween().sequence(e, t, i, o);
                    cc.tween(this.node).repeatForever(n).start()
                } else {
                    var a = cc.tween().by(this.Time, {
                            position: cc.v2(0, this.Distance)
                        }),
                        s = cc.tween().by(this.Time, {
                            position: cc.v2(0, -this.Distance)
                        }),
                        r = cc.tween().by(this.Time, {
                            position: cc.v2(0, -this.Distance)
                        }),
                        c = cc.tween().by(this.Time, {
                            position: cc.v2(0, this.Distance)
                        }),
                        l = cc.tween().sequence(a, s, r, c);
                    cc.tween(this.node).repeatForever(l).start()
                }
            }
        }), cc._RF.pop()
    }, {}],
    NumberControl: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "f0bf83enVlEoLztf+jT4xxd", "NumberControl"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.label = this.node.getComponent(cc.Label), this.number = Number(this.label.string)
            },
            initialize: function (e) {
                this.number = e, 0 === this.number ? this.label.string = "" : this.label.string = this.number
            },
            executeRefresh: function (e, t, i, o) {
                var n = this;
                if (0 !== e) {
                    var a = Math.abs(e),
                        s = !0;
                    e < 0 && (s = !1);
                    var r = i / Math.ceil(Math.abs(e) / t);
                    this.schedule(function e() {
                        if (a >= t) return a -= t, s ? n.number += t : n.number -= t, void(n.label.string = n.number);
                        s ? n.number += a : n.number -= a, o && o(), n.number <= 0 ? n.label.string = "" : n.label.string = n.number, n.unschedule(e)
                    }, r)
                } else o && o()
            }
        }), cc._RF.pop()
    }, {}],
    NumberItem: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "8162fum3WlFK4tk0KmMF2gd", "NumberItem"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.number = this.node.getComponent(cc.Label), this.number.string = ""
            },
            initialize: function (e) {
                this.location = this.node.position, this.number.string = "/".concat(e)
            },
            start: function () {
                var e = this,
                    t = this.location.add(cc.v2(0, -67)),
                    i = cc.tween().to(1, {
                        position: t
                    }),
                    o = cc.tween().to(1, {
                        opacity: 0
                    });
                cc.tween(this.node).parallel(i, o).call(function () {
                    e.node.removeFromParent(!0)
                }).start()
            }
        }), cc._RF.pop()
    }, {}],
    OpacityAction: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "21cfbZhnHNPQI5GFMujg9Mx", "OpacityAction"), cc.Class({
            extends: cc.Component,
            properties: {
                Time: {
                    default: 1,
                    type: cc.Float,
                    displayName: "时间"
                }
            },
            start: function () {
                var e = cc.tween().to(this.Time, {
                        opacity: 0
                    }).delay(.5),
                    t = cc.tween().to(this.Time, {
                        opacity: 255
                    });
                cc.tween(this.node).repeatForever(cc.tween().sequence(e, t)).start()
            }
        }), cc._RF.pop()
    }, {}],
    PageItem: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "b6d4eW2EQtGD75+BdS5ZfnY", "PageItem");
        var o = e("../../Config");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.node.removeAllChildren(!0)
            },
            initialize: function (e, t, i) {
                var n = this;
                AssetMgr.createPrefabByName("LevelItem", function (a) {
                    for (var s = 0; s < t; s++) {
                        var r = cc.instantiate(a);
                        n.node.addChild(r);
                        var c = e + s + 1,
                            l = o.LevelStatus.完成;
                        c === cc.UserInfo.openIndex ? l = o.LevelStatus.进行中 : c > cc.UserInfo.openIndex && (l = o.LevelStatus.未开启), r.getComponent("LevelItem").initialize(c, l, i)
                    }
                })
            }
        }), cc._RF.pop()
    }, {
        "../../Config": "Config"
    }],
    PlatformConst: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "b9de1VSnpNBB631GjdcG5kX", "PlatformConst"), window.ServerConfig = {
            closeScale: 1,
            isShowHand: 0,
            quitShow: 0,
            openNumber: 0,
            locationList: [],
            celue: {
                apkTime: 0,
                interstitialType: 1,
                bannerTime: 0,
                interstitialTime: 0,
                overCount: 0,
                overRatio: 0,
                pauseCount: 0,
                pauseRatio: 0,
                otherCount: 0,
                otherRatio: 0,
                gameCount: 0,
                gameRatio: 0
            }
        }, window.AppList = [{
            appName: "TaLouShouHuZhe",
            logoName: "zhuye_2",
            storageName: "client_tlshz",
            chineseName: "塔楼守护者",
            shareLanguage: "和我一起守护高塔吧",
            ByteDance: {
                companyName: "ky",
                version: "",
                appId: "",
                bannerCode: "",
                interstitialCode: "",
                videoCode: "",
                extend: {
                    isLine: !1,
                    sceneID: [],
                    sendShare: 0,
                    bgm: []
                }
            },
            BaiDu: {
                companyName: "ky",
                version: "",
                appId: "",
                appSID: "",
                videoCode: "",
                extend: {
                    startVideo: 0
                }
            },
            OPPO: {
                companyName: "ky",
                version: "100",
                packageName: "com.ky.tlshz.nearme.gamecenter",
                appID: "30789465",
                nativeCodes: ["510822", "510821", "510819"],
                boxCode: "510817",
                videoCode: "510816",
                bannerCode: "510813",
                pushCode: "510818",
                extend: {
                    bannerRatio: 0,
                    sendDesk: 0
                }
            },
            VIVO: {
                companyName: "ky",
                version: "100",
                packageName: "com.ky.tlshz.vivominigame",
                videoCode: "b88f21a7d5c3422cac79ff27048ef9f2",
                interstitialCode: "66d41f1b8cec485f942a94d10cbfde38",
                nativeCodes: ["fc4d875eb5ee4782914a4a379e5fe2c5", "a9ffbf72912c4acdb15706babff80474", "026e30e3dae14faa9b0a78421d9ba13a"],
                boxCode: "d86a17ded2184aadb68e8bae63c56ed3",
                bannerCode: "bd2b80d3f911417ea2e5a74c114db064",
                extend: {
                    sendDesk: 0
                }
            },
            WeChat: {
                companyName: "ky",
                version: "",
                appId: "",
                extend: {}
            },
            Tencent: {
                companyName: "ch",
                version: "100",
                appId: "1112092899",
                bannerCode: "e8797ac5d55655bbbeaf95a4506a394a",
                videoCode: "0889712d51eb377d1132ceb5ab6079ba",
                boxCode: "f997132d6b87ece53105da1ead70c50c",
                interstitialCode: "bf744cd42e4d72c37b557add3e7feb20",
                blockCode: "0dd44bbb1f0d7fef6615ff56baefe6ae",
                extend: {
                    isVideoToShare: !1,
                    startVideo: 0,
                    sceneID: [],
                    allowRandom: !1,
                    sendBox: 0,
                    winVideo: 0,
                    winCount: 0,
                    loseVideo: 0,
                    loseCount: 0
                }
            },
            Quick: {
                companyName: "ky",
                version: "",
                appId: "",
                videoCode: "",
                interstitialCode: "",
                extend: {
                    startVideo: 0,
                    sceneID: []
                }
            },
            HuaWei: {
                companyName: "cx",
                version: "",
                packageName: "",
                appId: "",
                bannerCode: "x0kvs12iu6",
                nativeCode: "testu7m3hc4gvm",
                interstitialCode: "testb4znbuh3n2",
                videoCode: "testx9dtjwj8hp",
                extend: {
                    openNumber: 0,
                    allowLogin: !1,
                    sendDesk: 0,
                    allowInterstitial: !1
                }
            },
            YouJia: {
                companyName: "ky",
                version: "",
                extend: {}
            },
            MeiZu: {
                companyName: "ky",
                version: "100",
                appId: "",
                bannerCode: "",
                nativeCode: "",
                interstitialCode: "",
                videoCode: "",
                extend: {
                    randomVideo: 0,
                    fuXuanKuang: 100,
                    guanBiYanChi: 0
                }
            },
            UC: {
                companyName: "ky",
                version: "",
                client_id: "",
                extend: {}
            },
            VIVO_APK: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            OPPO_APK: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            APK_233: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            APK_4399: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            XIAOMI_APK: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            OTHER_APK: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            Fish_APK: {
                companyName: "ky",
                version: 100,
                extend: {}
            }
        }, {
            appName: "MiNiDuiJue",
            logoName: "zhuye_1",
            storageName: "client_mndj123",
            chineseName: "迷你对决",
            shareLanguage: "和我一起守护高塔吧",
            ByteDance: {
                companyName: "ky",
                version: "",
                appId: "",
                bannerCode: "",
                interstitialCode: "",
                videoCode: "",
                extend: {
                    isLine: !1,
                    sceneID: [],
                    sendShare: 0,
                    bgm: []
                }
            },
            BaiDu: {
                companyName: "ky",
                version: "",
                appId: "",
                appSID: "",
                videoCode: "",
                extend: {
                    startVideo: 0
                }
            },
            OPPO: {
                companyName: "cx",
                version: "100",
                packageName: "com.cx.mndj.nearme.gamecenter",
                appID: "30828857",
                nativeCodes: ["547860", "547858", "547856"],
                boxCode: "547852",
                videoCode: "547851",
                bannerCode: "547849",
                pushCode: "547855",
                extend: {
                    bannerRatio: 0,
                    sendDesk: 0
                }
            },
            VIVO: {
                companyName: "kg",
                version: "100",
                packageName: "com.kg.mndj.vivominigame",
                videoCode: "c9d59a13871247d49946dcf3428afc7d",
                interstitialCode: "621e0a1c14f740d08ad287c0cbdd8fb6",
                nativeCodes: ["61369264d2594207902dd16717098bd1"],
                boxCode: "0d682914d4c64cc6b990db2d029adeb7",
                bannerCode: "add4d4c2ba744969ad664a0dbaddd1d1",
                extend: {
                    yanchiTime: 0,
                    sendPush: 0,
                    bannerRatio: 1,
                    sendDesk: 0
                }
            },
            WeChat: {
                companyName: "ky",
                version: "",
                appId: "",
                extend: {}
            },
            Tencent: {
                companyName: "ch",
                version: "100",
                appId: "1112092899",
                bannerCode: "e8797ac5d55655bbbeaf95a4506a394a",
                videoCode: "0889712d51eb377d1132ceb5ab6079ba",
                boxCode: "f997132d6b87ece53105da1ead70c50c",
                interstitialCode: "bf744cd42e4d72c37b557add3e7feb20",
                blockCode: "0dd44bbb1f0d7fef6615ff56baefe6ae",
                extend: {
                    isVideoToShare: !1,
                    startVideo: 0,
                    sceneID: [],
                    allowRandom: !1,
                    sendBox: 0,
                    winVideo: 0,
                    winCount: 0,
                    loseVideo: 0,
                    loseCount: 0
                }
            },
            Quick: {
                companyName: "ky",
                version: "",
                appId: "",
                videoCode: "",
                interstitialCode: "",
                extend: {
                    startVideo: 0,
                    sceneID: []
                }
            },
            HuaWei: {
                companyName: "cx",
                version: "",
                packageName: "",
                appId: "",
                bannerCode: "x0kvs12iu6",
                nativeCode: "testu7m3hc4gvm",
                interstitialCode: "testb4znbuh3n2",
                videoCode: "testx9dtjwj8hp",
                extend: {
                    openNumber: 0,
                    allowLogin: !1,
                    sendDesk: 0,
                    allowInterstitial: !1
                }
            },
            YouJia: {
                companyName: "ky",
                version: "",
                extend: {}
            },
            MeiZu: {
                companyName: "ky",
                version: "100",
                appId: "",
                bannerCode: "",
                nativeCode: "",
                interstitialCode: "",
                videoCode: "",
                extend: {
                    randomVideo: 0,
                    fuXuanKuang: 100,
                    guanBiYanChi: 0
                }
            },
            UC: {
                companyName: "ky",
                version: "",
                client_id: "",
                extend: {}
            },
            VIVO_APK: {
                companyName: "kg",
                version: 100,
                extend: {}
            },
            OPPO_APK: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            APK_233: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            APK_4399: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            XIAOMI_APK: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            OTHER_APK: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            Fish_APK: {
                companyName: "ky",
                version: 100,
                extend: {}
            }
        }, {
            appName: "MiNiTaFang",
            logoName: "zhuye_1",
            storageName: "client_mndj123",
            chineseName: "迷你塔防",
            shareLanguage: "和我一起守护高塔吧",
            ByteDance: {
                companyName: "",
                version: "",
                appId: "",
                bannerCode: "",
                interstitialCode: "",
                videoCode: "",
                extend: {
                    isLine: !1,
                    sceneID: [],
                    sendShare: 0,
                    bgm: []
                }
            },
            BaiDu: {
                companyName: "",
                version: "",
                appId: "",
                appSID: "",
                videoCode: "",
                extend: {
                    startVideo: 0
                }
            },
            OPPO: {
                companyName: "kg",
                version: "100",
                packageName: "com.kg.mntf.nearme.gamecenter",
                appID: "30794835",
                nativeCodes: ["558320", "558318", "558316"],
                boxCode: "558313",
                videoCode: "558312",
                bannerCode: "558310",
                pushCode: "558315",
                extend: {
                    bannerRatio: 0,
                    sendDesk: 0
                }
            },
            VIVO: {
                companyName: "",
                version: "",
                packageName: "",
                videoCode: "",
                interstitialCode: "",
                nativeCodes: [""],
                boxCode: "",
                bannerCode: "",
                extend: {
                    yanchiTime: 0,
                    sendPush: 0,
                    sendDesk: 0
                }
            },
            WeChat: {
                companyName: "ky",
                version: "",
                appId: "",
                extend: {}
            },
            Tencent: {
                companyName: "ch",
                version: "100",
                appId: "1112092899",
                bannerCode: "e8797ac5d55655bbbeaf95a4506a394a",
                videoCode: "0889712d51eb377d1132ceb5ab6079ba",
                boxCode: "f997132d6b87ece53105da1ead70c50c",
                interstitialCode: "bf744cd42e4d72c37b557add3e7feb20",
                blockCode: "0dd44bbb1f0d7fef6615ff56baefe6ae",
                extend: {
                    isVideoToShare: !1,
                    startVideo: 0,
                    sceneID: [],
                    allowRandom: !1,
                    sendBox: 0,
                    winVideo: 0,
                    winCount: 0,
                    loseVideo: 0,
                    loseCount: 0
                }
            },
            Quick: {
                companyName: "ky",
                version: "",
                appId: "",
                videoCode: "",
                interstitialCode: "",
                extend: {
                    startVideo: 0,
                    sceneID: []
                }
            },
            HuaWei: {
                companyName: "cx",
                version: "",
                packageName: "",
                appId: "",
                bannerCode: "x0kvs12iu6",
                nativeCode: "testu7m3hc4gvm",
                interstitialCode: "testb4znbuh3n2",
                videoCode: "testx9dtjwj8hp",
                extend: {
                    openNumber: 0,
                    allowLogin: !1,
                    sendDesk: 0,
                    allowInterstitial: !1
                }
            },
            YouJia: {
                companyName: "ky",
                version: "",
                extend: {}
            },
            MeiZu: {
                companyName: "ky",
                version: "100",
                appId: "",
                bannerCode: "",
                nativeCode: "",
                interstitialCode: "",
                videoCode: "",
                extend: {
                    randomVideo: 0,
                    fuXuanKuang: 100,
                    guanBiYanChi: 0
                }
            },
            UC: {
                companyName: "ky",
                version: "",
                client_id: "",
                extend: {}
            },
            VIVO_APK: {
                companyName: "kg",
                version: 100,
                extend: {}
            },
            OPPO_APK: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            APK_233: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            APK_4399: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            XIAOMI_APK: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            OTHER_APK: {
                companyName: "ky",
                version: 100,
                extend: {}
            },
            Fish_APK: {
                companyName: "ky",
                version: 100,
                extend: {}
            }
        }], cc._RF.pop()
    }, {}],
    PlatformUtils: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "072dbxYT79LMIBkSzyvYPwC", "PlatformUtils"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.PlatformUtils = void 0;
        var o = e("./_oppo"),
            n = e("./_vivo"),
            a = e("./_baidu"),
            s = e("./_bytedance"),
            r = e("./_huawei"),
            c = e("./_tencent"),
            l = e("./_quick"),
            d = e("./_uc"),
            u = e("./_4399");

        function h(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function p(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function f(e, t, i) {
            return t && p(e.prototype, t), i && p(e, i), e
        }
        var m = function () {
            function e() {
                h(this, e), this.platform = null, this.nativeCallBack = null, this.bannerTriggerTime = 0, this.interstitialTriggerTime = 0, this.overResidueCount = 0, this.pauseResidueCount = 0, this.otherResidueCount = 0, this.gameResidueCount = 0, console.log("初始化平台工具集合")
            }
            return f(e, [{
                key: "initialize",
                value: function () {
                    var e = (new Date).getTime();
                    switch (this.interstitialTriggerTime = e + 1e3 * ServerConfig.celue.interstitialTime, this.bannerTriggerTime = e + 1e3 * ServerConfig.celue.bannerTime, this.overResidueCount = ServerConfig.celue.overCount, this.pauseResidueCount = ServerConfig.celue.pauseCount, this.otherResidueCount = ServerConfig.celue.otherCount, this.gameResidueCount = ServerConfig.celue.gameCount, PlatformCode) {
                        case PlatformList.头条:
                            this.platform = new s.bytedance;
                            break;
                        case PlatformList.华为:
                            this.platform = new r.huawei;
                            break;
                        case PlatformList.OPPO:
                            this.platform = new o.oppo;
                            break;
                        case PlatformList.VIVO:
                            this.platform = new n.vivo;
                            break;
                        case PlatformList.QQ:
                            this.platform = new c.tencent;
                            break;
                        case PlatformList.微信:
                            break;
                        case PlatformList.百度:
                            this.platform = new a.baidu;
                            break;
                        case PlatformList.快手:
                            this.platform = new l.quick;
                            break;
                        case PlatformList.魅族:
                            break;
                        case PlatformList.UC:
                            this.platform = new d.uc;
                            break;
                        case PlatformList.游家:
                            this.platform = new u.youjia
                    }
                }
            }, {
                key: "requestLocation",
                value: function (e) {
                    var t = this;
                    switch (PlatformCode) {
                        case PlatformList.头条:
                            Object.assign(ServerConfig, ServerConfig, App.ByteDance.extend);
                            break;
                        case PlatformList.华为:
                            Object.assign(ServerConfig, ServerConfig, App.HuaWei.extend);
                            break;
                        case PlatformList.OPPO:
                            Object.assign(ServerConfig, ServerConfig, App.OPPO.extend);
                            break;
                        case PlatformList.VIVO:
                            Object.assign(ServerConfig, ServerConfig, App.VIVO.extend);
                            break;
                        case PlatformList.QQ:
                            Object.assign(ServerConfig, ServerConfig, App.Tencent.extend);
                            break;
                        case PlatformList.微信:
                            Object.assign(ServerConfig, ServerConfig, App.WeChat.extend);
                            break;
                        case PlatformList.百度:
                            Object.assign(ServerConfig, ServerConfig, App.BaiDu.extend);
                            break;
                        case PlatformList.快手:
                            Object.assign(ServerConfig, ServerConfig, App.Quick.extend);
                            break;
                        case PlatformList.魅族:
                            Object.assign(ServerConfig, ServerConfig, App.MeiZu.extend);
                            break;
                        case PlatformList.UC:
                            Object.assign(ServerConfig, ServerConfig, App.UC.extend);
                            break;
                        case PlatformList.游家:
                            Object.assign(ServerConfig, ServerConfig, App.YouJia.extend);
                            break;
                        case PlatformList.VIVO_APK:
                            Object.assign(ServerConfig, ServerConfig, App.VIVO_APK.extend);
                            break;
                        case PlatformList.OPPO_APK:
                            Object.assign(ServerConfig, ServerConfig, App.OPPO_APK.extend);
                            break;
                        case PlatformList.APK_233:
                            Object.assign(ServerConfig, ServerConfig, App.APK_233.extend);
                            break;
                        case PlatformList.XIAOMI_APK:
                            Object.assign(ServerConfig, ServerConfig, App.XIAOMI_APK.extend);
                            break;
                        case PlatformList.OTHER_APK:
                            Object.assign(ServerConfig, ServerConfig, App.OTHER_APK.extend);
                            break;
                        case PlatformList.摸摸鱼:
                            Object.assign(ServerConfig, ServerConfig, App.Fish_APK.extend)
                    }
                    if (console.log("url = ", window.urlPath), console.log("当前平台 = ".concat(Object.keys(PlatformList)[PlatformCode])), PlatformCode !== PlatformList.无 && PlatformCode !== PlatformList.游家)
                        if (PlatformCode !== PlatformList.UC && cc.sys.os !== cc.sys.OS_IOS) {
                            var i;
                            if (i = "https://whois.pconline.com.cn/ipJson.jsp?json=true", PlatformCode !== PlatformList.头条 && PlatformCode !== PlatformList.QQ && PlatformCode !== PlatformList.微信 && PlatformCode !== PlatformList.快手) {
                                var o = new XMLHttpRequest;
                                o.addEventListener("error", function () {
                                    t.requestRemote(null, e)
                                }), o.addEventListener("load", function () {
                                    if (o.responseText) try {
                                        var i = JSON.parse(o.responseText);
                                        if (i.cityCode && i.proCode) {
                                            var n = "".concat(i.cityCode, ",").concat(i.proCode);
                                            t.requestRemote(n, e)
                                        } else t.requestRemote(null, e)
                                    } catch (i) {
                                        t.requestRemote(null, e)
                                    } else t.requestRemote(null, e)
                                }), o.open("GET", i), o.setRequestHeader("content-type", "application/json; charset=utf-8"), o.send()
                            } else {
                                var n = null,
                                    a = this;
                                switch (PlatformCode) {
                                    case PlatformList.头条:
                                        n = tt.request;
                                        break;
                                    case PlatformList.QQ:
                                        n = qq.request;
                                        break;
                                    case PlatformList.微信:
                                        n = wx.request;
                                        break;
                                    case PlatformList.快手:
                                        n = ks.request;
                                        break;
                                    case PlatformList.百度:
                                        n = swan.request
                                }
                                n({
                                    url: i,
                                    data: {},
                                    handle: {
                                        "content-type": "application/json"
                                    },
                                    dataType: "JSON",
                                    success: function (t) {
                                        if (t) try {
                                            var i = cc.js.isString(t.data) ? JSON.parse(t.data) : t.data,
                                                o = "".concat(i.cityCode, ",").concat(i.proCode);
                                            a.requestRemote(o, e)
                                        } catch (t) {
                                            a.requestRemote(null, e)
                                        } else a.requestRemote(null, e)
                                    },
                                    fail: function (t) {
                                        a.requestRemote(null, e)
                                    }
                                })
                            }
                        } else this.requestRemote(null, e);
                    else e && e()
                }
            }, {
                key: "requestRemote",
                value: function (e, t) {
                    var i = this;
                    if (PlatformCode !== PlatformList.UC) {
                        var o = function (t) {
                            for (var i = 0; i < t.length; i++)
                                if (-1 != e.indexOf(t[i])) return !0;
                            return !1
                        };
                        if (PlatformCode !== PlatformList.头条 && PlatformCode !== PlatformList.QQ && PlatformCode !== PlatformList.微信 && PlatformCode !== PlatformList.快手) {
                            console.log("读取远程配置");
                            var n = new XMLHttpRequest;
                            n.addEventListener("error", function () {
                                console.log("error1"), PlatformCode !== PlatformList.OPPO && i.loadSubpackage(t)
                            }), n.addEventListener("load", function () {
                                if (n.responseText) try {
                                    var a = JSON.parse(n.responseText);
                                    if (e)
                                        if (a.locationList && a.locationList.length > 0) o(a.locationList) ? i.loadSubpackage(t) : (window.ServerConfig = a, i.loadSubpackage(t));
                                        else window.ServerConfig = a, i.loadSubpackage(t);
                                    else window.ServerConfig = a, i.loadSubpackage(t)
                                } catch (e) {
                                    console.log("error2"), PlatformCode !== PlatformList.OPPO && i.loadSubpackage(t)
                                } else PlatformCode !== PlatformList.OPPO && i.loadSubpackage(t)
                            }), 
                            
                            //aha
                            //window.urlPath = "https://game-1253458371.cos.ap-guangzhou.myqcloud.com/demo/mntf/config100.json",
                            window.urlPath = "http://127.0.0.1:5500/config100.json",
                            n.open("GET", window.urlPath), n.setRequestHeader("content-type", "application/json; charset=utf-8"), n.send()
                        } else {
                            var a = null,
                                s = this;
                            switch (PlatformCode) {
                                case PlatformList.头条:
                                    a = tt.request;
                                    break;
                                case PlatformList.QQ:
                                    a = qq.request;
                                    break;
                                case PlatformList.微信:
                                    a = wx.request;
                                    break;
                                case PlatformList.快手:
                                    a = ks.request;
                                    break;
                                case PlatformList.百度:
                                    a = swan.request
                            }
                            a({
                                url: window.urlPath,
                                data: {},
                                handle: {
                                    "content-type": "application/json"
                                },
                                dataType: "JSON",
                                success: function (i) {
                                    if (i) try {
                                        var n = cc.js.isString(i.data) ? JSON.parse(i.data) : i.data;
                                        if (e)
                                            if (n.locationList && n.locationList.length > 0) o(n.locationList) ? s.loadSubpackage(t) : (window.ServerConfig = n, s.loadSubpackage(t));
                                            else window.ServerConfig = n, s.loadSubpackage(t);
                                        else window.ServerConfig = n, s.loadSubpackage(t)
                                    } catch (e) {
                                        s.loadSubpackage(t)
                                    } else s.loadSubpackage(t)
                                },
                                fail: function (e) {
                                    s.loadSubpackage(t)
                                }
                            })
                        }
                    } else cc.loader.load({
                        url: window.urlPath,
                        type: "json"
                    }, function (e, i) {
                        e ? t && t() : (window.ServerConfig = i, t && t())
                    })
                }
            }, {
                key: "loadSubpackage",
                value: function (e) {
                    var t = null;
                    switch (PlatformCode) {
                        case PlatformList.头条:
                            t = tt;
                            break;
                        case PlatformList.OPPO:
                        case PlatformList.VIVO:
                            t = qg;
                            break;
                        case PlatformList.QQ:
                            t = qq;
                            break;
                        case PlatformList.微信:
                            t = wx;
                            break;
                        case PlatformList.百度:
                            t = swan;
                            break;
                        case PlatformList.快手:
                            t = ks
                    }
                    if (t) {
                        t.showLoading({
                            title: "加载中...",
                            mask: !0,
                            success: function () {
                                return console.log("loading 提示框显示成功")
                            }
                        });
                        var i = function (e, i) {
                            t.loadSubpackage({
                                name: e,
                                success: function (e) {
                                    i()
                                },
                                fail: function (e) {}
                            }).onProgressUpdate(function (e) {})
                        };
                        (function (e, t) {
                            var o = 0;
                            i(e[o], function n() {
                                ++o >= e.length ? t() : i(e[o], n)
                            })
                        })(window.subpackage, function () {
                            t.hideLoading({}), e && e()
                        })
                    } else e && e()
                }
            }, {
                key: "getRandomIntNum",
                value: function (e, t) {
                    var i = t - e,
                        o = Math.random();
                    return e + Math.round(o * i)
                }
            }, {
                key: "setMoreButtonStatus",
                value: function (e) {
                    PlatformCode !== PlatformList.头条 && PlatformCode !== PlatformList.QQ && PlatformCode !== PlatformList.OPPO ? e.active = !1 : e.active = !0
                }
            }, {
                key: "setShortcutButtonStatus",
                value: function (e) {
                    PlatformCode !== PlatformList.QQ && PlatformCode !== PlatformList.VIVO && PlatformCode !== PlatformList.OPPO && PlatformCode !== PlatformList.华为 ? e.active = !1 : e.active = !0
                }
            }, {
                key: "setShareButtonStatus",
                value: function (e) {
                    PlatformCode !== PlatformList.头条 && PlatformCode !== PlatformList.QQ && PlatformCode !== PlatformList.微信 && PlatformCode !== PlatformList.快手 ? e.active = !1 : e.active = !0
                }
            }, {
                key: "isSatisfyCondition",
                value: function () {
                    return !!this.platform && (!!this.platform.isSatisfy && this.platform.isSatisfy())
                }
            }, {
                key: "executeShowStartVideo",
                value: function (e, t) {
                    this.platform && this.platform.showStartVideo && this.platform.showStartVideo(e, t)
                }
            }, {
                key: "executeShowVideo",
                value: function (e, t) {
                    console.log("触发视频");              
                    cc.audioEngine.setEffectsVolume(0), cc.audioEngine.setMusicVolume(0);      
                    // this.platform ? this.platform.showVideo && this.platform.showVideo(e, t) : e && e()
                    showRewardedVideoMini((res)=>{
                        if(res){
                            e && e()
                        }
                        if(isPlayMusic){
                            cc.audioEngine.setEffectsVolume(1), cc.audioEngine.setMusicVolume(1);
                        }
                    })
                }
            }, {
                key: "executeStartRecorder",
                value: function () {
                    this.platform && this.platform.startRecorder && this.platform.startRecorder()
                }
            }, {
                key: "executeStopRecorder",
                value: function () {
                    this.platform && this.platform.stopRecorder && this.platform.stopRecorder()
                }
            }, {
                key: "executeShare",
                value: function (e, t) {
                    this.platform && this.platform.doShare && this.platform.doShare(e, t)
                }
            }, {
                key: "executeShowFinishBox",
                value: function (e) {
                    if (ServerConfig.sendBox)
                        if (ServerConfig.sendBox[1] <= 0) e();
                        else if (this.isSatisfyCondition())
                        if (ServerConfig.sendBox[0]--, ServerConfig.sendBox[0] <= 0) {
                            if (ServerConfig.sendBox[0] = ServerConfig.sendBox[3], this.getRandomIntNum(0, 100) < ServerConfig.sendBox[2]) return ServerConfig.sendBox[1]--, void cc.loader.loadRes("Platform/Prefabs/common/common-Box", cc.Prefab, function (t, i) {
                                var o = cc.instantiate(i);
                                cc.director.getScene().addChild(o), o.getComponent("common-Box").initialize(e)
                            });
                            e()
                        } else e();
                    else e();
                    else e()
                }
            }, {
                key: "clearAllAdvertising",
                value: function () {
                    // this.platform && this.platform.clearAdvertising && this.platform.clearAdvertising()
                    hideBannerMini()
                }
            }, {
                key: "getNativeMessage",
                value: function (e) {
                    this.platform && this.platform.getNative && this.platform.getNative(e)
                }
            }, {
                key: "executeShowInterstitial",
                value: function (e) {
                    if (this.platform)
                        if (PlatformCode === PlatformList.头条) this.platform.showSystemInterstitial && this.platform.showSystemInterstitial(e);
                        else if (PlatformCode === PlatformList.华为)
                        if (1 === ServerConfig.celue.interstitialType) this.platform.showNativeInterstitial && this.platform.showNativeInterstitial(e);
                        else if (2 === ServerConfig.celue.interstitialType) this.platform.showSystemInterstitial && this.platform.showSystemInterstitial(e);
                    else {
                        this.getRandomIntNum(0, 100) < 50 ? this.platform.showNativeInterstitial && this.platform.showNativeInterstitial(e) : this.platform.showSystemInterstitial && this.platform.showSystemInterstitial(e)
                    } else PlatformCode === PlatformList.OPPO ? (console.log("显示OPPO-插屏"), this.platform.showNativeInterstitial && this.platform.showNativeInterstitial(e)) : PlatformCode === PlatformList.VIVO ? this.platform.showTemplateInterstitial && this.platform.showTemplateInterstitial(e) : PlatformCode === PlatformList.QQ ? this.platform.showSystemInterstitial && this.platform.showSystemInterstitial(e) : PlatformCode === PlatformList.微信 ? this.platform.showCustomInterstitial && this.platform.showCustomInterstitial(e) : PlatformCode === PlatformList.百度 || (PlatformCode === PlatformList.快手 ? this.platform.showSystemInterstitial && this.platform.showSystemInterstitial(e) : PlatformCode === PlatformList.魅族 || (PlatformCode === PlatformList.UC ? this.platform.showSystemInterstitial && this.platform.showSystemInterstitial(e) : (PlatformCode, PlatformList.游家)))
                }
            }, {
                key: "executeShowBannerAdvertising",
                value: function () {    
                    var e = this;
                    // if (this.platform) {
                        var t = function () {
                            // PlatformCode === PlatformList.头条 ? e.platform.showSystemBanner && e.platform.showSystemBanner() : PlatformCode === PlatformList.华为 ? e.platform.showSystemBanner && e.platform.showSystemBanner() : PlatformCode === PlatformList.OPPO ? ServerConfig.bannerRatio > 0 && e.platform.showMutual && e.platform.showMutual() : PlatformCode === PlatformList.VIVO ? e.platform.showSystemBanner && e.platform.showSystemBanner() : PlatformCode === PlatformList.QQ ? e.platform.showSystemBanner && e.platform.showSystemBanner() : PlatformCode === PlatformList.微信 ? e.platform.showSystemBanner && e.platform.showSystemBanner() : PlatformCode === PlatformList.百度 || (PlatformCode === PlatformList.魅族 ? e.platform.showSystemBanner && e.platform.showSystemBanner() : PlatformCode === PlatformList.UC && e.platform.showSystemBanner && e.platform.showSystemBanner())
                            showBannerMini()    
                        };
                        if (ServerConfig.celue.bannerTime <= 0) t();
                        else {
                            var i = (new Date).getTime();
                            i > this.bannerTriggerTime && (this.bannerTriggerTime = i + 1e3 * ServerConfig.celue.bannerTime, t())
                        }
                    // }
                }
            }, {
                key: "executeShowFinishAdvertising",
                value: function (e) {
                    if (this.clearAllAdvertising(), !(ServerConfig.celue.apkTime > 0) && ServerConfig.celue.interstitialTime >= 0) {
                        if (PlatformCode === PlatformList.VIVO)
                            if (0 === this.overResidueCount && 0 === ServerConfig.celue.overRatio) return void(this.getRandomIntNum(0, 100) < 50 ? this.platform.showSystemInterstitial && this.platform.showSystemInterstitial(e) : this.platform.showTemplateInterstitial && this.platform.showTemplateInterstitial(e));
                        if (this.overResidueCount <= 0) return;
                        var t = (new Date).getTime();
                        if (t - this.interstitialTriggerTime >= 1e3 * ServerConfig.celue.interstitialTime)
                            if (this.interstitialTriggerTime = t, this.overResidueCount--, this.overResidueCount <= 0) {
                                if (this.overResidueCount = ServerConfig.celue.overCount, this.getRandomIntNum(0, 100) < ServerConfig.celue.overRatio) this.executeShowInterstitial(e)
                            } else e && this.executeShowBannerAdvertising()
                    }
                }
            }, {
                key: "executeShowPauseAdvertising",
                value: function (e) {
                    if (this.clearAllAdvertising(), !(ServerConfig.celue.apkTime > 0) && ServerConfig.celue.interstitialTime >= 0 && this.pauseResidueCount > 0) {
                        var t = (new Date).getTime();
                        if (console.log("调用游戏暂停插屏"), t - this.interstitialTriggerTime >= 1e3 * ServerConfig.celue.interstitialTime)
                            if (this.interstitialTriggerTime = t, this.pauseResidueCount--, this.pauseResidueCount <= 0) {
                                if (this.pauseResidueCount = ServerConfig.celue.pauseCount, this.getRandomIntNum(0, 100) < ServerConfig.celue.pauseRatio) this.executeShowInterstitial(e)
                            } else e && this.executeShowBannerAdvertising()
                    }
                }
            }, {
                key: "executeShowOtherAdvertising",
                value: function (e) {
                    if (console.log("显示Other插屏"), this.clearAllAdvertising(), !(ServerConfig.celue.apkTime > 0) && ServerConfig.celue.interstitialTime >= 0 && this.otherResidueCount > 0) {
                        var t = (new Date).getTime();
                        if (t - this.interstitialTriggerTime >= 1e3 * ServerConfig.celue.interstitialTime)
                            if (this.interstitialTriggerTime = t, this.otherResidueCount--, this.otherResidueCount <= 0) {
                                if (this.otherResidueCount = ServerConfig.celue.otherCount, this.getRandomIntNum(0, 100) < ServerConfig.celue.otherRatio) this.executeShowInterstitial(e)
                            } else e && this.executeShowBannerAdvertising()
                    }
                }
            }, {
                key: "executeShowGameAdvertising",
                value: function (e) {
                    if (this.clearAllAdvertising(), !(ServerConfig.celue.apkTime > 0)) {
                        var t = (new Date).getTime();
                        if (ServerConfig.celue.interstitialTime >= 0) {
                            if (PlatformCode === PlatformList.VIVO && 0 === this.gameResidueCount && 0 === ServerConfig.celue.gameRatio) return void(e && this.platform.showSystemBanner && this.platform.showSystemBanner());
                            if (this.gameResidueCount <= 0) return;
                            if (console.log("调用游戏内插屏"), t - this.interstitialTriggerTime >= 1e3 * ServerConfig.celue.interstitialTime)
                                if (this.interstitialTriggerTime = t, this.gameResidueCount--, this.gameResidueCount <= 0) {
                                    if (this.gameResidueCount = ServerConfig.celue.gameCount, this.getRandomIntNum(0, 100) < ServerConfig.celue.gameRatio) this.executeShowInterstitial(e)
                                } else e && this.executeShowBannerAdvertising()
                        }
                    }
                }
            }, {
                key: "executeShowBanner",
                value: function () {
                    var e = this,
                        t = function () {
                            // if (e.platform)
                            //     if (PlatformCode === PlatformList.头条) ServerConfig.celue.bannerTime > 0 && e.platform.showSystemBanner && e.platform.showSystemBanner();
                            //     else if (PlatformCode === PlatformList.华为) e.platform.showSystemBanner && e.platform.showSystemBanner();
                            // else if (PlatformCode === PlatformList.QQ) e.platform.showSystemBanner && e.platform.showSystemBanner();
                            // else if (PlatformCode === PlatformList.VIVO);
                            // else if (PlatformCode === PlatformList.OPPO) {
                            //     if (ServerConfig.bannerRatio > 0) e.getRandomIntNum(0, 100) < ServerConfig.bannerRatio ? e.platform.showMutual && e.platform.showMutual() : e.platform.showNativeBanner && e.platform.showNativeBanner()
                            // } else PlatformCode === PlatformList.微信 || PlatformCode === PlatformList.百度 || PlatformCode === PlatformList.快手 || PlatformCode === PlatformList.魅族 || PlatformCode === PlatformList.UC && e.platform.showSystemBanner && e.platform.showSystemBanner()
                            showBannerMini()
                        };
                    if (ServerConfig.celue.bannerTime <= 0) t();
                    else {
                        var i = (new Date).getTime();
                        i > this.bannerTriggerTime && (this.bannerTriggerTime = i + 1e3 * ServerConfig.celue.bannerTime, t())
                    }
                }
            }, {
                key: "executeDestroyBanner",
                value: function () {
                    // this.platform && (PlatformCode === PlatformList.头条 ? ServerConfig.celue.bannerTime > 0 && this.platform.destroySystemBanner && this.platform.destroySystemBanner() : PlatformCode === PlatformList.华为 ? this.platform.showSystemBanner && this.platform.destroySystemBanner() : PlatformCode === PlatformList.QQ ? this.platform.destroySystemBanner && this.platform.destroySystemBanner() : PlatformCode === PlatformList.VIVO || (PlatformCode === PlatformList.OPPO ? ServerConfig.banerRatio > 0 && (this.platform.showMutual && this.platform.destroyMutual(), this.platform.destroySystemBanner && this.platform.destroySystemBanner()) : PlatformCode === PlatformList.微信 || PlatformCode === PlatformList.百度 || PlatformCode === PlatformList.快手 || PlatformCode === PlatformList.魅族 || PlatformCode === PlatformList.UC && this.platform.destroySystemBanner && this.platform.destroySystemBanner()))
                    hideBannerMini()
                }
            }, {
                key: "executeShowFinishLogic",
                value: function (e) {
                    var t = this;
                    if (PlatformCode !== PlatformList.VIVO && PlatformCode !== PlatformList.OPPO && PlatformCode !== PlatformList.华为) {
                        if (PlatformCode === PlatformList.QQ) {
                            var i = function () {
                                var e = t.getRandomIntNum(0, 100);
                                if (e < ServerConfig.sendDesk) {
                                    t.isAdditionDesktop(null, function () {
                                        t.executeAdditionDesktop(null)
                                    })
                                }(e = t.getRandomIntNum(0, 100)) < ServerConfig.sendShare && t.executeShare(null, null), qq.isColorSignExistSync || qq.addRecentColorSign({})
                            };
                            if (e) {
                                if (ServerConfig.winCount <= 0) return;
                                return ServerConfig.winCount--, ServerConfig.winCount <= 0 ? (ServerConfig.winCount = ServerConfig.winVideo, void this.executeShowVideo(i, i)) : void i()
                            }
                            if (ServerConfig.loseCount <= 0) return;
                            if (ServerConfig.loseCount--, ServerConfig.loseCount <= 0) return ServerConfig.loseCount = ServerConfig.loseVideo, void this.executeShowVideo(i, i);
                            i()
                        }
                    } else if (this.getRandomIntNum(0, 100) < ServerConfig.sendDesk) {
                        this.isAdditionDesktop(null, function () {
                            t.executeAdditionDesktop(null)
                        })
                    }
                }
            }, {
                key: "executeShowMoreGame",
                value: function () {
                    this.platform && this.platform.showMoreGame && this.platform.showMoreGame()
                }
            }, {
                key: "executeAdditionDesktop",
                value: function (e) {
                    this.platform && this.platform.additionDesktop && this.platform.additionDesktop(e)
                }
            }, {
                key: "isAdditionDesktop",
                value: function (e, t) {
                    this.platform && this.platform.isAdditionDesktop && this.platform.isAdditionDesktop(e, t)
                }
            }, {
                key: "executeShake",
                value: function (e) {
                    this.platform && this.platform.doShake && this.platform.doShake(e)
                }
            }, {
                key: "executeShowToast",
                value: function (e) {
                    this.platform && this.platform.showToast && this.platform.showToast(e)
                }
            }, {
                key: "showIcon",
                value: function () {
                    0
                }
            }, {
                key: "closeIcon",
                value: function () {
                    0
                }
            }, {
                key: "java2JsEvent",
                value: function (e) {
                    "playADSuccess" === e ? this.playADSuccess() : "playADFailed" === e && this.playADFailed()
                }
            }, {
                key: "APK_SHOWAD",
                value: function () {}
            }, {
                key: "js2JavaEvent",
                value: function (e) {
                    return cc.log("CC_JSB or jsb.reflection is undefined"), !1
                }
            }, {
                key: "playADSuccess",
                value: function () {
                    null != this.nativeCallBack && (this.nativeCallBack(), this.nativeCallBack = null)
                }
            }, {
                key: "playADFailed",
                value: function () {}
            }]), e
        }();
        i.PlatformUtils = m, cc._RF.pop()
    }, {
        "./_4399": "_4399",
        "./_baidu": "_baidu",
        "./_bytedance": "_bytedance",
        "./_huawei": "_huawei",
        "./_oppo": "_oppo",
        "./_quick": "_quick",
        "./_tencent": "_tencent",
        "./_uc": "_uc",
        "./_vivo": "_vivo"
    }],
    PlayerItem: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "6bd6aXWbQ9LVpEW9FOB5KQU", "PlayerItem");
        var o = e("../../Config");
        cc.Class({
            extends: cc.Component,
            armature: null,
            blood: null,
            extend: null,
            jumpEndCallback: null,
            retreatEndCallback: null,
            startLocation: null,
            endLocation: null,
            controlLocation: null,
            attackEndHandle: null,
            properties: {},
            onLoad: function () {
                var e = this;
                this.power = this.node.getChildByName("power"), this.power.active = !1, this.skinLevel = 0, this.node.armature = this.node.getChildByName("armature").getComponent(sp.Skeleton), this.blood = this.node.getChildByName("armature").getChildByName("blood").getComponent("NumberControl"), this.extend = this.node.getChildByName("armature").getChildByName("extend").getComponent("NumberControl"), this.node.status = o.PlayerStatus.待机, this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Idle", !0), this.node.armature.setCompleteListener(this.armatureCompleteCallBack.bind(this)), this.node.armature.setStartListener(function (t) {
                    var i = t.animation.name;
                    if ("Die" === i) return e.blood.node.active = !1, void(e.extend.node.active = !1);
                    "Jump_3" === i && AssetMgr.createPrefabByName("EffectJump", function (t) {
                        var i = cc.instantiate(t);
                        i.position = cc.v2(), i.zIndex = -1, e.node.addChild(i)
                    })
                })
            },
            armatureCompleteCallBack: function (e) {
                var t = this;
                if (!e.loop) {
                    var i = e.animation.name;
                    if (this.node.status !== o.PlayerStatus.待机) {
                        if (this.node.status !== o.PlayerStatus.跳跃) return this.node.status === o.PlayerStatus.攻击 ? (this.node.status = o.PlayerStatus.待机, void(this.attackEndHandle && this.attackEndHandle())) : this.node.status === o.PlayerStatus.胜利 ? (console.log("aName = ", i), void("Jump_1" === i ? (console.log("起跳完毕, 保持中~~~~~"), this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Jump_2", !0), cc.tween(this.node).bezierTo(.35, this.sLocation, this.controlLocation, this.tLocation).call(function () {
                            t.node.armature.clearTrack(0), t.node.armature.setAnimation(0, "Jump_3", !1)
                        }).start()) : "Jump_3" === i && (console.log("下落"), this.node.status = o.PlayerStatus.待机, this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Idle", !0), this.jumpEndCallback && this.jumpEndCallback()))) : void(this.node.status === o.PlayerStatus.死亡 && "Die" === i && this.attackEndHandle && this.attackEndHandle());
                        if (this.node.attackFloor) console.log("存在攻击楼层"), "Jump_1" === i ? (this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Jump_2", !0), cc.tween(this.node).bezierTo(.35, this.sLocation, this.controlLocation, this.tLocation).call(function () {
                            t.node.armature.clearTrack(0), t.node.armature.setAnimation(0, "Jump_3", !1)
                        }).start()) : "Jump_3" === i && (this.node.status = o.PlayerStatus.待机, this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Idle", !0), this.jumpEndCallback && this.jumpEndCallback());
                        else if ("Jump_1" === i) {
                            this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Jump_2", !0);
                            var n = this.node.position.sub(this.tLocation).mag() / 1e3;
                            cc.tween(this.node).to(n, {
                                position: this.tLocation
                            }).call(function () {
                                t.node.armature.clearTracks(), t.node.armature.setAnimation(0, "Jump_3", !1)
                            }).start()
                        } else "Jump_3" === i && (this.node.status = o.PlayerStatus.待机, this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Idle", !0), this.jumpEndCallback && this.jumpEndCallback())
                    }
                }
            },
            initialize: function (e, t) {
                console.log("主角皮肤序号 = ", e), this.skinIndex = e, this.node.detail = t, this.blood.initialize(t.blood), this.extend.initialize(t.extend), this.alterationSkin()
            },
            alterationSkin: function () {
                var e = 0;
                if ((e = this.node.detail.blood < 1e3 ? 1 : this.node.detail.blood >= 1e3 && this.node.detail.blood < 2500 ? 2 : this.node.detail.blood >= 2500 && this.node.detail.blood < 4e3 ? 3 : 4) > this.skinLevel) {
                    this.skinLevel = e, console.log("升级, 当前等级为 = ", this.skinLevel);
                    for (var t = Object.keys(SlotList[this.skinIndex - 1]), i = 0; i < t.length; i++) {
                        var o = t[i],
                            n = SlotList[this.skinIndex - 1][o][this.skinLevel - 1];
                        this.node.armature.setAttachment(o, n)
                    }
                }
            },
            executeAlterationBlood: function (e, t) {
                this.node.detail.blood += e, e > 0 && (SoundMgr.playEffect("upgrade"), this.power.active = !0, this.alterationSkin(), this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "win_3", !1), this.node.armature.addAnimation(0, "Idle", !0, 1.1)), this.blood.executeRefresh(e, o.IncreaseValue, .1, t)
            },
            executeAlterationExtend: function (e, t) {
                this.node.detail.extend += e, this.node.detail.extend < 0 && (this.node.detail.extend = 0), this.extend.executeRefresh(e, o.IncreaseValue, .1, t)
            },
            executeReset: function () {
                console.log("executeReset"), this.node.srcTower = null, this.node.srcFloor = null, this.node.attackFloor = null, this.node.retreatFloor = null, this.attackEndHandle = null, this.jumpEndCallback = null, this.retreatEndCallback = null, this.startLocation = null, this.endLocation = null, this.controlLocation = null
            },
            executePortraitJump: function (e, t) {
                this.tLocation = e, this.jumpEndCallback = t, this.node.status = o.PlayerStatus.跳跃, this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Jump_1", !1)
            },
            executeLandscapeJump: function (e, t, i) {
                this.sLocation = e, this.tLocation = t, this.jumpEndCallback = i, this.node.status = o.PlayerStatus.跳跃;
                var n = this.node.srcFloor.index,
                    a = this.node.attackFloor.index;
                this.startLocation = this.node.armature.node.position, this.endLocation = cc.Vec2.ZERO, this.controlLocation = cc.Vec2.ZERO, this.controlLocation = n === a ? cc.v2(e.x + (t.x - e.x) / 2, e.y + 400) : n > a ? cc.v2(e.x + (t.x - e.x) / 2, e.y + 400) : cc.v2(e.x + (t.x - e.x) / 2, t.y + 400), this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Jump_1", !1)
            },
            executeRetreatJump: function (e, t, i) {
                this.sLocation = e, this.tLocation = t, this.jumpEndCallback = i, this.node.status = o.PlayerStatus.胜利;
                var n = this.node.attackFloor.index,
                    a = this.node.srcFloor.index;
                this.startLocation = this.node.armature.node.position, this.endLocation = cc.Vec2.ZERO, this.controlLocation = cc.Vec2.ZERO, n === a ? (console.log("同层之间跳跃"), this.controlLocation = cc.v2(this.sLocation.x + (this.tLocation.x - this.sLocation.x) / 2, this.sLocation.y + 400)) : n > a ? (console.log("向下跳跃"), this.controlLocation = cc.v2(this.sLocation.x + (this.tLocation.x - this.sLocation.x) / 2, this.sLocation.y + 400)) : (console.log("向上跳跃"), this.controlLocation = cc.v2(this.sLocation.x + (this.tLocation.x - this.sLocation.x) / 2, this.tLocation.y + 400)), console.log("开始起跳"), this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Jump_1", !1)
            },
            executeDeath: function () {
                this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Die", !1)

                //TODO 回调被清除
            },
            executeAttack: function (e) {
                this.attackEndHandle = e;
                var t = "Attack_LVL".concat(this.skinLevel);
                this.node.isDeath ? (SoundMgr.playEffect("die"), this.node.status = o.PlayerStatus.死亡, this.node.armature.clearTracks(), this.node.armature.setAnimation(0, t, !1), this.node.armature.addAnimation(0, "Die", !1, 0)) : (console.log("进行攻击".concat(t)), SoundMgr.playEffect("attack"), this.node.status = o.PlayerStatus.攻击, this.node.armature.clearTracks(), this.node.armature.setAnimation(0, t, !1))
            }
        }), cc._RF.pop()
    }, {
        "../../Config": "Config"
    }],
    PushWindow: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "4d8c1O1ysNMKb5Ow79+Hiow", "PushWindow"), cc.Class({
            extends: cc.Component,
            properties: {
                Armature: {
                    default: null,
                    type: sp.Skeleton,
                    displayName: "角色动画"
                },
                ArmatureList: {
                    default: [],
                    type: sp.SkeletonData,
                    displayName: "动画列表"
                }
            },
            onLoad: function () {
                this.window = this.node.getChildByName("window")
            },
            initialize: function (e, t) {
                console.log("试用Index = ", e), this.touch_handle = t, this.try_index = e, this.Armature.skeletonData = this.ArmatureList[e - 1];
                for (var i = SlotList[e - 1], o = Object.keys(i), n = 0; n < o.length; n++) {
                    var a = o[n],
                        s = i[a][2];
                    this.Armature.setAttachment(a, s)
                }
                this.Armature.clearTracks(), this.Armature.setAnimation(0, "Idle", !0)
            },
            start: function () {
                cc.tween(this.window).to(.2, {
                    scale: 1
                }, {
                    easing: "sineIn"
                }).start(), adUtils.executeShowOtherAdvertising(!0)
            },
            buttonTouchEventCallBack: function (e) {
                var t = this,
                    i = e.target.name;
                switch (SoundMgr.playEffect("button"), i) {
                    case "abandonButton":
                        this.touch_handle && this.touch_handle(null), this.node.removeFromParent(!0);
                        break;
                    case "tryButton":
                        adUtils.executeShowVideo(function () {
                            t.touch_handle && t.touch_handle(t.try_index), t.node.removeFromParent(!0)
                        })
                }
            }
        }), cc._RF.pop()
    }, {}],
    RotateAction: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "2a897Q2XZ9AapJZpHvNf30g", "RotateAction"), cc.Class({
            extends: cc.Component,
            properties: {
                RTime: {
                    default: 1,
                    type: cc.Float,
                    displayName: "时间"
                },
                RDegree: {
                    default: 30,
                    type: cc.Integer,
                    displayName: "角度"
                }
            },
            start: function () {
                var e = cc.tween().by(this.RTime, {
                    angle: this.RDegree
                });
                cc.tween(this.node).repeatForever(e).start()
            }
        }), cc._RF.pop()
    }, {}],
    ShareControl: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "d077f20DC1EL6oRjUjJaAku", "ShareControl"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                PlatformCode === PlatformList.头条 || PlatformCode === PlatformList.快手 || PlatformCode === PlatformList.QQ || PlatformCode === PlatformList.微信 ? this.node.active = !0 : this.node.active = !1
            },
            buttonTouchEventCallBack: function () {
                adUtils.executeShare()
            }
        }), cc._RF.pop()
    }, {}],
    ShareWindow: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "68ce3swIWFEZIqbtFXW5zLo", "ShareWindow"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.window = this.node.getChildByName("window");
                var e = this.window.getChildByName("closeButton");
                e.width = 78, e.height = 83, this.window.scale = 0
            },
            start: function () {
                cc.tween(this.window).to(.2, {
                    scale: 1
                }, {
                    easing: "sineIn"
                }).start()
            },
            executeShare: function () {
                console.log("执行分享"), this.node.removeFromParent(!0)
            },
            buttonTouchEventCallBack: function (e) {
                switch (SoundMgr.playEffect("button"), e.target.name) {
                    case "closeButton":
                        this.node.removeFromParent(!0);
                        break;
                    case "shareButton":
                    case "window":
                        this.executeShare()
                }
            }
        }), cc._RF.pop()
    }, {}],
    SkinScript: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "59238b9IQ1HpbHWZBrUe883", "SkinScript"), cc.Class({
            extends: cc.Component,
            chooseItem: null,
            userItem: null,
            properties: {
                DisplayItem: {
                    default: null,
                    type: cc.Node,
                    displayName: "展示角色"
                },
                SkinContent: {
                    default: null,
                    type: cc.Node,
                    displayName: "皮肤容器"
                }
            },
            onLoad: function () {
                this.skinList = this.SkinContent.children, this.goldNumber = this.node.getChildByName("goldButton").getChildByName("num").getComponent(cc.Label)
            },
            initialize: function () {
                this.DisplayItem.getComponent("DisplayItem").initialize(1);
                for (var e = 0; e < this.skinList.length; e++) {
                    var t = this.skinList[e];
                    t.index = e, this.executeRefresh(e, t)
                }
            },
            start: function () {
                adUtils.executeShowOtherAdvertising(!1)
            },
            executeRefresh: function (e, t) {
                var i = t.getChildByName("frame"),
                    o = i.getComponent(cc.Sprite),
                    n = i.getChildByName("portrait").getComponent(cc.Sprite);
                AssetMgr.setSpriteFrameByTexture(n, "GameTextures", "touxiang".concat(e + 1));
                var a = i.getChildByName("flag"),
                    s = i.getChildByName("choose"),
                    r = t.getChildByName("button"),
                    c = r.children,
                    l = cc.UserInfo.skinList[e];
                l.isLock ? (AssetMgr.setSpriteFrameByTexture(o, "GameTextures", "skin-img-box-2"), a.active = !1, s.active = !1, r.active = !0, c[1].active = !1, 1 === l.buyStyle ? (c[0].active = !0, c[0].getChildByName("cost").getComponent(cc.Label).string = l.value, c[2].active = !1) : 2 === l.buyStyle && (c[0].active = !1, c[2].active = !0)) : cc.UserInfo.skinIndex === e + 1 ? (AssetMgr.setSpriteFrameByTexture(o, "GameTextures", "skin-img-box-1"), a.active = !0, s.active = !0, r.active = !1, this.userItem = t, this.chooseItem = t) : (AssetMgr.setSpriteFrameByTexture(o, "GameTextures", "skin-img-box-2"), a.active = !1, s.active = !1, c[0].active = !1, c[1].active = !0, c[2].active = !1)
            },
            update: function (e) {
                this.goldNumber.string = cc.UserInfo.gold
            },
            executeAlterationItem: function (e) {
                if (!Object.is(e, this.chooseItem)) {
                    this.DisplayItem.getComponent("DisplayItem").initialize(e.index + 1);
                    var t = this.chooseItem.getChildByName("frame").getChildByName("choose");
                    t.active = !1, this.chooseItem = e, (t = this.chooseItem.getChildByName("frame").getChildByName("choose")).active = !0
                }
            },
            executeReturnToPreviousScreen: function () {
                cc.director.loadScene("MenuScene", function () {
                    cc.director.getScene().getChildByName("Canvas").getComponent("MenuScript").initialize()
                })
            },
            executeActivate: function (e) {
                var t = e.parent.parent,
                    i = cc.UserInfo.skinList[t.index];
                if (i.isLock) {
                    var o = function () {
                        SoundMgr.playEffect("receive");
                        var e = t.getChildByName("button").children;
                        e[0].active = !1, e[1].active = !0, e[2].active = !1, cc.UserInfo.skinList[t.index].isLock = !1, cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.UserInfo))
                    };
                    if (1 === i.buyStyle) return cc.UserInfo.gold < i.value ? void AssetMgr.showSupplyWindow(null) : (cc.UserInfo.gold -= i.value, void o());
                    adUtils.executeShowVideo(o)
                }
            },
            executeUse: function (e) {
                var t = e.parent.parent,
                    i = this.chooseItem.getChildByName("frame");
                (a = i.getChildByName("choose")).active = !1;
                var o = (i = this.userItem.getChildByName("frame")).getComponent(cc.Sprite),
                    n = i.getChildByName("flag"),
                    a = i.getChildByName("choose"),
                    s = this.userItem.getChildByName("button"),
                    r = s.children;
                n.active = !1, a.active = !1, s.active || (s.active = !0), AssetMgr.setSpriteFrameByTexture(o, "GameTextures", "skin-img-box-2"), r[0].active = !1, r[1].active = !0, r[2].active = !1, this.chooseItem = t, this.userItem = t, o = (i = this.userItem.getChildByName("frame")).getComponent(cc.Sprite), n = i.getChildByName("flag"), a = i.getChildByName("choose"), r = (s = this.userItem.getChildByName("button")).children, n.active = !0, a.active = !0, s.active = !1, AssetMgr.setSpriteFrameByTexture(o, "GameTextures", "skin-img-box-1"), cc.UserInfo.skinIndex = t.index + 1, cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.UserInfo)), this.DisplayItem.getComponent("DisplayItem").initialize(t.index + 1)
            },
            receiveSuccessCallBack: function () {
                SoundMgr.playEffect("receive"), AssetMgr.showAlertWindow(300);cc.UserInfo.gold += 300
            },
            buttonTouchEventCallBack: function (e) {
                switch (SoundMgr.playEffect("button"), e.target.name) {
                    case "SkinItem":
                        this.executeAlterationItem(e.target);
                        break;
                    case "buyButton":
                    case "unLockButton":
                        this.executeActivate(e.target);
                        break;
                    case "userButton":
                        this.executeUse(e.target);
                        break;
                    case "goldButton":
                        AssetMgr.showSupplyWindow(this.receiveSuccessCallBack.bind(this));
                        break;
                    case "backButton":
                        this.executeReturnToPreviousScreen()
                }
            }
        }), cc._RF.pop()
    }, {}],
    SplashItem: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "ca19fde/7FNFJYZdba6GaL0", "SplashItem"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.img = this.node.getChildByName("img"), this.img.scale = 0
            },
            start: function () {
                var e = this;
                cc.tween(this.img).to(.25, {
                    scale: 1
                }).call(function () {
                    e.node.removeFromParent(!0)
                }).start()
            }
        }), cc._RF.pop()
    }, {}],
    SupplyWindow: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "123edgyaORMDY27pbqSaUA+", "SupplyWindow"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.window = this.node.getChildByName("window"), this.window.scale = 0
            },
            start: function () {
                cc.tween(this.window).to(.2, {
                    scale: 1
                }, {
                    easing: "sineIn"
                }).start(), adUtils.executeShowOtherAdvertising(!0)
            },
            registerReceiveHandle: function (e) {
                this.receiveHandle = e
            },
            executeReceive: function () {
                var e = this;
                adUtils.executeShowVideo(function () {
                    cc.UserInfo.gold += 300, cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.UserInfo)), e.receiveHandle && e.receiveHandle(), e.node.removeFromParent(!0)
                })
            },
            buttonTouchEventCallBack: function (e) {
                switch (SoundMgr.playEffect("button"), e.target.name) {
                    case "confirmButton":
                        this.executeReceive();
                        break;
                    case "cancelButton":
                        this.node.removeFromParent(!0)
                }
            }
        }), cc._RF.pop()
    }, {}],
    TDHttps: [function (e, t, i) {
        "use strict";

        function o(e) {
            "@babel/helpers - typeof";
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        cc._RF.push(t, "0d73172BxlKPLBetH7GY1wf", "TDHttps"), window.SequenceNumber = "2255B2E021264169A0BFF411E83B6F34";
        var n = function () {
            window.localStorage || (window.localStorage = cc.sys.localStorage), window.sessionStorage || (window.sessionStorage = cc.sys.localStorage);
            var e = window.GAME_NAME,
                t = window.SequenceNumber,
                i = "https://h5.udrig.com/app/v1",
                n = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function (e) {
                    return o(e)
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : o(e)
                },
                a = function (e) {
                    var t, i, o = 0,
                        a = e.document,
                        s = /^(?:text|application)\/javascript/i,
                        r = /^(?:text|application)\/xml/i,
                        c = "application/json",
                        l = "text/html",
                        d = /^\s*$/,
                        u = function o(n) {
                            var a = C({}, n || {});
                            for (t in o.settings) void 0 === a[t] && (a[t] = o.settings[t]);
                            (S = a).global && 0 == u.active++ && h(S), a.crossDomain || (a.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(a.url) && RegExp.$2 != e.location.host);
                            var m = a.dataType;
                            n = /=\?/.test(a.url);
                            if ("jsonp" == m || n) return n || (a.url = v(a.url, "callback=?")), o.JSONP(a);
                            a.url || (a.url = e.location.toString()), y(a);
                            var _, S = a.accepts[m],
                                w = (n = {}, /^([\w-]+:)\/\//.test(a.url) ? RegExp.$1 : e.location.protocol),
                                b = o.settings.xhr();
                            for (i in a.crossDomain || (n["X-Requested-With"] = "XMLHttpRequest"), S && (-1 < (n.Accept = S).indexOf(",") && (S = S.split(",", 2)[0]), b.overrideMimeType && b.overrideMimeType(S)), (a.contentType || a.data && "GET" != a.type.toUpperCase()) && (n["Content-Type"] = a.contentType || "application/x-www-form-urlencoded"), a.headers = C(n, a.headers || {}), b.onreadystatechange = function () {
                                    if (4 == b.readyState) {
                                        clearTimeout(_);
                                        var e, t = !1;
                                        if (200 <= b.status && b.status < 300 || 304 == b.status || 0 == b.status && "file:" == w) {
                                            m = m || (i = b.getResponseHeader("content-type")) && (i == l ? "html" : i == c ? "json" : s.test(i) ? "script" : r.test(i) && "xml") || "text", e = b.responseText;
                                            try {
                                                "script" == m ? (0, eval)(e) : "xml" == m ? e = b.responseXML : "json" == m && (e = d.test(e) ? null : JSON.parse(e))
                                            } catch (e) {
                                                t = e
                                            }
                                            t ? f(t, "parsererror", b, a) : p(e, b, a)
                                        } else f(null, "error", b, a)
                                    }
                                    var i
                                }, n = !("async" in a) || a.async, b.open(a.type, a.url, n), a.headers) b.setRequestHeader(i, a.headers[i]);
                            return !1 === function (e, t) {
                                var i = t.context;
                                if (!1 === t.beforeSend.call(i, e, t) || !1 === h(t)) return !1;
                                h(t)
                            }(b, a) ? (b.abort(), !1) : (0 < a.timeout && (_ = setTimeout(function () {
                                b.onreadystatechange = g, b.abort(), f(null, "timeout", b, a)
                            }, a.timeout)), b.send(a.data || null), b)
                        };

                    function h(e) {
                        if (e.global) return !0
                    }

                    function p(e, t, i) {
                        var o = i.context,
                            n = "success";
                        i.success.call(o, e, n, t), h(i), m(n, t, i)
                    }

                    function f(e, t, i, o) {
                        var n = o.context;
                        o.error.call(n, i, t, e), h(o), m(t, i, o)
                    }

                    function m(e, t, i) {
                        var o = i.context;
                        i.complete.call(o, t, e), h(i), (i = i).global && !--u.active && h(i)
                    }

                    function g() {}

                    function v(e, t) {
                        return (e + "&" + t).replace(/[&?]{1,2}/, "?")
                    }

                    function y(e) {
                        var t, i;
                        "object" === n(e.data) && (e.data = (t = e.data, (i = []).add = function (e, t) {
                            this.push(_(e) + "=" + _(t))
                        }, function e(t, i, o, a) {
                            var s = "array" == typeof i;
                            for (var r in i) {
                                var c = i[r];
                                a && (r = o ? a : a + "[" + (s ? "" : r) + "]"), !a && s ? t.add(c.name, c.value) : (o ? "array" == typeof c : "object" === (void 0 === c ? "undefined" : n(c))) ? e(t, c, o, r) : t.add(r, c)
                            }
                        }(i, t, void 0), i.join("&").replace("%20", "+"))), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = v(e.url, e.data))
                    }
                    u.active = 0, u.JSONP = function (t) {
                        if (!("type" in t)) return u(t);
                        var i, n = "jsonp" + ++o,
                            s = a.createElement("script"),
                            r = {
                                abort: function () {
                                    n in e && (e[n] = g), m("abort", r, t)
                                }
                            },
                            c = a.getElementsByTagName("head")[0] || a.documentElement;
                        return t.error && (s.onerror = function () {
                            r.abort(), t.error()
                        }), e[n] = function (o) {
                            clearTimeout(i), delete e[n], p(o, r, t)
                        }, y(t), s.src = t.url.replace(/=\?/, "=" + n), c.insertBefore(s, c.firstChild), 0 < t.timeout && (i = setTimeout(function () {
                            r.abort(), m("timeout", r, t)
                        }, t.timeout)), r
                    }, u.settings = {
                        type: "GET",
                        beforeSend: g,
                        success: g,
                        error: g,
                        complete: g,
                        context: null,
                        global: !0,
                        xhr: function () {
                            return new e.XMLHttpRequest
                        },
                        accepts: {
                            script: "text/javascript, application/javascript",
                            json: c,
                            xml: "application/xml, text/xml",
                            html: l,
                            text: "text/plain"
                        },
                        crossDomain: !1,
                        timeout: 0
                    }, u.get = function (e, t) {
                        return u({
                            url: e,
                            success: t
                        })
                    }, u.post = function (e, t, i, o) {
                        return "function" == typeof t && (o = o || i, i = t, t = null), u({
                            type: "POST",
                            url: e,
                            data: t,
                            success: i,
                            dataType: o
                        })
                    }, u.getJSON = function (e, t) {
                        return u({
                            url: e,
                            success: t,
                            dataType: "json"
                        })
                    };
                    var _ = encodeURIComponent;

                    function C(e) {
                        return Array.prototype.slice.call(arguments, 1).forEach(function (i) {
                            for (t in i) void 0 !== i[t] && (e[t] = i[t])
                        }), e
                    }
                    return {
                        ajax: u
                    }
                }(window),
                s = {
                    deviceId: "",
                    appkey: t || "",
                    appProfile: {
                        versionName: "",
                        versionCode: "",
                        initTime: "",
                        sdkVersion: "H5+APP+v1.0.6",
                        partner: ""
                    },
                    deviceProfile: {
                        pixel: "",
                        language: navigator.language,
                        timezone: (new Date).getTimezoneOffset() / 60 * -1
                    },
                    msgs: []
                },
                r = {
                    type: 2,
                    data: {
                        id: "",
                        start: 0,
                        duration: 0
                    }
                },
                c = {
                    autoTrack: !0
                };
            ! function () {
                for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
                    var i = e[t].getAttribute("td-autoTrack");
                    if ("false" === i || !1 === i) {
                        c.autoTrack = !1;
                        break
                    }
                }
            }();
            var l = (new Date).getTime();

            function d(e, t, i) {
                if (void 0 === t) {
                    var o = null;
                    if (document.cookie && "" != document.cookie)
                        for (var n = document.cookie.split(";"), a = 0; a < n.length; a++) {
                            var s = n[a];
                            if (s.substring(0, e.length + 1) == e + "=") {
                                o = decodeURIComponent(s.substring(e.length + 1));
                                break
                            }
                        }
                    return o
                }
                i = i || {}, null === t && (t = "", i.expires = -1);
                var r = "";
                i.expires && ("number" == typeof i.expires || i.expires.toUTCString) && ("number" == typeof i.expires ? (l = new Date).setTime(l.getTime() + 24 * i.expires * 60 * 60 * 1e3) : l = i.expires, r = "; expires=" + l.toUTCString());
                var c = i.path ? "; path=" + i.path : "",
                    l = i.domain ? "; domain=" + i.domain : "";
                i = i.secure ? "; secure" : "";
                document.cookie = [e, "=", encodeURIComponent(t), r, c, l, i].join("")
            }
            c.localStorage = {
                add: function (e, t) {
                    this.addLocalStorage(e, t), "sessionId" != e && this.addCookie(e, t)
                },
                get: function (e) {
                    return this.getLocalStorage(e) || this._getCookie(e)
                },
                create: function () {
                    d("__TD_LOCAL") || (this._addCookie(""), window.localStorage)
                },
                addCookie: function (e, t) {
                    if (!window.localStorage) {
                        this.create();
                        var i = this.cookieList();
                        i[e] = t;
                        var o, n = [];
                        for (o in i) n.push(o + "=" + i[o]);
                        this._addCookie(n.join(";"))
                    }
                },
                _setCookie: function () {
                    this.cookieList(), d("__TD_LOCAL", "", {
                        expires: 1095,
                        path: "/",
                        domain: location.hostname
                    })
                },
                _addCookie: function (e) {
                    d("__TD_LOCAL", e, {
                        expires: 1095,
                        path: "/",
                        domain: location.hostname
                    })
                },
                _getCookie: function (e) {
                    var t = this.cookieList();
                    if (t && t[e]) return t[e]
                },
                delCookie: function (e) {},
                cookieList: function () {
                    var e = d("__TD_LOCAL");
                    return this.format(e)
                },
                addLocalStorage: function (e, t) {
                    window.localStorage && ("sessionId" == e && window.sessionStorage ? sessionStorage.setItem("__TD_" + e, t) : localStorage["__TD_" + e] = t)
                },
                delLocalStorage: function (e) {
                    window.localStorage && localStorage.removeItem("__TD_" + e)
                },
                getLocalStorage: function (e) {
                    if (window.localStorage) return "sessionId" == e && window.sessionStorage ? sessionStorage.getItem("__TD_" + e) : localStorage["__TD_" + e]
                },
                format: function (e) {
                    var t = {};
                    if (!e) return t;
                    for (var i = e.split(";"), o = i.length, n = 0; n < o; n++) {
                        var a = i[n].split("=");
                        2 == a.length && (t[a[0]] = a[1])
                    }
                    return t
                }
            }, c.sessionStorage = {
                add: function (e, t) {
                    window.sessionStorage && sessionStorage.setItem("__TD_" + e, t)
                },
                get: function (e) {
                    return sessionStorage.getItem("__TD_" + e)
                },
                remove: function (e) {
                    sessionStorage.removeItem("__TD_" + e)
                }
            };
            var u, h, p, f, m, g = !0,
                v = !1;

            function y() {
                this.url = i, this.opts = {}, this.requestArray = new Array
            }
            y.prototype = {
                getAjax: function (e, t, i, o, n) {
                    (function (s) {
                        var r, c;
                        0 < navigator.userAgent.indexOf("MSIE 9.0") ? "MSIE6.0" == (r = navigator.appVersion.split(";")[1].replace(/[ ]/g, "")) || "MSIE7.0" == r ? alert("no support IE6,IE7") : window.XDomainRequest && ((c = new XDomainRequest) ? (s.error && "function" == typeof s.error && (c.onerror = function () {
                            s.error()
                        }), s.timeout && "function" == typeof s.timeout && (c.ontimeout = function () {
                            s.timeout()
                        }), s.success && "function" == typeof s.success && (c.onload = function () {
                            s.dataType ? "json" == s.dataType.toLowerCase() && s.success(JSON.parse(c.responseText)) : s.success(c.responseText)
                        }), c.open(s.type, s.url), c.send(s.param)) : alert("Failed to create XDomainRequest")) : g ? (_.add("td-unique", "true"), g = !1, u = a.ajax({
                            type: e,
                            url: t,
                            data: JSON.stringify(i),
                            dataType: "text",
                            success: o,
                            error: n,
                            complete: function () {
                                g = !(u = void 0), v && (S.getAjax(), v = !1), _.delLocalStorage("td-unique")
                            }
                        })) : v = !0
                    })({
                        url: this.url,
                        type: "POST",
                        param: JSON.stringify(i),
                        success: o
                    })
                },
                set: function (e, t, i) {
                    this.opts = e, this.send(t, i)
                },
                send: function (e, t) {
                    this.getAjax("post", this.url, this.opts, e, t)
                }
            }, (h = window).TDBASE = h.TDBASE || {}, TDBASE.cacheName = "cacheList", TDBASE.unique = function (e) {
                e.sort();
                for (var t = [e[0]], i = 1; i < e.length; i++) e[i] !== t[t.length - 1] && t.push(e[i]);
                return t
            }, TDBASE.getArgs = function () {
                for (var e = new Object, t = h.location.search.substring(1).split("&"), i = 0; i < t.length; i++) {
                    var o, n = t[i].indexOf("="); - 1 != n && (o = t[i].substring(0, n), n = t[i].substring(n + 1), n = decodeURIComponent(n), e[o] = n)
                }
                return e
            }, TDBASE.getCommon = function (e) {
                var t = _.get("appkey") ? _.get("appkey") : s.appkey;
                e = {
                    deviceId: s.deviceId,
                    appkey: t,
                    appProfile: s.appProfile,
                    deviceProfile: s.deviceProfile,
                    msgs: e.msg
                };
                return s.appContext && (e.appContext = s.appContext), e
            }, TDBASE.getCommonMsg = function (e, t, i, o, n, a) {
                return {
                    type: 2,
                    data: {
                        id: e,
                        start: t,
                        status: i,
                        duration: o || 0,
                        pages: a ? [a] : [],
                        events: n || []
                    }
                }
            }, TDBASE.addSessionStart = function (e, t) {
                _.add("lastSession", JSON.stringify({
                    id: r.data.id,
                    start: r.data.start
                })), i = (i = _.get("td-hold-event")) && JSON.parse(i);
                var i = TDBASE.getCommonMsg(r.data.id, r.data.start, t, e, i);
                TDBASE.addMsg(i), _.delLocalStorage("td-hold-event")
            }, TDBASE.equal = function (e, t) {
                if ((void 0 === e ? "undefined" : n(e)) != (void 0 === t ? "undefined" : n(t))) return !1;
                if (n(e.length) != n(t.length)) return !1;
                var i = !0,
                    o = [],
                    a = [];
                for (s in e) "count" === s || "start" === s || o.push(s);
                for (s in t) "count" === s || "start" === s || a.push(s);
                if (o.length != a.length) return !1;
                for (var s = 0, r = a.length; s < r; s++) o.push(a[s]);
                var c = TDBASE.unique(o);
                for (s = 0, r = c.length; s < r; s++) {
                    if (!(c[s] in e && c[s] in t)) return !1;
                    if ("object" == n(e[c[s]]) && "object" == n(t[c[s]])) i = TDBASE.equal(e[c[s]], t[c[s]]);
                    else if (e[c[s]] !== t[c[s]]) return !1
                }
                return i
            }, TDBASE.addGenre = function (e, t, i) {
                if (_.get("sessionMsg")) {
                    i && i(e);
                    var o = (i = JSON.parse(_.get("sessionMsg"))).msg[i.msg.length - 1].data[t];
                    if ("events" !== t) o.push(e), _.add("sessionMsg", JSON.stringify(i));
                    else {
                        if (0 != o.length) {
                            for (var n = !1, a = 0; a < o.length; a++)
                                if (TDBASE.equal(o[a], e)) {
                                    n = !0, o[a].count += 1, o[a].start = e.start;
                                    break
                                } n || o.push(e)
                        } else o.push(e);
                        _.add("sessionMsg", JSON.stringify(i))
                    }
                }
            }, TDBASE.lealSet = function (e) {
                _.add("leavetime", e), _.add("leaveSession", parseInt((e - C.get("SessionStart")) / 1e3))
            }, TDBASE.addMsg = function (e) {
                var t;
                _.get("sessionMsg") ? ((t = JSON.parse(_.get("sessionMsg"))).msg.push(e), _.add("sessionMsg", JSON.stringify(t))) : _.add("sessionMsg", JSON.stringify({
                    msg: [e]
                }))
            }, (p = {
                currentPage: null,
                pageStartTime: 0,
                ref: "",
                logoutCalled: !1,
                init: function () {
                    setTimeout(function () {
                        p.pageLogout()
                    }, 5e3), window.TDAPP = window.TDAPP || {}, window.TDAPP.onPage = p.onPage, c.autoTrack && (p.currentPage = window.location.href, p.ref = document.referrer)
                },
                onPage: function (e) {
                    var t = (new Date).getTime();
                    p.pageLogout("force"), p.pageEnter(e, p.currentPage, t), p.ref = p.currentPage, p.currentPage = e, p.pageStartTime = t, S.getAjax()
                },
                pageEnter: function (e, t, i) {
                    t = {
                        name: e,
                        start: i,
                        duration: 0,
                        refer: t || document.referrer
                    }, TDBASE.addGenre(t, "pages")
                },
                pageLogout: function (e) {
                    if ("force" !== e) {
                        if (p.logoutCalled) return;
                        p.logoutCalled = !0
                    }
                    var t = null,
                        i = 0,
                        o = null;
                    if (c.autoTrack) t = p.currentPage || window.location.href, i = p.pageStartTime || l, o = p.ref || document.referrer;
                    else {
                        if (!p.currentPage) return;
                        t = p.currentPage, i = p.pageStartTime, o = p.ref || document.referrer
                    }
                    e = (new Date).getTime(), TDBASE.lealSet(e), TDBASE.addGenre({
                        name: t,
                        start: i,
                        duration: 6,
                        refer: o
                    }, "pages")
                }
            }).init(), f = {
                init: function () {
                    try {
                        var e = c.localStorage.get("profile");
                        e && (e = JSON.parse(e), e = f._transform(e), s.appContext = s.appContext || {}, s.appContext.account = e)
                    } catch (e) {
                        console.error(e)
                    }
                },
                _transform: function (e) {
                    return (e = JSON.parse(JSON.stringify(e))).accountId = e.profileId, e.type = e.profileType, delete e.profileType, delete e.profileId, e
                },
                _transformInverse: function (e) {
                    return (e = JSON.parse(JSON.stringify(e))).profileId = e.accountId, e.profileType = e.type, delete e.type, delete e.accountId, e
                },
                login: function (e) {
                    f._event(e, "login")
                },
                register: function (e) {
                    f._event(e, "register")
                },
                updateProfile: function (e) {
                    f._event(e, "update")
                },
                _chekProfile: function () {
                    return "object" === n(s.appContext) && "object" === n(s.appContext.account) ? s.appContext.account : null
                },
                _event: function (e, t) {
                    if (!e || "object" !== (void 0 === e ? "undefined" : n(e))) return console.log("profile淇℃伅蹇呭～!");
                    if ("update" !== t && !e.profileId && !/0{1}/.test(e.profileId)) return console.log("profileId 淇℃伅涓哄繀濉�!");
                    if ("update" !== t && "number" != typeof e.profileType) return console.log("profileType 涓哄繀濉�!");
                    var i, o = f._getProfile(e, t),
                        a = {
                            profileId: "_setId",
                            profileType: "_setProfileType",
                            name: "_setName",
                            gender: "_setGender",
                            age: "_setAge"
                        },
                        r = new RegExp("^property[1-9]$");
                    for (i in e) {
                        var l, d = e[i],
                            u = a[i];
                        if (!u || "update" === t && "profileId" === i) {
                            if ((r.test(i) || "property10" === i) && (l = f._setProperty(o, i, d))) return void console.log(l)
                        } else if (l = f[u](o, d)) return void console.log(l)
                    }
                    s.appContext = s.appContext || {}, s.appContext.account = o;
                    var h = f._transformInverse(o);
                    c.localStorage.add("profile", JSON.stringify(h)), o = f._transform(o), h = f._transform(e), w.setProfile(h, t)
                },
                _getProfile: function (e, t) {
                    var i = {};
                    return s.appContext && s.appContext.account && (i = JSON.parse(JSON.stringify(s.appContext.account))), "update" == t || e.profileId === i.accountId ? i : {}
                },
                _setId: function (e, t) {
                    if (!t && !/0{1}/.test(t)) return "profileId涓哄繀濉瓧娈碉紒";
                    e.accountId = t
                },
                _setProfileType: function (e, t) {
                    if ("number" != typeof t || t != t || t < -1 || 6 < t && t < 11 || 20 < t) return "璇蜂笂浼犳纭殑profileType";
                    e.type = t
                },
                _setName: function (e, t) {
                    if ("string" != typeof t) return "profile name 绫诲瀷閿欒";
                    e.name = t
                },
                _setAge: function (e, t) {
                    if ("number" != typeof t || t != t) return "profile age 绫诲瀷閿欒";
                    e.age = t
                },
                _setGender: function (e, t) {
                    if (0 !== t && 1 !== t & 2 !== t) return "profile gender 绫诲瀷閿欒";
                    e.gender = t
                },
                _setProperty: function (e, t, i) {
                    if ("number" == typeof i && i != i || "string" != typeof i && "number" != typeof i) return "profile property 绫诲瀷閿欒";
                    e[t] = i
                }
            }, window.TDAPP = window.TDAPP || {}, window.TDAPP.login = f.login, window.TDAPP.register = f.register, window.TDAPP.updateProfile = f.updateProfile, window.TDAPP.ProfileType = {
                0: "ANONYMOUS",
                1: "REGISTERED",
                2: "SINA_WEIBO",
                3: "QQ",
                4: "QQ_WEIBO",
                5: "ND91",
                6: "WEIXIN",
                11: "TYPE1",
                12: "TYPE2",
                13: "TYPE3",
                14: "TYPE4",
                15: "TYPE5",
                16: "TYPE6",
                17: "TYPE7",
                18: "TYPE8",
                19: "TYPE9",
                20: "TYPE10"
            }, f.init(), m = {
                isObject: function (e) {
                    return e && "object" === (void 0 === e ? "undefined" : n(e))
                },
                isStrNotEmpty: function (e) {
                    return e || /0{1}/.test(e)
                },
                isNumber: function (e) {
                    return "number" == typeof e && e == e
                },
                isCurrencyTypeAvailabal: function (e) {
                    return e && "string" == typeof e && 3 === e.length
                },
                _checkParam: function (e) {
                    return m.isObject(e) ? m.isStrNotEmpty(e.orderId) ? m.isNumber(e.amount) ? !!m.isCurrencyTypeAvailabal(e.currencyType) || (console.warn("璇疯緭鍏ユ纭殑currencyType!"), !1) : (console.warn("璇疯緭鍏ユ纭殑amount!"), !1) : (console.warn("璇疯緭鍏ユ纭殑orderId!"), !1) : (console.warn("璇疯緭鍏ユ纭殑鍙傛暟!"), !1)
                },
                onPlaceOrder: function (e) {
                    m._checkParam(e) && (e = {
                        count: 1,
                        start: (new Date).getTime(),
                        domain: "iap",
                        id: "placeOrder",
                        params: e
                    }, w._saveAndFetch(e))
                },
                onOrderPaySucc: function (e) {
                    m._checkParam(e) && ((e = JSON.parse(JSON.stringify(e))).paymentType && m.isStrNotEmpty(e.paymentType) && (e.payType = e.paymentType), delete e.paymentType, e = {
                        count: 1,
                        start: (new Date).getTime(),
                        domain: "iap",
                        id: "pay",
                        params: e
                    }, w._saveAndFetch(e))
                },
                onCancelOrder: function (e) {
                    m._checkParam(e) && (e = {
                        count: 1,
                        start: (new Date).getTime(),
                        domain: "iap",
                        id: "cancelOrder",
                        params: e
                    }, w._saveAndFetch(e))
                }
            }, window.TDAPP = window.TDAPP || {}, window.TDAPP.onPlaceOrder = m.onPlaceOrder, window.TDAPP.onOrderPaySucc = m.onOrderPaySucc, window.TDAPP.onCancelOrder = m.onCancelOrder;
            var _ = c.localStorage,
                C = c.sessionStorage,
                S = {
                    timedif: void 0,
                    state: 1,
                    deviceId: 0,
                    sessionId: 0,
                    local: [],
                    sendInit: 0,
                    set: function () {
                        try {
                            this.setDeviceId(), this.setSession(), this.setSessionTime(), this.setInitTime(), this.setPartner(), this.setResolution(), this.addlastSession(), this.setPageEnter(), this.getAjax(1)
                        } catch (e) {
                            console.log(e)
                        }
                    },
                    setDeviceId: function () {
                        if (cc.sys.localStorage.getItem("_TD_deviceId")) this.deviceId = cc.sys.localStorage.getItem("_TD_deviceId");
                        else {
                            this.sendInit = 1;
                            for (var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), t = [], i = e.length, o = 0; o < 16; o++) t[o] = e[0 | Math.random() * i];
                            this.deviceId = t.join(""), cc.sys.localStorage.setItem("_TD_deviceId", this.deviceId)
                        }
                        s.deviceId = this.deviceId
                    },
                    setSession: function () {
                        var e, t;
                        if (C.get("sessionId") && _.get("appkey") == s.appkey ? t = C.get("sessionId") : (e = (new Date).getTime(), t = -1 < this.deviceId.indexOf("-") ? this.deviceId.split("-")[0] + e : this.deviceId + e, this.sendInit = 0 == this.sendInit ? 2 : this.sendInit, C.add("sessionId", t)), 0 < 32 - t.length)
                            for (var i = 0, o = 32 - t.length; i < o; i++) t += "0";
                        32 - t.length < 0 && (t = t.substring(0, 32)), r.data.id = this.sessionId = t
                    },
                    setSessionTime: function () {
                        var e = (new Date).getTime();
                        C.get("SessionStart") && _.get("appkey") == s.appkey ? e = C.get("SessionStart") : C.add("SessionStart", e), r.data.start = parseInt(e)
                    },
                    setInitTime: function () {
                        _.get("initTime") ? s.appProfile.initTime = parseInt(_.get("initTime")) : (s.appProfile.initTime = l, _.add("initTime", l))
                    },
                    setPartner: function () {
                        var t = C.get("td_channel"),
                            i = e;
                        t ? s.appProfile.partner = t : null != i && (C.add("td_channel", i), s.appProfile.partner = i)
                    },
                    setResolution: function () {
                        var e = [window.screen.width, window.screen.height];
                        window.devicePixelRatio && e.push(window.devicePixelRatio), s.deviceProfile.pixel = e.join("*")
                    },
                    addlastSession: function () {
                        var e = _.get("lastSession");
                        void 0 === e && (_.delLocalStorage("sessionMsg"), _.delLocalStorage("lastSession")), e ? (e = JSON.parse(e)).id != r.data.id && (e = TDBASE.getCommonMsg(e.id, e.start, 3, parseInt(_.get("leaveSession"))), TDBASE.addMsg(e), this.timedif = parseInt((r.data.start - _.get("leavetime")) / 1e3), _.get("appkey") && _.get("appkey") != s.appkey || (TDBASE.addSessionStart(this.timedif, 1), this.addAppInitEvent())) : (TDBASE.addSessionStart(0, 1), this.addAppInitEvent())
                    },
                    setPageEnter: function () {
                        var e;
                        c.autoTrack && (e = {
                            name: "http://localhost:1111/",
                            start: (new Date).getTime(),
                            duration: 6,
                            refer: "http://localhost:1111/"
                        }, TDBASE.addGenre(e, "pages"))
                    },
                    addAppInitEvent: function () {
                        var e;
                        0 != this.sendInit && (e = {
                            id: "init",
                            domain: "app",
                            start: l || (new Date).getTime(),
                            count: 1,
                            params: {
                                first: !0
                            }
                        }, 2 == this.sendInit && (e.params.first = !1), TDBASE.addGenre(e, "events"))
                    },
                    getAjax: function (e) {
                        var t = this,
                            i = new y;
                        localStorage.__TD_sessionMsg || TDBASE.addSessionStart(0, 2);
                        var o, n = JSON.parse(_.get("sessionMsg")),
                            a = TDBASE.getCommon(n),
                            r = localStorage["__TD_td-init-event"];
                        !r || (o = a.msgs[a.msgs.length - 1]) && (n = o.data.events, o.data.events = n.concat(JSON.parse(r))), _.delLocalStorage("td-init-event");
                        for (var c = [], d = 0; d < a.msgs.length; d++) {
                            var u = a.msgs[d];
                            (2 !== u.data.status || u.data.pages && 0 !== u.data.pages.length || u.data.events && 0 !== u.data.events.length) && c.push(u)
                        }
                        0 !== c.length && (a.msgs = c, _.get("appkey") && _.get("appkey") != s.appkey ? i.set(a, function (e) {
                            _.delLocalStorage("sessionMsg"), s.appProfile.initTime = l, _.add("initTime", l), TDBASE.addSessionStart(0, 1), t.addAppInitEvent(), t.getAjax()
                        }, function (e) {
                            console.log(e)
                        }) : i.set(a, function (e) {
                            _.delLocalStorage("sessionMsg"), TDBASE.addSessionStart(0, 2)
                        }, function (e) {
                            console.log(e)
                        }), _.add("appkey", s.appkey))
                    }
                };
            S.set();
            var w = {
                set: function (e, t, i, o) {
                    var a;
                    if (e || /0{1}/.test(e)) {
                        if (0 < arguments.length) try {
                            var s = {
                                count: 1,
                                start: (new Date).getTime()
                            };
                            if (null != e && (s.id = "string" != typeof e ? JSON.stringify(e) : e), s.label = null != t ? "string" != typeof t ? JSON.stringify(t) : t : "", null != i && ("object" != (void 0 === (a = i) ? "undefined" : n(a)) || "[object object]" != Object.prototype.toString.call(a).toLowerCase() || a.length || (s.params = i)), o && "smart" === o) s.type = "smart";
                            else if (void 0 !== o) {
                                if ("number" != typeof o || isNaN(o)) return void console.error("value鍙兘涓簄umber");
                                s.value = o
                            }
                            w._saveAndFetch(s)
                        } catch (e) {}
                    } else console.warn("event  Id涓哄繀濉瓧娈碉紒")
                },
                setProfile: function (e, t) {
                    e = {
                        count: 1,
                        start: (new Date).getTime(),
                        domain: "account",
                        id: t,
                        params: e
                    }, w._saveAndFetch(e)
                },
                _saveAndFetch: function (e) {
                    u ? TDBASE.addGenre(e, "events", function (e) {
                        var t = _.get("td-hold-event"),
                            i = [];
                        if (i.push(e), t) {
                            t = JSON.parse(t);
                            for (var o = 0; o < t.length; o++)
                                if (TDBASE.equal(t[o], e)) {
                                    t[o].count += 1, t[o].start = e.start;
                                    break
                                } _.add("td-hold-event", JSON.stringify(t))
                        } else _.add("td-hold-event", JSON.stringify(i))
                    }) : (TDBASE.addGenre(e, "events"), setTimeout(function () {
                        S.getAjax()
                    }, 500))
                },
                unload: function () {
                    try {
                        S.getAjax()
                    } catch (e) {}
                }
            };
            window.TDAPP = window.TDAPP || {}, window.TDAPP.onEvent = w.set
        };
        setTimeout(function () {
            try {
                n()
            } catch (e) {}
        }, 2e3), cc._RF.pop()
    }, {}],
    ThunderItem: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "c1f92jiGyxFJZDJ7MqdcfG6", "ThunderItem"), cc.Class({
            extends: cc.Component,
            properties: {
                FrameList: {
                    default: [],
                    type: cc.SpriteFrame,
                    displayName: "图片纹理"
                }
            },
            onLoad: function () {
                this.isPlay = !1, this.Img = this.node.getChildByName("img").getComponent(cc.Sprite), this.displayIndex = 0, this.stepTime = 0, this.roundCount = 5
            },
            initialize: function (e) {
                this.end_handle = e
            },
            start: function () {
                this.isPlay = !0
            },
            update: function (e) {
                if (this.isPlay && (this.stepTime -= e, this.stepTime <= 0)) {
                    if (this.displayIndex++, this.displayIndex > 2) {
                        if (this.roundCount--, this.roundCount <= 0) return this.isPlay = !1, this.end_handle && this.end_handle(), void this.node.removeFromParent(!0);
                        this.displayIndex = 0, this.stepTime = .1
                    }
                    this.Img.spriteFrame = this.FrameList[this.displayIndex]
                }
            }
        }), cc._RF.pop()
    }, {}],
    TimeControl: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "83d1f5AAe5A1LuaaIno8YIp", "TimeControl"), cc.Class({
            extends: cc.Component,
            properties: {
                secondTime: {
                    default: 1,
                    visible: !1
                }
            },
            onLoad: function () {
                cc.Line = {
                    step: 0,
                    time: 10,
                    status: 0,
                    award: [{
                        style: 1,
                        time: 120,
                        value: 500
                    }, {
                        style: 1,
                        time: 240,
                        value: 1e3
                    }, {
                        style: 1,
                        time: 300,
                        value: 2e3
                    }]
                }, cc.Line.time = cc.Line.award[cc.Line.step].time, cc.game.addPersistRootNode(this.node)
            },
            start: function () {
                ServerConfig.celue.apkTime > 0 && PlatformCode === PlatformList.OPPO && PlatformCode === PlatformList.VIVO && this.schedule(function () {
                    adUtils.executeShowInterstitial(!1)
                }, ServerConfig.celue.apkTime)
            },
            update: function (e) {
                this.secondTime -= e, this.secondTime <= 0 && (this.secondTime = 1, 0 === cc.Line.status && (cc.Line.time--, cc.Line.time <= 0 && (cc.Line.status = 1)))
            }
        }), cc._RF.pop()
    }, {}],
    TowerItem: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "ea68cseFNFOB6ytwWursBj1", "TowerItem"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.spire = this.node.getChildByName("spire"), this.body = this.node.getChildByName("body"), this.node.floorList = []
            },
            update: function (e) {
                this.spire.y = this.body.y + this.body.height - 8
            },
            insertFloor: function (e, t) {
                t.zIndex = e, t.index = e, this.body.addChild(t), this.node.floorList.push(t)
            },
            executeIncrease: function (e, t) {
                for (var i = 0; i < this.node.floorList.length; i++) {
                    var o = this.node.floorList[i];
                    o.index = o.index + 1, o.zIndex = o.index
                }
                this.body.addChild(e, 0), e.height = 0, this.node.floorList.unshift(e), e.index = 1, e.zIndex = e.index, e.tower = this.node;
                cc.tween(e).to(.5, {
                    height: 180
                }).call(function () {
                    t && t()
                }).start()
            },
            executeRefresh: function () {
                for (var e = 0; e < this.node.floorList.length; e++) {
                    var t = this.node.floorList[e];
                    t.index = e + 1, t.isLock && t.index < 5 && (t.isLock = !1, t.getChildByName("lock").active = !1)
                }
            },
            setForbidStatus: function (e) {
                for (var t = 0; t < this.node.floorList.length; t++) {
                    this.node.floorList[t].isForbid = e
                }
            }
        }), cc._RF.pop()
    }, {}],
    UnitItem: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "db523zSFH9NkY2RMdJNsgi/", "UnitItem");
        var o = e("../../Config");
        cc.Class({
            extends: cc.Component,
            armature: null,
            blood: null,
            extend: null,
            fireHandle: null,
            strikeHandle: null,
            properties: {},
            onLoad: function () {
                var e = this;
                this.node.strikeStyle = o.StrikeStyle.无, this.node.armature = this.node.getChildByName("armature").getComponent(sp.Skeleton), this.blood = this.node.getChildByName("blood").getComponent("NumberControl"), this.extend = this.node.getChildByName("extend").getComponent("NumberControl"), this.node.armature.setCompleteListener(this.armatureCompleteCallBack.bind(this)), this.node.armature.setStartListener(function (t) {
                    var i = t.animation.name;
                    e.node.detail.style !== o.UnitStyle.弓箭手 && e.node.detail.style !== o.UnitStyle.魔法师 && e.node.detail.style !== o.UnitStyle.小喷火龙 && e.node.detail.style !== o.UnitStyle.双头喷火龙 && e.node.detail.style !== o.UnitStyle.巫师 ? e.node.detail.style === o.UnitStyle.狼人 && "Die_LVL1" === i && (e.node.detail.style = o.UnitStyle.狼, e.node.realBlood = 10 * e.node.realBlood, e.blood.node.active = !0, e.blood.initialize(e.node.realBlood), e.node.detail.blood = e.node.realBlood) : "Attack" !== i && "Attack_1" !== i && "Attack_2" !== i || e.fireHandle && e.fireHandle(e.node, e.strikeHandle)
                })
            },
            increaseBlood: function (e) {
                this.node.detail.style !== o.UnitStyle.大剑 && this.node.detail.style !== o.UnitStyle.盾牌 && this.node.detail.style !== o.UnitStyle.龙蛋 && this.node.detail.style !== o.UnitStyle.小偷 && this.executeAlterationBlood(e)
            },
            executeAlterationBlood: function (e, t) {
                this.node.detail.blood += e, this.blood.executeRefresh(e, o.IncreaseValue, .1, t)
            },
            executeAlterationExtend: function (e, t) {
                this.node.detail.extend += e, this.node.detail.extend < 0 && (this.node.detail.extend = 0), this.extend.executeRefresh(e, o.IncreaseValue, .1, t)
            },
            armatureCompleteCallBack: function (e) {
                var t = this;
                if (!e.isLoop) {
                    var i = e.animation.name;
                    if (this.node.status === o.UnitStatus.死亡 && "Die" === i) return this.node.detail.style === o.UnitStyle.剑士 || this.node.detail.style === o.UnitStyle.大剑士 || this.node.detail.style === o.UnitStyle.双刀 || this.node.detail.style === o.UnitStyle.弓箭手 || this.node.detail.style === o.UnitStyle.魔法师 || this.node.detail.style === o.UnitStyle.小喷火龙 || this.node.detail.style === o.UnitStyle.盾兵 || this.node.detail.style === o.UnitStyle.大盾兵 || this.node.detail.style === o.UnitStyle.巫师 || this.node.detail.style === o.UnitStyle.双头喷火龙 ? void cc.tween(this.node).to(.5, {
                        opacity: 0
                    }).call(function () {
                        t.node.removeFromParent(!0)
                    }).start() : void(this.node.detail.style === o.UnitStyle.小偷 && this.node.removeFromParent(!0));
                    this.node.status === o.UnitStatus.死亡 && "Die_LVL2" === i && this.node.detail.style === o.UnitStyle.狼 && cc.tween(this.node).to(.5, {
                        opacity: 0
                    }).call(function () {
                        t.node.removeFromParent(!0)
                    }).start()
                }
            },
            initialize: function (e) {
                switch (console.log("data = ", e), this.node.detail = e, this.node.realBlood = e.blood, this.node.status = o.PlayerStatus.待机, this.node.armature.clearTracks(), this.node.detail.style) {
                    case o.UnitStyle.剑士:
                    case o.UnitStyle.大剑士:
                    case o.UnitStyle.双刀:
                        this.node.strikeStyle = o.StrikeStyle.近战, this.node.armature.setAnimation(0, "Idle", !0);
                        break;
                    case o.UnitStyle.弓箭手:
                    case o.UnitStyle.魔法师:
                    case o.UnitStyle.小喷火龙:
                        this.node.strikeStyle = o.StrikeStyle.远程, this.node.armature.setAnimation(0, "Idle", !0);
                        break;
                    case o.UnitStyle.盾兵:
                    case o.UnitStyle.大盾兵:
                        this.node.strikeStyle = o.StrikeStyle.近战, this.node.armature.setAnimation(0, "Idle", !0);
                        break;
                    case o.UnitStyle.大剑:
                        this.node.strikeStyle = o.StrikeStyle.无, this.node.armature.setAnimation(0, "daojv2", !0), this.extend.node.active = !1;
                        break;
                    case o.UnitStyle.盾牌:
                        this.node.strikeStyle = o.StrikeStyle.无, this.node.armature.setAnimation(0, "daojv1", !0), this.extend.node.active = !1;
                        break;
                    case o.UnitStyle.小偷:
                        this.node.strikeStyle = o.StrikeStyle.无, this.node.armature.setAnimation(0, "Idle", !0), this.extend.node.active = !1;
                        break;
                    case o.UnitStyle.巫师:
                        this.node.strikeStyle = o.StrikeStyle.增益, this.node.armature.setAnimation(0, "Idle", !0);
                        break;
                    case o.UnitStyle.龙蛋:
                        this.node.strikeStyle = o.StrikeStyle.无, this.node.armature.setAnimation(0, "Egg_Idle", !0), this.blood.node.active = !1, this.extend.node.active = !1;
                        break;
                    case o.UnitStyle.双头喷火龙:
                        this.node.strikeStyle = o.StrikeStyle.远程, this.node.armature.setAnimation(0, "Idle", !0);
                        break;
                    case o.UnitStyle.狼人:
                        this.node.strikeStyle = o.StrikeStyle.近战, this.node.armature.setAnimation(0, "Idle_LVL1", !0);
                        break;
                    case o.UnitStyle.狼:
                        this.node.strikeStyle = o.StrikeStyle.近战, this.node.armature.setAnimation(0, "Idle_LVL2", !0)
                }
                this.blood.initialize(e.blood), this.extend.initialize(e.extend)
            },
            executeStrike: function (e, t) {
                this.node.strikeStyle !== o.StrikeStyle.无 && this.node.strikeStyle !== o.StrikeStyle.近战 ? (this.fireHandle = e, this.strikeHandle = t, this.node.status = o.UnitStatus.还击, this.node.armature.clearTracks(), this.node.detail.style === o.UnitStyle.弓箭手 || this.node.detail.style === o.UnitStyle.魔法师 || this.node.detail.style === o.UnitStyle.小喷火龙 ? (this.node.armature.setAnimation(0, "Attack", !1), this.node.armature.addAnimation(0, "Idle", !0, 0)) : this.node.detail.style === o.UnitStyle.巫师 ? (this.node.armature.setAnimation(0, "Attack", !1), this.node.armature.addAnimation(0, "Idle", !0, 0)) : this.node.detail.style === o.UnitStyle.双头喷火龙 && (this.node.armature.setAnimation(0, "Attack_1", !1), this.node.armature.addAnimation(0, "Attack_2", !1, 0), this.node.armature.addAnimation(0, "Idle", !0, 0))) : console.warn("近战或不具备还击能力")
            },
            registerHatchHandle: function (e) {
                this.hatch_handle = e
            },
            executeDefense: function () {
                var e = this;
                console.log("敌方进行防御"), 0 !== this.node.loss_blood && this.executeAlterationBlood(this.node.loss_blood), 0 !== this.node.loss_extend && this.executeAlterationExtend(this.node.loss_extend), this.node.detail.style !== o.UnitStyle.剑士 && this.node.detail.style !== o.UnitStyle.大剑士 && this.node.detail.style !== o.UnitStyle.双刀 && this.node.detail.style !== o.UnitStyle.弓箭手 && this.node.detail.style !== o.UnitStyle.魔法师 && this.node.detail.style !== o.UnitStyle.小喷火龙 && this.node.detail.style !== o.UnitStyle.盾兵 && this.node.detail.style !== o.UnitStyle.大盾兵 && this.node.detail.style !== o.UnitStyle.巫师 && this.node.detail.style !== o.UnitStyle.双头喷火龙 && this.node.detail.style !== o.UnitStyle.狼人 && this.node.detail.style !== o.UnitStyle.狼 && this.node.detail.style !== o.UnitStyle.小偷 || (AssetMgr.createPrefabByName("SplashItem", function (t) {
                    var i = cc.instantiate(t);
                    i.position = cc.v2(20, 90), e.node.addChild(i)
                }), AssetMgr.createPrefabByName("NumberItem", function (t) {
                    var i = cc.instantiate(t);
                    i.position = cc.v2(0, 70), e.node.addChild(i), i.getComponent("NumberItem").initialize(Math.abs(e.node.loss_blood))
                }));
                var t = this.node.srcFloor;
                if (this.node.detail.style === o.UnitStyle.剑士 || this.node.detail.style === o.UnitStyle.大剑士 || this.node.detail.style === o.UnitStyle.双刀 || this.node.detail.style === o.UnitStyle.弓箭手 || this.node.detail.style === o.UnitStyle.魔法师 || this.node.detail.style === o.UnitStyle.小喷火龙 || this.node.detail.style === o.UnitStyle.盾兵 || this.node.detail.style === o.UnitStyle.大盾兵 || this.node.detail.style === o.UnitStyle.巫师 || this.node.detail.style === o.UnitStyle.双头喷火龙) this.node.isDeath ? (this.blood.node.active = !1, this.extend.node.active = !1, this.node.status = o.UnitStatus.死亡, ArrayMgr.removeElement(t.childList, this.node), this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Die", !1)) : (this.node.status = o.UnitStatus.攻击, this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Attack", !1), this.node.armature.addAnimation(0, "Idle", !0, 0));
                else if (this.node.detail.style === o.UnitStyle.小偷) {
                    if (this.node.isDeath) {
                        var i = this.node.srcFloor,
                            n = this.node.detail,
                            a = null,
                            s = 0;
                        0 === n.extend ? (a = "UnitItem-9", s = 9) : 1 === n.extend && (a = "UnitItem-10", s = 10), AssetMgr.createPrefabByName(a, function (t) {
                            e.node.status = o.PlayerStatus.死亡, e.blood.node.active = !1, e.extend.node.active = !1, ArrayMgr.removeElement(i.childList, e.node), e.node.armature.clearTracks(), e.node.armature.setAnimation(0, "Die", !1);
                            var a = e.node.position,
                                r = cc.instantiate(t);
                            r.opacity = 0, r.position = a, e.node.parent.addChild(r), i.childList.unshift(r), r.getComponent("UnitItem").initialize({
                                style: s,
                                blood: n.output,
                                extend: 0,
                                output: 0
                            }), r.srcTower = i.tower, r.srcFloor = i, cc.tween(r).delay(1).call(function () {
                                r.opacity = 255
                            }).start()
                        })
                    }
                } else if (this.node.detail.style === o.UnitStyle.龙蛋) {
                    console.log("孵化龙蛋"), this.node.status = o.PlayerStatus.死亡;
                    var r = ArrayMgr.removeElement(t.childList, this.node);
                    cc.tween(r).to(1, {
                        opacity: 0
                    }).call(function () {
                        e.hatch_handle && e.hatch_handle(r)
                    }).start(), this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Egg_Appear", !1)
                } else if (this.node.detail.style === o.UnitStyle.大剑 || this.node.detail.style === o.UnitStyle.盾牌) {
                    ArrayMgr.removeElement(t.childList, this.node).removeFromParent(!0)
                } else this.node.detail.style === o.UnitStyle.狼人 ? (console.log("狼人死了"), this.node.isDeath ? (this.blood.node.active = !1, this.extend.node.active = !1, this.node.status = o.PlayerStatus.死亡, this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Attack_LVL1", !1), this.node.armature.addAnimation(0, "Die_LVL1", !1, 0), this.node.armature.addAnimation(0, "Idle_LVL2", !0, 0)) : (this.node.status = o.PlayerStatus.攻击, this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Attack_LVL1", !1), this.node.armature.addAnimation(0, "Idle_LVL1", !0, 0))) : this.node.detail.style === o.UnitStyle.狼 && (console.log("狼死了"), this.node.isDeath ? (this.node.status = o.UnitStatus.死亡, this.blood.node.active = !1, this.extend.node.active = !1, ArrayMgr.removeElement(t.childList, this.node), this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Die_LVL2", !1)) : (this.node.status = o.UnitStatus.攻击, this.node.armature.clearTracks(), this.node.armature.setAnimation(0, "Attack_LVL2", !1), this.node.armature.addAnimation(0, "Idle_LVL2", !0, 0)))
            }
        }), cc._RF.pop()
    }, {
        "../../Config": "Config"
    }],
    User: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "08540X+XHlO3K+jZDbMjXly", "User"), window.UserInfo = {
            gold: 0,
            skinIndex: 1,
            playIndex: 1,
            openIndex: 1,
            skinList: [{
                isLock: !1,
                buyStyle: 1,
                value: 100
            }, {
                isLock: !0,
                buyStyle: 1,
                value: 500
            }, {
                isLock: !0,
                buyStyle: 1,
                value: 700
            }, {
                isLock: !0,
                buyStyle: 2,
                value: 1
            }, {
                isLock: !0,
                buyStyle: 1,
                value: 700
            }, {
                isLock: !0,
                buyStyle: 1,
                value: 800
            }],
            login: {}
        }, cc._RF.pop()
    }, {}],
    Utils: [function (e, t, i) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function a(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
        cc._RF.push(t, "547b4HH2GlOAZfA3BZUh6Mj", "Utils");
        var s = function () {
                function e() {
                    o(this, e)
                }
                return a(e, [{
                    key: "getExtensionName",
                    value: function (e) {
                        var t = e.lastIndexOf(".");
                        return e.substr(t + 1)
                    }
                }]), e
            }(),
            r = function () {
                function e() {
                    o(this, e)
                }
                return a(e, [{
                    key: "toFixed",
                    value: function (e, t) {
                        return parseFloat(e.toFixed(t))
                    }
                }]), e
            }(),
            c = function () {
                function e() {
                    o(this, e)
                }
                return a(e, [{
                    key: "getRunningDays",
                    value: function () {
                        var e = new Date;
                        return Math.floor(e / 864e5)
                    }
                }, {
                    key: "getIntervalDays",
                    value: function (e, t) {
                        return Math.floor(e - t) / 864e5
                    }
                }, {
                    key: "formatTime",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ":",
                            i = parseInt(e / 60).toString(10).padStart(2, "0"),
                            o = parseInt(e % 60).toString(10).padStart(2, "0");
                        return "".concat(i).concat(t).concat(o)
                    }
                }]), e
            }(),
            l = function () {
                function e() {
                    o(this, e)
                }
                return a(e, [{
                    key: "deepClone",
                    value: function (e) {
                        var t = JSON.stringify(e);
                        return JSON.parse(t)
                    }
                }]), e
            }(),
            d = function () {
                function e() {
                    o(this, e)
                }
                return a(e, [{
                    key: "getRandomNum",
                    value: function (e, t) {
                        var i = t - e,
                            o = Math.random();
                        return e + Math.round(o * i)
                    }
                }, {
                    key: "getFloatRandomNum",
                    value: function (e, t) {
                        var i = (Math.random() * (t - e) + e).toFixed(2);
                        return parseFloat(i)
                    }
                }, {
                    key: "getVectorDegree",
                    value: function (e, t) {
                        var i = t.x - e.x,
                            o = t.y - e.y,
                            n = Math.atan2(o, i);
                        return cc.misc.radiansToDegrees(n) - 90
                    }
                }, {
                    key: "getVectorDistance",
                    value: function (e, t) {
                        return e.sub(t).mag()
                    }
                }, {
                    key: "getMoveVector",
                    value: function (e, t) {
                        var i = cc.misc.degreesToRadians(e),
                            o = -Math.sin(i) * t,
                            n = Math.cos(i) * t;
                        return cc.v2(o, n)
                    }
                }]), e
            }(),
            u = function () {
                function e() {
                    o(this, e), this.soundList = [], this.soundPathList = []
                }
                return a(e, [{
                    key: "registerSoundPath",
                    value: function (e) {
                        this.soundPathList = e
                    }
                }, {
                    key: "playMusic",
                    value: function (e) {
                        for (var t = this, i = function (e) {
                                return cc.audioEngine.playMusic(e, !0)
                            }, o = 0; o < this.soundList.length; o++) {
                            var n = this.soundList[o];
                            if (n.name === e) return i(n)
                        }
                        for (var a = 0; a < this.soundPathList.length; a++) {
                            var s = this.soundPathList[a];
                            if (s.indexOf(e) >= 0) {
                                cc.loader.loadRes(s, cc.AudioClip, function (e, o) {
                                    return t.soundList.push(o), i(o)
                                });
                                break
                            }
                        }
                    }
                }, {
                    key: "stopMusic",
                    value: function () {
                        cc.audioEngine.stopMusic()
                    }
                }, {
                    key: "playEffect",
                    value: function (e) {
                        for (var t = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o = function (e) {
                                var t = cc.audioEngine.playEffect(e, !1);
                                return i && cc.audioEngine.setFinishCallback(t, i), t
                            }, n = 0; n < this.soundList.length; n++) {
                            var a = this.soundList[n];
                            if (a.name === e) return o(a)
                        }
                        for (var s = 0; s < this.soundPathList.length; s++) {
                            var r = this.soundPathList[s],
                                c = r.lastIndexOf("/");
                            if (r.substr(c + 1) === e) {
                                cc.loader.loadRes(r, cc.AudioClip, function (e, i) {
                                    return t.soundList.push(i), o(i)
                                });
                                break
                            }
                        }
                    }
                }, {
                    key: "stopAllEffect",
                    value: function () {
                        cc.audioEngine.stopAllEffects()
                    }
                }, {
                    key: "stopEffect",
                    value: function (e) {
                        cc.audioEngine.stopEffect(e)
                    }
                }]), e
            }(),
            h = function () {
                function e() {
                    o(this, e), this.frameList = [], this.framePathList = [], this.textureList = [], this.texturePathList = [], this.prefabList = [], this.prefabPathList = []
                }
                return a(e, [{
                    key: "registerSpriteFramePath",
                    value: function (e) {
                        this.framePathList = e
                    }
                }, {
                    key: "registerTexturePath",
                    value: function (e) {
                        this.texturePathList = e
                    }
                }, {
                    key: "registerPrefabPath",
                    value: function (e) {
                        this.prefabPathList = e
                    }
                }, {
                    key: "setSpriteFrameByName",
                    value: function (e, t, i) {
                        var o = this;
                        if (e instanceof cc.Sprite) {
                            for (var n = 0; n < this.frameList.length; n++) {
                                var a = this.frameList[n];
                                if (a.name === t) return e.spriteFrame = a, void(i && i())
                            }
                            for (var s = 0; s < this.framePathList.length; s++) {
                                var r = this.framePathList[s],
                                    c = r.lastIndexOf("/");
                                if (r.substr(c + 1) === t) {
                                    cc.loader.loadRes(r, cc.SpriteFrame, function (t, n) {
                                        o.frameList.push(n), e.spriteFrame = n, i && i()
                                    });
                                    break
                                }
                            }
                        } else console.warn("无效的Sprite类型")
                    }
                }, {
                    key: "setSpriteFrameByTexture",
                    value: function (e, t, i, o) {
                        var n = this;
                        if (e instanceof cc.Sprite) {
                            for (var a = 0; a < this.textureList.length; a++) {
                                var s = this.textureList[a];
                                if (s.name === "".concat(t, ".plist")) {
                                    var r = s.getSpriteFrame(i);
                                    return e.spriteFrame = r, void(o && o(r))
                                }
                            }
                            for (var c = 0; c < this.texturePathList.length; c++) {
                                var l = this.texturePathList[c],
                                    d = l.lastIndexOf("/");
                                if (l.substr(d + 1) === t) {
                                    cc.loader.loadRes(l, cc.SpriteAtlas, function (t, a) {
                                        n.textureList.push(a);
                                        var s = a.getSpriteFrame(i);
                                        e.spriteFrame = s, o && o(s)
                                    });
                                    break
                                }
                            }
                        } else console.warn("无效的Sprite类型")
                    }
                }, {
                    key: "createPrefabByName",
                    value: function (e, t) {
                        for (var i = this, o = 0; o < this.prefabList.length; o++) {
                            var n = this.prefabList[o];
                            if (n.name === e) return void(t && t(n))
                        }
                        for (var a = 0; a < this.prefabPathList.length; a++) {
                            var s = this.prefabPathList[a],
                                r = s.lastIndexOf("/");
                            if (s.substr(r + 1) === e) {
                                cc.loader.loadRes(s, cc.Prefab, function (e, o) {
                                    i.prefabList.push(o), t && t(o)
                                });
                                break
                            }
                        }
                    }
                }, {
                    key: "showSupplyWindow",
                    value: function (e) {
                        this.createPrefabByName("SupplyWindow", function (t) {
                            var i = cc.instantiate(t);
                            cc.director.getScene().addChild(i), i.getComponent("SupplyWindow").registerReceiveHandle(e)
                        })
                    }
                }, {
                    key: "showAlertWindow",
                    value: function (e) {
                        this.createPrefabByName("AlertWindow", function (t) {
                            var i = cc.instantiate(t);
                            cc.director.getScene().addChild(i), i.getComponent("AlertWindow").initialize(e)
                        })
                    }
                }, {
                    key: "showAlertMessage",
                    value: function (e) {
                        this.createPrefabByName("MessageItem", function (t) {
                            var i = cc.instantiate(t);
                            cc.director.getScene().addChild(i), i.getComponent("MessageItem").initialize(e)
                        })
                    }
                }]), e
            }(),
            p = function () {
                function e() {
                    o(this, e)
                }
                return a(e, [{
                    key: "randomArray",
                    value: function (e) {
                        e.sort(function (e, t) {
                            return Math.random() > .5 ? -1 : 1
                        })
                    }
                }, {
                    key: "removeElement",
                    value: function (e, t) {
                        for (var i = 0; i < e.length; i++)
                            if (Object.is(e[i], t)) return e.splice(i, 1)[0];
                        return null
                    }
                }]), e
            }();
        window.StringMgr = new s, window.NumberMgr = new r, window.JsonMgr = new l, window.MathMgr = new d, window.SoundMgr = new u, window.AssetMgr = new h, window.ArrayMgr = new p, window.TimeMgr = new c, cc._RF.pop()
    }, {}],
    VictoryWindow: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "914a9OstwZEmKjUbTc9+sbS", "VictoryWindow"), cc.Class({
            extends: cc.Component,
            properties: {
                ShareButton: {
                    type: cc.Node,
                    default: null,
                    displayName: "分享按钮"
                }
            },
            onLoad: function () {
                adUtils.setShareButtonStatus(this.ShareButton)
            },
            initialize: function (e, t) {
                this.playerIndex = e, this.levelIndex = t;
                if(this.levelIndex >= 70){
                    this.levelIndex = 70;
                }
                console.log("this.levelIndex = ", this.levelIndex);
                var i = t + 1;
                if(i >= 70){
                    i = 70;
                }
                i > cc.UserInfo.openIndex && (cc.UserInfo.openIndex = i, cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.UserInfo)))
            },
            start: function () {
                cc.UserInfo.gold += 100;
                SoundMgr.playEffect("victory"), AssetMgr.showAlertMessage(window.getLng("恭喜获得金币%s",100));
                adUtils.executeShowFinishBox(function () {
                    adUtils.executeShowFinishAdvertising(!0), adUtils.executeShowFinishLogic(!0)
                })
                if(this.levelIndex >= 70)
                {
                    var nextBtn = this.node.getChildByName("window").getChildByName("button").getChildByName("nextButton")
                    nextBtn.active = false
                }
            },
            executeReturnToMenuScreen: function () {
                cc.director.loadScene("MenuScene", function () {
                    cc.director.getScene().getChildByName("Canvas").getComponent("MenuScript").initialize()
                })
            },
            executeEnterNextLevel: function () {
                var e = this.levelIndex + 1,
                    t = this.playerIndex,
                    i = "App/Levels/level-".concat(e);
                cc.loader.loadRes(i, cc.Asset, function (i, o) {
                    var n = JsonMgr.deepClone(o.json);
                    cc.director.loadScene("MainScene", function () {
                        cc.director.getScene().getChildByName("Canvas").getComponent("MainScript").initialize(e, t, n)
                    })
                })
            },
            executeReceive: function (e) {
                adUtils.executeShowVideo(function () {
                    cc.UserInfo.gold += 200, cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.UserInfo)), e.active = !1, SoundMgr.playEffect("receive"), AssetMgr.showAlertMessage(getLng("恭喜获得金币%s",200))
                })
            },
            buttonTouchEventCallBack: function (e) {
                switch (SoundMgr.playEffect("button"), e.target.name) {
                    case "shareButton":
                        adUtils.executeShare();
                        break;
                    case "backButton":
                        this.executeReturnToMenuScreen();
                        break;
                    case "nextButton":
                        this.executeEnterNextLevel();
                        break;
                    case "receiveButton":
                        this.executeReceive(e.target)
                }
            }
        }), cc._RF.pop()
    }, {}],
    WeaponWindow: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "a21a9G6fgNKCYcbxCOo41wK", "WeaponWindow"), cc.Class({
            extends: cc.Component,
            properties: {
                Armature: {
                    default: null,
                    type: sp.Skeleton,
                    displayName: "角色动画"
                },
                ArmatureList: {
                    default: [],
                    type: sp.SkeletonData,
                    displayName: "动画列表"
                }
            },
            onLoad: function () {
                this.window = this.node.getChildByName("window"), this.window.scale = 0
            },
            initialize: function (e, t) {
                console.log("武器 =", e), this.handle = t, this.Armature.skeletonData = this.ArmatureList[e - 1];
                for (var i = SlotList[e - 1], o = Object.keys(i), n = 0; n < o.length; n++) {
                    var a = o[n],
                        s = i[a][2];
                    this.Armature.setAttachment(a, s)
                }
                this.Armature.clearTracks(), this.Armature.setAnimation(0, "Attack_LVL5", !0)
            },
            start: function () {
                cc.tween(this.window).to(.2, {
                    scale: 1
                }, {
                    easing: "sineIn"
                }).start(), adUtils.executeShowGameAdvertising(!0)
            },
            executeReceive: function () {
                var e = this;
                // adUtils.executeShowVideo(function () {
                    e.handle && e.handle(), e.node.removeFromParent(!0)
                // })
            },
            buttonTouchEventCallBack: function (e) {
                switch (SoundMgr.playEffect("button"), e.target.name) {
                    case "confirmButton":
                        this.executeReceive();
                        break;
                    case "cancelButton":
                        this.node.removeFromParent(!0)
                }
            }
        }), cc._RF.pop()
    }, {}],
    ZoomAction: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "4092acHicVDMoDyrMyow2+X", "ZoomAction"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function () {
                var e = this,
                    t = cc.tween().to(1, {
                        scale: 1.5
                    }),
                    i = cc.tween().to(1, {
                        opacity: 0
                    }),
                    o = cc.tween().delay(1).parallel(t, i).call(function () {
                        e.node.scale = 1, e.node.opacity = 255
                    });
                cc.tween(this.node).repeatForever(o).start()
            }
        }), cc._RF.pop()
    }, {}],
    _4399: [function (e, t, i) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function a(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
        cc._RF.push(t, "1696aM9L6NG5rIOfnXKgigq", "_4399"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.youjia = void 0;
        var s = function () {
            function e() {
                o(this, e), this.video_success = null, this.video_failure = null, console.log("初始化4399游戏平台")
            }
            return a(e, [{
                key: "showVideo",
                value: function (e, t) {
                    var i = this;
                    this.video_success = e, this.video_failure = t;
                    window.h5api.canPlayAd(function (e) {
                        window.h5api.playAd(function (e) {
                            1e4 === e.code ? console.log("开始播放") : 10001 === e.code ? (console.log("播放结束"), i.video_success && i.video_success()) : (console.log("广告异常"), i.video_failure && i.video_failure())
                        })
                    })
                }
            }]), e
        }();
        i.youjia = s, cc._RF.pop()
    }, {}],
    _baidu: [function (e, t, i) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function a(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
        cc._RF.push(t, "3f016SR6aRM+Yl0lFyCRzii", "_baidu"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.baidu = void 0;
        var s = function () {
            function e() {
                var t = this;
                o(this, e), this.device = null, this.Interstitial = null, this.Banner = null, this.video = null, this.video_success = null, this.video_failure = null, this.lastVideoTime = 0, this.allowVideo = !0, console.log("初始化[百度]平台"), this.device = swan.getSystemInfoSync(), ServerConfig.iconList.length > 0 && ServerConfig.allowInterstitial && cc.loader.loadRes("Platform/Prefabs/baidu/baidu-Interstitial", cc.Prefab, function (e, i) {
                    t.Interstitial = cc.instantiate(i), t.Interstitial.zIndex = 99998, cc.game.addPersistRootNode(t.Interstitial)
                }), ServerConfig.iconList.length > 5 && ServerConfig.allowBanner && cc.loader.loadRes("Platform/Prefabs/baidu/baidu-Banner", cc.Prefab, function (e, i) {
                    t.Banner = cc.instantiate(i), t.Banner.zIndex = 99999, cc.game.addPersistRootNode(t.Banner)
                }), this.video = swan.createRewardedVideoAd({
                    adUnitId: App.BaiDu.videoCode,
                    appSid: App.BaiDu.appSID
                }), this.video.onClose(function (e) {
                    e.isEnded ? t.executeVideoSuccessCallBack() : t.executeVideoFailureCallBack()
                })
            }
            return a(e, [{
                key: "clearAdvertising",
                value: function () {
                    this.Interstitial && this.Interstitial.getComponent("baidu-Interstitial").doHide(), this.Banner && (this.Banner.active = !1)
                }
            }, {
                key: "getRandomIntNum",
                value: function (e, t) {
                    var i = t - e,
                        o = Math.random();
                    return e + Math.round(o * i)
                }
            }, {
                key: "showVideo",
                value: function (e, t) {
                    var i = this;
                    (new Date).getTime() - this.lastVideoTime <= 2e3 || (console.log("触发Baidu激励视频"), this.video_success = e, this.video_failure = t, cc.audioEngine.pauseAll(), cc.director.pause(), this.video.load().then(function () {
                        i.video.show()
                    }).catch(function (e) {
                        i.executeVideoFailureCallBack()
                    }))
                }
            }, {
                key: "showStartVideo",
                value: function (e, t) {
                    ServerConfig.startVideo && this.allowVideo && (this.allowVideo = !1, this.getRandomIntNum(0, 100) < ServerConfig.startVideo && this.showVideo(e, t))
                }
            }, {
                key: "showCustomInterstitial",
                value: function (e) {
                    var t = this;
                    ServerConfig.allowInterstitial && (this.Interstitial && this.Interstitial.getComponent("baidu-Interstitial").doShow(function () {
                        if (e) {
                            var i = MathMgr.getRandomNum(0, 100);
                            console.log("rdm:", i), i < ServerConfig.quitShow && t.showCustomBanner()
                        }
                    }), this.Banner && this.Banner.active && (this.Banner.active = !1))
                }
            }, {
                key: "showCustomBanner",
                value: function () {
                    ServerConfig.allowBanner && (this.Interstitial && this.Interstitial.active && this.Interstitial.getComponent("baidu-Interstitial").doHide(), this.Banner && (this.Banner.active = !0))
                }
            }, {
                key: "executeShowToast",
                value: function () {
                    swan.showToast({
                        title: msg,
                        duration: 1500
                    })
                }
            }, {
                key: "executeVideoSuccessCallBack",
                value: function () {
                    cc.director.resume(), cc.audioEngine.resumeAll(), this.video_success && this.video_success(), this.video_success = null
                }
            }, {
                key: "executeVideoFailureCallBack",
                value: function () {
                    cc.director.resume(), cc.audioEngine.resumeAll(), this.video_failure && this.video_failure(), this.video_failure = null
                }
            }]), e
        }();
        i.baidu = s, cc._RF.pop()
    }, {}],
    _bytedance: [function (e, t, i) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function a(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
        cc._RF.push(t, "a41f4AqTwpFPqQ8SV5vhS2t", "_bytedance"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.bytedance = void 0;
        var s = function () {
            function e() {
                var t = this;
                o(this, e), this.allowVideo = !0, this.device = null, this.video = null, this.sBanner = null, this.sInterstitial = null, this.startTime = null, this.displayTime = 0, this.allowInterstitial = !1, this.recorder = null, this.recorderPath = "", this.startRecorderTime = null, this.endRecorderTime = null, this.video_success = null, this.video_failure = null, this.share_success = null, this.share_failure = null, this.device = tt.getSystemInfoSync(), this.startTime = (new Date).getTime(), window.tt.onShow(function (e) {
                    t.recorder && t.recorder.isRecording && t.recorder.resume()
                }), window.tt.onHide(function () {
                    t.recorder && t.recorder.isRecording && t.recorder.pause()
                }), "novel_fm" !== this.device.appName && "novelapp" !== this.device.appName && (this.recorder = window.tt.getGameRecorderManager(), this.recorder.onStop(function (e) {
                    t.recorderPath = e.videoPath, t.endRecorderTime = (new Date).getTime(), t.recorder.isRecording = !1
                }));
                this.sBanner = window.tt.createBannerAd({
                    adUnitId: App.ByteDance.bannerCode,
                    adIntervals: 30,
                    style: {
                        width: 200,
                        top: this.device.windowHeight - 112.5
                    }
                }), this.sBanner.onLoad(function () {
                    console.log("Banner加载成功")
                }), this.sBanner.onResize(function (e) {
                    t.sBanner.style.left = (t.device.windowWidth - e.width) / 2, t.sBanner.style.top = t.device.windowHeight - 112.5
                }), this.video = window.tt.createRewardedVideoAd({
                    adUnitId: App.ByteDance.videoCode
                }), this.video.onClose(function (e) {
                    e.isEnded ? (console.log("视频广告播放完毕, 开始下发奖励!!"), t.executeSucceedWithVideo()) : t.executeFailureWithVideo()
                })
            }
            return a(e, [{
                key: "clearAdvertising",
                value: function () {
                    this.destroySystemInterstitial(), this.destroySystemBanner()
                }
            }, {
                key: "getRandomIntNum",
                value: function (e, t) {
                    var i = t - e,
                        o = Math.random();
                    return e + Math.round(o * i)
                }
            }, {
                key: "isSatisfy",
                value: function () {
                    if (!tt.getLaunchOptionsSync) return !1;
                    if (!ServerConfig.sceneID || ServerConfig.sceneID.length <= 0) return !1;
                    for (var e = tt.getLaunchOptionsSync().scene, t = 0; t < ServerConfig.sceneID.length; t++)
                        if (e === ServerConfig.sceneID[t]) return !0;
                    return !1
                }
            }, {
                key: "showStartVideo",
                value: function () {
                    this.allowVideo && (this.allowVideo = !1, this.getRandomIntNum(0, 100) > ServerConfig.startVideo || this.isSatisfy() && this.showVideo(null, null))
                }
            }, {
                key: "showVideo",
                value: function (e, t) {
                    var i = this;
                    cc.director.pause(), cc.audioEngine.pauseAll(), this.video_success = e, this.video_failure = t, this.video.load().then(function () {
                        console.log("拉取视频广告成功, 等待显示!!"), i.video.show().then(function () {
                            console.log("视频广告成功显示~~~~")
                        }).catch(function (e) {
                            console.log("视频广告成功失败:", e), i.executeShowToast("视频组件显示失败，请稍后再试！"), i.executeFailureWithVideo()
                        })
                    }).catch(function (e) {
                        console.error("拉取视频广告失败:", e), i.executeShowToast("视频组件加载失败，请稍后再试！"), i.executeFailureWithVideo()
                    })
                }
            }, {
                key: "showSystemBanner",
                value: function () {
                    this.sBanner && this.sBanner.show()
                }
            }, {
                key: "destroySystemBanner",
                value: function () {
                    this.sBanner && this.sBanner.hide()
                }
            }, {
                key: "showSystemInterstitial",
                value: function (e) {
                    var t = this,
                        i = (new Date).getTime();
                    (i - this.startTime) / 1e3 < 30 ? console.warn("游戏启动后, 30秒内无法显示插屏") : (i - this.displayTime) / 1e3 <= 60 ? console.warn("距离上次显示不得小于60秒") : (this.sInterstitial = tt.createInterstitialAd({
                        adUnitId: App.ByteDance.interstitialCode
                    }), this.sInterstitial.onClose(function () {
                        e && (t.getRandomIntNum(0, 100) < ServerConfig.quitShow && t.showSystemBanner())
                    }), this.sInterstitial.load().then(function () {
                        t.sInterstitial.show().then(function () {
                            console.log("插屏广告展示成功"), t.displayTime = (new Date).getTime()
                        })
                    }).catch(function (i) {
                        e && (t.getRandomIntNum(0, 100) < ServerConfig.quitShow && t.showSystemBanner())
                    }))
                }
            }, {
                key: "destroySystemInterstitial",
                value: function () {
                    this.interstitial && (this.interstitial.destroy(), this.interstitial = null)
                }
            }, {
                key: "startRecorder",
                value: function () {
                    var e = this;
                    if (this.recorder) {
                        this.recorder.isRecording && this.stopRecorder();
                        setTimeout(function () {
                            e.recorder.start({
                                duration: 120
                            }), e.startRecorderTime = (new Date).getTime(), console.log("开始录制, 开始时间:", e.startRecorderTime)
                        }, 200)
                    } else console.error("开始录制失败:无效的录制组件!!")
                }
            }, {
                key: "stopRecorder",
                value: function () {
                    this.recorder ? this.recorder.stop() : console.error("停止录制失败:无效的录制组件!!")
                }
            }, {
                key: "doShare",
                value: function (e, t) {
                    var i = this;
                    if (this.recorderPath && "" !== this.recorderPath)
                        if (this.endRecorderTime - this.startRecorderTime <= 3e3) this.executeShowToast("视频时长过短");
                        else {
                            this.share_success = e, this.share_failure = t;
                            var o = "";
                            if (ServerConfig.bgm.length > 0) {
                                var n = this.getRandomIntNum(0, ServerConfig.bgm.length - 1);
                                o = ServerConfig.bgm[n]
                            }
                            window.tt.shareAppMessage({
                                channel: "video",
                                title: "点击这里，开始游戏",
                                extra: {
                                    defaultBgm: o,
                                    videoPath: this.recorderPath,
                                    videoTopics: ["小游戏", App.chineseName, App.shareLanguage]
                                },
                                success: function () {
                                    i.share_success && i.share_success()
                                },
                                fail: function (e) {
                                    "shareAppMessage:fail video file is too short" === e.errMsg.substr(0, 44) && tt.showToast({
                                        title: "视频时长过短",
                                        duration: 1e3
                                    }), i.share_failure && i.share_failure()
                                }
                            })
                        }
                    else this.executeShowToast("无有效录制文件!")
                }
            }, {
                key: "showMoreGame",
                value: function () {
                    "ios" !== this.device.platform ? window.tt.showMoreGamesModal({
                        appLaunchOptions: [{
                            appId: App.ByteDance.appId
                        }]
                    }) : this.executeShowToast("IOS暂不支持此功能")
                }
            }, {
                key: "doShake",
                value: function (e) {
                    e ? tt.vibrateLong({}) : tt.vibrateShort({})
                }
            }, {
                key: "executeShowToast",
                value: function (e) {
                    window.tt.showToast({
                        title: e,
                        duration: 1500
                    })
                }
            }, {
                key: "executeSucceedWithVideo",
                value: function () {
                    cc.director.resume(), cc.audioEngine.resumeAll(), this.video_success && this.video_success(), this.video_success = null
                }
            }, {
                key: "executeFailureWithVideo",
                value: function () {
                    cc.director.resume(), cc.audioEngine.resumeAll(), this.video_failure && this.video_failure(), this.video_failure = null
                }
            }]), e
        }();
        i.bytedance = s, cc._RF.pop()
    }, {}],
    _huawei: [function (e, t, i) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function a(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
        cc._RF.push(t, "f10396xoNxP67nrfvM2AS9O", "_huawei"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.huawei = void 0;
        var s = function () {
            function e() {
                var t = this;
                o(this, e), this.device = null, this.video = null, this.banner = null, this.lastVideoTime = 0, this.video_success = null, this.video_failure = null, this.isValid = !0, console.log("华为-构建华为平台工具类"), this.device = window.qg.getSystemInfoSync();
                var i = ServerConfig.bannerCode ? ServerConfig.bannerCode : App.HuaWei.bannerCode;
                this.banner = window.qg.createBannerAd({
                    adUnitId: i,
                    adIntervals: 60,
                    style: {
                        top: this.device.safeArea.height - 57,
                        left: this.device.safeArea.width / 2 - 180,
                        height: 57,
                        width: 360
                    }
                }), this.banner.onLoad(function () {
                    console.log("Banner创建成功")
                });
                var n = ServerConfig.videoCode ? ServerConfig.videoCode : App.HuaWei.videoCode;
                this.video = window.qg.createRewardedVideoAd({
                    adUnitId: n,
                    success: function (e) {
                        t.video.onLoad(function () {
                            t.isValid = !0
                        }), t.video.onError(function (e) {
                            t.isValid = !1
                        }), t.video.onClose(function (e) {
                            e.isEnded ? t.executeVideoSuccessCallBack() : t.executeVideoFailureCallBack(), t.video.load()
                        }), t.video.load()
                    },
                    fail: function (e) {
                        console.error("创建视频实例失败!!")
                    },
                    complete: function () {}
                }), qg.onShow(function () {
                    var e = cc.director.getScene().getChildByName("hw-NativeInterstitial");
                    e && e.getComponent("hw-NativeInterstitial").executeReport()
                })
            }
            return a(e, [{
                key: "clearAdvertising",
                value: function () {
                    this.destroyNativeInterstitial(), this.destroySystemBanner(), this.destroySystemInterstitial()
                }
            }, {
                key: "getRandomIntNum",
                value: function (e, t) {
                    var i = t - e,
                        o = Math.random();
                    return e + Math.round(o * i)
                }
            }, {
                key: "showVideo",
                value: function (e, t) {
                    if (this.isValid) {
                        var i = (new Date).getTime();
                        i - this.lastVideoTime < 500 || (this.lastVideoTime = i, cc.director.pause(), cc.audioEngine.pauseAll(), this.video_success = e, this.video_failure = t, this.video.show())
                    } else qg.showToast({
                        title: "暂无广告",
                        icon: "",
                        duration: 1500
                    })
                }
            }, {
                key: "showSystemBanner",
                value: function () {
                    this.banner && this.banner.show()
                }
            }, {
                key: "destroySystemBanner",
                value: function () {
                    this.banner && this.banner.hide()
                }
            }, {
                key: "showSystemInterstitial",
                value: function (e) {
                    var t = this,
                        i = ServerConfig.interstitialCode ? ServerConfig.interstitialCode : App.HuaWei.interstitialCode;
                    this.sInterstitial = qg.createInterstitialAd({
                        adUnitId: i
                    }), this.sInterstitial.onClose(function () {
                        e && (t.getRandomIntNum(0, 100) < ServerConfig.quitShow && t.showSystemBanner())
                    }), this.sInterstitial.onLoad(function () {
                        t.sInterstitial.offLoad(), t.sInterstitial.show()
                    }), this.sInterstitial.onError(function (e) {
                        console.log("系统插屏Error = ", JSON.stringify(e)), t.sInterstitial.offError(), t.destroySystemInterstitial()
                    }), this.sInterstitial.load()
                }
            }, {
                key: "destroySystemInterstitial",
                value: function () {
                    this.sInterstitial && (this.sInterstitial.destroy(), this.sInterstitial = null)
                }
            }, {
                key: "getNative",
                value: function (e) {
                    var t = ServerConfig.nativeCode ? ServerConfig.nativeCode : App.HuaWei.nativeCode,
                        i = qg.createNativeAd({
                            adUnitId: t,
                            success: function () {
                                i.onError(function (t) {
                                    i.destroy(), e(null)
                                }), i.onLoad(function (t) {
                                    i.offLoad(), e({
                                        ad: i,
                                        res: t
                                    })
                                }), i.load()
                            },
                            fail: function (t) {
                                i.destroy(), e(null)
                            }
                        })
                }
            }, {
                key: "showNativeInterstitial",
                value: function (e) {
                    var t = this;
                    this.getNative(function (i) {
                        i ? cc.loader.loadRes("Platform/Prefabs/hw/hw-NativeInterstitial", cc.Prefab, function (o, n) {
                            var a = cc.instantiate(n);
                            cc.director.getScene().addChild(a), a.getComponent("hw-NativeInterstitial").initialize(i, function () {
                                e && t.getRandomIntNum(0, 100) < ServerConfig.quitShow && t.showSystemBanner()
                            })
                        }) : t.showSystemBanner()
                    })
                }
            }, {
                key: "destroyNativeInterstitial",
                value: function () {
                    var e = cc.director.getScene().getChildByName("hw-NativeInterstitial");
                    e && e.getComponent("hw-NativeInterstitial").executeDestroy()
                }
            }, {
                key: "isAdditionDesktop",
                value: function (e, t) {
                    window.qg.hasShortcutInstalled({
                        success: function (i) {
                            i ? e && e() : t && t()
                        }
                    })
                }
            }, {
                key: "additionDesktop",
                value: function (e) {
                    window.qg.installShortcut({
                        message: "为了方便游戏,是否将创建快捷图标?",
                        success: function (t) {
                            e && (e.active = !1)
                        }
                    })
                }
            }, {
                key: "executeShowToast",
                value: function () {
                    window.qg.showToast({
                        title: msg,
                        duration: 1500
                    })
                }
            }, {
                key: "executeVideoSuccessCallBack",
                value: function () {
                    cc.director.resume(), cc.audioEngine.resumeAll(), this.video_success && this.video_success(), this.video_success = null
                }
            }, {
                key: "executeVideoFailureCallBack",
                value: function () {
                    cc.director.resume(), cc.audioEngine.resumeAll(), this.video_failure && this.video_failure(), this.video_failure = null
                }
            }]), e
        }();
        i.huawei = s, cc._RF.pop()
    }, {}],
    _meizu: [function (e, t, i) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function a(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
        cc._RF.push(t, "e0765C+DeRC1LLabqe4yGah", "_meizu"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.meizu = void 0;
        var s = function () {
            function e() {
                var t = this;
                o(this, e), this.device = null, this.allowVideo = null, this.video = null, this.vTime = 0, this.isReward = !1, this.sBanner = null, this.sInterstitial = null, this.video_success = null, this.video_failure = null, this.device = qg.getSystemInfoSync(), this.video = qg.createRewardedVideoAd({
                    adUnitId: App.MeiZu.videoCode
                }), this.video.onRewarded(function () {
                    t.isReward = !0
                }), this.video.onClose(function () {
                    t.isReward ? t.executeSucceedWithVideo() : t.executeFailureWithVideo()
                });
                var i = this.device.screenHeight > this.device.screenWidth ? this.device.screenWidth : 1440;
                this.sBanner = qg.createBannerAd({
                    adUnitId: App.MeiZu.bannerCode,
                    style: {
                        left: (this.device.screenWidth - i) / 2,
                        top: this.device.screenHeight - i / 6.7,
                        width: i,
                        height: i / 6.7
                    }
                }), this.sBanner.onResize(function (e) {
                    0 !== e.width && 0 !== e.height && (t.sBanner.style.top = t.device.screenHeight - i / 6.7, t.sBanner.style.left = (t.device.screenWidth - e.width) / 2)
                })
            }
            return a(e, [{
                key: "getRandomIntNum",
                value: function (e, t) {
                    var i = t - e,
                        o = Math.random();
                    return e + Math.round(o * i)
                }
            }, {
                key: "doShake",
                value: function (e) {
                    e ? mz.vibrateLong() : mz.vibrateShort()
                }
            }, {
                key: "showVideo",
                value: function (e, t) {
                    var i = this,
                        o = (new Date).getTime();
                    o - this.vTime < 1200 ? this.showToast("请勿频繁点击") : (this.vTime = o, cc.director.pause(), cc.audioEngine.pauseAll(), this.video_success = e, this.video_failure = t, this.isReward = !1, this.video.onError(function (e) {
                        console.log("加载视频组件错误")
                    }), this.video.onLoad(function () {
                        i.video.show()
                    }), this.video.load())
                }
            }, {
                key: "showStartVideo",
                value: function () {
                    this.allowVideo && (this.allowVideo = !1, this.getRandomIntNum(0, 100) < ServerConfig.startVideo && this.showVideo(null, null))
                }
            }, {
                key: "getNative",
                value: function (e) {
                    console.log("拉取魅族原生广告信息");
                    var t = qg.createNativeAd({
                        adUnitId: App.MeiZu.nativeCode
                    });
                    t.onLoad(function (i) {
                        i.adList ? e({
                            ad: t,
                            res: i
                        }) : console.warn("加载原生广告成功, 但无下发广告信息!!")
                    }), t.onError(function (t) {
                        console.log("拉取广告信息失败:", t), e(null)
                    }), t.load()
                }
            }, {
                key: "clearAdvertising",
                value: function () {
                    this.destroySystemInterstitial(), this.destroySystemBanner(), this.destroyNativeInterstitial()
                }
            }, {
                key: "showSystemBanner",
                value: function () {
                    this.destroySystemBanner(), this.sBanner && this.sBanner.show()
                }
            }, {
                key: "destroySystemBanner",
                value: function () {
                    this.sBanner && this.sBanner.hide()
                }
            }, {
                key: "showSystemInterstitial",
                value: function (e) {
                    var t = this;
                    console.log("调用魅族系统插屏"), this.sInterstitial = qg.createInsertAd({
                        adUnitId: App.MeiZu.interstitialCode
                    }), this.sInterstitial.onClose(function () {
                        e && (t.destroySystemInterstitial(), t.getRandomIntNum(0, 100) < ServerConfig.quitShow && t.showSystemBanner())
                    }), this.sInterstitial.onLoad(function () {
                        t.sInterstitial.show()
                    }), this.sInterstitial.load()
                }
            }, {
                key: "destroySystemInterstitial",
                value: function () {
                    this.sInterstitial && (this.sInterstitial.destroy(), this.sInterstitial = null)
                }
            }, {
                key: "showNativeInterstitial",
                value: function (e) {
                    var t = this;
                    this.getNative(function (i) {
                        i ? cc.loader.loadRes("Platform/Prefabs/mz/mz-NativeInterstitial", cc.Prefab, function (o, n) {
                            if (o) console.warn("创建插屏预制体时发生错误:", o);
                            else {
                                var a = cc.instantiate(n);
                                cc.director.getScene().addChild(a), a.getComponent("mz-NativeInterstitial").initialize(i, function () {
                                    e && t.getRandomIntNum(0, 100) < ServerConfig.quitShow && t.showSystemBanner()
                                })
                            }
                        }) : t.showNativeInterstitial(e)
                    })
                }
            }, {
                key: "destroyNativeInterstitial",
                value: function () {
                    var e = cc.director.getScene().getChildByName("mz-NativeInterstitial");
                    e && e.getComponent("mz-NativeInterstitial").executeDestroy()
                }
            }, {
                key: "additionDesktop",
                value: function (e) {
                    qg.installShortcut({
                        success: function () {
                            e && (e.active = !1)
                        },
                        fail: function (e) {},
                        complete: function () {}
                    })
                }
            }, {
                key: "isAdditionDesktop",
                value: function (e, t) {
                    qg.hasShortcutInstalled({
                        success: function (i) {
                            i ? e && e() : t && t()
                        },
                        fail: function (e) {},
                        complete: function () {}
                    })
                }
            }, {
                key: "showToast",
                value: function (e) {
                    mz.showToast({
                        title: e,
                        duration: 1500
                    })
                }
            }, {
                key: "executeSucceedWithVideo",
                value: function () {
                    console.log("视频播放完毕1"), cc.director.resume(), cc.audioEngine.resumeAll(), this.video_success && this.video_success(), this.video_success = null
                }
            }, {
                key: "executeFailureWithVideo",
                value: function () {
                    console.log("视频播放完毕2"), cc.director.resume(), cc.audioEngine.resumeAll(), this.video_failure && this.video_failure(), this.video_failure = null
                }
            }]), e
        }();
        i.meizu = s, cc._RF.pop()
    }, {}],
    _oppo: [function (e, t, i) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function a(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
        cc._RF.push(t, "6b1ceevW5ROIKEnY15gHOFp", "_oppo"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.oppo = void 0;
        var s = function () {
            function e() {
                var t = this;
                o(this, e), this.device = null, this.nativeIndex = 0, this.nativeAd = null, this.video_success = null, this.video_failure = null, this.sBanner = null, this.video = null, console.log("初始化【OPPO】平台"), this.device = qg.getSystemInfoSync(), this.nativeIndex = 0;
                var i = function () {
                    t.video = window.qg.createRewardedVideoAd({
                        adUnitId: App.OPPO.videoCode
                    }), t.sBanner = qg.createBannerAd({
                        adUnitId: App.OPPO.bannerCode,
                        style: {
                            left: 0,
                            width: t.device.windowWidth
                        }
                    }), t.sBanner.onResize(function (e) {
                        t.sBanner.style.top = t.device.windowHeight - e.height
                    })
                };
                window.qg.initAdService({
                    appId: App.OPPO.appID,
                    isDebug: !1,
                    success: function (e) {
                        console.log("初始化OPPO广告服务成功"), i && i()
                    },
                    fail: function (e) {
                        console.error("初始化OPPO广告服务失败:", e.code, e.msg)
                    },
                    complete: function (e) {
                        console.log("完成OPPO广告初始化")
                    }
                })
            }
            return a(e, [{
                key: "getRandomIntNum",
                value: function (e, t) {
                    var i = t - e,
                        o = Math.random();
                    return e + Math.round(o * i)
                }
            }, {
                key: "doShake",
                value: function (e) {
                    e ? qg.vibrateLong() : qg.vibrateShort()
                }
            }, {
                key: "showVideo",
                value: function (e, t) {
                    var i = this;
                    cc.director.pause(), cc.audioEngine.pauseAll(), this.video_success = e, this.video_failure = t, this.video.load().then(function () {
                        i.video.show().then(function () {}).catch(function (e) {
                            i.executeFailureWithVideo()
                        })
                    }).catch(function (e) {
                        i.showToast("暂无广告"), i.executeFailureWithVideo()
                    }), this.video.onClose(function (e) {
                        e.isEnded ? i.executeSucceedWithVideo() : i.executeFailureWithVideo()
                    })
                }
            }, {
                key: "destroyNativeAd",
                value: function () {
                    this.nativeAd && (this.nativeAd.destroy(), this.nativeAd = null)
                }
            }, {
                key: "getNative",
                value: function (e) {
                    var t = qg.createNativeAd({
                        adUnitId: App.OPPO.nativeCodes[this.nativeIndex]
                    });
                    this.nativeIndex++, this.nativeIndex >= App.OPPO.nativeCodes.length && (this.nativeIndex = 0), t.load().then(function (i) {
                        i.adList ? e({
                            ad: t,
                            res: i
                        }) : console.warn("加载原生广告成功, 但无下发广告信息!!")
                    }).catch(function (t) {
                        console.log("拉取广告信息失败:", t), e(null)
                    })
                }
            }, {
                key: "clearAdvertising",
                value: function () {
                    this.destroyMutual(), this.destroyNativeBanner(), this.destroySystemBanner(), this.destroyNativeInterstitial(), this.destroyTemplateInterstitial(), console.log("清除全部广告")
                }
            }, {
                key: "showMutual",
                value: function () {
                    var e = cc.view.getVisibleSize();
                    if (!(e.width > e.height)) return this.mutual ? void this.mutual.show().then(function () {
                        console.log("横幅广告展示成功")
                    }).catch(function (e) {
                        console.log("横幅广告展示失败:", e)
                    }) : (this.mutual = qg.createGameBannerAd({
                        adUnitId: App.OPPO.pushCode
                    }), void this.mutual.show().then(function () {
                        console.log("横幅广告展示成功")
                    }).catch(function (e) {
                        console.log("横幅广告展示失败:", e)
                    }));
                    console.log("横版项目, 不显示滚动盒子")
                }
            }, {
                key: "destroyMutual",
                value: function () {
                    this.mutual && this.mutual.hide()
                }
            }, {
                key: "showSystemBanner",
                value: function () {
                    this.sBanner && this.sBanner.show()
                }
            }, {
                key: "destroySystemBanner",
                value: function () {
                    this.sBanner && this.sBanner.hide()
                }
            }, {
                key: "showNativeBanner",
                value: function () {
                    var e = this;
                    this.getNative(function (t) {
                        t ? cc.loader.loadRes("Platform/Prefabs/oppo/oppo-NativeBanner", cc.Prefab, function (e, i) {
                            if (e) console.warn("创建Banner预制体时发生错误:", e);
                            else {
                                var o = cc.instantiate(i);
                                cc.director.getScene().addChild(o), o.getComponent("oppo-NativeBanner").initialize(t)
                            }
                        }) : e.showSystemBanner()
                    })
                }
            }, {
                key: "destroyNativeBanner",
                value: function () {
                    var e = cc.director.getScene().getChildByName("oppo-NativeBanner");
                    e && e.getComponent("oppo-NativeBanner").executeDestroy()
                }
            }, {
                key: "showNativeInterstitial",
                value: function (e) {
                    var t = this;
                    console.log("显示原生插屏"), this.getNative(function (i) {
                        i && cc.loader.loadRes("Platform/Prefabs/oppo/oppo-NativeInterstitial", cc.Prefab, function (o, n) {
                            if (o) console.warn("创建插屏预制体时发生错误:", o);
                            else {
                                var a = cc.instantiate(n);
                                cc.director.getScene().addChild(a), a.getComponent("oppo-NativeInterstitial").initialize(i, function () {
                                    e && t.getRandomIntNum(0, 100) < ServerConfig.quitShow && ServerConfig.bannerRatio > 0 && t.showNativeBanner()
                                })
                            }
                        })
                    })
                }
            }, {
                key: "destroyNativeInterstitial",
                value: function () {
                    var e = cc.director.getScene().getChildByName("oppo-NativeInterstitial");
                    e && e.getComponent("oppo-NativeInterstitial").executeDestroy()
                }
            }, {
                key: "showTemplateInterstitial",
                value: function (e) {
                    var t = this;
                    if (qg.createCustomAd) {
                        var i = App.VIVO.nativeCodes[this.nativeIndex];
                        this.nativeIndex++, this.nativeIndex >= App.VIVO.nativeCodes.length && (this.nativeIndex = 0);
                        var o = this.device.windowWidth,
                            n = this.device.windowHeight;
                        this.tInterstitial = qg.createCustomAd({
                            posId: i,
                            style: {
                                left: (o - n) / 2,
                                top: n / 2 - (o < n ? o : n) * (525 / 720) / 2
                            }
                        }), this.tInterstitial.show().then(function () {
                            var e = cc.view.getVisibleSize(),
                                t = new cc.Texture2D,
                                i = new cc.SpriteFrame;
                            t.initWithData(new Uint8Array([0, 0, 0]), cc.Texture2D.PixelFormat.RGB888, 1, 1, e), i.setTexture(t), i.setRect(cc.rect(0, 0, 20 * e.width, 20 * e.width));
                            var o = new cc.Node;
                            o.opacity = 100, o.addComponent(cc.Sprite).spriteFrame = i, o.name = "Shield", o.addComponent(cc.BlockInputEvents), o.zIndex = 9999, cc.director.getScene().addChild(o);
                            var n = o.addComponent(cc.Widget);
                            n.isAlignLeft = !0, n.isAlignBottom = !0, n.isAlignTop = !0, n.isAlignRight = !0, n.top = 0, n.bottom = 0, n.left = 0, n.right = 0, n.updateAlignment(), console.log(o.width, o.height)
                        }), this.tInterstitial.onError(function (e) {}), this.tInterstitial.onClose(function () {
                            var i = cc.director.getScene().getChildByName("Shield");
                            (i && i.removeFromParent(!0), e) && (t.getRandomIntNum(0, 100) < ServerConfig.quitShow && t.showSystemBanner())
                        })
                    }
                }
            }, {
                key: "destroyTemplateInterstitial",
                value: function () {
                    this.tInterstitial && (this.tInterstitial.destroy(), this.tInterstitial = null)
                }
            }, {
                key: "showMoreGame",
                value: function () {
                    var e = this;
                    adUtils.clearAllAdvertising();
                    var t = window.qg.createGamePortalAd({
                        adUnitId: App.OPPO.boxCode
                    });
                    t.onClose(function () {
                        t.destroy()
                    }), t.load().then(function () {
                        t.show()
                    }).catch(function (i) {
                        e.showToast("请稍后..."), t.destroy()
                    })
                }
            }, {
                key: "additionDesktop",
                value: function (e) {
                    qg.installShortcut({
                        success: function () {
                            e && (e.active = !1)
                        },
                        fail: function (e) {},
                        complete: function () {}
                    })
                }
            }, {
                key: "isAdditionDesktop",
                value: function (e, t) {
                    qg.hasShortcutInstalled({
                        success: function (i) {
                            i ? e && e() : t && t()
                        },
                        fail: function (e) {},
                        complete: function () {}
                    })
                }
            }, {
                key: "showToast",
                value: function (e) {
                    qg.showToast({
                        title: e,
                        duration: 1500
                    })
                }
            }, {
                key: "doShake",
                value: function (e) {
                    e ? qg.vibrateLong() : qg.vibrateShort()
                }
            }, {
                key: "executeSucceedWithVideo",
                value: function () {
                    cc.director.resume(), cc.audioEngine.resumeAll(), this.video_success && this.video_success(), this.video_success = null
                }
            }, {
                key: "executeFailureWithVideo",
                value: function () {
                    cc.director.resume(), cc.audioEngine.resumeAll(), this.video_failure && this.video_failure(), this.video_failure = null
                }
            }]), e
        }();
        i.oppo = s, cc._RF.pop()
    }, {}],
    _quick: [function (e, t, i) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function a(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
        cc._RF.push(t, "2bc46X39UdISIPadsNI7ZAw", "_quick"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.quick = void 0;
        var s = function () {
            function e() {
                var t = this;
                o(this, e), this.device = null, this.video = null, this.recorder = null, this.recorderPath = "", this.startRecorderTime = null, this.endRecorderTime = null, this.allowVideo = !0, this.video_success = null, this.video_failure = null, this.share_success = null, this.share_failure = null, console.log("初始化【快手】平台"), this.device = ks.getSystemInfoSync(), ks.onShow(function (e) {
                    t.recorder && t.recorder.isRecording && t.recorder.resume()
                }), ks.onHide(function () {
                    t.recorder && t.recorder.isRecording && t.recorder.pause()
                }), this.Interstitial = ks.createInterstitialAd({
                    adUnitId: App.Quick.interstitialCode
                }), this.recorder = ks.getGameRecorder(), this.recorder.on("start", function () {
                    console.log("视频录制开始")
                }), this.recorder.on("stop", function (e) {
                    t.recorderPath = e.videoID, console.log("停止录制:视频路径 = ", e), t.endRecorderTime = (new Date).getTime(), t.recorder.isRecording = !1, t.stopHandle && (t.stopHandle(), t.stopHandle = null)
                }), this.video = window.ks.createRewardedVideoAd({
                    adUnitId: App.Quick.videoCode
                }), this.video.onClose(function (e) {
                    e.isEnded ? (console.log("视频广告播放完毕, 开始下发奖励!!"), t.executeVideoSuccessCallBack()) : (console.log("中途关闭视频"), t.executeVideoFailureCallBack())
                })
            }
            return a(e, [{
                key: "getRandomIntNum",
                value: function (e, t) {
                    var i = t - e,
                        o = Math.random();
                    return e + Math.round(o * i)
                }
            }, {
                key: "showVideo",
                value: function (e, t) {
                    var i = this;
                    cc.director.pause(), cc.audioEngine.pauseAll(), this.video_success = e, this.video_failure = t, this.video.show().then(function () {
                        console.log("视频广告成功显示~~~~")
                    }).catch(function (e) {
                        console.log("视频广告成功失败:", e), i.showToast("视频组件显示失败，请稍后再试！"), i.executeVideoFailureCallBack()
                    })
                }
            }, {
                key: "showSystemInterstitial",
                value: function () {
                    console.log("显示快手插屏"), this.Interstitial ? console.log("有效的插屏组件") : console.log("无效的插屏组件"), this.Interstitial.show().then(function () {
                        console.log("显示成功")
                    }).catch(function (e) {
                        console.log("显示失败:", e)
                    })
                }
            }, {
                key: "startRecorder",
                value: function () {
                    var e = this;
                    if (console.log("快手平台--开始录制"), this.recorder) {
                        this.recorder.isRecording && this.stopRecorder();
                        setTimeout(function () {
                            e.recorder.start({
                                duration: 120
                            }), e.startRecorderTime = (new Date).getTime(), console.log("开始录制, 开始时间:", e.startRecorderTime)
                        }, 200)
                    } else console.error("开始录制失败:无效的录制组件!!")
                }
            }, {
                key: "stopRecorder",
                value: function (e) {
                    this.recorder ? (console.log("快手:停止视频录制"), this.stopHandle = e, this.recorder.stop()) : console.error("停止录制失败:无效的录制组件!!")
                }
            }, {
                key: "doShare",
                value: function (e, t) {
                    var i = this;
                    this.recorderPath && "" !== this.recorderPath ? this.endRecorderTime - this.startRecorderTime <= 3e3 ? this.showToast("视频时长过短,无法分享!") : (this.share_success = e, this.share_failure = t, this.recorder.publishVideo({
                        video: this.recorderPath,
                        callback: function (e) {
                            if (null != e && void 0 != e) return console.log("分享录屏失败: " + JSON.stringify(e)), void(i.share_failure && i.share_failure());
                            console.log("分享录屏成功"), i.share_success && i.share_success()
                        }
                    })) : this.showToast("视频录制失败!")
                }
            }, {
                key: "showMoreGames",
                value: function () {
                    cc.sys.os !== cc.sys.OS_IOS ? ks.showMoreGamesModal({
                        appLaunchOptions: [{
                            appId: App.Quick.appId
                        }]
                    }) : this.showToast("IOS暂不支持此功能")
                }
            }, {
                key: "showToast",
                value: function (e) {
                    ks.showToast({
                        title: e,
                        duration: 1500
                    })
                }
            }, {
                key: "doShake",
                value: function (e) {
                    e ? ks.vibrateLong() : ks.vibrateShort()
                }
            }, {
                key: "isAdditionDesktop",
                value: function (e, t) {
                    ks.getAPKShortcutInstallStatus(function (i) {
                        -10005 === i.code ? e && e() : 1 === i.code ? i.installed ? e && e() : t && t() : e && e()
                    })
                }
            }, {
                key: "additionDesktop",
                value: function (e) {
                    var t = this;
                    ks.saveAPKShortcut(function (i) {
                        -10005 === i.code ? t.showToast("暂不支持该功能") : 1 === i.code ? (t.showToast("添加成功"), e.active = !1) : t.showToast("失败或已添加")
                    })
                }
            }, {
                key: "isSatisfy",
                value: function () {
                    if (!ServerConfig.isHaveBox) return !1;
                    if (!ServerConfig.sceneID || ServerConfig.sceneID.length <= 0) return !1;
                    for (var e = ks.getLaunchOptionsSync().from, t = 0; t < ServerConfig.sceneID.length; t++) {
                        if (e == ServerConfig.sceneID[t]) return !0
                    }
                    return !1
                }
            }, {
                key: "showStartVideo",
                value: function () {
                    if (this.allowVideo && (this.allowVideo = !1, this.getRandomIntNum(0, 100) < ServerConfig.startVideo))
                        for (var e = ks.getLaunchOptionsSync().from, t = 0; t < ServerConfig.sceneID.length; t++) {
                            if (e == ServerConfig.sceneID[t]) return void this.showVideo(null, null)
                        }
                }
            }, {
                key: "executeVideoSuccessCallBack",
                value: function () {
                    cc.director.resume(), cc.audioEngine.resumeAll(), this.video_success && this.video_success(), this.video_success = null
                }
            }, {
                key: "executeVideoFailureCallBack",
                value: function () {
                    cc.director.resume(), cc.audioEngine.resumeAll(), this.video_failure && this.video_failure(), this.video_failure = null
                }
            }]), e
        }();
        i.quick = s, cc._RF.pop()
    }, {}],
    _tencent: [function (e, t, i) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function a(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
        cc._RF.push(t, "967c3QkbT9GAYD2qas6tdGe", "_tencent"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.tencent = void 0;
        var s = function () {
            function e() {
                o(this, e), this.device = null, this.video = null, this.sBanner = null, this.interstitial = null, this.grid = null, this.gridDetail = null, this.box = null, this.video_success = null, this.video_failure = null, this.isOpenShare = !1, this.triggerTime = 0, this.shareCount = 0, this.share_success = null, this.share_failure = null, this.device = qq.getSystemInfoSync(), this.gridDetail = {}, this.allowVideo = !0, this.isOpenShare = !1;
                var t = {
                    title: App.chineseName,
                    imageUrl: "./shareImg.jpg"
                };
                qq.showShareMenu({
                    showShareItems: ["qq", "qzone", "wechatFriends", "wechatMoment"],
                    withShareTicket: !0
                }), qq.onShareAppMessage(function () {
                    return t
                }), qq.onShow(this.onShowCallBack.bind(this)), qq.onHide(this.onHideCallBack.bind(this)), this.sBanner = qq.createBannerAd({
                    adUnitId: App.Tencent.bannerCode,
                    adIntervals: 30,
                    style: {
                        left: 0,
                        top: this.device.screenHeight - 90,
                        width: this.device.screenWidth
                    }
                }), this.sBanner.onError(function (e) {
                    console.log("Banner错误 = ", JSON.stringify(e))
                })
            }
            return a(e, [{
                key: "clearAdvertising",
                value: function () {
                    this.destroySystemBanner()
                }
            }, {
                key: "getRandomIntNum",
                value: function (e, t) {
                    var i = t - e,
                        o = Math.random();
                    return e + Math.round(o * i)
                }
            }, {
                key: "onHideCallBack",
                value: function () {
                    console.log("微信切入了后台"), this.isOpenShare && (this.triggerTime = (new Date).getTime())
                }
            }, {
                key: "onShowCallBack",
                value: function () {
                    var e = this;
                    if (console.log("微信返回了前台"), this.isOpenShare) {
                        var t = (new Date).getTime(),
                            i = e.shareCount <= 0 ? 3 : e.shareCount >= 1 && e.shareCount <= 2 ? 3.5 : e.shareCount >= 3 && e.shareCount <= 4 ? 4 : e.shareCount >= 5 && e.shareCount <= 6 ? 4.5 : e.shareCount >= 7 && e.shareCount <= 8 ? 5 : e.shareCount >= 9 && e.shareCount <= 10 ? 5.5 : 6;
                        Math.floor((t - this.triggerTime) / 1e3) >= i ? (console.log("分享成功"), this.shareCount++, cc.director.resume(), cc.audioEngine.resumeAll(), this.share_success && this.share_success(), this.share_success = null) : (console.log("分享失败"), cc.director.resume(), cc.audioEngine.resumeAll(), this.share_failure && this.share_failure(), this.share_failure = null)
                    }
                }
            }, {
                key: "doShake",
                value: function (e) {
                    e ? qq.vibrateLong({}) : qq.vibrateShort({})
                }
            }, {
                key: "isSatisfy",
                value: function () {
                    if (!qq.getLaunchOptionsSync) return !1;
                    if (!ServerConfig.sceneID || ServerConfig.sceneID.length <= 0) return !1;
                    for (var e = qq.getLaunchOptionsSync().scene, t = 0; t < ServerConfig.sceneID.length; t++)
                        if (e == ServerConfig.sceneID[t]) return !0;
                    return !1
                }
            }, {
                key: "showStartVideo",
                value: function () {
                    this.allowVideo && (this.allowVideo = !1, this.isSatisfy() && 100 * Math.random() < ServerConfig.startVideo && this.showVideo(null, null))
                }
            }, {
                key: "showVideo",
                value: function (e, t) {
                    var i = this;
                    if (ServerConfig.isVideoToShare) this.doShare(e, t);
                    else {
                        cc.director.pause(), cc.audioEngine.pauseAll(), this.video_success = e, this.video_failure = t;
                        var o = qq.createRewardedVideoAd({
                            adUnitId: App.Tencent.videoCode
                        });
                        o.load().then(function () {
                            o.show().then(function () {
                                console.log("QQ视频显示成功!!"), o.onClose(function (e) {
                                    !0 === e.isEnded ? i.executeSucceedWithVideo() : i.executeFailureWithVideo()
                                })
                            }).catch(function () {
                                console.log("QQ视频显示失败!!")
                            })
                        }).catch(function () {
                            i.doShare(e, t)
                        })
                    }
                }
            }, {
                key: "doShare",
                value: function (e, t) {
                    cc.director.pause(), cc.audioEngine.pauseAll(), this.share_success = e, this.share_failure = t, this.isOpenShare = !0, qq.shareAppMessage({
                        title: App.chineseName,
                        imageUrl: "./shareImg.jpg",
                        shareAppType: "qq"
                    })
                }
            }, {
                key: "showSystemBanner",
                value: function () {
                    var e = this;
                    console.log("showSystemBanner"), this.destroySystemBanner();
                    var t = function () {
                        e.sBanner && (console.log("Banner显示"), e.sBanner.show().then(function () {
                            console.log("QQ-Banner显示成功")
                        }).catch(function (e) {
                            console.log("QQ-Banner显示异常: ", JSON.stringify(e))
                        }))
                    };
                    if (ServerConfig.celue.bannerTime <= 0) t();
                    else {
                        if (this.getRandomIntNum(0, 100) > ServerConfig.quitShow) return;
                        var i = (new Date).getTime();
                        i > adUtils.bannerTriggerTime && (adUtils.bannerTriggerTime = i + 1e3 * ServerConfig.celue.bannerTime, t())
                    }
                }
            }, {
                key: "destroySystemBanner",
                value: function () {
                    this.sBanner && this.sBanner.hide()
                }
            }, {
                key: "showSystemInterstitial",
                value: function (e) {
                    var t = this;
                    console.log("QQ---显示系统插屏");
                    var i = qq.createInterstitialAd({
                        adUnitId: App.Tencent.interstitialCode
                    });
                    i.onClose(function () {
                        i.isClose || (i.isClose = !0, i.offClose(), i.destroy().then(function () {
                            i = null
                        }), t.showSystemBanner())
                    }), i.load().then(function () {
                        i.show().then(function () {
                            console.log("系统插屏显示成功")
                        }).catch(function (e) {
                            console.log("系统插屏显示失败----", JSON.stringify(e))
                        })
                    }).catch(function (e) {
                        console.log("系统失败----", JSON.stringify(e))
                    })
                }
            }, {
                key: "destroySystemInterstitial",
                value: function () {}
            }, {
                key: "showMoreGame",
                value: function () {
                    console.log("QQ - showMoreGame");
                    var e = qq.createAppBox({
                        adUnitId: App.Tencent.boxCode
                    });
                    e.load().then(function () {
                        e.show()
                    })
                }
            }, {
                key: "isAdditionDesktop",
                value: function (e, t) {
                    console.log("QQ - isAdditionDesktop"), cc.isDesktopShortcut ? e && e() : t && t()
                }
            }, {
                key: "additionDesktop",
                value: function (e) {
                    console.log("QQ - additionDesktop"), qq.saveAppToDesktop({
                        success: function (t) {
                            e && (e.active = !1), cc.isDesktopShortcut = !0
                        }
                    })
                }
            }, {
                key: "showToast",
                value: function (e) {
                    qq.showToast({
                        title: e,
                        icon: "none",
                        duration: 1e3
                    })
                }
            }, {
                key: "executeSucceedWithVideo",
                value: function () {
                    cc.director.resume(), cc.audioEngine.resumeAll(), this.video_success && this.video_success(), this.video_success = null
                }
            }, {
                key: "executeFailureWithVideo",
                value: function () {
                    cc.director.resume(), cc.audioEngine.resumeAll(), this.video_failure && this.video_failure(), this.video_failure = null
                }
            }]), e
        }();
        i.tencent = s, cc._RF.pop()
    }, {}],
    _uc: [function (e, t, i) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function a(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
        cc._RF.push(t, "0ae26D0goJIUpGHQnPLUPYz", "_uc"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.uc = void 0;
        var s = function () {
            function e() {
                var t = this;
                o(this, e), this.device = null, this.banner = null, this.interstitial = null, this.allowVideo = !0, this.successCallBack = null, this.failureCallBack = null;
                var i = function () {
                    if (t.device = window.uc.getSystemInfoSync(), "string" == typeof t.device) try {
                        t.device = JSON.parse(t.device)
                    } catch (e) {}
                    t.interstitial = window.uc.createInterstitialAd(), t.interstitial.load().then(function () {
                        console.log("UC Interstitial组件初始化成功")
                    }).catch(function (e) {
                        console.log("UC Interstitial组件初始化失败")
                    })
                };
                window.uc.requestScreenOrientation({
                    orientaiton: 1,
                    success: function (e) {
                        i()
                    },
                    fail: function (e) {
                        console.error(e)
                    }
                })
            }
            return a(e, [{
                key: "getRandomIntNum",
                value: function (e, t) {
                    var i = t - e,
                        o = Math.random();
                    return e + Math.round(o * i)
                }
            }, {
                key: "clearAdvertising",
                value: function () {
                    this.destroySystemBanner()
                }
            }, {
                key: "showStartVideo",
                value: function (e, t) {
                    this.allowVideo && (this.allowVideo = !1, this.getRandomIntNum(0, 100) < ServerConfig.startVideo && this.showVideo(e, t))
                }
            }, {
                key: "showVideo",
                value: function (e, t) {
                    var i = this;
                    this.successCallBack = e, this.failureCallBack = t, cc.audioEngine.pauseAll(), cc.director.pause(), this.video = window.uc.createRewardVideoAd(), this.video.load().then(function () {
                        console.log("UC 视频组件加载成功"), i.video.show().then(function () {
                            console.log("UC 视频组件显示成功")
                        }).catch(function (e) {
                            console.log("UC 视频组件显示失败:", e)
                        })
                    }).catch(function (e) {
                        console.log("UC 视频加载失败:", e), i.Video = null
                    }), this.video.onClose(function (e) {
                        e && e.isEnded ? i.executeSucceedWithVideo() : i.executeFailureWithVideo()
                    })
                }
            }, {
                key: "showSystemBanner",
                value: function () {
                    var e = this;
                    this.destroySystemBanner();
                    var t = (this.device.screenWidth > this.device.screenHeight ? this.device.screenHeight : this.device.screenWidth) / 2,
                        i = 194 * t / 345;
                    this.banner = window.uc.createBannerAd({
                        style: {
                            width: t,
                            height: i,
                            gravity: 7
                        }
                    }), this.banner.onError(function (e) {
                        console.log("UC横幅广告加载失败", e)
                    }), this.banner.onLoad(function () {
                        console.log("UC横幅广告加载失败成功"), e.banner.show()
                    })
                }
            }, {
                key: "destroySystemBanner",
                value: function () {
                    this.banner && (this.banner.destroy(), this.banner = null)
                }
            }, {
                key: "showSystemInterstitial",
                value: function (e) {
                    var t = this;
                    this.interstitial.show().then(function () {
                        console.log("UC Interstitial组件显示成功")
                    }).catch(function (e) {
                        console.error("UC Interstitial组件显示失败:", e)
                    }), this.interstitial.onClose(function (i) {
                        (console.log("关闭了插屏广告"), e) && (t.getRandomIntNum(0, 100) < ServerConfig.quitShow && t.showSystemBanner())
                    })
                }
            }, {
                key: "doShare",
                value: function (e, t) {
                    window.uc.shareAppMessage({
                        query: "",
                        target: "wechat",
                        success: function (t) {
                            e && e()
                        },
                        fail: function (e) {
                            t && t()
                        }
                    })
                }
            }, {
                key: "executeSucceedWithVideo",
                value: function () {
                    cc.audioEngine.resumeAll(), cc.director.resume(), this.successCallBack && this.successCallBack(), this.successCallBack = null
                }
            }, {
                key: "executeFailureWithVideo",
                value: function () {
                    cc.audioEngine.resumeAll(), cc.director.resume(), this.failureCallBack && this.failureCallBack(), this.failureCallBack = null
                }
            }]), e
        }();
        i.uc = s, cc._RF.pop()
    }, {}],
    _vivo: [function (e, t, i) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function a(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
        cc._RF.push(t, "61a9eS7dJxFJKD/s9SLVnvm", "_vivo"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.vivo = void 0;
        var s = function () {
            function e() {
                o(this, e), this.nativeIndex = 0, this.video_success = null, this.video_failure = null, console.log("初始化【VIVO】平台"), this.showMoreGame(), this.device = qg.getSystemInfoSync(), this.video = qg.createRewardedVideoAd({
                    posId: App.VIVO.videoCode
                })
            }
            return a(e, [{
                key: "getRandomIntNum",
                value: function (e, t) {
                    var i = t - e,
                        o = Math.random();
                    return e + Math.round(o * i)
                }
            }, {
                key: "getNative",
                value: function (e) {
                    var t = qg.createNativeAd({
                        adUnitId: App.VIVO.nativeCodes[this.nativeIndex]
                    });
                    this.nativeIndex++, this.nativeIndex >= App.VIVO.nativeCodes.length && (this.nativeIndex = 0), t.load().then(function (i) {
                        i.adList ? e({
                            ad: t,
                            res: i
                        }) : console.warn("加载原生广告成功, 但无下发广告信息!!")
                    }).catch(function (t) {
                        console.log("拉取广告信息失败:", t), e(null)
                    })
                }
            }, {
                key: "clearAdvertising",
                value: function () {
                    this.destroySystemBanner(), this.destroyNativeBanner(), this.destroyTemplateInterstitial(), this.destroySystemInterstitial()
                }
            }, {
                key: "showVideo",
                value: function (e, t) {
                    var i = this;
                    this.video && (this.video_success = e, this.video_failure = t, cc.director.pause(), cc.audioEngine.setEffectsVolume(0), cc.audioEngine.setMusicVolume(0), this.video.onClose(function (e) {
                        e && e.isEnded ? (console.log("激励视频播放完毕, 准备下发奖励"), i.video.offClose && i.video.offClose(), i.executeSucceedWithVideo()) : (console.log("激励视频被玩家中途取消"), i.video.offClose && i.video.offClose(), i.executeFailureWithVideo())
                    }), this.video.load().then(function () {
                        i.video.show().then(function () {
                            console.log("视频组件显示成功")
                        }).catch(function (e) {
                            console.error("视频组件显示失败"), i.executeFailureWithVideo()
                        })
                    }).catch(function (e) {
                        console.error("视频组件加载失败"), i.video.offError && i.video.offError(), i.executeFailureWithVideo()
                    }))
                }
            }, {
                key: "getNative",
                value: function (e) {
                    var t = App.VIVO.nativeCodes[this.nativeIndex];
                    this.nativeIndex++, this.nativeIndex >= App.VIVO.nativeCodes.length && (this.nativeIndex = 0);
                    var i = qg.createNativeAd({
                        adUnitId: t
                    });
                    this.nativeIndex++, this.nativeIndex >= App.VIVO.nativeCodes.length && (this.nativeIndex = 0), i.load().then(function (t) {
                        t.adList ? e({
                            ad: i,
                            res: t
                        }) : console.warn("加载原生广告成功, 但无下发广告信息!!")
                    }).catch(function (t) {
                        console.log("拉取广告信息失败:", t), e(null)
                    })
                }
            }, {
                key: "showNativeBanner",
                value: function () {
                    var e = this;
                    this.getNative(function (t) {
                        t ? cc.loader.loadRes("Platform/Prefabs/vivo/vivo-NativeBanner", cc.Prefab, function (e, i) {
                            var o = cc.instantiate(i);
                            cc.director.getScene().addChild(o), o.getComponent("vivo-NativeBanner").initialize(t)
                        }) : e.showSystemBanner()
                    })
                }
            }, {
                key: "destroyNativeBanner",
                value: function () {
                    var e = cc.director.getScene().getChildByName("vivo-NativeBanner");
                    e && e.getComponent("vivo-NativeBanner").executeDestroy()
                }
            }, {
                key: "showSystemBanner",
                value: function () {
                    console.log("显示系统Banner"), this.destroySystemBanner(), this.sBanner = qg.createBannerAd({
                        posId: App.VIVO.bannerCode
                    }), this.sBanner.show().then(function () {
                        console.log("系统Banner显示成功")
                    }).catch(function (e) {
                        console.log("系统Banner显示失败", e)
                    })
                }
            }, {
                key: "destroySystemBanner",
                value: function () {
                    this.sBanner && (this.sBanner.destroy(), this.sBanner = null)
                }
            }, {
                key: "showTemplateInterstitial",
                value: function (e) {
                    var t = this;
                    setTimeout(function () {
                        if (qg.createCustomAd) {
                            var i = App.VIVO.nativeCodes[t.nativeIndex];
                            t.nativeIndex++, t.nativeIndex >= App.VIVO.nativeCodes.length && (t.nativeIndex = 0);
                            var o = t.device.windowWidth,
                                n = t.device.windowHeight;
                            t.tInterstitial = qg.createCustomAd({
                                posId: i,
                                style: {
                                    left: o / 2 - n / 2,
                                    top: n / 2 - (o < n ? o : n) * (525 / 720) / 2
                                }
                            }), t.tInterstitial.show().then(function () {
                                var e = cc.view.getVisibleSize(),
                                    t = new cc.Texture2D,
                                    i = new cc.SpriteFrame;
                                t.initWithData(new Uint8Array([0, 0, 0]), cc.Texture2D.PixelFormat.RGB888, 1, 1, e), i.setTexture(t), i.setRect(cc.rect(0, 0, 20 * e.width, 20 * e.width));
                                var o = new cc.Node;
                                o.opacity = 100, o.addComponent(cc.Sprite).spriteFrame = i, o.name = "Shield", o.addComponent(cc.BlockInputEvents), o.zIndex = 9999, cc.director.getScene().addChild(o);
                                var n = o.addComponent(cc.Widget);
                                n.isAlignLeft = !0, n.isAlignBottom = !0, n.isAlignTop = !0, n.isAlignRight = !0, n.top = 0, n.bottom = 0, n.left = 0, n.right = 0, n.updateAlignment(), console.log(o.width, o.height)
                            }), t.tInterstitial.onError(function (i) {
                                console.log("创建模板插屏失败:", i), t.showSystemInterstitial(e);
                                var o = cc.director.getScene().getChildByName("Shield");
                                o && o.removeFromParent(!0)
                            }), t.tInterstitial.onClose(function () {
                                var i = cc.director.getScene().getChildByName("Shield");
                                (i && i.removeFromParent(!0), e) && (t.getRandomIntNum(0, 100) < ServerConfig.quitShow && t.showSystemBanner())
                            })
                        } else t.showSystemInterstitial(e)
                    }, 1e3 * ServerConfig.yanchiTime)
                }
            }, {
                key: "destroyTemplateInterstitial",
                value: function () {
                    this.tInterstitial && (this.tInterstitial.destroy(), this.tInterstitial = null);
                    var e = cc.director.getScene().getChildByName("Shield");
                    e && e.removeFromParent(!0)
                }
            }, {
                key: "showSystemInterstitial",
                value: function (e) {
                    var t = this;
                    this.sInterstitial = qg.createInterstitialAd({
                        posId: App.VIVO.interstitialCode
                    }), this.sInterstitial.onError(function (i) {
                        (t.sInterstitial.offError(), console.log("创建系统插屏失败:", i), e) && (t.getRandomIntNum(0, 100) < ServerConfig.quitShow && t.showSystemBanner())
                    }), this.sInterstitial.onClose(function () {
                        e && (t.getRandomIntNum(0, 100) < ServerConfig.quitShow && t.showSystemBanner())
                    }), this.sInterstitial.show().then(function () {
                        console.log("系统插屏显示成功...")
                    }).catch(function (e) {
                        console.log("系统插屏显示失败...")
                    })
                }
            }, {
                key: "destroySystemInterstitial",
                value: function () {
                    this.sInterstitial && (this.sInterstitial.destroy(), this.sInterstitial = null)
                }
            }, {
                key: "showMoreGame",
                value: function () {
                    var e = this;
                    if (qg.createBoxPortalAd) {
                        this.clearAdvertising();
                        e.box = qg.createBoxPortalAd({
                            posId: App.VIVO.boxCode,
                            image: "",
                            marginTop: 200
                        }), e.box.show().then(function () {}).catch(function (t) {
                            e.box.destroy()
                        })
                    }
                }
            }, {
                key: "additionDesktop",
                value: function (e) {
                    qg.installShortcut({
                        success: function () {
                            e && (e.active = !1)
                        }
                    })
                }
            }, {
                key: "isAdditionDesktop",
                value: function (e, t) {
                    qg.hasShortcutInstalled({
                        success: function (i) {
                            i ? (console.log("已创建"), e && e()) : (console.log("未创建"), t && t())
                        }
                    })
                }
            }, {
                key: "showToast",
                value: function (e) {
                    window.qg.showToast({
                        title: e,
                        duration: 1500
                    })
                }
            }, {
                key: "doShake",
                value: function (e) {
                    e ? qg.vibrateLong() : qg.vibrateShort()
                }
            }, {
                key: "executeSucceedWithVideo",
                value: function () {
                    cc.director.resume(), cc.audioEngine.setEffectsVolume(1), cc.audioEngine.setMusicVolume(1), this.video_success && this.video_success(), this.video_success = null
                }
            }, {
                key: "executeFailureWithVideo",
                value: function () {
                    cc.director.resume(), cc.audioEngine.setEffectsVolume(1), cc.audioEngine.setMusicVolume(1), this.video_failure && this.video_failure(), this.video_failure = null
                }
            }]), e
        }();
        i.vivo = s, cc._RF.pop()
    }, {}],
    "baidu-Banner": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "b300d3o/3tO4YHYqbnrIaWs", "baidu-Banner"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var e = this;
                this.isAuto = !0, this.itemList = [], this.Left_Border = -68.62, this.control = this.node.getChildByName("mask"), this.content = this.control.getChildByName("content"), this.content.removeAllChildren(!0);
                for (var t = JsonMgr.deepClone(ServerConfig.iconList), i = ServerConfig.iconList.length - 1; i >= ServerConfig.iconList.length - 2; i--) t.unshift(ServerConfig.iconList[i]);
                for (var o = 0; o < 1; o++) t.push(ServerConfig.iconList[o]);
                for (var n = JsonMgr.deepClone(ServerConfig.packageList), a = ServerConfig.packageList.length - 1; a >= ServerConfig.packageList.length - 2; a--) n.unshift(ServerConfig.packageList[a]);
                for (var s = 0; s < 1; s++) n.push(ServerConfig.packageList[s]);
                for (var r = ServerConfig.iconList.length + 2, c = function (i) {
                        var o = new cc.Node;
                        o.tKey = n[i], o.position = cc.v2(e.Left_Border + 130.02 * i, 0), o.setContentSize(cc.size(122.08, 150.08));
                        var a = o.addComponent(cc.Sprite);
                        a.sizeMode = cc.Sprite.SizeMode.CUSTOM, e.content.addChild(o), e.itemList.push(o), cc.loader.load({
                            url: t[i],
                            type: "png"
                        }, function (e, t) {
                            a.spriteFrame = new cc.SpriteFrame(t)
                        })
                    }, l = 0; l < r; l++) c(l);
                this.control.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.control.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this.control.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.control.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.node.active = !1
            },
            update: function (e) {
                if (this.isAuto && !(this.itemList.length <= 0)) {
                    for (var t = 0; t < this.itemList.length; t++) {
                        this.itemList[t].x -= 80 * e
                    }
                    var i = this.itemList[0],
                        o = this.itemList[this.itemList.length - 1];
                    if (i.x < this.Left_Border) {
                        var n = this.itemList.shift();
                        n.position = o.position.add(cc.v2(130.02, 0)), this.itemList.push(n)
                    }
                }
            },
            onTouchStart: function (e) {
                this.isAuto = !1, this.tChild = null;
                for (var t = 0; t < this.itemList.length; t++) {
                    var i = this.itemList[t];
                    if (i.getBoundingBoxToWorld().contains(e.getLocation())) return this.tChild = i, void(this.tChild.scale = .98)
                }
            },
            onTouchMove: function (e) {
                for (var t = e.getDelta(), i = 0; i < this.itemList.length; i++) {
                    this.itemList[i].x += t.x
                }
                var o = this.itemList[0],
                    n = this.itemList[this.itemList.length - 1];
                if (o.x > this.Left_Border) {
                    var a = this.itemList.pop();
                    return a.position = o.position.sub(cc.v2(130.02, 0)), void this.itemList.unshift(a)
                }
                if (o.x < this.Left_Border) {
                    var s = this.itemList.shift();
                    s.position = n.position.add(cc.v2(130.02, 0)), this.itemList.push(s)
                }
            },
            onTouchEnd: function (e) {
                if (this.isAuto = !0, this.tChild) {
                    var t = e.getLocation();
                    if (!(Math.abs(e.getStartLocation().x - t.x) > 60))
                        if (this.tChild.scale = 1, this.tChild.getBoundingBoxToWorld().contains(t) && PlatformCode === PlatformList.百度) {
                            var i = this.tChild.tKey;
                            swan.navigateToMiniProgram({
                                appKey: i
                            })
                        }
                }
            }
        }), cc._RF.pop()
    }, {}],
    "baidu-Interstitial": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "2fbe83DONJMzJoyqpPrQfkS", "baidu-Interstitial"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var e = this;
                if (this.allowRefresh = !1, this.refreshTime = 3, this.drawLocation = cc.v2(-182.9, -93.5), this.itemList = [], this.control = this.node.getChildByName("window").getChildByName("roll"), this.content = this.control.getChildByName("content"), this.content.removeAllChildren(!0), ServerConfig.iconList.length <= 9)
                    for (var t = ServerConfig.iconList.length, i = Math.ceil(t / 3), o = 0; o < i; o++)
                        for (var n = function (i) {
                                var n = 3 * o + i;
                                if (n >= t) return "continue";
                                var a = e.drawLocation.add(cc.v2(182 * i, -207 * o)),
                                    s = new cc.Node;
                                s.tKey = ServerConfig.packageList[n], s.setContentSize(cc.size(152, 187)), s.position = a, e.content.addChild(s), e.itemList.push(s);
                                var r = s.addComponent(cc.Sprite);
                                r.sizeMode = cc.Sprite.SizeMode.CUSTOM, cc.loader.load({
                                    url: ServerConfig.iconList[n],
                                    type: "png"
                                }, function (e, t) {
                                    r.spriteFrame = new cc.SpriteFrame(t)
                                })
                            }, a = 0; a < 3; a++) n(a);
                else {
                    this.allowRefresh = !0, this.tDetail = [];
                    for (var s = ServerConfig.iconList.length > ServerConfig.packageList.length ? ServerConfig.packageList.length : ServerConfig.iconList.length, r = 0; r < s; r++) this.tDetail.push({
                        icon: ServerConfig.iconList[r],
                        package: ServerConfig.packageList[r]
                    });
                    ArrayMgr.randomArray(this.tDetail);
                    for (var c = this.tDetail.slice(0, 9), l = 0; l < 3; l++)
                        for (var d = function (t) {
                                var i = 3 * l + t,
                                    o = e.drawLocation.add(cc.v2(182 * t, -207 * l)),
                                    n = new cc.Node;
                                n.tKey = c[i].package, n.setContentSize(cc.size(152, 187)), n.position = o, e.content.addChild(n), e.itemList.push(n);
                                var a = n.addComponent(cc.Sprite);
                                a.sizeMode = cc.Sprite.SizeMode.CUSTOM, cc.loader.load({
                                    url: c[i].icon,
                                    type: "png"
                                }, function (e, t) {
                                    a.spriteFrame = new cc.SpriteFrame(t)
                                })
                            }, u = 0; u < 3; u++) d(u);
                    this.control.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.control.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.control.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this), this.node.active = !1
                }
            },
            doRefresh: function () {
                var e = this;
                ArrayMgr.randomArray(this.tDetail);
                for (var t = this.tDetail.slice(0, 9), i = function (i) {
                        var o = e.itemList[i];
                        o.tKey = t[i].package;
                        var n = o.getComponent(cc.Sprite);
                        cc.loader.load({
                            url: t[i].icon,
                            type: "png"
                        }, function (e, t) {
                            n.spriteFrame = new cc.SpriteFrame(t)
                        })
                    }, o = 0; o < this.itemList.length; o++) i(o)
            },
            doShow: function (e) {
                this.cHandle = e, this.node.active = !0, this.allowRefresh && (this.refreshTime = 3)
            },
            doHide: function () {
                this.node.active = !1
            },
            update: function (e) {
                this.node.active && this.allowRefresh && (this.refreshTime -= e, this.refreshTime <= 0 && (this.doRefresh(), this.refreshTime = 3))
            },
            onTouchStart: function (e) {
                for (var t = 0; t < this.itemList.length; t++) {
                    var i = this.itemList[t];
                    if (i.getBoundingBoxToWorld().contains(e.getLocation())) return this.tChild = i, void(this.tChild.scale = .98)
                }
            },
            onTouchEnd: function (e) {
                if (this.tChild) {
                    this.tChild.scale = 1;
                    var t = e.getLocation();
                    if (this.tChild.getBoundingBoxToWorld().contains(t) && PlatformCode === PlatformList.百度) {
                        var i = this.tChild.tKey;
                        swan.navigateToMiniProgram({
                            appKey: i
                        })
                    }
                }
            },
            executeCloseWindow: function () {
                var e = this;
                e.cHandle && e.cHandle(), e.node.active = !1
            },
            buttonTouchEventCallBack: function (e) {
                switch (e.target.name) {
                    case "closeButton":
                        this.executeCloseWindow()
                }
            }
        }), cc._RF.pop()
    }, {}],
    "baidu-Single": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "9ae55ssfS5HNrJnX6gk4H3Q", "baidu-Single"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                if (this.node.active = PlatformCode === PlatformList.百度, this.node.active) {
                    if (!ServerConfig.allowSingle) return void(this.node.active = !1);
                    this.doRefresh(), this.schedule(this.doRefresh, 3)
                }
            },
            doRefresh: function () {
                var e = ServerConfig.iconList.length > ServerConfig.packageList.length ? ServerConfig.packageList.length : ServerConfig.iconList.length,
                    t = MathMgr.getRandomNum(0, e);
                this.node.tKey = ServerConfig.packageList[t];
                var i = this.node.getComponent(cc.Sprite);
                cc.loader.load({
                    url: ServerConfig.iconList[t],
                    type: "png"
                }, function (e, t) {
                    i.spriteFrame = new cc.SpriteFrame(t)
                })
            },
            onTouchEventCallBack: function (e) {
                var t = this.node.tKey;
                swan.navigateToMiniProgram({
                    appKey: t
                })
            }
        }), cc._RF.pop()
    }, {}],
    "common-Box": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "c576fS7fdtHjK1IswHfCwQO", "common-Box"), cc.Class({
            extends: cc.Component,
            properties: {
                progressBar: {
                    default: null,
                    type: cc.ProgressBar,
                    displayName: "进度条"
                }
            },
            onLoad: function () {
                this.isTrigger = !1, this.clickSpeed = .18, this.value = 0, this.crazyClickValue = Math.round(10 * Math.random() + 30), this.node.zIndex = 999, adUtils.executeDestroyBanner()
            },
            initialize: function (e) {
                this.nHandle = e
            },
            onCrazyClick: function (e) {
                var t = this;
                this.value += this.clickSpeed, 1 != this.isTrigger && this.value >= this.crazyClickValue / 100 && (this.isTrigger = !0, adUtils.executeShowVideo(function (e) {
                    t.nHandle && (t.nHandle(), t.nextFun = null), t.node.destroy()
                }, function (e) {
                    t.nHandle && (t.nHandle(), t.nextFun = null), t.node.destroy()
                }))
            },
            update: function (e) {
                this.value -= .6 * e * (1 + 1 * this.value), this.value < 0 && (this.value = 0), this.progressBar.progress = this.value
            }
        }), cc._RF.pop()
    }, {}],
    "hw-FlagControl": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "2de91z+SJxDFbCFdlHIHu32", "hw-FlagControl"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                PlatformCode !== PlatformList.华为 && (this.node.active = !1)
            }
        }), cc._RF.pop()
    }, {}],
    "hw-LoginWindow": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "98579TOhrJGLrqpYTPnCzWA", "hw-LoginWindow"), cc.Class({
            extends: cc.Component,
            properties: {},
            registerLoginHandle: function (e) {
                this.handle = e
            },
            buttonTouchEventCallBack: function (e) {
                this.handle && this.handle()
            }
        }), cc._RF.pop()
    }, {}],
    "hw-NativeInterstitial": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "af0dcFnbHZIoKdO9Otkp0/P", "hw-NativeInterstitial"), cc.Class({
            extends: cc.Component,
            properties: {
                Img: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "广告图"
                },
                TitleLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "标题"
                },
                SourceLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "出处"
                }
            },
            onLoad: function () {
                var e = this.node.getChildByName("content");
                this.downButton = e.getChildByName("downButton"), this.downButton.active = !1;
                var t = e.getChildByName("closeButton");
                1 === ServerConfig.closeScale ? t.position = cc.v2(-326, 245) : t.position = cc.v2(-326, 165), t.width = 38 * ServerConfig.closeScale, t.height = 38 * ServerConfig.closeScale
            },
            initialize: function (e, t) {
                var i = this;
                this.data = e, this.eHandle = t;
                var o = this.data.res.adList.pop();
                this.id = o.adId;
                var n = o.imgUrlList.pop();
                this.executeReport(), this.TitleLabel.string = o.title, this.SourceLabel.string = o.source, 101 !== o.creativeType && 102 !== o.creativeType && 103 !== o.creativeType && 106 !== o.creativeType && 107 !== o.creativeType && 108 !== o.creativeType && 110 !== o.creativeType || (this.downButton.active = !0);
                var a = StringMgr.getExtensionName(n);
                "png" !== a && "jpg" !== a && (a = "png"), cc.loader.load({
                    url: n,
                    type: a
                }, function (e, t) {
                    i.Img.spriteFrame = new cc.SpriteFrame(t)
                })
            },
            executeReport: function () {
                this.data.ad.reportAdShow({
                    adId: this.id
                })
            },
            executeDestroy: function () {
                this.data.ad.destroy(), this.node.removeFromParent(!0)
            },
            executeClose: function () {
                this.eHandle && this.eHandle(), this.executeDestroy()
            },
            executeTouch: function () {
                this.data.ad.reportAdClick({
                    adId: this.id
                }), this.eHandle && this.eHandle(), this.executeDestroy()
            },
            buttonTouchEventCallBack: function (e) {
                switch (e.target.name) {
                    case "closeButton":
                        this.executeClose();
                        break;
                    case "content":
                    case "downButton":
                        this.executeTouch()
                }
            }
        }), cc._RF.pop()
    }, {}],
    "mz-DelayControl": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "856a4DW9CpNk5WDaDUh/zZe", "mz-DelayControl"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.allowDelay = !0, PlatformCode !== PlatformList.魅族 && (this.allowDelay = !1, this.node.active = !0)
            },
            start: function () {
                var e = this;
                this.allowDelay && (ServerConfig.guanBiYanChi && ServerConfig.guanBiYanChi > 0 ? (this.node.active = !1, cc.tween(this.node).delay(ServerConfig.guanBiYanChi).call(function () {
                    e.node.active = !0
                }).start()) : this.node.active = !0)
            }
        }), cc._RF.pop()
    }, {}],
    "mz-NativeInterstitial": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "b60c9FlZCtCRoN/mDXT2XPb", "mz-NativeInterstitial"), cc.Class({
            extends: cc.Component,
            properties: {
                NativeImg: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "原生图"
                },
                CloseButton: {
                    default: null,
                    type: cc.Node,
                    displayName: "关闭按钮"
                }
            },
            onLoad: function () {
                ServerConfig.closeScale && (this.CloseButton.width = 38 * ServerConfig.closeScale, this.CloseButton.height = 38 * ServerConfig.closeScale)
            },
            initialize: function (e, t) {
                var i = this;
                console.log("初始化[OPPO]原生插屏"), this.data = e, this.eHandle = t;
                var o = this.data.res.adList.pop();
                this.id = o.adId;
                var n = o.imgUrlList.pop();
                this.data.ad.reportAdShow({
                    adId: this.id
                });
                var a = StringMgr.getExtensionName(n);
                "png" !== a && "jpg" !== a && (a = "png"), cc.loader.load({
                    url: n,
                    type: a
                }, function (e, t) {
                    e ? i.node.removeFromParent(!0) : i.NativeImg.spriteFrame = new cc.SpriteFrame(t)
                })
            },
            executeDestroy: function () {
                this.data.ad.destroy(), this.node.removeFromParent(!0)
            },
            executeClose: function () {
                this.eHandle && this.eHandle(), this.executeDestroy()
            },
            executeTouch: function () {
                this.data.ad.reportAdClick({
                    adId: this.id
                }), this.eHandle && this.eHandle(), this.executeDestroy()
            },
            buttonTouchEventCallBack: function (e) {
                switch (e.target.name) {
                    case "closeButton":
                        this.executeClose();
                        break;
                    case "nativeButton":
                    case "window":
                        this.executeTouch()
                }
            }
        }), cc._RF.pop()
    }, {}],
    "mz-ToggleControl": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "7eb2ayDI5VBY6rDKnYGN67S", "mz-ToggleControl"), cc.Class({
            extends: cc.Component,
            properties: {
                ControlList: {
                    default: [],
                    type: cc.Node,
                    displayName: "控制节点"
                }
            },
            onLoad: function () {
                this.toggle = this.node.getComponent(cc.Toggle)
            },
            toggleTouchCallBack: function (e) {
                this.ControlList[0].active = !e.isChecked, this.ControlList[1].active = e.isChecked
            },
            start: function () {
                var e = MathMgr.getRandomNum(0, 100);
                this.toggle.isChecked = e < ServerConfig.fuXuanKuang, this.ControlList[0].active = !this.toggle.isChecked, this.ControlList[1].active = this.toggle.isChecked
            }
        }), cc._RF.pop()
    }, {}],
    "oppo-BoxItem": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "6b430NKecZOYZZTTnlJtrqT", "oppo-BoxItem"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.button = this.node.getComponent(cc.Button), this.node.isOpen = !1, this.img = this.node.getComponent(cc.Sprite), this.award = this.node.getChildByName("num").getComponent(cc.Label), this.boxImg = this.node.getChildByName("New Node").getChildByName("box"), this.boxImg.active = !0;
                var e = this.node.getChildByName("halo");
                e.scale = .8, cc.tween(e).repeatForever(cc.tween().by(.1, {
                    angle: 15
                })).start();
                var t = function (e) {
                        var t = cc.scaleTo(e.time, e.scale_x, e.scale_y),
                            i = cc.fadeIn(e.time);
                        return cc.spawn(t, i)
                    },
                    i = t({
                        time: .18,
                        scale_x: .63,
                        scale_y: 1.3,
                        scale_z: 1
                    }),
                    o = t({
                        time: .36,
                        scale_x: 1.1,
                        scale_y: .7,
                        scale_z: 1
                    }),
                    n = t({
                        time: .07 * 3,
                        scale_x: .8,
                        scale_y: 1.1,
                        scale_z: 1
                    }),
                    a = t({
                        time: .07 * 3,
                        scale_x: 1.1,
                        scale_: .95,
                        scale_z: 1
                    }),
                    s = t({
                        time: .07 * 3,
                        scale_x: 1,
                        scale_y: 1,
                        scale_z: 1
                    }),
                    r = cc.tween().sequence(i, o, n, a, s);
                cc.tween(this.boxImg).repeatForever(r).start(), this.flag = this.node.getChildByName("New Node").getChildByName("flag"), this.flag.active = !1
            },
            doOpen: function (e) {
                var t = this;
                this.button.enabled = !1, this.node.isOpen = !0, cc.loader.loadRes("Platform/Textures/oppo/oppo-mutual-gold", cc.SpriteFrame, function (e, i) {
                    cc.Tween.stopAllByTarget(t.boxImg), t.boxImg.parent.position = cc.v2(0, 20), t.boxImg.getComponent(cc.Sprite).spriteFrame = i, t.boxImg.scale = 1
                }), cc.loader.loadRes("Platform/Textures/oppo/oppo-mutual-item-2", cc.SpriteFrame, function (i, o) {
                    t.flag.active = !1, t.img.spriteFrame = o, t.award.string = e
                })
            },
            showVideoFlag: function () {
                this.node.isOpen || (this.flag.active = !0)
            },
            registerTouchEvent: function (e) {
                this.touch_handle = e
            },
            buttonTouchEventCallBack: function (e) {
                this.node.isOpen || this.touch_handle && this.touch_handle(this)
            }
        }), cc._RF.pop()
    }, {}],
    "oppo-CustomNative": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "e1f1cKWNblLhJ9Fey8eU3Jm", "oppo-CustomNative"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                if (PlatformCode !== PlatformList.OPPO) return console.log("隐藏"), void(this.node.active = !1);
                this.Img = this.node.getChildByName("img").getComponent(cc.Sprite), this.Img.spriteFrame = null, this.button = this.node.getChildByName("lookButton"), this.button.active = !1
            },
            start: function () {
                var e = this;
                adUtils.getNativeMessage(function (t) {
                    if (t) {
                        e.ad = t.ad;
                        var i = t.res.adList.pop();
                        e.id = i.adId;
                        var o = i.imgUrlList.pop(),
                            n = StringMgr.getExtensionName(o);
                        "png" !== n && "jpg" !== n && (n = "png"), cc.loader.load({
                            url: o,
                            type: n
                        }, function (t, i) {
                            t ? e.node.active = !1 : (e.ad.reportAdShow({
                                adId: e.id
                            }), e.NativeImg.spriteFrame = new cc.SpriteFrame(i))
                        })
                    } else e.node.active = !1
                })
            },
            executeClose: function () {
                this.ad.destroy(), this.node.removeFromParent(!0)
            },
            executeTouch: function () {
                this.ad.reportAdClick({
                    adId: this.id
                }), this.executeClose()
            },
            buttonTouchEventCallBack: function (e) {
                switch (e.target.name) {
                    case "closeButton":
                        this.executeClose();
                        break;
                    case "lookButton":
                    case "img":
                        this.executeTouch()
                }
            }
        }), cc._RF.pop()
    }, {}],
    "oppo-NativeBanner": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "4b37bsDAMBOk7YawZ9lfsL7", "oppo-NativeBanner"), cc.Class({
            extends: cc.Component,
            properties: {
                NativeImg: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "底图"
                },
                CloseButton: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "关闭按钮"
                }
            },
            onLoad: function () {
                ServerConfig.closeScale && (this.CloseButton.width = 38 * ServerConfig.closeScale, this.CloseButton.height = 38 * ServerConfig.closeScale)
            },
            initialize: function (e) {
                var t = this;
                this.data = e;
                var i = this.data.res.adList.pop();
                this.id = i.adId;
                var o = i.imgUrlList.pop();
                this.data.ad.reportAdShow({
                    adId: this.id
                });
                var n = StringMgr.getExtensionName(o);
                "png" !== n && "jpg" !== n && (n = "png"), cc.loader.load({
                    url: o,
                    type: n
                }, function (e, i) {
                    e ? t.node.removeFromParent(!0) : t.NativeImg.spriteFrame = new cc.SpriteFrame(i)
                })
            },
            executeDestroy: function () {
                console.log("executeDestroy"), this.data.ad.destroy(), this.node.removeFromParent(!0)
            },
            executeClose: function () {
                console.log("executeClose"), this.executeDestroy()
            },
            executeTouch: function () {
                console.log("executeTouch"), this.data.ad.reportAdClick({
                    adId: this.id
                }), this.executeDestroy()
            },
            buttonTouchEventCallBack: function (e) {
                switch (e.target.name) {
                    case "oppo-NativeBanner":
                        this.executeTouch();
                        break;
                    case "closeButton":
                        this.executeClose()
                }
            }
        }), cc._RF.pop()
    }, {}],
    "oppo-NativeInterstitial": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "c9363PUOmRA64+gC++L45Xk", "oppo-NativeInterstitial"), cc.Class({
            extends: cc.Component,
            properties: {
                NativeImg: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "原生图"
                },
                CloseButton: {
                    default: null,
                    type: cc.Node,
                    displayName: "关闭按钮"
                }
            },
            onLoad: function () {
                ServerConfig.closeScale && (this.CloseButton.width = 38 * ServerConfig.closeScale, this.CloseButton.height = 38 * ServerConfig.closeScale)
            },
            initialize: function (e, t) {
                var i = this;
                console.log("初始化[OPPO]原生插屏"), this.data = e, this.eHandle = t;
                var o = this.data.res.adList.pop();
                this.id = o.adId;
                var n = o.imgUrlList.pop();
                this.data.ad.reportAdShow({
                    adId: this.id
                });
                var a = StringMgr.getExtensionName(n);
                "png" !== a && "jpg" !== a && (a = "png"), cc.loader.load({
                    url: n,
                    type: a
                }, function (e, t) {
                    e ? i.node.removeFromParent(!0) : i.NativeImg.spriteFrame = new cc.SpriteFrame(t)
                })
            },
            executeDestroy: function () {
                this.data.ad.destroy(), this.node.removeFromParent(!0)
            },
            executeClose: function () {
                this.eHandle && this.eHandle(), this.executeDestroy()
            },
            executeTouch: function () {
                this.data.ad.reportAdClick({
                    adId: this.id
                }), this.eHandle && this.eHandle(), this.executeDestroy()
            },
            buttonTouchEventCallBack: function (e) {
                switch (e.target.name) {
                    case "closeButton":
                        this.executeClose();
                        break;
                    case "nativeButton":
                    case "window":
                        this.executeTouch()
                }
            }
        }), cc._RF.pop()
    }, {}],
    "oppo-PopupWindow": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "c50a7RiDeZNR6exEiaiwSL0", "oppo-PopupWindow"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var e = this.node.getChildByName("native").getChildByName("closeButton");
                ServerConfig.closeScale && (e.width = 39 * ServerConfig.closeScale, e.width = 40 * ServerConfig.closeScale), this.nImg = this.node.getChildByName("native").getChildByName("img").getComponent(cc.Sprite), this.nImg.spriteFrame = null, this.awardList = [50, 75, 100, 150, 200, 250, 300, 500, 1e3], this.openCount = 0;
                var t = this.node.getChildByName("body"),
                    i = t.getChildByName("window").getChildByName("content").children;
                this.boxList = [];
                for (var o = 0; o < i.length; o++) {
                    i[o].getComponent("oppo-BoxItem").registerTouchEvent(this.openBoxHandle.bind(this)), this.boxList.push(i[o])
                }
                this.lookButton = t.getChildByName("below").getChildByName("button").getChildByName("lookButton"), this.openButton = t.getChildByName("below").getChildByName("button").getChildByName("openButton"), this.waiveButton = t.getChildByName("below").getChildByName("waiveButton"), this.openButton.active = !1, this.waiveButton.active = !1
            },
            initialize: function (e, t, i, o) {
                var n = this;
                this.waive_handle = t, this.touch_handle = i, this.close_handle = o;
                var a = StringMgr.getExtensionName(e);
                "png" !== a && "jpg" !== a && (a = "png"), cc.loader.load({
                    url: e,
                    type: a
                }, function (e, t) {
                    e ? n.node.getChildByName("native").removeFromParent(!0) : n.nImg.spriteFrame = new cc.SpriteFrame(t)
                })
            },
            openBoxHandle: function (e) {
                var t = this,
                    i = function () {
                        if (e.doOpen(t.awardList[t.openCount]), t.openCount++, t.openCount >= 3 && !t.openButton.active) {
                            t.openButton.active = !0, t.waiveButton.active = !0;
                            for (var i = 0; i < t.boxList.length; i++) {
                                t.boxList[i].getComponent("oppo-BoxItem").showVideoFlag()
                            }
                        }
                        t.openCount >= 9 && (t.lookButton.active = !1, t.scheduleOnce(function () {
                            t.node.removeFromParent(!0)
                        }, .5))
                    };
                this.openCount >= 3 ? adUtils.executeShowVideo(i) : i()
            },
            executeOpen: function () {
                var e = this;
                adUtils.executeShowVideo(function () {
                    for (var t = [], i = 0; i < e.boxList.length; i++) {
                        var o = e.boxList[i];
                        o.isOpen || t.push(o)
                    }
                    if (!(t.length <= 0)) {
                        for (var n = t.slice(0, 3), a = 0; a < n.length; a++) n[a].getComponent("oppo-BoxItem").doOpen(e.awardList[e.openCount]), e.openCount++;
                        e.openCount >= 9 && (e.lookButton.active = !1, e.scheduleOnce(function () {
                            e.node.removeFromParent(!0)
                        }, .5))
                    }
                })
            },
            buttonTouchEventCallBack: function (e) {
                switch (e.target.name) {
                    case "closeButton":
                        console.log("closeButton"), this.lookButton.active = !1, this.waiveButton.active = !0, this.close_handle && this.close_handle(this.node.getChildByName("native"));
                        break;
                    case "lookButton":
                    case "native":
                        console.log("lookButton"), this.lookButton.active = !1, this.waiveButton.active = !0, this.touch_handle && this.touch_handle(this.node.getChildByName("native"));
                        break;
                    case "openButton":
                        this.executeOpen();
                        break;
                    case "waiveButton":
                        this.waive_handle && this.waive_handle(this.node)
                }
            }
        }), cc._RF.pop()
    }, {}],
    "oppo-SpecialBanner": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "50df8dvT65MTKmBpjztTLGZ", "oppo-SpecialBanner"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.NativeImg = this.node.getChildByName("content").getChildByName("img").getComponent(cc.Sprite), this.NativeImg.spriteFrame = null
            },
            initialize: function (e, t, i, o) {
                var n = this;
                this.next_handle = t, this.touch_handle = i, this.close_handle = o;
                var a = StringMgr.getExtensionName(e);
                "png" !== a && "jpg" !== a && (a = "png"), cc.loader.load({
                    url: e,
                    type: a
                }, function (e, t) {
                    e ? n.node.removeFromParent(!0) : n.NativeImg.spriteFrame = new cc.SpriteFrame(t)
                })
            },
            executeTouch: function () {
                console.log("查看广告"), this.touch_handle && this.touch_handle(this.node.getChildByName("content"))
            },
            buttonTouchEventCallBack: function (e) {
                switch (e.target.name) {
                    case "img":
                        this.executeTouch();
                        break;
                    case "closeButton":
                        this.close_handle && this.close_handle(this.node.getChildByName("content"));
                        break;
                    case "nextButton":
                        this.next_handle && this.next_handle()
                }
            }
        }), cc._RF.pop()
    }, {}],
    "vivo-NativeBanner": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "6c2ab2oDPZBNpW5Vv6c1m1q", "vivo-NativeBanner"), cc.Class({
            extends: cc.Component,
            properties: {
                NativeImg: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "底图"
                },
                CloseButton: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "关闭按钮"
                }
            },
            onLoad: function () {
                ServerConfig.closeScale && (this.CloseButton.width = 38 * ServerConfig.closeScale, this.CloseButton.height = 38 * ServerConfig.closeScale)
            },
            initialize: function (e) {
                var t = this;
                this.data = e;
                var i = this.data.res.adList.pop();
                this.id = i.adId;
                var o = i.imgUrlList.pop();
                this.data.ad.reportAdShow({
                    adId: this.id
                });
                var n = StringMgr.getExtensionName(o);
                "png" !== n && "jpg" !== n && (n = "png"), cc.loader.load({
                    url: imgPath,
                    type: n
                }, function (e, i) {
                    t.NativeImg.spriteFrame = new cc.SpriteFrame(i)
                })
            },
            executeDestroy: function () {
                this.data.ad.destroy(), this.node.removeFromParent(!0)
            },
            executeClose: function () {
                this.executeDestroy()
            },
            executeTouch: function () {
                console.log("executeTouch"), this.data.ad.reportAdClick({
                    adId: this.id
                }), this.executeDestroy()
            },
            buttonTouchEventCallBack: function (e) {
                switch (e.target.name) {
                    case "vivo-NativeBanner":
                        this.executeTouch();
                        break;
                    case "closeButton":
                        this.executeClose()
                }
            }
        }), cc._RF.pop()
    }, {}],
    "vivo-NativeInterstitial": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "72f5daPZB1N0J4wc7fDaAbl", "vivo-NativeInterstitial"), cc.Class({
            extends: cc.Component,
            properties: {
                NativeImg: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "原生图"
                },
                CloseButton: {
                    default: null,
                    type: cc.Node,
                    displayName: "关闭按钮"
                }
            },
            onLoad: function () {
                ServerConfig.closeScale && (this.CloseButton.width = 38 * ServerConfig.closeScale, this.CloseButton.height = 38 * ServerConfig.closeScale)
            },
            initialize: function (e, t, i) {
                var o = this;
                this.touch_handle = t, this.close_handle = i;
                var n = StringMgr.getExtensionName(e);
                "png" !== n && "jpg" !== n && (n = "png"), cc.loader.load({
                    url: e,
                    type: n
                }, function (e, t) {
                    o.NativeImg.spriteFrame = new cc.SpriteFrame(t)
                })
            },
            executeClose: function () {
                this.close_handle && this.close_handle()
            },
            executeTouch: function () {
                this.touch_handle && this.touch_handle()
            },
            buttonTouchEventCallBack: function (e) {
                switch (e.target.name) {
                    case "closeButton":
                        this.executeClose();
                        break;
                    case "nativeButton":
                    case "window":
                        this.executeTouch()
                }
            }
        }), cc._RF.pop()
    }, {}],
    "yj-Adapter": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "0fb2eeUAqZID6lvPPWyHmM4", "yj-Adapter"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                var e = this;
                PlatformCode === PlatformList.游家 ? (cc.game.addPersistRootNode(this.node), cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
                    e.up_SceneFit()
                }), this.node.zIndex = 999) : this.node.destroy()
            },
            up_SceneFit: function () {
                console.log("更新场景适配");
                var e = cc.director.getScene().getChildByName("Canvas").getComponent(cc.Canvas);
                e.fitHeight = !0, e.fitWidth = !0
            }
        }), cc._RF.pop()
    }, {}],
    "yj-FlagControl": [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "7f494a0Qb9E+pt2MusDuXI0", "yj-FlagControl"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.node.active = PlatformCode === PlatformList.游家
            }
        }), cc._RF.pop()
    }, {}]
}, {}, ["Config", "AlertWindow", "AutoRollControl", "DisplayControl", "FrameAnimationControl", "LineButton", "LoginRecord", "MessageItem", "MoveAction", "NumberControl", "OpacityAction", "RotateAction", "ShareWindow", "TimeControl", "Utils", "ZoomAction", "LoadScript", "DragonItem", "FloorItem", "NumberItem", "PlayerItem", "SplashItem", "ThunderItem", "TowerItem", "UnitItem", "MainScript", "FailureWindow", "VictoryWindow", "WeaponWindow", "LevelItem", "PageItem", "MenuScript", "LevelWindow", "LoginWindow", "PushWindow", "SupplyWindow", "PlatformConst", "DisplayItem", "SkinScript", "User", "PlatformUtils", "yj-Adapter", "yj-FlagControl", "AgreementButton", "AgreementWindow", "ChildrenControl", "GuidanceItem", "HealthControl", "ShareControl", "TDHttps", "baidu-Banner", "baidu-Interstitial", "baidu-Single", "common-Box", "hw-FlagControl", "hw-LoginWindow", "hw-NativeInterstitial", "mz-DelayControl", "mz-NativeInterstitial", "mz-ToggleControl", "oppo-BoxItem", "oppo-CustomNative", "oppo-NativeBanner", "oppo-NativeInterstitial", "oppo-PopupWindow", "oppo-SpecialBanner", "vivo-NativeBanner", "vivo-NativeInterstitial", "_4399", "_baidu", "_bytedance", "_huawei", "_meizu", "_oppo", "_quick", "_tencent", "_uc", "_vivo"]);