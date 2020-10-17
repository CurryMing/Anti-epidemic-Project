var epidemicData = null
var cityName = ''
var barBox = document.getElementById('bar_box')

// 测试数据sssssssssss
var gdData = [
    {
        "cityName": "广州",
        "currentConfirmedCount": 24,
        "confirmedCount": 747,
        "suspectedCount": 9,
        "curedCount": 722,
        "deadCount": 1,
        "locationId": 440100
    },
    {
        "cityName": "湛江",
        "currentConfirmedCount": 2,
        "confirmedCount": 30,
        "suspectedCount": 2,
        "curedCount": 28,
        "deadCount": 0,
        "locationId": 440800
    },
    {
        "cityName": "佛山",
        "currentConfirmedCount": 1,
        "confirmedCount": 102,
        "suspectedCount": 1,
        "curedCount": 101,
        "deadCount": 0,
        "locationId": 440600
    },
    {
        "cityName": "东莞",
        "currentConfirmedCount": 1,
        "confirmedCount": 101,
        "suspectedCount": 0,
        "curedCount": 99,
        "deadCount": 1,
        "locationId": 441900
    },
    {
        "cityName": "深圳",
        "currentConfirmedCount": 0,
        "confirmedCount": 471,
        "suspectedCount": 1,
        "curedCount": 468,
        "deadCount": 3,
        "locationId": 440300
    },
    {
        "cityName": "珠海",
        "currentConfirmedCount": 0,
        "confirmedCount": 110,
        "suspectedCount": 1,
        "curedCount": 109,
        "deadCount": 1,
        "locationId": 440400
    },
    {
        "cityName": "中山",
        "currentConfirmedCount": 0,
        "confirmedCount": 69,
        "suspectedCount": 0,
        "curedCount": 69,
        "deadCount": 0,
        "locationId": 442000
    },
    {
        "cityName": "惠州",
        "currentConfirmedCount": 0,
        "confirmedCount": 62,
        "suspectedCount": 0,
        "curedCount": 62,
        "deadCount": 0,
        "locationId": 441300
    },
    {
        "cityName": "汕头",
        "currentConfirmedCount": 0,
        "confirmedCount": 26,
        "suspectedCount": 0,
        "curedCount": 26,
        "deadCount": 0,
        "locationId": 440500
    },
    {
        "cityName": "江门",
        "currentConfirmedCount": 0,
        "confirmedCount": 24,
        "suspectedCount": 0,
        "curedCount": 24,
        "deadCount": 0,
        "locationId": 440700
    },
    {
        "cityName": "肇庆",
        "currentConfirmedCount": 0,
        "confirmedCount": 20,
        "suspectedCount": 0,
        "curedCount": 19,
        "deadCount": 1,
        "locationId": 441200
    },
    {
        "cityName": "梅州",
        "currentConfirmedCount": 0,
        "confirmedCount": 17,
        "suspectedCount": 0,
        "curedCount": 17,
        "deadCount": 0,
        "locationId": 441400
    },
    {
        "cityName": "阳江",
        "currentConfirmedCount": 0,
        "confirmedCount": 14,
        "suspectedCount": 0,
        "curedCount": 14,
        "deadCount": 0,
        "locationId": 441700
    },
    {
        "cityName": "茂名",
        "currentConfirmedCount": 0,
        "confirmedCount": 14,
        "suspectedCount": 0,
        "curedCount": 14,
        "deadCount": 0,
        "locationId": 440900
    },
    {
        "cityName": "清远",
        "currentConfirmedCount": 0,
        "confirmedCount": 12,
        "suspectedCount": 0,
        "curedCount": 12,
        "deadCount": 0,
        "locationId": 441800
    },
    {
        "cityName": "揭阳",
        "currentConfirmedCount": 0,
        "confirmedCount": 11,
        "suspectedCount": 0,
        "curedCount": 11,
        "deadCount": 0,
        "locationId": 445200
    },
    {
        "cityName": "韶关",
        "currentConfirmedCount": 0,
        "confirmedCount": 10,
        "suspectedCount": 0,
        "curedCount": 9,
        "deadCount": 1,
        "locationId": 440200
    },
    {
        "cityName": "潮州",
        "currentConfirmedCount": 0,
        "confirmedCount": 7,
        "suspectedCount": 0,
        "curedCount": 7,
        "deadCount": 0,
        "locationId": 445100
    },
    {
        "cityName": "汕尾",
        "currentConfirmedCount": 0,
        "confirmedCount": 6,
        "suspectedCount": 0,
        "curedCount": 6,
        "deadCount": 0,
        "locationId": 441500
    },
    {
        "cityName": "河源",
        "currentConfirmedCount": 0,
        "confirmedCount": 5,
        "suspectedCount": 0,
        "curedCount": 5,
        "deadCount": 0,
        "locationId": 441600
    },
    {
        "cityName": "待明确地区",
        "currentConfirmedCount": -1,
        "confirmedCount": 0,
        "suspectedCount": 0,
        "curedCount": 1,
        "deadCount": 0,
        "locationId": 0
    },
    {
        "cityName": "云浮",
        "currentConfirmedCount": 0,
        "confirmedCount": 0,
        "suspectedCount": 0,
        "curedCount": 0,
        "deadCount": 0,
        "locationId": 0
    },
]
var posIndex = 0
var rumorData = [
    {
        "id": "52a7cb98ec05cb2dcd682d8730fdf277",
        "date": "2020-08-19",
        "title": "大数据显示，新冠并没有造成更多人死亡",
        "explain": "谣言",
        "imgsrc": "//jiaozhen-70111.picnjc.qpic.cn/7tJ7zKNSRcPN2SumvWkVwj?",
        "markstyle": "fake",
        "url": "https://vp.fact.qq.com/article?id=52a7cb98ec05cb2dcd682d8730fdf277",
        "desc": "作者提供的每一个图表或说法，都有离谱的错误或编造的痕迹。实际上，疫情期间美国总死亡人数比正常年份高出了15%以上。\n作者宣称“英国死亡人数无异常”，实际上错误解读了数据。根据英国权威媒体统计，在疫情高峰期，英国的死亡率上升了45%。\n流传文章关于美国这部分，很大程度其实是翻译改写自一篇不靠谱的美国博客文章——除了宣扬错误数据和结论外，还拒绝疫苗。而中文译者在原文的基础上以个人喜好加上了诸多离谱想象。\n作者宣称瑞典在社会运转如常的情况下，取得了理想的防疫成绩。实际上：瑞典是欧洲最后一批走出疫情的国家；瑞典并非不检测、不隔离、不收治；瑞典的新冠死亡率在国情类似的北欧国家中显得非常高。",
        "author": "国际谣言查证机构"
    },
    {
        "id": "4b2de35c66fdcfd36b8bf3183dec6d73",
        "date": "2020-08-18",
        "title": "普京女儿注射疫苗后高烧不治身亡",
        "explain": "谣言",
        "imgsrc": "//jiaozhen-70111.picnjc.qpic.cn/syDkMCEWzApcypBsrhj1nd?imageView2/2/w/150/h/90",
        "markstyle": "fake",
        "url": "https://vp.fact.qq.com/article?id=4b2de35c66fdcfd36b8bf3183dec6d73",
        "desc": "俄罗斯Tsargrad电视台网站17日报道称，加拿大媒体“今日多伦多”当日发表了一篇俄罗斯总统普京女儿的所谓“独家新闻”，有关注射新冠疫苗后高烧不治身亡的消息，随后删除了这条假新闻。原文是一篇详细但完全虚假的文章。对于特定读者来说，加拿大网站显然创造了一个骗局。",
        "author": "人民日报海外版官方网站"
    },
    {
        "id": "a15fd960093ece8897fae7c76eeb3699",
        "date": "2020-08-16",
        "title": "新冠病毒会感染中耳组织",
        "explain": "尚无定论",
        "imgsrc": "//jiaozhen-70111.picnjc.qpic.cn/vK7oWDpbJYG7KBsPpzkTYP?imageView2/2/w/150/h/90",
        "markstyle": "doubt",
        "url": "https://vp.fact.qq.com/article?id=a15fd960093ece8897fae7c76eeb3699",
        "desc": "近日，发表在《美国医学会杂志·耳鼻喉科-头和颈外科学卷》的一项研究中，科研人员从新冠患者尸体的乳突骨及中耳部位检测到了新冠病毒，说明新冠病毒确实可能出现在患者耳部。\n实验中虽然在中耳检测到了新冠病毒，但并不能得出新冠病毒会感染中耳组织的结论。虽然此前也有个别新冠患者出现听力下降症状的报道，但是具体的原因仍不清楚，还需要进行更多的研究。\n耳部出现新冠病毒提示耳鼻喉科医护人员在手术过程中也需要进行额外的防护。不过耳朵并不和外界进行大量气体或物质交换，也不是病毒进行传播的有效途径，所以我们不必过分担心，也无需针对患者的耳部进行格外防护。",
        "author": "韩越"
    },
    {
        "id": "a7faa0054a1a5a45acef142102c4100b",
        "date": "2020-08-13",
        "title": "新冠灭活疫苗已开卖，498元一支，总共打3支",
        "explain": "谣言",
        "imgsrc": "//jiaozhen-70111.picnjc.qpic.cn/bujNi34r78nAT3rFhfeZLe?imageView2/2/w/150/h/90",
        "markstyle": "fake",
        "url": "https://vp.fact.qq.com/article?id=a7faa0054a1a5a45acef142102c4100b",
        "desc": "上观新闻记者致电网传疫苗的生产方北京科兴中维生物技术有限公司，相关负责人表示目前疫苗正在巴西、孟加拉国等国家进行三期临床研究，还没有上市。记者又致电武汉生物制品研究所有限责任公司，相关负责人表示目前疫苗还在临床试验阶段，没有上市。可见，网传两款新冠疫苗都没有上市，不存在一些人员先期接种，在朋友圈兜售就更不可能。\n记者也了解到，疫苗的药品追溯码是100%全覆盖的。处于临床研究的疫苗可以查到追溯码，但有追溯码不代表已上市。",
        "author": "解放日报•上观新闻运营的辟谣新闻和辟谣服务网络平台"
    },
    {
        "id": "d46e41da0bb73fbd37a1cc57acd6fc15",
        "date": "2020-08-13",
        "title": "水是新冠病毒的重大弱点",
        "explain": "谣言",
        "imgsrc": "//jiaozhen-70111.picnjc.qpic.cn/oTWCxzz2bpe4cazPKhG6cp?imageView2/2/w/150/h/90",
        "markstyle": "fake",
        "url": "https://vp.fact.qq.com/article?id=d46e41da0bb73fbd37a1cc57acd6fc15",
        "desc": "报道中的研究发现：室温水可以在24小时内杀死90%的新冠病毒，沸水能“立即且完全”杀死新冠病毒。其实，新冠病毒离开宿主细胞后一定会失去活性这是已知的，“沸水”条件下失活更快也是已知的。至于具体的失活时间，由于没有相关的研究支持，报道内容并不可信。\n报道中还提到氯化水是杀死新冠病毒的“高效”水。其实新冠疫情期间我们一直在使用含氯消毒剂进行消毒，氯化物会影响病毒活性也是已知事实。水本身称不上是“新冠病毒的重大弱点”，俄罗斯科学家的这一发现也算不上是“发现”。",
        "author": "中国科学院生物学博士"
    },
    {
        "id": "c903972979f88432a03619ccb6107457",
        "date": "2020-08-12",
        "title": "新冠疫苗对BMI大于30的人无效",
        "explain": "尚无定论",
        "imgsrc": "//jiaozhen-70111.picnjc.qpic.cn/dzBhr1A5W8i3y8dPD9eyRk?imageView2/2/w/150/h/90",
        "markstyle": "doubt",
        "url": "https://vp.fact.qq.com/article?id=c903972979f88432a03619ccb6107457",
        "desc": "新冠疫苗对肥胖者并非完全无效，实际效果有待进一步研究。\n肥胖对于人体健康的危害性不言而喻，肥胖带来的多余组织会对人的呼吸、血液、免疫功能等多个方面产生直接影响。据英国公共卫生部门的研究，肥胖是COVID-19导致住院率和死亡风险增加的重要原因。\n有研究认为，肥胖能降低疫苗的免疫应答反应，但其作用机制还有待更多的数据研究。只能说肥胖可能会影响疫苗的保护效果，这种降低也不是直接把免疫应答反应降为0，即使是应用成熟的疫苗，其防护也无法达到100%。",
        "author": "药理学硕士，知贝儿科药师"
    },
    {
        "id": "91b2fcf6db227583fd10a9f106ba1ad4",
        "date": "2020-08-11",
        "title": "日本流行的新冠病毒株已发生重大突变",
        "explain": "谣言",
        "imgsrc": "//jiaozhen-70111.picnjc.qpic.cn/jBKP2HWqTpJokKB9x7gw8m?imageView2/2/w/150/h/90",
        "markstyle": "fake",
        "url": "https://vp.fact.qq.com/article?id=91b2fcf6db227583fd10a9f106ba1ad4",
        "desc": "日本国立感染症研究所病原体基因组解析研究中心主任黑田诚对新华社记者表示，上述报道是误报。目前日本国内流行的新冠病毒毒株只是在此前欧洲相关基因序列的新冠病毒基础上，进一步发生了6个碱基变异。这一发生少量碱基变异的毒株可能从6月下旬开始从东京向日本全国扩散。\n截至7月16日，研究人员分析了日本国内3600多名新冠病毒感染者以及经航班入境的67名感染者的病毒基因组序列，和世界各地研究人员公布的全球约4.6万名新冠病毒感染者的病毒基因组序列进行了比对。从全球来看，自2019年年末至今年7月的这段时间里，新冠病毒基因组平均随机发生了大约15个碱基变异。",
        "author": "中国国家通讯社"
    },
    {
        "id": "7af61054391822098600d420e46c57c8",
        "date": "2020-08-09",
        "title": "研究发现高个子感染新冠病毒的风险更大",
        "explain": "尚无定论",
        "imgsrc": "//jiaozhen-70111.picnjc.qpic.cn/8YomDwTYQXiaT3oY91Ck5Q?imageView2/2/w/150/h/90",
        "markstyle": "doubt",
        "url": "https://vp.fact.qq.com/article?id=7af61054391822098600d420e46c57c8",
        "desc": "网传“高个子感染新冠病毒的风险更大”，但是在相关的论文中，这只是一个芝麻大的发现。从统计学上看，身高与新冠病毒感染风险的相关性也并不显著。\n根据论文，英国高个子感染新冠病毒的风险增加了，而美国的高个子感染风险反而减少了，这两个数据所反映的现象是互相矛盾的。“高个子感染新冠病毒的风险更大”极有可能只是一个随机发生的现象，没有实质性的证据证明它是一个可靠的规律。且该论文未经同行评议，应谨慎看待论文结论。\n身高与新冠感染风险之间的关系本就存疑，用它来支持“新冠病毒通过气溶胶传播”更是荒谬。气溶胶传播的可能性存在，但是不应被过分夸大。",
        "author": "宾夕法尼亚大学医学院病理及实验医药系研究副教授"
    },
    {
        "id": "32bb7d9d8e7a92eb2a910bbba7075f9d",
        "date": "2020-08-03",
        "title": "大连新冠疫情与北京新疆疫情有关联",
        "explain": "谣言",
        "imgsrc": "//jiaozhen-70111.picnjc.qpic.cn/euEu5KhKNFeh3UVvQTzG8s?imageView2/2/w/150/h/90",
        "markstyle": "fake",
        "url": "https://vp.fact.qq.com/article?id=32bb7d9d8e7a92eb2a910bbba7075f9d",
        "desc": "8月3日，大连市政府新闻办召开新闻发布会。大连市政府副秘书长、市卫健委主任赵作伟介绍，本次疫情由境外输入引起的可能性不能排除，来自凯洋公司内外样本的病毒基因序列高度同源，表示本次大连疫情为同一个链条，未发现本次疫情与近期的北京新疆的病例有相关关联的线索。\n病例标本的基因测序结果，显示与我国本土流行的新冠病毒基因型不同，也排除乌鲁木齐新疆北京新发地哈尔滨和绥芬河疫情的关联性。本次疫情可初步排除国内本地病例传播的可能，推测可能是由境外输入引起的。\n",
        "author": "解放日报•上观新闻运营的辟谣新闻和辟谣服务网络平台"
    },
    {
        "id": "9174290456f4093bf263813c41af0719",
        "date": "2020-08-03",
        "title": "又有一种新型病毒在武汉传播",
        "explain": "谣言",
        "imgsrc": "//jiaozhen-70111.picnjc.qpic.cn/sfjA1TRpGCcrMwiraq6vL4?imageView2/2/w/150/h/90",
        "markstyle": "fake",
        "url": "https://vp.fact.qq.com/article?id=9174290456f4093bf263813c41af0719",
        "desc": "经武汉市卫健委核查，此消息为虚假信息。鄂州警方在对案件线索及相关证据查证后，于8月1日将违法人员周某抓获，周某如实交待了其散布谣言的违法行为。",
        "author": "武汉市互联网信息办公室"
    }
]

// 谣言
var randomSize = 0
var posList = [
    {
        posX: 50 + 'px',
        posY: 100 + 'px',
        deg: '20'
    },
    {
        posX: 100 + 'px',
        posY: 350 + 'px',
        deg: '25'
    },
    {
        posX: 60 + 'px',
        posY: 500 + 'px',
        deg: '30'
    },
    {
        posX: 600 + 'px',
        posY: 500 + 'px',
        deg: '20'
    },
    {
        posX: 950 + 'px',
        posY: 480 + 'px',
        deg: '20'
    },
    {
        posX: 600 + 'px',
        posY: 100 + 'px',
        deg: '20'
    },
    {
        posX: 250 + 'px',
        posY: 250 + 'px',
        deg: '20'
    },
    {
        posX: 800 + 'px',
        posY: 250 + 'px',
        deg: '20'
    },
    {
        posX: 900 + 'px',
        posY: 100 + 'px',
        deg: '20'
    },
    {
        posX: 500 + 'px',
        posY: 180 + 'px',
        deg: '20'
    },
]


$(document).ready(function () {

    var pageNum = 0
    var navLeft = $('#navLeft')
    var navRight = $('#navRight')
    var boxMain = $('.box_main')
    var scrollBox = document.getElementById('scroll_box')
    var main_1 = document.getElementById('main_1')
    var scrollWidth = main_1.offsetWidth

    navRight.fadeOut('300')
    navLeft.fadeOut('300')

    boxMain.mouseenter(function () {
        navRight.fadeIn('300')
        navLeft.fadeIn('300')
    })
    boxMain.mouseleave(function () {
        navRight.fadeOut('300')
        navLeft.fadeOut('300')
    })

    navRight.click(function () {
        pageNum++
        if (pageNum >= 2) {
            pageNum = 1
        }
        tween(scrollBox, { 'left': -scrollWidth * pageNum }, 10)

    })
    navLeft.click(function () {
        pageNum--
        if (pageNum <= 0) {
            pageNum = 0
        }
        tween(scrollBox, { 'left': scrollWidth * pageNum }, 10)
    })

    $("button").click(function () {
        // $.get("http://api.tianapi.com/txapi/ncovcity/index?key=c707f6dbaa1b5e751eea380e762b2aa6",
        //     function (data, status) {
        //         epidemicData = data
        //         console.log(data);
        //         saveHandler()
        //         // $('#result').append(JSON.stringify(data)); //返回内容绑定到ID为result的标签
        //         // alert("状态码：" + data.code + "\n消息：" + data.msg);
        //         // $('p').text(data.newslist[0])
        //     });
    });

    // ‘散布’谣言
    randomRumor()

    // 点击关闭柱状图
    $('#close').click(function () {
        $('#bar_box').fadeOut(100)
        $('.china').animate({
            top: 50 + '%'
        }, 300)
        clearInterval(bar_timer)
    })

    // 向左拖拽划走封面
    $('#arrow').click(function () {
        $('#coverBG').css({ 'animation': 'coverBG 0s ease-in-out' })
        $('#coverBG').css({ 'left': -scrollWidth })
        setTimeout(function () {
            $('#cover').css({ 'display': 'none' })
        }, 1000)
    })
    var startX = 0, startY = 0, endX = 0, endY = 0
    document.addEventListener('mousedown', function (event) {
        startX = event.clientX
        startY = event.clientY
    })

    document.onmouseup = function (event) {
        endX = event.clientX
        endY = event.clientY
        if (startX > endX) {
            $('#coverBG').css({ 'animation': 'coverBG 0s ease-in-out' })
            $('#coverBG').css({ 'left': -scrollWidth })
            setTimeout(function () {
                $('#cover').css({ 'display': 'none' })
            }, 1000)
        }
        document.removeEventListener('mousedown', this)
        document.removeEventListener('mousemove', this)
    }

    $("body").delegate("#rumorInfo>i", "click", function () {
        let index = $(this).index();
        $("#rumor_dat").html("时间：" + rumorData[index].date);
        $("#rumor_title").html(rumorData[index].title);
        $("#rumor_explain").html("说明：" + rumorData[index].explain);
        $("#rumor_img").attr("src", rumorData[index].imgsrc);
        $("#rumor_desc").html("描述：" + rumorData[index].desc);
        $("#rumorInfo").fadeOut(300);
        console.log(index);
        $("#rumor_Det").fadeIn(500);
    })
    //   点击关闭谣言详情
    $('#rumor_close').click(function () {
        $('#rumor_Det').fadeOut(300)
        $('#rumorInfo').fadeIn(500)
    })

    
});

function saveHandler() {
    var content = JSON.stringify(epidemicData);
    var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "./json/save.json");
}

// 封装获取【样式】的函数
function getStyle(obj, name) {
    // IE                                      // 主流  
    return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj, false)[name];
}

// 地图
(function () {
    // 初始化e-charts
    var myChart = echarts.init(document.querySelector(".china"));

    var uploadedDataURL = "https://geo.datav.aliyun.com/areas_v2/bound/440000_full.json";
    myChart.showLoading();
    var data = [];
    $.getJSON(uploadedDataURL, function (geoJson) {
        echarts.registerMap('广东', geoJson);
        data = geoJson.features.map((item) => {
            var newData = gdData.filter(i => item.properties.name.includes(i.cityName))
            var newValue = 0
            if (newData.length !== 0) {
                newValue = newData[0].confirmedCount
            }
            return {
                value: "确诊人数：" + newValue,
                name: item.properties.name
            }
        });
        myChart.hideLoading();
        option = {
            tooltip: {
                backgroundColor: 'rgba(0,0,0,0)',
                trigger: 'item',
            },
            legend: {
                show: false,
            },
            series: [{
                tooltip: {
                    trigger: 'item',
                    formatter: function (item) {
                        var tipHtml = '';
                        tipHtml = '<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666">' +
                            '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' + item.data.name + '</div>' +
                            '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                            '<span style="font-size:18px;font-weight:bold;">' + item.data.value + ' ' + '</span>' +
                            '</div>' + '</div>';
                        cityName = item.data.name
                        return tipHtml;
                    }
                },
                name: '广东省数据',
                type: 'map',
                map: '广东', // 自定义扩展图表类型
                aspectScale: 1,
                zoom: 0.8, //缩放
                showLegendSymbol: false,
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10
                },
                // selectedMode: 'single',
                itemStyle: {
                    areaColor: '#0E95F1',
                    borderColor: '#e9e9e9',
                    borderWidth: 1,
                    shadowColor: '#0E95F1',
                    shadowBlur: 20,
                },
                emphasis: {
                    label: {
                        show: true,
                        color: '#fff',
                        fontSize: 10
                    },
                    itemStyle: {
                        areaColor: '#FFD181',
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                },
                layoutCenter: ['50%', '50%'],
                layoutSize: '160%',
                markPoint: {
                    symbol: 'none'
                },
                data: data,
            }],
        }
        myChart.setOption(option);
        // showTips('广州市');
    })
    // 默认鼠标移出canvas后显示广州的tooltip信息
    myChart.on("globalout", () => {
        setTimeout(() => {
            // showTips('广州市')
        }, 5000)
    })

    function showTips(name) {
        data.forEach((item, i) => {
            if (item.name.includes(name)) {
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: i
                });
                myChart.dispatchAction({
                    type: 'mapSelect',
                    seriesIndex: 0,
                    dataIndex: i
                });
            }
        })
    }

    myChart.on('click', function (params) {
        var city = params.name;
        var cityArr = gdData.filter(i => city.includes(i.cityName))
        // 把【柱状图】渲染到盒子中，并且【传参】配置数据
        bar(cityArr);
        // 动画部分
        // $(".china").fadeOut(300);
        // $('#bar_box').fadeIn(500);
        $(".china").animate({
            left: 30 + '%'
        }, 350, function () {
            $(this).animate({
                left: 70 + '%'
            }, 350, function () {
                $(this).animate({
                    left: 50 + '%'
                }, 350, function () {
                    $(this).animate({
                        top: 150 + '%'
                    }, 300, function () {
                        $('#bar_box').fadeIn(1000);
                    })
                })
            })
        });
    });
})();

// 柱状图
function bar(cityArr) {
    var myChart = echarts.init(document.querySelector(".bar"));
    var option = {
        // backgroundColor:'#323a5e',
        title: {
            text: cityArr[0].cityName,
            textStyle: {
                align: 'center',
                color: '#fff',
                fontSize: 20,
            },
            top: '5%',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '14%',
            top: '16%',
            containLabel: true
        },
        legend: {
            data: ['人数'],
            right: 10,
            top: 12,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },
        xAxis: {
            type: 'category',
            data: ['现有确诊', '累计确诊', '疑似病例', '治愈病例', '死亡病例'],
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                // interval: 0,
                // rotate: 40,
                textStyle: {
                    fontFamily: 'Microsoft YaHei'
                }
            },
        },
        yAxis: {
            type: 'value',
            max: null,
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        },
        //    "dataZoom": [{
        //      "show": true,
        //      "height": 12,
        //      "xAxisIndex": [
        //        0
        //      ],
        //      bottom:'8%',
        //      "start": 10,
        //      "end": 90,
        //      handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        //      handleSize: '110%',
        //      handleStyle:{
        //        color:"#d3dee5",

        //      },
        //      textStyle:{
        //        color:"#fff"},
        //      borderColor:"#90979c"
        //    }, {
        //      "type": "inside",
        //      "show": true,
        //      "height": 15,
        //      "start": 1,
        //      "end": 35
        //    }],
        series: [{
            name: '人数',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#248ff7'
                    }, {
                        offset: 1,
                        color: '#6851f1'
                    }]),
                    barBorderRadius: 12,
                },
            },
            data: [cityArr[0].currentConfirmedCount, cityArr[0].confirmedCount, cityArr[0].suspectedCount, cityArr[0].curedCount, cityArr[0].deadCount]
        },
        ]
    };
    var app = {
        currentIndex: -1,
    };

    myChart.setOption(option);

    // window.addEventListener("resize", function () {
    //     myChart.resize();
    // });

    // 自动预览柱状图
    tmdBar()

    // 移入，停止自动查看
    myChart.on('mouseover', function () {
        clearInterval(bar_timer)
    })
    // 移出，恢复自动查看
    myChart.on('mouseout', function () {
        tmdBar()
    })

    // 自动预览柱状图
    function tmdBar() {
        bar_timer = setInterval(function () {
            var dataLen = option.series[0].data.length;

            // 取消之前高亮的图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: app.currentIndex
            });
            app.currentIndex = (app.currentIndex + 1) % dataLen;
            // 高亮当前图形
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: app.currentIndex,
            });
            // 显示 tooltip
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: app.currentIndex
            });
        }, 2000);
    }
};

// 散布谣言1
function randomRumor() {
    // 遍历谣言数据
    rumorData.forEach(item => {
        var rumor_span = document.createElement('span')
        var rumor_i = document.createElement('i')
        rumor_span.innerHTML = item.title /*+ "    " + posIndex*/
        rumorInfo.appendChild(rumor_i)
        rumor_i.appendChild(rumor_span)

        randomSize = RandomNumBoth(15, 30)
        randomX = RandomNumBoth(50, 800)
        randomY = RandomNumBoth(50, 500)
        randomDeg = RandomNumBoth(-30, 30)
        var degStr = randomDeg + 'deg'
        rumor_span.style.transform = "rotate(" + degStr + ")";
        rumor_span.style.fontSize = randomSize + 'px'
        posIndex++
    })
}

// 散布谣言2
/*function randomRumor() {
    // 遍历谣言数据
    rumorData.forEach(item => {
        var rumor_p = document.createElement('p')
        var rumor_div = document.createElement('div')
        rumor_p.innerHTML = item.title + "    " + posIndex
        main_2.appendChild(rumor_div)
        rumor_div.appendChild(rumor_p)

        randomSize = RandomNumBoth(20, 35)
        randomX = RandomNumBoth(50, 800)
        randomY = RandomNumBoth(50, 500)
        randomDeg = RandomNumBoth(-20, 20)
        var degStr1 = posList[posIndex].deg + 'deg'
        var degStr = randomDeg + 'deg'

        rumor_p.style.fontSize = randomSize + 'px'
        // rumor_p.style.transform = "rotate(" + degStr1 + ")";

        $('#main_2 div').css({ 'position': 'absolute' })
        // $('#main_2 div').css({ 'width': '500px','height': '200px'})

        rumor_div.style.color = '#fff'
        rumor_div.style.fontSize = randomSize + 'px'
        rumor_div.style.left = posList[posIndex].posX
        rumor_div.style.top = posList[posIndex].posY
        
        rumor_div.style.transform = "rotate(" + degStr1 + ")";
        rumor_div.style.backgroundColor = 'rgba(0,0,0,0.15)'
        posIndex++
    })
}
*/
function RandomNumBoth(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}

var t = null;
t = setTimeout(time, 0); //開始运行
function time() {
    clearTimeout(t); //清除定时器
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours(); //获取时
    var m = dt.getMinutes(); //获取分
    var s = dt.getSeconds(); //获取秒
    showtime.innerHTML =
        "当前时间：" +
        y +
        "年" +
        mt +
        "月" +
        todouble(day) +
        "日-" +
        todouble(h) +
        "时" +
        todouble(m) +
        "分" +
        todouble(s) +
        "秒";
    t = setTimeout(time, 1000); //设定定时器，循环运行
}

function todouble(a) {
    return a >= 10 ? a : "0" + a;
}


