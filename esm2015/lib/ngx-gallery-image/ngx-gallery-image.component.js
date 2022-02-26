import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxGalleryHelperService } from '../ngx-gallery-helper.service';
import { NgxGalleryAnimation } from '../ngx-gallery-animation.model';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
import * as ɵngcc2 from '../ngx-gallery-helper.service';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '../ngx-gallery-action/ngx-gallery-action.component';
import * as ɵngcc5 from '../ngx-gallery-bullets/ngx-gallery-bullets.component';
import * as ɵngcc6 from '../ngx-gallery-arrows/ngx-gallery-arrows.component';

function NgxGalleryImageComponent_div_1_div_1_ngx_gallery_action_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 9);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryImageComponent_div_1_div_1_ngx_gallery_action_2_Template_ngx_gallery_action_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const action_r9 = ctx.$implicit; const image_r3 = ɵngcc0.ɵɵnextContext(2).$implicit; return action_r9.onClick($event, image_r3.index); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r9 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("icon", action_r9.icon)("disabled", action_r9.disabled)("titleText", action_r9.titleText);
} }
function NgxGalleryImageComponent_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryImageComponent_div_1_div_1_div_3_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r8.descriptions[image_r3.index], ɵngcc0.ɵɵsanitizeHtml);
} }
const _c0 = function (a0, a1, a2, a3) { return { "ngx-gallery-active": a0, "ngx-gallery-inactive-left": a1, "ngx-gallery-inactive-right": a2, "ngx-gallery-clickable": a3 }; };
function NgxGalleryImageComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryImageComponent_div_1_div_1_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const image_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.handleClick($event, image_r3.index); });
    ɵngcc0.ɵɵelementStart(1, "div", 6);
    ɵngcc0.ɵɵtemplate(2, NgxGalleryImageComponent_div_1_div_1_ngx_gallery_action_2_Template, 1, 3, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, NgxGalleryImageComponent_div_1_div_1_div_3_Template, 1, 1, "div", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("background-image", ctx_r5.getSafeUrl(image_r3.src));
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(5, _c0, ctx_r5.selectedIndex == image_r3.index, ctx_r5.selectedIndex > image_r3.index, ctx_r5.selectedIndex < image_r3.index, ctx_r5.clickable));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.actions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.showDescription && ctx_r5.descriptions[image_r3.index]);
} }
function NgxGalleryImageComponent_div_1_div_2_ngx_gallery_action_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 9);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryImageComponent_div_1_div_2_ngx_gallery_action_5_Template_ngx_gallery_action_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r24); const action_r21 = ctx.$implicit; const image_r3 = ɵngcc0.ɵɵnextContext(2).$implicit; return action_r21.onClick($event, image_r3.index); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r21 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("icon", action_r21.icon)("disabled", action_r21.disabled)("titleText", action_r21.titleText);
} }
function NgxGalleryImageComponent_div_1_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryImageComponent_div_1_div_2_div_6_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r20 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r20.descriptions[image_r3.index], ɵngcc0.ɵɵsanitizeHtml);
} }
function NgxGalleryImageComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryImageComponent_div_1_div_2_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r29); const image_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.handleClick($event, image_r3.index); });
    ɵngcc0.ɵɵelementStart(1, "video", 11);
    ɵngcc0.ɵɵelement(2, "source", 12);
    ɵngcc0.ɵɵtext(3, " Your browser does not support the video tag. ");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "div", 6);
    ɵngcc0.ɵɵtemplate(5, NgxGalleryImageComponent_div_1_div_2_ngx_gallery_action_5_Template, 1, 3, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, NgxGalleryImageComponent_div_1_div_2_div_6_Template, 1, 1, "div", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(4, _c0, ctx_r6.selectedIndex == image_r3.index, ctx_r6.selectedIndex > image_r3.index, ctx_r6.selectedIndex < image_r3.index, ctx_r6.clickable));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("src", image_r3.src, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r6.actions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.showDescription && ctx_r6.descriptions[image_r3.index]);
} }
function NgxGalleryImageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, NgxGalleryImageComponent_div_1_div_1_Template, 4, 10, "div", 3);
    ɵngcc0.ɵɵtemplate(2, NgxGalleryImageComponent_div_1_div_2_Template, 7, 9, "div", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r3 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", image_r3.type === "image");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", image_r3.type === "video");
} }
function NgxGalleryImageComponent_ngx_gallery_bullets_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-bullets", 13);
    ɵngcc0.ɵɵlistener("onChange", function NgxGalleryImageComponent_ngx_gallery_bullets_2_Template_ngx_gallery_bullets_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r32); const ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.show($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("count", ctx_r1.images.length)("active", ctx_r1.selectedIndex);
} }
function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-arrows", 14);
    ɵngcc0.ɵɵlistener("onPrevClick", function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onPrevClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r34); const ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.showPrev(); })("onNextClick", function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onNextClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r34); const ctx_r35 = ɵngcc0.ɵɵnextContext(); return ctx_r35.showNext(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-image-size-", ctx_r2.size, "");
    ɵngcc0.ɵɵproperty("prevDisabled", !ctx_r2.canShowPrev())("nextDisabled", !ctx_r2.canShowNext())("arrowPrevIcon", ctx_r2.arrowPrevIcon)("arrowNextIcon", ctx_r2.arrowNextIcon);
} }
export class NgxGalleryImageComponent {
    constructor(sanitization, elementRef, helperService) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.onClick = new EventEmitter();
        this.onActiveChange = new EventEmitter();
        this.canChangeImage = true;
    }
    ngOnInit() {
        if (this.arrows && this.arrowsAutoHide) {
            this.arrows = false;
        }
        if (this.autoPlay) {
            this.startAutoPlay();
        }
    }
    ngOnChanges(changes) {
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'image', () => this.showNext(), () => this.showPrev());
        }
    }
    onMouseEnter() {
        if (this.arrowsAutoHide && !this.arrows) {
            this.arrows = true;
        }
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
        }
    }
    onMouseLeave() {
        if (this.arrowsAutoHide && this.arrows) {
            this.arrows = false;
        }
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
        }
    }
    reset(index) {
        this.selectedIndex = index;
    }
    getImages() {
        if (!this.images) {
            return [];
        }
        if (this.lazyLoading) {
            let indexes = [this.selectedIndex];
            let prevIndex = this.selectedIndex - 1;
            if (prevIndex === -1 && this.infinityMove) {
                indexes.push(this.images.length - 1);
            }
            else if (prevIndex >= 0) {
                indexes.push(prevIndex);
            }
            let nextIndex = this.selectedIndex + 1;
            if (nextIndex == this.images.length && this.infinityMove) {
                indexes.push(0);
            }
            else if (nextIndex < this.images.length) {
                indexes.push(nextIndex);
            }
            return this.images.filter((img, i) => indexes.indexOf(i) != -1);
        }
        else {
            return this.images;
        }
    }
    startAutoPlay() {
        this.stopAutoPlay();
        this.timer = setInterval(() => {
            if (!this.showNext()) {
                this.selectedIndex = -1;
                this.showNext();
            }
        }, this.autoPlayInterval);
    }
    stopAutoPlay() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    handleClick(event, index) {
        if (this.clickable) {
            this.onClick.emit(index);
            event.stopPropagation();
            event.preventDefault();
        }
    }
    show(index) {
        this.selectedIndex = index;
        this.onActiveChange.emit(this.selectedIndex);
        this.setChangeTimeout();
    }
    showNext() {
        if (this.canShowNext() && this.canChangeImage) {
            this.selectedIndex++;
            if (this.selectedIndex === this.images.length) {
                this.selectedIndex = 0;
            }
            this.onActiveChange.emit(this.selectedIndex);
            this.setChangeTimeout();
            return true;
        }
        else {
            return false;
        }
    }
    showPrev() {
        if (this.canShowPrev() && this.canChangeImage) {
            this.selectedIndex--;
            if (this.selectedIndex < 0) {
                this.selectedIndex = this.images.length - 1;
            }
            this.onActiveChange.emit(this.selectedIndex);
            this.setChangeTimeout();
        }
    }
    setChangeTimeout() {
        this.canChangeImage = false;
        let timeout = 1000;
        if (this.animation === NgxGalleryAnimation.Slide
            || this.animation === NgxGalleryAnimation.Fade) {
            timeout = 500;
        }
        setTimeout(() => {
            this.canChangeImage = true;
        }, timeout);
    }
    canShowNext() {
        if (this.images) {
            return this.infinityMove || this.selectedIndex < this.images.length - 1
                ? true : false;
        }
        else {
            return false;
        }
    }
    canShowPrev() {
        if (this.images) {
            return this.infinityMove || this.selectedIndex > 0 ? true : false;
        }
        else {
            return false;
        }
    }
    getSafeUrl(image) {
        return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
    }
    getFileType(fileSource) {
        return this.helperService.getFileType(fileSource);
    }
}
NgxGalleryImageComponent.ɵfac = function NgxGalleryImageComponent_Factory(t) { return new (t || NgxGalleryImageComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NgxGalleryHelperService)); };
NgxGalleryImageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryImageComponent, selectors: [["ngx-gallery-image"]], hostBindings: function NgxGalleryImageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function NgxGalleryImageComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function NgxGalleryImageComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { arrows: "arrows", selectedIndex: "selectedIndex", images: "images", clickable: "clickable", arrowsAutoHide: "arrowsAutoHide", swipe: "swipe", animation: "animation", size: "size", arrowPrevIcon: "arrowPrevIcon", arrowNextIcon: "arrowNextIcon", autoPlay: "autoPlay", autoPlayInterval: "autoPlayInterval", autoPlayPauseOnHover: "autoPlayPauseOnHover", infinityMove: "infinityMove", lazyLoading: "lazyLoading", actions: "actions", descriptions: "descriptions", showDescription: "showDescription", bullets: "bullets" }, outputs: { onClick: "onClick", onActiveChange: "onActiveChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [[4, "ngFor", "ngForOf"], [3, "count", "active", "onChange", 4, "ngIf"], [3, "class", "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick", 4, "ngIf"], ["class", "ngx-gallery-image", 3, "ngClass", "background-image", "click", 4, "ngIf"], ["class", "ngx-gallery-image", 3, "ngClass", "click", 4, "ngIf"], [1, "ngx-gallery-image", 3, "ngClass", "click"], [1, "ngx-gallery-icons-wrapper"], [3, "icon", "disabled", "titleText", "onClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-image-text", 3, "innerHTML", "click", 4, "ngIf"], [3, "icon", "disabled", "titleText", "onClick"], [1, "ngx-gallery-image-text", 3, "innerHTML", "click"], ["controls", "", 2, "width", "100%", "height", "100%"], [3, "src"], [3, "count", "active", "onChange"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick"]], template: function NgxGalleryImageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, NgxGalleryImageComponent_div_1_Template, 3, 2, "div", 0);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, NgxGalleryImageComponent_ngx_gallery_bullets_2_Template, 1, 2, "ngx-gallery-bullets", 1);
        ɵngcc0.ɵɵtemplate(3, NgxGalleryImageComponent_ngx_gallery_arrows_3_Template, 1, 7, "ngx-gallery-arrows", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("ngx-gallery-image-wrapper ngx-gallery-animation-", ctx.animation, " ngx-gallery-image-size-", ctx.size, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.getImages());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.bullets);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.arrows);
    } }, directives: [ɵngcc3.NgForOf, ɵngcc3.NgIf, ɵngcc3.NgClass, ɵngcc4.NgxGalleryActionComponent, ɵngcc5.NgxGalleryBulletsComponent, ɵngcc6.NgxGalleryArrowsComponent], styles: ["[_nghost-%COMP%]{display:inline-block;position:relative;width:100%}.ngx-gallery-image-wrapper[_ngcontent-%COMP%]{left:0;overflow:hidden}.ngx-gallery-image[_ngcontent-%COMP%], .ngx-gallery-image-wrapper[_ngcontent-%COMP%]{height:100%;position:absolute;top:0;width:100%}.ngx-gallery-image[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat}.ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{z-index:1000}.ngx-gallery-image-size-cover[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{background-size:cover}.ngx-gallery-image-size-contain[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{background-size:contain}.ngx-gallery-animation-fade[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{left:0;opacity:0;transition:.5s ease-in-out}.ngx-gallery-animation-fade[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1}.ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{transition:.5s ease-in-out}.ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{left:0}.ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-inactive-left[_ngcontent-%COMP%]{left:-100%}.ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-inactive-right[_ngcontent-%COMP%]{left:100%}.ngx-gallery-animation-rotate[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{left:0;opacity:0;transform:scale(3.5) rotate(90deg);transition:1s ease}.ngx-gallery-animation-rotate[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1;transform:scale(1) rotate(0deg)}.ngx-gallery-animation-zoom[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{left:0;opacity:0;transform:scale(2.5);transition:1s ease}.ngx-gallery-animation-zoom[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1;transform:scale(1)}.ngx-gallery-image-text[_ngcontent-%COMP%]{background:rgba(0,0,0,.7);bottom:0;color:#fff;font-size:16px;padding:10px;position:absolute;text-align:center;width:100%;z-index:10}"] });
NgxGalleryImageComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: ElementRef },
    { type: NgxGalleryHelperService }
];
NgxGalleryImageComponent.propDecorators = {
    images: [{ type: Input }],
    clickable: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    arrows: [{ type: Input }],
    arrowsAutoHide: [{ type: Input }],
    swipe: [{ type: Input }],
    animation: [{ type: Input }],
    size: [{ type: Input }],
    arrowPrevIcon: [{ type: Input }],
    arrowNextIcon: [{ type: Input }],
    autoPlay: [{ type: Input }],
    autoPlayInterval: [{ type: Input }],
    autoPlayPauseOnHover: [{ type: Input }],
    infinityMove: [{ type: Input }],
    lazyLoading: [{ type: Input }],
    actions: [{ type: Input }],
    descriptions: [{ type: Input }],
    showDescription: [{ type: Input }],
    bullets: [{ type: Input }],
    onClick: [{ type: Output }],
    onActiveChange: [{ type: Output }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryImageComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-gallery-image',
                template: "<div class=\"ngx-gallery-image-wrapper ngx-gallery-animation-{{animation}} ngx-gallery-image-size-{{size}}\">\n    <div *ngFor=\"let image of getImages(); let i = index;\">\n        <div *ngIf=\"image.type === 'image'\" class=\"ngx-gallery-image\" [ngClass]=\"{ 'ngx-gallery-active': selectedIndex == image.index, 'ngx-gallery-inactive-left': selectedIndex > image.index, 'ngx-gallery-inactive-right': selectedIndex < image.index, 'ngx-gallery-clickable': clickable }\"\n            [style.background-image]=\"getSafeUrl(image.src)\" (click)=\"handleClick($event, image.index)\">\n            <div class=\"ngx-gallery-icons-wrapper\">\n                <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\"\n                    [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, image.index)\"></ngx-gallery-action>\n            </div>\n            <div class=\"ngx-gallery-image-text\" *ngIf=\"showDescription && descriptions[image.index]\" [innerHTML]=\"descriptions[image.index]\"\n                (click)=\"$event.stopPropagation()\"></div>\n        </div>\n        <div *ngIf=\"image.type === 'video'\" class=\"ngx-gallery-image\" [ngClass]=\"{ 'ngx-gallery-active': selectedIndex == image.index, 'ngx-gallery-inactive-left': selectedIndex > image.index, 'ngx-gallery-inactive-right': selectedIndex < image.index, 'ngx-gallery-clickable': clickable }\"\n            (click)=\"handleClick($event, image.index)\">\n            <video controls style=\"width: 100%; height: 100%;\">\n                <source [src]=\"image.src\">\n                Your browser does not support the video tag.\n            </video>\n            <div class=\"ngx-gallery-icons-wrapper\">\n                <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\"\n                    [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, image.index)\"></ngx-gallery-action>\n            </div>\n            <div class=\"ngx-gallery-image-text\" *ngIf=\"showDescription && descriptions[image.index]\" [innerHTML]=\"descriptions[image.index]\"\n                (click)=\"$event.stopPropagation()\"></div>\n        </div>\n    </div>\n</div>\n<ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"selectedIndex\" (onChange)=\"show($event)\"></ngx-gallery-bullets>\n<ngx-gallery-arrows class=\"ngx-gallery-image-size-{{size}}\" *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n",
                styles: [":host{display:inline-block;position:relative;width:100%}.ngx-gallery-image-wrapper{left:0;overflow:hidden}.ngx-gallery-image,.ngx-gallery-image-wrapper{height:100%;position:absolute;top:0;width:100%}.ngx-gallery-image{background-position:50%;background-repeat:no-repeat}.ngx-gallery-image.ngx-gallery-active{z-index:1000}.ngx-gallery-image-size-cover .ngx-gallery-image{background-size:cover}.ngx-gallery-image-size-contain .ngx-gallery-image{background-size:contain}.ngx-gallery-animation-fade .ngx-gallery-image{left:0;opacity:0;transition:.5s ease-in-out}.ngx-gallery-animation-fade .ngx-gallery-image.ngx-gallery-active{opacity:1}.ngx-gallery-animation-slide .ngx-gallery-image{transition:.5s ease-in-out}.ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-active{left:0}.ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-left{left:-100%}.ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-right{left:100%}.ngx-gallery-animation-rotate .ngx-gallery-image{left:0;opacity:0;transform:scale(3.5) rotate(90deg);transition:1s ease}.ngx-gallery-animation-rotate .ngx-gallery-image.ngx-gallery-active{opacity:1;transform:scale(1) rotate(0deg)}.ngx-gallery-animation-zoom .ngx-gallery-image{left:0;opacity:0;transform:scale(2.5);transition:1s ease}.ngx-gallery-animation-zoom .ngx-gallery-image.ngx-gallery-active{opacity:1;transform:scale(1)}.ngx-gallery-image-text{background:rgba(0,0,0,.7);bottom:0;color:#fff;font-size:16px;padding:10px;position:absolute;text-align:center;width:100%;z-index:10}"]
            }]
    }], function () { return [{ type: ɵngcc1.DomSanitizer }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.NgxGalleryHelperService }]; }, { onClick: [{
            type: Output
        }], onActiveChange: [{
            type: Output
        }], arrows: [{
            type: Input
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], selectedIndex: [{
            type: Input
        }], images: [{
            type: Input
        }], clickable: [{
            type: Input
        }], arrowsAutoHide: [{
            type: Input
        }], swipe: [{
            type: Input
        }], animation: [{
            type: Input
        }], size: [{
            type: Input
        }], arrowPrevIcon: [{
            type: Input
        }], arrowNextIcon: [{
            type: Input
        }], autoPlay: [{
            type: Input
        }], autoPlayInterval: [{
            type: Input
        }], autoPlayPauseOnHover: [{
            type: Input
        }], infinityMove: [{
            type: Input
        }], lazyLoading: [{
            type: Input
        }], actions: [{
            type: Input
        }], descriptions: [{
            type: Input
        }], showDescription: [{
            type: Input
        }], bullets: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ2FsbGVyeS9zcmMvbGliL25neC1nYWxsZXJ5LWltYWdlL25neC1nYWxsZXJ5LWltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJFLE1BQU0sT0FBTyx3QkFBd0I7QUFBRyxJQTRCcEMsWUFBb0IsWUFBMEIsRUFDbEMsVUFBc0IsRUFBVSxhQUFzQztBQUFJLFFBRGxFLGlCQUFZLEdBQVosWUFBWSxDQUFjO0FBQUMsUUFDbkMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQVMsa0JBQWEsR0FBYixhQUFhLENBQXlCO0FBQUMsUUFSekUsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDM0MsUUFBYyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDbEQsUUFDSSxtQkFBYyxHQUFHLElBQUksQ0FBQztBQUMxQixJQUl5RixDQUFDO0FBQzFGLElBQ0ksUUFBUTtBQUFLLFFBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDaEQsWUFBWSxJ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dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi9uZ3gtZ2FsbGVyeS1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOZ3hHYWxsZXJ5T3JkZXJlZEltYWdlIH0gZnJvbSAnLi4vbmd4LWdhbGxlcnktb3JkZXJlZC1pbWFnZS5tb2RlbCc7XG5pbXBvcnQgeyBOZ3hHYWxsZXJ5QW5pbWF0aW9uIH0gZnJvbSAnLi4vbmd4LWdhbGxlcnktYW5pbWF0aW9uLm1vZGVsJztcbmltcG9ydCB7IE5neEdhbGxlcnlBY3Rpb24gfSBmcm9tICcuLi9uZ3gtZ2FsbGVyeS1hY3Rpb24ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1nYWxsZXJ5LWltYWdlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LWdhbGxlcnktaW1hZ2UuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25neC1nYWxsZXJ5LWltYWdlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIGltYWdlczogTmd4R2FsbGVyeU9yZGVyZWRJbWFnZVtdO1xuICAgIEBJbnB1dCgpIGNsaWNrYWJsZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzZWxlY3RlZEluZGV4OiBudW1iZXI7XG4gICAgQElucHV0KCkgYXJyb3dzOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGFycm93c0F1dG9IaWRlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHN3aXBlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGFuaW1hdGlvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNpemU6IHN0cmluZztcbiAgICBASW5wdXQoKSBhcnJvd1ByZXZJY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYXJyb3dOZXh0SWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGF1dG9QbGF5OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGF1dG9QbGF5SW50ZXJ2YWw6IG51bWJlcjtcbiAgICBASW5wdXQoKSBhdXRvUGxheVBhdXNlT25Ib3ZlcjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBpbmZpbml0eU1vdmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgbGF6eUxvYWRpbmc6IGJvb2xlYW47XG4gICAgQElucHV0KCkgYWN0aW9uczogTmd4R2FsbGVyeUFjdGlvbltdO1xuICAgIEBJbnB1dCgpIGRlc2NyaXB0aW9uczogc3RyaW5nW107XG4gICAgQElucHV0KCkgc2hvd0Rlc2NyaXB0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGJ1bGxldHM6IGJvb2xlYW47XG5cbiAgICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25BY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjYW5DaGFuZ2VJbWFnZSA9IHRydWU7XG5cbiAgICBwcml2YXRlIHRpbWVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6YXRpb246IERvbVNhbml0aXplcixcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGhlbHBlclNlcnZpY2U6IE5neEdhbGxlcnlIZWxwZXJTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmFycm93cyAmJiB0aGlzLmFycm93c0F1dG9IaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmFycm93cyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b1BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAoY2hhbmdlc1snc3dpcGUnXSkge1xuICAgICAgICAgICAgdGhpcy5oZWxwZXJTZXJ2aWNlLm1hbmFnZVN3aXBlKHRoaXMuc3dpcGUsIHRoaXMuZWxlbWVudFJlZiwgJ2ltYWdlJywgKCkgPT4gdGhpcy5zaG93TmV4dCgpLCAoKSA9PiB0aGlzLnNob3dQcmV2KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpIG9uTW91c2VFbnRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyb3dzQXV0b0hpZGUgJiYgIXRoaXMuYXJyb3dzKSB7XG4gICAgICAgICAgICB0aGlzLmFycm93cyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hdXRvUGxheSAmJiB0aGlzLmF1dG9QbGF5UGF1c2VPbkhvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BBdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIG9uTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyb3dzQXV0b0hpZGUgJiYgdGhpcy5hcnJvd3MpIHtcbiAgICAgICAgICAgIHRoaXMuYXJyb3dzID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hdXRvUGxheSAmJiB0aGlzLmF1dG9QbGF5UGF1c2VPbkhvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VzKCk6IE5neEdhbGxlcnlPcmRlcmVkSW1hZ2VbXSB7XG4gICAgICAgIGlmICghdGhpcy5pbWFnZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhenlMb2FkaW5nKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXhlcyA9IFt0aGlzLnNlbGVjdGVkSW5kZXhdO1xuICAgICAgICAgICAgbGV0IHByZXZJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG5cbiAgICAgICAgICAgIGlmIChwcmV2SW5kZXggPT09IC0xICYmIHRoaXMuaW5maW5pdHlNb3ZlKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByZXZJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKHByZXZJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXggKyAxO1xuXG4gICAgICAgICAgICBpZiAobmV4dEluZGV4ID09IHRoaXMuaW1hZ2VzLmxlbmd0aCAmJiB0aGlzLmluZmluaXR5TW92ZSkge1xuICAgICAgICAgICAgICAgIGluZGV4ZXMucHVzaCgwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dEluZGV4IDwgdGhpcy5pbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKG5leHRJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlcy5maWx0ZXIoKGltZywgaSkgPT4gaW5kZXhlcy5pbmRleE9mKGkpICE9IC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0QXV0b1BsYXkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XG5cbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG93TmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLmF1dG9QbGF5SW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIHN0b3BBdXRvUGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhldmVudDogRXZlbnQsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY2xpY2thYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2suZW1pdChpbmRleCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3coaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5vbkFjdGl2ZUNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgIHRoaXMuc2V0Q2hhbmdlVGltZW91dCgpO1xuICAgIH1cblxuICAgIHNob3dOZXh0KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5jYW5TaG93TmV4dCgpICYmIHRoaXMuY2FuQ2hhbmdlSW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCsrO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0aGlzLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9uQWN0aXZlQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2hhbmdlVGltZW91dCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQcmV2KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jYW5TaG93UHJldigpICYmIHRoaXMuY2FuQ2hhbmdlSW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleC0tO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub25BY3RpdmVDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zZXRDaGFuZ2VUaW1lb3V0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDaGFuZ2VUaW1lb3V0KCkge1xuICAgICAgICB0aGlzLmNhbkNoYW5nZUltYWdlID0gZmFsc2U7XG4gICAgICAgIGxldCB0aW1lb3V0ID0gMTAwMDtcblxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24gPT09IE5neEdhbGxlcnlBbmltYXRpb24uU2xpZGVcbiAgICAgICAgICAgIHx8IHRoaXMuYW5pbWF0aW9uID09PSBOZ3hHYWxsZXJ5QW5pbWF0aW9uLkZhZGUpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FuQ2hhbmdlSW1hZ2UgPSB0cnVlO1xuICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICB9XG5cbiAgICBjYW5TaG93TmV4dCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbmZpbml0eU1vdmUgfHwgdGhpcy5zZWxlY3RlZEluZGV4IDwgdGhpcy5pbWFnZXMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuU2hvd1ByZXYoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5maW5pdHlNb3ZlIHx8IHRoaXMuc2VsZWN0ZWRJbmRleCA+IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTYWZlVXJsKGltYWdlOiBzdHJpbmcpOiBTYWZlU3R5bGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6YXRpb24uYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHRoaXMuaGVscGVyU2VydmljZS5nZXRCYWNrZ3JvdW5kVXJsKGltYWdlKSk7XG4gICAgfVxuXG4gICAgZ2V0RmlsZVR5cGUoZmlsZVNvdXJjZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlbHBlclNlcnZpY2UuZ2V0RmlsZVR5cGUoZmlsZVNvdXJjZSk7XG4gICAgfVxufSJdfQ==