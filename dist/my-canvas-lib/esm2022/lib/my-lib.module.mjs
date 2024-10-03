import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { DocumentService } from './services/document.service';
import { MatSliderModule } from '@angular/material/slider';
import * as i0 from "@angular/core";
export class MyCanvasLibModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyCanvasLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: MyCanvasLibModule, imports: [MyLibComponent, MatSliderModule], exports: [MyLibComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyCanvasLibModule, providers: [DocumentService], imports: [MyLibComponent, MatSliderModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyCanvasLibModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MyLibComponent, MatSliderModule], // Import the standalone component
                    exports: [MyLibComponent], // Export it for external use
                    providers: [DocumentService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWNhbnZhcy1saWIvc3JjL2xpYi9teS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBTzNELE1BQU0sT0FBTyxpQkFBaUI7K0dBQWpCLGlCQUFpQjtnSEFBakIsaUJBQWlCLFlBSmxCLGNBQWMsRUFBQyxlQUFlLGFBQzlCLGNBQWM7Z0hBR2IsaUJBQWlCLGFBRmpCLENBQUMsZUFBZSxDQUFDLFlBRmxCLGNBQWMsRUFBQyxlQUFlOzs0RkFJN0IsaUJBQWlCO2tCQUw3QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBQyxlQUFlLENBQUMsRUFBRSxrQ0FBa0M7b0JBQzdFLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLDZCQUE2QjtvQkFDeEQsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE15TGliQ29tcG9uZW50IH0gZnJvbSAnLi9teS1saWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRG9jdW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kb2N1bWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0U2xpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW015TGliQ29tcG9uZW50LE1hdFNsaWRlck1vZHVsZV0sIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRcclxuICBleHBvcnRzOiBbTXlMaWJDb21wb25lbnRdLCAvLyBFeHBvcnQgaXQgZm9yIGV4dGVybmFsIHVzZVxyXG4gIHByb3ZpZGVyczogW0RvY3VtZW50U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE15Q2FudmFzTGliTW9kdWxlIHt9XHJcbiJdfQ==