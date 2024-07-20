"use client";

import React, { useState, useEffect } from "react";
import IframeCard from "../../../components/ifamecard";
import { useRouter } from "next/navigation";
import TopButton from "../../../components/top-button";

interface CardData {
  id: number;
  musicUrl: string;
  commentTitle: string;
}

const Page = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardData, setCardData] = useState<CardData[]>([
      {
        id: 1,
        musicUrl: "https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0",
        commentTitle: "Comment for Music Title 1",
      },
      {
        id: 2,
        musicUrl: "https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0",
        commentTitle: "Comment for Music Title 2",
      },
      {
        id: 3,
        musicUrl: "https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0",
        commentTitle: "Comment for Music Title 3",
      },
      {
        id: 4,
        musicUrl: "https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0",
        commentTitle: "Comment for Music Title 4",
      },
    ]);

  const [loading, setLoading] = useState(true);
  const itemsPerPage = 2;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/posts");
        const data: CardData[] = await response.json();
        setCardData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [currentPage]); 

  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = cardData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="outer-container h-screen bg-white">
      <div className="flex justify-center px-5 safari-hack">
        <div className="max-w-screen-lg p-8">
          <TopButton title="投稿一覧" />

          <div className="flex flex-wrap justify-center">
            {paginatedData.map((card) => (
              <IframeCard
                key={card.id}
                musicUrl={card.musicUrl}
                commentTitle={card.commentTitle}
              />
            ))}
          </div>

          {/* ペジネーション */}
          <div className="mb-10" />
          <div className="flex justify-center mt-4">
            <div className="join">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`join-item btn ${currentPage === i + 1 ? "btn-active" : ""}`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-10" />
          <div className="flex justify-center">
            <button className="btn btn-outline w-60" type="button" onClick={() => router.back()}>
              戻る
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
