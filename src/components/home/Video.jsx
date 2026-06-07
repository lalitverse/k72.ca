import React, { useEffect, useRef } from 'react'

const Video = ({ isMain = false }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!isMain) {
      let animationFrameId;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      
      const renderLoop = () => {
        const mainVideo = document.getElementById('main-video');
        // readyState >= 2 ensures there is video data to draw
        if (mainVideo && mainVideo.readyState >= 2) {
          if (canvas.width !== mainVideo.videoWidth || canvas.height !== mainVideo.videoHeight) {
            canvas.width = mainVideo.videoWidth;
            canvas.height = mainVideo.videoHeight;
          }
          ctx.drawImage(mainVideo, 0, 0, canvas.width, canvas.height);
        }
        animationFrameId = requestAnimationFrame(renderLoop);
      };
      
      renderLoop();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isMain]);

  if (isMain) {
    return (
      <div className='h-full w-full bg-black'>
          <video id="main-video" className='h-full w-full object-cover' autoPlay loop muted playsInline src="/video.mp4"></video>
      </div>
    )
  }

  return (
    <div className='h-full w-full'>
        <canvas ref={canvasRef} className='h-full w-full object-cover'></canvas>
    </div>
  )
}

export default Video