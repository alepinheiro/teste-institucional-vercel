import BestExperience from '@/components/aboutUs/bextExperience.component.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { vueRouter } from 'storybook-vue3-router';

const meta = {
  title: 'Components/AboutUs/BestExperience',
  component: BestExperience,
  tags: ['autodocs'],
} satisfies Meta<typeof BestExperience>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [vueRouter()],
};
