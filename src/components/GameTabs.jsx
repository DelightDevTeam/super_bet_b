import React, { useState } from 'react'

const GameTabs = () => {
    const [selectedTab,setSelectedTab]=useState('All Games');
    const tabs=[
        'All Games','Slot','Live Casino','Sport Book','Fishing'
    ];
    const slots=[
        'https://shwedinker777.online/assets/img/game_logo/pragmatic_play.jpeg',
        'https://shwedinker777.online/assets/img/game_logo/joker.jpeg',
        'https://shwedinker777.online/assets/img/game_logo/yggdrasil.png',
        'https://shwedinker777.online/assets/img/game_logo/spade_gaming.jpeg',
        'https://shwedinker777.online/assets/img/game_logo/netgame.jpg',
        'https://shwedinker777.online/assets/img/game_logo/skywind_group.png',
        'https://shwedinker777.online/assets/img/game_logo/j_d_b.png',
        'https://shwedinker777.online/assets/img/game_logo/genesis.jpeg',
        'https://shwedinker777.online/assets/img/game_logo/asia_gaming.jpeg'
    ]
    const casinos=[
        'https://shwedinker777.online/assets/img/game_logo/yee_bet.png',
        'https://shwedinker777.online/assets/img/game_logo/wm_casino.jpeg',
        'https://shwedinker777.online/assets/img/game_logo/vivo_gaming.jpeg',
        'https://shwedinker777.online/assets/img/game_logo/big_gaming_casino.jpeg',
        'https://shwedinker777.online/assets/img/game_logo/dream_gaming.png',
        'https://shwedinker777.online/assets/img/game_logo/king_855.jpeg',
        'https://shwedinker777.online/assets/img/game_logo/pragmatic_casino.png'
    ]
    const sports=[
    'https://shwedinker777.online/assets/img/game_logo/sbo_sport.jpeg',
    'https://shwedinker777.online/assets/img/game_logo/ssport.jpeg'
    ]
    const fish=[
    'https://shwedinker777.online/assets/img/game_logo/joker_fishing.jpeg',
    'https://shwedinker777.online/assets/img/game_logo/spade_gaming.jpeg',
    'https://shwedinker777.online/assets/img/game_logo/cq_9_fishing.jpeg'
    ]

   return (
    <div className='cursor-pointer mb-5 '>
        <div  className="gameTitleContainer mt-4 mb-3 d-flex align-items-center gap-3 gap-sm-4">
            {tabs.map((tab,index)=>{
                return <p onClick={()=>setSelectedTab(tab)} className={`${selectedTab===tab ? 'activeGameTab':''} gameTitle fw-semibold`} key={index}>
                    {tab}
                </p>
            })}
        </div>
        <h5 className="fw-bold">{selectedTab!=='All Games' && selectedTab}</h5>
         {selectedTab==='All Games'  &&  <>
        <h5 className="fw-bold mb-2 "> Slot</h5>
        <div className="row px-2">
        {slots.map((item, index) => {
          return (
            <div
              key={index} style={{position:'relative'}}
              className=" cursor-pointer col-4 col-sm-3 col-lg-2 mb-2 p-0 p-sm-1 m-0"
            >
              <img src={item} className="img-fluid gameImg rounded-3" />
              <div className='gameImgTitle text-center py-1 px-1 px-sm-2'>Gate of Olympus</div>
            </div>
          );
        })}
      </div>
      <h5 className="fw-bold mb-2 mt-4"> Live Casino</h5>
      <div className="row px-2">
        {casinos.map((item, index) => {
          return (
            <div
            key={index} style={{position:'relative'}}
            className=" cursor-pointer col-4 col-sm-3 col-lg-2 mb-2 p-0 p-sm-1 m-0"
          >
            <img src={item} className="img-fluid gameImg rounded-3" />
            <div className='gameImgTitle text-center py-1 px-1 px-sm-2'>Gate of Olympus</div>
          </div>
          );
        })}
      </div>
      <h5 className="fw-bold mb-2  mt-4">Sport Book</h5>
      <div className="row px-2">
        {sports.map((item, index) => {
          return (
            <div
            key={index} style={{position:'relative'}}
            className=" cursor-pointer col-4 col-sm-3 col-lg-2 mb-2 p-0 p-sm-1 m-0"
          >
            <img src={item} className="img-fluid gameImg rounded-3" />
            <div className='gameImgTitle text-center py-1 px-1 px-sm-2'>Gate of Olympus</div>
          </div>
          );
        })}
      </div>
      <h5 className="fw-bold mb-2  mt-4">Fishing</h5>
      <div className="row px-2">
        {fish.map((item, index) => {
          return (
            <div
            key={index} style={{position:'relative'}}
            className=" cursor-pointer col-4 col-sm-3 col-lg-2 mb-2 p-0 p-sm-1 m-0"
          >
            <img src={item} className="img-fluid gameImg rounded-3" />
            <div className='gameImgTitle text-center py-1 px-1 px-sm-2'>Gate of Olympus</div>
          </div>
          );
        })}
      </div>
        </>}
        {selectedTab==='Slot' && <div className="row px-2">
        {slots.map((item, index) => {
          return (
            <div
            key={index} style={{position:'relative'}}
            className=" cursor-pointer col-4 col-sm-3 col-lg-2 mb-2 p-0 p-sm-1 m-0"
          >
            <img src={item} className="img-fluid gameImg rounded-3" />
            <div className='gameImgTitle text-center py-1 px-1 px-sm-2'>Gate of Olympus</div>
          </div>
          );
        })}
      </div>}
       {selectedTab==='Live Casino' && <div className="row px-2">
        {casinos.map((item, index) => {
          return (
            <div
            key={index} style={{position:'relative'}}
            className=" cursor-pointer col-4 col-sm-3 col-lg-2 mb-2 p-0 p-sm-1 m-0"
          >
            <img src={item} className="img-fluid gameImg rounded-3" />
            <div className='gameImgTitle text-center py-1 px-1 px-sm-2'>Gate of Olympus</div>
          </div>
          );
        })}
      </div>}
      {selectedTab==='Sport Book' && <div className="row px-2">
        {sports.map((item, index) => {
          return (
            <div
            key={index} style={{position:'relative'}}
            className=" cursor-pointer col-4 col-sm-3 col-lg-2 mb-2 p-0 p-sm-1 m-0"
          >
            <img src={item} className="img-fluid gameImg rounded-3" />
            <div className='gameImgTitle text-center py-1 px-1 px-sm-2'>Gate of Olympus</div>
          </div>
          );
        })}
      </div>}
      {selectedTab==='Fishing' && <div className="row px-2">
        {fish.map((item, index) => {
          return (
            <div
            key={index} style={{position:'relative'}}
            className=" cursor-pointer col-4 col-sm-3 col-lg-2 mb-2 p-0 p-sm-1 m-0"
          >
            <img src={item} className="img-fluid gameImg rounded-3" />
            <div className='gameImgTitle text-center py-1 px-1 px-sm-2'>Gate of Olympus</div>
          </div>
          );
        })}
      </div>}
    </div>
  )
}

export default GameTabs
