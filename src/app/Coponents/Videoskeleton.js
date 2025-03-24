import React from 'react';

const VideoSkeleton = () => {
  return (
    <div className="animation px-3 py-4 sm:px-6 sm:py-5 flex items-center justify-center box-border mt-1 w-full h-[65vh] sm:h-[88vh]">
      <div className="w-full h-full object-cover shadow-lg border-solid border-[1px] border-[#634730] bg-gray-300 animate-pulse rounded-md"></div>
    </div>
  );
};

export default VideoSkeleton;