import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class NgxGalleryArrowsComponent {
    constructor() {
        this.onPrevClick = new EventEmitter();
        this.onNextClick = new EventEmitter();
    }
    handlePrevClick() {
        this.onPrevClick.emit();
    }
    handleNextClick() {
        this.onNextClick.emit();
    }
}
NgxGalleryArrowsComponent.ɵfac = function NgxGalleryArrowsComponent_Factory(t) { return new (t || NgxGalleryArrowsComponent)(); };
NgxGalleryArrowsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryArrowsComponent, selectors: [["ngx-gallery-arrows"]], inputs: { prevDisabled: "prevDisabled", nextDisabled: "nextDisabled", arrowPrevIcon: "arrowPrevIcon", arrowNextIcon: "arrowNextIcon" }, outputs: { onPrevClick: "onPrevClick", onNextClick: "onNextClick" }, decls: 6, vars: 10, consts: [[1, "ngx-gallery-arrow-wrapper", "ngx-gallery-arrow-left"], ["aria-hidden", "true", 1, "ngx-gallery-icon", "ngx-gallery-arrow", 3, "click"], [1, "ngx-gallery-arrow-wrapper", "ngx-gallery-arrow-right"]], template: function NgxGalleryArrowsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵlistener("click", function NgxGalleryArrowsComponent_Template_div_click_1_listener() { return ctx.handlePrevClick(); });
        ɵngcc0.ɵɵelement(2, "i");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵelementStart(4, "div", 1);
        ɵngcc0.ɵɵlistener("click", function NgxGalleryArrowsComponent_Template_div_click_4_listener() { return ctx.handleNextClick(); });
        ɵngcc0.ɵɵelement(5, "i");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ngx-gallery-disabled", ctx.prevDisabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx.arrowPrevIcon, "");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("ngx-gallery-disabled", ctx.nextDisabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx.arrowNextIcon, "");
    } }, styles: [".ngx-gallery-arrow-wrapper[_ngcontent-%COMP%]{display:table;height:100%;position:absolute;table-layout:fixed;width:1px;z-index:2000}.ngx-gallery-arrow-left[_ngcontent-%COMP%]{left:0}.ngx-gallery-arrow-right[_ngcontent-%COMP%]{right:0}.ngx-gallery-arrow[_ngcontent-%COMP%]{cursor:pointer;top:50%;transform:translateY(-50%)}.ngx-gallery-arrow.ngx-gallery-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.6}.ngx-gallery-arrow-left[_ngcontent-%COMP%]   .ngx-gallery-arrow[_ngcontent-%COMP%]{left:10px}.ngx-gallery-arrow-right[_ngcontent-%COMP%]   .ngx-gallery-arrow[_ngcontent-%COMP%]{right:10px}"] });
NgxGalleryArrowsComponent.propDecorators = {
    prevDisabled: [{ type: Input }],
    nextDisabled: [{ type: Input }],
    arrowPrevIcon: [{ type: Input }],
    arrowNextIcon: [{ type: Input }],
    onPrevClick: [{ type: Output }],
    onNextClick: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryArrowsComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-gallery-arrows',
                template: "<div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-left\">\n    <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handlePrevClick()\" [class.ngx-gallery-disabled]=\"prevDisabled\">\n        <i class=\"ngx-gallery-icon-content {{arrowPrevIcon}}\"></i>\n    </div>\n</div>\n<div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-right\">\n    <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handleNextClick()\" [class.ngx-gallery-disabled]=\"nextDisabled\">\n        <i class=\"ngx-gallery-icon-content {{arrowNextIcon}}\"></i>\n    </div>\n</div>",
                styles: [".ngx-gallery-arrow-wrapper{display:table;height:100%;position:absolute;table-layout:fixed;width:1px;z-index:2000}.ngx-gallery-arrow-left{left:0}.ngx-gallery-arrow-right{right:0}.ngx-gallery-arrow{cursor:pointer;top:50%;transform:translateY(-50%)}.ngx-gallery-arrow.ngx-gallery-disabled{cursor:default;opacity:.6}.ngx-gallery-arrow-left .ngx-gallery-arrow{left:10px}.ngx-gallery-arrow-right .ngx-gallery-arrow{right:10px}"]
            }]
    }], function () { return []; }, { onPrevClick: [{
            type: Output
        }], onNextClick: [{
            type: Output
        }], prevDisabled: [{
            type: Input
        }], nextDisabled: [{
            type: Input
        }], arrowPrevIcon: [{
            type: Input
        }], arrowNextIcon: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktYXJyb3dzLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdhbGxlcnkvc3JjL2xpYi9uZ3gtZ2FsbGVyeS1hcnJvd3Mvbmd4LWdhbGxlcnktYXJyb3dzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU92RSxNQUFNLE9BQU8seUJBQXlCO0FBQ3JDLElBTkQ7QUFDRyxRQVVTLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM3QyxRQUFZLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM3QyxJQVFBLENBQUM7QUFDRCxJQVJFLGVBQWU7QUFBSyxRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNILElBQ0UsZUFBZTtBQUFLLFFBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDOUIsSUFBRSxDQUFDO0FBQ0g7cURBckJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsb0JBQW9CO01BQzlCLHFuQkFBa0Q7Ozs7Ozs7OzsyQ0FFbkQ7Ozs7Ozs7Ozs7Ozs7NG1CQUNJO0FBQUM7QUFDSywyQkFBUixLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLDRCQUNWLEtBQUs7QUFBSyw0QkFDVixLQUFLO0FBQUssMEJBRVYsTUFBTTtBQUFLLDBCQUNYLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1nYWxsZXJ5LWFycm93cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ2FsbGVyeS1hcnJvd3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZ2FsbGVyeS1hcnJvd3MuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHYWxsZXJ5QXJyb3dzQ29tcG9uZW50e1xuICBASW5wdXQoKSBwcmV2RGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5leHREaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgYXJyb3dQcmV2SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBhcnJvd05leHRJY29uOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIG9uUHJldkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25OZXh0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaGFuZGxlUHJldkNsaWNrKCk6IHZvaWQge1xuICAgICAgdGhpcy5vblByZXZDbGljay5lbWl0KCk7XG4gIH1cblxuICBoYW5kbGVOZXh0Q2xpY2soKTogdm9pZCB7XG4gICAgICB0aGlzLm9uTmV4dENsaWNrLmVtaXQoKTtcbiAgfVxufVxuIl19