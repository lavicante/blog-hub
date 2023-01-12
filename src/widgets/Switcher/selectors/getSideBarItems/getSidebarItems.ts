import { createSelector } from '@reduxjs/toolkit';
import { AppPath } from 'app/routers/config/routerConfig';
import { getUserData } from 'entities/User';
import AboutIcon from 'shared/assets/icons/about.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

import { ISidebarItem } from '../../types/sideBarItems';

export const getSidebarItems = createSelector(getUserData, (userData) => {
  const sideBarItems: ISidebarItem[] = [
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
  ];

  if (userData) {
    sideBarItems.push(
      {
        path: AppPath.profile + userData.id,
        text: 'Страница профиля',
        icon: ProfileIcon,
        privateRoute: true,
      },
      {
        path: AppPath.articles,
        text: 'Статьи',
        icon: ArticlesIcon,
        privateRoute: true,
      }
    );
  }

  return sideBarItems;
});
