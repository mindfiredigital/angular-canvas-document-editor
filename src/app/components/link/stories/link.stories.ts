import type { Meta, StoryObj } from '@storybook/angular';
// import { LinkComponent } from '../link.component';
import { AppComponent } from '../../../app.component';

// import { YourComponent } from './your.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<AppComponent> = {
  component: AppComponent,
};

export default meta;
type Story = StoryObj<AppComponent>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
