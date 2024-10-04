import { Component } from '@angular/core';
// import all necessary
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1jYW52YXMtbGliL3NyYy9saWIvY29tcG9uZW50cy9jYW52YXMtZWRpdG9yL2NhbnZhcy1lZGl0b3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktY2FudmFzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2FudmFzLWVkaXRvci9jYW52YXMtZWRpdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlDLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLHVCQUF1QjtBQUN2QixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDVixRQUFRLEdBQ1QsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFTOUUsTUFBTSxPQUFPLHFCQUFxQjtJQWFoQztRQVpBLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFXLEdBQUcsQ0FBQztRQUV6QixhQUFRLEdBQUc7WUFDVCxJQUFJLEVBQUUsSUFBSTtZQUNWLEdBQUcsRUFBRSxHQUFHO1lBQ1IsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQztRQUNGLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBRXhCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBRUgsQ0FBQztJQUVoQixRQUFRO1FBQ04sTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FDdEMsZ0JBQWdCLENBQ0MsQ0FBQztRQUVwQixJQUFJLFNBQVMsQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsRUFBRSxDQUFDO1lBQ3pELE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxhQUFhLEdBQUc7WUFDcEIsTUFBTSxFQUFFLElBQUk7WUFDWixLQUFLLEVBQUUsR0FBRztZQUNWLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSTtZQUNyQixRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU07WUFDekIsVUFBVSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxzQkFBc0I7YUFDL0I7WUFDRCxPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUVGLGlEQUFpRDtRQUNqRCw2RUFBNkU7UUFDN0UsS0FBSztRQUVMLGlEQUFpRDtRQUNqRCw0REFBNEQ7UUFDNUQsNEJBQTRCO1FBQzVCLHlEQUF5RDtRQUN6RCxLQUFLO1FBQ0wsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdELGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7K0dBL0NVLHFCQUFxQjttR0FBckIscUJBQXFCLDZFQ2hCbEMsNk1BSU07OzRGRFlPLHFCQUFxQjtrQkFQakMsU0FBUzsrQkFDRSxtQkFBbUIsY0FDakIsSUFBSSxXQUNQLENBQUMsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIGltcG9ydCBhbGwgbmVjZXNzYXJ5XHJcbmltcG9ydCB7XHJcbiAgRE9NRXZlbnRIYW5kbGVycyxcclxuICBFZGl0b3JNb2RlLFxyXG4gIFBhZ2VNb2RlLFxyXG59IGZyb20gJ0BtaW5kZmlyZWRpZ2l0YWwvY2FudmFzLWVkaXRvcic7XHJcbmltcG9ydCB7IE1hcmdpblJ1bGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFyZ2luLXJ1bGVyL21hcmdpbi1ydWxlci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItY2FudmFzLWVkaXRvcicsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTWFyZ2luUnVsZXJDb21wb25lbnRdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYW52YXMtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vY2FudmFzLWVkaXRvci5jb21wb25lbnQuY3NzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhbnZhc0VkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJvcHM6IGFueSA9IHt9O1xyXG4gIGRvY3VtZW50SWQ6IHN0cmluZyA9ICcwJztcclxuICBjYW52YXNFZGl0b3JSZWY6IGFueTtcclxuICBkcm9wZG93biA9IHtcclxuICAgIGxlZnQ6IDExODAsXHJcbiAgICB0b3A6IDI1MCxcclxuICAgIHZpc2libGl0eTogZmFsc2UsXHJcbiAgfTtcclxuICBlZGl0b3JDb250ZW50OiBhbnkgPSBbXTtcclxuXHJcbiAgc2VsZWN0ZWRUZXh0ID0gJyc7XHJcbiAgaW5zdGFuY2U6IGFueTtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5jYW52YXMtZWRpdG9yJ1xyXG4gICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBpZiAoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tlZGl0b3ItY29tcG9uZW50PVwibWFpblwiXScpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlZGl0b3JPcHRpb25zID0ge1xyXG4gICAgICBoZWlnaHQ6IDEwNTYsXHJcbiAgICAgIHdpZHRoOiA4MTYsXHJcbiAgICAgIG1vZGU6IEVkaXRvck1vZGUuRURJVCxcclxuICAgICAgcGFnZU1vZGU6IFBhZ2VNb2RlLlBBR0lORyxcclxuICAgICAgcGFnZU51bWJlcjoge1xyXG4gICAgICAgIGZvcm1hdDogJ3twYWdlTm99L3twYWdlQ291bnR9JyxcclxuICAgICAgfSxcclxuICAgICAgbWluU2l6ZTogMSxcclxuICAgICAgbWF4U2l6ZTogNzIsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHtcclxuICAgIC8vICAgX3Byb3BzLm9uU2VsZWN0ICYmIF9wcm9wcz8ub25TZWxlY3QoRE9NRXZlbnRIYW5kbGVycy5nZXRTZWxlY3RlZFRleHQoKSk7XHJcbiAgICAvLyB9KVxyXG5cclxuICAgIC8vIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIC8vICAgY29uc3QgdGV4dCA9IERPTUV2ZW50SGFuZGxlcnMuZ2V0Q29udGVudCgpPy5kYXRhPy5tYWluO1xyXG4gICAgLy8gICBzZXRFZGl0b3JDb250ZW50KHRleHQpO1xyXG4gICAgLy8gICBfcHJvcHM/Lm9uQ2hhbmdlICYmIF9wcm9wcz8ub25DaGFuZ2UodGV4dFswXS52YWx1ZSk7XHJcbiAgICAvLyB9KVxyXG4gICAgRE9NRXZlbnRIYW5kbGVycy5yZWdpc3Rlcihjb250YWluZXIsIHRoaXMuZWRpdG9yQ29udGVudCwge30pO1xyXG4gICAgRE9NRXZlbnRIYW5kbGVycy5zZXRDb250ZW50KHsgbWFpbjogW3sgdmFsdWU6ICdoZWxsbycgfV0gfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjYW52YXMtZWRpdG9yLW1haW5cIj5cclxuICA8ZGl2IGNsYXNzPVwiY2FudmFzLWVkaXRvciBlZGl0b3JcIiBpZD1cImNhbnZhc0VkaXRvclJlZlwiPlxyXG4gICAgPCEtLSA8bGliLW1hcmdpbi1ydWxlciBbZG9jdW1lbnRJZF09XCJkb2N1bWVudElkXCI+PC9saWItbWFyZ2luLXJ1bGVyPiAtLT5cclxuICA8L2Rpdj5cclxuPC9kaXY+Il19