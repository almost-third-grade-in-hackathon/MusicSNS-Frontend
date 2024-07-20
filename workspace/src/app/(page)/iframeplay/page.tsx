"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import TopButton from '../../../components/top-button';

const Page = () => {
  const router = useRouter();
  const track_href = 'https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0';

  const handleClick = () => {
    router.push(`/create?track=${encodeURIComponent(track_href)}`);
  };

  return (
    <div className="outer-container h-screen bg-white">
      <div className="max-w-screen-lg w-full p-8">
        <TopButton title="" />

        <div className="flex justify-center items-center mb-10">
          <iframe
            className="rounded-lg"
            style={{ borderRadius: '12px' }}
            src={track_href}
            width="100%"
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Embed"
          ></iframe>
        </div>

        <div className="flex flex-col space-y-4 items-center mb-4">
          <button className="btn btn-active btn-neutral w-60 bg-gray-200 text-black hover:bg-sky-700 hover:text-white mb-4" type="button" onClick={handleClick}>
            投稿を新規作成
          </button>
        </div>

        {/* ボタン */}
        <div className="flex flex-col space-y-4 items-center">
          <button className="btn btn-outline w-60" type="button" onClick={() => router.back()}>
            戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;