import {useState} from 'react';
import {Header, SwiperGallery} from '../../components';
const Home = () => {
  const [bgUrl, setBgUrl] = useState('');

  return (
    <div className='px-10'>
        <Header/>
        <main>
          <section className="h-screen relative rounded-md overflow-hidden py-4">
            <div className="h-1/2 w-full blur-md bg-no-repeat bg-cover" style={{backgroundImage: `url(${bgUrl})`}}></div>
            <div className="h-1/2 w-full bg-gradient-to-r from-neutral-900 to-blue-900"></div>
            <div className="absolute top-1/2 -translate-y-1/2">
              <SwiperGallery setBgUrl={setBgUrl} data={[]} mode="slide"/>
            </div>
          </section>
          <section className='flex items-center justify-center gap-4 py-4'>
            <SwiperGallery setBgUrl={undefined}  data={[]} mode="gallery"/>
            <div className="">
              <img src="https://pics.wikifeet.com/Remu-Suzumori-Feet-5175484.jpg" alt="" className="" />
            </div>
          </section>
        </main>
    </div>
  )
}

export default Home