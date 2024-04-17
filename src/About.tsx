import { Card, Avatar } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Model } from './Scene';

const About = () => {
  return (
    <section id="about" className="flex gap-12 justify-center items-center w-full h-[100vh]">
      <div className="basis-1/2  w-full h-full">
        <Card className="hover:drop-shadow-2xl leading-24 relative" style={{ width: 'auto', margin: 16 }}>
          <Meta
            className="flex flex-col"
            avatar={
              <Canvas
                shadows
                frameloop="demand"
                dpr={[1, 2]}
                gl={{ preserveDrawingBuffer: true }}
                camera={{
                  fov: -1000,
                  near: 0.5,
                  far: 500,
                  position: [-20, 10, 10],
                }}
              >
                <OrbitControls enableZoom={false} />
                <Suspense>
                  <Model />
                </Suspense>
              </Canvas>
            }
            title="About Me"
            description="I'm Deepak Dev, a 26-year-old full-stack software engineer from Delhi, India. With a passion for innovation
          and a knack for problem-solving, I thrive on creating robust, user-centric solutions. Let's collaborate and
          build something amazing together!"
          />
        </Card>
      </div>
      <div className="basis-1/2 bg-slate-100 w-full h-full"></div>
    </section>
  );
};

export default About;
