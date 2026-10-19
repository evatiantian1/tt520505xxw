(() => {
  "use strict";

  const anniversaryStart = new Date("2024-10-19T00:00:00+08:00");
  const secondAnniversary = new Date("2026-10-19T00:00:00+08:00");
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const dayInMs = 24 * 60 * 60 * 1000;

  const timelineData = [
    {
      kind: "title",
      date: "2024.10.19",
      kicker: "THE BEGINNING",
      title: "从这一天开始",
      copy: "我们在学校认识，也在这一天决定并肩往前走。"
    },
    {
      photo: "01-birthday-yifan.jpg",
      date: "2025.04.16",
      place: "YOUR BIRTHDAY",
      title: "你陪我过生日",
      copy: "蛋糕、礼物，还有坐在对面的你。那天被记住的不只是生日。",
      alt: "湉湉生日时和康洪武的合照"
    },
    {
      photo: "24-tianjin-qing.jpg",
      date: "2025.05.01",
      place: "TIANJIN",
      title: "五一去天津",
      copy: "走过瓷房子和张学良故居，也逛了五大道。晚上在津湾码头看灯，这一天就被记住了。",
      alt: "天津瓷房子的照片"
    },
    {
      photo: "03-birthday-wuhang.jpg",
      date: "2025.05.05",
      place: "HIS BIRTHDAY",
      title: "轮到我给你过生日",
      copy: "这次换我准备惊喜。三张拍立得，把那天留在了手里。",
      alt: "生日时一起看拍立得的照片"
    },
    {
      photo: "04-xiamen-gulangyu.jpg",
      date: "2025 夏天",
      place: "XIAMEN",
      title: "鼓浪屿的风",
      copy: "厦门的第一张合照。后面还有海，有牵手，也有很多很慢的夏天。",
      alt: "在厦门鼓浪屿的合照"
    },
    {
      photo: "06-zhuhai-sunrise.jpg",
      date: "2025 夏天",
      place: "ZHUHAI",
      title: "一起看日出",
      copy: "在珠海的海边等天亮。海洋馆、日出和广州，都被装进了同一段旅行。",
      alt: "在珠海海边看日出时的合照"
    },
    {
      photo: "10-hongkong.jpg",
      date: "2025 夏天",
      place: "HONG KONG / MACAU",
      title: "香港与澳门",
      copy: "从维港到澳门，行程很满，照片留下了最轻松的部分。",
      alt: "在香港海边的合照"
    },
    {
      kind: "title",
      date: "2025.06",
      kicker: "GRADUATION",
      title: "你毕业了",
      copy: "从学校走向下一段生活，我们开始把见面认真安排进各自的时间里。"
    },
    {
      kind: "title",
      date: "2025.09",
      kicker: "DIFFERENT TIME ZONES",
      title: "你去了英国",
      copy: "从那之后，见面需要计划。每一次重逢，也变得更有分量。"
    },
    {
      photo: "13-beijing-us.jpg",
      date: "2026.02.16",
      place: "BEIJING",
      title: "你回北京找我",
      copy: "一起去了汤泉，也一起做了漆扇。那个冬天因为见面变得很具体。",
      alt: "在北京汤泉的合照"
    },
    {
      photo: "16-nanchang-mirror.jpg",
      date: "2026 夏天",
      place: "NANCHANG / JINGDEZHEN",
      title: "我去找你的夏天",
      copy: "南昌见面，再去景德镇。那顿你点给我的三文鱼，也被记住了。",
      alt: "在南昌镜子前拍的照片"
    },
    {
      photo: "20-seoul-tower.jpg",
      date: "2026",
      place: "SEOUL / BUSAN",
      title: "在韩国继续合照",
      copy: "首尔塔、人生四格、釜山的海鲜和小火车。第二年的地图又多了几个点。",
      alt: "在首尔塔附近的夜景合照"
    },
    {
      kind: "title",
      date: "2026.10.19",
      kicker: "TWO YEARS",
      title: "二周年快乐",
      copy: "故事没有停在第二年。下一页，还是我们一起写。"
    }
  ];

  const galleryData = [
    {
      src: "01-birthday-yifan.jpg",
      place: "2025.04.16",
      caption: "你陪我过生日",
      alt: "湉湉生日时和康洪武的合照"
    },
    {
      src: "02-birthday-dinner.jpg",
      place: "2025.04.16",
      caption: "生日晚餐",
      alt: "生日晚餐碰杯的照片"
    },
    {
      src: "03-birthday-wuhang.jpg",
      place: "2025.05.05",
      caption: "我替你准备的生日",
      alt: "生日时一起看拍立得的照片"
    },
    {
      src: "24-tianjin-qing.jpg",
      place: "天津",
      caption: "瓷房子",
      alt: "天津瓷房子的照片"
    },
    {
      src: "25-tianjin-mansion.jpg",
      place: "天津",
      caption: "张学良故居",
      alt: "天津张学良故居的照片"
    },
    {
      src: "26-tianjin-church.jpg",
      place: "天津",
      caption: "街边的教堂",
      alt: "天津街边教堂的照片"
    },
    {
      src: "27-tianjin-wudadao.jpg",
      place: "天津",
      caption: "五大道",
      alt: "天津五大道街牌的照片"
    },
    {
      src: "28-tianjin-jinwan.jpg",
      place: "天津",
      caption: "津湾码头的夜",
      alt: "天津津湾码头夜景"
    },
    {
      src: "04-xiamen-gulangyu.jpg",
      place: "厦门",
      caption: "鼓浪屿",
      alt: "在厦门鼓浪屿的合照"
    },
    {
      src: "05-xiamen-sea.jpg",
      place: "厦门",
      caption: "海边牵手",
      alt: "在厦门海边牵手拍下的照片"
    },
    {
      src: "06-zhuhai-sunrise.jpg",
      place: "珠海",
      caption: "一起看日出",
      alt: "在珠海看日出时的合照"
    },
    {
      src: "07-zhuhai-aquarium.jpg",
      place: "珠海",
      caption: "海洋馆",
      alt: "珠海海洋馆的鲸鲨水族箱"
    },
    {
      src: "08-zhuhai-aquarium-us.jpg",
      place: "珠海",
      caption: "海洋馆里的我们",
      alt: "在珠海海洋馆水族箱前的合照"
    },
    {
      src: "09-zhuhai-aquarium-hands.jpg",
      place: "珠海",
      caption: "水族箱前的牵手",
      alt: "在海洋馆牵手拍下的照片"
    },
    {
      src: "10-hongkong.jpg",
      place: "香港",
      caption: "维港边的合照",
      alt: "在香港海边的合照"
    },
    {
      src: "11-macau.jpg",
      place: "澳门",
      caption: "澳门街头",
      alt: "在澳门金色雕塑前的照片"
    },
    {
      src: "12-macau-casino.jpg",
      place: "澳门",
      caption: "赌场里的金色雕塑",
      alt: "在澳门赌场金色雕塑前的照片"
    },
    {
      src: "13-beijing-us.jpg",
      place: "北京",
      caption: "你回北京找我",
      alt: "在北京汤泉的合照"
    },
    {
      src: "14-lacquer-fans.jpg",
      place: "北京",
      caption: "一起做的漆扇",
      alt: "两个人一起做的漆扇"
    },
    {
      src: "15-nanchang-hands.jpg",
      place: "南昌",
      caption: "去找你的路上",
      alt: "在南昌牵手拍下的照片"
    },
    {
      src: "16-nanchang-mirror.jpg",
      place: "南昌",
      caption: "镜子里的我们",
      alt: "在南昌镜子前拍的照片"
    },
    {
      src: "17-nanchang-us.jpg",
      place: "南昌",
      caption: "南昌的夏天",
      alt: "在南昌的近照合照"
    },
    {
      src: "18-jingdezhen-salmon.jpg",
      place: "景德镇",
      caption: "你点给我的三文鱼",
      alt: "景德镇餐厅里的三文鱼饭"
    },
    {
      src: "19-jingdezhen.jpg",
      place: "景德镇",
      caption: "景德镇的这一天",
      alt: "在景德镇拍下的照片"
    },
    {
      src: "20-seoul-tower.jpg",
      place: "首尔",
      caption: "首尔塔附近",
      alt: "在首尔塔附近的夜景合照"
    },
    {
      src: "21-seoul-fourcut.jpg",
      place: "首尔",
      caption: "人生四格",
      alt: "在首尔拍的人生四格照片"
    },
    {
      src: "22-busan-seafood.jpg",
      place: "釜山",
      caption: "海鲜拼盘",
      alt: "在釜山吃的海鲜拼盘"
    },
    {
      src: "23-busan-train.jpg",
      place: "釜山",
      caption: "小火车上的我们",
      alt: "在釜山小火车上的合照"
    }
  ];

  const galleryGroups = [
    {
      layout: "wide",
      date: "2025.04 - 05",
      kicker: "TWO BIRTHDAYS",
      title: "把彼此的生日认真记住",
      note: "蛋糕、碰杯、拍立得。那阵子才发现，被人惦记这件事真的很具体。",
      photos: [0, 1, 2]
    },
    {
      layout: "wide",
      date: "2025.05.01",
      kicker: "TIANJIN SPRING",
      title: "五一去天津",
      note: "瓷房子、张学良故居、五大道和津湾码头。没有刻意安排的一天，也值得单独放进相册。",
      photos: [3, 4, 5, 6, 7]
    },
    {
      layout: "tall",
      date: "2025 SUMMER",
      kicker: "XIAMEN / ZHUHAI / HONG KONG / MACAU",
      title: "闽粤的夏天",
      note: "鼓浪屿的风、珠海的海、海洋馆的蓝，还有香港和澳门。热得很认真，开心也是。",
      photos: [8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
    {
      layout: "wide",
      date: "2026.02.16",
      kicker: "BEIJING REUNION",
      title: "你回北京找我",
      note: "汤泉、漆扇，还有一个被见面填得很满的冬天。",
      photos: [17, 18]
    },
    {
      layout: "tall",
      date: "2026 SUMMER",
      kicker: "NANCHANG / JINGDEZHEN",
      title: "去找你的夏天",
      note: "南昌、景德镇，还有你点给我的三文鱼。好吃的和好玩的都记住了。",
      photos: [19, 20, 21, 22, 23]
    },
    {
      layout: "wide",
      date: "2026",
      kicker: "SEOUL / BUSAN",
      title: "首尔与釜山",
      note: "首尔塔、人生四格、海鲜拼盘和小火车。我们的地图又多了一小块。",
      photos: [24, 25, 26, 27]
    }
  ];

  const placesData = [
    {
      id: "xiamen",
      name: "厦门",
      date: "2025 夏天",
      x: 20,
      y: 69,
      photo: "04-xiamen-gulangyu.jpg",
      alt: "厦门鼓浪屿合照",
      text: "鼓浪屿的风很大，海边的牵手也刚刚好。那趟旅行没有特别宏大的计划，但现在想起来，都是很清楚的画面。",
      tags: ["鼓浪屿", "海边"]
    },
    {
      id: "zhuhai",
      name: "珠海",
      date: "2025 夏天",
      x: 30,
      y: 85,
      photo: "06-zhuhai-sunrise.jpg",
      alt: "珠海看日出的合照",
      text: "在珠海的海边等日出，也一起去了海洋馆。照片里那张合照，后来成了这个网站的开场。",
      tags: ["日出", "海洋馆"]
    },
    {
      id: "guangzhou",
      name: "广州",
      date: "2025 夏天",
      x: 35,
      y: 62,
      photo: "05-xiamen-sea.jpg",
      alt: "旅途中牵手的照片",
      text: "广州这一站没有单独发来照片，但地图还是给它留了位置。不是每一段旅程都需要一张合照证明。",
      tags: ["旅行", "没有合照的一站"]
    },
    {
      id: "macau",
      name: "澳门",
      date: "2025 夏天",
      x: 38,
      y: 76,
      photo: "11-macau.jpg",
      alt: "澳门街头的照片",
      text: "从香港到澳门，城市很亮，行程很满。现在回想起来，最清楚的还是两个人一起在路上的感觉。",
      tags: ["澳门", "港澳旅行"]
    },
    {
      id: "hongkong",
      name: "香港",
      date: "2025 夏天",
      x: 48,
      y: 82,
      photo: "10-hongkong.jpg",
      alt: "香港海边的合照",
      text: "香港的海风、维港和那张合照。2025 年的夏天，被我们走成了很长的一页。",
      tags: ["维港", "合照"]
    },
    {
      id: "tianjin",
      name: "天津",
      date: "2025.05.01",
      x: 74,
      y: 12,
      photo: "24-tianjin-qing.jpg",
      alt: "天津瓷房子的照片",
      text: "五一去天津，逛了瓷房子、张学良故居、五大道，也在津湾码头看了亮灯后的夜景。那趟旅行离得很近，现在翻到照片还是会想起来。",
      tags: ["瓷房子", "五大道", "津湾码头"]
    },
    {
      id: "beijing",
      name: "北京",
      date: "2026.02",
      x: 56,
      y: 21,
      photo: "13-beijing-us.jpg",
      alt: "北京汤泉的合照",
      text: "你回北京找我，我们一起去了汤泉，也做了漆扇。那个冬天因为这次见面，变得很具体。",
      tags: ["汤泉", "漆扇"]
    },
    {
      id: "nanchang",
      name: "南昌",
      date: "2026 夏天",
      x: 55,
      y: 56,
      photo: "16-nanchang-mirror.jpg",
      alt: "南昌的合照",
      text: "暑假换我去找你。南昌不是我们待得最久的地方，却是那趟夏天旅行很清楚的起点。",
      tags: ["暑假", "去找你"]
    },
    {
      id: "jingdezhen",
      name: "景德镇",
      date: "2026 夏天",
      x: 65,
      y: 50,
      photo: "18-jingdezhen-salmon.jpg",
      alt: "景德镇的三文鱼饭",
      text: "从南昌到景德镇，你给我点了我爱吃的三文鱼。旅行里最普通的一顿饭，有时候反而记得最久。",
      tags: ["三文鱼", "江西"]
    },
    {
      id: "seoul",
      name: "首尔",
      date: "2026",
      x: 81,
      y: 30,
      photo: "20-seoul-tower.jpg",
      alt: "首尔塔夜景合照",
      text: "首尔塔、夜景，还有人生四格。第二年里又多了一组照片，也多了一页可以翻回来的记忆。",
      tags: ["首尔塔", "人生四格"]
    },
    {
      id: "busan",
      name: "釜山",
      date: "2026",
      x: 91,
      y: 45,
      photo: "22-busan-seafood.jpg",
      alt: "釜山的海鲜拼盘",
      text: "海鲜拼盘、小火车，还有随手拍下的我们。地图到这里没有结束，只是这一页刚好写到这里。",
      tags: ["海鲜", "小火车"]
    }
  ];

  const memoryPairs = [
    {
      key: "xiamen",
      photo: "05-xiamen-sea.jpg",
      label: "厦门海边",
      alt: "厦门海边牵手"
    },
    {
      key: "zhuhai",
      photo: "06-zhuhai-sunrise.jpg",
      label: "珠海日出",
      alt: "珠海看日出"
    },
    {
      key: "jingdezhen",
      photo: "18-jingdezhen-salmon.jpg",
      label: "景德镇晚餐",
      alt: "景德镇三文鱼饭"
    },
    {
      key: "seoul",
      photo: "20-seoul-tower.jpg",
      label: "首尔夜晚",
      alt: "首尔塔夜景合照"
    }
  ];

  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const asset = (name) => `./assets/${name}`;

  function setupDateCopy() {
    const daysTogether = Math.max(0, Math.floor((todayStart - anniversaryStart) / dayInMs));
    const daysUntil = Math.ceil((secondAnniversary - todayStart) / dayInMs);
    qs("#heroDayCount").textContent = daysTogether.toLocaleString("zh-CN");

    if (daysUntil > 0) {
      qs("#anniversaryCountdown").textContent = `距离二周年还有 ${daysUntil} 天`;
    } else if (daysUntil === 0) {
      qs("#anniversaryCountdown").textContent = "今天，是我们的二周年";
    } else {
      qs("#anniversaryCountdown").textContent = `二周年后的第 ${Math.abs(daysUntil)} 天`;
    }
  }

  function renderTimeline() {
    const track = qs("#timelineTrack");
    const fragment = document.createDocumentFragment();

    timelineData.forEach((item, index) => {
      const article = document.createElement("article");
      if (item.kind === "title") {
        article.className = "timeline-card title-card";
        article.innerHTML = `
          <span class="title-number">${String(index + 1).padStart(2, "0")}</span>
          <div class="title-body">
            <p class="eyebrow">${item.kicker}</p>
            <time>${item.date}</time>
            <h3>${item.title}</h3>
            <p>${item.copy}</p>
            <span class="title-rule" aria-hidden="true"></span>
          </div>
        `;
      } else {
        article.className = "timeline-card photo-card";
        article.innerHTML = `
          <div class="card-photo">
            <img src="${asset(item.photo)}" alt="${item.alt}" loading="lazy">
          </div>
          <div class="card-content">
            <time>${item.date}</time>
            <h3>${item.title}</h3>
            <p>${item.copy}</p>
          </div>
        `;
      }
      fragment.appendChild(article);
    });

    track.appendChild(fragment);
  }

  function scrollTimeline(direction) {
    const track = qs("#timelineTrack");
    const card = qs(".timeline-card", track);
    const distance = card ? card.getBoundingClientRect().width + 18 : 360;
    track.scrollBy({ left: distance * direction, behavior: "smooth" });
  }

  function setupTimeline() {
    renderTimeline();
    qs("#timelinePrev").addEventListener("click", () => scrollTimeline(-1));
    qs("#timelineNext").addEventListener("click", () => scrollTimeline(1));

    const track = qs("#timelineTrack");
    track.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollTimeline(1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollTimeline(-1);
      }
    });
  }

  function setupPlaces() {
    const markerRoot = qs("#mapMarkers");
    const photoWrap = qs(".place-photo-wrap");
    const photo = qs("#placePhoto");
    const index = qs("#placePhotoIndex");
    const date = qs("#placeDate");
    const name = qs("#placeName");
    const text = qs("#placeText");
    const tags = qs("#placeTags");

    placesData.forEach((place, placeIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "map-marker";
      button.style.setProperty("--x", `${place.x}%`);
      button.style.setProperty("--y", `${place.y}%`);
      button.dataset.place = place.id;
      button.setAttribute("aria-label", `查看${place.name}的回忆`);
      button.innerHTML = `<span class="pin" aria-hidden="true"></span><span>${place.name}</span>`;
      button.addEventListener("click", () => selectPlace(place, placeIndex, button));
      markerRoot.appendChild(button);
    });

    function selectPlace(place, placeIndex, button) {
      qsa(".map-marker", markerRoot).forEach((marker) => marker.classList.remove("is-active"));
      button.classList.add("is-active");
      photoWrap.classList.add("is-changing");
      window.setTimeout(() => {
        photo.src = asset(place.photo);
        photo.alt = place.alt;
        index.textContent = `${String(placeIndex + 1).padStart(2, "0")} / ${String(placesData.length).padStart(2, "0")}`;
        date.textContent = place.date;
        name.textContent = place.name;
        text.textContent = place.text;
        tags.innerHTML = place.tags.map((tag) => `<span>${tag}</span>`).join("");
        photoWrap.classList.remove("is-changing");
      }, 180);
    }

    const firstMarker = qs(".map-marker", markerRoot);
    if (firstMarker) {
      firstMarker.classList.add("is-active");
    }
  }

  function setupGallery() {
    const grid = qs("#galleryGrid");
    const fragment = document.createDocumentFragment();

    galleryGroups.forEach((group, groupIndex) => {
      const visiblePhotos = group.photos.slice(0, 3);
      const hiddenCount = group.photos.length - visiblePhotos.length;
      const article = document.createElement("article");
      article.className = `gallery-spread gallery-spread-${group.layout}`;
      article.setAttribute("aria-label", `${group.title}，${group.photos.length} 张照片`);

      const copy = document.createElement("div");
      copy.className = "spread-copy";
      copy.innerHTML = `
        <span class="spread-number">${String(groupIndex + 1).padStart(2, "0")}</span>
        <p class="spread-date">${group.date}</p>
        <p class="spread-kicker">${group.kicker}</p>
        <h3>${group.title}</h3>
        <p class="spread-note">${group.note}</p>
        <span class="spread-rule" aria-hidden="true"></span>
        <span class="spread-photo-meta">这一页有 ${group.photos.length} 张照片</span>
        ${hiddenCount > 0 ? `
          <button class="spread-more" type="button" data-photo-index="${group.photos[visiblePhotos.length]}">
            <span>继续翻这页</span>
            <small>还有 ${hiddenCount} 张</small>
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m13 6 6 6-6 6"></path>
            </svg>
          </button>
        ` : ""}
      `;

      const collage = document.createElement("div");
      collage.className = "spread-collage";
      const positions = ["main", "side", "extra"];

      visiblePhotos.forEach((photoIndex, photoPosition) => {
        const item = galleryData[photoIndex];
        const figure = document.createElement("figure");
        figure.className = `spread-photo spread-photo-${positions[photoPosition]}`;
        figure.innerHTML = `
          <button type="button" data-photo-index="${photoIndex}" aria-label="查看照片：${item.caption}">
            <span class="spread-photo-tape" aria-hidden="true"></span>
            <img src="${asset(item.src)}" alt="${item.alt}" loading="lazy">
          </button>
          <figcaption>
            <span>${item.place}</span>
            <b>${item.caption}</b>
          </figcaption>
        `;
        collage.appendChild(figure);
      });

      article.append(copy, collage);
      fragment.appendChild(article);
    });

    grid.appendChild(fragment);
    qs("#galleryCurrent").textContent = String(galleryGroups.length);

    grid.addEventListener("click", (event) => {
      const button = event.target.closest("[data-photo-index]");
      if (!button) {
        return;
      }
      openLightbox(Number(button.dataset.photoIndex));
    });

    qs("#showAllPhotos").addEventListener("click", (event) => {
      const button = event.currentTarget;
      button.disabled = true;
      qs("span", button).textContent = "正在翻到第一张";
      openLightbox(0);
      button.disabled = false;
      qs("span", button).textContent = "从第一张慢慢看";
    });
  }

  let lightboxIndex = 0;

  function showLightboxPhoto(index) {
    lightboxIndex = (index + galleryData.length) % galleryData.length;
    const item = galleryData[lightboxIndex];
    qs("#lightboxImage").src = asset(item.src);
    qs("#lightboxImage").alt = item.alt;
    qs("#lightboxPlace").textContent = item.place;
    qs("#lightboxCaption").textContent = item.caption;
    qs("#lightboxCounter").textContent = `${String(lightboxIndex + 1).padStart(2, "0")} / ${galleryData.length}`;
  }

  function openLightbox(index) {
    showLightboxPhoto(index);
    const dialog = qs("#lightbox");
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    document.body.classList.add("menu-open");
  }

  function closeLightbox() {
    const dialog = qs("#lightbox");
    if (dialog.open && typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
    document.body.classList.remove("menu-open");
  }

  function setupLightbox() {
    qs("#lightboxClose").addEventListener("click", closeLightbox);
    qs("#lightboxPrev").addEventListener("click", () => showLightboxPhoto(lightboxIndex - 1));
    qs("#lightboxNext").addEventListener("click", () => showLightboxPhoto(lightboxIndex + 1));
    qs("#lightbox").addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        closeLightbox();
      }
    });
    qs("#lightbox").addEventListener("close", () => {
      document.body.classList.remove("menu-open");
    });
    document.addEventListener("keydown", (event) => {
      const dialog = qs("#lightbox");
      if (!dialog.open) {
        return;
      }
      if (event.key === "ArrowRight") {
        showLightboxPhoto(lightboxIndex + 1);
      }
      if (event.key === "ArrowLeft") {
        showLightboxPhoto(lightboxIndex - 1);
      }
    });
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function setupGame() {
    const board = qs("#gameBoard");
    const complete = qs("#gameComplete");
    const progress = qs("#gameProgress");
    let firstCard = null;
    let secondCard = null;
    let matchedPairs = 0;
    let isLocked = false;
    let mismatchTimer = null;

    function updateProgress() {
      progress.textContent = `${matchedPairs} / ${memoryPairs.length} 组`;
    }

    function resetGame() {
      window.clearTimeout(mismatchTimer);
      board.innerHTML = "";
      complete.classList.remove("is-visible");
      complete.setAttribute("aria-hidden", "true");
      firstCard = null;
      secondCard = null;
      matchedPairs = 0;
      isLocked = false;
      updateProgress();

      const cards = shuffle(memoryPairs.flatMap((pair) => [
        { ...pair, id: `${pair.key}-a` },
        { ...pair, id: `${pair.key}-b` }
      ]));

      cards.forEach((card) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "memory-card";
        button.dataset.key = card.key;
        button.setAttribute("aria-label", "翻开一张回忆卡");
        button.innerHTML = `
          <span class="card-inner">
            <span class="memory-face memory-back"><span>K×L</span></span>
            <span class="memory-face memory-front">
              <img src="${asset(card.photo)}" alt="${card.alt}">
              <span>${card.label}</span>
            </span>
          </span>
        `;
        button.addEventListener("click", () => flipCard(button));
        board.appendChild(button);
      });
    }

    function flipCard(card) {
      if (isLocked || card.classList.contains("is-flipped") || card.classList.contains("is-matched")) {
        return;
      }

      card.classList.add("is-flipped");

      if (!firstCard) {
        firstCard = card;
        return;
      }

      secondCard = card;

      if (firstCard.dataset.key === secondCard.dataset.key) {
        firstCard.classList.add("is-matched");
        secondCard.classList.add("is-matched");
        firstCard = null;
        secondCard = null;
        matchedPairs += 1;
        updateProgress();

        if (matchedPairs === memoryPairs.length) {
          window.setTimeout(() => {
            complete.classList.add("is-visible");
            complete.setAttribute("aria-hidden", "false");
          }, 520);
        }
        return;
      }

      isLocked = true;
      mismatchTimer = window.setTimeout(() => {
        firstCard.classList.remove("is-flipped");
        secondCard.classList.remove("is-flipped");
        firstCard = null;
        secondCard = null;
        isLocked = false;
      }, 760);
    }

    qs("#resetGame").addEventListener("click", resetGame);
    resetGame();
  }

  let audioContext = null;
  let masterGain = null;
  let musicTimer = null;
  let barIndex = 0;

  const chords = [
    [261.63, 329.63, 392.0, 493.88],
    [220.0, 261.63, 329.63, 392.0],
    [174.61, 220.0, 261.63, 329.63],
    [196.0, 246.94, 293.66, 392.0]
  ];

  function createAudioGraph() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      return false;
    }

    audioContext = new AudioCtx();
    masterGain = audioContext.createGain();
    masterGain.gain.value = 0.17;

    const delay = audioContext.createDelay();
    delay.delayTime.value = 0.42;
    const feedback = audioContext.createGain();
    feedback.gain.value = 0.28;
    const wet = audioContext.createGain();
    wet.gain.value = 0.18;

    masterGain.connect(audioContext.destination);
    masterGain.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(wet);
    wet.connect(audioContext.destination);
    return true;
  }

  function playTone(frequency, startsAt, duration, volume, type = "sine") {
    if (!audioContext || !masterGain) {
      return;
    }
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, startsAt);
    gain.gain.setValueAtTime(0.0001, startsAt);
    gain.gain.exponentialRampToValueAtTime(volume, startsAt + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, startsAt + duration);
    oscillator.connect(gain);
    gain.connect(masterGain);
    oscillator.start(startsAt);
    oscillator.stop(startsAt + duration + 0.05);
  }

  function scheduleMusicBar() {
    if (!audioContext || audioContext.state !== "running") {
      return;
    }

    const now = audioContext.currentTime + 0.05;
    const chord = chords[barIndex % chords.length];
    const arpeggio = [chord[0] * 2, chord[2] * 2, chord[3] * 2, chord[1] * 2];

    chord.forEach((frequency, noteIndex) => {
      playTone(frequency, now + noteIndex * 0.03, 3.8, 0.018, "sine");
    });

    arpeggio.forEach((frequency, noteIndex) => {
      playTone(frequency, now + noteIndex * 0.48, 0.9, 0.024, "triangle");
    });

    arpeggio
      .slice()
      .reverse()
      .forEach((frequency, noteIndex) => {
        playTone(frequency * 1.5, now + 2.0 + noteIndex * 0.43, 0.65, 0.012, "sine");
      });

    barIndex += 1;
  }

  async function startMusic() {
    if (!audioContext && !createAudioGraph()) {
      return;
    }
    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }
    if (!musicTimer) {
      scheduleMusicBar();
      musicTimer = window.setInterval(scheduleMusicBar, 3800);
    }
    qs("#musicToggle").classList.add("is-playing");
    qs("#musicToggle").setAttribute("aria-pressed", "true");
    qs("#musicToggle").setAttribute("aria-label", "关闭背景音乐");
  }

  function stopMusic() {
    if (musicTimer) {
      window.clearInterval(musicTimer);
      musicTimer = null;
    }
    if (audioContext && audioContext.state === "running") {
      audioContext.suspend();
    }
    qs("#musicToggle").classList.remove("is-playing");
    qs("#musicToggle").setAttribute("aria-pressed", "false");
    qs("#musicToggle").setAttribute("aria-label", "播放背景音乐");
  }

  function setupMusic() {
    const button = qs("#musicToggle");
    button.addEventListener("click", () => {
      if (button.classList.contains("is-playing")) {
        stopMusic();
      } else {
        startMusic();
      }
    });
  }

  function setupOpening() {
    const gate = qs("#gate");
    const button = qs("#openLetter");
    const chapterLinks = qsa("[data-gate-target]", gate);

    function enterSite(target) {
      if (gate.classList.contains("is-opening")) {
        return;
      }
      gate.classList.add("is-opening");
      startMusic();
      window.setTimeout(() => {
        document.body.classList.add("is-open");
        document.body.classList.remove("is-locked");
      }, 480);

      if (target) {
        window.setTimeout(() => {
          const section = qs(target);
          if (!section) {
            return;
          }
          document.documentElement.style.scrollBehavior = "auto";
          section.scrollIntoView({ block: "start" });
          document.documentElement.style.scrollBehavior = "";
        }, 760);
      }
    }

    button.addEventListener("click", () => enterSite());
    chapterLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        enterSite(link.dataset.gateTarget);
      });
    });
  }

  function setupMenu() {
    const button = qs("#menuButton");
    const menu = qs("#mobileMenu");

    function closeMenu() {
      menu.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
      document.body.classList.remove("menu-open");
    }

    button.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      menu.setAttribute("aria-hidden", String(!isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });

    qsa("a", menu).forEach((link) => link.addEventListener("click", closeMenu));
  }

  function setupReveals() {
    const items = qsa(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((item) => observer.observe(item));
  }

  function setupScrollUI() {
    const sectionIds = ["top", "letter", "timeline", "places", "gallery", "game", "ending"];
    const railLinks = qsa(".chapter-rail a");

    function update() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      qs("#scrollProgress").style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
      qs("#siteHeader").classList.toggle("is-scrolled", window.scrollY > 40);

      let current = "top";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.42) {
          current = id;
        }
      });

      railLinks.forEach((link) => {
        link.classList.toggle("is-active", link.dataset.section === current);
      });
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  function setupCelebration() {
    const canvas = qs("#celebrationCanvas");
    const context = canvas.getContext("2d");
    const button = qs("#lightThirdYear");
    const reveal = qs("#endingReveal");
    let particles = [];
    let animationFrame = 0;
    let startedAt = 0;

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * ratio);
      canvas.height = Math.floor(rect.height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function heartPath(x, y, size, rotation) {
      context.save();
      context.translate(x, y);
      context.rotate(rotation);
      context.beginPath();
      context.moveTo(0, size * 0.28);
      context.bezierCurveTo(-size, -size * 0.35, -size * 0.5, -size, 0, -size * 0.46);
      context.bezierCurveTo(size * 0.5, -size, size, -size * 0.35, 0, size * 0.28);
      context.closePath();
      context.fill();
      context.restore();
    }

    function createParticles() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const colors = ["#d17e99", "#efb8c8", "#b8ceaa", "#f0d39b"];
      particles = [];

      for (let i = 0; i < 120; i += 1) {
        const isHeart = i % 3 !== 0;
        const spread = (Math.random() - 0.5) * width * 0.75;
        const speed = 4 + Math.random() * 7;
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.5;
        particles.push({
          x: width / 2 + spread * 0.18,
          y: height * 0.72 + (Math.random() - 0.5) * 30,
          vx: Math.cos(angle) * speed + spread * 0.012,
          vy: Math.sin(angle) * speed - Math.random() * 3,
          size: isHeart ? 5 + Math.random() * 9 : 2 + Math.random() * 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * Math.PI,
          rotationSpeed: (Math.random() - 0.5) * 0.12,
          gravity: 0.075 + Math.random() * 0.04,
          life: 1,
          decay: 0.005 + Math.random() * 0.008,
          isHeart,
          startDelay: Math.random() * 260
        });
      }
    }

    function draw(timestamp) {
      if (!startedAt) {
        startedAt = timestamp;
      }
      const elapsed = timestamp - startedAt;
      context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      particles.forEach((particle) => {
        if (elapsed < particle.startDelay) {
          return;
        }
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += particle.gravity;
        particle.vx *= 0.995;
        particle.rotation += particle.rotationSpeed;
        particle.life -= particle.decay;

        if (particle.life <= 0) {
          return;
        }

        context.globalAlpha = Math.max(0, particle.life);
        context.fillStyle = particle.color;
        if (particle.isHeart) {
          heartPath(particle.x, particle.y, particle.size, particle.rotation);
        } else {
          context.save();
          context.translate(particle.x, particle.y);
          context.rotate(particle.rotation);
          context.fillRect(-particle.size / 2, -particle.size, particle.size, particle.size * 2.2);
          context.restore();
        }
      });

      context.globalAlpha = 1;
      particles = particles.filter((particle) => particle.life > 0 && particle.y < canvas.clientHeight + 40);

      if (elapsed < 5200 && particles.length) {
        animationFrame = window.requestAnimationFrame(draw);
      } else {
        context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      }
    }

    function launch() {
      window.cancelAnimationFrame(animationFrame);
      resizeCanvas();
      createParticles();
      startedAt = 0;
      reveal.classList.add("is-visible");
      animationFrame = window.requestAnimationFrame(draw);
    }

    button.addEventListener("click", launch);
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
  }

  function initialize() {
    setupDateCopy();
    setupOpening();
    setupMenu();
    setupMusic();
    setupTimeline();
    setupPlaces();
    setupGallery();
    setupLightbox();
    setupGame();
    setupReveals();
    setupScrollUI();
    setupCelebration();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();
