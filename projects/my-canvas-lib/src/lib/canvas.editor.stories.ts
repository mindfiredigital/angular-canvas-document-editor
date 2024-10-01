import { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MyLibComponent } from './my-lib.component';
import { CanvasEditorComponent } from './components/canvas-editor/canvas-editor.component';
import { EditorFooterComponent } from './components/editor-footer/editor-footer.component';
import { EditorToolbarComponent } from './components/editor-toolbar/editor-toolbar.component';


export default {
  title: 'App/CanvasEditor',
  component: MyLibComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CanvasEditorComponent,  // Import standalone components
        EditorFooterComponent,  // Import standalone components
        EditorToolbarComponent  // Import standalone components
      ],
    }),
  ],
  argTypes: {
    title: { control: 'text', defaultValue: 'Canvas Editor' },
  },
} as Meta;

const Template: Story<MyLibComponent> = (args: MyLibComponent) => ({
  props: args,
});

export const DefaultView = Template.bind({});
DefaultView.args = {
  title: 'Canvas Editor',
};
