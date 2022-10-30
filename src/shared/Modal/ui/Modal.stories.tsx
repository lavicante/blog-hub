import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalComponent = Template.bind({});
ModalComponent.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus',
  isOpen: true,
};
