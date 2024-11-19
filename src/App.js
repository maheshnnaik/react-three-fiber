import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useScroll, Text, Image, Scroll, Preload, ScrollControls } from '@react-three/drei'
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
        <ScrollControls damping={0.2} pages={3} distance={0.5}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html>
            <div style={{ transform: 'translate3d(65vw, 192vh, 0)' }}>
              Pendant lamp
              <br />
              bronze, 38 cm
              <br />
              CHF 59.95
              <br />
            </div>
          </Scroll>
          <Preload />
        </ScrollControls>
      </Canvas>
    </>
  )
}

function Images() {
  const group = useRef()
  const data = useScroll()
  const { width, height } = useThree((state) => state.viewport)
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
  })
  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="/img1.jpg" />
      <Image position={[2, 0, 3]} scale={3} url="/img6.jpg" />
      <Image position={[-2.05, -height, 6]} scale={[1, 3, 1]} url="/trip2.jpg" />
      <Image position={[-0.6, -height, 9]} scale={[1, 2, 1]} url="/img8.jpg" />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url="/trip4.jpg" />
      <Image position={[0, -height * 1.5, 7.5]} scale={[1.5, 3, 1]} url="/img3.jpg" />
      <Image position={[0, -height * 2 - height / 4, 0]} scale={[width, height / 1.1, 1]} url="/img7.jpg" />
    </group>
  )
}

function Typography() {
  const state = useThree()
  const { width, height } = state.viewport.getCurrentViewport(state.cameta, [0, 0, 12])
  const shared = { font: '/Inter-Regular.woff', letterSpacing: -0.1, color: 'black' }
  return (
    <>
      <Text children="to" anchorX="left" position={[-width / 2.5, -height / 10, 12]} {...shared} />
      <Text children="be" anchorX="right" position={[width / 2.5, -height * 2, 12]} {...shared} />
      <Text children="home" position={[0, -height * 4.624, 12]} {...shared} />
    </>
  )
}

function Header() {
  return (
    <div className="header" style={{"--header-border": "415px"}}>
      <div className="container-fluid">
        <div className="header__inner">
          <div className="header__logo">
            <a href="https://convexseascapesurvey.com" aria-label="Back to homepage" className="header__logo-link">
            </a>
            <div className="header__logo__border">
            </div>
          </div>
          <div className="header__nav">
            <nav className="navigation" aria-label="Main navigation">
              <ul role="menubar" aria-label="Main navigation" className="navigation__list ">
                <li role="none" className="">
                  <a href="https://convexseascapesurvey.com/the-science/" className="navigation__item t-ls-4 t-lh-1 t-uppercase mr-24 mr-30@md  :navLinks" data-audio-enter="sfx.hover2" data-audio-click="sfx.click2" role="menuitem">
                    The Science
                  </a>
                </li>
                <li role="none" className="">
                  <a href="https://convexseascapesurvey.com/open-source-portal/" className="navigation__item t-ls-4 t-lh-1 t-uppercase mr-24 mr-30@md  :navLinks" data-audio-enter="sfx.hover2" data-audio-click="sfx.click2" role="menuitem">
                    Research Portal
                  </a>
                </li>
                
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
