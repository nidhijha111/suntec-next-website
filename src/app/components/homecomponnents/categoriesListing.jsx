"use client";
import React from "react";
import { categoriesData } from "./homePageData.jsx";
import { useRouter } from "next/navigation";
export default function CategoriesListing() {
  const router = useRouter();

  return (
    <section className="categories_section">
      <div className="category-grid">
        {categoriesData?.length > 0 &&
          categoriesData?.map((data, index) => {
            return (
              <div
                className="category_grid_card"
                key={index}
                onClick={() => router.push(data?.url)}
              >
                <div className="grid_card_icon_wrapper">
                  <img src={data?.path} alt={data?.altText} />
                </div>
                <div className="grid_text_wrapper">{data?.text}</div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
