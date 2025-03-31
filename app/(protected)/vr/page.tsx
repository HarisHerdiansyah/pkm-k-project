'use client';
// https://cdn.bitmovin.com/content/assets/playhouse-vr/progressive.mp4
import type React from 'react';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Entity } from 'aframe-react';
import { useAFrame } from '@/components/AFrameProvider';

export default function Page() {
  const { isAFrameLoaded } = useAFrame();
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  const homepage = () => router.push('/');
  const playVideo = () => videoRef.current?.play();
  const pauseVideo = () => videoRef.current?.pause();
  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  if (!isAFrameLoaded) return null;

  return (
    <a-scene environment='preset: checkerboard;'>
      <a-assets>
        <video id='flatVideo' ref={videoRef} src='/video/aframe-sample.mp4' />
      </a-assets>

      <a-camera position='0 1.6 0'>
        <a-cursor fuse='true' fuseTimeout='1000'></a-cursor>
      </a-camera>

      <a-video
        src='#flatVideo'
        width='16'
        height='9'
        position='0 5 -8'
        rotation='13 0 0'
      />

      <Entity position={{ x: 0, y: 0.5, z: -3.5 }}>
        <Entity
          geometry={{ primitive: 'plane', width: 1, height: 0.5, depth: 0.1 }}
          material={{ color: 'orange' }}
          position={{ x: -3, y: 0, z: 0 }}
          events={{ click: homepage }}
        >
          <a-text value='Back' position='-0.23 0 0.05' />
        </Entity>
        <Entity position={{ x: 2, y: 0, z: 0 }}>
          <Entity
            geometry={{ primitive: 'plane', width: 1, height: 0.5, depth: 0.1 }}
            material={{ color: 'green' }}
            position={{ x: -1, y: 0, z: 0 }}
            events={{
              click: playVideo,
            }}
          >
            <a-text value='Play' position='-0.23 0 0.05' />
          </Entity>
          <Entity
            geometry={{ primitive: 'plane', width: 1, height: 0.5, depth: 0.1 }}
            material={{ color: 'red' }}
            position={{ x: 0, y: 0, z: 0 }}
            events={{
              click: pauseVideo,
            }}
          >
            <a-text value='Pause' position='-0.33 0 0.05' />
          </Entity>
          <Entity
            geometry={{ primitive: 'plane', width: 1, height: 0.5, depth: 0.1 }}
            material={{ color: 'blue' }}
            position={{ x: 1, y: 0, z: 0 }}
            events={{
              click: restartVideo,
            }}
          >
            <a-text value='Restart' position='-0.39 0 0.05' />
          </Entity>
        </Entity>
      </Entity>
    </a-scene>
  );
}
