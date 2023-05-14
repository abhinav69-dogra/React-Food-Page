import React from "react";

const Shimmer = () => {
  // Generate fake shimmer data
  const shimmerData = Array.from({ length: 12 }, (_, index) => index);

  return (
    <div className="shimmer-container">
      {shimmerData.map((item) => (
        <div class="card">
          <div class="shimmerBG media"></div>
          <div class="p-32">
            <div class="shimmerBG title-line"></div>
            <div class="shimmerBG title-line end"></div>

            <div class="shimmerBG content-line m-t-24"></div>
            <div class="shimmerBG content-line"></div>
            <div class="shimmerBG content-line"></div>
            <div class="shimmerBG content-line"></div>
            <div class="shimmerBG content-line end"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
