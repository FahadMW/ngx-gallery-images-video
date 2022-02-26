import { Component, Input, EventEmitter, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = function (a0) { return { "ngx-gallery-active": a0 }; };
function NgxGalleryBulletsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryBulletsComponent_div_0_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const i_r2 = ctx.index; const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.handleChange($event, i_r2); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, i_r2 == ctx_r0.active));
} }
export class NgxGalleryBulletsComponent {
    constructor() {
        this.active = 0;
        this.onChange = new EventEmitter();
    }
    getBullets() {
        return Array(this.count);
    }
    handleChange(event, index) {
        this.onChange.emit(index);
    }
}
NgxGalleryBulletsComponent.ɵfac = function NgxGalleryBulletsComponent_Factory(t) { return new (t || NgxGalleryBulletsComponent)(); };
NgxGalleryBulletsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryBulletsComponent, selectors: [["ngx-gallery-bullets"]], inputs: { active: "active", count: "count" }, outputs: { onChange: "onChange" }, decls: 1, vars: 1, consts: [["class", "ngx-gallery-bullet", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "ngx-gallery-bullet", 3, "ngClass", "click"]], template: function NgxGalleryBulletsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgxGalleryBulletsComponent_div_0_Template, 1, 3, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.getBullets());
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass], styles: ["[_nghost-%COMP%]{bottom:0;display:inline-flex;left:50%;padding:10px;position:absolute;transform:translateX(-50%);z-index:2000}.ngx-gallery-bullet[_ngcontent-%COMP%]{background:#fff;border-radius:50%;cursor:pointer;height:10px;width:10px}.ngx-gallery-bullet[_ngcontent-%COMP%]:not(:first-child){margin-left:5px}.ngx-gallery-bullet.ngx-gallery-active[_ngcontent-%COMP%], .ngx-gallery-bullet[_ngcontent-%COMP%]:hover{background:#000}"] });
NgxGalleryBulletsComponent.propDecorators = {
    count: [{ type: Input }],
    active: [{ type: Input }],
    onChange: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryBulletsComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-gallery-bullets',
                template: "<div class=\"ngx-gallery-bullet\" *ngFor=\"let bullet of getBullets(); let i = index;\" (click)=\"handleChange($event, i)\" [ngClass]=\"{ 'ngx-gallery-active': i == active }\"></div>",
                styles: [":host{bottom:0;display:inline-flex;left:50%;padding:10px;position:absolute;transform:translateX(-50%);z-index:2000}.ngx-gallery-bullet{background:#fff;border-radius:50%;cursor:pointer;height:10px;width:10px}.ngx-gallery-bullet:not(:first-child){margin-left:5px}.ngx-gallery-bullet.ngx-gallery-active,.ngx-gallery-bullet:hover{background:#000}"]
            }]
    }], function () { return []; }, { active: [{
            type: Input
        }], onChange: [{
            type: Output
        }], count: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktYnVsbGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL25neC1nYWxsZXJ5L3NyYy9saWIvbmd4LWdhbGxlcnktYnVsbGV0cy9uZ3gtZ2FsbGVyeS1idWxsZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFPdkUsTUFBTSxPQUFPLDBCQUEwQjtBQUN2QyxJQU5BO0FBQ0csUUFNUSxXQUFNLEdBQVcsQ0FBQyxDQUFDO0FBQzlCLFFBQ1ksYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDMUMsSUFRQSxDQUFDO0FBQ0QsSUFSRSxVQUFVO0FBQUssUUFDWCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxZQUFZLENBQUMsS0FBWSxFQUFFLEtBQWE7QUFBSSxRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxJQUFFLENBQUM7QUFDSDtzREFsQkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxxQkFBcUI7S0FDL0Isa01BQW1EOzs7d0JBRXBEO3FmQUNJO0FBQUM7QUFDSSxvQkFBUCxLQUFLO0FBQUsscUJBQ1YsS0FBSztBQUFLLHVCQUVWLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1nYWxsZXJ5LWJ1bGxldHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWdhbGxlcnktYnVsbGV0cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neC1nYWxsZXJ5LWJ1bGxldHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHYWxsZXJ5QnVsbGV0c0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGFjdGl2ZTogbnVtYmVyID0gMDtcblxuICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ2V0QnVsbGV0cygpOiBudW1iZXJbXSB7XG4gICAgICByZXR1cm4gQXJyYXkodGhpcy5jb3VudCk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQ6IEV2ZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoaW5kZXgpO1xuICB9XG59XG4iXX0=