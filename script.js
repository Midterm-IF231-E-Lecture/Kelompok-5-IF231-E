var avatarselector = 0;
var health = 100;
var healthbar = 100;
var food = 50;
var foodbar = 100;
var energy = 50;
var energybar = 100;
var study = 0;
var studybar = 100;
var semester = 1;
var money = 200000;
var userAns = false;
var level = 1;
var xp = 0;
var xpN = 5;
var foodinfridge = 20;
var edrink = 10;
var tree = 0;
var salary = 0;
var taxes = 0;
var timespaid = 0;
var channelname = document.getElementById("channelnameinput").value;
var yourname = document.getElementById("yournameinput").value;
var subs = 0;
var views = 0;
var totalviews = 0;
var eatrandom = 1000;
var drinkrandom = 1000;
var sleeprandom = 1000;
var workrandom = 1000;
var time = 7;
var day = 1;
var rand = 0;
var moneyinbank = 50000;
var depositvalue = 0;
var withdrawvalue = 0;
var buyfoodcount = 0;
var boost = 1;
var likeness = 0;
var girlfriend = false;
var jessie = new Image(220, 360);
var woody = new Image(325, 392);
avaselect = 0;

woody.src = 'Gambar/char/Woody.png';
jessie.src = 'Gambar/char/Jessie.png';
ava = document.getElementById("characterselector");

money = parseInt(money);

function display() {
  document.getElementById("moneyshow").innerHTML =
    "Rp. " + money.toFixed(2);
  healthbar = document.getElementById("healthbar");
  foodbar = document.getElementById("foodbar");
  energybar = document.getElementById("energybar");
  studybar = document.getElementById("studybar");
  document.getElementById("semester").innerHTML =
    "Semester " + semester;
  document.getElementById("foodshow").innerHTML =
    "Stok Makanan: " + foodinfridge.toFixed(1);
  document.getElementById("edrinkshow").innerHTML =
    "Stok Minuman: " + edrink.toFixed(0);
  healthbar.value = health;
  foodbar.value = food;
  energybar.value = energy;
  studybar.value = study;
  document.getElementById("level").innerHTML =
    "Level: " +
    level.toFixed(0) +
    "<br>" +
    "xp: " +
    xp.toFixed(0) +
    " / " +
    xpN.toFixed(0);
  document.getElementById("salary").innerHTML =
    "Gaji: Rp. " + level.toFixed(0) * 15000;
  channelname = document.getElementById("channelnameinput").value;
  yourname = document.getElementById("yournameinput").value;
  document.getElementById("channelname").innerHTML = channelname;
  document.getElementById("yourname").innerHTML = "<h1>" + yourname + "</h1>";
  document.getElementById("viewshow").innerHTML = "Penonton: " + views.toFixed(0);
  document.getElementById("treeshow").innerHTML = "Jumlah Pohon: " + tree;
  document.getElementById("dayshow").innerHTML = "Hari " + day;
  document.getElementById("timeshow").innerHTML =
    time.toFixed(0) + ":00";
  depositvalue = document.getElementById("deposit").value;
  withdrawvalue = document.getElementById("withdraw").value;
  document.getElementById("bankinfo").innerHTML =
    "Uang Di Bank: <br>Rp. " + moneyinbank.toFixed(2);
  buyfoodcount = document.getElementById("howmuchfood").value;
  document.getElementById("boostshow").innerHTML =
    "Sub boost: " + boost.toFixed(3) + "%";
  document.getElementById("showlikeness").innerHTML =
    "Kedekatan: <br>" + likeness + " / 1000";
  document.getElementById("minstatstudymtk").innerHTML = minstatstudymtk;
  document.getElementById("minstatstudyprog").innerHTML = minstatstudyprog;
  document.getElementById("minstatstudybing").innerHTML = minstatstudybing;
  salary = level * 15;

  if(semester == 1){
    minstatstudymtk = "+20 Genius<br>-30 Energy"
    minstatstudyprog = "+20 Genius<br>-20 Food<br>-20 Energy"
    minstatstudybing = "+20 Genius<br>-30 Food<br>-10 Energy"
  }

  if(semester == 2){
    minstatstudymtk = "+15 Genius<br>-30 Energy"
    minstatstudyprog = "+15 Genius<br>-20 Food<br>-20 Energy"
    minstatstudybing = "+15 Genius<br>-30 Food<br>-10 Energy"
  }

  if(semester == 3){
    minstatstudymtk = "+10 Genius<br>-30 Energy"
    minstatstudyprog = "+10 Genius<br>-20 Food<br>-20 Energy"
    minstatstudybing = "+10 Genius<br>-30 Food<br>-10 Energy"
  }

  if(semester == 4){
    minstatstudymtk = "+10 Genius<br>-50 Energy"
    minstatstudyprog = "+10 Genius<br>-30 Food<br>-30 Energy"
    minstatstudybing = "+10 Genius<br>-40 Food<br>-20 Energy"
  }

  if(semester == 5){
    minstatstudymtk = "+5 Genius<br>-50 Energy"
    minstatstudyprog = "+5 Genius<br>-30 Food<br>-30 Energy"
    minstatstudybing = "+5 Genius<br>-40 Food<br>-20 Energy"
  }

  if(semester == 6){
    minstatstudymtk = "+5 Genius<br>-60 Energy"
    minstatstudyprog = "+5 Genius<br>-40 Food<br>-40 Energy"
    minstatstudybing = "+5 Genius<br>-50 Food<br>-30 Energy"
  }

  if(semester == 7){
    minstatstudymtk = "+5 Genius<br>-80 Energy"
    minstatstudyprog = "+5 Genius<br>-50 Food<br>-50 Energy"
    minstatstudybing = "+5 Genius<br>-60 Food<br>-40 Energy"
  }

  if(semester == 8){
    minstatstudymtk = "+5 Genius<br>-99 Energy"
    minstatstudyprog = "+5 Genius<br>-70 Food<br>-70 Energy"
    minstatstudybing = "+5 Genius<br>-80 Food<br>-60 Energy"
  }

  if (depositvalue > money) {
    document.getElementById("deposit").value = money;
  }
  if (withdrawvalue > moneyinbank) {
    document.getElementById("withdraw").value = moneyinbank;
  }

  if (subs >= 1000000000000 && subs < 1000000000000000) {
    document.getElementById("subshow").innerHTML =
      "Subscriber: " + subs.toFixed(8) / 1000000000000 + "T";
  } else if (subs >= 1000000000 && subs < 1000000000000) {
    document.getElementById("subshow").innerHTML =
      "Subscriber: " + subs.toFixed(4) / 1000000000 + "B";
  } else if (subs >= 1000000 && subs < 1000000000) {
    document.getElementById("subshow").innerHTML =
      "Subscriber: " + subs.toFixed(2) / 1000000 + "M";
  } else if (subs >= 1000) {
    document.getElementById("subshow").innerHTML =
      "Subscriber: " + subs.toFixed(2) / 1000 + "K";
  } else {
    document.getElementById("subshow").innerHTML = "Subscriber: " + subs.toFixed(0);
  }

  if (energy <= 0) {
    health = health - 1 / 25;
  }
  if (food <= 0) {
    health = health - 1 / 25;
  }

  if (xp >= xpN) {
    xp = xp - xpN;
    xpN = xpN + 5;
    level++;
    alert("Leveled up!");
    money = money + level * 5;
  }

  if (time >= 0){
    document.getElementById("greet").innerHTML =
    "Selamat Malam";
  }

  if (time >= 5){
    document.getElementById("greet").innerHTML =
    "Selamat Pagi";
  }

  if (time >= 10){
    document.getElementById("greet").innerHTML =
    "Selamat Siang";
  }

  if (time >= 15){
    document.getElementById("greet").innerHTML =
    "Selamat Sore";
  }

  if (time >= 18){
    document.getElementById("greet").innerHTML =
    "Selamat Malam";
  }

  if (energy > 100) {
    energy = 100;
  }
  if (health > 100) {
    health = 100;
  }
  if (food > 100) {
    food = 100;
  }

  if (study > 100){
    study = 100;
  }

  if (health <= 0) {
    food = 0;
    health = 0;
    energy = 0;
  }

  if (study >= 100){
    study = 0;
    semester = semester + 1;
  }
  
  if (semester > 8){
    alert(
      "Selamat! Kamu Lulus Dari UMN!!"
    )
    semester = 1;
    health = 100;
    energy = 50;
    food = 50;
    time = 7;
  }

  if (day % 7 === 0 && timespaid != day / 7) {
    tax();
  }

  if (time >= 24) {
    time = time - 24;
    day++;
  }

  if (moneyinbank < 1) {
    document.getElementById("withdraw").value = moneyinbank;
  }

  if (time >= 7 && time <= 18) {
    document.getElementById("foodbutton").style.visibility = "visible";
    document.getElementById("drinkbutton").style.visibility = "visible";
    document.getElementById("howmuchfood").style.visibility = "visible";
  } else {
    document.getElementById("foodbutton").style.visibility = "hidden";
    document.getElementById("drinkbutton").style.visibility = "hidden";
    document.getElementById("howmuchfood").style.visibility = "hidden";
  }

  if (time >= 7 && time <= 20) {
    document.getElementById("workbutton").style.visibility = "visible";
  } else {
    document.getElementById("workbutton").style.visibility = "hidden";
  }

  foodinfridge = foodinfridge + tree / 2000;

  if (day >= 100) {
    alert(
      "Kamu telah di DO dari UMN :("
    );
    alert(
      "Kamu Akan Mengulang Kembali Game Ini, Tapi Tenang Kami Tidak Mengambil Sedikitpun Dari Hartamu :)"
    );
    day = 1;
    food = 50;
    energy = 50;
    study = 0;
    semester = 1;
    health = 100;
  }

  if (buyfoodcount >= 1000) {
    document.getElementById("howmuchfood").value = 999;
  }

  if (money <= buyfoodcount * 10) {
    document.getElementById("howmuchfood").value = Math.floor(money / 10);
  }

  if (avatarselector >= 1){
    document.getElementById("game").style.display = "inline-block";
    document.getElementById("contents").style.display = "inline-block"
    document.getElementById("avatar").style.display = "none";
  }
  if (avatarselector == 0){
    document.getElementById("game").style.display = "none";
    document.getElementById("contents").style.display = "none";
    document.getElementById("avatar").style.display = "block";
  }

  if (day >= 10) {
    document.getElementById("garden").style.visibility = "visible";
  }
  if (day < 10) {
    document.getElementById("garden").style.visibility = "hidden";
  }
  if (day >= 5) {
    document.getElementById("youtube").style.visibility = "visible";
  } else {
    document.getElementById("youtube").style.visibility = "hidden";
  }

  if (buyfoodcount < 0) {
    document.getElementById("howmuchfood").value = 0;
  }
  if (depositvalue < 0) {
    document.getElementById("deposit").value = 0;
  }
  if (withdrawvalue < 0) {
    document.getElementById("withdrawvalue").value = 0;
  }

  if (!depositvalue || depositvalue == "") {
    document.getElementById("deposit").value = 0;
  }

  if (money < 0){
    money = 0;
  }

  if (money <= 0 && moneyinbank != 0) {
    alert(
      "Anda Bokek, GA ADA DUID :')"
    );
    alert(
      "Hufft, Untung Saja Masih Ada Simpanan Uang Di Bank"
    );
    money = moneyinbank;
    moneyinbank = 0;
  }

  if (money == 0 && moneyinbank == 0){
    alert(
      "Anda Bokek, GA ADA DUID :')"
    );
    money = money + 1;
  }

  if (likeness < 100) {
    document.getElementById("datelevel").innerHTML = "Level: Orang Asing";
  }

  if (likeness >= 100) {
    document.getElementById("datelevel").innerHTML = "Level: Teman";
  }
  if (likeness >= 500) {
    document.getElementById("datelevel").innerHTML = "Level: Sahabat";
  }
  if (likeness >= 750) {
    document.getElementById("datelevel").innerHTML = "level: Pacar";
  }
  if (likeness >= 1000) {
    document.getElementById("datelevel").innerHTML = "level: Istri";
  }
  if (likeness >= 1001) {
    likeness = 1000;
  }
  if (likeness === 1000) {
    girlfriend = true;
  }
  if (girlfriend === true) {
    subs = subs + 1 / 500;
    money = money + 5 / 1000;
    foodinfridge = foodinfridge + 1 / 1000;
  }

  if (food < 0) {
    food = 0;
  }
  if (energy < 0) {
    energy = 0;
  }

  setTimeout("display();", 1);
}

function eat() {
  if (foodinfridge >= 1 && food != 100) {
    food = food + 10;
    foodinfridge--;
  }
}

function gotowork() {
  if (energy >= 40 && food >= 40) {
    energy = energy - 40;
    food = food - 40;
    money = money + level * 15000;
    xp = xp + Math.floor(Math.random() * level * 3 + 1);
    time = time + Math.floor(Math.random() * level * 3 + level);
    workrandom = Math.floor(Math.random() * 50 + 1);

    if (workrandom === 1) {
      alert(
        "Kamu Bekerja Lebih Cepat Dari Biasanya, Bossmu Memberimu Uang Tambah!"
      );
      money = money + level * 10;
    }
    if (workrandom === 2) {
      alert(
        "Bossmu Memberimu Pekerjaan Yang Lebih Ringan Dari Biasanya"
      );
      energy = energy + 20;
    }
    if (workrandom === 3) {
      alert(
        "Bossmu Melihatmu Bekerja Keras! (+ 10 exp)"
      );
      xp = xp + 10;
    }
    if (workrandom === 4) {
      alert("Kamu Merusakkan Mesin Fotocopy, Kamu Harus Membayar Rp. 25");
      money = money - 25;
    }
  }
}

function sleep() {
  if (energy != 100) {
    energy = energy + 100;
    food = food-25;
    time = time + 8;
    sleeprandom = Math.floor(Math.random() * 25 + 1);

    if (sleeprandom === 1) {
      alert("Kamu Mmipi Indah!");
      food = food + 10;
    }
    if (sleeprandom === 2) {
      alert(
        "Kamu Bermimpi Dikejar Pembunuh dan Kamu Mati!"
      );
      health = health - 10;
    }
    if (sleeprandom === 3) {
      alert(
        "Kamu Bermimpi Dikejar Hantu dan Kamu Mati!"
      );
      health = health - 10;
    }
  }
}

function buyfood() {
  if (money >= buyfoodcount * 10) {
    foodinfridge = parseInt(foodinfridge) + parseInt(buyfoodcount);
    money = money - parseInt(buyfoodcount) * 10000;
  }
}

function buyedrink() {
  if (money >= 15) {
    edrink++;
    money = money - 15000;
  }
}

function drink() {
  if (edrink >= 1 && energy != 100) {
    edrink--;
    energy = energy + 15;
  }
}

function tax() {
  taxes = taxes + Math.floor(Math.random() * 50000 + 1);
  if (money <= 0) {
    alert("Kamu Harus Bayar Pajak, Atau Rumahmu Akan Dihancurkan!");
    health = 0;
  } else {
    confirm("Petugas Pajak Telah Tiba, Kamu Harus Membayar! Rp. " + taxes );
    money = money - taxes;
    timespaid++;
    return;
  }
}

function healten() {
  if (money >= 50000 && health != 100) {
    health = health + 10;
    food = food + 10;
    energy = energy + 10;
    money = money - 50000;
    time = time + 6;
  }
}

function healfifty() {
  if (money >= 200000 && health != 100) {
    health = health + 50;
    food = food + 20;
    energy = energy + 20;
    money = money - 200000;
    time = time + 6;
  }
}

function buytree() {
  if (money >= 250000 && tree < 10) {
    tree++;
    money = money - 250000;
  }
}

function deposit() {
  if (depositvalue <= money) {
    money = money - parseInt(depositvalue);
    moneyinbank = parseInt(moneyinbank) + parseInt(depositvalue);
  }
}

function withdraw() {
  if (withdrawvalue <= moneyinbank) {
    moneyinbank = moneyinbank - withdrawvalue;
    money = parseInt(money) + parseInt(withdrawvalue);
  }
}

function bank() {
  moneyinbank = moneyinbank * 1.025;
  setTimeout("bank();", 7500);
}


function idle() {
  if (food >= 10 && energy >= 10) {
    food = food - 10;
    energy = energy - 10;
    time = time + 1;
  }
}

function upgradeboost() {
  if (money >= 50000) {
    money = money - 50000;
    boost = boost + Math.floor(Math.random() * 30 + 1) / 10;
    time = time + 1;
  }
}

function upgradeboost2() {
  if (money >= 100000) {
    money = money - 100000;
    boost = boost + Math.floor(Math.random() * 70 + 30) / 10;
    time = time + 3;
  }
}

function upgradeboost3() {
  if (money >= 250000) {
    money = money - 250000;
    boost = boost + Math.floor(Math.random() * 160 + 70) / 10;
    time = time + 9;
  }
}

function upgradeboost4() {
  if (money >= 500000) {
    money = money - 500000;
    boost = boost + Math.floor(Math.random() * 400 + 160) / 10;
    time = time + 168;
  }
}

function recordvideo() {
  if (energy >= 20 && food >= 20) {
    subs = subs + subs * Math.floor(Math.random() * 10 + 1) / 1000 + 1 * boost;
    views = subs * Math.floor(Math.random() * 20 + 1);
    totalviews = totalviews + views;
    energy = energy - 20;
    food = food - 20;
    money = money + views;
    time = time + 2;
    boost = boost + Math.floor(Math.random() * 100 + 1) / 1000;
  }
}

function walk() {
  userAns = false;
  rand = Math.floor(Math.random() * 6 + 1);

  food = food - 25;
  energy = energy - 25;

  if (rand === 1) {
    alert("Behh, Nemu 20 Ribu, Lumayannn");
    money = money + 20000;
  }
  if (rand === 2) {
    alert("10 Ribu? Lumayan HAHA");
    money = money + 10000;
  }
  if (rand === 3) {
    alert("Wihh, Nemu Nasi Padang Makan Ah! (+ 25 food point)");
    food = food + 25;
  }
  if (rand === 4) {
    alert(
      "Kamu Berlari, dan Tidak Sengaja Menendang Kucing (- Rp. 25000)"
    );
    money = money - 25000;
  }
  if (rand === 5) {
    alert("Kamu Bertemu Cewek, Apa Yang Akan Kamu Lakukan ?");
    userAns = confirm("(OK) Mengajaknya Pergi Ke Restoran?, (CANCEL) Ngobrol");

    if (userAns === true) {
      alert("Dia Menyukai Restorannya!");
      userAns = confirm(
        "(OK) Ajak Dia Pergi Ke Rumahmu, (CANCEL) Pergi Ke Taman"
      );

      if (userAns === true) {
        alert("BAGUS, Dia Menamparmu... Nice Try Kawan");
      }

      if (userAns === false) {
        alert(
          "Kamu Pergi Ke Taman, dan Ada Seseorang Yang Menyerangnya dan Kamu Lari Terbirit Birit."
        );
      }
    }

    if (userAns === false) {
      alert(
        "Tidak Terjadi Apa Apa"
      );
    }
  }

  if (rand === 6) {
    alert("Seperti Hari Biasa!");
  }
}

function talk() {
  if (energy >= 5 && food >= 5) {
    energy = energy - 5;
    food = food - 5;
    likeness += Math.floor(Math.random() * 3 + 1);
  }
}

function invite() {
  if (likeness >= 25 && money >= 25000 && energy >= 10) {
    money = money - 25000;
    energy = energy - 10;
    food = food + 15;
    likeness += Math.floor(Math.random() * 5 + 2);
  }
}

function comeover() {
  if (likeness >= 50 && energy >= 70) {
    energy = energy - 70;
    food = food + 10;
    likeness += Math.floor(Math.random() * 15 + 5);
  }
}

function buygift() {
  if (money >= 500000) {
    money = money - 500000;
    likeness += Math.floor(Math.random() * 150 + 50);
  }
}

function belajarmtk(){
  if (semester == 1){
    if(energy >= 30){
      study = study + 20;
      energy = energy - 30;
      time = time + 3;
    }
    else{
      alert(
        "Kepala Sudah Pening, Isi Energy Dulu"
      )
    }
  }
  if (semester == 2){
    if(energy >= 30){
      study = study + 15;
      energy = energy - 30;
      time = time + 3;
    }
    else{
      alert(
        "Kepala Sudah Pening, Isi Energy Dulu"
      )
    }
  }
  if (semester == 3){
    if(energy >= 30){
      study = study + 10;
      energy = energy - 30;
      time = time + 3;
    }
    else{
      alert(
        "Kepala Sudah Pening, Isi Energy Dulu"
      )
    }
  }
  if (semester == 4){
    if(energy >= 50){
      study = study + 10;
      energy = energy - 50;
      time = time + 3;
    }
    else{
      alert(
        "Kepala Sudah Pening, Isi Energy Dulu"
      )
    }
  }
  if (semester == 5){
    if(energy >= 50){
      study = study + 5;
      energy = energy - 50;
      time = time + 3;
    }
    else{
      alert(
        "Kepala Sudah Pening, Isi Energy Dulu"
      )
    }
  }
  if (semester == 6){
    if(energy >= 60){
      study = study + 5;
      energy = energy - 60;
      time = time + 3;
    }
    else{
      alert(
        "Kepala Sudah Pening, Isi Energy Dulu"
      )
    }
  }
  if (semester == 7){
    if(energy >= 80){
      study = study + 5;
      energy = energy - 80;
      time = time + 3;
    }
    else{
      alert(
        "Kepala Sudah Pening, Isi Energy Dulu"
      )
    }
  }
  if (semester == 8){
    if(energy >= 99){
      study = study + 5;
      energy = energy - 99;
      time = time + 3;
    }
    else{
      alert(
        "Kepala Sudah Pening, Isi Energy Dulu"
      )
    }
  }
}
  
function belajarprog(){
  if (semester == 1){
    if(energy >= 20 && food >= 20){
      study = study + 20;
      food = food - 20;
      energy = energy - 20;
      time = time + 3;
    }
    else{
      alert(
        "Hah, Sepertinya Sudah Cukup"
      )
    }
  }
  if (semester == 2){
    if(energy >= 20 && food >= 20){
      study = study + 15;
      food = food - 20;
      energy = energy - 20;
      time = time + 3;
    }
    else{
      alert(
        "Hah, Sepertinya Sudah Cukup"
      )
    }
  }
  if (semester == 3){
    if(energy >= 20 && food >= 20){
      study = study + 10;
      food = food - 20;
      energy = energy - 20;
      time = time + 3;
    }
    else{
      alert(
        "Hah, Sepertinya Sudah Cukup"
      )
    }
  }
  if (semester == 4){
    if(energy >= 30 && food >= 30){
      study = study + 10;
      food = food - 30;
      energy = energy - 30;
      time = time + 3;
    }
    else{
      alert(
        "Hah, Sepertinya Sudah Cukup"
      )
    }
  }
  if (semester == 5){
    if(energy >= 30 && food >= 30){
      study = study + 5;
      food = food - 30;
      energy = energy - 30;
      time = time + 3;
    }
    else{
      alert(
        "Hah, Sepertinya Sudah Cukup"
      )
    }
  }
  if (semester == 6){
    if(energy >= 40 && food >= 40){
      study = study + 5;
      food = food - 40;
      energy = energy - 40;
      time = time + 3;
    }
    else{
      alert(
        "Hah, Sepertinya Sudah Cukup"
      )
    }
  }
  if (semester == 7){
    if(energy >= 50 && food >= 50){
      study = study + 5;
      food = food - 50;
      energy = energy - 50;
      time = time + 3;
    }
    else{
      alert(
        "Hah, Sepertinya Sudah Cukup"
      )
    }
  }
  if (semester == 8){
    if(energy >= 60 && food >= 60){
      study = study + 5;
      food = food - 60;
      energy = energy - 60;
      time = time + 3;
    }
    else{
      alert(
        "Hah, Sepertinya Sudah Cukup"
      )
    }
  }
}

function belajarbing(){
  if (semester == 1){
    if(energy >= 10 && food >= 30){
      study = study + 20;
      food = food - 30;
      energy = energy - 10;
      time = time + 3;
    }
    else{
      alert(
        "Alright, I Think It's Done For Now"
      )
    }
  }
  if (semester == 2){
    if(energy >= 10 && food >= 30){
      study = study + 15;
      food = food - 30;
      energy = energy - 10;
      time = time + 3;
    }
    else{
      alert(
        "Alright, I Think It's Done For Now"
      )
    }
  }
  if (semester == 3){
    if(energy >= 10 && food >= 30){
      study = study + 10;
      food = food - 30;
      energy = energy - 10;
      time = time + 3;
    }
    else{
      alert(
        "Alright, I Think It's Done For Now"
      )
    }
  }
  if (semester == 4){
    if(energy >= 20 && food >= 40){
      study = study + 10;
      food = food - 40;
      energy = energy - 20;
      time = time + 3;
    }
    else{
      alert(
        "Alright, I Think It's Done For Now"
      )
    }
  }
  if (semester == 5){
    if(energy >= 20 && food >= 40){
      study = study + 5;
      food = food - 40;
      energy = energy - 20;
      time = time + 3;
    }
    else{
      alert(
        "Alright, I Think It's Done For Now"
      )
    }
  }
  if (semester == 6){
    if(energy >= 30 && food >= 50){
      study = study + 5;
      food = food - 50;
      energy = energy - 30;
      time = time + 3;
    }
    else{
      alert(
        "Alright, I Think It's Done For Now"
      )
    }
  }
  if (semester == 7){
    if(energy >= 40 && food >= 60){
      study = study + 5;
      food = food - 60;
      energy = energy - 40;
      time = time + 3;
    }
    else{
      alert(
        "Alright, I Think It's Done For Now"
      )
    }
  }
  if (semester == 8){
    if(energy >= 50 && food >= 70){
      study = study + 5;
      food = food - 70;
      energy = energy - 50;
      time = time + 3;
    }
    else{
      alert(
        "Alright, I Think It's Done For Now"
      )
    }
  }
}

function select(){
  avatarselector = avatarselector + 1;
}

function next(){
  avaselect = avaselect + 1;
}

function prev(){
  avaselect = avaselect - 1;
}

if(avaselect > 1){
  avaselect = 1;
}

if(avaselect < 0){
  avaselect = 0;
}

if(avaselect == 1){
  ava.append(jessie);
}

if(avaselect == 0){
  ava.append(woody);
}