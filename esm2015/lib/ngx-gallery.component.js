import { Component, EventEmitter, Output, ViewChild, HostBinding, ElementRef, HostListener, Input } from '@angular/core';
import { NgxGalleryHelperService } from './ngx-gallery-helper.service';
import { NgxGalleryOptions } from './ngx-gallery-options';
import { NgxGalleryOrderedImage } from './ngx-gallery-ordered-image.model';
import { NgxGalleryPreviewComponent } from './ngx-gallery-preview/ngx-gallery-preview.component';
import { NgxGalleryImageComponent } from './ngx-gallery-image/ngx-gallery-image.component';
import { NgxGalleryThumbnailsComponent } from './ngx-gallery-thumbnails/ngx-gallery-thumbnails.component';
import { NgxGalleryLayout } from './ngx-gallery-layout.model';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './ngx-gallery-helper.service';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './ngx-gallery-preview/ngx-gallery-preview.component';
import * as ɵngcc4 from './ngx-gallery-image/ngx-gallery-image.component';
import * as ɵngcc5 from './ngx-gallery-thumbnails/ngx-gallery-thumbnails.component';

function NgxGalleryComponent_ngx_gallery_image_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-image", 3);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryComponent_ngx_gallery_image_1_Template_ngx_gallery_image_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.openPreview($event); })("onActiveChange", function NgxGalleryComponent_ngx_gallery_image_1_Template_ngx_gallery_image_onActiveChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.selectFromImage($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("height", ctx_r0.getImageHeight());
    ɵngcc0.ɵɵproperty("images", ctx_r0.mediumImages)("clickable", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.preview)("selectedIndex", ctx_r0.selectedIndex)("arrows", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageArrows)("arrowsAutoHide", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageArrowsAutoHide)("arrowPrevIcon", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.arrowNextIcon)("swipe", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageSwipe)("animation", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAnimation)("size", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageSize)("autoPlay", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlay)("autoPlayInterval", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlayInterval)("autoPlayPauseOnHover", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlayPauseOnHover)("infinityMove", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageInfinityMove)("lazyLoading", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.lazyLoading)("actions", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageActions)("descriptions", ctx_r0.descriptions)("showDescription", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageDescription)("bullets", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageBullets);
} }
const _c0 = function () { return []; };
function NgxGalleryComponent_ngx_gallery_thumbnails_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-thumbnails", 4);
    ɵngcc0.ɵɵlistener("onActiveChange", function NgxGalleryComponent_ngx_gallery_thumbnails_2_Template_ngx_gallery_thumbnails_onActiveChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.selectFromThumbnails($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("margin-top", ctx_r1.getThumbnailsMarginTop())("margin-bottom", ctx_r1.getThumbnailsMarginBottom())("height", ctx_r1.getThumbnailsHeight());
    ɵngcc0.ɵɵproperty("images", ctx_r1.smallImages)("links", (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsAsLinks) ? ctx_r1.links : ɵngcc0.ɵɵpureFunction0(26, _c0))("labels", ctx_r1.labels)("linkTarget", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.linkTarget)("selectedIndex", ctx_r1.selectedIndex)("columns", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsColumns)("rows", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsRows)("margin", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailMargin)("arrows", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsArrows)("arrowsAutoHide", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsArrowsAutoHide)("arrowPrevIcon", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.arrowNextIcon)("clickable", (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.image) || (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.preview))("swipe", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsSwipe)("size", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailSize)("moveSize", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsMoveSize)("order", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsOrder)("remainingCount", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsRemainingCount)("lazyLoading", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.lazyLoading)("actions", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailActions);
} }
export class NgxGalleryComponent {
    constructor(myElement, helperService) {
        this.myElement = myElement;
        this.helperService = helperService;
        this.imagesReady = new EventEmitter();
        this.change = new EventEmitter();
        this.previewOpen = new EventEmitter();
        this.previewClose = new EventEmitter();
        this.previewChange = new EventEmitter();
        this.oldImagesLength = 0;
        this.selectedIndex = 0;
        this.breakpoint = undefined;
        this.prevBreakpoint = undefined;
    }
    ngOnInit() {
        if (this.options != undefined) {
            this.options = this.options.map((opt) => new NgxGalleryOptions(opt));
        }
        this.sortOptions();
        this.setBreakpoint();
        this.setOptions();
        this.checkFullWidth();
        if (this.currentOptions) {
            this.selectedIndex = this.currentOptions.startIndex;
        }
    }
    ngDoCheck() {
        if (this.images !== undefined && (this.images.length !== this.oldImagesLength)
            || (this.images !== this.oldImages)) {
            this.oldImagesLength = this.images.length;
            this.oldImages = this.images;
            this.setOptions();
            this.setImages();
            if (this.images && this.images.length) {
                this.imagesReady.emit();
            }
            if (this.image) {
                this.image.reset(this.currentOptions.startIndex);
            }
            if (this.currentOptions.thumbnailsAutoHide && this.currentOptions.thumbnails
                && this.images.length <= 1) {
                this.currentOptions.thumbnails = false;
                this.currentOptions.imageArrows = false;
            }
            this.resetThumbnails();
        }
    }
    ngAfterViewInit() {
        this.checkFullWidth();
    }
    onResize() {
        this.setBreakpoint();
        if (this.prevBreakpoint !== this.breakpoint) {
            this.setOptions();
            this.resetThumbnails();
        }
        if (this.currentOptions && this.currentOptions.fullWidth) {
            if (this.fullWidthTimeout) {
                clearTimeout(this.fullWidthTimeout);
            }
            this.fullWidthTimeout = setTimeout(() => {
                this.checkFullWidth();
            }, 200);
        }
    }
    getImageHeight() {
        return (this.currentOptions && this.currentOptions.thumbnails) ?
            this.currentOptions.imagePercent + '%' : '100%';
    }
    getThumbnailsHeight() {
        if (this.currentOptions && this.currentOptions.image) {
            return 'calc(' + this.currentOptions.thumbnailsPercent + '% - '
                + this.currentOptions.thumbnailsMargin + 'px)';
        }
        else {
            return '100%';
        }
    }
    getThumbnailsMarginTop() {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsBottom) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    }
    getThumbnailsMarginBottom() {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsTop) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    }
    openPreview(index) {
        if (this.currentOptions.previewCustom) {
            this.currentOptions.previewCustom(index);
        }
        else {
            this.previewEnabled = true;
            this.preview.open(index);
        }
    }
    onPreviewOpen() {
        this.previewOpen.emit();
        if (this.image && this.image.autoPlay) {
            this.image.stopAutoPlay();
        }
    }
    onPreviewClose() {
        this.previewEnabled = false;
        this.previewClose.emit();
        if (this.image && this.image.autoPlay) {
            this.image.startAutoPlay();
        }
    }
    selectFromImage(index) {
        this.select(index);
    }
    selectFromThumbnails(index) {
        this.select(index);
        if (this.currentOptions && this.currentOptions.thumbnails && this.currentOptions.preview
            && (!this.currentOptions.image || this.currentOptions.thumbnailsRemainingCount)) {
            this.openPreview(this.selectedIndex);
        }
    }
    show(index) {
        this.select(index);
    }
    showNext() {
        this.image.showNext();
    }
    showPrev() {
        this.image.showPrev();
    }
    canShowNext() {
        if (this.images && this.currentOptions) {
            return (this.currentOptions.imageInfinityMove || this.selectedIndex < this.images.length - 1)
                ? true : false;
        }
        else {
            return false;
        }
    }
    canShowPrev() {
        if (this.images && this.currentOptions) {
            return (this.currentOptions.imageInfinityMove || this.selectedIndex > 0) ? true : false;
        }
        else {
            return false;
        }
    }
    previewSelect(index) {
        this.previewChange.emit({ index, image: this.images[index] });
    }
    moveThumbnailsRight() {
        this.thubmnails.moveRight();
    }
    moveThumbnailsLeft() {
        this.thubmnails.moveLeft();
    }
    canMoveThumbnailsRight() {
        return this.thubmnails.canMoveRight();
    }
    canMoveThumbnailsLeft() {
        return this.thubmnails.canMoveLeft();
    }
    resetThumbnails() {
        if (this.thubmnails) {
            this.thubmnails.reset(this.currentOptions.startIndex);
        }
    }
    select(index) {
        this.selectedIndex = index;
        this.change.emit({
            index,
            image: this.images[index]
        });
    }
    checkFullWidth() {
        if (this.currentOptions && this.currentOptions.fullWidth) {
            this.width = document.body.clientWidth + 'px';
            this.left = (-(document.body.clientWidth -
                this.myElement.nativeElement.parentNode.innerWidth) / 2) + 'px';
        }
    }
    setImages() {
        const _this = this;
        this.images.forEach(function (img) {
            img.type = _this.helperService.getFileType(img.url || img.big || img.medium || img.small || '');
        });
        this.smallImages = this.images.map((img) => img.small);
        this.mediumImages = this.images.map((img, i) => new NgxGalleryOrderedImage({
            src: img.medium,
            type: img.type,
            index: i
        }));
        this.bigImages = this.images.map((img) => img.big);
        this.descriptions = this.images.map((img) => img.description);
        this.links = this.images.map((img) => img.url);
        this.labels = this.images.map((img) => img.label);
    }
    setBreakpoint() {
        this.prevBreakpoint = this.breakpoint;
        let breakpoints;
        if (typeof window !== 'undefined') {
            if (this.options != undefined) {
                breakpoints = this.options.filter((opt) => opt.breakpoint >= window.innerWidth)
                    .map((opt) => opt.breakpoint);
            }
        }
        if (breakpoints && breakpoints.length) {
            this.breakpoint = breakpoints.pop();
        }
        else {
            this.breakpoint = undefined;
        }
    }
    sortOptions() {
        if (this.options != undefined) {
            this.options = [
                ...this.options.filter((a) => a.breakpoint === undefined),
                ...this.options
                    .filter((a) => a.breakpoint !== undefined)
                    .sort((a, b) => b.breakpoint - a.breakpoint)
            ];
        }
    }
    setOptions() {
        this.currentOptions = new NgxGalleryOptions({});
        if (this.options != undefined) {
            this.options
                .filter((opt) => opt.breakpoint === undefined || opt.breakpoint >= this.breakpoint)
                .map((opt) => this.combineOptions(this.currentOptions, opt));
        }
        this.width = this.currentOptions.width;
        this.height = this.currentOptions.height;
    }
    combineOptions(first, second) {
        Object.keys(second).map((val) => first[val] = second[val] !== undefined ? second[val] : first[val]);
    }
}
NgxGalleryComponent.ɵfac = function NgxGalleryComponent_Factory(t) { return new (t || NgxGalleryComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgxGalleryHelperService)); };
NgxGalleryComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryComponent, selectors: [["ngx-gallery"]], viewQuery: function NgxGalleryComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NgxGalleryPreviewComponent, true);
        ɵngcc0.ɵɵviewQuery(NgxGalleryImageComponent, true);
        ɵngcc0.ɵɵviewQuery(NgxGalleryThumbnailsComponent, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.preview = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.image = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.thubmnails = _t.first);
    } }, hostVars: 6, hostBindings: function NgxGalleryComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function NgxGalleryComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, ɵngcc0.ɵɵresolveWindow);
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.width)("left", ctx.left)("height", ctx.height);
    } }, inputs: { options: "options", images: "images" }, outputs: { imagesReady: "imagesReady", change: "change", previewOpen: "previewOpen", previewClose: "previewClose", previewChange: "previewChange" }, features: [ɵngcc0.ɵɵProvidersFeature([NgxGalleryHelperService])], decls: 4, vars: 41, consts: [[3, "height", "images", "clickable", "selectedIndex", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "swipe", "animation", "size", "autoPlay", "autoPlayInterval", "autoPlayPauseOnHover", "infinityMove", "lazyLoading", "actions", "descriptions", "showDescription", "bullets", "onClick", "onActiveChange", 4, "ngIf"], [3, "marginTop", "marginBottom", "height", "images", "links", "labels", "linkTarget", "selectedIndex", "columns", "rows", "margin", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "clickable", "swipe", "size", "moveSize", "order", "remainingCount", "lazyLoading", "actions", "onActiveChange", 4, "ngIf"], [3, "images", "descriptions", "showDescription", "arrowPrevIcon", "arrowNextIcon", "closeIcon", "fullscreenIcon", "spinnerIcon", "arrows", "arrowsAutoHide", "swipe", "fullscreen", "forceFullscreen", "closeOnClick", "closeOnEsc", "keyboardNavigation", "animation", "autoPlay", "autoPlayInterval", "autoPlayPauseOnHover", "infinityMove", "zoom", "zoomStep", "zoomMax", "zoomMin", "zoomInIcon", "zoomOutIcon", "actions", "rotate", "rotateLeftIcon", "rotateRightIcon", "download", "downloadIcon", "bullets", "onClose", "onOpen", "onActiveChange"], [3, "images", "clickable", "selectedIndex", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "swipe", "animation", "size", "autoPlay", "autoPlayInterval", "autoPlayPauseOnHover", "infinityMove", "lazyLoading", "actions", "descriptions", "showDescription", "bullets", "onClick", "onActiveChange"], [3, "images", "links", "labels", "linkTarget", "selectedIndex", "columns", "rows", "margin", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "clickable", "swipe", "size", "moveSize", "order", "remainingCount", "lazyLoading", "actions", "onActiveChange"]], template: function NgxGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, NgxGalleryComponent_ngx_gallery_image_1_Template, 1, 21, "ngx-gallery-image", 0);
        ɵngcc0.ɵɵtemplate(2, NgxGalleryComponent_ngx_gallery_thumbnails_2_Template, 1, 27, "ngx-gallery-thumbnails", 1);
        ɵngcc0.ɵɵelementStart(3, "ngx-gallery-preview", 2);
        ɵngcc0.ɵɵlistener("onClose", function NgxGalleryComponent_Template_ngx_gallery_preview_onClose_3_listener() { return ctx.onPreviewClose(); })("onOpen", function NgxGalleryComponent_Template_ngx_gallery_preview_onOpen_3_listener() { return ctx.onPreviewOpen(); })("onActiveChange", function NgxGalleryComponent_Template_ngx_gallery_preview_onActiveChange_3_listener($event) { return ctx.previewSelect($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-layout ", ctx.currentOptions == null ? null : ctx.currentOptions.layout, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.currentOptions == null ? null : ctx.currentOptions.image);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.currentOptions == null ? null : ctx.currentOptions.thumbnails);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ngx-gallery-active", ctx.previewEnabled);
        ɵngcc0.ɵɵproperty("images", ctx.bigImages)("descriptions", ctx.descriptions)("showDescription", ctx.currentOptions == null ? null : ctx.currentOptions.previewDescription)("arrowPrevIcon", ctx.currentOptions == null ? null : ctx.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx.currentOptions == null ? null : ctx.currentOptions.arrowNextIcon)("closeIcon", ctx.currentOptions == null ? null : ctx.currentOptions.closeIcon)("fullscreenIcon", ctx.currentOptions == null ? null : ctx.currentOptions.fullscreenIcon)("spinnerIcon", ctx.currentOptions == null ? null : ctx.currentOptions.spinnerIcon)("arrows", ctx.currentOptions == null ? null : ctx.currentOptions.previewArrows)("arrowsAutoHide", ctx.currentOptions == null ? null : ctx.currentOptions.previewArrowsAutoHide)("swipe", ctx.currentOptions == null ? null : ctx.currentOptions.previewSwipe)("fullscreen", ctx.currentOptions == null ? null : ctx.currentOptions.previewFullscreen)("forceFullscreen", ctx.currentOptions == null ? null : ctx.currentOptions.previewForceFullscreen)("closeOnClick", ctx.currentOptions == null ? null : ctx.currentOptions.previewCloseOnClick)("closeOnEsc", ctx.currentOptions == null ? null : ctx.currentOptions.previewCloseOnEsc)("keyboardNavigation", ctx.currentOptions == null ? null : ctx.currentOptions.previewKeyboardNavigation)("animation", ctx.currentOptions == null ? null : ctx.currentOptions.previewAnimation)("autoPlay", ctx.currentOptions == null ? null : ctx.currentOptions.previewAutoPlay)("autoPlayInterval", ctx.currentOptions == null ? null : ctx.currentOptions.previewAutoPlayInterval)("autoPlayPauseOnHover", ctx.currentOptions == null ? null : ctx.currentOptions.previewAutoPlayPauseOnHover)("infinityMove", ctx.currentOptions == null ? null : ctx.currentOptions.previewInfinityMove)("zoom", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoom)("zoomStep", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoomStep)("zoomMax", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoomMax)("zoomMin", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoomMin)("zoomInIcon", ctx.currentOptions == null ? null : ctx.currentOptions.zoomInIcon)("zoomOutIcon", ctx.currentOptions == null ? null : ctx.currentOptions.zoomOutIcon)("actions", ctx.currentOptions == null ? null : ctx.currentOptions.actions)("rotate", ctx.currentOptions == null ? null : ctx.currentOptions.previewRotate)("rotateLeftIcon", ctx.currentOptions == null ? null : ctx.currentOptions.rotateLeftIcon)("rotateRightIcon", ctx.currentOptions == null ? null : ctx.currentOptions.rotateRightIcon)("download", ctx.currentOptions == null ? null : ctx.currentOptions.previewDownload)("downloadIcon", ctx.currentOptions == null ? null : ctx.currentOptions.downloadIcon)("bullets", ctx.currentOptions == null ? null : ctx.currentOptions.previewBullets);
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.NgxGalleryPreviewComponent, ɵngcc4.NgxGalleryImageComponent, ɵngcc5.NgxGalleryThumbnailsComponent], styles: ["[_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{float:left}[_nghost-%COMP%]     *{box-sizing:border-box}[_nghost-%COMP%]     .ngx-gallery-icon{color:#fff;display:inline-block;font-size:25px;position:absolute;z-index:2000}[_nghost-%COMP%]     .ngx-gallery-icon .ngx-gallery-icon-content{display:block}[_nghost-%COMP%]     .ngx-gallery-clickable{cursor:pointer}[_nghost-%COMP%]     .ngx-gallery-icons-wrapper .ngx-gallery-icon{cursor:pointer;font-size:20px;margin-right:5px;margin-top:5px;position:relative}[_nghost-%COMP%]     .ngx-gallery-icons-wrapper{float:right}[_nghost-%COMP%]   .ngx-gallery-layout[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}[_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-top[_ngcontent-%COMP%]   ngx-gallery-image[_ngcontent-%COMP%]{order:2}[_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-bottom[_ngcontent-%COMP%]   ngx-gallery-image[_ngcontent-%COMP%], [_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-top[_ngcontent-%COMP%]   ngx-gallery-thumbnails[_ngcontent-%COMP%]{order:1}[_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-bottom[_ngcontent-%COMP%]   ngx-gallery-thumbnails[_ngcontent-%COMP%]{order:2}"] });
NgxGalleryComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgxGalleryHelperService }
];
NgxGalleryComponent.propDecorators = {
    options: [{ type: Input }],
    images: [{ type: Input }],
    imagesReady: [{ type: Output }],
    change: [{ type: Output }],
    previewOpen: [{ type: Output }],
    previewClose: [{ type: Output }],
    previewChange: [{ type: Output }],
    preview: [{ type: ViewChild, args: [NgxGalleryPreviewComponent,] }],
    image: [{ type: ViewChild, args: [NgxGalleryImageComponent,] }],
    thubmnails: [{ type: ViewChild, args: [NgxGalleryThumbnailsComponent,] }],
    width: [{ type: HostBinding, args: ['style.width',] }],
    height: [{ type: HostBinding, args: ['style.height',] }],
    left: [{ type: HostBinding, args: ['style.left',] }],
    onResize: [{ type: HostListener, args: ['window:resize',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-gallery',
                template: `
    <div class="ngx-gallery-layout {{currentOptions?.layout}}">
        <ngx-gallery-image *ngIf="currentOptions?.image" [style.height]="getImageHeight()" [images]="mediumImages" [clickable]="currentOptions?.preview" [selectedIndex]="selectedIndex" [arrows]="currentOptions?.imageArrows" [arrowsAutoHide]="currentOptions?.imageArrowsAutoHide" [arrowPrevIcon]="currentOptions?.arrowPrevIcon" [arrowNextIcon]="currentOptions?.arrowNextIcon" [swipe]="currentOptions?.imageSwipe" [animation]="currentOptions?.imageAnimation" [size]="currentOptions?.imageSize" [autoPlay]="currentOptions?.imageAutoPlay" [autoPlayInterval]="currentOptions?.imageAutoPlayInterval" [autoPlayPauseOnHover]="currentOptions?.imageAutoPlayPauseOnHover" [infinityMove]="currentOptions?.imageInfinityMove"  [lazyLoading]="currentOptions?.lazyLoading" [actions]="currentOptions?.imageActions" [descriptions]="descriptions" [showDescription]="currentOptions?.imageDescription" [bullets]="currentOptions?.imageBullets" (onClick)="openPreview($event)" (onActiveChange)="selectFromImage($event)"></ngx-gallery-image>
        <ngx-gallery-thumbnails *ngIf="currentOptions?.thumbnails" [style.marginTop]="getThumbnailsMarginTop()" [style.marginBottom]="getThumbnailsMarginBottom()" [style.height]="getThumbnailsHeight()" [images]="smallImages" [links]="currentOptions?.thumbnailsAsLinks ? links : []" [labels]="labels" [linkTarget]="currentOptions?.linkTarget" [selectedIndex]="selectedIndex" [columns]="currentOptions?.thumbnailsColumns" [rows]="currentOptions?.thumbnailsRows" [margin]="currentOptions?.thumbnailMargin" [arrows]="currentOptions?.thumbnailsArrows" [arrowsAutoHide]="currentOptions?.thumbnailsArrowsAutoHide" [arrowPrevIcon]="currentOptions?.arrowPrevIcon" [arrowNextIcon]="currentOptions?.arrowNextIcon" [clickable]="currentOptions?.image || currentOptions?.preview" [swipe]="currentOptions?.thumbnailsSwipe" [size]="currentOptions?.thumbnailSize" [moveSize]="currentOptions?.thumbnailsMoveSize" [order]="currentOptions?.thumbnailsOrder" [remainingCount]="currentOptions?.thumbnailsRemainingCount" [lazyLoading]="currentOptions?.lazyLoading" [actions]="currentOptions?.thumbnailActions"  (onActiveChange)="selectFromThumbnails($event)"></ngx-gallery-thumbnails>
        <ngx-gallery-preview [images]="bigImages" [descriptions]="descriptions" [showDescription]="currentOptions?.previewDescription" [arrowPrevIcon]="currentOptions?.arrowPrevIcon" [arrowNextIcon]="currentOptions?.arrowNextIcon" [closeIcon]="currentOptions?.closeIcon" [fullscreenIcon]="currentOptions?.fullscreenIcon" [spinnerIcon]="currentOptions?.spinnerIcon" [arrows]="currentOptions?.previewArrows" [arrowsAutoHide]="currentOptions?.previewArrowsAutoHide" [swipe]="currentOptions?.previewSwipe" [fullscreen]="currentOptions?.previewFullscreen" [forceFullscreen]="currentOptions?.previewForceFullscreen" [closeOnClick]="currentOptions?.previewCloseOnClick" [closeOnEsc]="currentOptions?.previewCloseOnEsc" [keyboardNavigation]="currentOptions?.previewKeyboardNavigation" [animation]="currentOptions?.previewAnimation" [autoPlay]="currentOptions?.previewAutoPlay" [autoPlayInterval]="currentOptions?.previewAutoPlayInterval" [autoPlayPauseOnHover]="currentOptions?.previewAutoPlayPauseOnHover" [infinityMove]="currentOptions?.previewInfinityMove" [zoom]="currentOptions?.previewZoom" [zoomStep]="currentOptions?.previewZoomStep" [zoomMax]="currentOptions?.previewZoomMax" [zoomMin]="currentOptions?.previewZoomMin" [zoomInIcon]="currentOptions?.zoomInIcon" [zoomOutIcon]="currentOptions?.zoomOutIcon" [actions]="currentOptions?.actions" [rotate]="currentOptions?.previewRotate" [rotateLeftIcon]="currentOptions?.rotateLeftIcon" [rotateRightIcon]="currentOptions?.rotateRightIcon" [download]="currentOptions?.previewDownload" [downloadIcon]="currentOptions?.downloadIcon" [bullets]="currentOptions?.previewBullets" (onClose)="onPreviewClose()" (onOpen)="onPreviewOpen()" (onActiveChange)="previewSelect($event)" [class.ngx-gallery-active]="previewEnabled"></ngx-gallery-preview>
    </div>
    `,
                providers: [NgxGalleryHelperService],
                styles: [":host{display:inline-block}:host>*{float:left}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep .ngx-gallery-icon{color:#fff;display:inline-block;font-size:25px;position:absolute;z-index:2000}:host ::ng-deep .ngx-gallery-icon .ngx-gallery-icon-content{display:block}:host ::ng-deep .ngx-gallery-clickable{cursor:pointer}:host ::ng-deep .ngx-gallery-icons-wrapper .ngx-gallery-icon{cursor:pointer;font-size:20px;margin-right:5px;margin-top:5px;position:relative}:host ::ng-deep .ngx-gallery-icons-wrapper{float:right}:host .ngx-gallery-layout{display:flex;flex-direction:column;height:100%;width:100%}:host .ngx-gallery-layout.thumbnails-top ngx-gallery-image{order:2}:host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-image,:host .ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails{order:1}:host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails{order:2}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NgxGalleryHelperService }]; }, { imagesReady: [{
            type: Output
        }], change: [{
            type: Output
        }], previewOpen: [{
            type: Output
        }], previewClose: [{
            type: Output
        }], previewChange: [{
            type: Output
        }], options: [{
            type: Input
        }], onResize: [{
            type: HostListener,
            args: ['window:resize']
        }], width: [{
            type: HostBinding,
            args: ['style.width']
        }], left: [{
            type: HostBinding,
            args: ['style.left']
        }], height: [{
            type: HostBinding,
            args: ['style.height']
        }], images: [{
            type: Input
        }], preview: [{
            type: ViewChild,
            args: [NgxGalleryPreviewComponent]
        }], image: [{
            type: ViewChild,
            args: [NgxGalleryImageComponent]
        }], thubmnails: [{
            type: ViewChild,
            args: [NgxGalleryThumbnailsComponent]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnkuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ2FsbGVyeS9zcmMvbGliL25neC1nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFrQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekosT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDMUcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYzlELE1BQU0sT0FBTyxtQkFBbUI7QUFBRyxJQXFDL0IsWUFBb0IsU0FBcUIsRUFBVSxhQUFzQztBQUFJLFFBQXpFLGNBQVMsR0FBVCxTQUFTLENBQVk7QUFBQyxRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtBQUFDLFFBakNoRixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDL0MsUUFBYyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQThDLENBQUM7QUFDdEYsUUFBYyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDL0MsUUFBYyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDaEQsUUFB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QUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1RyxJQUFJLENBQUM7QUFDTDsrQ0E1VEMsU0FBUyxTQUFDLGtCQUNQLFFBQVEsRUFBRSxhQUFhLGtCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQU1ULGtCQUVELFNBQVMsRUFBRTtBQUFDO0dBQXVCLENBQUM7Ozs7Ozs7NmJBQ3ZDOzgwQ0FDSTtBQUFDO0FBQTZDLFlBeEIrQyxVQUFVO0FBQUksWUFFdkcsdUJBQXVCO0FBQUc7QUFBRztBQUNqQyxzQkFzQkEsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSywwQkFFVixNQUFNO0FBQUsscUJBQ1gsTUFBTTtBQUFLLDBCQUNYLE1BQU07QUFBSywyQkFDWCxNQUFNO0FBQUssNEJBQ1gsTUFBTTtBQUFLLHNCQXFCWCxTQUFTLFNBQUMsMEJBQTBCO0FBQU8sb0JBQzNDLFNBQVMsU0FBQyx3QkFBd0I7QUFBTyx5QkFDekMsU0FBUyxTQUFDLDZCQUE2QjtBQUFPLG9CQUU5QyxXQUFXLFNBQUMsYUFBYTtBQUFPLHFCQUNoQyxXQUFXLFNBQUMsY0FBYztBQUFPLG1CQUNqQyxXQUFXLFNBQUMsWUFBWTtBQUFPLHVCQStDL0IsWUFBWSxTQUFDLGVBQWU7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBEb0NoZWNrLCBBZnRlclZpZXdJbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0NoaWxkLCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZVJlc291cmNlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ3hHYWxsZXJ5SGVscGVyU2VydmljZSB9IGZyb20gJy4vbmd4LWdhbGxlcnktaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeU9wdGlvbnMgfSBmcm9tICcuL25neC1nYWxsZXJ5LW9wdGlvbnMnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUltYWdlU2l6ZSB9IGZyb20gJy4vbmd4LWdhbGxlcnktaW1hZ2Utc2l6ZS5tb2RlbCc7XG5pbXBvcnQgeyBOZ3hHYWxsZXJ5SW1hZ2UgfSBmcm9tICcuL25neC1nYWxsZXJ5LWltYWdlLm1vZGVsJztcbmltcG9ydCB7IE5neEdhbGxlcnlPcmRlcmVkSW1hZ2UgfSBmcm9tICcuL25neC1nYWxsZXJ5LW9yZGVyZWQtaW1hZ2UubW9kZWwnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL25neC1nYWxsZXJ5LXByZXZpZXcvbmd4LWdhbGxlcnktcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1pbWFnZS9uZ3gtZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQgfSBmcm9tICcuL25neC1nYWxsZXJ5LXRodW1ibmFpbHMvbmd4LWdhbGxlcnktdGh1bWJuYWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUxheW91dCB9IGZyb20gJy4vbmd4LWdhbGxlcnktbGF5b3V0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtZ2FsbGVyeScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktbGF5b3V0IHt7Y3VycmVudE9wdGlvbnM/LmxheW91dH19XCI+XG4gICAgICAgIDxuZ3gtZ2FsbGVyeS1pbWFnZSAqbmdJZj1cImN1cnJlbnRPcHRpb25zPy5pbWFnZVwiIFtzdHlsZS5oZWlnaHRdPVwiZ2V0SW1hZ2VIZWlnaHQoKVwiIFtpbWFnZXNdPVwibWVkaXVtSW1hZ2VzXCIgW2NsaWNrYWJsZV09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld1wiIFtzZWxlY3RlZEluZGV4XT1cInNlbGVjdGVkSW5kZXhcIiBbYXJyb3dzXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUFycm93c1wiIFthcnJvd3NBdXRvSGlkZV09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBcnJvd3NBdXRvSGlkZVwiIFthcnJvd1ByZXZJY29uXT1cImN1cnJlbnRPcHRpb25zPy5hcnJvd1ByZXZJY29uXCIgW2Fycm93TmV4dEljb25dPVwiY3VycmVudE9wdGlvbnM/LmFycm93TmV4dEljb25cIiBbc3dpcGVdPVwiY3VycmVudE9wdGlvbnM/LmltYWdlU3dpcGVcIiBbYW5pbWF0aW9uXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUFuaW1hdGlvblwiIFtzaXplXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZVNpemVcIiBbYXV0b1BsYXldPVwiY3VycmVudE9wdGlvbnM/LmltYWdlQXV0b1BsYXlcIiBbYXV0b1BsYXlJbnRlcnZhbF09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBdXRvUGxheUludGVydmFsXCIgW2F1dG9QbGF5UGF1c2VPbkhvdmVyXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUF1dG9QbGF5UGF1c2VPbkhvdmVyXCIgW2luZmluaXR5TW92ZV09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VJbmZpbml0eU1vdmVcIiAgW2xhenlMb2FkaW5nXT1cImN1cnJlbnRPcHRpb25zPy5sYXp5TG9hZGluZ1wiIFthY3Rpb25zXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUFjdGlvbnNcIiBbZGVzY3JpcHRpb25zXT1cImRlc2NyaXB0aW9uc1wiIFtzaG93RGVzY3JpcHRpb25dPVwiY3VycmVudE9wdGlvbnM/LmltYWdlRGVzY3JpcHRpb25cIiBbYnVsbGV0c109XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VCdWxsZXRzXCIgKG9uQ2xpY2spPVwib3BlblByZXZpZXcoJGV2ZW50KVwiIChvbkFjdGl2ZUNoYW5nZSk9XCJzZWxlY3RGcm9tSW1hZ2UoJGV2ZW50KVwiPjwvbmd4LWdhbGxlcnktaW1hZ2U+XG4gICAgICAgIDxuZ3gtZ2FsbGVyeS10aHVtYm5haWxzICpuZ0lmPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNcIiBbc3R5bGUubWFyZ2luVG9wXT1cImdldFRodW1ibmFpbHNNYXJnaW5Ub3AoKVwiIFtzdHlsZS5tYXJnaW5Cb3R0b21dPVwiZ2V0VGh1bWJuYWlsc01hcmdpbkJvdHRvbSgpXCIgW3N0eWxlLmhlaWdodF09XCJnZXRUaHVtYm5haWxzSGVpZ2h0KClcIiBbaW1hZ2VzXT1cInNtYWxsSW1hZ2VzXCIgW2xpbmtzXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzQXNMaW5rcyA/IGxpbmtzIDogW11cIiBbbGFiZWxzXT1cImxhYmVsc1wiIFtsaW5rVGFyZ2V0XT1cImN1cnJlbnRPcHRpb25zPy5saW5rVGFyZ2V0XCIgW3NlbGVjdGVkSW5kZXhdPVwic2VsZWN0ZWRJbmRleFwiIFtjb2x1bW5zXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzQ29sdW1uc1wiIFtyb3dzXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzUm93c1wiIFttYXJnaW5dPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbE1hcmdpblwiIFthcnJvd3NdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNBcnJvd3NcIiBbYXJyb3dzQXV0b0hpZGVdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNBcnJvd3NBdXRvSGlkZVwiIFthcnJvd1ByZXZJY29uXT1cImN1cnJlbnRPcHRpb25zPy5hcnJvd1ByZXZJY29uXCIgW2Fycm93TmV4dEljb25dPVwiY3VycmVudE9wdGlvbnM/LmFycm93TmV4dEljb25cIiBbY2xpY2thYmxlXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZSB8fCBjdXJyZW50T3B0aW9ucz8ucHJldmlld1wiIFtzd2lwZV09XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc1N3aXBlXCIgW3NpemVdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbFNpemVcIiBbbW92ZVNpemVdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNNb3ZlU2l6ZVwiIFtvcmRlcl09XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc09yZGVyXCIgW3JlbWFpbmluZ0NvdW50XT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzUmVtYWluaW5nQ291bnRcIiBbbGF6eUxvYWRpbmddPVwiY3VycmVudE9wdGlvbnM/LmxhenlMb2FkaW5nXCIgW2FjdGlvbnNdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbEFjdGlvbnNcIiAgKG9uQWN0aXZlQ2hhbmdlKT1cInNlbGVjdEZyb21UaHVtYm5haWxzKCRldmVudClcIj48L25neC1nYWxsZXJ5LXRodW1ibmFpbHM+XG4gICAgICAgIDxuZ3gtZ2FsbGVyeS1wcmV2aWV3IFtpbWFnZXNdPVwiYmlnSW1hZ2VzXCIgW2Rlc2NyaXB0aW9uc109XCJkZXNjcmlwdGlvbnNcIiBbc2hvd0Rlc2NyaXB0aW9uXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3RGVzY3JpcHRpb25cIiBbYXJyb3dQcmV2SWNvbl09XCJjdXJyZW50T3B0aW9ucz8uYXJyb3dQcmV2SWNvblwiIFthcnJvd05leHRJY29uXT1cImN1cnJlbnRPcHRpb25zPy5hcnJvd05leHRJY29uXCIgW2Nsb3NlSWNvbl09XCJjdXJyZW50T3B0aW9ucz8uY2xvc2VJY29uXCIgW2Z1bGxzY3JlZW5JY29uXT1cImN1cnJlbnRPcHRpb25zPy5mdWxsc2NyZWVuSWNvblwiIFtzcGlubmVySWNvbl09XCJjdXJyZW50T3B0aW9ucz8uc3Bpbm5lckljb25cIiBbYXJyb3dzXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QXJyb3dzXCIgW2Fycm93c0F1dG9IaWRlXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QXJyb3dzQXV0b0hpZGVcIiBbc3dpcGVdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdTd2lwZVwiIFtmdWxsc2NyZWVuXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3RnVsbHNjcmVlblwiIFtmb3JjZUZ1bGxzY3JlZW5dPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdGb3JjZUZ1bGxzY3JlZW5cIiBbY2xvc2VPbkNsaWNrXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Q2xvc2VPbkNsaWNrXCIgW2Nsb3NlT25Fc2NdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdDbG9zZU9uRXNjXCIgW2tleWJvYXJkTmF2aWdhdGlvbl09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0tleWJvYXJkTmF2aWdhdGlvblwiIFthbmltYXRpb25dPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdBbmltYXRpb25cIiBbYXV0b1BsYXldPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdBdXRvUGxheVwiIFthdXRvUGxheUludGVydmFsXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QXV0b1BsYXlJbnRlcnZhbFwiIFthdXRvUGxheVBhdXNlT25Ib3Zlcl09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0F1dG9QbGF5UGF1c2VPbkhvdmVyXCIgW2luZmluaXR5TW92ZV09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0luZmluaXR5TW92ZVwiIFt6b29tXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Wm9vbVwiIFt6b29tU3RlcF09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld1pvb21TdGVwXCIgW3pvb21NYXhdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdab29tTWF4XCIgW3pvb21NaW5dPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdab29tTWluXCIgW3pvb21Jbkljb25dPVwiY3VycmVudE9wdGlvbnM/Lnpvb21Jbkljb25cIiBbem9vbU91dEljb25dPVwiY3VycmVudE9wdGlvbnM/Lnpvb21PdXRJY29uXCIgW2FjdGlvbnNdPVwiY3VycmVudE9wdGlvbnM/LmFjdGlvbnNcIiBbcm90YXRlXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Um90YXRlXCIgW3JvdGF0ZUxlZnRJY29uXT1cImN1cnJlbnRPcHRpb25zPy5yb3RhdGVMZWZ0SWNvblwiIFtyb3RhdGVSaWdodEljb25dPVwiY3VycmVudE9wdGlvbnM/LnJvdGF0ZVJpZ2h0SWNvblwiIFtkb3dubG9hZF09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0Rvd25sb2FkXCIgW2Rvd25sb2FkSWNvbl09XCJjdXJyZW50T3B0aW9ucz8uZG93bmxvYWRJY29uXCIgW2J1bGxldHNdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdCdWxsZXRzXCIgKG9uQ2xvc2UpPVwib25QcmV2aWV3Q2xvc2UoKVwiIChvbk9wZW4pPVwib25QcmV2aWV3T3BlbigpXCIgKG9uQWN0aXZlQ2hhbmdlKT1cInByZXZpZXdTZWxlY3QoJGV2ZW50KVwiIFtjbGFzcy5uZ3gtZ2FsbGVyeS1hY3RpdmVdPVwicHJldmlld0VuYWJsZWRcIj48L25neC1nYWxsZXJ5LXByZXZpZXc+XG4gICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyddLFxuICAgIHByb3ZpZGVyczogW05neEdhbGxlcnlIZWxwZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrLCBBZnRlclZpZXdJbml0IHtcbiAgICBASW5wdXQoKSBvcHRpb25zOiBOZ3hHYWxsZXJ5T3B0aW9uc1tdO1xuICAgIEBJbnB1dCgpIGltYWdlczogTmd4R2FsbGVyeUltYWdlW107XG5cbiAgICBAT3V0cHV0KCkgaW1hZ2VzUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpbmRleDogbnVtYmVyOyBpbWFnZTogTmd4R2FsbGVyeUltYWdlOyB9PigpO1xuICAgIEBPdXRwdXQoKSBwcmV2aWV3T3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgcHJldmlld0Nsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBwcmV2aWV3Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGluZGV4OiBudW1iZXI7IGltYWdlOiBOZ3hHYWxsZXJ5SW1hZ2U7IH0+KCk7XG5cbiAgICBzbWFsbEltYWdlczogc3RyaW5nW10gfCBTYWZlUmVzb3VyY2VVcmxbXTtcbiAgICBtZWRpdW1JbWFnZXM6IE5neEdhbGxlcnlPcmRlcmVkSW1hZ2VbXTtcbiAgICBiaWdJbWFnZXM6IHN0cmluZ1tdIHwgU2FmZVJlc291cmNlVXJsW107XG4gICAgZGVzY3JpcHRpb25zOiBzdHJpbmdbXTtcbiAgICBsaW5rczogc3RyaW5nW107XG4gICAgbGFiZWxzOiBzdHJpbmdbXTtcblxuICAgIG9sZEltYWdlczogTmd4R2FsbGVyeUltYWdlW107XG4gICAgb2xkSW1hZ2VzTGVuZ3RoID0gMDtcblxuICAgIHNlbGVjdGVkSW5kZXggPSAwO1xuICAgIHByZXZpZXdFbmFibGVkOiBib29sZWFuO1xuXG4gICAgY3VycmVudE9wdGlvbnM6IE5neEdhbGxlcnlPcHRpb25zO1xuXG4gICAgcHJpdmF0ZSBicmVha3BvaW50OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBwcmV2QnJlYWtwb2ludDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgZnVsbFdpZHRoVGltZW91dDogYW55O1xuXG4gICAgQFZpZXdDaGlsZChOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudCkgcHJldmlldzogTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZChOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQpIGltYWdlOiBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZChOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudCkgdGh1Ym1uYWlsczogTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQ7XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJykgd2lkdGg6IHN0cmluZztcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpIGhlaWdodDogc3RyaW5nO1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUubGVmdCcpIGxlZnQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbXlFbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGhlbHBlclNlcnZpY2U6IE5neEdhbGxlcnlIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zLm1hcCgob3B0KSA9PiBuZXcgTmd4R2FsbGVyeU9wdGlvbnMob3B0KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb3J0T3B0aW9ucygpO1xuICAgICAgICB0aGlzLnNldEJyZWFrcG9pbnQoKTtcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKCk7XG4gICAgICAgIHRoaXMuY2hlY2tGdWxsV2lkdGgoKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDxudW1iZXI+dGhpcy5jdXJyZW50T3B0aW9ucy5zdGFydEluZGV4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pbWFnZXMgIT09IHVuZGVmaW5lZCAmJiAodGhpcy5pbWFnZXMubGVuZ3RoICE9PSB0aGlzLm9sZEltYWdlc0xlbmd0aClcbiAgICAgICAgICAgIHx8ICh0aGlzLmltYWdlcyAhPT0gdGhpcy5vbGRJbWFnZXMpKSB7XG4gICAgICAgICAgICB0aGlzLm9sZEltYWdlc0xlbmd0aCA9IHRoaXMuaW1hZ2VzLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMub2xkSW1hZ2VzID0gdGhpcy5pbWFnZXM7XG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0SW1hZ2VzKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlcyAmJiB0aGlzLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlc1JlYWR5LmVtaXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlLnJlc2V0KDxudW1iZXI+dGhpcy5jdXJyZW50T3B0aW9ucy5zdGFydEluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlsc0F1dG9IaWRlICYmIHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlsc1xuICAgICAgICAgICAgICAgICYmIHRoaXMuaW1hZ2VzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy5pbWFnZUFycm93cyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlc2V0VGh1bWJuYWlscygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoZWNrRnVsbFdpZHRoKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpIG9uUmVzaXplKCkge1xuICAgICAgICB0aGlzLnNldEJyZWFrcG9pbnQoKTtcblxuICAgICAgICBpZiAodGhpcy5wcmV2QnJlYWtwb2ludCAhPT0gdGhpcy5icmVha3BvaW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRUaHVtYm5haWxzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLmZ1bGxXaWR0aCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5mdWxsV2lkdGhUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZnVsbFdpZHRoVGltZW91dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZnVsbFdpZHRoVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGdWxsV2lkdGgoKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJbWFnZUhlaWdodCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuY3VycmVudE9wdGlvbnMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzKSA/XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRPcHRpb25zLmltYWdlUGVyY2VudCArICclJyA6ICcxMDAlJztcbiAgICB9XG5cbiAgICBnZXRUaHVtYm5haWxzSGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zICYmIHRoaXMuY3VycmVudE9wdGlvbnMuaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiAnY2FsYygnICsgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzUGVyY2VudCArICclIC0gJ1xuICAgICAgICAgICAgICAgICsgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzTWFyZ2luICsgJ3B4KSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJzEwMCUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGh1bWJuYWlsc01hcmdpblRvcCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLmxheW91dCA9PT0gTmd4R2FsbGVyeUxheW91dC5UaHVtYm5haWxzQm90dG9tKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzTWFyZ2luICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnMHB4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRodW1ibmFpbHNNYXJnaW5Cb3R0b20oKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy5sYXlvdXQgPT09IE5neEdhbGxlcnlMYXlvdXQuVGh1bWJuYWlsc1RvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlsc01hcmdpbiArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJzBweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuUHJldmlldyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zLnByZXZpZXdDdXN0b20pIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMucHJldmlld0N1c3RvbShpbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpZXdFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJldmlldy5vcGVuKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUHJldmlld09wZW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJldmlld09wZW4uZW1pdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmltYWdlICYmIHRoaXMuaW1hZ2UuYXV0b1BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc3RvcEF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblByZXZpZXdDbG9zZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcmV2aWV3RW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByZXZpZXdDbG9zZS5lbWl0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2UgJiYgdGhpcy5pbWFnZS5hdXRvUGxheSkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zdGFydEF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RGcm9tSW1hZ2UoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNlbGVjdChpbmRleCk7XG4gICAgfVxuXG4gICAgc2VsZWN0RnJvbVRodW1ibmFpbHMoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNlbGVjdChpbmRleCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzICYmIHRoaXMuY3VycmVudE9wdGlvbnMucHJldmlld1xuICAgICAgICAgICAgJiYgKCF0aGlzLmN1cnJlbnRPcHRpb25zLmltYWdlIHx8IHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlsc1JlbWFpbmluZ0NvdW50KSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuUHJldmlldyh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0KGluZGV4KTtcbiAgICB9XG5cbiAgICBzaG93TmV4dCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbWFnZS5zaG93TmV4dCgpO1xuICAgIH1cblxuICAgIHNob3dQcmV2KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmltYWdlLnNob3dQcmV2KCk7XG4gICAgfVxuXG4gICAgY2FuU2hvd05leHQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlcyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuY3VycmVudE9wdGlvbnMuaW1hZ2VJbmZpbml0eU1vdmUgfHwgdGhpcy5zZWxlY3RlZEluZGV4IDwgdGhpcy5pbWFnZXMubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhblNob3dQcmV2KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5pbWFnZXMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmN1cnJlbnRPcHRpb25zLmltYWdlSW5maW5pdHlNb3ZlIHx8IHRoaXMuc2VsZWN0ZWRJbmRleCA+IDApID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldmlld1NlbGVjdChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucHJldmlld0NoYW5nZS5lbWl0KHsgaW5kZXgsIGltYWdlOiB0aGlzLmltYWdlc1tpbmRleF0gfSk7XG4gICAgfVxuXG4gICAgbW92ZVRodW1ibmFpbHNSaWdodCgpIHtcbiAgICAgICAgdGhpcy50aHVibW5haWxzLm1vdmVSaWdodCgpO1xuICAgIH1cblxuICAgIG1vdmVUaHVtYm5haWxzTGVmdCgpIHtcbiAgICAgICAgdGhpcy50aHVibW5haWxzLm1vdmVMZWZ0KCk7XG4gICAgfVxuXG4gICAgY2FuTW92ZVRodW1ibmFpbHNSaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGh1Ym1uYWlscy5jYW5Nb3ZlUmlnaHQoKTtcbiAgICB9XG5cbiAgICBjYW5Nb3ZlVGh1bWJuYWlsc0xlZnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRodWJtbmFpbHMuY2FuTW92ZUxlZnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0VGh1bWJuYWlscygpIHtcbiAgICAgICAgaWYgKHRoaXMudGh1Ym1uYWlscykge1xuICAgICAgICAgICAgdGhpcy50aHVibW5haWxzLnJlc2V0KDxudW1iZXI+dGhpcy5jdXJyZW50T3B0aW9ucy5zdGFydEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2VsZWN0KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlc1tpbmRleF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0Z1bGxXaWR0aCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy5mdWxsV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMubGVmdCA9ICgtKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggLVxuICAgICAgICAgICAgICAgIHRoaXMubXlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5pbm5lcldpZHRoKSAvIDIpICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0SW1hZ2VzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBfdGhpczogTmd4R2FsbGVyeUNvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgICAgaW1nLnR5cGUgPSBfdGhpcy5oZWxwZXJTZXJ2aWNlLmdldEZpbGVUeXBlKDxzdHJpbmc+aW1nLnVybCB8fCA8c3RyaW5nPmltZy5iaWcgfHwgPHN0cmluZz5pbWcubWVkaXVtIHx8IDxzdHJpbmc+aW1nLnNtYWxsIHx8ICcnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc21hbGxJbWFnZXMgPSB0aGlzLmltYWdlcy5tYXAoKGltZykgPT4gPHN0cmluZz5pbWcuc21hbGwpO1xuICAgICAgICB0aGlzLm1lZGl1bUltYWdlcyA9IHRoaXMuaW1hZ2VzLm1hcCgoaW1nLCBpKSA9PiBuZXcgTmd4R2FsbGVyeU9yZGVyZWRJbWFnZSh7XG4gICAgICAgICAgICBzcmM6IGltZy5tZWRpdW0sXG4gICAgICAgICAgICB0eXBlOiBpbWcudHlwZSxcbiAgICAgICAgICAgIGluZGV4OiBpXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5iaWdJbWFnZXMgPSB0aGlzLmltYWdlcy5tYXAoKGltZykgPT4gPHN0cmluZz5pbWcuYmlnKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbnMgPSB0aGlzLmltYWdlcy5tYXAoKGltZykgPT4gPHN0cmluZz5pbWcuZGVzY3JpcHRpb24pO1xuICAgICAgICB0aGlzLmxpbmtzID0gdGhpcy5pbWFnZXMubWFwKChpbWcpID0+IDxzdHJpbmc+aW1nLnVybCk7XG4gICAgICAgIHRoaXMubGFiZWxzID0gdGhpcy5pbWFnZXMubWFwKChpbWcpID0+IDxzdHJpbmc+aW1nLmxhYmVsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEJyZWFrcG9pbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJldkJyZWFrcG9pbnQgPSB0aGlzLmJyZWFrcG9pbnQ7XG4gICAgICAgIGxldCBicmVha3BvaW50cztcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludHMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHQpID0+IG9wdC5icmVha3BvaW50ID49IHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChvcHQpID0+IG9wdC5icmVha3BvaW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChicmVha3BvaW50cyAmJiBicmVha3BvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludCA9IGJyZWFrcG9pbnRzLnBvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5icmVha3BvaW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzb3J0T3B0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLm9wdGlvbnMuZmlsdGVyKChhKSA9PiBhLmJyZWFrcG9pbnQgPT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgLi4udGhpcy5vcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGEpID0+IGEuYnJlYWtwb2ludCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5icmVha3BvaW50IC0gYS5icmVha3BvaW50KVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucyA9IG5ldyBOZ3hHYWxsZXJ5T3B0aW9ucyh7fSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHQpID0+IG9wdC5icmVha3BvaW50ID09PSB1bmRlZmluZWQgfHwgb3B0LmJyZWFrcG9pbnQgPj0gdGhpcy5icmVha3BvaW50KVxuICAgICAgICAgICAgICAgIC5tYXAoKG9wdCkgPT4gdGhpcy5jb21iaW5lT3B0aW9ucyh0aGlzLmN1cnJlbnRPcHRpb25zLCBvcHQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2lkdGggPSA8c3RyaW5nPnRoaXMuY3VycmVudE9wdGlvbnMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gPHN0cmluZz50aGlzLmN1cnJlbnRPcHRpb25zLmhlaWdodDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbWJpbmVPcHRpb25zKGZpcnN0OiBOZ3hHYWxsZXJ5T3B0aW9ucywgc2Vjb25kOiBOZ3hHYWxsZXJ5T3B0aW9ucykge1xuICAgICAgICBPYmplY3Qua2V5cyhzZWNvbmQpLm1hcCgodmFsKSA9PiBmaXJzdFt2YWxdID0gc2Vjb25kW3ZhbF0gIT09IHVuZGVmaW5lZCA/IHNlY29uZFt2YWxdIDogZmlyc3RbdmFsXSk7XG4gICAgfVxufVxuIl19