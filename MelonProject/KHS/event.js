window.addEventListener("load", function () {
  let all_imgs = [
    "imgs/all/img01.jpg",
    "imgs/all/img02.jpg",
    "imgs/all/img03.jpg",
    "imgs/all/img04.jpg",
    "imgs/all/img05.jpg",
    "imgs/all/img06.jpg",
  ];
  let kor_imgs = [
    "imgs/kor/img01.jpg",
    "imgs/kor/img02.jpg",
    "imgs/kor/img03.jpg",
    "imgs/kor/img04.jpg",
    "imgs/kor/img05.jpg",
    "imgs/kor/img06.jpg",
  ];
  let eng_imgs = [
    "imgs/eng/img01.jpg",
    "imgs/eng/img02.jpg",
    "imgs/eng/img03.jpg",
    "imgs/eng/img04.jpg",
    "imgs/eng/img05.jpg",
    "imgs/eng/img06.jpg",
  ];

  let all_name = [
    "Exo",
    "다이나믹듀오",
    "도쿄리벤저스",
    "YOASOBI",
    "YOASOBI",
    "imase",
  ];
  let kor_name = ["BTS", "BTS", "PSY", "BoA", "BoA", "BE"];
  let eng_name = ["POP", "Bruno Mars", "Sam", "Sam", "Metal", "Boob"];

  let page_num_flag = 0;

  let all_btn = this.document.querySelector("#hs_all_btn");
  all_btn.addEventListener("click", all_img);

  let kor_btn = this.document.querySelector("#hs_kor_btn");
  kor_btn.addEventListener("click", kor_img);

  let eng_btn = this.document.querySelector("#hs_eng_btn");
  eng_btn.addEventListener("click", eng_img);

  let right_btn = this.document.querySelector("#hs_odd_span_right");
  right_btn.addEventListener("click", right_go);

  let left_btn = this.document.querySelector("#hs_odd_span_left");
  left_btn.addEventListener("click", left_go);

  function right_go() {
    if (page_num_flag == 0) {
      kor_img();
      page_num_flag++;
    } else if (page_num_flag == 1) {
      eng_img();
      page_num_flag++;
    }
  }

  function left_go() {
    if (page_num_flag == 2) {
      kor_img();
      page_num_flag--;
    } else if (page_num_flag == 1) {
      all_img();
      page_num_flag--;
    }
  }

  function all_img() {
    for (let i = 0; i < all_imgs.length; i++) {
      let img = document.querySelector(".hs_album_frame" + (i + 1));
      img.style.backgroundImage = "url('" + all_imgs[i] + "')";
    }
    let page_num_element = document.querySelector(".hs_page_num");
    page_num_element.innerHTML = "1/3";
    write_all_name();
  }

  function kor_img() {
    for (let i = 0; i < kor_imgs.length; i++) {
      let img = document.querySelector(".hs_album_frame" + (i + 1));
      img.style.backgroundImage = "url('" + kor_imgs[i] + "')";
    }
    let page_num_element = document.querySelector(".hs_page_num");
    page_num_element.innerHTML = "2/3";
    write_kor_name();
  }

  function eng_img() {
    for (let i = 0; i < eng_imgs.length; i++) {
      let img = document.querySelector(".hs_album_frame" + (i + 1));
      img.style.backgroundImage = "url('" + eng_imgs[i] + "')";
    }
    let page_num_element = document.querySelector(".hs_page_num");
    page_num_element.innerHTML = "3/3";
    write_eng_name();
  }

  function write_all_name() {
    name_arr = document.getElementsByClassName("hs_singer_name");
    for (i = 0; i < name_arr.length; i++) {
      name_arr[i].innerText = all_name[i];
    }
  }

  function write_kor_name() {
    name_arr = document.getElementsByClassName("hs_singer_name");
    for (i = 0; i < name_arr.length; i++) {
      name_arr[i].innerText = kor_name[i];
    }
  }

  function write_eng_name() {
    name_arr = document.getElementsByClassName("hs_singer_name");
    for (i = 0; i < name_arr.length; i++) {
      name_arr[i].innerText = eng_name[i];
    }
  }


    
  });
