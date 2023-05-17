import React from "react";

const Shimmer = () => {
  // Generate fake shimmer data
  const shimmerData = Array.from({ length: 12 }, (_, index) => index);

  return (
    <div className="shimmer-container">
      {shimmerData.map((item) => (
        <div className="card">
          <div className="shimmerBG media"></div>
          <div className="p-32">
            <div className="shimmerBG title-line"></div>
            <div className="shimmerBG title-line end"></div>

            <div className="shimmerBG content-line m-t-24"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line end"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
