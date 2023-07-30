import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#5f0f40',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './sikella_white.png',
  fullDecal: './threejs.png',
});

export default state;