import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { DOMEventHandlers, EditorMode, PageMode, } from '@mindfiredigital/canvas-editor';
import { MarginRulerComponent } from '../margin-ruler/margin-ruler.component';
import * as i0 from "@angular/core";
export class CanvasEditorComponent {
    constructor() {
        this.props = {};
        this.documentId = '0';
        this.dropdown = {
            left: 1180,
            top: 250,
            visiblity: false,
        };
        this.editorContent = [];
        this.selectedText = '';
    }
    ngOnInit() {
        const container = document.querySelector('.canvas-editor');
        if (container.querySelector('[editor-component="main"]')) {
            return;
        }
        const editorOptions = {
            height: 1056,
            width: 816,
            mode: EditorMode.EDIT,
            pageMode: PageMode.PAGING,
            pageNumber: {
                format: '{pageNo}/{pageCount}',
            },
            minSize: 1,
            maxSize: 72,
        };
        // container.addEventListener('mouseup', (e) => {
        //   _props.onSelect && _props?.onSelect(DOMEventHandlers.getSelectedText());
        // })
        // container.addEventListener('keydown', (e) => {
        //   const text = DOMEventHandlers.getContent()?.data?.main;
        //   setEditorContent(text);
        //   _props?.onChange && _props?.onChange(text[0].value);
        // })
        DOMEventHandlers.register(container, this.editorContent, {});
        DOMEventHandlers.setContent({ main: [{ value: 'hello' }] });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CanvasEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CanvasEditorComponent, isStandalone: true, selector: "lib-canvas-editor", ngImport: i0, template: "<div class=\"canvas-editor-main\">\r\n  <div class=\"canvas-editor editor\" id=\"canvasEditorRef\">\r\n    <!-- <lib-margin-ruler [documentId]=\"documentId\"></lib-margin-ruler> -->\r\n  </div>\r\n</div>", styles: [".editor>div{margin:0}.canvas-editor{position:relative}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CanvasEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-canvas-editor', standalone: true, imports: [MarginRulerComponent], template: "<div class=\"canvas-editor-main\">\r\n  <div class=\"canvas-editor editor\" id=\"canvasEditorRef\">\r\n    <!-- <lib-margin-ruler [documentId]=\"documentId\"></lib-margin-ruler> -->\r\n  </div>\r\n</div>", styles: [".editor>div{margin:0}.canvas-editor{position:relative}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1jYW52YXMtbGliL3NyYy9saWIvY29tcG9uZW50cy9jYW52YXMtZWRpdG9yL2NhbnZhcy1lZGl0b3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktY2FudmFzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2FudmFzLWVkaXRvci9jYW52YXMtZWRpdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlDLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLG9EQUFvRDtBQUNwRCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFFVixRQUFRLEdBQ1QsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFTOUUsTUFBTSxPQUFPLHFCQUFxQjtJQWFoQztRQVpBLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFXLEdBQUcsQ0FBQztRQUV6QixhQUFRLEdBQUc7WUFDVCxJQUFJLEVBQUUsSUFBSTtZQUNWLEdBQUcsRUFBRSxHQUFHO1lBQ1IsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQztRQUNGLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBRXhCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBRUgsQ0FBQztJQUVoQixRQUFRO1FBQ04sTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDdEMsZ0JBQWdCLENBQ0MsQ0FBQztRQUVwQixJQUFJLFNBQVMsQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsRUFBRSxDQUFDO1lBQ3pELE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxhQUFhLEdBQUc7WUFDcEIsTUFBTSxFQUFFLElBQUk7WUFDWixLQUFLLEVBQUUsR0FBRztZQUNWLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSTtZQUNyQixRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU07WUFDekIsVUFBVSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxzQkFBc0I7YUFDL0I7WUFDRCxPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUVGLGlEQUFpRDtRQUNqRCw2RUFBNkU7UUFDN0UsS0FBSztRQUVMLGlEQUFpRDtRQUNqRCw0REFBNEQ7UUFDNUQsNEJBQTRCO1FBQzVCLHlEQUF5RDtRQUN6RCxLQUFLO1FBQ0wsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdELGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7K0dBL0NVLHFCQUFxQjttR0FBckIscUJBQXFCLDZFQ2pCbEMsNk1BSU07OzRGRGFPLHFCQUFxQjtrQkFQakMsU0FBUzsrQkFDRSxtQkFBbUIsY0FDakIsSUFBSSxXQUNQLENBQUMsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIGltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtcclxuICBET01FdmVudEhhbmRsZXJzLFxyXG4gIEVkaXRvck1vZGUsXHJcbiAgSUVsZW1lbnQsXHJcbiAgUGFnZU1vZGUsXHJcbn0gZnJvbSAnQG1pbmRmaXJlZGlnaXRhbC9jYW52YXMtZWRpdG9yJztcclxuaW1wb3J0IHsgTWFyZ2luUnVsZXJDb21wb25lbnQgfSBmcm9tICcuLi9tYXJnaW4tcnVsZXIvbWFyZ2luLXJ1bGVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1jYW52YXMtZWRpdG9yJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtNYXJnaW5SdWxlckNvbXBvbmVudF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbnZhcy1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9jYW52YXMtZWRpdG9yLmNvbXBvbmVudC5jc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FudmFzRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcm9wczogYW55ID0ge307XHJcbiAgZG9jdW1lbnRJZDogc3RyaW5nID0gJzAnO1xyXG4gIGNhbnZhc0VkaXRvclJlZjogYW55O1xyXG4gIGRyb3Bkb3duID0ge1xyXG4gICAgbGVmdDogMTE4MCxcclxuICAgIHRvcDogMjUwLFxyXG4gICAgdmlzaWJsaXR5OiBmYWxzZSxcclxuICB9O1xyXG4gIGVkaXRvckNvbnRlbnQ6IGFueSA9IFtdO1xyXG5cclxuICBzZWxlY3RlZFRleHQgPSAnJztcclxuICBpbnN0YW5jZTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLmNhbnZhcy1lZGl0b3InXHJcbiAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIGlmIChjb250YWluZXIucXVlcnlTZWxlY3RvcignW2VkaXRvci1jb21wb25lbnQ9XCJtYWluXCJdJykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVkaXRvck9wdGlvbnMgPSB7XHJcbiAgICAgIGhlaWdodDogMTA1NixcclxuICAgICAgd2lkdGg6IDgxNixcclxuICAgICAgbW9kZTogRWRpdG9yTW9kZS5FRElULFxyXG4gICAgICBwYWdlTW9kZTogUGFnZU1vZGUuUEFHSU5HLFxyXG4gICAgICBwYWdlTnVtYmVyOiB7XHJcbiAgICAgICAgZm9ybWF0OiAne3BhZ2VOb30ve3BhZ2VDb3VudH0nLFxyXG4gICAgICB9LFxyXG4gICAgICBtaW5TaXplOiAxLFxyXG4gICAgICBtYXhTaXplOiA3MixcclxuICAgIH07XHJcblxyXG4gICAgLy8gY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZSkgPT4ge1xyXG4gICAgLy8gICBfcHJvcHMub25TZWxlY3QgJiYgX3Byb3BzPy5vblNlbGVjdChET01FdmVudEhhbmRsZXJzLmdldFNlbGVjdGVkVGV4dCgpKTtcclxuICAgIC8vIH0pXHJcblxyXG4gICAgLy8gY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgLy8gICBjb25zdCB0ZXh0ID0gRE9NRXZlbnRIYW5kbGVycy5nZXRDb250ZW50KCk/LmRhdGE/Lm1haW47XHJcbiAgICAvLyAgIHNldEVkaXRvckNvbnRlbnQodGV4dCk7XHJcbiAgICAvLyAgIF9wcm9wcz8ub25DaGFuZ2UgJiYgX3Byb3BzPy5vbkNoYW5nZSh0ZXh0WzBdLnZhbHVlKTtcclxuICAgIC8vIH0pXHJcbiAgICBET01FdmVudEhhbmRsZXJzLnJlZ2lzdGVyKGNvbnRhaW5lciwgdGhpcy5lZGl0b3JDb250ZW50LCB7fSk7XHJcbiAgICBET01FdmVudEhhbmRsZXJzLnNldENvbnRlbnQoeyBtYWluOiBbeyB2YWx1ZTogJ2hlbGxvJyB9XSB9KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNhbnZhcy1lZGl0b3ItbWFpblwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjYW52YXMtZWRpdG9yIGVkaXRvclwiIGlkPVwiY2FudmFzRWRpdG9yUmVmXCI+XHJcbiAgICA8IS0tIDxsaWItbWFyZ2luLXJ1bGVyIFtkb2N1bWVudElkXT1cImRvY3VtZW50SWRcIj48L2xpYi1tYXJnaW4tcnVsZXI+IC0tPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iXX0=