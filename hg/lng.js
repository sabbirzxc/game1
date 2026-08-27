
var Language;
var LngJson;

window.initLng = function(kind) {
    //json文件的路径
    var url = "hg/Language.json" 
    var request = new XMLHttpRequest();
    //设置请求方法及路径
    request.open("get", url);
    //不将数据返回到服务器
    request.send(null);
    request.onload = function() { //XHR对象获取到返回信息后执行此函数
        if (request.status == 200) { //返回状态为200，即为数据获取成功
            LngJson = JSON.parse(request.responseText);
            console.log("language init ok")

            Language = "en-us"; //"en-us"
        }

        if (typeof (hg) != "undefined") {
            var systemInfo = hg.getSystemInfoSync();
            console.log("---------------getSystemInfoSync", JSON.stringify(systemInfo));
            if (systemInfo && systemInfo.language) {
                //多语言支持
                // systemInfo.language = "en-us";
                var supportArr = ["cn", "en-us", "id", "vi", "pt-br"];
                var language = systemInfo.language;
                if (supportArr.indexOf(language) == -1)
                    language = "en-us";
                Language = language;
            }
        }

        // Language = "pt-br"
        // Language = "cn"

        if(Language == "cn") {
            Language = "key"
        }
        // hg.gameLoadResult && hg.gameLoadResult({ code : 0})
    }
}

window.getLng = function(key,replaceVal) {
    var cfg = LngJson[key];
    var str = key;  
    if(cfg) {
        // console.warn("no lng",key)
        str = cfg[Language];
    }
    if(replaceVal != null) {
        str = str.replace(/%s/g, replaceVal);
    }
    return str;
}

window.labelLanguage = function(node,name,key) {
    var subnode;
    var arr = name.split("/");
    for(var i=0;i<arr.length;i++)
    {
        subnode = node.getChildByName(arr[i])
    }
    var lbl = subnode.getComponent(cc.Label);
    var str = getLng(key||lbl.string)
    lbl.string = str
}