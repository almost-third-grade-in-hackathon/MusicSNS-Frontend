import React from 'react';
import Card from '../../components/card';
import "../style.css"

const Page = () => {
  const cardData = [
    {
      albumImageUrl: '/sample/Himawari.jpg',
      musicTitle: 'Music Title 1',
      commentTitle: 'Comment for Music Title 1',
    },
    {
      albumImageUrl: '/sample/Himawari.jpg',
      musicTitle: 'Music Title 2',
      commentTitle: 'Comment for Music Title 2',
    },
    {
      albumImageUrl: '/sample/Himawari.jpg',
      musicTitle: 'Music Title 3',
      commentTitle: 'Comment for Music Title 3',
    },
  ];

  return (
    
    <div className="outer-container bg-white">
      <div className="flex justify-center px-5 safari-hack w-full">
        <div className="max-w-screen-lg w-full p-8">

        <div className="flex items-center mb-4">
            <button className="btn btn-ghost bg-transparent border-none hover:bg-transparent hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
            </button>
            <h1 className="text-2xl font-bold text-left text-black">投稿一覧</h1>
        </div>

          <div className="flex flex-wrap justify-center">
            {cardData.map((card, index) => (
              <Card
                key={index}
                albumImageUrl={card.albumImageUrl}
                musicTitle={card.musicTitle}
                commentTitle={card.commentTitle}
              />
            ))}
          </div>

          {/*ペジネーション*/}
          <div className="mb-10" />
          <div className="flex justify-center mt-4">
          <div className="join">
            <button className="join-item btn">1</button>
            <button className="join-item btn">2</button>
            <button className="join-item btn btn-disabled">...</button>
            <button className="join-item btn">99</button>
            <button className="join-item btn">100</button>
            </div>
            </div>
          <div className="mb-10" />
          <div className="flex justify-center">
            <button className="btn btn-outline w-60">戻る</button>
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default Page;
