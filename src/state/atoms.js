import { atom } from 'recoil';

export const darkModeState = atom({
  key: 'darkModeState',
  default: false,
});

export const profileState = atom({
  key: 'profileState',
  default: {
    name: '',
    title: ''
  }
});

export const socialState = atom({
  key: 'socialState',
  default: []
});

export const projectState = atom({
  key: 'projectState',
  default: []
});