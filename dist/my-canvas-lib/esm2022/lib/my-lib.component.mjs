import { Component } from '@angular/core';
import { EditorFooterComponent } from './components/editor-footer/editor-footer.component';
import { CanvasEditorComponent } from './components/canvas-editor/canvas-editor.component';
import { EditorToolbarComponent } from './components/editor-toolbar/editor-toolbar.component';
import * as i0 from "@angular/core";
export class MyLibComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: MyLibComponent, isStandalone: true, selector: "lib-my-lib", ngImport: i0, template: `
    <lib-editor-toolbar></lib-editor-toolbar>
    <lib-canvas-editor></lib-canvas-editor>
    <lib-editor-footer></lib-editor-footer>
  `, isInline: true, styles: [""], dependencies: [{ kind: "component", type: EditorFooterComponent, selector: "lib-editor-footer" }, { kind: "component", type: CanvasEditorComponent, selector: "lib-canvas-editor" }, { kind: "component", type: EditorToolbarComponent, selector: "lib-editor-toolbar" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-lib', standalone: true, template: `
    <lib-editor-toolbar></lib-editor-toolbar>
    <lib-canvas-editor></lib-canvas-editor>
    <lib-editor-footer></lib-editor-footer>
  `, imports: [
                        EditorFooterComponent,
                        CanvasEditorComponent,
                        EditorToolbarComponent,
                    ] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWNhbnZhcy1saWIvc3JjL2xpYi9teS1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7O0FBaUI5RixNQUFNLE9BQU8sY0FBYzsrR0FBZCxjQUFjO21HQUFkLGNBQWMsc0VBWmY7Ozs7R0FJVCwwRUFHQyxxQkFBcUIsOERBQ3JCLHFCQUFxQiw4REFDckIsc0JBQXNCOzs0RkFHYixjQUFjO2tCQWYxQixTQUFTOytCQUNFLFlBQVksY0FDVixJQUFJLFlBQ047Ozs7R0FJVCxXQUVRO3dCQUNQLHFCQUFxQjt3QkFDckIscUJBQXFCO3dCQUNyQixzQkFBc0I7cUJBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVkaXRvckZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9lZGl0b3ItZm9vdGVyL2VkaXRvci1mb290ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FudmFzRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbnZhcy1lZGl0b3IvY2FudmFzLWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0b3JUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2VkaXRvci10b29sYmFyL2VkaXRvci10b29sYmFyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1teS1saWInLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxsaWItZWRpdG9yLXRvb2xiYXI+PC9saWItZWRpdG9yLXRvb2xiYXI+XHJcbiAgICA8bGliLWNhbnZhcy1lZGl0b3I+PC9saWItY2FudmFzLWVkaXRvcj5cclxuICAgIDxsaWItZWRpdG9yLWZvb3Rlcj48L2xpYi1lZGl0b3ItZm9vdGVyPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBgYCxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBFZGl0b3JGb290ZXJDb21wb25lbnQsXHJcbiAgICBDYW52YXNFZGl0b3JDb21wb25lbnQsXHJcbiAgICBFZGl0b3JUb29sYmFyQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUxpYkNvbXBvbmVudCB7XHJcbiAgXHJcbn1cclxuIl19