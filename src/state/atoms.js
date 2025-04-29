import { atom } from 'recoil';

export const darkModeState = atom({
  key: 'darkModeState',
  default: false,
});

export const profileState = atom({
  key: 'profile',
  default: {
    name: '',
    title: ''
  }
});

export const socialState = atom({
  key: 'social',
  default: []
});

export const projectState = atom({
  key: 'project',
  default: []
});