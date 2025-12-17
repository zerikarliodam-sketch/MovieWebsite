import React,{useState} from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useFetch from "../../../hooks/useFetch";
import '../Trending/Trending.scss'
import Carousel from '../../../components/carousel/Carousel';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';


const Popular = () => {
  
 const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange =(tab)=>{
 setEndpoint(tab === "Movies"? "movie" : "tv");
  }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
          <div className="space">
        <span className="carouselTitle">
           What's Populars ?
        </span>
       
        <SwitchTabs data={["Movies","TV shows"]} onTabChange={onTabChange}/>
        
        </div>
        </ContentWrapper>
        <Carousel data={data?.results} 
                loading={loading}
                endpoint={endpoint}/>
    </div>
  );
}

export default Popular;
<!-- OXIRGI VIDEO QATORDAN KEYIN QO‘SHILADI --><section class="online-tv-section">
  <h2 class="section-title">ONLINE TV</h2>  <div class="online-tv-grid">
    <!-- CARD 1 -->
    <a href="#LINK_1" class="tv-card">
      <img src="IMAGE_1.jpg" alt="Online TV 1" />
    </a><!-- CARD 2 -->
<a href="#LINK_2" class="tv-card">
  <img src="IMAGE_2.jpg" alt="Online TV 2" />
</a>

<!-- CARD 3 -->
<a href="#LINK_3" class="tv-card">
  <img src="IMAGE_3.jpg" alt="Online TV 3" />
</a>

<!-- CARD 4 -->
<a href="#LINK_4" class="tv-card">
  <img src="IMAGE_4.jpg" alt="Online TV 4" />
</a>

  </div>
</section><style>
.online-tv-section {
  margin: 40px 0;
}

.section-title {
  font-size: 22px;
  margin-bottom: 15px;
}

.online-tv-grid {
  display: flex;
  gap: 15px;
  overflow-x: auto;
}

.tv-card {
  min-width: 160px; /* tepadagi vertikal video o‘lchamiga moslab o‘zgartirasan */
  height: 260px;   /* video card balandligi bilan bir xil qil */
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
}

.tv-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
