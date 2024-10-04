import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { DocumentService } from './services/document.service';
import { CanvasEditorComponent } from './components/canvas-editor/canvas-editor.component';
import { EditorFooterComponent } from './components/editor-footer/editor-footer.component';
import { EditorToolbarComponent } from './components/editor-toolbar/editor-toolbar.component';
import * as i0 from "@angular/core";
export class MyCanvasLibModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyCanvasLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: MyCanvasLibModule, declarations: [MyLibComponent], imports: [EditorFooterComponent, CanvasEditorComponent, EditorToolbarComponent], exports: [MyLibComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyCanvasLibModule, providers: [DocumentService], imports: [EditorFooterComponent, CanvasEditorComponent, EditorToolbarComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyCanvasLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MyLibComponent,
                    ], // Import the standalone component
                    exports: [MyLibComponent], // Export it for external use
                    providers: [DocumentService],
                    imports: [EditorFooterComponent, CanvasEditorComponent, EditorToolbarComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWNhbnZhcy1saWIvc3JjL2xpYi9teS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7QUFVOUYsTUFBTSxPQUFPLGlCQUFpQjsrR0FBakIsaUJBQWlCO2dIQUFqQixpQkFBaUIsaUJBUGIsY0FBYyxhQUtuQixxQkFBcUIsRUFBQyxxQkFBcUIsRUFBQyxzQkFBc0IsYUFGbEUsY0FBYztnSEFJYixpQkFBaUIsYUFIakIsQ0FBQyxlQUFlLENBQUMsWUFDbEIscUJBQXFCLEVBQUMscUJBQXFCLEVBQUMsc0JBQXNCOzs0RkFFakUsaUJBQWlCO2tCQVI3QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGNBQWM7cUJBRTFCLEVBQUUsa0NBQWtDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSw2QkFBNkI7b0JBQ3hELFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDNUIsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUMscUJBQXFCLEVBQUMsc0JBQXNCLENBQUM7aUJBQzlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTXlMaWJDb21wb25lbnQgfSBmcm9tICcuL215LWxpYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEb2N1bWVudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RvY3VtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXRTbGlkZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xyXG5pbXBvcnQgeyBDYW52YXNFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FudmFzLWVkaXRvci9jYW52YXMtZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVkaXRvckZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9lZGl0b3ItZm9vdGVyL2VkaXRvci1mb290ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRWRpdG9yVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9lZGl0b3ItdG9vbGJhci9lZGl0b3ItdG9vbGJhci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtNeUxpYkNvbXBvbmVudCxcclxuICAgIFxyXG4gICAgXSwgLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudFxyXG4gIGV4cG9ydHM6IFtNeUxpYkNvbXBvbmVudF0sIC8vIEV4cG9ydCBpdCBmb3IgZXh0ZXJuYWwgdXNlXHJcbiAgcHJvdmlkZXJzOiBbRG9jdW1lbnRTZXJ2aWNlXSxcclxuICBpbXBvcnRzOiBbRWRpdG9yRm9vdGVyQ29tcG9uZW50LENhbnZhc0VkaXRvckNvbXBvbmVudCxFZGl0b3JUb29sYmFyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlDYW52YXNMaWJNb2R1bGUge31cclxuIl19