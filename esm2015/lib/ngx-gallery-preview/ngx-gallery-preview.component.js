import { ChangeDetectorRef, Component, Input, Output, EventEmitter, ElementRef, HostListener, ViewChild, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxGalleryHelperService } from '../ngx-gallery-helper.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
import * as ɵngcc2 from '../ngx-gallery-helper.service';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '../ngx-gallery-action/ngx-gallery-action.component';
import * as ɵngcc5 from '../ngx-gallery-arrows/ngx-gallery-arrows.component';
import * as ɵngcc6 from '../ngx-gallery-bullets/ngx-gallery-bullets.component';

const _c0 = ["previewImage"];
function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-arrows", 16);
    ɵngcc0.ɵɵlistener("onPrevClick", function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template_ngx_gallery_arrows_onPrevClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.showPrev(); })("onNextClick", function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template_ngx_gallery_arrows_onNextClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.showNext(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("prevDisabled", !ctx_r0.canShowPrev())("nextDisabled", !ctx_r0.canShowNext())("arrowPrevIcon", ctx_r0.arrowPrevIcon)("arrowNextIcon", ctx_r0.arrowNextIcon);
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 17);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_3_Template_ngx_gallery_action_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const action_r15 = ctx.$implicit; const ctx_r16 = ɵngcc0.ɵɵnextContext(); return action_r15.onClick($event, ctx_r16.index); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r15 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("icon", action_r15.icon)("disabled", action_r15.disabled)("titleText", action_r15.titleText);
} }
function NgxGalleryPreviewComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 18);
    ɵngcc0.ɵɵelement(1, "i");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("href", ctx_r2.src, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx_r2.downloadIcon, "");
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 19);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_5_Template_ngx_gallery_action_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.zoomOut(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r3.zoomOutIcon)("disabled", !ctx_r3.canZoomOut());
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 19);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_6_Template_ngx_gallery_action_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r21); const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.zoomIn(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r4.zoomInIcon)("disabled", !ctx_r4.canZoomIn());
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_7_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_7_Template_ngx_gallery_action_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.rotateLeft(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r5.rotateLeftIcon);
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_8_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_8_Template_ngx_gallery_action_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r25); const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.rotateRight(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r6.rotateRightIcon);
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_9_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_9_Template_ngx_gallery_action_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r27); const ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.manageFullscreen(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", "ngx-gallery-fullscreen " + ctx_r7.fullscreenIcon);
} }
function NgxGalleryPreviewComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    const _r31 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "img", 20, 21);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryPreviewComponent_img_15_Template_img_click_0_listener($event) { return $event.stopPropagation(); })("mouseenter", function NgxGalleryPreviewComponent_img_15_Template_img_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r31); const ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.imageMouseEnter(); })("mouseleave", function NgxGalleryPreviewComponent_img_15_Template_img_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r31); const ctx_r32 = ɵngcc0.ɵɵnextContext(); return ctx_r32.imageMouseLeave(); })("mousedown", function NgxGalleryPreviewComponent_img_15_Template_img_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r31); const ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.mouseDownHandler($event); })("touchstart", function NgxGalleryPreviewComponent_img_15_Template_img_touchstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r31); const ctx_r34 = ɵngcc0.ɵɵnextContext(); return ctx_r34.mouseDownHandler($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("transform", ctx_r8.getTransform())("left", ctx_r8.positionLeft + "px")("top", ctx_r8.positionTop + "px");
    ɵngcc0.ɵɵclassProp("ngx-gallery-active", !ctx_r8.loading)("animation", ctx_r8.animation)("ngx-gallery-grab", ctx_r8.canDragOnZoom());
    ɵngcc0.ɵɵproperty("src", ctx_r8.src, ɵngcc0.ɵɵsanitizeUrl);
} }
function NgxGalleryPreviewComponent_video_16_Template(rf, ctx) { if (rf & 1) {
    const _r38 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "video", 22, 21);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryPreviewComponent_video_16_Template_video_click_0_listener($event) { return $event.stopPropagation(); })("mouseenter", function NgxGalleryPreviewComponent_video_16_Template_video_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r38); const ctx_r37 = ɵngcc0.ɵɵnextContext(); return ctx_r37.imageMouseEnter(); })("mouseleave", function NgxGalleryPreviewComponent_video_16_Template_video_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r38); const ctx_r39 = ɵngcc0.ɵɵnextContext(); return ctx_r39.imageMouseLeave(); })("mousedown", function NgxGalleryPreviewComponent_video_16_Template_video_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r38); const ctx_r40 = ɵngcc0.ɵɵnextContext(); return ctx_r40.mouseDownHandler($event); })("touchstart", function NgxGalleryPreviewComponent_video_16_Template_video_touchstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r38); const ctx_r41 = ɵngcc0.ɵɵnextContext(); return ctx_r41.mouseDownHandler($event); });
    ɵngcc0.ɵɵelement(2, "source", 23);
    ɵngcc0.ɵɵtext(3, " Your browser does not support the video tag. ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("transform", ctx_r9.getTransform())("left", ctx_r9.positionLeft + "px")("top", ctx_r9.positionTop + "px");
    ɵngcc0.ɵɵclassProp("ngx-gallery-active", !ctx_r9.loading)("animation", ctx_r9.animation)("ngx-gallery-grab", ctx_r9.canDragOnZoom());
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("src", ctx_r9.src, ɵngcc0.ɵɵsanitizeUrl);
} }
function NgxGalleryPreviewComponent_ngx_gallery_bullets_17_Template(rf, ctx) { if (rf & 1) {
    const _r43 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-bullets", 24);
    ɵngcc0.ɵɵlistener("onChange", function NgxGalleryPreviewComponent_ngx_gallery_bullets_17_Template_ngx_gallery_bullets_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r43); const ctx_r42 = ɵngcc0.ɵɵnextContext(); return ctx_r42.showAtIndex($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("count", ctx_r10.images.length)("active", ctx_r10.index);
} }
function NgxGalleryPreviewComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryPreviewComponent_div_18_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r11.description, ɵngcc0.ɵɵsanitizeHtml);
} }
export class NgxGalleryPreviewComponent {
    constructor(sanitization, elementRef, helperService, renderer, changeDetectorRef) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.showSpinner = false;
        this.positionLeft = 0;
        this.positionTop = 0;
        this.zoomValue = 1;
        this.loading = false;
        this.rotateValue = 0;
        this.index = 0;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onActiveChange = new EventEmitter();
        this.isOpen = false;
        this.initialX = 0;
        this.initialY = 0;
        this.initialLeft = 0;
        this.initialTop = 0;
        this.isMove = false;
    }
    ngOnInit() {
        if (this.arrows && this.arrowsAutoHide) {
            this.arrows = false;
        }
    }
    ngOnChanges(changes) {
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'preview', () => this.showNext(), () => this.showPrev());
        }
    }
    ngOnDestroy() {
        if (this.keyDownListener) {
            this.keyDownListener();
        }
    }
    onMouseEnter() {
        if (this.arrowsAutoHide && !this.arrows) {
            this.arrows = true;
        }
    }
    onMouseLeave() {
        if (this.arrowsAutoHide && this.arrows) {
            this.arrows = false;
        }
    }
    onKeyDown(e) {
        if (this.isOpen) {
            if (this.keyboardNavigation) {
                if (this.isKeyboardPrev(e)) {
                    this.showPrev();
                }
                else if (this.isKeyboardNext(e)) {
                    this.showNext();
                }
            }
            if (this.closeOnEsc && this.isKeyboardEsc(e)) {
                this.close();
            }
        }
    }
    open(index) {
        this.onOpen.emit();
        this.index = index;
        this.isOpen = true;
        this.show(true);
        if (this.forceFullscreen) {
            this.manageFullscreen();
        }
        this.keyDownListener = this.renderer.listen("window", "keydown", (e) => this.onKeyDown(e));
    }
    close() {
        this.isOpen = false;
        this.closeFullscreen();
        this.onClose.emit();
        this.stopAutoPlay();
        if (this.keyDownListener) {
            this.keyDownListener();
        }
    }
    imageMouseEnter() {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
        }
    }
    imageMouseLeave() {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
        }
    }
    startAutoPlay() {
        if (this.autoPlay) {
            this.stopAutoPlay();
            this.timer = setTimeout(() => {
                if (!this.showNext()) {
                    this.index = -1;
                    this.showNext();
                }
            }, this.autoPlayInterval);
        }
    }
    stopAutoPlay() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
    showAtIndex(index) {
        this.index = index;
        this.show();
    }
    showNext() {
        if (this.canShowNext()) {
            this.index++;
            if (this.index === this.images.length) {
                this.index = 0;
            }
            this.show();
            return true;
        }
        else {
            return false;
        }
    }
    showPrev() {
        if (this.canShowPrev()) {
            this.index--;
            if (this.index < 0) {
                this.index = this.images.length - 1;
            }
            this.show();
        }
    }
    canShowNext() {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index < this.images.length - 1 ? true : false;
        }
        else {
            return false;
        }
    }
    canShowPrev() {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index > 0 ? true : false;
        }
        else {
            return false;
        }
    }
    manageFullscreen() {
        if (this.fullscreen || this.forceFullscreen) {
            const doc = document;
            if (!doc.fullscreenElement && !doc.mozFullScreenElement
                && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                this.openFullscreen();
            }
            else {
                this.closeFullscreen();
            }
        }
    }
    getSafeUrl(image) {
        return image.substr(0, 10) === 'data:image' ?
            image : this.sanitization.bypassSecurityTrustUrl(image);
    }
    getFileType(fileSource) {
        return this.helperService.getFileType(fileSource);
    }
    zoomIn() {
        if (this.canZoomIn()) {
            this.zoomValue += this.zoomStep;
            if (this.zoomValue > this.zoomMax) {
                this.zoomValue = this.zoomMax;
            }
        }
    }
    zoomOut() {
        if (this.canZoomOut()) {
            this.zoomValue -= this.zoomStep;
            if (this.zoomValue < this.zoomMin) {
                this.zoomValue = this.zoomMin;
            }
            if (this.zoomValue <= 1) {
                this.resetPosition();
            }
        }
    }
    rotateLeft() {
        this.rotateValue -= 90;
    }
    rotateRight() {
        this.rotateValue += 90;
    }
    getTransform() {
        return this.sanitization.bypassSecurityTrustStyle('scale(' + this.zoomValue + ') rotate(' + this.rotateValue + 'deg)');
    }
    canZoomIn() {
        return this.zoomValue < this.zoomMax ? true : false;
    }
    canZoomOut() {
        return this.zoomValue > this.zoomMin ? true : false;
    }
    canDragOnZoom() {
        return this.zoom && this.zoomValue > 1;
    }
    mouseDownHandler(e) {
        if (this.canDragOnZoom()) {
            this.initialX = this.getClientX(e);
            this.initialY = this.getClientY(e);
            this.initialLeft = this.positionLeft;
            this.initialTop = this.positionTop;
            this.isMove = true;
            e.preventDefault();
        }
    }
    mouseUpHandler(e) {
        this.isMove = false;
    }
    mouseMoveHandler(e) {
        if (this.isMove) {
            this.positionLeft = this.initialLeft + (this.getClientX(e) - this.initialX);
            this.positionTop = this.initialTop + (this.getClientY(e) - this.initialY);
        }
    }
    getClientX(e) {
        return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    }
    getClientY(e) {
        return e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
    }
    resetPosition() {
        if (this.zoom) {
            this.positionLeft = 0;
            this.positionTop = 0;
        }
    }
    isKeyboardNext(e) {
        return e.keyCode === 39 ? true : false;
    }
    isKeyboardPrev(e) {
        return e.keyCode === 37 ? true : false;
    }
    isKeyboardEsc(e) {
        return e.keyCode === 27 ? true : false;
    }
    openFullscreen() {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    }
    closeFullscreen() {
        if (this.isFullscreen()) {
            const doc = document;
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            }
            else if (doc.msExitFullscreen) {
                doc.msExitFullscreen();
            }
            else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            }
            else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            }
        }
    }
    isFullscreen() {
        const doc = document;
        return doc.fullscreenElement || doc.webkitFullscreenElement
            || doc.mozFullScreenElement || doc.msFullscreenElement;
    }
    show(first = false) {
        this.loading = true;
        this.stopAutoPlay();
        this.onActiveChange.emit(this.index);
        if (first || !this.animation) {
            this._show();
        }
        else {
            setTimeout(() => this._show(), 600);
        }
    }
    _show() {
        this.zoomValue = 1;
        this.rotateValue = 0;
        this.resetPosition();
        this.src = this.getSafeUrl(this.images[this.index]);
        this.type = this.getFileType(this.images[this.index]);
        this.srcIndex = this.index;
        this.description = this.descriptions[this.index];
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
            if (this.isLoaded(this.previewImage.nativeElement) || this.type == 'video') {
                this.loading = false;
                this.startAutoPlay();
                this.changeDetectorRef.markForCheck();
            }
            else if (this.type == 'video') {
            }
            else {
                setTimeout(() => {
                    if (this.loading) {
                        this.showSpinner = true;
                        this.changeDetectorRef.markForCheck();
                    }
                });
                this.previewImage.nativeElement.onload = () => {
                    this.loading = false;
                    this.showSpinner = false;
                    this.previewImage.nativeElement.onload = null;
                    this.startAutoPlay();
                    this.changeDetectorRef.markForCheck();
                };
            }
        });
    }
    isLoaded(img) {
        if (!img.complete) {
            return false;
        }
        if (typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 0) {
            return false;
        }
        return true;
    }
}
NgxGalleryPreviewComponent.ɵfac = function NgxGalleryPreviewComponent_Factory(t) { return new (t || NgxGalleryPreviewComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NgxGalleryHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NgxGalleryPreviewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryPreviewComponent, selectors: [["ngx-gallery-preview"]], viewQuery: function NgxGalleryPreviewComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.previewImage = _t.first);
    } }, hostBindings: function NgxGalleryPreviewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function NgxGalleryPreviewComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function NgxGalleryPreviewComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { arrows: "arrows", images: "images", descriptions: "descriptions", showDescription: "showDescription", arrowsAutoHide: "arrowsAutoHide", swipe: "swipe", fullscreen: "fullscreen", forceFullscreen: "forceFullscreen", closeOnClick: "closeOnClick", closeOnEsc: "closeOnEsc", keyboardNavigation: "keyboardNavigation", arrowPrevIcon: "arrowPrevIcon", arrowNextIcon: "arrowNextIcon", closeIcon: "closeIcon", fullscreenIcon: "fullscreenIcon", spinnerIcon: "spinnerIcon", autoPlay: "autoPlay", autoPlayInterval: "autoPlayInterval", autoPlayPauseOnHover: "autoPlayPauseOnHover", infinityMove: "infinityMove", zoom: "zoom", zoomStep: "zoomStep", zoomMax: "zoomMax", zoomMin: "zoomMin", zoomInIcon: "zoomInIcon", zoomOutIcon: "zoomOutIcon", animation: "animation", actions: "actions", rotate: "rotate", rotateLeftIcon: "rotateLeftIcon", rotateRightIcon: "rotateRightIcon", download: "download", downloadIcon: "downloadIcon", bullets: "bullets" }, outputs: { onOpen: "onOpen", onClose: "onClose", onActiveChange: "onActiveChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 19, vars: 18, consts: [[3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick", 4, "ngIf"], [1, "ngx-gallery-preview-top"], [1, "ngx-gallery-preview-icons"], [3, "icon", "disabled", "titleText", "onClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-icon", "aria-hidden", "true", "download", "", 3, "href", 4, "ngIf"], [3, "icon", "disabled", "onClick", 4, "ngIf"], [3, "icon", "onClick", 4, "ngIf"], [3, "icon", "onClick"], [1, "ngx-spinner-wrapper", "ngx-gallery-center"], ["aria-hidden", "true"], [1, "ngx-gallery-preview-wrapper", 3, "click", "mouseup", "mousemove", "touchend", "touchmove"], [1, "ngx-gallery-preview-img-wrapper"], ["class", "ngx-gallery-preview-img ngx-gallery-center", 3, "src", "ngx-gallery-active", "animation", "ngx-gallery-grab", "transform", "left", "top", "click", "mouseenter", "mouseleave", "mousedown", "touchstart", 4, "ngIf"], ["controls", "", "style", "width: 100%; height: 100%;", "class", "ngx-gallery-preview-img ngx-gallery-center", 3, "ngx-gallery-active", "animation", "ngx-gallery-grab", "transform", "left", "top", "click", "mouseenter", "mouseleave", "mousedown", "touchstart", 4, "ngIf"], [3, "count", "active", "onChange", 4, "ngIf"], ["class", "ngx-gallery-preview-text", 3, "innerHTML", "click", 4, "ngIf"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "onPrevClick", "onNextClick"], [3, "icon", "disabled", "titleText", "onClick"], ["aria-hidden", "true", "download", "", 1, "ngx-gallery-icon", 3, "href"], [3, "icon", "disabled", "onClick"], [1, "ngx-gallery-preview-img", "ngx-gallery-center", 3, "src", "click", "mouseenter", "mouseleave", "mousedown", "touchstart"], ["previewImage", ""], ["controls", "", 1, "ngx-gallery-preview-img", "ngx-gallery-center", 2, "width", "100%", "height", "100%", 3, "click", "mouseenter", "mouseleave", "mousedown", "touchstart"], [3, "src"], [3, "count", "active", "onChange"], [1, "ngx-gallery-preview-text", 3, "innerHTML", "click"]], template: function NgxGalleryPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template, 1, 4, "ngx-gallery-arrows", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, NgxGalleryPreviewComponent_ngx_gallery_action_3_Template, 1, 3, "ngx-gallery-action", 3);
        ɵngcc0.ɵɵtemplate(4, NgxGalleryPreviewComponent_a_4_Template, 2, 4, "a", 4);
        ɵngcc0.ɵɵtemplate(5, NgxGalleryPreviewComponent_ngx_gallery_action_5_Template, 1, 2, "ngx-gallery-action", 5);
        ɵngcc0.ɵɵtemplate(6, NgxGalleryPreviewComponent_ngx_gallery_action_6_Template, 1, 2, "ngx-gallery-action", 5);
        ɵngcc0.ɵɵtemplate(7, NgxGalleryPreviewComponent_ngx_gallery_action_7_Template, 1, 1, "ngx-gallery-action", 6);
        ɵngcc0.ɵɵtemplate(8, NgxGalleryPreviewComponent_ngx_gallery_action_8_Template, 1, 1, "ngx-gallery-action", 6);
        ɵngcc0.ɵɵtemplate(9, NgxGalleryPreviewComponent_ngx_gallery_action_9_Template, 1, 1, "ngx-gallery-action", 6);
        ɵngcc0.ɵɵelementStart(10, "ngx-gallery-action", 7);
        ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_Template_ngx_gallery_action_onClick_10_listener() { return ctx.close(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "div", 8);
        ɵngcc0.ɵɵelement(12, "i", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "div", 10);
        ɵngcc0.ɵɵlistener("click", function NgxGalleryPreviewComponent_Template_div_click_13_listener() { return ctx.closeOnClick && ctx.close(); })("mouseup", function NgxGalleryPreviewComponent_Template_div_mouseup_13_listener($event) { return ctx.mouseUpHandler($event); })("mousemove", function NgxGalleryPreviewComponent_Template_div_mousemove_13_listener($event) { return ctx.mouseMoveHandler($event); })("touchend", function NgxGalleryPreviewComponent_Template_div_touchend_13_listener($event) { return ctx.mouseUpHandler($event); })("touchmove", function NgxGalleryPreviewComponent_Template_div_touchmove_13_listener($event) { return ctx.mouseMoveHandler($event); });
        ɵngcc0.ɵɵelementStart(14, "div", 11);
        ɵngcc0.ɵɵtemplate(15, NgxGalleryPreviewComponent_img_15_Template, 2, 13, "img", 12);
        ɵngcc0.ɵɵtemplate(16, NgxGalleryPreviewComponent_video_16_Template, 4, 13, "video", 13);
        ɵngcc0.ɵɵtemplate(17, NgxGalleryPreviewComponent_ngx_gallery_bullets_17_Template, 1, 2, "ngx-gallery-bullets", 14);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(18, NgxGalleryPreviewComponent_div_18_Template, 1, 1, "div", 15);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.arrows);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.actions);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.download && ctx.src);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.zoom);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.zoom);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.rotate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.rotate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.fullscreen);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("icon", "ngx-gallery-close " + ctx.closeIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ngx-gallery-active", ctx.showSpinner);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-icon ngx-gallery-spinner ", ctx.spinnerIcon, "");
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.src && ctx.type == "image");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.src && ctx.type == "video");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.bullets);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showDescription && ctx.description);
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgForOf, ɵngcc4.NgxGalleryActionComponent, ɵngcc5.NgxGalleryArrowsComponent, ɵngcc6.NgxGalleryBulletsComponent], styles: [".ngx-gallery-active[_nghost-%COMP%]{background:rgba(0,0,0,.7);display:inline-block;height:100%;left:0;position:fixed;top:0;width:100%;z-index:10000}[_nghost-%COMP%]{display:none}[_nghost-%COMP%]     .ngx-gallery-arrow{font-size:50px}[_nghost-%COMP%]     ngx-gallery-bullets{align-items:center;height:5%;padding:0}.ngx-gallery-preview-img[_ngcontent-%COMP%]{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;max-height:90%;max-width:90%;opacity:0;transition:transform .5s;user-select:none}.ngx-gallery-preview-img.animation[_ngcontent-%COMP%]{transition:opacity .5s linear,transform .5s}.ngx-gallery-preview-img.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab[_ngcontent-%COMP%]{cursor:grab;cursor:-webkit-grab}.ngx-gallery-icon.ngx-gallery-spinner[_ngcontent-%COMP%]{display:inline-block;font-size:50px;left:0}[_nghost-%COMP%]     .ngx-gallery-preview-top{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;position:absolute;user-select:none;width:100%}[_nghost-%COMP%]     .ngx-gallery-preview-icons{float:right}[_nghost-%COMP%]     .ngx-gallery-preview-icons .ngx-gallery-icon{cursor:pointer;font-size:25px;margin-right:10px;margin-top:10px;position:relative;text-decoration:none}[_nghost-%COMP%]     .ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled{cursor:default;opacity:.4}.ngx-spinner-wrapper[_ngcontent-%COMP%]{display:none;height:50px;width:50px}.ngx-spinner-wrapper.ngx-gallery-active[_ngcontent-%COMP%]{display:inline-block}.ngx-gallery-center[_ngcontent-%COMP%]{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.ngx-gallery-preview-text[_ngcontent-%COMP%]{background:rgba(0,0,0,.7);color:#fff;flex:0 1 auto;font-size:16px;padding:10px;text-align:center;width:100%;z-index:10}.ngx-gallery-preview-wrapper[_ngcontent-%COMP%]{display:flex;flex-flow:column;height:100%;width:100%}.ngx-gallery-preview-img-wrapper[_ngcontent-%COMP%]{flex:1 1 auto;position:relative}"] });
NgxGalleryPreviewComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: ElementRef },
    { type: NgxGalleryHelperService },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
NgxGalleryPreviewComponent.propDecorators = {
    images: [{ type: Input }],
    descriptions: [{ type: Input }],
    showDescription: [{ type: Input }],
    arrows: [{ type: Input }],
    arrowsAutoHide: [{ type: Input }],
    swipe: [{ type: Input }],
    fullscreen: [{ type: Input }],
    forceFullscreen: [{ type: Input }],
    closeOnClick: [{ type: Input }],
    closeOnEsc: [{ type: Input }],
    keyboardNavigation: [{ type: Input }],
    arrowPrevIcon: [{ type: Input }],
    arrowNextIcon: [{ type: Input }],
    closeIcon: [{ type: Input }],
    fullscreenIcon: [{ type: Input }],
    spinnerIcon: [{ type: Input }],
    autoPlay: [{ type: Input }],
    autoPlayInterval: [{ type: Input }],
    autoPlayPauseOnHover: [{ type: Input }],
    infinityMove: [{ type: Input }],
    zoom: [{ type: Input }],
    zoomStep: [{ type: Input }],
    zoomMax: [{ type: Input }],
    zoomMin: [{ type: Input }],
    zoomInIcon: [{ type: Input }],
    zoomOutIcon: [{ type: Input }],
    animation: [{ type: Input }],
    actions: [{ type: Input }],
    rotate: [{ type: Input }],
    rotateLeftIcon: [{ type: Input }],
    rotateRightIcon: [{ type: Input }],
    download: [{ type: Input }],
    downloadIcon: [{ type: Input }],
    bullets: [{ type: Input }],
    onOpen: [{ type: Output }],
    onClose: [{ type: Output }],
    onActiveChange: [{ type: Output }],
    previewImage: [{ type: ViewChild, args: ['previewImage',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryPreviewComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-gallery-preview',
                template: "<ngx-gallery-arrows *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n    <div class=\"ngx-gallery-preview-top\">\n        <div class=\"ngx-gallery-preview-icons\">\n            <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, index)\"></ngx-gallery-action>\n            <a *ngIf=\"download && src\" [href]=\"src\" class=\"ngx-gallery-icon\" aria-hidden=\"true\" download>\n                <i class=\"ngx-gallery-icon-content {{ downloadIcon }}\"></i>\n            </a>\n            <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomOutIcon\" [disabled]=\"!canZoomOut()\" (onClick)=\"zoomOut()\"></ngx-gallery-action>\n            <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomInIcon\" [disabled]=\"!canZoomIn()\" (onClick)=\"zoomIn()\"></ngx-gallery-action>\n            <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateLeftIcon\" (onClick)=\"rotateLeft()\"></ngx-gallery-action>\n            <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateRightIcon\" (onClick)=\"rotateRight()\"></ngx-gallery-action>\n            <ngx-gallery-action *ngIf=\"fullscreen\" [icon]=\"'ngx-gallery-fullscreen ' + fullscreenIcon\" (onClick)=\"manageFullscreen()\"></ngx-gallery-action>\n            <ngx-gallery-action [icon]=\"'ngx-gallery-close ' + closeIcon\" (onClick)=\"close()\"></ngx-gallery-action>\n        </div>\n    </div>\n    <div class=\"ngx-spinner-wrapper ngx-gallery-center\" [class.ngx-gallery-active]=\"showSpinner\">\n        <i class=\"ngx-gallery-icon ngx-gallery-spinner {{spinnerIcon}}\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"ngx-gallery-preview-wrapper\" (click)=\"closeOnClick && close()\" (mouseup)=\"mouseUpHandler($event)\" (mousemove)=\"mouseMoveHandler($event)\" (touchend)=\"mouseUpHandler($event)\" (touchmove)=\"mouseMoveHandler($event)\">\n        <div class=\"ngx-gallery-preview-img-wrapper\">\n            <img *ngIf=\"src && type == 'image'\" #previewImage class=\"ngx-gallery-preview-img ngx-gallery-center\" [src]=\"src\" (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\" (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\" [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\" [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\"/>\n            <video *ngIf=\"src && type == 'video'\" #previewImage controls style=\"width: 100%; height: 100%;\" \n                class=\"ngx-gallery-preview-img ngx-gallery-center\"\n                (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\" (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\" \n                [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\" [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\"> \n                <source [src]=\"src\">\n                Your browser does not support the video tag.\n            </video>\n            <ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"index\" (onChange)=\"showAtIndex($event)\"></ngx-gallery-bullets>\n        </div>\n        <div class=\"ngx-gallery-preview-text\" *ngIf=\"showDescription && description\" [innerHTML]=\"description\" (click)=\"$event.stopPropagation()\"></div>\n    </div>",
                styles: [":host(.ngx-gallery-active){background:rgba(0,0,0,.7);display:inline-block;height:100%;left:0;position:fixed;top:0;width:100%;z-index:10000}:host{display:none}:host ::ng-deep .ngx-gallery-arrow{font-size:50px}:host ::ng-deep ngx-gallery-bullets{align-items:center;height:5%;padding:0}.ngx-gallery-preview-img{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;max-height:90%;max-width:90%;opacity:0;transition:transform .5s;user-select:none}.ngx-gallery-preview-img.animation{transition:opacity .5s linear,transform .5s}.ngx-gallery-preview-img.ngx-gallery-active{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab{cursor:grab;cursor:-webkit-grab}.ngx-gallery-icon.ngx-gallery-spinner{display:inline-block;font-size:50px;left:0}:host ::ng-deep .ngx-gallery-preview-top{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;position:absolute;user-select:none;width:100%}:host ::ng-deep .ngx-gallery-preview-icons{float:right}:host ::ng-deep .ngx-gallery-preview-icons .ngx-gallery-icon{cursor:pointer;font-size:25px;margin-right:10px;margin-top:10px;position:relative;text-decoration:none}:host ::ng-deep .ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled{cursor:default;opacity:.4}.ngx-spinner-wrapper{display:none;height:50px;width:50px}.ngx-spinner-wrapper.ngx-gallery-active{display:inline-block}.ngx-gallery-center{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.ngx-gallery-preview-text{background:rgba(0,0,0,.7);color:#fff;flex:0 1 auto;font-size:16px;padding:10px;text-align:center;width:100%;z-index:10}.ngx-gallery-preview-wrapper{display:flex;flex-flow:column;height:100%;width:100%}.ngx-gallery-preview-img-wrapper{flex:1 1 auto;position:relative}"]
            }]
    }], function () { return [{ type: ɵngcc1.DomSanitizer }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.NgxGalleryHelperService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { onOpen: [{
            type: Output
        }], onClose: [{
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
        }], images: [{
            type: Input
        }], descriptions: [{
            type: Input
        }], showDescription: [{
            type: Input
        }], arrowsAutoHide: [{
            type: Input
        }], swipe: [{
            type: Input
        }], fullscreen: [{
            type: Input
        }], forceFullscreen: [{
            type: Input
        }], closeOnClick: [{
            type: Input
        }], closeOnEsc: [{
            type: Input
        }], keyboardNavigation: [{
            type: Input
        }], arrowPrevIcon: [{
            type: Input
        }], arrowNextIcon: [{
            type: Input
        }], closeIcon: [{
            type: Input
        }], fullscreenIcon: [{
            type: Input
        }], spinnerIcon: [{
            type: Input
        }], autoPlay: [{
            type: Input
        }], autoPlayInterval: [{
            type: Input
        }], autoPlayPauseOnHover: [{
            type: Input
        }], infinityMove: [{
            type: Input
        }], zoom: [{
            type: Input
        }], zoomStep: [{
            type: Input
        }], zoomMax: [{
            type: Input
        }], zoomMin: [{
            type: Input
        }], zoomInIcon: [{
            type: Input
        }], zoomOutIcon: [{
            type: Input
        }], animation: [{
            type: Input
        }], actions: [{
            type: Input
        }], rotate: [{
            type: Input
        }], rotateLeftIcon: [{
            type: Input
        }], rotateRightIcon: [{
            type: Input
        }], download: [{
            type: Input
        }], downloadIcon: [{
            type: Input
        }], bullets: [{
            type: Input
        }], previewImage: [{
            type: ViewChild,
            args: ['previewImage']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL25neC1nYWxsZXJ5L3NyYy9saWIvbmd4LWdhbGxlcnktcHJldmlldy9uZ3gtZ2FsbGVyeS1wcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFvQyxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0ssT0FBTyxFQUFtQixZQUFZLEVBQXNCLE1BQU0sMkJBQTJCLENBQUM7QUFHOUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hFLE1BQU0sT0FBTywwQkFBMEI7QUFBRyxJQWlFdEMsWUFBb0IsWUFBMEIsRUFBVSxVQUFzQixFQUNsRSxhQUFzQyxFQUFVLFFBQW1CLEVBQ25FLGlCQUFvQztBQUFJLFFBRmhDLGlCQUFZLEdBQVosWUFBWSxDQUFjO0FBQUMsUUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFDbkUsa0JBQWEsR0FBYixhQUFhLENBQXlCO0FBQUMsUUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFDcEUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtBQUFDLFFBN0RqRCxnQkFBVyxHQUFHLEtBQUssQ0FBQztBQUN4QixRQUFJLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLFFBQUksZ0JBQVcsR0FBRyxDQUFDLENBQUM7QUFDcEIsUUFBSSxjQUFTLEdBQUcsQ0FBQyxD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QUs7QUFBSyx5QkFDVixLQUFLO0FBQUssaUNBQ1YsS0FBSztBQUFLLDRCQUNWLEtBQUs7QUFBSyw0QkFDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLCtCQUNWLEtBQUs7QUFBSyxtQ0FDVixLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLG1CQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFLLHdCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUsscUJBQ1YsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFBSyw4QkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLDJCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUsscUJBRVYsTUFBTTtBQUFLLHNCQUNYLE1BQU07QUFBSyw2QkFDWCxNQUFNO0FBQUssMkJBRVgsU0FBUyxTQUFDLGNBQWM7QUFBTywyQkFtQy9CLFlBQVksU0FBQyxZQUFZO0FBQU8sMkJBTWhDLFlBQVksU0FBQyxZQUFZO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgVmlld0NoaWxkLCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZVJlc291cmNlVXJsLCBEb21TYW5pdGl6ZXIsIFNhZmVVcmwsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBOZ3hHYWxsZXJ5QWN0aW9uIH0gZnJvbSAnLi4vbmd4LWdhbGxlcnktYWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IE5neEdhbGxlcnlIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbmd4LWdhbGxlcnktaGVscGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1nYWxsZXJ5LXByZXZpZXcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ2FsbGVyeS1wcmV2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZ2FsbGVyeS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICBzcmM6IFNhZmVVcmw7XG4gICAgc3JjSW5kZXg6IG51bWJlcjtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBzaG93U3Bpbm5lciA9IGZhbHNlO1xuICAgIHBvc2l0aW9uTGVmdCA9IDA7XG4gICAgcG9zaXRpb25Ub3AgPSAwO1xuICAgIHpvb21WYWx1ZSA9IDE7XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuICAgIHJvdGF0ZVZhbHVlID0gMDtcbiAgICBpbmRleCA9IDA7XG5cbiAgICBASW5wdXQoKSBpbWFnZXM6IHN0cmluZ1tdIHwgU2FmZVJlc291cmNlVXJsW107XG4gICAgQElucHV0KCkgZGVzY3JpcHRpb25zOiBzdHJpbmdbXTtcbiAgICBASW5wdXQoKSBzaG93RGVzY3JpcHRpb246IGJvb2xlYW47XG4gICAgQElucHV0KCkgYXJyb3dzOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGFycm93c0F1dG9IaWRlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHN3aXBlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGZ1bGxzY3JlZW46IGJvb2xlYW47XG4gICAgQElucHV0KCkgZm9yY2VGdWxsc2NyZWVuOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGNsb3NlT25DbGljazogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBjbG9zZU9uRXNjOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGtleWJvYXJkTmF2aWdhdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBhcnJvd1ByZXZJY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYXJyb3dOZXh0SWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNsb3NlSWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZ1bGxzY3JlZW5JY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc3Bpbm5lckljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBhdXRvUGxheTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBhdXRvUGxheUludGVydmFsOiBudW1iZXI7XG4gICAgQElucHV0KCkgYXV0b1BsYXlQYXVzZU9uSG92ZXI6IGJvb2xlYW47XG4gICAgQElucHV0KCkgaW5maW5pdHlNb3ZlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHpvb206IGJvb2xlYW47XG4gICAgQElucHV0KCkgem9vbVN0ZXA6IG51bWJlcjtcbiAgICBASW5wdXQoKSB6b29tTWF4OiBudW1iZXI7XG4gICAgQElucHV0KCkgem9vbU1pbjogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHpvb21Jbkljb246IHN0cmluZztcbiAgICBASW5wdXQoKSB6b29tT3V0SWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGFuaW1hdGlvbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBhY3Rpb25zOiBOZ3hHYWxsZXJ5QWN0aW9uW107XG4gICAgQElucHV0KCkgcm90YXRlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHJvdGF0ZUxlZnRJY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcm90YXRlUmlnaHRJY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZG93bmxvYWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgZG93bmxvYWRJY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYnVsbGV0czogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgb25BY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ3ByZXZpZXdJbWFnZScpIHByZXZpZXdJbWFnZTogRWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgaXNPcGVuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSB0aW1lcjtcbiAgICBwcml2YXRlIGluaXRpYWxYID0gMDtcbiAgICBwcml2YXRlIGluaXRpYWxZID0gMDtcbiAgICBwcml2YXRlIGluaXRpYWxMZWZ0ID0gMDtcbiAgICBwcml2YXRlIGluaXRpYWxUb3AgPSAwO1xuICAgIHByaXZhdGUgaXNNb3ZlID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGtleURvd25MaXN0ZW5lcjogRnVuY3Rpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXphdGlvbjogRG9tU2FuaXRpemVyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgaGVscGVyU2VydmljZTogTmd4R2FsbGVyeUhlbHBlclNlcnZpY2UsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyb3dzICYmIHRoaXMuYXJyb3dzQXV0b0hpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXJyb3dzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzWydzd2lwZSddKSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBlclNlcnZpY2UubWFuYWdlU3dpcGUodGhpcy5zd2lwZSwgdGhpcy5lbGVtZW50UmVmLFxuICAgICAgICAgICAgJ3ByZXZpZXcnLCAoKSA9PiB0aGlzLnNob3dOZXh0KCksICgpID0+IHRoaXMuc2hvd1ByZXYoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMua2V5RG93bkxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmtleURvd25MaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpIG9uTW91c2VFbnRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyb3dzQXV0b0hpZGUgJiYgIXRoaXMuYXJyb3dzKSB7XG4gICAgICAgICAgICB0aGlzLmFycm93cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJykgb25Nb3VzZUxlYXZlKCkge1xuICAgICAgICBpZiAodGhpcy5hcnJvd3NBdXRvSGlkZSAmJiB0aGlzLmFycm93cykge1xuICAgICAgICAgICAgdGhpcy5hcnJvd3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5RG93bihlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgaWYgKHRoaXMua2V5Ym9hcmROYXZpZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNLZXlib2FyZFByZXYoZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UHJldigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0tleWJvYXJkTmV4dChlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dOZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2xvc2VPbkVzYyAmJiB0aGlzLmlzS2V5Ym9hcmRFc2MoZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk9wZW4uZW1pdCgpO1xuXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3codHJ1ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZm9yY2VGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICB0aGlzLm1hbmFnZUZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMua2V5RG93bkxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXCJ3aW5kb3dcIiwgXCJrZXlkb3duXCIsIChlKSA9PiB0aGlzLm9uS2V5RG93bihlKSk7XG4gICAgfVxuXG4gICAgY2xvc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xvc2VGdWxsc2NyZWVuKCk7XG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG5cbiAgICAgICAgdGhpcy5zdG9wQXV0b1BsYXkoKTtcblxuICAgICAgICBpZiAodGhpcy5rZXlEb3duTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMua2V5RG93bkxpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbWFnZU1vdXNlRW50ZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9QbGF5ICYmIHRoaXMuYXV0b1BsYXlQYXVzZU9uSG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbWFnZU1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9QbGF5ICYmIHRoaXMuYXV0b1BsYXlQYXVzZU9uSG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRBdXRvUGxheSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b1BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XG5cbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2hvd05leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd05leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzLmF1dG9QbGF5SW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcEF1dG9QbGF5KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0F0SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIHNob3dOZXh0KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5jYW5TaG93TmV4dCgpKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ID09PSB0aGlzLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQcmV2KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jYW5TaG93UHJldigpKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4LS07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLmltYWdlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhblNob3dOZXh0KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluZmluaXR5TW92ZSB8fCB0aGlzLmluZGV4IDwgdGhpcy5pbWFnZXMubGVuZ3RoIC0gMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhblNob3dQcmV2KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluZmluaXR5TW92ZSB8fCB0aGlzLmluZGV4ID4gMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hbmFnZUZ1bGxzY3JlZW4oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmZ1bGxzY3JlZW4gfHwgdGhpcy5mb3JjZUZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGRvYyA9IDxhbnk+ZG9jdW1lbnQ7XG5cbiAgICAgICAgICAgIGlmICghZG9jLmZ1bGxzY3JlZW5FbGVtZW50ICYmICFkb2MubW96RnVsbFNjcmVlbkVsZW1lbnRcbiAgICAgICAgICAgICAgICAmJiAhZG9jLndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50ICYmICFkb2MubXNGdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbkZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNhZmVVcmwoaW1hZ2U6IHN0cmluZyk6IFNhZmVVcmwge1xuICAgICAgICByZXR1cm4gaW1hZ2Uuc3Vic3RyKDAsIDEwKSA9PT0gJ2RhdGE6aW1hZ2UnID9cbiAgICAgICAgICAgIGltYWdlIDogdGhpcy5zYW5pdGl6YXRpb24uYnlwYXNzU2VjdXJpdHlUcnVzdFVybChpbWFnZSk7XG4gICAgfVxuXG4gICAgZ2V0RmlsZVR5cGUgKGZpbGVTb3VyY2U6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlbHBlclNlcnZpY2UuZ2V0RmlsZVR5cGUoZmlsZVNvdXJjZSk7XG4gICAgfVxuXG4gICAgem9vbUluKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jYW5ab29tSW4oKSkge1xuICAgICAgICAgICAgdGhpcy56b29tVmFsdWUgKz0gdGhpcy56b29tU3RlcDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuem9vbVZhbHVlID4gdGhpcy56b29tTWF4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy56b29tVmFsdWUgPSB0aGlzLnpvb21NYXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB6b29tT3V0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jYW5ab29tT3V0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuem9vbVZhbHVlIC09IHRoaXMuem9vbVN0ZXA7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnpvb21WYWx1ZSA8IHRoaXMuem9vbU1pbikge1xuICAgICAgICAgICAgICAgIHRoaXMuem9vbVZhbHVlID0gdGhpcy56b29tTWluO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy56b29tVmFsdWUgPD0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByb3RhdGVMZWZ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdGF0ZVZhbHVlIC09IDkwO1xuICAgIH1cblxuICAgIHJvdGF0ZVJpZ2h0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdGF0ZVZhbHVlICs9IDkwO1xuICAgIH1cblxuICAgIGdldFRyYW5zZm9ybSgpOiBTYWZlU3R5bGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6YXRpb24uYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCdzY2FsZSgnICsgdGhpcy56b29tVmFsdWUgKyAnKSByb3RhdGUoJyArIHRoaXMucm90YXRlVmFsdWUgKyAnZGVnKScpO1xuICAgIH1cblxuICAgIGNhblpvb21JbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuem9vbVZhbHVlIDwgdGhpcy56b29tTWF4ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGNhblpvb21PdXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnpvb21WYWx1ZSA+IHRoaXMuem9vbU1pbiA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBjYW5EcmFnT25ab29tKCkge1xuICAgICAgICByZXR1cm4gdGhpcy56b29tICYmIHRoaXMuem9vbVZhbHVlID4gMTtcbiAgICB9XG5cbiAgICBtb3VzZURvd25IYW5kbGVyKGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuRHJhZ09uWm9vbSgpKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxYID0gdGhpcy5nZXRDbGllbnRYKGUpO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsWSA9IHRoaXMuZ2V0Q2xpZW50WShlKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbExlZnQgPSB0aGlzLnBvc2l0aW9uTGVmdDtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFRvcCA9IHRoaXMucG9zaXRpb25Ub3A7XG4gICAgICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlVXBIYW5kbGVyKGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc01vdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3VzZU1vdmVIYW5kbGVyKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3ZlKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uTGVmdCA9IHRoaXMuaW5pdGlhbExlZnQgKyAodGhpcy5nZXRDbGllbnRYKGUpIC0gdGhpcy5pbml0aWFsWCk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uVG9wID0gdGhpcy5pbml0aWFsVG9wICsgKHRoaXMuZ2V0Q2xpZW50WShlKSAtIHRoaXMuaW5pdGlhbFkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDbGllbnRYKGUpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPyBlLnRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENsaWVudFkoZSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA/IGUudG91Y2hlc1swXS5jbGllbnRZIDogZS5jbGllbnRZO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRQb3NpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuem9vbSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkxlZnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblRvcCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzS2V5Ym9hcmROZXh0KGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGUua2V5Q29kZSA9PT0gMzkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0tleWJvYXJkUHJldihlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBlLmtleUNvZGUgPT09IDM3ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNLZXlib2FyZEVzYyhlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBlLmtleUNvZGUgPT09IDI3ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb3BlbkZ1bGxzY3JlZW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSA8YW55PmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICBpZiAoZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgICAgICAgZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2xvc2VGdWxsc2NyZWVuKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bGxzY3JlZW4oKSkge1xuICAgICAgICAgICAgY29uc3QgZG9jID0gPGFueT5kb2N1bWVudDtcblxuICAgICAgICAgICAgaWYgKGRvYy5leGl0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgICAgIGRvYy5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2MubXNFeGl0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgICAgIGRvYy5tc0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvYy5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgZG9jLm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jLndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgZG9jLndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzRnVsbHNjcmVlbigpIHtcbiAgICAgICAgY29uc3QgZG9jID0gPGFueT5kb2N1bWVudDtcblxuICAgICAgICByZXR1cm4gZG9jLmZ1bGxzY3JlZW5FbGVtZW50IHx8IGRvYy53ZWJraXRGdWxsc2NyZWVuRWxlbWVudFxuICAgICAgICAgICAgfHwgZG9jLm1vekZ1bGxTY3JlZW5FbGVtZW50IHx8IGRvYy5tc0Z1bGxzY3JlZW5FbGVtZW50O1xuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIHNob3coZmlyc3QgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0b3BBdXRvUGxheSgpO1xuXG4gICAgICAgIHRoaXMub25BY3RpdmVDaGFuZ2UuZW1pdCh0aGlzLmluZGV4KTtcblxuICAgICAgICBpZiAoZmlyc3QgfHwgIXRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX3Nob3coKSwgNjAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3Nob3coKSB7XG4gICAgICAgIHRoaXMuem9vbVZhbHVlID0gMTtcbiAgICAgICAgdGhpcy5yb3RhdGVWYWx1ZSA9IDA7XG4gICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIHRoaXMuc3JjID0gdGhpcy5nZXRTYWZlVXJsKDxzdHJpbmc+dGhpcy5pbWFnZXNbdGhpcy5pbmRleF0pO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLmdldEZpbGVUeXBlKDxzdHJpbmc+dGhpcy5pbWFnZXNbdGhpcy5pbmRleF0pO1xuICAgICAgICB0aGlzLnNyY0luZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb25zW3RoaXMuaW5kZXhdO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2FkZWQodGhpcy5wcmV2aWV3SW1hZ2UubmF0aXZlRWxlbWVudCkgfHwgdGhpcy50eXBlID09ICd2aWRlbycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U3Bpbm5lciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld0ltYWdlLm5hdGl2ZUVsZW1lbnQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U3Bpbm5lciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdJbWFnZS5uYXRpdmVFbGVtZW50Lm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvUGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzTG9hZGVkKGltZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIWltZy5jb21wbGV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbWcubmF0dXJhbFdpZHRoICE9PSAndW5kZWZpbmVkJyAmJiBpbWcubmF0dXJhbFdpZHRoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59Il19