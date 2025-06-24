// =================================================================
// SECTION 1: CONFIGURATION & INITIALIZATION
// =================================================================

// !!! !!! !!! 關鍵步驟 !!! !!! !!!
// 請將下面整個 firebaseConfig 物件，換成您在 Firebase 控制台複製的那一個！
const firebaseConfig = {
    //apiKey: "YOUR_API_KEY", // <--- 這裡必須換掉
    //authDomain: "YOUR_PROJECT_ID.firebaseapp.com", // <--- 這裡必須換掉
    //projectId: "YOUR_PROJECT_ID", // <--- 這裡必須換掉
    //storageBucket: "YOUR_PROJECT_ID.appspot.com", // <--- 這裡必須換掉
    //messagingSenderId: "YOUR_SENDER_ID", // <--- 這裡必須換掉
    //appId: "YOUR_APP_ID" // <--- 這裡必須換掉
    apiKey: "AIzaSyAXcbzll6Fze1pQ9leQnQOH3YyTDFPhsfE",
    authDomain: "cicadasoundchasing-30781.firebaseapp.com",
    projectId: "cicadasoundchasing-30781",
    storageBucket: "cicadasoundchasing-30781.firebasestorage.app",
    messagingSenderId: "346235930686",
    appId: "1:346235930686:web:8a114ef129f385ab93a96f",
    measurementId: "G-7M59PW5QR2"

};

const taiwanDistricts = [ { "name": "臺北市", "districts": [ { "zip": "100", "name": "中正區" }, { "zip": "103", "name": "大同區" }, { "zip": "104", "name": "中山區" }, { "zip": "105", "name": "松山區" }, { "zip": "106", "name": "大安區" }, { "zip": "108", "name": "萬華區" }, { "zip": "110", "name": "信義區" }, { "zip": "111", "name": "士林區" }, { "zip": "112", "name": "北投區" }, { "zip": "114", "name": "內湖區" }, { "zip": "115", "name": "南港區" }, { "zip": "116", "name": "文山區" } ] }, { "name": "新北市", "districts": [ { "zip": "207", "name": "萬里區" }, { "zip": "208", "name": "金山區" }, { "zip": "220", "name": "板橋區" }, { "zip": "221", "name": "汐止區" }, { "zip": "222", "name": "深坑區" }, { "zip": "223", "name": "石碇區" }, { "zip": "224", "name": "瑞芳區" }, { "zip": "226", "name": "平溪區" }, { "zip": "227", "name": "雙溪區" }, { "zip": "228", "name": "貢寮區" }, { "zip": "231", "name": "新店區" }, { "zip": "232", "name": "坪林區" }, { "zip": "233", "name": "烏來區" }, { "zip": "234", "name": "永和區" }, { "zip": "235", "name": "中和區" }, { "zip": "236", "name": "土城區" }, { "zip": "237", "name": "三峽區" }, { "zip": "238", "name": "樹林區" }, { "zip": "239", "name": "鶯歌區" }, { "zip": "241", "name": "三重區" }, { "zip": "242", "name": "新莊區" }, { "zip": "243", "name": "泰山區" }, { "zip": "244", "name": "林口區" }, { "zip": "247", "name": "蘆洲區" }, { "zip": "248", "name": "五股區" }, { "zip": "249", "name": "八里區" }, { "zip": "251", "name": "淡水區" }, { "zip": "252", "name": "三芝區" }, { "zip": "253", "name": "石門區" } ] }, { "name": "基隆市", "districts": [ { "zip": "200", "name": "仁愛區" }, { "zip": "201", "name": "信義區" }, { "zip": "202", "name": "中正區" }, { "zip": "203", "name": "中山區" }, { "zip": "204", "name": "安樂區" }, { "zip": "205", "name": "暖暖區" }, { "zip": "206", "name": "七堵區" } ] }, { "name": "桃園市", "districts": [ { "zip": "320", "name": "中壢區" }, { "zip": "324", "name": "平鎮區" }, { "zip": "325", "name": "龍潭區" }, { "zip": "326", "name": "楊梅區" }, { "zip": "327", "name": "新屋區" }, { "zip": "328", "name": "觀音區" }, { "zip": "330", "name": "桃園區" }, { "zip": "333", "name": "龜山區" }, { "zip": "334", "name": "八德區" }, { "zip": "335", "name": "大溪區" }, { "zip": "336", "name": "復興區" }, { "zip": "337", "name": "大園區" }, { "zip": "338", "name": "蘆竹區" } ] }, { "name": "新竹市", "districts": [ { "zip": "300", "name": "東區" }, { "zip": "300", "name": "北區" }, { "zip": "300", "name": "香山區" } ] }, { "name": "新竹縣", "districts": [ { "zip": "302", "name": "竹北市" }, { "zip": "303", "name": "湖口鄉" }, { "zip": "304", "name": "新豐鄉" }, { "zip": "305", "name": "新埔鎮" }, { "zip": "306", "name": "關西鎮" }, { "zip": "307", "name": "芎林鄉" }, { "zip": "308", "name": "寶山鄉" }, { "zip": "310", "name": "竹東鎮" }, { "zip": "311", "name": "五峰鄉" }, { "zip": "312", "name": "橫山鄉" }, { "zip": "313", "name": "尖石鄉" }, { "zip": "314", "name": "北埔鄉" }, { "zip": "315", "name": "峨眉鄉" } ] }, { "name": "苗栗縣", "districts": [ { "zip": "350", "name": "竹南鎮" }, { "zip": "351", "name": "頭份市" }, { "zip": "352", "name": "三灣鄉" }, { "zip": "353", "name": "南庄鄉" }, { "zip": "354", "name": "獅潭鄉" }, { "zip": "356", "name": "後龍鎮" }, { "zip": "357", "name": "通霄鎮" }, { "zip": "358", "name": "苑裡鎮" }, { "zip": "360", "name": "苗栗市" }, { "zip": "361", "name": "造橋鄉" }, { "zip": "362", "name": "頭屋鄉" }, { "zip": "363", "name": "公館鄉" }, { "zip": "364", "name": "大湖鄉" }, { "zip": "365", "name": "泰安鄉" }, { "zip": "366", "name": "銅鑼鄉" }, { "zip": "367", "name": "三義鄉" }, { "zip": "368", "name": "西湖鄉" }, { "zip": "369", "name": "卓蘭鎮" } ] }, { "name": "臺中市", "districts": [ { "zip": "400", "name": "中區" }, { "zip": "401", "name": "東區" }, { "zip": "402", "name": "南區" }, { "zip": "403", "name": "西區" }, { "zip": "404", "name": "北區" }, { "zip": "406", "name": "北屯區" }, { "zip": "407", "name": "西屯區" }, { "zip": "408", "name": "南屯區" }, { "zip": "411", "name": "太平區" }, { "zip": "412", "name": "大里區" }, { "zip": "413", "name": "霧峰區" }, { "zip": "414", "name": "烏日區" }, { "zip": "420", "name": "豐原區" }, { "zip": "421", "name": "后里區" }, { "zip": "422", "name": "石岡區" }, { "zip": "423", "name": "東勢區" }, { "zip": "424", "name": "和平區" }, { "zip": "426", "name": "新社區" }, { "zip": "427", "name": "潭子區" }, { "zip": "428", "name": "大雅區" }, { "zip": "429", "name": "神岡區" }, { "zip": "432", "name": "大肚區" }, { "zip": "433", "name": "沙鹿區" }, { "zip": "434", "name": "龍井區" }, { "zip": "435", "name": "梧棲區" }, { "zip": "436", "name": "清水區" }, { "zip": "437", "name": "大甲區" }, { "zip": "438", "name": "外埔區" }, { "zip": "439", "name": "大安區" } ] }, { "name": "彰化縣", "districts": [ { "zip": "500", "name": "彰化市" }, { "zip": "502", "name": "芬園鄉" }, { "zip": "503", "name": "花壇鄉" }, { "zip": "504", "name": "秀水鄉" }, { "zip": "505", "name": "鹿港鎮" }, { "zip": "506", "name": "福興鄉" }, { "zip": "507", "name": "線西鄉" }, { "zip": "508", "name": "和美鎮" }, { "zip": "509", "name": "伸港鄉" }, { "zip": "510", "name": "員林市" }, { "zip": "511", "name": "社頭鄉" }, { "zip": "512", "name": "永靖鄉" }, { "zip": "513", "name": "埔心鄉" }, { "zip": "514", "name": "溪湖鎮" }, { "zip": "515", "name": "大村鄉" }, { "zip": "516", "name": "埔鹽鄉" }, { "zip": "520", "name": "田中鎮" }, { "zip": "521", "name": "北斗鎮" }, { "zip": "522", "name": "田尾鄉" }, { "zip": "523", "name": "埤頭鄉" }, { "zip": "524", "name": "溪州鄉" }, { "zip": "525", "name": "竹塘鄉" }, { "zip": "526", "name": "二林鎮" }, { "zip": "527", "name": "大城鄉" }, { "zip": "528", "name": "芳苑鄉" }, { "zip": "530", "name": "二水鄉" } ] }, { "name": "南投縣", "districts": [ { "zip": "540", "name": "南投市" }, { "zip": "541", "name": "中寮鄉" }, { "zip": "542", "name": "草屯鎮" }, { "zip": "544", "name": "國姓鄉" }, { "zip": "545", "name": "埔里鎮" }, { "zip": "546", "name": "仁愛鄉" }, { "zip": "551", "name": "名間鄉" }, { "zip": "552", "name": "集集鎮" }, { "zip": "553", "name": "水里鄉" }, { "zip": "555", "name": "魚池鄉" }, { "zip": "556", "name": "信義鄉" }, { "zip": "557", "name": "竹山鎮" }, { "zip": "558", "name": "鹿谷鄉" } ] }, { "name": "雲林縣", "districts": [ { "zip": "630", "name": "斗南鎮" }, { "zip": "631", "name": "大埤鄉" }, { "zip": "632", "name": "虎尾鎮" }, { "zip": "633", "name": "土庫鎮" }, { "zip": "634", "name": "褒忠鄉" }, { "zip": "635", "name": "東勢鄉" }, { "zip": "636", "name": "臺西鄉" }, { "zip": "637", "name": "崙背鄉" }, { "zip": "638", "name": "麥寮鄉" }, { "zip": "640", "name": "斗六市" }, { "zip": "643", "name": "林內鄉" }, { "zip": "646", "name": "古坑鄉" }, { "zip": "647", "name": "莿桐鄉" }, { "zip": "648", "name": "西螺鎮" }, { "zip": "649", "name": "二崙鄉" }, { "zip": "651", "name": "北港鎮" }, { "zip": "652", "name": "水林鄉" }, { "zip": "653", "name": "口湖鄉" }, { "zip": "654", "name": "四湖鄉" }, { "zip": "655", "name": "元長鄉" } ] }, { "name": "嘉義市", "districts": [ { "zip": "600", "name": "東區" }, { "zip": "600", "name": "西區" } ] }, { "name": "嘉義縣", "districts": [ { "zip": "602", "name": "番路鄉" }, { "zip": "603", "name": "梅山鄉" }, { "zip": "604", "name": "竹崎鄉" }, { "zip": "605", "name": "阿里山鄉" }, { "zip": "606", "name": "中埔鄉" }, { "zip": "607", "name": "大埔鄉" }, { "zip": "608", "name": "水上鄉" }, { "zip": "611", "name": "鹿草鄉" }, { "zip": "612", "name": "太保市" }, { "zip": "613", "name": "朴子市" }, { "zip": "614", "name": "東石鄉" }, { "zip": "615", "name": "六腳鄉" }, { "zip": "616", "name": "新港鄉" }, { "zip": "621", "name": "民雄鄉" }, { "zip": "622", "name": "大林鎮" }, { "zip": "623", "name": "溪口鄉" }, { "zip": "624", "name": "義竹鄉" }, { "zip": "625", "name": "布袋鎮" } ] }, { "name": "臺南市", "districts": [ { "zip": "700", "name": "中西區" }, { "zip": "701", "name": "東區" }, { "zip": "702", "name": "南區" }, { "zip": "704", "name": "北區" }, { "zip": "708", "name": "安平區" }, { "zip": "709", "name": "安南區" }, { "zip": "710", "name": "永康區" }, { "zip": "711", "name": "歸仁區" }, { "zip": "712", "name": "新化區" }, { "zip": "713", "name": "左鎮區" }, { "zip": "714", "name": "玉井區" }, { "zip": "715", "name": "楠西區" }, { "zip": "716", "name": "南化區" }, { "zip": "717", "name": "仁德區" }, { "zip": "718", "name": "關廟區" }, { "zip": "719", "name": "龍崎區" }, { "zip": "720", "name": "官田區" }, { "zip": "721", "name": "麻豆區" }, { "zip": "722", "name": "佳里區" }, { "zip": "723", "name": "西港區" }, { "zip": "724", "name": "七股區" }, { "zip": "725", "name": "將軍區" }, { "zip": "726", "name": "學甲區" }, { "zip": "727", "name": "北門區" }, { "zip": "730", "name": "新營區" }, { "zip": "731", "name": "後壁區" }, { "zip": "732", "name": "白河區" }, { "zip": "733", "name": "東山區" }, { "zip": "734", "name": "六甲區" }, { "zip": "735", "name": "下營區" }, { "zip": "736", "name": "柳營區" }, { "zip": "737", "name": "鹽水區" }, { "zip": "741", "name": "善化區" }, { "zip": "742", "name": "大內區" }, { "zip": "743", "name": "山上區" }, { "zip": "744", "name": "新市區" }, { "zip": "745", "name": "安定區" } ] }, { "name": "高雄市", "districts": [ { "zip": "800", "name": "新興區" }, { "zip": "801", "name": "前金區" }, { "zip": "802", "name": "苓雅區" }, { "zip": "803", "name": "鹽埕區" }, { "zip": "804", "name": "鼓山區" }, { "zip": "805", "name": "旗津區" }, { "zip": "806", "name": "前鎮區" }, { "zip": "807", "name": "三民區" }, { "zip": "811", "name": "楠梓區" }, { "zip": "812", "name": "小港區" }, { "zip": "813", "name": "左營區" }, { "zip": "814", "name": "仁武區" }, { "zip": "815", "name": "大社區" }, { "zip": "820", "name": "岡山區" }, { "zip": "821", "name": "路竹區" }, { "zip": "822", "name": "阿蓮區" }, { "zip": "823", "name": "田寮區" }, { "zip": "824", "name": "燕巢區" }, { "zip": "825", "name": "橋頭區" }, { "zip": "826", "name": "梓官區" }, { "zip": "827", "name": "彌陀區" }, { "zip": "828", "name": "永安區" }, { "zip": "829", "name": "湖內區" }, { "zip": "830", "name": "鳳山區" }, { "zip": "831", "name": "大寮區" }, { "zip": "832", "name": "林園區" }, { "zip": "833", "name": "鳥松區" }, { "zip": "840", "name": "大樹區" }, { "zip": "842", "name": "旗山區" }, { "zip": "843", "name": "美濃區" }, { "zip": "844", "name": "六龜區" }, { "zip": "845", "name": "內門區" }, { "zip": "846", "name": "杉林區" }, { "zip": "847", "name": "甲仙區" }, { "zip": "848", "name": "桃源區" }, { "zip": "849", "name": "那瑪夏區" }, { "zip": "851", "name": "茂林區" }, { "zip": "852", "name": "茄萣區" } ] }, { "name": "屏東縣", "districts": [ { "zip": "900", "name": "屏東市" }, { "zip": "901", "name": "三地門鄉" }, { "zip": "902", "name": "霧臺鄉" }, { "zip": "903", "name": "瑪家鄉" }, { "zip": "904", "name": "九如鄉" }, { "zip": "905", "name": "里港鄉" }, { "zip": "906", "name": "高樹鄉" }, { "zip": "907", "name": "鹽埔鄉" }, { "zip": "908", "name": "長治鄉" }, { "zip": "909", "name": "麟洛鄉" }, { "zip": "911", "name": "竹田鄉" }, { "zip": "912", "name": "內埔鄉" }, { "zip": "913", "name": "萬丹鄉" }, { "zip": "920", "name": "潮州鎮" }, { "zip": "921", "name": "泰武鄉" }, { "zip": "922", "name": "來義鄉" }, { "zip": "923", "name": "萬巒鄉" }, { "zip": "924", "name": "崁頂鄉" }, { "zip": "925", "name": "新埤鄉" }, { "zip": "926", "name": "南州鄉" }, { "zip": "927", "name": "林邊鄉" }, { "zip": "928", "name": "東港鎮" }, { "zip": "929", "name": "琉球鄉" }, { "zip": "931", "name": "佳冬鄉" }, { "zip": "932", "name": "新園鄉" }, { "zip": "940", "name": "枋寮鄉" }, { "zip": "941", "name": "枋山鄉" }, { "zip": "942", "name": "春日鄉" }, { "zip": "943", "name": "獅子鄉" }, { "zip": "944", "name": "車城鄉" }, { "zip": "945", "name": "牡丹鄉" }, { "zip": "946", "name": "恆春鎮" }, { "zip": "947", "name": "滿州鄉" } ] }, { "name": "宜蘭縣", "districts": [ { "zip": "260", "name": "宜蘭市" }, { "zip": "261", "name": "頭城鎮" }, { "zip": "262", "name": "礁溪鄉" }, { "zip": "263", "name": "壯圍鄉" }, { "zip": "264", "name": "員山鄉" }, { "zip": "265", "name": "羅東鎮" }, { "zip": "266", "name": "三星鄉" }, { "zip": "267", "name": "大同鄉" }, { "zip": "268", "name": "五結鄉" }, { "zip": "269", "name": "冬山鄉" }, { "zip": "270", "name": "蘇澳鎮" }, { "zip": "272", "name": "南澳鄉" } ] }, { "name": "花蓮縣", "districts": [ { "zip": "970", "name": "花蓮市" }, { "zip": "971", "name": "新城鄉" }, { "zip": "972", "name": "秀林鄉" }, { "zip": "973", "name": "吉安鄉" }, { "zip": "974", "name": "壽豐鄉" }, { "zip": "975", "name": "鳳林鎮" }, { "zip": "976", "name": "光復鄉" }, { "zip": "977", "name": "豐濱鄉" }, { "zip": "978", "name": "瑞穗鄉" }, { "zip": "979", "name": "萬榮鄉" }, { "zip": "981", "name": "玉里鎮" }, { "zip": "982", "name": "卓溪鄉" }, { "zip": "983", "name": "富里鄉" } ] }, { "name": "臺東縣", "districts": [ { "zip": "950", "name": "臺東市" }, { "zip": "951", "name": "綠島鄉" }, { "zip": "952", "name": "蘭嶼鄉" }, { "zip": "953", "name": "延平鄉" }, { "zip": "954", "name": "卑南鄉" }, { "zip": "955", "name": "鹿野鄉" }, { "zip": "956", "name": "關山鎮" }, { "zip": "957", "name": "海端鄉" }, { "zip": "958", "name": "池上鄉" }, { "zip": "959", "name": "東河鄉" }, { "zip": "961", "name": "成功鎮" }, { "zip": "962", "name": "長濱鄉" }, { "zip": "963", "name": "太麻里鄉" }, { "zip": "964", "name": "金峰鄉" }, { "zip": "965", "name": "大武鄉" }, { "zip": "966", "name": "達仁鄉" } ] }, { "name": "澎湖縣", "districts": [ { "zip": "880", "name": "馬公市" }, { "zip": "881", "name": "西嶼鄉" }, { "zip": "882", "name": "望安鄉" }, { "zip": "883", "name": "七美鄉" }, { "zip": "884", "name": "白沙鄉" }, { "zip": "885", "name": "湖西鄉" } ] }, { "name": "金門縣", "districts": [ { "zip": "890", "name": "金沙鎮" }, { "zip": "891", "name": "金湖鎮" }, { "zip": "892", "name": "金寧鄉" }, { "zip": "893", "name": "金城鎮" }, { "zip": "894", "name": "烈嶼鄉" }, { "zip": "896", "name": "烏坵鄉" } ] }, { "name": "連江縣", "districts": [ { "zip": "209", "name": "南竿鄉" }, { "zip": "210", "name": "北竿鄉" }, { "zip": "211", "name": "莒光鄉" }, { "zip": "212", "name": "東引鄉" } ] } ];

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

let map;
let marker;
let currentUser = null;

const uploadForm = document.getElementById('upload-form');
const countySelect = document.getElementById('county-select');
const districtSelect = document.getElementById('district-select');

// =================================================================
// SECTION 2: FUNCTION DEFINITIONS
// =================================================================

function initMap() {
    const defaultLocation = { lat: 25.0479, lng: 121.5171 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, center: defaultLocation, mapTypeControl: false, streetViewControl: false
    });
    marker = new google.maps.Marker({
        position: defaultLocation, map: map, draggable: true, title: "拖動以設定位置"
    });
    updateLocationFields(defaultLocation.lat, defaultLocation.lng);
    google.maps.event.addListener(marker, 'dragend', (event) => {
        updateLocationFields(event.latLng.lat(), event.latLng.lng());
    });
    populateCounties();
    signInAndGetLocation();
    fetchAndDisplayRecordings();
}

function populateCounties() {
    taiwanDistricts.forEach(county => {
        const option = document.createElement('option');
        option.value = county.name;
        option.textContent = county.name;
        countySelect.appendChild(option);
    });
}

function updateDistricts() {
    const selectedCounty = countySelect.value;
    districtSelect.innerHTML = '<option value="" selected disabled>請選擇鄉鎮市區</option>';
    districtSelect.disabled = true;
    if (selectedCounty) {
        const countyData = taiwanDistricts.find(c => c.name === selectedCounty);
        if (countyData) {
            countyData.districts.forEach(district => {
                const option = document.createElement('option');
                option.value = district.name;
                option.textContent = district.name;
                districtSelect.appendChild(option);
            });
            districtSelect.disabled = false;
        }
    }
}

function signInAndGetLocation() {
    auth.signInAnonymously()
        .then((userCredential) => {
            currentUser = userCredential.user;
            console.log("Anonymous sign-in successful. UserID:", currentUser.uid);
            getUserLocation();
        })
        .catch((error) => {
            console.error("Anonymous sign-in failed:", error);
            showAlert("無法驗證您的身分，某些功能可能無法使用。", "danger");
            getUserLocation();
        });
}

function getUserLocation() {
    const locationStatus = document.getElementById("location-status");
    const submitBtn = document.getElementById('submit-btn');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
                map.setCenter(userLocation);
                marker.setPosition(userLocation);
                updateLocationFields(userLocation.lat, userLocation.lng);
                locationStatus.textContent = "成功取得您的位置！您可以在地圖上微調。";
                locationStatus.className = "form-text text-success mt-2 fw-bold";
                submitBtn.disabled = false;
            },
            () => {
                locationStatus.textContent = "無法取得您的位置。請允許位置存取，或手動在地圖上標記。";
                locationStatus.className = "form-text text-warning mt-2";
                submitBtn.disabled = false;
            }
        );
    } else {
        locationStatus.textContent = "您的瀏覽器不支援地理定位。請手動在地圖上標記。";
        locationStatus.className = "form-text text-danger mt-2";
        submitBtn.disabled = false;
    }
}

function updateLocationFields(lat, lng) {
    document.getElementById("latitude").value = lat;
    document.getElementById("longitude").value = lng;
}

function showAlert(message, type = 'info') {
    const alertContainer = document.getElementById('alert-container');
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
    alertContainer.innerHTML = '';
    alertContainer.appendChild(alertDiv);
}

async function fetchAndDisplayRecordings() {
    const listContainer = document.getElementById('recordings-list');
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.display = 'block';
    listContainer.innerHTML = '';
    try {
        const recordingsRef = db.collection('recordings');
        const query = recordingsRef.orderBy('uploadedAt', 'desc').limit(20);
        const snapshot = await query.get();
        if (snapshot.empty) {
            listContainer.innerHTML = '<p class="text-muted text-center">目前沒有任何紀錄。</p>';
        } else {
            snapshot.forEach(doc => {
                const data = doc.data();
                const listItem = document.createElement('a');
                listItem.href = "#";
                listItem.className = 'list-group-item list-group-item-action';
                const icon = data.uploadType === 'video' 
                    ? '<i class="bi bi-camera-video-fill text-danger me-3"></i>' 
                    : '<i class="bi bi-music-note-beamed text-primary me-3"></i>';
                const uploadedDate = data.uploadedAt ? data.uploadedAt.toDate().toLocaleString('zh-TW') : '未知時間';
                listItem.innerHTML = `
                    <div class="d-flex w-100 justify-content-between">
                        <h6 class="mb-1">${icon} ${data.cicadaSpecies || '未知物種'}</h6>
                        <small class="text-muted">${uploadedDate}</small>
                    </div>
                    <p class="mb-1">${data.county || ''} ${data.district || ''}</p>
                    <small class="text-muted">${data.notes || '沒有備註'}</small>
                `;
                listItem.dataset.url = data.fileURL;
                listItem.dataset.title = data.fileName;
                listItem.dataset.type = data.uploadType;
                listItem.addEventListener('click', handleRecordClick);
                listContainer.appendChild(listItem);
            });
        }
    } catch (error) {
        console.error("Error fetching recordings:", error);
        listContainer.innerHTML = '<p class="text-danger text-center">載入紀錄時發生錯誤。請檢查 Firestore 索引設定。</p>';
    } finally {
        loadingSpinner.style.display = 'none';
    }
}

function handleRecordClick(event) {
    event.preventDefault();
    const target = event.currentTarget;
    const url = target.dataset.url;
    const title = target.dataset.title;
    const type = target.dataset.type;
    const modalTitle = document.getElementById('media-modal-title');
    const modalBody = document.getElementById('media-modal-body');
    modalTitle.textContent = title;
    modalBody.innerHTML = '';
    let mediaElement;
    if (type === 'video') {
        mediaElement = document.createElement('video');
        mediaElement.style.width = '100%';
    } else {
        mediaElement = document.createElement('audio');
    }
    mediaElement.src = url;
    mediaElement.controls = true;
    mediaElement.autoplay = true;
    modalBody.appendChild(mediaElement);
    const mediaModal = new bootstrap.Modal(document.getElementById('media-modal'));
    mediaModal.show();
}

// =================================================================
// SECTION 3: EVENT LISTENERS
// =================================================================

countySelect.addEventListener('change', updateDistricts);

uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!currentUser) {
        showAlert("使用者驗證失敗，無法上傳。請重新整理頁面再試一次。", "warning");
        return;
    }
    const submitBtn = document.getElementById('submit-btn');
    const spinner = document.getElementById('submit-spinner');
    const buttonText = document.querySelector('.button-text');
    submitBtn.disabled = true;
    spinner.style.display = 'inline-block';
    buttonText.textContent = ' 上傳中...';
    try {
        const inputFile = document.getElementById('cicada-file').files[0];
        const lat = parseFloat(document.getElementById('latitude').value);
        const lng = parseFloat(document.getElementById('longitude').value);
        if (!inputFile) throw new Error("請選擇一個要上傳的檔案。");
        if (isNaN(lat) || isNaN(lng)) throw new Error("無法獲取有效的地理位置，請嘗試在地圖上拖動圖釘。");
        let uploadType = '';
        let storagePath = '';
        if (inputFile.type.startsWith('audio/')) {
            uploadType = 'audio'; storagePath = 'cicada-sounds/';
        } else if (inputFile.type.startsWith('video/')) {
            uploadType = 'video'; storagePath = 'cicada-videos/';
        } else {
            throw new Error("不支援的檔案類型。請上傳音訊或影片檔。");
        }
        const timestamp = Date.now();
        const uniqueFileName = `${currentUser.uid}_${timestamp}_${inputFile.name}`;
        const fullStoragePath = `${storagePath}${uniqueFileName}`;
        const storageRef = storage.ref(fullStoragePath);
        const uploadTask = await storageRef.put(inputFile);
        const downloadURL = await uploadTask.ref.getDownloadURL();
        const recordingData = {
            uploadType, userId: currentUser.uid, location: new firebase.firestore.GeoPoint(lat, lng),
            county: document.getElementById('county-select').value,
            district: document.getElementById('district-select').value,
            cicadaSpecies: document.getElementById('cicada-species').value || "未知",
            recordingTime: document.getElementById('recording-time').value,
            weather: document.getElementById('weather').value,
            notes: document.getElementById('notes').value,
            fileURL: downloadURL, fileName: inputFile.name, fileSize: inputFile.size, fileType: inputFile.type,
            uploadedAt: firebase.firestore.FieldValue.serverTimestamp(),
        };
        await db.collection("recordings").add(recordingData);
        showAlert("上傳成功！感謝您的貢獻。", "success");
        uploadForm.reset();
        updateDistricts();
        fetchAndDisplayRecordings();
    } catch (error) {
        console.error("Upload failed:", error);
        showAlert(`上傳失敗: ${error.message}`, "danger");
    } finally {
        submitBtn.disabled = false;
        spinner.style.display = 'none';
        buttonText.textContent = ' 上傳紀錄';
    }
});

const mediaModalEl = document.getElementById('media-modal');
if (mediaModalEl) {
    mediaModalEl.addEventListener('hidden.bs.modal', function () {
        const modalBody = document.getElementById('media-modal-body');
        const mediaElement = modalBody.querySelector('video, audio');
        if (mediaElement) {
            mediaElement.pause();
            mediaElement.src = '';
            modalBody.innerHTML = '';
        }
    });
}
