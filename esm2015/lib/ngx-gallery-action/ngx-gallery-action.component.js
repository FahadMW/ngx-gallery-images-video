import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class NgxGalleryActionComponent {
    constructor() {
        this.disabled = false;
        this.titleText = '';
        this.onClick = new EventEmitter();
    }
    handleClick(event) {
        if (!this.disabled) {
            this.onClick.emit(event);
        }
        event.stopPropagation();
        event.preventDefault();
    }
}
NgxGalleryActionComponent.ɵfac = function NgxGalleryActionComponent_Factory(t) { return new (t || NgxGalleryActionComponent)(); };
NgxGalleryActionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryActionComponent, selectors: [["ngx-gallery-action"]], inputs: { disabled: "disabled", titleText: "titleText", icon: "icon" }, outputs: { onClick: "onClick" }, decls: 2, vars: 6, consts: [["aria-hidden", "true", 1, "ngx-gallery-icon", 3, "title", "click"]], template: function NgxGalleryActionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function NgxGalleryActionComponent_Template_div_click_0_listener($event) { return ctx.handleClick($event); });
        ɵngcc0.ɵɵelement(1, "i");
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ngx-gallery-icon-disabled", ctx.disabled);
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.titleText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx.icon, "");
    } }, styles: [""], changeDetection: 0 });
NgxGalleryActionComponent.propDecorators = {
    icon: [{ type: Input }],
    disabled: [{ type: Input }],
    titleText: [{ type: Input }],
    onClick: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryActionComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-gallery-action',
                template: "<div class=\"ngx-gallery-icon\" [class.ngx-gallery-icon-disabled]=\"disabled\"\naria-hidden=\"true\"\ntitle=\"{{ titleText }}\"\n(click)=\"handleClick($event)\">\n    <i class=\"ngx-gallery-icon-content {{ icon }}\"></i>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], titleText: [{
            type: Input
        }], onClick: [{
            type: Output
        }], icon: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdhbGxlcnkvc3JjL2xpYi9uZ3gtZ2FsbGVyeS1hY3Rpb24vbmd4LWdhbGxlcnktYWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVFoRyxNQUFNLE9BQU8seUJBQXlCO0FBQ3RDLElBUEE7QUFDRyxRQU9RLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDNUIsUUFBVyxjQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzFCLFFBQ1ksWUFBTyxHQUF3QixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzlELElBU0EsQ0FBQztBQUNELElBVEUsV0FBVyxDQUFDLEtBQVk7QUFDMUIsUUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUMxQixZQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLFNBQU87QUFDUCxRQUNNLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUM5QixRQUFNLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSDtxREFyQkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxvQkFBb0I7TUFDOUIsZ1BBQWtELGtCQUVsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSw0Q0FDaEQ7Ozs7Ozs7Ozs7NkNBQ0k7QUFBQztBQUNJLG1CQUFQLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLHNCQUVWLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZ2FsbGVyeS1hY3Rpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWdhbGxlcnktYWN0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWdhbGxlcnktYWN0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhbGxlcnlBY3Rpb25Db21wb25lbnQge1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRpdGxlVGV4dCA9ICcnO1xuXG4gIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGhhbmRsZUNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5vbkNsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbiJdfQ==