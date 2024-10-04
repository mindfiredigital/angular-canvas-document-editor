import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./components/editor-footer/editor-footer.component";
import * as i2 from "./components/canvas-editor/canvas-editor.component";
import * as i3 from "./components/editor-toolbar/editor-toolbar.component";
export class MyLibComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: MyLibComponent, selector: "lib-my-lib", ngImport: i0, template: `
    <lib-editor-toolbar></lib-editor-toolbar>
    <lib-canvas-editor></lib-canvas-editor>
    <lib-editor-footer></lib-editor-footer>
  `, isInline: true, styles: [""], dependencies: [{ kind: "component", type: i1.EditorFooterComponent, selector: "lib-editor-footer" }, { kind: "component", type: i2.CanvasEditorComponent, selector: "lib-canvas-editor" }, { kind: "component", type: i3.EditorToolbarComponent, selector: "lib-editor-toolbar" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-lib', template: `
    <lib-editor-toolbar></lib-editor-toolbar>
    <lib-canvas-editor></lib-canvas-editor>
    <lib-editor-footer></lib-editor-footer>
  ` }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWNhbnZhcy1saWIvc3JjL2xpYi9teS1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBYzFDLE1BQU0sT0FBTyxjQUFjOytHQUFkLGNBQWM7bUdBQWQsY0FBYyxrREFQZjs7OztHQUlUOzs0RkFHVSxjQUFjO2tCQVQxQixTQUFTOytCQUNFLFlBQVksWUFDWjs7OztHQUlUIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVkaXRvckZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9lZGl0b3ItZm9vdGVyL2VkaXRvci1mb290ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FudmFzRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbnZhcy1lZGl0b3IvY2FudmFzLWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0b3JUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2VkaXRvci10b29sYmFyL2VkaXRvci10b29sYmFyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1teS1saWInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bGliLWVkaXRvci10b29sYmFyPjwvbGliLWVkaXRvci10b29sYmFyPlxyXG4gICAgPGxpYi1jYW52YXMtZWRpdG9yPjwvbGliLWNhbnZhcy1lZGl0b3I+XHJcbiAgICA8bGliLWVkaXRvci1mb290ZXI+PC9saWItZWRpdG9yLWZvb3Rlcj5cclxuICBgLFxyXG4gIHN0eWxlczogYGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUxpYkNvbXBvbmVudCB7XHJcbiAgXHJcbn1cclxuIl19