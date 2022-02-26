import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxGalleryHelperService } from '../ngx-gallery-helper.service';
import { NgxGalleryOrder } from '../ngx-gallery-order.model';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
import * as ɵngcc2 from '../ngx-gallery-helper.service';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '../ngx-gallery-action/ngx-gallery-action.component';
import * as ɵngcc5 from '../ngx-gallery-arrows/ngx-gallery-arrows.component';

const _c0 = function (a0, a1) { return { "ngx-gallery-active": a0, "ngx-gallery-clickable": a1 }; };
function NgxGalleryThumbnailsComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 9);
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    const image_r2 = ctx_r8.$implicit;
    const i_r3 = ctx_r8.index;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("background-image", ctx_r4.getSafeUrl(image_r2));
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(3, _c0, i_r3 == ctx_r4.selectedIndex, ctx_r4.clickable));
} }
const _c1 = function (a0, a1) { return { "ngx-gallery-active selectedVideoBorder": a0, "ngx-gallery-clickable": a1 }; };
function NgxGalleryThumbnailsComponent_div_2_div_3_video_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "video", 13);
    ɵngcc0.ɵɵelement(1, "source", 14);
    ɵngcc0.ɵɵtext(2, " Your browser does not support the video tag. ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    const i_r3 = ctx_r10.index;
    const image_r2 = ctx_r10.$implicit;
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(2, _c1, i_r3 == ctx_r9.selectedIndex, ctx_r9.clickable));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", image_r2, ɵngcc0.ɵɵsanitizeUrl);
} }
function NgxGalleryThumbnailsComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵtemplate(1, NgxGalleryThumbnailsComponent_div_2_div_3_video_1_Template, 3, 5, "video", 11);
    ɵngcc0.ɵɵelement(2, "div", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r2 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.getFileType(image_r2) == "video");
} }
function NgxGalleryThumbnailsComponent_div_2_ngx_gallery_action_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 15);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryThumbnailsComponent_div_2_ngx_gallery_action_5_Template_ngx_gallery_action_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); const action_r12 = ctx.$implicit; const i_r3 = ɵngcc0.ɵɵnextContext().index; return action_r12.onClick($event, i_r3); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r12 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("icon", action_r12.icon)("disabled", action_r12.disabled)("titleText", action_r12.titleText);
} }
function NgxGalleryThumbnailsComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "span", 17);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("+", ctx_r7.remainingCountValue, "");
} }
const _c2 = function (a0, a1) { return { "ngx-gallery-active selectedImageBorder": a0, "ngx-gallery-clickable": a1 }; };
function NgxGalleryThumbnailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "a", 3);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryThumbnailsComponent_div_2_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const i_r3 = ctx.index; const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.handleClick($event, i_r3); });
    ɵngcc0.ɵɵtemplate(2, NgxGalleryThumbnailsComponent_div_2_div_2_Template, 1, 6, "div", 4);
    ɵngcc0.ɵɵtemplate(3, NgxGalleryThumbnailsComponent_div_2_div_3_Template, 3, 1, "div", 5);
    ɵngcc0.ɵɵelementStart(4, "div", 6);
    ɵngcc0.ɵɵtemplate(5, NgxGalleryThumbnailsComponent_div_2_ngx_gallery_action_5_Template, 1, 3, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, NgxGalleryThumbnailsComponent_div_2_div_6_Template, 3, 1, "div", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("width", ctx_r0.getThumbnailWidth())("height", ctx_r0.getThumbnailHeight())("left", ctx_r0.getThumbnailLeft(i_r3))("top", ctx_r0.getThumbnailTop(i_r3));
    ɵngcc0.ɵɵproperty("href", ctx_r0.hasLink(i_r3) ? ctx_r0.links[i_r3] : "#", ɵngcc0.ɵɵsanitizeUrl)("target", ctx_r0.linkTarget)("ngClass", ɵngcc0.ɵɵpureFunction2(16, _c2, i_r3 == ctx_r0.selectedIndex, ctx_r0.clickable));
    ɵngcc0.ɵɵattribute("aria-label", ctx_r0.labels[i_r3]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.getFileType(image_r2) == "image");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.getFileType(image_r2) == "video");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.actions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.remainingCount && ctx_r0.remainingCountValue && i_r3 == ctx_r0.rows * ctx_r0.columns - 1);
} }
function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-arrows", 18);
    ɵngcc0.ɵɵlistener("onPrevClick", function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onPrevClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.moveLeft(); })("onNextClick", function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onNextClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.moveRight(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("prevDisabled", !ctx_r1.canMoveLeft())("nextDisabled", !ctx_r1.canMoveRight())("arrowPrevIcon", ctx_r1.arrowPrevIcon)("arrowNextIcon", ctx_r1.arrowNextIcon);
} }
export class NgxGalleryThumbnailsComponent {
    constructor(sanitization, elementRef, helperService) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.minStopIndex = 0;
        this.onActiveChange = new EventEmitter();
        this.index = 0;
    }
    ngOnChanges(changes) {
        if (changes['selectedIndex']) {
            this.validateIndex();
        }
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'thumbnails', () => this.moveRight(), () => this.moveLeft());
        }
        if (this.images) {
            this.remainingCountValue = this.images.length - (this.rows * this.columns);
        }
    }
    onMouseEnter() {
        this.mouseenter = true;
    }
    onMouseLeave() {
        this.mouseenter = false;
    }
    reset(index) {
        this.selectedIndex = index;
        this.setDefaultPosition();
        this.index = 0;
        this.validateIndex();
    }
    getImages() {
        if (!this.images) {
            return [];
        }
        if (this.remainingCount) {
            return this.images.slice(0, this.rows * this.columns);
        }
        else if (this.lazyLoading && this.order != NgxGalleryOrder.Row) {
            let stopIndex = 0;
            if (this.order === NgxGalleryOrder.Column) {
                stopIndex = (this.index + this.columns + this.moveSize) * this.rows;
            }
            else if (this.order === NgxGalleryOrder.Page) {
                stopIndex = this.index + ((this.columns * this.rows) * 2);
            }
            if (stopIndex <= this.minStopIndex) {
                stopIndex = this.minStopIndex;
            }
            else {
                this.minStopIndex = stopIndex;
            }
            return this.images.slice(0, stopIndex);
        }
        else {
            return this.images;
        }
    }
    handleClick(event, index) {
        if (!this.hasLink(index)) {
            this.selectedIndex = index;
            this.onActiveChange.emit(index);
            event.stopPropagation();
            event.preventDefault();
        }
    }
    hasLink(index) {
        if (this.links && this.links.length && this.links[index])
            return true;
    }
    moveRight() {
        if (this.canMoveRight()) {
            this.index += this.moveSize;
            let maxIndex = this.getMaxIndex() - this.columns;
            if (this.index > maxIndex) {
                this.index = maxIndex;
            }
            this.setThumbnailsPosition();
        }
    }
    moveLeft() {
        if (this.canMoveLeft()) {
            this.index -= this.moveSize;
            if (this.index < 0) {
                this.index = 0;
            }
            this.setThumbnailsPosition();
        }
    }
    canMoveRight() {
        return this.index + this.columns < this.getMaxIndex() ? true : false;
    }
    canMoveLeft() {
        return this.index !== 0 ? true : false;
    }
    getThumbnailLeft(index) {
        let calculatedIndex;
        if (this.order === NgxGalleryOrder.Column) {
            calculatedIndex = Math.floor(index / this.rows);
        }
        else if (this.order === NgxGalleryOrder.Page) {
            calculatedIndex = (index % this.columns) + (Math.floor(index / (this.rows * this.columns)) * this.columns);
        }
        else if (this.order == NgxGalleryOrder.Row && this.remainingCount) {
            calculatedIndex = index % this.columns;
        }
        else {
            calculatedIndex = index % Math.ceil(this.images.length / this.rows);
        }
        return this.getThumbnailPosition(calculatedIndex, this.columns);
    }
    getThumbnailTop(index) {
        let calculatedIndex;
        if (this.order === NgxGalleryOrder.Column) {
            calculatedIndex = index % this.rows;
        }
        else if (this.order === NgxGalleryOrder.Page) {
            calculatedIndex = Math.floor(index / this.columns) - (Math.floor(index / (this.rows * this.columns)) * this.rows);
        }
        else if (this.order == NgxGalleryOrder.Row && this.remainingCount) {
            calculatedIndex = Math.floor(index / this.columns);
        }
        else {
            calculatedIndex = Math.floor(index / Math.ceil(this.images.length / this.rows));
        }
        return this.getThumbnailPosition(calculatedIndex, this.rows);
    }
    getThumbnailWidth() {
        return this.getThumbnailDimension(this.columns);
    }
    getThumbnailHeight() {
        return this.getThumbnailDimension(this.rows);
    }
    setThumbnailsPosition() {
        this.thumbnailsLeft = -((100 / this.columns) * this.index) + '%';
        this.thumbnailsMarginLeft = -((this.margin - (((this.columns - 1)
            * this.margin) / this.columns)) * this.index) + 'px';
    }
    setDefaultPosition() {
        this.thumbnailsLeft = '0px';
        this.thumbnailsMarginLeft = '0px';
    }
    canShowArrows() {
        if (this.remainingCount) {
            return false;
        }
        else if (this.arrows && this.images && this.images.length > this.getVisibleCount()
            && (!this.arrowsAutoHide || this.mouseenter)) {
            return true;
        }
        else {
            return false;
        }
    }
    validateIndex() {
        if (this.images) {
            let newIndex;
            if (this.order === NgxGalleryOrder.Column) {
                newIndex = Math.floor(this.selectedIndex / this.rows);
            }
            else {
                newIndex = this.selectedIndex % Math.ceil(this.images.length / this.rows);
            }
            if (this.remainingCount) {
                newIndex = 0;
            }
            if (newIndex < this.index || newIndex >= this.index + this.columns) {
                const maxIndex = this.getMaxIndex() - this.columns;
                this.index = newIndex > maxIndex ? maxIndex : newIndex;
                this.setThumbnailsPosition();
            }
        }
    }
    getSafeUrl(image) {
        return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
    }
    getThumbnailPosition(index, count) {
        return this.getSafeStyle('calc(' + ((100 / count) * index) + '% + '
            + ((this.margin - (((count - 1) * this.margin) / count)) * index) + 'px)');
    }
    getThumbnailDimension(count) {
        if (this.margin !== 0) {
            return this.getSafeStyle('calc(' + (100 / count) + '% - '
                + (((count - 1) * this.margin) / count) + 'px)');
        }
        else {
            return this.getSafeStyle('calc(' + (100 / count) + '% + 1px)');
        }
    }
    getMaxIndex() {
        if (this.order == NgxGalleryOrder.Page) {
            let maxIndex = (Math.floor(this.images.length / this.getVisibleCount()) * this.columns);
            if (this.images.length % this.getVisibleCount() > this.columns) {
                maxIndex += this.columns;
            }
            else {
                maxIndex += this.images.length % this.getVisibleCount();
            }
            return maxIndex;
        }
        else {
            return Math.ceil(this.images.length / this.rows);
        }
    }
    getVisibleCount() {
        return this.columns * this.rows;
    }
    getSafeStyle(value) {
        return this.sanitization.bypassSecurityTrustStyle(value);
    }
    getFileType(fileSource) {
        return this.helperService.getFileType(fileSource);
    }
}
NgxGalleryThumbnailsComponent.ɵfac = function NgxGalleryThumbnailsComponent_Factory(t) { return new (t || NgxGalleryThumbnailsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NgxGalleryHelperService)); };
NgxGalleryThumbnailsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryThumbnailsComponent, selectors: [["ngx-gallery-thumbnails"]], hostBindings: function NgxGalleryThumbnailsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function NgxGalleryThumbnailsComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function NgxGalleryThumbnailsComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { selectedIndex: "selectedIndex", images: "images", links: "links", labels: "labels", linkTarget: "linkTarget", columns: "columns", rows: "rows", arrows: "arrows", arrowsAutoHide: "arrowsAutoHide", margin: "margin", clickable: "clickable", swipe: "swipe", size: "size", arrowPrevIcon: "arrowPrevIcon", arrowNextIcon: "arrowNextIcon", moveSize: "moveSize", order: "order", remainingCount: "remainingCount", lazyLoading: "lazyLoading", actions: "actions" }, outputs: { onActiveChange: "onActiveChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 4, vars: 9, consts: [[1, "ngx-gallery-thumbnails"], [4, "ngFor", "ngForOf"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick", 4, "ngIf"], [1, "ngx-gallery-thumbnail", 3, "href", "target", "ngClass", "click"], ["class", "ngx-gallery-thumbnail", "style", "width: 100% !important; height: 100% !important; position:absolute !important;", 3, "background-image", "ngClass", 4, "ngIf"], ["class", "videoWrapperMain", 4, "ngIf"], [1, "ngx-gallery-icons-wrapper"], [3, "icon", "disabled", "titleText", "onClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-remaining-count-overlay", 4, "ngIf"], [1, "ngx-gallery-thumbnail", 2, "width", "100% !important", "height", "100% !important", "position", "absolute !important", 3, "ngClass"], [1, "videoWrapperMain"], ["class", "ngx-gallery-thumbnail", "style", "width: 100% !important; height: 100% !important; position:absolute !important;background-color:#907b90b3 !important;", 3, "ngClass", 4, "ngIf"], [1, "videoPlayThumbnail"], [1, "ngx-gallery-thumbnail", 2, "width", "100% !important", "height", "100% !important", "position", "absolute !important", "background-color", "#907b90b3 !important", 3, "ngClass"], [3, "src"], [3, "icon", "disabled", "titleText", "onClick"], [1, "ngx-gallery-remaining-count-overlay"], [1, "ngx-gallery-remaining-count"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick"]], template: function NgxGalleryThumbnailsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵtemplate(2, NgxGalleryThumbnailsComponent_div_2_Template, 7, 19, "div", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template, 1, 4, "ngx-gallery-arrows", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-", ctx.size, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("transform", "translateX(" + ctx.thumbnailsLeft + ")")("margin-left", ctx.thumbnailsMarginLeft);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.getImages());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.canShowArrows());
    } }, directives: [ɵngcc3.NgForOf, ɵngcc3.NgIf, ɵngcc3.NgClass, ɵngcc4.NgxGalleryActionComponent, ɵngcc5.NgxGalleryArrowsComponent], styles: ["[_nghost-%COMP%]{display:inline-block;position:relative;width:100%}.ngx-gallery-thumbnails-wrapper[_ngcontent-%COMP%]{height:100%;overflow:hidden;position:absolute;width:100%}.ngx-gallery-thumbnails[_ngcontent-%COMP%]{height:100%;left:0;position:absolute;transform:translateX(0);transition:transform .5s ease-in-out;width:100%;will-change:transform}.ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;height:100%;position:absolute;text-decoration:none}.ngx-gallery-thumbnail-size-cover[_ngcontent-%COMP%]   .ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{background-size:cover}.ngx-gallery-thumbnail-size-contain[_ngcontent-%COMP%]   .ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{background-size:contain}.ngx-gallery-remaining-count-overlay[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.4);height:100%;left:0;position:absolute;top:0;width:100%}.ngx-gallery-remaining-count[_ngcontent-%COMP%]{color:#fff;font-size:30px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.videoWrapperMain[_ngcontent-%COMP%]   .videoPlayThumbnail[_ngcontent-%COMP%]{background-image:url(https://www.myaccelerate.io/images/play-btn.png)!important;background-position:50%!important;background-repeat:no-repeat!important;background-size:cover!important;bottom:0!important;height:32%!important;left:0!important;margin:auto!important;position:absolute!important;right:0!important;top:0!important;width:20%!important}.videoWrapperMain[_ngcontent-%COMP%]   .selectedVideoBorder[_ngcontent-%COMP%]{border:1px solid #a8579a!important}.selectedImageBorder[_ngcontent-%COMP%]{border:3px solid #a8579a!important}"] });
NgxGalleryThumbnailsComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: ElementRef },
    { type: NgxGalleryHelperService }
];
NgxGalleryThumbnailsComponent.propDecorators = {
    images: [{ type: Input }],
    links: [{ type: Input }],
    labels: [{ type: Input }],
    linkTarget: [{ type: Input }],
    columns: [{ type: Input }],
    rows: [{ type: Input }],
    arrows: [{ type: Input }],
    arrowsAutoHide: [{ type: Input }],
    margin: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    clickable: [{ type: Input }],
    swipe: [{ type: Input }],
    size: [{ type: Input }],
    arrowPrevIcon: [{ type: Input }],
    arrowNextIcon: [{ type: Input }],
    moveSize: [{ type: Input }],
    order: [{ type: Input }],
    remainingCount: [{ type: Input }],
    lazyLoading: [{ type: Input }],
    actions: [{ type: Input }],
    onActiveChange: [{ type: Output }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryThumbnailsComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-gallery-thumbnails',
                template: "<div class=\"ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-{{size}}\">\n  <div class=\"ngx-gallery-thumbnails\" [style.transform]=\"'translateX(' + thumbnailsLeft + ')'\"\n    [style.marginLeft]=\"thumbnailsMarginLeft\">\n    <div *ngFor=\"let image of getImages(); let i = index;\">\n      <a [href]=\"hasLink(i) ? links[i] : '#'\" [target]=\"linkTarget\" class=\"ngx-gallery-thumbnail\"\n        [style.width]=\"getThumbnailWidth()\" (click)=\"handleClick($event, i)\" [style.height]=\"getThumbnailHeight()\"\n        [style.left]=\"getThumbnailLeft(i)\" [style.top]=\"getThumbnailTop(i)\"\n        [ngClass]=\"{ 'ngx-gallery-active selectedImageBorder': i == selectedIndex, 'ngx-gallery-clickable': clickable }\"\n        [attr.aria-label]=\"labels[i]\">\n        <div *ngIf=\"getFileType(image) == 'image'\" [style.background-image]=\"getSafeUrl(image)\"\n          class=\"ngx-gallery-thumbnail\"\n          [ngClass]=\"{ 'ngx-gallery-active': i == selectedIndex, 'ngx-gallery-clickable': clickable }\"\n          style=\"width: 100% !important; height: 100% !important; position:absolute !important;\"></div>\n        <div *ngIf=\"getFileType(image) == 'video'\" class=\"videoWrapperMain\">\n          <video *ngIf=\"getFileType(image) == 'video'\" class=\"ngx-gallery-thumbnail\"\n            [ngClass]=\"{ 'ngx-gallery-active selectedVideoBorder': i == selectedIndex, 'ngx-gallery-clickable': clickable }\"\n            style=\"width: 100% !important; height: 100% !important; position:absolute !important;background-color:#907b90b3 !important;\">\n            <source [src]=\"image\">\n            Your browser does not support the video tag.\n          </video>\n          <div class=\"videoPlayThumbnail\"></div>\n        </div>\n        <div class=\"ngx-gallery-icons-wrapper\">\n          <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\"\n            [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, i)\"></ngx-gallery-action>\n        </div>\n        <div class=\"ngx-gallery-remaining-count-overlay\"\n          *ngIf=\"remainingCount && remainingCountValue && (i == (rows * columns) - 1)\">\n          <span class=\"ngx-gallery-remaining-count\">+{{remainingCountValue}}</span>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n<ngx-gallery-arrows *ngIf=\"canShowArrows()\" (onPrevClick)=\"moveLeft()\" (onNextClick)=\"moveRight()\"\n  [prevDisabled]=\"!canMoveLeft()\" [nextDisabled]=\"!canMoveRight()\" [arrowPrevIcon]=\"arrowPrevIcon\"\n  [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n",
                styles: [":host{display:inline-block;position:relative;width:100%}.ngx-gallery-thumbnails-wrapper{height:100%;overflow:hidden;position:absolute;width:100%}.ngx-gallery-thumbnails{height:100%;left:0;position:absolute;transform:translateX(0);transition:transform .5s ease-in-out;width:100%;will-change:transform}.ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-position:50%;background-repeat:no-repeat;height:100%;position:absolute;text-decoration:none}.ngx-gallery-thumbnail-size-cover .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:cover}.ngx-gallery-thumbnail-size-contain .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:contain}.ngx-gallery-remaining-count-overlay{background-color:rgba(0,0,0,.4);height:100%;left:0;position:absolute;top:0;width:100%}.ngx-gallery-remaining-count{color:#fff;font-size:30px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.videoWrapperMain .videoPlayThumbnail{background-image:url(https://www.myaccelerate.io/images/play-btn.png)!important;background-position:50%!important;background-repeat:no-repeat!important;background-size:cover!important;bottom:0!important;height:32%!important;left:0!important;margin:auto!important;position:absolute!important;right:0!important;top:0!important;width:20%!important}.videoWrapperMain .selectedVideoBorder{border:1px solid #a8579a!important}.selectedImageBorder{border:3px solid #a8579a!important}"]
            }]
    }], function () { return [{ type: ɵngcc1.DomSanitizer }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.NgxGalleryHelperService }]; }, { onActiveChange: [{
            type: Output
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
        }], links: [{
            type: Input
        }], labels: [{
            type: Input
        }], linkTarget: [{
            type: Input
        }], columns: [{
            type: Input
        }], rows: [{
            type: Input
        }], arrows: [{
            type: Input
        }], arrowsAutoHide: [{
            type: Input
        }], margin: [{
            type: Input
        }], clickable: [{
            type: Input
        }], swipe: [{
            type: Input
        }], size: [{
            type: Input
        }], arrowPrevIcon: [{
            type: Input
        }], arrowNextIcon: [{
            type: Input
        }], moveSize: [{
            type: Input
        }], order: [{
            type: Input
        }], remainingCount: [{
            type: Input
        }], lazyLoading: [{
            type: Input
        }], actions: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktdGh1bWJuYWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL25neC1nYWxsZXJ5L3NyYy9saWIvbmd4LWdhbGxlcnktdGh1bWJuYWlscy9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBaUIsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNILE9BQU8sRUFBbUIsWUFBWSxFQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFFckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0QsTUFBTSxPQUFPLDZCQUE2QjtBQUFHLElBa0N6QyxZQUFvQixZQUEwQixFQUFVLFVBQXNCLEVBQ2xFLGFBQXNDO0FBQUksUUFEbEMsaUJBQVksR0FBWixZQUFZLENBQWM7QUFBQyxRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQUNuRSxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7QUFBQyxRQTVCbkQsaUJBQVksR0FBRyxDQUFDLENBQUM7QUFDckIsUUFzQmMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ2xELFFBQ1ksVUFBSyxHQUFHLENBQUMsQ0FBQztBQUN0QixJQUUwRCxDQUFDO0FBQzNELElBQ0ksV0FBVyxDQUFDLE9BQXNCO0FBQUksUUFDbEMsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7QUFDdEMsWUFBWSxJQUFJLENBQUMsYUFB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QztBQUNMLElBQ1ksWUFBWSxDQUFDLEtBQWE7QUFBSSxRQUNsQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakUsSUFBSSxDQUFDO0FBQ0wsSUFDSSxXQUFXLENBQUMsVUFBa0I7QUFBSSxRQUM5QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFELElBQUksQ0FBQztBQUNMO3lEQWxTQyxTQUFTLFNBQUMsa0JBQ1AsUUFBUSxFQUFFLHdCQUF3QixrQkFDbEM7OztpOERBQXNEOzs7Ozs7Ozs7Ozs7Ozs7Z2hCQUV6RCw2MkNBQ0k7QUFBQztBQUF1RCxZQVZuQyxZQUFZO0FBQUksWUFEa0IsVUFBVTtBQUFJLFlBR2pFLHVCQUF1QjtBQUFHO0FBQUc7QUFDeEIscUJBZ0JULEtBQUs7QUFBSyxvQkFDVixLQUFLO0FBQUsscUJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssbUJBQ1YsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSyw2QkFDVixLQUFLO0FBQUsscUJBQ1YsS0FBSztBQUFLLDRCQUNWLEtBQUs7QUFBSyx3QkFDVixLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFLLG1CQUNWLEtBQUs7QUFBSyw0QkFDVixLQUFLO0FBQUssNEJBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSyxvQkFDVixLQUFLO0FBQUssNkJBQ1YsS0FBSztBQUFLLDBCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssNkJBRVYsTUFBTTtBQUFLLDJCQXNCWCxZQUFZLFNBQUMsWUFBWTtBQUFPLDJCQUloQyxZQUFZLFNBQUMsWUFBWTtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkNoYW5nZXMsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgU2ltcGxlQ2hhbmdlcywgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlUmVzb3VyY2VVcmwsIERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ3hHYWxsZXJ5QWN0aW9uIH0gZnJvbSAnLi4vbmd4LWdhbGxlcnktYWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IE5neEdhbGxlcnlIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbmd4LWdhbGxlcnktaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeU9yZGVyIH0gZnJvbSAnLi4vbmd4LWdhbGxlcnktb3JkZXIubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1nYWxsZXJ5LXRodW1ibmFpbHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgdGh1bWJuYWlsc0xlZnQ6IHN0cmluZztcbiAgICB0aHVtYm5haWxzTWFyZ2luTGVmdDogc3RyaW5nO1xuICAgIG1vdXNlZW50ZXI6IGJvb2xlYW47XG4gICAgcmVtYWluaW5nQ291bnRWYWx1ZTogbnVtYmVyO1xuXG4gICAgbWluU3RvcEluZGV4ID0gMDtcblxuICAgIEBJbnB1dCgpIGltYWdlczogc3RyaW5nW10gfCBTYWZlUmVzb3VyY2VVcmxbXTtcbiAgICBASW5wdXQoKSBsaW5rczogc3RyaW5nW107XG4gICAgQElucHV0KCkgbGFiZWxzOiBzdHJpbmdbXTtcbiAgICBASW5wdXQoKSBsaW5rVGFyZ2V0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29sdW1uczogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHJvd3M6IG51bWJlcjtcbiAgICBASW5wdXQoKSBhcnJvd3M6IGJvb2xlYW47XG4gICAgQElucHV0KCkgYXJyb3dzQXV0b0hpZGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgbWFyZ2luOiBudW1iZXI7XG4gICAgQElucHV0KCkgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIGNsaWNrYWJsZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzd2lwZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYXJyb3dQcmV2SWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGFycm93TmV4dEljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBtb3ZlU2l6ZTogbnVtYmVyO1xuICAgIEBJbnB1dCgpIG9yZGVyOiBudW1iZXI7XG4gICAgQElucHV0KCkgcmVtYWluaW5nQ291bnQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgbGF6eUxvYWRpbmc6IGJvb2xlYW47XG4gICAgQElucHV0KCkgYWN0aW9uczogTmd4R2FsbGVyeUFjdGlvbltdO1xuXG4gICAgQE91dHB1dCgpIG9uQWN0aXZlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHJpdmF0ZSBpbmRleCA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXphdGlvbjogRG9tU2FuaXRpemVyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgaGVscGVyU2VydmljZTogTmd4R2FsbGVyeUhlbHBlclNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAoY2hhbmdlc1snc2VsZWN0ZWRJbmRleCddKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5kZXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzWydzd2lwZSddKSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBlclNlcnZpY2UubWFuYWdlU3dpcGUodGhpcy5zd2lwZSwgdGhpcy5lbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgICd0aHVtYm5haWxzJywgKCkgPT4gdGhpcy5tb3ZlUmlnaHQoKSwgKCkgPT4gdGhpcy5tb3ZlTGVmdCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdDb3VudFZhbHVlID0gdGhpcy5pbWFnZXMubGVuZ3RoIC0gKHRoaXMucm93cyAqIHRoaXMuY29sdW1ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJykgb25Nb3VzZUVudGVyKCkge1xuICAgICAgICB0aGlzLm1vdXNlZW50ZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKSBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICAgIHRoaXMubW91c2VlbnRlciA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlc2V0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFBvc2l0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMudmFsaWRhdGVJbmRleCgpO1xuICAgIH1cblxuICAgIGdldEltYWdlcygpOiBzdHJpbmdbXSB8IFNhZmVSZXNvdXJjZVVybFtdIHtcbiAgICAgICAgaWYgKCF0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucmVtYWluaW5nQ291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlcy5zbGljZSgwLCB0aGlzLnJvd3MgKiB0aGlzLmNvbHVtbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubGF6eUxvYWRpbmcgJiYgdGhpcy5vcmRlciAhPSBOZ3hHYWxsZXJ5T3JkZXIuUm93KSB7XG4gICAgICAgICAgICBsZXQgc3RvcEluZGV4ID0gMDtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3JkZXIgPT09IE5neEdhbGxlcnlPcmRlci5Db2x1bW4pIHtcbiAgICAgICAgICAgICAgICBzdG9wSW5kZXggPSAodGhpcy5pbmRleCArIHRoaXMuY29sdW1ucyArIHRoaXMubW92ZVNpemUpICogdGhpcy5yb3dzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5vcmRlciA9PT0gTmd4R2FsbGVyeU9yZGVyLlBhZ2UpIHtcbiAgICAgICAgICAgICAgICBzdG9wSW5kZXggPSB0aGlzLmluZGV4ICsgKCh0aGlzLmNvbHVtbnMgKiB0aGlzLnJvd3MpICogMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdG9wSW5kZXggPD0gdGhpcy5taW5TdG9wSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzdG9wSW5kZXggPSB0aGlzLm1pblN0b3BJbmRleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taW5TdG9wSW5kZXggPSBzdG9wSW5kZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlcy5zbGljZSgwLCBzdG9wSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soZXZlbnQ6IEV2ZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5oYXNMaW5rKGluZGV4KSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB0aGlzLm9uQWN0aXZlQ2hhbmdlLmVtaXQoaW5kZXgpO1xuXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNMaW5rKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMubGlua3MgJiYgdGhpcy5saW5rcy5sZW5ndGggJiYgdGhpcy5saW5rc1tpbmRleF0pIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIG1vdmVSaWdodCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuTW92ZVJpZ2h0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gdGhpcy5tb3ZlU2l6ZTtcbiAgICAgICAgICAgIGxldCBtYXhJbmRleCA9IHRoaXMuZ2V0TWF4SW5kZXgoKSAtIHRoaXMuY29sdW1ucztcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPiBtYXhJbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBtYXhJbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRUaHVtYm5haWxzUG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVMZWZ0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jYW5Nb3ZlTGVmdCgpKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4IC09IHRoaXMubW92ZVNpemU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFRodW1ibmFpbHNQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuTW92ZVJpZ2h0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCArIHRoaXMuY29sdW1ucyA8IHRoaXMuZ2V0TWF4SW5kZXgoKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBjYW5Nb3ZlTGVmdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXggIT09IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0VGh1bWJuYWlsTGVmdChpbmRleDogbnVtYmVyKTogU2FmZVN0eWxlIHtcbiAgICAgICAgbGV0IGNhbGN1bGF0ZWRJbmRleDtcblxuICAgICAgICBpZiAodGhpcy5vcmRlciA9PT0gTmd4R2FsbGVyeU9yZGVyLkNvbHVtbikge1xuICAgICAgICAgICAgY2FsY3VsYXRlZEluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMucm93cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5vcmRlciA9PT0gTmd4R2FsbGVyeU9yZGVyLlBhZ2UpIHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZWRJbmRleCA9IChpbmRleCAlIHRoaXMuY29sdW1ucykgKyAoTWF0aC5mbG9vcihpbmRleCAvICh0aGlzLnJvd3MgKiB0aGlzLmNvbHVtbnMpKSAqIHRoaXMuY29sdW1ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5vcmRlciA9PSBOZ3hHYWxsZXJ5T3JkZXIuUm93ICYmIHRoaXMucmVtYWluaW5nQ291bnQpIHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZWRJbmRleCA9IGluZGV4ICUgdGhpcy5jb2x1bW5zO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsY3VsYXRlZEluZGV4ID0gaW5kZXggJSBNYXRoLmNlaWwodGhpcy5pbWFnZXMubGVuZ3RoIC8gdGhpcy5yb3dzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRodW1ibmFpbFBvc2l0aW9uKGNhbGN1bGF0ZWRJbmRleCwgdGhpcy5jb2x1bW5zKTtcbiAgICB9XG5cbiAgICBnZXRUaHVtYm5haWxUb3AoaW5kZXg6IG51bWJlcik6IFNhZmVTdHlsZSB7XG4gICAgICAgIGxldCBjYWxjdWxhdGVkSW5kZXg7XG5cbiAgICAgICAgaWYgKHRoaXMub3JkZXIgPT09IE5neEdhbGxlcnlPcmRlci5Db2x1bW4pIHtcbiAgICAgICAgICAgIGNhbGN1bGF0ZWRJbmRleCA9IGluZGV4ICUgdGhpcy5yb3dzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3JkZXIgPT09IE5neEdhbGxlcnlPcmRlci5QYWdlKSB7XG4gICAgICAgICAgICBjYWxjdWxhdGVkSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5jb2x1bW5zKSAtIChNYXRoLmZsb29yKGluZGV4IC8gKHRoaXMucm93cyAqIHRoaXMuY29sdW1ucykpICogdGhpcy5yb3dzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm9yZGVyID09IE5neEdhbGxlcnlPcmRlci5Sb3cgJiYgdGhpcy5yZW1haW5pbmdDb3VudCkge1xuICAgICAgICAgICAgY2FsY3VsYXRlZEluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMuY29sdW1ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxjdWxhdGVkSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gTWF0aC5jZWlsKHRoaXMuaW1hZ2VzLmxlbmd0aCAvIHRoaXMucm93cykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGh1bWJuYWlsUG9zaXRpb24oY2FsY3VsYXRlZEluZGV4LCB0aGlzLnJvd3MpO1xuICAgIH1cblxuICAgIGdldFRodW1ibmFpbFdpZHRoKCk6IFNhZmVTdHlsZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRodW1ibmFpbERpbWVuc2lvbih0aGlzLmNvbHVtbnMpO1xuICAgIH1cblxuICAgIGdldFRodW1ibmFpbEhlaWdodCgpOiBTYWZlU3R5bGUge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUaHVtYm5haWxEaW1lbnNpb24odGhpcy5yb3dzKTtcbiAgICB9XG5cbiAgICBzZXRUaHVtYm5haWxzUG9zaXRpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGh1bWJuYWlsc0xlZnQgPSAtICgoMTAwIC8gdGhpcy5jb2x1bW5zKSAqIHRoaXMuaW5kZXgpICsgJyUnXG5cbiAgICAgICAgdGhpcy50aHVtYm5haWxzTWFyZ2luTGVmdCA9IC0gKCh0aGlzLm1hcmdpbiAtICgoKHRoaXMuY29sdW1ucyAtIDEpXG4gICAgICAgICAgICAqIHRoaXMubWFyZ2luKSAvIHRoaXMuY29sdW1ucykpICogdGhpcy5pbmRleCkgKyAncHgnO1xuICAgIH1cblxuICAgIHNldERlZmF1bHRQb3NpdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aHVtYm5haWxzTGVmdCA9ICcwcHgnO1xuICAgICAgICB0aGlzLnRodW1ibmFpbHNNYXJnaW5MZWZ0ID0gJzBweCc7XG4gICAgfVxuXG4gICAgY2FuU2hvd0Fycm93cygpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMucmVtYWluaW5nQ291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFycm93cyAmJiB0aGlzLmltYWdlcyAmJiB0aGlzLmltYWdlcy5sZW5ndGggPiB0aGlzLmdldFZpc2libGVDb3VudCgpXG4gICAgICAgICAgICAmJiAoIXRoaXMuYXJyb3dzQXV0b0hpZGUgfHwgdGhpcy5tb3VzZWVudGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZUluZGV4KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgICAgICAgIGxldCBuZXdJbmRleDtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3JkZXIgPT09IE5neEdhbGxlcnlPcmRlci5Db2x1bW4pIHtcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA9IE1hdGguZmxvb3IodGhpcy5zZWxlY3RlZEluZGV4IC8gdGhpcy5yb3dzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXggJSBNYXRoLmNlaWwodGhpcy5pbWFnZXMubGVuZ3RoIC8gdGhpcy5yb3dzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucmVtYWluaW5nQ291bnQpIHtcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA8IHRoaXMuaW5kZXggfHwgbmV3SW5kZXggPj0gdGhpcy5pbmRleCArIHRoaXMuY29sdW1ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heEluZGV4ID0gdGhpcy5nZXRNYXhJbmRleCgpIC0gdGhpcy5jb2x1bW5zO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleCA+IG1heEluZGV4ID8gbWF4SW5kZXggOiBuZXdJbmRleDtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VGh1bWJuYWlsc1Bvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTYWZlVXJsKGltYWdlOiBzdHJpbmcpOiBTYWZlU3R5bGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6YXRpb24uYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHRoaXMuaGVscGVyU2VydmljZS5nZXRCYWNrZ3JvdW5kVXJsKGltYWdlKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRUaHVtYm5haWxQb3NpdGlvbihpbmRleDogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogU2FmZVN0eWxlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2FmZVN0eWxlKCdjYWxjKCcgKyAoKDEwMCAvIGNvdW50KSAqIGluZGV4KSArICclICsgJ1xuICAgICAgICAgICAgKyAoKHRoaXMubWFyZ2luIC0gKCgoY291bnQgLSAxKSAqIHRoaXMubWFyZ2luKSAvIGNvdW50KSkgKiBpbmRleCkgKyAncHgpJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRUaHVtYm5haWxEaW1lbnNpb24oY291bnQ6IG51bWJlcik6IFNhZmVTdHlsZSB7XG4gICAgICAgIGlmICh0aGlzLm1hcmdpbiAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2FmZVN0eWxlKCdjYWxjKCcgKyAoMTAwIC8gY291bnQpICsgJyUgLSAnXG4gICAgICAgICAgICAgICAgKyAoKChjb3VudCAtIDEpICogdGhpcy5tYXJnaW4pIC8gY291bnQpICsgJ3B4KScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2FmZVN0eWxlKCdjYWxjKCcgKyAoMTAwIC8gY291bnQpICsgJyUgKyAxcHgpJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE1heEluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLm9yZGVyID09IE5neEdhbGxlcnlPcmRlci5QYWdlKSB7XG4gICAgICAgICAgICBsZXQgbWF4SW5kZXggPSAoTWF0aC5mbG9vcih0aGlzLmltYWdlcy5sZW5ndGggLyB0aGlzLmdldFZpc2libGVDb3VudCgpKSAqIHRoaXMuY29sdW1ucyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlcy5sZW5ndGggJSB0aGlzLmdldFZpc2libGVDb3VudCgpID4gdGhpcy5jb2x1bW5zKSB7XG4gICAgICAgICAgICAgICAgbWF4SW5kZXggKz0gdGhpcy5jb2x1bW5zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWF4SW5kZXggKz0gdGhpcy5pbWFnZXMubGVuZ3RoICUgdGhpcy5nZXRWaXNpYmxlQ291bnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1heEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmltYWdlcy5sZW5ndGggLyB0aGlzLnJvd3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRWaXNpYmxlQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1ucyAqIHRoaXMucm93cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFNhZmVTdHlsZSh2YWx1ZTogc3RyaW5nKTogU2FmZVN0eWxlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemF0aW9uLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0RmlsZVR5cGUoZmlsZVNvdXJjZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVscGVyU2VydmljZS5nZXRGaWxlVHlwZShmaWxlU291cmNlKTtcbiAgICB9XG59XG4iXX0=