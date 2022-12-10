import { AppPath } from 'app/routers/config/routerConfig';
import React from 'react';
import AboutIcon from 'shared/assets/icons/about.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface ISidebarItem {
  path: string;
  text: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  privateRoute?: boolean;
}

export const sidebarItems: ISidebarItem[] = [
  {
    path: AppPath.main,
    text: 'Главная',
    icon: MainIcon,
  },

  {
    path: AppPath.about,
    text: 'О нас',
    icon: AboutIcon,
  },
  {
    path: AppPath.profile,
    text: 'Страница профиля',
    icon: ProfileIcon,
    privateRoute: true,
  },
  {
    path: AppPath.articles,
    text: 'Статьи',
    icon: ArticlesIcon,
    privateRoute: true,
  },
];
