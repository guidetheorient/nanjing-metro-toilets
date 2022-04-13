export const LINE_1_COLOR = '#01a3e0'
export const LINE_2_COLOR = '#cc003a'
export const LINE_3_COLOR = '#00944d'
export const LINE_4_COLOR = '#786cae'
export const LINE_10_COLOR = '#f0c687'
export const LINE_S1_COLOR = '#43bdb5'
export const LINE_S3_COLOR = '#bd84ae'
export const LINE_S6_COLOR = '#cb90dc'
export const LINE_S7_COLOR = '#f09894'
export const LINE_S8_COLOR = '#efa553'
export const LINE_S9_COLOR = '#ffa502'

export const POINT_TYPES = {
  END: 'end',
  HUGE: 'huge',
  TRANSFER: 'transfer',
  default: 'default'
}

export const LINE_1_POINTS = [
  { name: '迈皋桥', x: 101, y: -265, type: POINT_TYPES.END },
  { name: '红山动物园', x: 71, y: -236 },
  { name: '南京站', x: 34, y: -202, type: POINT_TYPES.HUGE },
  { name: '新模范马路', x: 13, y: -180, textTranslateX: -100, textTranslateY: -5 },
  { name: '玄武门', x: 1, y: -161, textTranslateX: -75, textTranslateY: 0 },
  { name: '鼓楼', x: 0, y: -140, type: POINT_TYPES.TRANSFER, angle: 90, textTranslateX: -6, textTranslateY: 18 },
  { name: '珠江路', x: 0, y: -61, textTranslateX: -6 },
  { name: '新街口', x: 0, y: 0, type: POINT_TYPES.TRANSFER, angle: 90, textTranslateX: -6, textTranslateY: 18 },
  { name: '张府园', x: 0, y: 39, textTranslateX: -6 },
  { name: '三山街', x: 0, y: 82, textTranslateX: -6 },
  { name: '中华门', x: 0, y: 154, textTranslateX: -6 },
  { name: '安德门', x: 0, y: 211, type: POINT_TYPES.TRANSFER, angle: 90, textTranslateX: -6, textTranslateY: -5 },
  { name: '天隆寺', x: 14, y: 227, textTranslateX: -70, textTranslateY: 8 },
  { name: '软件大道', x: 32, y: 244, textTranslateX: -85, textTranslateY: 8 },
  { name: '花神庙', x: 51, y: 263, textTranslateX: -70, textTranslateY: 5 },
  { name: '南京南站', x: 70, y: 282, type: POINT_TYPES.HUGE },
  { name: '双龙大道', x: 94, y: 305 },
  { name: '河定桥', x: 113, y: 324 },
  { name: '胜太路', x: 144, y: 354 },
  { name: '百家湖', x: 179, y: 388 },
  { name: '小龙湾', x: 216, y: 425, textTranslateX: -3 },
  { name: '竹山路', x: 268, y: 476, textTranslateX: -3 },
  { name: '天印大道', x: 293, y: 500 },
  { name: '龙眠大道', x: 326, y: 532 },
  { name: '南医大·江苏经贸学院', x: 359, y: 565 },
  { name: '南京交院', x: 391, y: 597 },
  { name: '中国药科大学', x: 423, y: 628, type: POINT_TYPES.END }
]

export const LINE_2_POINTS = [
  { name: '鱼嘴', x: -302, y: 376, type: POINT_TYPES.END, textTranslateX: -65, textTranslateY: 0 },
  { name: '天保街', x: -276, y: 376, textTranslateX: -40, textTranslateY: -20, textZLevel: 10 },
  { name: '青莲街', x: -222, y: 375, textTranslateX: -8 },
  { name: '螺塘路', x: -178, y: 327, textTranslateX: -6 },
  { name: '油坊桥', x: -149, y: 282, type: POINT_TYPES.TRANSFER, angle: 0, textTranslateX: -12, textTranslateY: 18 },
  { name: '雨润大街', x: -192, y: 234, textTranslateX: -90, textTranslateY: 5 },
  { name: '元通', x: -210, y: 211, type: POINT_TYPES.TRANSFER, angle: 90, textTranslateX: -5, textTranslateY: -16 },
  { name: '奥体东', x: -210, y: 174, textTranslateX: -5 },
  { name: '兴隆大街', x: -210, y: 146, textTranslateX: -5 },
  { name: '集庆门大街', x: -210, y: 121, textTranslateX: -5 },
  { name: '云锦路', x: -210, y: 93, textTranslateX: -5 },
  { name: '莫愁湖', x: -205, y: 63, textTranslateX: -5, textTranslateY: 5 },
  { name: '汉中门', x: -156, y: 14, textTranslateX: -12, textTranslateY: 15 },
  { name: '上海路', x: -72, y: 0, textTranslateX: -42, textTranslateY: 20 },
  { name: '新街口', x: 0, y: 0, type: POINT_TYPES.TRANSFER, angle: 90, repeat: true },
  { name: '大行宫', x: 71, y: 0, type: POINT_TYPES.TRANSFER, angle: 90, textTranslateX: -5, textTranslateY: 5 },
  { name: '西安门', x: 107, y: -28, textTranslateX: -10, textTranslateY: 5 },
  { name: '明故宫', x: 128, y: -51, textTranslateX: -8, textTranslateY: 10 },
  { name: '苜蓿园', x: 203, y: -70, textTranslateX: -40, textTranslateY: 20 },
  { name: '下马坊', x: 284, y: -70, textTranslateX: -42, textTranslateY: 20 },
  { name: '孝陵卫', x: 358, y: -100, textTranslateX: -8, textTranslateY: 5 },
  { name: '钟灵街', x: 402, y: -142, textTranslateX: -8, textTranslateY: 8 },
  {
    name: '马群',
    x: 440,
    y: -178,
    type: POINT_TYPES.TRANSFER,
    angle: -45,
    textTranslateX: -65,
    textTranslateY: 8,
    textZLevel: 10
  },
  { name: '金马路', x: 473, y: -210, type: POINT_TYPES.TRANSFER, angle: -45, textTranslateX: -15, textTranslateY: 15 },
  { name: '仙鹤门', x: 497, y: -234 },
  { name: '学则路', x: 518, y: -254 },
  { name: '仙林中心', x: 541, y: -276 },
  { name: '羊山公园', x: 570, y: -304 },
  { name: '南大仙林校区', x: 589, y: -323 },
  { name: '经天路', x: 616, y: -350, type: POINT_TYPES.END }
]

export const LINE_3_POINTS = [
  { name: '林场', x: -335, y: -536, type: POINT_TYPES.END, textTranslateX: -40, textTranslateY: 25 },
  { name: '星火路', x: -280, y: -506, textTranslateX: -5 },
  { name: '东大成贤学院', x: -251, y: -478, textTranslateX: -8, textZLevel: 10 },
  { name: '泰冯路', x: -198, y: -427, type: POINT_TYPES.TRANSFER, angle: 45 },
  { name: '天润城', x: -175, y: -405 },
  { name: '柳洲东路', x: -144, y: -375 },
  { name: '上元门', x: -75, y: -308 },
  { name: '五塘广场', x: -36, y: -270 },
  { name: '小市', x: -7, y: -243 },
  { name: '南京站', x: 34, y: -202, type: POINT_TYPES.HUGE, repeat: true },
  { name: '南京林业大学·新庄', x: 64, y: -173 },
  { name: '鸡鸣寺', x: 71, y: -140, type: POINT_TYPES.TRANSFER, angle: 90, textTranslateX: -10, textTranslateY: 15 },
  { name: '浮桥', x: 71, y: -58, textTranslateX: -5 },
  { name: '大行宫', x: 71, y: 0, type: POINT_TYPES.TRANSFER, angle: 90, repeat: true },
  { name: '常府街', x: 71, y: 39, textTranslateX: -5 },
  { name: '夫子庙', x: 71, y: 75, textTranslateX: -5 },
  { name: '武定门', x: 71, y: 106, textTranslateX: -5 },
  { name: '雨花门', x: 71, y: 134, textTranslateX: -5 },
  { name: '卡子门', x: 71, y: 165, textTranslateX: -5 },
  { name: '大明路', x: 71, y: 200, textTranslateX: -5 },
  { name: '明发广场', x: 71, y: 237, textTranslateX: -5 },
  { name: '南京南站', x: 70, y: 282, type: POINT_TYPES.HUGE, repeat: true },
  { name: '宏运大道', x: 71, y: 334, textTranslateX: -5, textZLevel: 10 },
  { name: '胜太西路', x: 71, y: 366, textTranslateX: -5 },
  { name: '天元西路', x: 71, y: 397, textTranslateX: -5 },
  { name: '九龙湖', x: 71, y: 441, textTranslateX: -5 },
  { name: '诚信大道', x: 71, y: 489, textTranslateX: -5 },
  { name: '东大九龙湖校区', x: 71, y: 542, textTranslateX: -5 },
  { name: '秣周东路', x: 71, y: 587, type: POINT_TYPES.END, textTranslateX: -5 }
]

export const LINE_4_POINTS = [
  { name: '龙江', x: -198, y: -157, type: POINT_TYPES.END, textTranslateX: -35, textTranslateY: 20 },
  { name: '草场门·南艺·二师', x: -124, y: -140, textTranslateX: -78, textTranslateY: 20 },
  { name: '云南路', x: -53, y: -140, textTranslateX: -25, textTranslateY: 20 },
  {
    name: '鼓楼',
    x: 0,
    y: -140,
    type: POINT_TYPES.TRANSFER,
    angle: 90,
    repeat: true
  },
  { name: '鸡鸣寺', x: 71, y: -140, type: POINT_TYPES.TRANSFER, angle: 90, repeat: true },
  { name: '九华山', x: 126, y: -140, textTranslateX: -38, textTranslateY: -15 },
  { name: '岗子村', x: 173, y: -140, textTranslateX: -38, textTranslateY: 20 },
  { name: '蒋王庙', x: 234, y: -157, textTranslateX: -35, textTranslateY: 20 },
  { name: '王家湾', x: 272, y: -194, textTranslateX: -22, textTranslateY: 18 },
  { name: '聚宝山', x: 317, y: -210, textTranslateX: -40, textTranslateY: -20 },
  { name: '徐庄·苏宁总部', x: 388, y: -210, textTranslateX: -65, textTranslateY: 20 },
  { name: '金马路', x: 473, y: -210, type: POINT_TYPES.TRANSFER, angle: -45, repeat: true },
  { name: '汇通路', x: 530, y: -210, textTranslateX: -20, textTranslateY: 15 },
  { name: '灵山', x: 589, y: -216, textTranslateX: -25, textTranslateY: 15 },
  { name: '东流', x: 630, y: -254, textTranslateX: -10, textTranslateY: 10 },
  { name: '孟北', x: 659, y: -282, textTranslateX: -5, textTranslateY: 5 },
  { name: '西岗桦墅', x: 693, y: -314, textTranslateX: -5, textTranslateY: 5 },
  { name: '仙林湖', x: 729, y: -350, type: POINT_TYPES.END, textTranslateX: -5, textTranslateY: 5 }
]

export const LINE_10_POINTS = [
  { name: '雨山路', x: -576, y: 171, type: POINT_TYPES.END, textTranslateX: -5, textTranslateY: 0 },
  { name: '文德路', x: -576, y: 110, textTranslateX: -5, textTranslateY: 0 },
  { name: '龙华路', x: -576, y: 39, textTranslateX: -5, textTranslateY: 0 },
  { name: '南京工业大学', x: -548, y: 0, textTranslateX: -60, textTranslateY: -20 },
  { name: '浦口万汇城', x: -478, y: 0, textTranslateX: -55, textTranslateY: 20 },
  { name: '临江·青奥体育公园', x: -401, y: 0, textTranslateX: -80, textTranslateY: -20 },
  { name: '江心洲', x: -337, y: 0, textTranslateX: -40, textTranslateY: 20 },
  { name: '绿博园', x: -279, y: 0, textTranslateX: -5, textTranslateY: 0 },
  { name: '梦都大街', x: -253, y: 95, textTranslateX: -90, textTranslateY: 0 },
  { name: '奥体中心', x: -253, y: 196, textTranslateX: -90, textTranslateY: 0 },
  { name: '元通', x: -210, y: 211, type: POINT_TYPES.TRANSFER, angle: 90, repeat: true },
  { name: '中胜', x: -124, y: 211, textTranslateX: -35, textTranslateY: 20 },
  { name: '小行', x: -54, y: 211, textTranslateX: -36, textTranslateY: 20 },
  { name: '安德门', x: 0, y: 211, type: POINT_TYPES.TRANSFER, angle: 90, repeat: true }
]

export const LINE_S1_POINTS = [
  { name: '南京南站', x: 70, y: 282, type: POINT_TYPES.HUGE, repeat: true },
  { name: '翠屏山', x: 2, y: 358, textTranslateX: -75, textTranslateY: 0 },
  { name: '河海大学·佛城西路', x: 2, y: 430, textTranslateX: -152, textTranslateY: 0 },
  { name: '吉印大道', x: 2, y: 490, textTranslateX: -90, textTranslateY: 0 },
  { name: '正方中路', x: 2, y: 555, textTranslateX: -90, textTranslateY: 0 },
  { name: '翔宇路北', x: 2, y: 615, textTranslateX: -90, textTranslateY: 0 },
  { name: '翔宇路南', x: 2, y: 677, type: POINT_TYPES.TRANSFER, angle: 90, textTranslateX: -90, textTranslateY: 0 },
  { name: '禄口机场', x: 71, y: 689, textTranslateX: -45, textTranslateY: -18 },
  {
    name: '空港新城江宁',
    x: 126,
    y: 689,
    type: POINT_TYPES.TRANSFER,
    angle: 0,
    textTranslateX: -65,
    textTranslateY: 18
  }
]

export const LINE_S3_POINTS = [
  { name: '高家冲', x: -469, y: 809, type: POINT_TYPES.END, textTranslateX: -5, textTranslateY: 0 },
  { name: '林山', x: -469, y: 751, textTranslateX: -5, textTranslateY: 0 },
  { name: '桥林新城', x: -469, y: 694, textTranslateX: -5, textTranslateY: 0 },
  { name: '石碛河', x: -469, y: 635, textTranslateX: -5, textTranslateY: 0 },
  { name: '双垅', x: -469, y: 579, textTranslateX: -5, textTranslateY: 0 },
  { name: '兰花塘', x: -469, y: 523, textTranslateX: -5, textTranslateY: 0 },
  { name: '马骡圩', x: -469, y: 463, textTranslateX: -5, textTranslateY: 12 },
  { name: '刘村', x: -316, y: 414, textTranslateX: -20, textTranslateY: 20 },
  { name: '天保', x: -255, y: 392, textTranslateX: -5, textTranslateY: 0 },
  { name: '高庙路', x: -255, y: 368, textTranslateX: -10, textTranslateY: -5 },
  { name: '吴侯街', x: -255, y: 333, textTranslateX: -10, textTranslateY: 0 },
  { name: '平良大街', x: -255, y: 302, textTranslateX: -85, textTranslateY: 0 },
  { name: '永初路', x: -199, y: 282, textTranslateX: -60, textTranslateY: -15 },
  { name: '油坊桥', x: -149, y: 282, type: POINT_TYPES.TRANSFER, angle: 0, repeat: true },
  { name: '贾西', x: -109, y: 282, textTranslateX: -35, textTranslateY: -15 },
  { name: '春江路', x: -71, y: 282, textTranslateX: -43, textTranslateY: 18 },
  { name: '铁心桥', x: -28, y: 282, textTranslateX: -43, textTranslateY: -15 },
  { name: '景明佳园', x: 17, y: 282, textTranslateX: -50, textTranslateY: 18 },
  { name: '南京南站', x: 70, y: 282, type: POINT_TYPES.HUGE, repeat: true }
]

export const LINE_S6_POINTS = [
  { name: '马群', x: 440, y: -178, type: POINT_TYPES.TRANSFER, angle: -45, repeat: true },
  { name: '百水桥', x: 470, y: -178, textTranslateX: -45, textTranslateY: 18 },
  { name: '麒麟门', x: 511, y: -178, textTranslateX: -42, textTranslateY: 18 },
  { name: '东郊小镇', x: 554, y: -178, textTranslateX: -40, textTranslateY: 18 },
  { name: '古泉', x: 596, y: -178, textTranslateX: -20, textTranslateY: 18 },
  { name: '南京猿人洞', x: 638, y: -178, textTranslateX: -40, textTranslateY: -18 },
  { name: '汤山', x: 681, y: -178, textTranslateX: -38, textTranslateY: 18 },
  { name: '泉都大街', x: 723, y: -178, textTranslateX: -45, textTranslateY: -18 },
  { name: '黄梅', x: 763, y: -158, textTranslateX: -10, textTranslateY: -5 },
  { name: '童世界', x: 802, y: -137, textTranslateX: -70, textTranslateY: 10 },
  { name: '华阳', x: 828, y: -137, textTranslateX: -32, textTranslateY: -15 },
  { name: '崇明', x: 853, y: -137, textTranslateX: -10, textTranslateY: -5 },
  { name: '句容', x: 870, y: -117, type: POINT_TYPES.END, textTranslateX: -5, textTranslateY: 0 }
]

export const LINE_S7_POINTS = [
  {
    name: '空港新城江宁',
    x: 126,
    y: 689,
    type: POINT_TYPES.TRANSFER,
    angle: 0,
    repeat: true
  },
  { name: '柘塘', x: 178, y: 689, textTranslateX: -35, textTranslateY: -18 },
  { name: '空港新城溧水', x: 229, y: 689, textTranslateX: -60, textTranslateY: 18 },
  { name: '群力', x: 284, y: 689, textTranslateX: -35, textTranslateY: -18 },
  { name: '卧龙湖', x: 332, y: 700 },
  { name: '溧水', x: 358, y: 734 },
  { name: '中山湖', x: 381, y: 763 },
  { name: '幸庄', x: 403, y: 790 },
  { name: '无想山', x: 427, y: 820, type: POINT_TYPES.END }
]

export const LINE_S8_POINTS = [
  { name: '泰山新村', x: -205, y: -388, type: POINT_TYPES.END, angle: -45, textTranslateX: -50, textTranslateY: 22 },
  { name: '泰冯路', x: -198, y: -427, type: POINT_TYPES.TRANSFER, angle: 45, repeat: true },
  { name: '高新开发区', x: -136, y: -487, textTranslateX: -10, textTranslateY: 10 },
  { name: '信息工程大学', x: -74, y: -534, textTranslateX: -62, textTranslateY: -18 },
  { name: '卸甲甸', x: 12, y: -534, textTranslateX: -42, textTranslateY: 22 },
  { name: '大厂', x: 96, y: -534, textTranslateX: -35, textTranslateY: 22 },
  { name: '葛塘', x: 167, y: -534, textTranslateX: -35, textTranslateY: 22 },
  { name: '长芦', x: 223, y: -534, textTranslateX: -35, textTranslateY: 22 },
  { name: '化工园', x: 259, y: -534, textTranslateX: -42, textTranslateY: -18 },
  { name: '六合开发区', x: 305, y: -534, textTranslateX: -50, textTranslateY: 22 },
  { name: '龙池', x: 351, y: -534, textTranslateX: -10, textTranslateY: 15 },
  { name: '雄州', x: 405, y: -575, textTranslateX: -15, textTranslateY: 18 },
  { name: '凤凰山公园', x: 469, y: -598, textTranslateX: -55, textTranslateY: -18 },
  { name: '方州广场', x: 532, y: -598, textTranslateX: -47, textTranslateY: 18 },
  { name: '沈桥', x: 597, y: -598, textTranslateX: -35, textTranslateY: 18 },
  { name: '八百桥', x: 662, y: -598, textTranslateX: -40, textTranslateY: 18 },
  { name: '金牛湖', x: 729, y: -598, type: POINT_TYPES.END, textTranslateX: 0, textTranslateY: 0 }
]

export const LINE_S9_POINTS = [
  { name: '翔宇路南', x: 2, y: 677, type: POINT_TYPES.TRANSFER, angle: 90, repeat: true },
  { name: '铜山', x: 2, y: 717 },
  { name: '石湫', x: 2, y: 749 },
  { name: '明觉', x: 2, y: 783 },
  { name: '团结圩', x: 2, y: 815 },
  { name: '高淳', x: 2, y: 857, type: POINT_TYPES.END }
]
