import "./../css/about.css";

import { Api } from "./modules/api.js";
import { CommitCardList } from "./components/CommitCardList.js";
import Swiper from "swiper";
import { swiperConfig } from "./utils/swiperConfig.js";

const getCommits = new Api("https://api.github.com/repos/Nata-Shu/NewsAnalyzer/commits?per_page=20");
getCommits.getApiData()
  .then(res => {
    if (res && res.length > 0) {
      new CommitCardList(document.querySelector('.swiper-wrapper'), res);

      new Swiper(swiperConfig.container, swiperConfig.settings);
    }
  })
  .catch(error => {
    console.log('Ошибка получения коммита с GitHub:' + error);
  }
  )
	
