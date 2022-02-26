(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/platform-browser'),require('@angular/common'),exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-gallery-images-video', ['@angular/core','@angular/platform-browser','@angular/common','exports', '@angular/core', '@angular/platform-browser', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.platformBrowser,global.ng.common,global['ngx-gallery-images-video'] = {}, global.ng.core, global.ng.platformBrowser, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,exports, core, platformBrowser, common) { 
var _c0 = ["previewImage"];
function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-arrows", 16);
    ɵngcc0.ɵɵlistener("onPrevClick", function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template_ngx_gallery_arrows_onPrevClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.showPrev(); })("onNextClick", function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template_ngx_gallery_arrows_onNextClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.showNext(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("prevDisabled", !ctx_r0.canShowPrev())("nextDisabled", !ctx_r0.canShowNext())("arrowPrevIcon", ctx_r0.arrowPrevIcon)("arrowNextIcon", ctx_r0.arrowNextIcon);
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_3_Template(rf, ctx) { if (rf & 1) {
    var _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 17);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_3_Template_ngx_gallery_action_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var action_r15 = ctx.$implicit; var ctx_r16 = ɵngcc0.ɵɵnextContext(); return action_r15.onClick($event, ctx_r16.index); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var action_r15 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("icon", action_r15.icon)("disabled", action_r15.disabled)("titleText", action_r15.titleText);
} }
function NgxGalleryPreviewComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "a", 18);
    ɵngcc0.ɵɵelement(1, "i");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("href", ctx_r2.src, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx_r2.downloadIcon, "");
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_5_Template(rf, ctx) { if (rf & 1) {
    var _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 19);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_5_Template_ngx_gallery_action_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.zoomOut(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r3.zoomOutIcon)("disabled", !ctx_r3.canZoomOut());
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_6_Template(rf, ctx) { if (rf & 1) {
    var _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 19);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_6_Template_ngx_gallery_action_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r21); var ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.zoomIn(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r4.zoomInIcon)("disabled", !ctx_r4.canZoomIn());
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_7_Template(rf, ctx) { if (rf & 1) {
    var _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_7_Template_ngx_gallery_action_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r23); var ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.rotateLeft(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r5.rotateLeftIcon);
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_8_Template(rf, ctx) { if (rf & 1) {
    var _r25 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_8_Template_ngx_gallery_action_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r25); var ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.rotateRight(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", ctx_r6.rotateRightIcon);
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_9_Template(rf, ctx) { if (rf & 1) {
    var _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryPreviewComponent_ngx_gallery_action_9_Template_ngx_gallery_action_onClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r27); var ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.manageFullscreen(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("icon", "ngx-gallery-fullscreen " + ctx_r7.fullscreenIcon);
} }
function NgxGalleryPreviewComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    var _r31 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "img", 20, 21);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryPreviewComponent_img_15_Template_img_click_0_listener($event) { return $event.stopPropagation(); })("mouseenter", function NgxGalleryPreviewComponent_img_15_Template_img_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r31); var ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.imageMouseEnter(); })("mouseleave", function NgxGalleryPreviewComponent_img_15_Template_img_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r31); var ctx_r32 = ɵngcc0.ɵɵnextContext(); return ctx_r32.imageMouseLeave(); })("mousedown", function NgxGalleryPreviewComponent_img_15_Template_img_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r31); var ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.mouseDownHandler($event); })("touchstart", function NgxGalleryPreviewComponent_img_15_Template_img_touchstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r31); var ctx_r34 = ɵngcc0.ɵɵnextContext(); return ctx_r34.mouseDownHandler($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("transform", ctx_r8.getTransform())("left", ctx_r8.positionLeft + "px")("top", ctx_r8.positionTop + "px");
    ɵngcc0.ɵɵclassProp("ngx-gallery-active", !ctx_r8.loading)("animation", ctx_r8.animation)("ngx-gallery-grab", ctx_r8.canDragOnZoom());
    ɵngcc0.ɵɵproperty("src", ctx_r8.src, ɵngcc0.ɵɵsanitizeUrl);
} }
function NgxGalleryPreviewComponent_video_16_Template(rf, ctx) { if (rf & 1) {
    var _r38 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "video", 22, 21);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryPreviewComponent_video_16_Template_video_click_0_listener($event) { return $event.stopPropagation(); })("mouseenter", function NgxGalleryPreviewComponent_video_16_Template_video_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r38); var ctx_r37 = ɵngcc0.ɵɵnextContext(); return ctx_r37.imageMouseEnter(); })("mouseleave", function NgxGalleryPreviewComponent_video_16_Template_video_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r38); var ctx_r39 = ɵngcc0.ɵɵnextContext(); return ctx_r39.imageMouseLeave(); })("mousedown", function NgxGalleryPreviewComponent_video_16_Template_video_mousedown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r38); var ctx_r40 = ɵngcc0.ɵɵnextContext(); return ctx_r40.mouseDownHandler($event); })("touchstart", function NgxGalleryPreviewComponent_video_16_Template_video_touchstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r38); var ctx_r41 = ɵngcc0.ɵɵnextContext(); return ctx_r41.mouseDownHandler($event); });
    ɵngcc0.ɵɵelement(2, "source", 23);
    ɵngcc0.ɵɵtext(3, " Your browser does not support the video tag. ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("transform", ctx_r9.getTransform())("left", ctx_r9.positionLeft + "px")("top", ctx_r9.positionTop + "px");
    ɵngcc0.ɵɵclassProp("ngx-gallery-active", !ctx_r9.loading)("animation", ctx_r9.animation)("ngx-gallery-grab", ctx_r9.canDragOnZoom());
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("src", ctx_r9.src, ɵngcc0.ɵɵsanitizeUrl);
} }
function NgxGalleryPreviewComponent_ngx_gallery_bullets_17_Template(rf, ctx) { if (rf & 1) {
    var _r43 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-bullets", 24);
    ɵngcc0.ɵɵlistener("onChange", function NgxGalleryPreviewComponent_ngx_gallery_bullets_17_Template_ngx_gallery_bullets_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r43); var ctx_r42 = ɵngcc0.ɵɵnextContext(); return ctx_r42.showAtIndex($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("count", ctx_r10.images.length)("active", ctx_r10.index);
} }
function NgxGalleryPreviewComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryPreviewComponent_div_18_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r11.description, ɵngcc0.ɵɵsanitizeHtml);
} }
function NgxGalleryImageComponent_div_1_div_1_ngx_gallery_action_2_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 9);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryImageComponent_div_1_div_1_ngx_gallery_action_2_Template_ngx_gallery_action_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); var action_r9 = ctx.$implicit; var image_r3 = ɵngcc0.ɵɵnextContext(2).$implicit; return action_r9.onClick($event, image_r3.index); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var action_r9 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("icon", action_r9.icon)("disabled", action_r9.disabled)("titleText", action_r9.titleText);
} }
function NgxGalleryImageComponent_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryImageComponent_div_1_div_1_div_3_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var image_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r8.descriptions[image_r3.index], ɵngcc0.ɵɵsanitizeHtml);
} }
var _c1 = function (a0, a1, a2, a3) { return { "ngx-gallery-active": a0, "ngx-gallery-inactive-left": a1, "ngx-gallery-inactive-right": a2, "ngx-gallery-clickable": a3 }; };
function NgxGalleryImageComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryImageComponent_div_1_div_1_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var image_r3 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.handleClick($event, image_r3.index); });
    ɵngcc0.ɵɵelementStart(1, "div", 6);
    ɵngcc0.ɵɵtemplate(2, NgxGalleryImageComponent_div_1_div_1_ngx_gallery_action_2_Template, 1, 3, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, NgxGalleryImageComponent_div_1_div_1_div_3_Template, 1, 1, "div", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var image_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("background-image", ctx_r5.getSafeUrl(image_r3.src));
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(5, _c1, ctx_r5.selectedIndex == image_r3.index, ctx_r5.selectedIndex > image_r3.index, ctx_r5.selectedIndex < image_r3.index, ctx_r5.clickable));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.actions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.showDescription && ctx_r5.descriptions[image_r3.index]);
} }
function NgxGalleryImageComponent_div_1_div_2_ngx_gallery_action_5_Template(rf, ctx) { if (rf & 1) {
    var _r24 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 9);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryImageComponent_div_1_div_2_ngx_gallery_action_5_Template_ngx_gallery_action_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r24); var action_r21 = ctx.$implicit; var image_r3 = ɵngcc0.ɵɵnextContext(2).$implicit; return action_r21.onClick($event, image_r3.index); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var action_r21 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("icon", action_r21.icon)("disabled", action_r21.disabled)("titleText", action_r21.titleText);
} }
function NgxGalleryImageComponent_div_1_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryImageComponent_div_1_div_2_div_6_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var image_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r20 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r20.descriptions[image_r3.index], ɵngcc0.ɵɵsanitizeHtml);
} }
function NgxGalleryImageComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r29 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryImageComponent_div_1_div_2_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r29); var image_r3 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.handleClick($event, image_r3.index); });
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
    var image_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(4, _c1, ctx_r6.selectedIndex == image_r3.index, ctx_r6.selectedIndex > image_r3.index, ctx_r6.selectedIndex < image_r3.index, ctx_r6.clickable));
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
    var image_r3 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", image_r3.type === "image");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", image_r3.type === "video");
} }
function NgxGalleryImageComponent_ngx_gallery_bullets_2_Template(rf, ctx) { if (rf & 1) {
    var _r32 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-bullets", 13);
    ɵngcc0.ɵɵlistener("onChange", function NgxGalleryImageComponent_ngx_gallery_bullets_2_Template_ngx_gallery_bullets_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r32); var ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.show($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("count", ctx_r1.images.length)("active", ctx_r1.selectedIndex);
} }
function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template(rf, ctx) { if (rf & 1) {
    var _r34 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-arrows", 14);
    ɵngcc0.ɵɵlistener("onPrevClick", function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onPrevClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r34); var ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.showPrev(); })("onNextClick", function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onNextClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r34); var ctx_r35 = ɵngcc0.ɵɵnextContext(); return ctx_r35.showNext(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("ngx-gallery-image-size-", ctx_r2.size, "");
    ɵngcc0.ɵɵproperty("prevDisabled", !ctx_r2.canShowPrev())("nextDisabled", !ctx_r2.canShowNext())("arrowPrevIcon", ctx_r2.arrowPrevIcon)("arrowNextIcon", ctx_r2.arrowNextIcon);
} }
var _c2 = function (a0, a1) { return { "ngx-gallery-active": a0, "ngx-gallery-clickable": a1 }; };
function NgxGalleryThumbnailsComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 9);
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext();
    var image_r2 = ctx_r8.$implicit;
    var i_r3 = ctx_r8.index;
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("background-image", ctx_r4.getSafeUrl(image_r2));
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(3, _c2, i_r3 == ctx_r4.selectedIndex, ctx_r4.clickable));
} }
var _c3 = function (a0, a1) { return { "ngx-gallery-active selectedVideoBorder": a0, "ngx-gallery-clickable": a1 }; };
function NgxGalleryThumbnailsComponent_div_2_div_3_video_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "video", 13);
    ɵngcc0.ɵɵelement(1, "source", 14);
    ɵngcc0.ɵɵtext(2, " Your browser does not support the video tag. ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    var i_r3 = ctx_r10.index;
    var image_r2 = ctx_r10.$implicit;
    var ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(2, _c3, i_r3 == ctx_r9.selectedIndex, ctx_r9.clickable));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", image_r2, ɵngcc0.ɵɵsanitizeUrl);
} }
function NgxGalleryThumbnailsComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵtemplate(1, NgxGalleryThumbnailsComponent_div_2_div_3_video_1_Template, 3, 5, "video", 11);
    ɵngcc0.ɵɵelement(2, "div", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var image_r2 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.getFileType(image_r2) == "video");
} }
function NgxGalleryThumbnailsComponent_div_2_ngx_gallery_action_5_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-action", 15);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryThumbnailsComponent_div_2_ngx_gallery_action_5_Template_ngx_gallery_action_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); var action_r12 = ctx.$implicit; var i_r3 = ɵngcc0.ɵɵnextContext().index; return action_r12.onClick($event, i_r3); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var action_r12 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("icon", action_r12.icon)("disabled", action_r12.disabled)("titleText", action_r12.titleText);
} }
function NgxGalleryThumbnailsComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "span", 17);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("+", ctx_r7.remainingCountValue, "");
} }
var _c4 = function (a0, a1) { return { "ngx-gallery-active selectedImageBorder": a0, "ngx-gallery-clickable": a1 }; };
function NgxGalleryThumbnailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "a", 3);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryThumbnailsComponent_div_2_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var i_r3 = ctx.index; var ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.handleClick($event, i_r3); });
    ɵngcc0.ɵɵtemplate(2, NgxGalleryThumbnailsComponent_div_2_div_2_Template, 1, 6, "div", 4);
    ɵngcc0.ɵɵtemplate(3, NgxGalleryThumbnailsComponent_div_2_div_3_Template, 3, 1, "div", 5);
    ɵngcc0.ɵɵelementStart(4, "div", 6);
    ɵngcc0.ɵɵtemplate(5, NgxGalleryThumbnailsComponent_div_2_ngx_gallery_action_5_Template, 1, 3, "ngx-gallery-action", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, NgxGalleryThumbnailsComponent_div_2_div_6_Template, 3, 1, "div", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var image_r2 = ctx.$implicit;
    var i_r3 = ctx.index;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("width", ctx_r0.getThumbnailWidth())("height", ctx_r0.getThumbnailHeight())("left", ctx_r0.getThumbnailLeft(i_r3))("top", ctx_r0.getThumbnailTop(i_r3));
    ɵngcc0.ɵɵproperty("href", ctx_r0.hasLink(i_r3) ? ctx_r0.links[i_r3] : "#", ɵngcc0.ɵɵsanitizeUrl)("target", ctx_r0.linkTarget)("ngClass", ɵngcc0.ɵɵpureFunction2(16, _c4, i_r3 == ctx_r0.selectedIndex, ctx_r0.clickable));
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
    var _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-arrows", 18);
    ɵngcc0.ɵɵlistener("onPrevClick", function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onPrevClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.moveLeft(); })("onNextClick", function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_onNextClick_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); var ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.moveRight(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("prevDisabled", !ctx_r1.canMoveLeft())("nextDisabled", !ctx_r1.canMoveRight())("arrowPrevIcon", ctx_r1.arrowPrevIcon)("arrowNextIcon", ctx_r1.arrowNextIcon);
} }
function NgxGalleryComponent_ngx_gallery_image_1_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-image", 3);
    ɵngcc0.ɵɵlistener("onClick", function NgxGalleryComponent_ngx_gallery_image_1_Template_ngx_gallery_image_onClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.openPreview($event); })("onActiveChange", function NgxGalleryComponent_ngx_gallery_image_1_Template_ngx_gallery_image_onActiveChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.selectFromImage($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("height", ctx_r0.getImageHeight());
    ɵngcc0.ɵɵproperty("images", ctx_r0.mediumImages)("clickable", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.preview)("selectedIndex", ctx_r0.selectedIndex)("arrows", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageArrows)("arrowsAutoHide", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageArrowsAutoHide)("arrowPrevIcon", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.arrowNextIcon)("swipe", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageSwipe)("animation", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAnimation)("size", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageSize)("autoPlay", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlay)("autoPlayInterval", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlayInterval)("autoPlayPauseOnHover", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlayPauseOnHover)("infinityMove", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageInfinityMove)("lazyLoading", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.lazyLoading)("actions", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageActions)("descriptions", ctx_r0.descriptions)("showDescription", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageDescription)("bullets", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageBullets);
} }
var _c5 = function () { return []; };
function NgxGalleryComponent_ngx_gallery_thumbnails_2_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-gallery-thumbnails", 4);
    ɵngcc0.ɵɵlistener("onActiveChange", function NgxGalleryComponent_ngx_gallery_thumbnails_2_Template_ngx_gallery_thumbnails_onActiveChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.selectFromThumbnails($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("margin-top", ctx_r1.getThumbnailsMarginTop())("margin-bottom", ctx_r1.getThumbnailsMarginBottom())("height", ctx_r1.getThumbnailsHeight());
    ɵngcc0.ɵɵproperty("images", ctx_r1.smallImages)("links", (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsAsLinks) ? ctx_r1.links : ɵngcc0.ɵɵpureFunction0(26, _c5))("labels", ctx_r1.labels)("linkTarget", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.linkTarget)("selectedIndex", ctx_r1.selectedIndex)("columns", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsColumns)("rows", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsRows)("margin", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailMargin)("arrows", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsArrows)("arrowsAutoHide", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsArrowsAutoHide)("arrowPrevIcon", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.arrowNextIcon)("clickable", (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.image) || (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.preview))("swipe", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsSwipe)("size", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailSize)("moveSize", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsMoveSize)("order", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsOrder)("remainingCount", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsRemainingCount)("lazyLoading", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.lazyLoading)("actions", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailActions);
} }
var _c6 = function (a0) { return { "ngx-gallery-active": a0 }; };
function NgxGalleryBulletsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("click", function NgxGalleryBulletsComponent_div_0_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); var i_r2 = ctx.index; var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.handleChange($event, i_r2); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r2 = ctx.index;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c6, i_r2 == ctx_r0.active));
} }
'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var NgxGalleryHelperService = /** @class */ (function () {
        function NgxGalleryHelperService(renderer) {
            this.renderer = renderer;
            this.swipeHandlers = new Map();
        }
        NgxGalleryHelperService.prototype.manageSwipe = function (status, element, id, nextHandler, prevHandler) {
            var handlers = this.getSwipeHandlers(id);
            // swipeleft and swiperight are available only if hammerjs is included
            try {
                if (status && !handlers) {
                    this.swipeHandlers.set(id, [
                        this.renderer.listen(element.nativeElement, 'swipeleft', function () { return nextHandler(); }),
                        this.renderer.listen(element.nativeElement, 'swiperight', function () { return prevHandler(); })
                    ]);
                }
                else if (!status && handlers) {
                    handlers.map(function (handler) { return handler(); });
                    this.removeSwipeHandlers(id);
                }
            }
            catch (e) { }
        };
        NgxGalleryHelperService.prototype.validateUrl = function (url) {
            if (url.replace) {
                return url.replace(new RegExp(' ', 'g'), '%20')
                    .replace(new RegExp('\'', 'g'), '%27');
            }
            else {
                return url;
            }
        };
        NgxGalleryHelperService.prototype.getBackgroundUrl = function (image) {
            return 'url(\'' + this.validateUrl(image) + '\')';
        };
        NgxGalleryHelperService.prototype.getSwipeHandlers = function (id) {
            return this.swipeHandlers.get(id);
        };
        NgxGalleryHelperService.prototype.removeSwipeHandlers = function (id) {
            this.swipeHandlers.delete(id);
        };
        NgxGalleryHelperService.prototype.getFileType = function (fileSource) {
            if (fileSource.startsWith('data:')) {
                return fileSource.substr(5, Math.min(fileSource.indexOf(';'), fileSource.indexOf('/')) - 5);
            }
            var fileExtension = this.get_url_extension(fileSource);
            if (!fileExtension
                || fileExtension == 'jpeg' || fileExtension == 'jpg'
                || fileExtension == 'png' || fileExtension == 'bmp'
                || fileExtension == 'gif') {
                return 'image';
            }
            else if (fileSource.substr(0, 10) === 'data:video' ||
                fileExtension == 'avi' || fileExtension == 'flv'
                || fileExtension == 'wmv' || fileExtension == 'mov'
                || fileExtension == 'mp4') {
                return 'video';
            }
            return 'unknown';
        };
        NgxGalleryHelperService.prototype.get_url_extension = function (url) {
            return url.split(/[#?]/)[0].split('.').pop().trim();
        };
NgxGalleryHelperService.ɵfac = function NgxGalleryHelperService_Factory(t) { return new (t || NgxGalleryHelperService)(ɵngcc0.ɵɵinject(ɵngcc0.Renderer2)); };
NgxGalleryHelperService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NgxGalleryHelperService, factory: function (t) { return NgxGalleryHelperService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryHelperService, [{
        type: core.Injectable
    }], function () { return [{ type: ɵngcc0.Renderer2 }]; }, null); })();
        return NgxGalleryHelperService;
    }());
    NgxGalleryHelperService.ctorParameters = function () { return [
        { type: core.Renderer2 }
    ]; };

    var NgxGalleryAnimation = /** @class */ (function () {
        function NgxGalleryAnimation() {
        }
        return NgxGalleryAnimation;
    }());
    NgxGalleryAnimation.Fade = 'fade';
    NgxGalleryAnimation.Slide = 'slide';
    NgxGalleryAnimation.Rotate = 'rotate';
    NgxGalleryAnimation.Zoom = 'zoom';

    var NgxGalleryImageSize = /** @class */ (function () {
        function NgxGalleryImageSize() {
        }
        return NgxGalleryImageSize;
    }());
    NgxGalleryImageSize.Cover = 'cover';
    NgxGalleryImageSize.Contain = 'contain';

    var NgxGalleryLayout = /** @class */ (function () {
        function NgxGalleryLayout() {
        }
        return NgxGalleryLayout;
    }());
    NgxGalleryLayout.ThumbnailsTop = 'thumbnails-top';
    NgxGalleryLayout.ThumbnailsBottom = 'thumbnails-bottom';

    var NgxGalleryOrder = /** @class */ (function () {
        function NgxGalleryOrder() {
        }
        return NgxGalleryOrder;
    }());
    NgxGalleryOrder.Column = 1;
    NgxGalleryOrder.Row = 2;
    NgxGalleryOrder.Page = 3;

    var NgxGalleryAction = /** @class */ (function () {
        function NgxGalleryAction(action) {
            this.icon = action.icon;
            this.disabled = action.disabled ? action.disabled : false;
            this.titleText = action.titleText ? action.titleText : '';
            this.onClick = action.onClick;
        }
        return NgxGalleryAction;
    }());

    var NgxGalleryOptions = /** @class */ (function () {
        function NgxGalleryOptions(obj) {
            var preventDefaults = obj.breakpoint === undefined ? false : true;
            function use(source, defaultValue) {
                return obj && (source !== undefined || preventDefaults) ? source : defaultValue;
            }
            this.breakpoint = use(obj.breakpoint, undefined);
            this.width = use(obj.width, '500px');
            this.height = use(obj.height, '400px');
            this.fullWidth = use(obj.fullWidth, false);
            this.layout = use(obj.layout, NgxGalleryLayout.ThumbnailsBottom);
            this.startIndex = use(obj.startIndex, 0);
            this.linkTarget = use(obj.linkTarget, '_blank');
            this.lazyLoading = use(obj.lazyLoading, true);
            this.image = use(obj.image, true);
            this.imagePercent = use(obj.imagePercent, 75);
            this.imageArrows = use(obj.imageArrows, true);
            this.imageArrowsAutoHide = use(obj.imageArrowsAutoHide, false);
            this.imageSwipe = use(obj.imageSwipe, false);
            this.imageAnimation = use(obj.imageAnimation, NgxGalleryAnimation.Fade);
            this.imageSize = use(obj.imageSize, NgxGalleryImageSize.Cover);
            this.imageAutoPlay = use(obj.imageAutoPlay, false);
            this.imageAutoPlayInterval = use(obj.imageAutoPlayInterval, 2000);
            this.imageAutoPlayPauseOnHover = use(obj.imageAutoPlayPauseOnHover, false);
            this.imageInfinityMove = use(obj.imageInfinityMove, false);
            if (obj && obj.imageActions && obj.imageActions.length) {
                obj.imageActions = obj.imageActions.map(function (action) { return new NgxGalleryAction(action); });
            }
            this.imageActions = use(obj.imageActions, []);
            this.imageDescription = use(obj.imageDescription, false);
            this.imageBullets = use(obj.imageBullets, false);
            this.thumbnails = use(obj.thumbnails, true);
            this.thumbnailsColumns = use(obj.thumbnailsColumns, 4);
            this.thumbnailsRows = use(obj.thumbnailsRows, 1);
            this.thumbnailsPercent = use(obj.thumbnailsPercent, 25);
            this.thumbnailsMargin = use(obj.thumbnailsMargin, 10);
            this.thumbnailsArrows = use(obj.thumbnailsArrows, true);
            this.thumbnailsArrowsAutoHide = use(obj.thumbnailsArrowsAutoHide, false);
            this.thumbnailsSwipe = use(obj.thumbnailsSwipe, false);
            this.thumbnailsMoveSize = use(obj.thumbnailsMoveSize, 1);
            this.thumbnailsOrder = use(obj.thumbnailsOrder, NgxGalleryOrder.Column);
            this.thumbnailsRemainingCount = use(obj.thumbnailsRemainingCount, false);
            this.thumbnailsAsLinks = use(obj.thumbnailsAsLinks, false);
            this.thumbnailsAutoHide = use(obj.thumbnailsAutoHide, false);
            this.thumbnailMargin = use(obj.thumbnailMargin, 10);
            this.thumbnailSize = use(obj.thumbnailSize, NgxGalleryImageSize.Cover);
            if (obj && obj.thumbnailActions && obj.thumbnailActions.length) {
                obj.thumbnailActions = obj.thumbnailActions.map(function (action) { return new NgxGalleryAction(action); });
            }
            this.thumbnailActions = use(obj.thumbnailActions, []);
            this.preview = use(obj.preview, true);
            this.previewDescription = use(obj.previewDescription, true);
            this.previewArrows = use(obj.previewArrows, true);
            this.previewArrowsAutoHide = use(obj.previewArrowsAutoHide, false);
            this.previewSwipe = use(obj.previewSwipe, false);
            this.previewFullscreen = use(obj.previewFullscreen, false);
            this.previewForceFullscreen = use(obj.previewForceFullscreen, false);
            this.previewCloseOnClick = use(obj.previewCloseOnClick, false);
            this.previewCloseOnEsc = use(obj.previewCloseOnEsc, false);
            this.previewKeyboardNavigation = use(obj.previewKeyboardNavigation, false);
            this.previewAnimation = use(obj.previewAnimation, true);
            this.previewAutoPlay = use(obj.previewAutoPlay, false);
            this.previewAutoPlayInterval = use(obj.previewAutoPlayInterval, 2000);
            this.previewAutoPlayPauseOnHover = use(obj.previewAutoPlayPauseOnHover, false);
            this.previewInfinityMove = use(obj.previewInfinityMove, false);
            this.previewZoom = use(obj.previewZoom, false);
            this.previewZoomStep = use(obj.previewZoomStep, 0.1);
            this.previewZoomMax = use(obj.previewZoomMax, 2);
            this.previewZoomMin = use(obj.previewZoomMin, 0.5);
            this.previewRotate = use(obj.previewRotate, false);
            this.previewDownload = use(obj.previewDownload, false);
            this.previewCustom = use(obj.previewCustom, undefined);
            this.previewBullets = use(obj.previewBullets, false);
            this.arrowPrevIcon = use(obj.arrowPrevIcon, 'fa fa-arrow-circle-left');
            this.arrowNextIcon = use(obj.arrowNextIcon, 'fa fa-arrow-circle-right');
            this.closeIcon = use(obj.closeIcon, 'fa fa-times-circle');
            this.fullscreenIcon = use(obj.fullscreenIcon, 'fa fa-arrows-alt');
            this.spinnerIcon = use(obj.spinnerIcon, 'fa fa-spinner fa-pulse fa-3x fa-fw');
            this.zoomInIcon = use(obj.zoomInIcon, 'fa fa-search-plus');
            this.zoomOutIcon = use(obj.zoomOutIcon, 'fa fa-search-minus');
            this.rotateLeftIcon = use(obj.rotateLeftIcon, 'fa fa-undo');
            this.rotateRightIcon = use(obj.rotateRightIcon, 'fa fa-repeat');
            this.downloadIcon = use(obj.downloadIcon, 'fa fa-arrow-circle-down');
            if (obj && obj.actions && obj.actions.length) {
                obj.actions = obj.actions.map(function (action) { return new NgxGalleryAction(action); });
            }
            this.actions = use(obj.actions, []);
        }
        return NgxGalleryOptions;
    }());

    var NgxGalleryOrderedImage = /** @class */ (function () {
        function NgxGalleryOrderedImage(obj) {
            this.src = obj.src;
            this.type = obj.type;
            this.index = obj.index;
        }
        return NgxGalleryOrderedImage;
    }());

    var NgxGalleryPreviewComponent = /** @class */ (function () {
        function NgxGalleryPreviewComponent(sanitization, elementRef, helperService, renderer, changeDetectorRef) {
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
            this.onOpen = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.onActiveChange = new core.EventEmitter();
            this.isOpen = false;
            this.initialX = 0;
            this.initialY = 0;
            this.initialLeft = 0;
            this.initialTop = 0;
            this.isMove = false;
        }
        NgxGalleryPreviewComponent.prototype.ngOnInit = function () {
            if (this.arrows && this.arrowsAutoHide) {
                this.arrows = false;
            }
        };
        NgxGalleryPreviewComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes['swipe']) {
                this.helperService.manageSwipe(this.swipe, this.elementRef, 'preview', function () { return _this.showNext(); }, function () { return _this.showPrev(); });
            }
        };
        NgxGalleryPreviewComponent.prototype.ngOnDestroy = function () {
            if (this.keyDownListener) {
                this.keyDownListener();
            }
        };
        NgxGalleryPreviewComponent.prototype.onMouseEnter = function () {
            if (this.arrowsAutoHide && !this.arrows) {
                this.arrows = true;
            }
        };
        NgxGalleryPreviewComponent.prototype.onMouseLeave = function () {
            if (this.arrowsAutoHide && this.arrows) {
                this.arrows = false;
            }
        };
        NgxGalleryPreviewComponent.prototype.onKeyDown = function (e) {
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
        };
        NgxGalleryPreviewComponent.prototype.open = function (index) {
            var _this = this;
            this.onOpen.emit();
            this.index = index;
            this.isOpen = true;
            this.show(true);
            if (this.forceFullscreen) {
                this.manageFullscreen();
            }
            this.keyDownListener = this.renderer.listen("window", "keydown", function (e) { return _this.onKeyDown(e); });
        };
        NgxGalleryPreviewComponent.prototype.close = function () {
            this.isOpen = false;
            this.closeFullscreen();
            this.onClose.emit();
            this.stopAutoPlay();
            if (this.keyDownListener) {
                this.keyDownListener();
            }
        };
        NgxGalleryPreviewComponent.prototype.imageMouseEnter = function () {
            if (this.autoPlay && this.autoPlayPauseOnHover) {
                this.stopAutoPlay();
            }
        };
        NgxGalleryPreviewComponent.prototype.imageMouseLeave = function () {
            if (this.autoPlay && this.autoPlayPauseOnHover) {
                this.startAutoPlay();
            }
        };
        NgxGalleryPreviewComponent.prototype.startAutoPlay = function () {
            var _this = this;
            if (this.autoPlay) {
                this.stopAutoPlay();
                this.timer = setTimeout(function () {
                    if (!_this.showNext()) {
                        _this.index = -1;
                        _this.showNext();
                    }
                }, this.autoPlayInterval);
            }
        };
        NgxGalleryPreviewComponent.prototype.stopAutoPlay = function () {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        };
        NgxGalleryPreviewComponent.prototype.showAtIndex = function (index) {
            this.index = index;
            this.show();
        };
        NgxGalleryPreviewComponent.prototype.showNext = function () {
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
        };
        NgxGalleryPreviewComponent.prototype.showPrev = function () {
            if (this.canShowPrev()) {
                this.index--;
                if (this.index < 0) {
                    this.index = this.images.length - 1;
                }
                this.show();
            }
        };
        NgxGalleryPreviewComponent.prototype.canShowNext = function () {
            if (this.loading) {
                return false;
            }
            else if (this.images) {
                return this.infinityMove || this.index < this.images.length - 1 ? true : false;
            }
            else {
                return false;
            }
        };
        NgxGalleryPreviewComponent.prototype.canShowPrev = function () {
            if (this.loading) {
                return false;
            }
            else if (this.images) {
                return this.infinityMove || this.index > 0 ? true : false;
            }
            else {
                return false;
            }
        };
        NgxGalleryPreviewComponent.prototype.manageFullscreen = function () {
            if (this.fullscreen || this.forceFullscreen) {
                var doc = document;
                if (!doc.fullscreenElement && !doc.mozFullScreenElement
                    && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                    this.openFullscreen();
                }
                else {
                    this.closeFullscreen();
                }
            }
        };
        NgxGalleryPreviewComponent.prototype.getSafeUrl = function (image) {
            return image.substr(0, 10) === 'data:image' ?
                image : this.sanitization.bypassSecurityTrustUrl(image);
        };
        NgxGalleryPreviewComponent.prototype.getFileType = function (fileSource) {
            return this.helperService.getFileType(fileSource);
        };
        NgxGalleryPreviewComponent.prototype.zoomIn = function () {
            if (this.canZoomIn()) {
                this.zoomValue += this.zoomStep;
                if (this.zoomValue > this.zoomMax) {
                    this.zoomValue = this.zoomMax;
                }
            }
        };
        NgxGalleryPreviewComponent.prototype.zoomOut = function () {
            if (this.canZoomOut()) {
                this.zoomValue -= this.zoomStep;
                if (this.zoomValue < this.zoomMin) {
                    this.zoomValue = this.zoomMin;
                }
                if (this.zoomValue <= 1) {
                    this.resetPosition();
                }
            }
        };
        NgxGalleryPreviewComponent.prototype.rotateLeft = function () {
            this.rotateValue -= 90;
        };
        NgxGalleryPreviewComponent.prototype.rotateRight = function () {
            this.rotateValue += 90;
        };
        NgxGalleryPreviewComponent.prototype.getTransform = function () {
            return this.sanitization.bypassSecurityTrustStyle('scale(' + this.zoomValue + ') rotate(' + this.rotateValue + 'deg)');
        };
        NgxGalleryPreviewComponent.prototype.canZoomIn = function () {
            return this.zoomValue < this.zoomMax ? true : false;
        };
        NgxGalleryPreviewComponent.prototype.canZoomOut = function () {
            return this.zoomValue > this.zoomMin ? true : false;
        };
        NgxGalleryPreviewComponent.prototype.canDragOnZoom = function () {
            return this.zoom && this.zoomValue > 1;
        };
        NgxGalleryPreviewComponent.prototype.mouseDownHandler = function (e) {
            if (this.canDragOnZoom()) {
                this.initialX = this.getClientX(e);
                this.initialY = this.getClientY(e);
                this.initialLeft = this.positionLeft;
                this.initialTop = this.positionTop;
                this.isMove = true;
                e.preventDefault();
            }
        };
        NgxGalleryPreviewComponent.prototype.mouseUpHandler = function (e) {
            this.isMove = false;
        };
        NgxGalleryPreviewComponent.prototype.mouseMoveHandler = function (e) {
            if (this.isMove) {
                this.positionLeft = this.initialLeft + (this.getClientX(e) - this.initialX);
                this.positionTop = this.initialTop + (this.getClientY(e) - this.initialY);
            }
        };
        NgxGalleryPreviewComponent.prototype.getClientX = function (e) {
            return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
        };
        NgxGalleryPreviewComponent.prototype.getClientY = function (e) {
            return e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
        };
        NgxGalleryPreviewComponent.prototype.resetPosition = function () {
            if (this.zoom) {
                this.positionLeft = 0;
                this.positionTop = 0;
            }
        };
        NgxGalleryPreviewComponent.prototype.isKeyboardNext = function (e) {
            return e.keyCode === 39 ? true : false;
        };
        NgxGalleryPreviewComponent.prototype.isKeyboardPrev = function (e) {
            return e.keyCode === 37 ? true : false;
        };
        NgxGalleryPreviewComponent.prototype.isKeyboardEsc = function (e) {
            return e.keyCode === 27 ? true : false;
        };
        NgxGalleryPreviewComponent.prototype.openFullscreen = function () {
            var element = document.documentElement;
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
        };
        NgxGalleryPreviewComponent.prototype.closeFullscreen = function () {
            if (this.isFullscreen()) {
                var doc = document;
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
        };
        NgxGalleryPreviewComponent.prototype.isFullscreen = function () {
            var doc = document;
            return doc.fullscreenElement || doc.webkitFullscreenElement
                || doc.mozFullScreenElement || doc.msFullscreenElement;
        };
        NgxGalleryPreviewComponent.prototype.show = function (first) {
            var _this = this;
            if (first === void 0) { first = false; }
            this.loading = true;
            this.stopAutoPlay();
            this.onActiveChange.emit(this.index);
            if (first || !this.animation) {
                this._show();
            }
            else {
                setTimeout(function () { return _this._show(); }, 600);
            }
        };
        NgxGalleryPreviewComponent.prototype._show = function () {
            var _this = this;
            this.zoomValue = 1;
            this.rotateValue = 0;
            this.resetPosition();
            this.src = this.getSafeUrl(this.images[this.index]);
            this.type = this.getFileType(this.images[this.index]);
            this.srcIndex = this.index;
            this.description = this.descriptions[this.index];
            this.changeDetectorRef.markForCheck();
            setTimeout(function () {
                if (_this.isLoaded(_this.previewImage.nativeElement) || _this.type == 'video') {
                    _this.loading = false;
                    _this.startAutoPlay();
                    _this.changeDetectorRef.markForCheck();
                }
                else if (_this.type == 'video') {
                }
                else {
                    setTimeout(function () {
                        if (_this.loading) {
                            _this.showSpinner = true;
                            _this.changeDetectorRef.markForCheck();
                        }
                    });
                    _this.previewImage.nativeElement.onload = function () {
                        _this.loading = false;
                        _this.showSpinner = false;
                        _this.previewImage.nativeElement.onload = null;
                        _this.startAutoPlay();
                        _this.changeDetectorRef.markForCheck();
                    };
                }
            });
        };
        NgxGalleryPreviewComponent.prototype.isLoaded = function (img) {
            if (!img.complete) {
                return false;
            }
            if (typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 0) {
                return false;
            }
            return true;
        };
NgxGalleryPreviewComponent.ɵfac = function NgxGalleryPreviewComponent_Factory(t) { return new (t || NgxGalleryPreviewComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NgxGalleryHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NgxGalleryPreviewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryPreviewComponent, selectors: [["ngx-gallery-preview"]], viewQuery: function NgxGalleryPreviewComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
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
    } }, directives: function () { return [ɵngcc2.NgIf, ɵngcc2.NgForOf, NgxGalleryActionComponent, NgxGalleryArrowsComponent, NgxGalleryBulletsComponent]; }, styles: [".ngx-gallery-active[_nghost-%COMP%]{background:rgba(0,0,0,.7);display:inline-block;height:100%;left:0;position:fixed;top:0;width:100%;z-index:10000}[_nghost-%COMP%]{display:none}[_nghost-%COMP%]     .ngx-gallery-arrow{font-size:50px}[_nghost-%COMP%]     ngx-gallery-bullets{align-items:center;height:5%;padding:0}.ngx-gallery-preview-img[_ngcontent-%COMP%]{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;max-height:90%;max-width:90%;opacity:0;transition:transform .5s;user-select:none}.ngx-gallery-preview-img.animation[_ngcontent-%COMP%]{transition:opacity .5s linear,transform .5s}.ngx-gallery-preview-img.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab[_ngcontent-%COMP%]{cursor:grab;cursor:-webkit-grab}.ngx-gallery-icon.ngx-gallery-spinner[_ngcontent-%COMP%]{display:inline-block;font-size:50px;left:0}[_nghost-%COMP%]     .ngx-gallery-preview-top{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;position:absolute;user-select:none;width:100%}[_nghost-%COMP%]     .ngx-gallery-preview-icons{float:right}[_nghost-%COMP%]     .ngx-gallery-preview-icons .ngx-gallery-icon{cursor:pointer;font-size:25px;margin-right:10px;margin-top:10px;position:relative;text-decoration:none}[_nghost-%COMP%]     .ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled{cursor:default;opacity:.4}.ngx-spinner-wrapper[_ngcontent-%COMP%]{display:none;height:50px;width:50px}.ngx-spinner-wrapper.ngx-gallery-active[_ngcontent-%COMP%]{display:inline-block}.ngx-gallery-center[_ngcontent-%COMP%]{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.ngx-gallery-preview-text[_ngcontent-%COMP%]{background:rgba(0,0,0,.7);color:#fff;flex:0 1 auto;font-size:16px;padding:10px;text-align:center;width:100%;z-index:10}.ngx-gallery-preview-wrapper[_ngcontent-%COMP%]{display:flex;flex-flow:column;height:100%;width:100%}.ngx-gallery-preview-img-wrapper[_ngcontent-%COMP%]{flex:1 1 auto;position:relative}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryPreviewComponent, [{
        type: core.Component,
        args: [{
                selector: 'ngx-gallery-preview',
                template: "<ngx-gallery-arrows *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n    <div class=\"ngx-gallery-preview-top\">\n        <div class=\"ngx-gallery-preview-icons\">\n            <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, index)\"></ngx-gallery-action>\n            <a *ngIf=\"download && src\" [href]=\"src\" class=\"ngx-gallery-icon\" aria-hidden=\"true\" download>\n                <i class=\"ngx-gallery-icon-content {{ downloadIcon }}\"></i>\n            </a>\n            <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomOutIcon\" [disabled]=\"!canZoomOut()\" (onClick)=\"zoomOut()\"></ngx-gallery-action>\n            <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomInIcon\" [disabled]=\"!canZoomIn()\" (onClick)=\"zoomIn()\"></ngx-gallery-action>\n            <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateLeftIcon\" (onClick)=\"rotateLeft()\"></ngx-gallery-action>\n            <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateRightIcon\" (onClick)=\"rotateRight()\"></ngx-gallery-action>\n            <ngx-gallery-action *ngIf=\"fullscreen\" [icon]=\"'ngx-gallery-fullscreen ' + fullscreenIcon\" (onClick)=\"manageFullscreen()\"></ngx-gallery-action>\n            <ngx-gallery-action [icon]=\"'ngx-gallery-close ' + closeIcon\" (onClick)=\"close()\"></ngx-gallery-action>\n        </div>\n    </div>\n    <div class=\"ngx-spinner-wrapper ngx-gallery-center\" [class.ngx-gallery-active]=\"showSpinner\">\n        <i class=\"ngx-gallery-icon ngx-gallery-spinner {{spinnerIcon}}\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"ngx-gallery-preview-wrapper\" (click)=\"closeOnClick && close()\" (mouseup)=\"mouseUpHandler($event)\" (mousemove)=\"mouseMoveHandler($event)\" (touchend)=\"mouseUpHandler($event)\" (touchmove)=\"mouseMoveHandler($event)\">\n        <div class=\"ngx-gallery-preview-img-wrapper\">\n            <img *ngIf=\"src && type == 'image'\" #previewImage class=\"ngx-gallery-preview-img ngx-gallery-center\" [src]=\"src\" (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\" (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\" [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\" [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\"/>\n            <video *ngIf=\"src && type == 'video'\" #previewImage controls style=\"width: 100%; height: 100%;\" \n                class=\"ngx-gallery-preview-img ngx-gallery-center\"\n                (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\" (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\" \n                [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\" [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\"> \n                <source [src]=\"src\">\n                Your browser does not support the video tag.\n            </video>\n            <ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"index\" (onChange)=\"showAtIndex($event)\"></ngx-gallery-bullets>\n        </div>\n        <div class=\"ngx-gallery-preview-text\" *ngIf=\"showDescription && description\" [innerHTML]=\"description\" (click)=\"$event.stopPropagation()\"></div>\n    </div>",
                styles: [":host(.ngx-gallery-active){background:rgba(0,0,0,.7);display:inline-block;height:100%;left:0;position:fixed;top:0;width:100%;z-index:10000}:host{display:none}:host ::ng-deep .ngx-gallery-arrow{font-size:50px}:host ::ng-deep ngx-gallery-bullets{align-items:center;height:5%;padding:0}.ngx-gallery-preview-img{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;max-height:90%;max-width:90%;opacity:0;transition:transform .5s;user-select:none}.ngx-gallery-preview-img.animation{transition:opacity .5s linear,transform .5s}.ngx-gallery-preview-img.ngx-gallery-active{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab{cursor:grab;cursor:-webkit-grab}.ngx-gallery-icon.ngx-gallery-spinner{display:inline-block;font-size:50px;left:0}:host ::ng-deep .ngx-gallery-preview-top{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;position:absolute;user-select:none;width:100%}:host ::ng-deep .ngx-gallery-preview-icons{float:right}:host ::ng-deep .ngx-gallery-preview-icons .ngx-gallery-icon{cursor:pointer;font-size:25px;margin-right:10px;margin-top:10px;position:relative;text-decoration:none}:host ::ng-deep .ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled{cursor:default;opacity:.4}.ngx-spinner-wrapper{display:none;height:50px;width:50px}.ngx-spinner-wrapper.ngx-gallery-active{display:inline-block}.ngx-gallery-center{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.ngx-gallery-preview-text{background:rgba(0,0,0,.7);color:#fff;flex:0 1 auto;font-size:16px;padding:10px;text-align:center;width:100%;z-index:10}.ngx-gallery-preview-wrapper{display:flex;flex-flow:column;height:100%;width:100%}.ngx-gallery-preview-img-wrapper{flex:1 1 auto;position:relative}"]
            }]
    }], function () { return [{ type: ɵngcc1.DomSanitizer }, { type: ɵngcc0.ElementRef }, { type: NgxGalleryHelperService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { onOpen: [{
            type: core.Output
        }], onClose: [{
            type: core.Output
        }], onActiveChange: [{
            type: core.Output
        }], arrows: [{
            type: core.Input
        }], onMouseEnter: [{
            type: core.HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: core.HostListener,
            args: ['mouseleave']
        }], images: [{
            type: core.Input
        }], descriptions: [{
            type: core.Input
        }], showDescription: [{
            type: core.Input
        }], arrowsAutoHide: [{
            type: core.Input
        }], swipe: [{
            type: core.Input
        }], fullscreen: [{
            type: core.Input
        }], forceFullscreen: [{
            type: core.Input
        }], closeOnClick: [{
            type: core.Input
        }], closeOnEsc: [{
            type: core.Input
        }], keyboardNavigation: [{
            type: core.Input
        }], arrowPrevIcon: [{
            type: core.Input
        }], arrowNextIcon: [{
            type: core.Input
        }], closeIcon: [{
            type: core.Input
        }], fullscreenIcon: [{
            type: core.Input
        }], spinnerIcon: [{
            type: core.Input
        }], autoPlay: [{
            type: core.Input
        }], autoPlayInterval: [{
            type: core.Input
        }], autoPlayPauseOnHover: [{
            type: core.Input
        }], infinityMove: [{
            type: core.Input
        }], zoom: [{
            type: core.Input
        }], zoomStep: [{
            type: core.Input
        }], zoomMax: [{
            type: core.Input
        }], zoomMin: [{
            type: core.Input
        }], zoomInIcon: [{
            type: core.Input
        }], zoomOutIcon: [{
            type: core.Input
        }], animation: [{
            type: core.Input
        }], actions: [{
            type: core.Input
        }], rotate: [{
            type: core.Input
        }], rotateLeftIcon: [{
            type: core.Input
        }], rotateRightIcon: [{
            type: core.Input
        }], download: [{
            type: core.Input
        }], downloadIcon: [{
            type: core.Input
        }], bullets: [{
            type: core.Input
        }], previewImage: [{
            type: core.ViewChild,
            args: ['previewImage']
        }] }); })();
        return NgxGalleryPreviewComponent;
    }());
    NgxGalleryPreviewComponent.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer },
        { type: core.ElementRef },
        { type: NgxGalleryHelperService },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };
    NgxGalleryPreviewComponent.propDecorators = {
        images: [{ type: core.Input }],
        descriptions: [{ type: core.Input }],
        showDescription: [{ type: core.Input }],
        arrows: [{ type: core.Input }],
        arrowsAutoHide: [{ type: core.Input }],
        swipe: [{ type: core.Input }],
        fullscreen: [{ type: core.Input }],
        forceFullscreen: [{ type: core.Input }],
        closeOnClick: [{ type: core.Input }],
        closeOnEsc: [{ type: core.Input }],
        keyboardNavigation: [{ type: core.Input }],
        arrowPrevIcon: [{ type: core.Input }],
        arrowNextIcon: [{ type: core.Input }],
        closeIcon: [{ type: core.Input }],
        fullscreenIcon: [{ type: core.Input }],
        spinnerIcon: [{ type: core.Input }],
        autoPlay: [{ type: core.Input }],
        autoPlayInterval: [{ type: core.Input }],
        autoPlayPauseOnHover: [{ type: core.Input }],
        infinityMove: [{ type: core.Input }],
        zoom: [{ type: core.Input }],
        zoomStep: [{ type: core.Input }],
        zoomMax: [{ type: core.Input }],
        zoomMin: [{ type: core.Input }],
        zoomInIcon: [{ type: core.Input }],
        zoomOutIcon: [{ type: core.Input }],
        animation: [{ type: core.Input }],
        actions: [{ type: core.Input }],
        rotate: [{ type: core.Input }],
        rotateLeftIcon: [{ type: core.Input }],
        rotateRightIcon: [{ type: core.Input }],
        download: [{ type: core.Input }],
        downloadIcon: [{ type: core.Input }],
        bullets: [{ type: core.Input }],
        onOpen: [{ type: core.Output }],
        onClose: [{ type: core.Output }],
        onActiveChange: [{ type: core.Output }],
        previewImage: [{ type: core.ViewChild, args: ['previewImage',] }],
        onMouseEnter: [{ type: core.HostListener, args: ['mouseenter',] }],
        onMouseLeave: [{ type: core.HostListener, args: ['mouseleave',] }]
    };

    var NgxGalleryImageComponent = /** @class */ (function () {
        function NgxGalleryImageComponent(sanitization, elementRef, helperService) {
            this.sanitization = sanitization;
            this.elementRef = elementRef;
            this.helperService = helperService;
            this.onClick = new core.EventEmitter();
            this.onActiveChange = new core.EventEmitter();
            this.canChangeImage = true;
        }
        NgxGalleryImageComponent.prototype.ngOnInit = function () {
            if (this.arrows && this.arrowsAutoHide) {
                this.arrows = false;
            }
            if (this.autoPlay) {
                this.startAutoPlay();
            }
        };
        NgxGalleryImageComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes['swipe']) {
                this.helperService.manageSwipe(this.swipe, this.elementRef, 'image', function () { return _this.showNext(); }, function () { return _this.showPrev(); });
            }
        };
        NgxGalleryImageComponent.prototype.onMouseEnter = function () {
            if (this.arrowsAutoHide && !this.arrows) {
                this.arrows = true;
            }
            if (this.autoPlay && this.autoPlayPauseOnHover) {
                this.stopAutoPlay();
            }
        };
        NgxGalleryImageComponent.prototype.onMouseLeave = function () {
            if (this.arrowsAutoHide && this.arrows) {
                this.arrows = false;
            }
            if (this.autoPlay && this.autoPlayPauseOnHover) {
                this.startAutoPlay();
            }
        };
        NgxGalleryImageComponent.prototype.reset = function (index) {
            this.selectedIndex = index;
        };
        NgxGalleryImageComponent.prototype.getImages = function () {
            if (!this.images) {
                return [];
            }
            if (this.lazyLoading) {
                var indexes_1 = [this.selectedIndex];
                var prevIndex = this.selectedIndex - 1;
                if (prevIndex === -1 && this.infinityMove) {
                    indexes_1.push(this.images.length - 1);
                }
                else if (prevIndex >= 0) {
                    indexes_1.push(prevIndex);
                }
                var nextIndex = this.selectedIndex + 1;
                if (nextIndex == this.images.length && this.infinityMove) {
                    indexes_1.push(0);
                }
                else if (nextIndex < this.images.length) {
                    indexes_1.push(nextIndex);
                }
                return this.images.filter(function (img, i) { return indexes_1.indexOf(i) != -1; });
            }
            else {
                return this.images;
            }
        };
        NgxGalleryImageComponent.prototype.startAutoPlay = function () {
            var _this = this;
            this.stopAutoPlay();
            this.timer = setInterval(function () {
                if (!_this.showNext()) {
                    _this.selectedIndex = -1;
                    _this.showNext();
                }
            }, this.autoPlayInterval);
        };
        NgxGalleryImageComponent.prototype.stopAutoPlay = function () {
            if (this.timer) {
                clearInterval(this.timer);
            }
        };
        NgxGalleryImageComponent.prototype.handleClick = function (event, index) {
            if (this.clickable) {
                this.onClick.emit(index);
                event.stopPropagation();
                event.preventDefault();
            }
        };
        NgxGalleryImageComponent.prototype.show = function (index) {
            this.selectedIndex = index;
            this.onActiveChange.emit(this.selectedIndex);
            this.setChangeTimeout();
        };
        NgxGalleryImageComponent.prototype.showNext = function () {
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
        };
        NgxGalleryImageComponent.prototype.showPrev = function () {
            if (this.canShowPrev() && this.canChangeImage) {
                this.selectedIndex--;
                if (this.selectedIndex < 0) {
                    this.selectedIndex = this.images.length - 1;
                }
                this.onActiveChange.emit(this.selectedIndex);
                this.setChangeTimeout();
            }
        };
        NgxGalleryImageComponent.prototype.setChangeTimeout = function () {
            var _this = this;
            this.canChangeImage = false;
            var timeout = 1000;
            if (this.animation === NgxGalleryAnimation.Slide
                || this.animation === NgxGalleryAnimation.Fade) {
                timeout = 500;
            }
            setTimeout(function () {
                _this.canChangeImage = true;
            }, timeout);
        };
        NgxGalleryImageComponent.prototype.canShowNext = function () {
            if (this.images) {
                return this.infinityMove || this.selectedIndex < this.images.length - 1
                    ? true : false;
            }
            else {
                return false;
            }
        };
        NgxGalleryImageComponent.prototype.canShowPrev = function () {
            if (this.images) {
                return this.infinityMove || this.selectedIndex > 0 ? true : false;
            }
            else {
                return false;
            }
        };
        NgxGalleryImageComponent.prototype.getSafeUrl = function (image) {
            return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
        };
        NgxGalleryImageComponent.prototype.getFileType = function (fileSource) {
            return this.helperService.getFileType(fileSource);
        };
NgxGalleryImageComponent.ɵfac = function NgxGalleryImageComponent_Factory(t) { return new (t || NgxGalleryImageComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NgxGalleryHelperService)); };
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
    } }, directives: function () { return [ɵngcc2.NgForOf, ɵngcc2.NgIf, ɵngcc2.NgClass, NgxGalleryActionComponent, NgxGalleryBulletsComponent, NgxGalleryArrowsComponent]; }, styles: ["[_nghost-%COMP%]{display:inline-block;position:relative;width:100%}.ngx-gallery-image-wrapper[_ngcontent-%COMP%]{left:0;overflow:hidden}.ngx-gallery-image[_ngcontent-%COMP%], .ngx-gallery-image-wrapper[_ngcontent-%COMP%]{height:100%;position:absolute;top:0;width:100%}.ngx-gallery-image[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat}.ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{z-index:1000}.ngx-gallery-image-size-cover[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{background-size:cover}.ngx-gallery-image-size-contain[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{background-size:contain}.ngx-gallery-animation-fade[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{left:0;opacity:0;transition:.5s ease-in-out}.ngx-gallery-animation-fade[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1}.ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{transition:.5s ease-in-out}.ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{left:0}.ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-inactive-left[_ngcontent-%COMP%]{left:-100%}.ngx-gallery-animation-slide[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-inactive-right[_ngcontent-%COMP%]{left:100%}.ngx-gallery-animation-rotate[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{left:0;opacity:0;transform:scale(3.5) rotate(90deg);transition:1s ease}.ngx-gallery-animation-rotate[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1;transform:scale(1) rotate(0deg)}.ngx-gallery-animation-zoom[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{left:0;opacity:0;transform:scale(2.5);transition:1s ease}.ngx-gallery-animation-zoom[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1;transform:scale(1)}.ngx-gallery-image-text[_ngcontent-%COMP%]{background:rgba(0,0,0,.7);bottom:0;color:#fff;font-size:16px;padding:10px;position:absolute;text-align:center;width:100%;z-index:10}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryImageComponent, [{
        type: core.Component,
        args: [{
                selector: 'ngx-gallery-image',
                template: "<div class=\"ngx-gallery-image-wrapper ngx-gallery-animation-{{animation}} ngx-gallery-image-size-{{size}}\">\n    <div *ngFor=\"let image of getImages(); let i = index;\">\n        <div *ngIf=\"image.type === 'image'\" class=\"ngx-gallery-image\" [ngClass]=\"{ 'ngx-gallery-active': selectedIndex == image.index, 'ngx-gallery-inactive-left': selectedIndex > image.index, 'ngx-gallery-inactive-right': selectedIndex < image.index, 'ngx-gallery-clickable': clickable }\"\n            [style.background-image]=\"getSafeUrl(image.src)\" (click)=\"handleClick($event, image.index)\">\n            <div class=\"ngx-gallery-icons-wrapper\">\n                <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\"\n                    [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, image.index)\"></ngx-gallery-action>\n            </div>\n            <div class=\"ngx-gallery-image-text\" *ngIf=\"showDescription && descriptions[image.index]\" [innerHTML]=\"descriptions[image.index]\"\n                (click)=\"$event.stopPropagation()\"></div>\n        </div>\n        <div *ngIf=\"image.type === 'video'\" class=\"ngx-gallery-image\" [ngClass]=\"{ 'ngx-gallery-active': selectedIndex == image.index, 'ngx-gallery-inactive-left': selectedIndex > image.index, 'ngx-gallery-inactive-right': selectedIndex < image.index, 'ngx-gallery-clickable': clickable }\"\n            (click)=\"handleClick($event, image.index)\">\n            <video controls style=\"width: 100%; height: 100%;\">\n                <source [src]=\"image.src\">\n                Your browser does not support the video tag.\n            </video>\n            <div class=\"ngx-gallery-icons-wrapper\">\n                <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\"\n                    [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, image.index)\"></ngx-gallery-action>\n            </div>\n            <div class=\"ngx-gallery-image-text\" *ngIf=\"showDescription && descriptions[image.index]\" [innerHTML]=\"descriptions[image.index]\"\n                (click)=\"$event.stopPropagation()\"></div>\n        </div>\n    </div>\n</div>\n<ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"selectedIndex\" (onChange)=\"show($event)\"></ngx-gallery-bullets>\n<ngx-gallery-arrows class=\"ngx-gallery-image-size-{{size}}\" *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n",
                styles: [":host{display:inline-block;position:relative;width:100%}.ngx-gallery-image-wrapper{left:0;overflow:hidden}.ngx-gallery-image,.ngx-gallery-image-wrapper{height:100%;position:absolute;top:0;width:100%}.ngx-gallery-image{background-position:50%;background-repeat:no-repeat}.ngx-gallery-image.ngx-gallery-active{z-index:1000}.ngx-gallery-image-size-cover .ngx-gallery-image{background-size:cover}.ngx-gallery-image-size-contain .ngx-gallery-image{background-size:contain}.ngx-gallery-animation-fade .ngx-gallery-image{left:0;opacity:0;transition:.5s ease-in-out}.ngx-gallery-animation-fade .ngx-gallery-image.ngx-gallery-active{opacity:1}.ngx-gallery-animation-slide .ngx-gallery-image{transition:.5s ease-in-out}.ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-active{left:0}.ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-left{left:-100%}.ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-right{left:100%}.ngx-gallery-animation-rotate .ngx-gallery-image{left:0;opacity:0;transform:scale(3.5) rotate(90deg);transition:1s ease}.ngx-gallery-animation-rotate .ngx-gallery-image.ngx-gallery-active{opacity:1;transform:scale(1) rotate(0deg)}.ngx-gallery-animation-zoom .ngx-gallery-image{left:0;opacity:0;transform:scale(2.5);transition:1s ease}.ngx-gallery-animation-zoom .ngx-gallery-image.ngx-gallery-active{opacity:1;transform:scale(1)}.ngx-gallery-image-text{background:rgba(0,0,0,.7);bottom:0;color:#fff;font-size:16px;padding:10px;position:absolute;text-align:center;width:100%;z-index:10}"]
            }]
    }], function () { return [{ type: ɵngcc1.DomSanitizer }, { type: ɵngcc0.ElementRef }, { type: NgxGalleryHelperService }]; }, { onClick: [{
            type: core.Output
        }], onActiveChange: [{
            type: core.Output
        }], arrows: [{
            type: core.Input
        }], onMouseEnter: [{
            type: core.HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: core.HostListener,
            args: ['mouseleave']
        }], selectedIndex: [{
            type: core.Input
        }], images: [{
            type: core.Input
        }], clickable: [{
            type: core.Input
        }], arrowsAutoHide: [{
            type: core.Input
        }], swipe: [{
            type: core.Input
        }], animation: [{
            type: core.Input
        }], size: [{
            type: core.Input
        }], arrowPrevIcon: [{
            type: core.Input
        }], arrowNextIcon: [{
            type: core.Input
        }], autoPlay: [{
            type: core.Input
        }], autoPlayInterval: [{
            type: core.Input
        }], autoPlayPauseOnHover: [{
            type: core.Input
        }], infinityMove: [{
            type: core.Input
        }], lazyLoading: [{
            type: core.Input
        }], actions: [{
            type: core.Input
        }], descriptions: [{
            type: core.Input
        }], showDescription: [{
            type: core.Input
        }], bullets: [{
            type: core.Input
        }] }); })();
        return NgxGalleryImageComponent;
    }());
    NgxGalleryImageComponent.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer },
        { type: core.ElementRef },
        { type: NgxGalleryHelperService }
    ]; };
    NgxGalleryImageComponent.propDecorators = {
        images: [{ type: core.Input }],
        clickable: [{ type: core.Input }],
        selectedIndex: [{ type: core.Input }],
        arrows: [{ type: core.Input }],
        arrowsAutoHide: [{ type: core.Input }],
        swipe: [{ type: core.Input }],
        animation: [{ type: core.Input }],
        size: [{ type: core.Input }],
        arrowPrevIcon: [{ type: core.Input }],
        arrowNextIcon: [{ type: core.Input }],
        autoPlay: [{ type: core.Input }],
        autoPlayInterval: [{ type: core.Input }],
        autoPlayPauseOnHover: [{ type: core.Input }],
        infinityMove: [{ type: core.Input }],
        lazyLoading: [{ type: core.Input }],
        actions: [{ type: core.Input }],
        descriptions: [{ type: core.Input }],
        showDescription: [{ type: core.Input }],
        bullets: [{ type: core.Input }],
        onClick: [{ type: core.Output }],
        onActiveChange: [{ type: core.Output }],
        onMouseEnter: [{ type: core.HostListener, args: ['mouseenter',] }],
        onMouseLeave: [{ type: core.HostListener, args: ['mouseleave',] }]
    };

    var NgxGalleryThumbnailsComponent = /** @class */ (function () {
        function NgxGalleryThumbnailsComponent(sanitization, elementRef, helperService) {
            this.sanitization = sanitization;
            this.elementRef = elementRef;
            this.helperService = helperService;
            this.minStopIndex = 0;
            this.onActiveChange = new core.EventEmitter();
            this.index = 0;
        }
        NgxGalleryThumbnailsComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes['selectedIndex']) {
                this.validateIndex();
            }
            if (changes['swipe']) {
                this.helperService.manageSwipe(this.swipe, this.elementRef, 'thumbnails', function () { return _this.moveRight(); }, function () { return _this.moveLeft(); });
            }
            if (this.images) {
                this.remainingCountValue = this.images.length - (this.rows * this.columns);
            }
        };
        NgxGalleryThumbnailsComponent.prototype.onMouseEnter = function () {
            this.mouseenter = true;
        };
        NgxGalleryThumbnailsComponent.prototype.onMouseLeave = function () {
            this.mouseenter = false;
        };
        NgxGalleryThumbnailsComponent.prototype.reset = function (index) {
            this.selectedIndex = index;
            this.setDefaultPosition();
            this.index = 0;
            this.validateIndex();
        };
        NgxGalleryThumbnailsComponent.prototype.getImages = function () {
            if (!this.images) {
                return [];
            }
            if (this.remainingCount) {
                return this.images.slice(0, this.rows * this.columns);
            }
            else if (this.lazyLoading && this.order != NgxGalleryOrder.Row) {
                var stopIndex = 0;
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
        };
        NgxGalleryThumbnailsComponent.prototype.handleClick = function (event, index) {
            if (!this.hasLink(index)) {
                this.selectedIndex = index;
                this.onActiveChange.emit(index);
                event.stopPropagation();
                event.preventDefault();
            }
        };
        NgxGalleryThumbnailsComponent.prototype.hasLink = function (index) {
            if (this.links && this.links.length && this.links[index])
                return true;
        };
        NgxGalleryThumbnailsComponent.prototype.moveRight = function () {
            if (this.canMoveRight()) {
                this.index += this.moveSize;
                var maxIndex = this.getMaxIndex() - this.columns;
                if (this.index > maxIndex) {
                    this.index = maxIndex;
                }
                this.setThumbnailsPosition();
            }
        };
        NgxGalleryThumbnailsComponent.prototype.moveLeft = function () {
            if (this.canMoveLeft()) {
                this.index -= this.moveSize;
                if (this.index < 0) {
                    this.index = 0;
                }
                this.setThumbnailsPosition();
            }
        };
        NgxGalleryThumbnailsComponent.prototype.canMoveRight = function () {
            return this.index + this.columns < this.getMaxIndex() ? true : false;
        };
        NgxGalleryThumbnailsComponent.prototype.canMoveLeft = function () {
            return this.index !== 0 ? true : false;
        };
        NgxGalleryThumbnailsComponent.prototype.getThumbnailLeft = function (index) {
            var calculatedIndex;
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
        };
        NgxGalleryThumbnailsComponent.prototype.getThumbnailTop = function (index) {
            var calculatedIndex;
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
        };
        NgxGalleryThumbnailsComponent.prototype.getThumbnailWidth = function () {
            return this.getThumbnailDimension(this.columns);
        };
        NgxGalleryThumbnailsComponent.prototype.getThumbnailHeight = function () {
            return this.getThumbnailDimension(this.rows);
        };
        NgxGalleryThumbnailsComponent.prototype.setThumbnailsPosition = function () {
            this.thumbnailsLeft = -((100 / this.columns) * this.index) + '%';
            this.thumbnailsMarginLeft = -((this.margin - (((this.columns - 1)
                * this.margin) / this.columns)) * this.index) + 'px';
        };
        NgxGalleryThumbnailsComponent.prototype.setDefaultPosition = function () {
            this.thumbnailsLeft = '0px';
            this.thumbnailsMarginLeft = '0px';
        };
        NgxGalleryThumbnailsComponent.prototype.canShowArrows = function () {
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
        };
        NgxGalleryThumbnailsComponent.prototype.validateIndex = function () {
            if (this.images) {
                var newIndex = void 0;
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
                    var maxIndex = this.getMaxIndex() - this.columns;
                    this.index = newIndex > maxIndex ? maxIndex : newIndex;
                    this.setThumbnailsPosition();
                }
            }
        };
        NgxGalleryThumbnailsComponent.prototype.getSafeUrl = function (image) {
            return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
        };
        NgxGalleryThumbnailsComponent.prototype.getThumbnailPosition = function (index, count) {
            return this.getSafeStyle('calc(' + ((100 / count) * index) + '% + '
                + ((this.margin - (((count - 1) * this.margin) / count)) * index) + 'px)');
        };
        NgxGalleryThumbnailsComponent.prototype.getThumbnailDimension = function (count) {
            if (this.margin !== 0) {
                return this.getSafeStyle('calc(' + (100 / count) + '% - '
                    + (((count - 1) * this.margin) / count) + 'px)');
            }
            else {
                return this.getSafeStyle('calc(' + (100 / count) + '% + 1px)');
            }
        };
        NgxGalleryThumbnailsComponent.prototype.getMaxIndex = function () {
            if (this.order == NgxGalleryOrder.Page) {
                var maxIndex = (Math.floor(this.images.length / this.getVisibleCount()) * this.columns);
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
        };
        NgxGalleryThumbnailsComponent.prototype.getVisibleCount = function () {
            return this.columns * this.rows;
        };
        NgxGalleryThumbnailsComponent.prototype.getSafeStyle = function (value) {
            return this.sanitization.bypassSecurityTrustStyle(value);
        };
        NgxGalleryThumbnailsComponent.prototype.getFileType = function (fileSource) {
            return this.helperService.getFileType(fileSource);
        };
NgxGalleryThumbnailsComponent.ɵfac = function NgxGalleryThumbnailsComponent_Factory(t) { return new (t || NgxGalleryThumbnailsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NgxGalleryHelperService)); };
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
    } }, directives: function () { return [ɵngcc2.NgForOf, ɵngcc2.NgIf, ɵngcc2.NgClass, NgxGalleryActionComponent, NgxGalleryArrowsComponent]; }, styles: ["[_nghost-%COMP%]{display:inline-block;position:relative;width:100%}.ngx-gallery-thumbnails-wrapper[_ngcontent-%COMP%]{height:100%;overflow:hidden;position:absolute;width:100%}.ngx-gallery-thumbnails[_ngcontent-%COMP%]{height:100%;left:0;position:absolute;transform:translateX(0);transition:transform .5s ease-in-out;width:100%;will-change:transform}.ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;height:100%;position:absolute;text-decoration:none}.ngx-gallery-thumbnail-size-cover[_ngcontent-%COMP%]   .ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{background-size:cover}.ngx-gallery-thumbnail-size-contain[_ngcontent-%COMP%]   .ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{background-size:contain}.ngx-gallery-remaining-count-overlay[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.4);height:100%;left:0;position:absolute;top:0;width:100%}.ngx-gallery-remaining-count[_ngcontent-%COMP%]{color:#fff;font-size:30px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.videoWrapperMain[_ngcontent-%COMP%]   .videoPlayThumbnail[_ngcontent-%COMP%]{background-image:url(https://www.myaccelerate.io/images/play-btn.png)!important;background-position:50%!important;background-repeat:no-repeat!important;background-size:cover!important;bottom:0!important;height:32%!important;left:0!important;margin:auto!important;position:absolute!important;right:0!important;top:0!important;width:20%!important}.videoWrapperMain[_ngcontent-%COMP%]   .selectedVideoBorder[_ngcontent-%COMP%]{border:1px solid #a8579a!important}.selectedImageBorder[_ngcontent-%COMP%]{border:3px solid #a8579a!important}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryThumbnailsComponent, [{
        type: core.Component,
        args: [{
                selector: 'ngx-gallery-thumbnails',
                template: "<div class=\"ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-{{size}}\">\n  <div class=\"ngx-gallery-thumbnails\" [style.transform]=\"'translateX(' + thumbnailsLeft + ')'\"\n    [style.marginLeft]=\"thumbnailsMarginLeft\">\n    <div *ngFor=\"let image of getImages(); let i = index;\">\n      <a [href]=\"hasLink(i) ? links[i] : '#'\" [target]=\"linkTarget\" class=\"ngx-gallery-thumbnail\"\n        [style.width]=\"getThumbnailWidth()\" (click)=\"handleClick($event, i)\" [style.height]=\"getThumbnailHeight()\"\n        [style.left]=\"getThumbnailLeft(i)\" [style.top]=\"getThumbnailTop(i)\"\n        [ngClass]=\"{ 'ngx-gallery-active selectedImageBorder': i == selectedIndex, 'ngx-gallery-clickable': clickable }\"\n        [attr.aria-label]=\"labels[i]\">\n        <div *ngIf=\"getFileType(image) == 'image'\" [style.background-image]=\"getSafeUrl(image)\"\n          class=\"ngx-gallery-thumbnail\"\n          [ngClass]=\"{ 'ngx-gallery-active': i == selectedIndex, 'ngx-gallery-clickable': clickable }\"\n          style=\"width: 100% !important; height: 100% !important; position:absolute !important;\"></div>\n        <div *ngIf=\"getFileType(image) == 'video'\" class=\"videoWrapperMain\">\n          <video *ngIf=\"getFileType(image) == 'video'\" class=\"ngx-gallery-thumbnail\"\n            [ngClass]=\"{ 'ngx-gallery-active selectedVideoBorder': i == selectedIndex, 'ngx-gallery-clickable': clickable }\"\n            style=\"width: 100% !important; height: 100% !important; position:absolute !important;background-color:#907b90b3 !important;\">\n            <source [src]=\"image\">\n            Your browser does not support the video tag.\n          </video>\n          <div class=\"videoPlayThumbnail\"></div>\n        </div>\n        <div class=\"ngx-gallery-icons-wrapper\">\n          <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\"\n            [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, i)\"></ngx-gallery-action>\n        </div>\n        <div class=\"ngx-gallery-remaining-count-overlay\"\n          *ngIf=\"remainingCount && remainingCountValue && (i == (rows * columns) - 1)\">\n          <span class=\"ngx-gallery-remaining-count\">+{{remainingCountValue}}</span>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n<ngx-gallery-arrows *ngIf=\"canShowArrows()\" (onPrevClick)=\"moveLeft()\" (onNextClick)=\"moveRight()\"\n  [prevDisabled]=\"!canMoveLeft()\" [nextDisabled]=\"!canMoveRight()\" [arrowPrevIcon]=\"arrowPrevIcon\"\n  [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n",
                styles: [":host{display:inline-block;position:relative;width:100%}.ngx-gallery-thumbnails-wrapper{height:100%;overflow:hidden;position:absolute;width:100%}.ngx-gallery-thumbnails{height:100%;left:0;position:absolute;transform:translateX(0);transition:transform .5s ease-in-out;width:100%;will-change:transform}.ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-position:50%;background-repeat:no-repeat;height:100%;position:absolute;text-decoration:none}.ngx-gallery-thumbnail-size-cover .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:cover}.ngx-gallery-thumbnail-size-contain .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:contain}.ngx-gallery-remaining-count-overlay{background-color:rgba(0,0,0,.4);height:100%;left:0;position:absolute;top:0;width:100%}.ngx-gallery-remaining-count{color:#fff;font-size:30px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.videoWrapperMain .videoPlayThumbnail{background-image:url(https://www.myaccelerate.io/images/play-btn.png)!important;background-position:50%!important;background-repeat:no-repeat!important;background-size:cover!important;bottom:0!important;height:32%!important;left:0!important;margin:auto!important;position:absolute!important;right:0!important;top:0!important;width:20%!important}.videoWrapperMain .selectedVideoBorder{border:1px solid #a8579a!important}.selectedImageBorder{border:3px solid #a8579a!important}"]
            }]
    }], function () { return [{ type: ɵngcc1.DomSanitizer }, { type: ɵngcc0.ElementRef }, { type: NgxGalleryHelperService }]; }, { onActiveChange: [{
            type: core.Output
        }], onMouseEnter: [{
            type: core.HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: core.HostListener,
            args: ['mouseleave']
        }], selectedIndex: [{
            type: core.Input
        }], images: [{
            type: core.Input
        }], links: [{
            type: core.Input
        }], labels: [{
            type: core.Input
        }], linkTarget: [{
            type: core.Input
        }], columns: [{
            type: core.Input
        }], rows: [{
            type: core.Input
        }], arrows: [{
            type: core.Input
        }], arrowsAutoHide: [{
            type: core.Input
        }], margin: [{
            type: core.Input
        }], clickable: [{
            type: core.Input
        }], swipe: [{
            type: core.Input
        }], size: [{
            type: core.Input
        }], arrowPrevIcon: [{
            type: core.Input
        }], arrowNextIcon: [{
            type: core.Input
        }], moveSize: [{
            type: core.Input
        }], order: [{
            type: core.Input
        }], remainingCount: [{
            type: core.Input
        }], lazyLoading: [{
            type: core.Input
        }], actions: [{
            type: core.Input
        }] }); })();
        return NgxGalleryThumbnailsComponent;
    }());
    NgxGalleryThumbnailsComponent.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer },
        { type: core.ElementRef },
        { type: NgxGalleryHelperService }
    ]; };
    NgxGalleryThumbnailsComponent.propDecorators = {
        images: [{ type: core.Input }],
        links: [{ type: core.Input }],
        labels: [{ type: core.Input }],
        linkTarget: [{ type: core.Input }],
        columns: [{ type: core.Input }],
        rows: [{ type: core.Input }],
        arrows: [{ type: core.Input }],
        arrowsAutoHide: [{ type: core.Input }],
        margin: [{ type: core.Input }],
        selectedIndex: [{ type: core.Input }],
        clickable: [{ type: core.Input }],
        swipe: [{ type: core.Input }],
        size: [{ type: core.Input }],
        arrowPrevIcon: [{ type: core.Input }],
        arrowNextIcon: [{ type: core.Input }],
        moveSize: [{ type: core.Input }],
        order: [{ type: core.Input }],
        remainingCount: [{ type: core.Input }],
        lazyLoading: [{ type: core.Input }],
        actions: [{ type: core.Input }],
        onActiveChange: [{ type: core.Output }],
        onMouseEnter: [{ type: core.HostListener, args: ['mouseenter',] }],
        onMouseLeave: [{ type: core.HostListener, args: ['mouseleave',] }]
    };

    var NgxGalleryComponent = /** @class */ (function () {
        function NgxGalleryComponent(myElement, helperService) {
            this.myElement = myElement;
            this.helperService = helperService;
            this.imagesReady = new core.EventEmitter();
            this.change = new core.EventEmitter();
            this.previewOpen = new core.EventEmitter();
            this.previewClose = new core.EventEmitter();
            this.previewChange = new core.EventEmitter();
            this.oldImagesLength = 0;
            this.selectedIndex = 0;
            this.breakpoint = undefined;
            this.prevBreakpoint = undefined;
        }
        NgxGalleryComponent.prototype.ngOnInit = function () {
            if (this.options != undefined) {
                this.options = this.options.map(function (opt) { return new NgxGalleryOptions(opt); });
            }
            this.sortOptions();
            this.setBreakpoint();
            this.setOptions();
            this.checkFullWidth();
            if (this.currentOptions) {
                this.selectedIndex = this.currentOptions.startIndex;
            }
        };
        NgxGalleryComponent.prototype.ngDoCheck = function () {
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
        };
        NgxGalleryComponent.prototype.ngAfterViewInit = function () {
            this.checkFullWidth();
        };
        NgxGalleryComponent.prototype.onResize = function () {
            var _this_1 = this;
            this.setBreakpoint();
            if (this.prevBreakpoint !== this.breakpoint) {
                this.setOptions();
                this.resetThumbnails();
            }
            if (this.currentOptions && this.currentOptions.fullWidth) {
                if (this.fullWidthTimeout) {
                    clearTimeout(this.fullWidthTimeout);
                }
                this.fullWidthTimeout = setTimeout(function () {
                    _this_1.checkFullWidth();
                }, 200);
            }
        };
        NgxGalleryComponent.prototype.getImageHeight = function () {
            return (this.currentOptions && this.currentOptions.thumbnails) ?
                this.currentOptions.imagePercent + '%' : '100%';
        };
        NgxGalleryComponent.prototype.getThumbnailsHeight = function () {
            if (this.currentOptions && this.currentOptions.image) {
                return 'calc(' + this.currentOptions.thumbnailsPercent + '% - '
                    + this.currentOptions.thumbnailsMargin + 'px)';
            }
            else {
                return '100%';
            }
        };
        NgxGalleryComponent.prototype.getThumbnailsMarginTop = function () {
            if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsBottom) {
                return this.currentOptions.thumbnailsMargin + 'px';
            }
            else {
                return '0px';
            }
        };
        NgxGalleryComponent.prototype.getThumbnailsMarginBottom = function () {
            if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsTop) {
                return this.currentOptions.thumbnailsMargin + 'px';
            }
            else {
                return '0px';
            }
        };
        NgxGalleryComponent.prototype.openPreview = function (index) {
            if (this.currentOptions.previewCustom) {
                this.currentOptions.previewCustom(index);
            }
            else {
                this.previewEnabled = true;
                this.preview.open(index);
            }
        };
        NgxGalleryComponent.prototype.onPreviewOpen = function () {
            this.previewOpen.emit();
            if (this.image && this.image.autoPlay) {
                this.image.stopAutoPlay();
            }
        };
        NgxGalleryComponent.prototype.onPreviewClose = function () {
            this.previewEnabled = false;
            this.previewClose.emit();
            if (this.image && this.image.autoPlay) {
                this.image.startAutoPlay();
            }
        };
        NgxGalleryComponent.prototype.selectFromImage = function (index) {
            this.select(index);
        };
        NgxGalleryComponent.prototype.selectFromThumbnails = function (index) {
            this.select(index);
            if (this.currentOptions && this.currentOptions.thumbnails && this.currentOptions.preview
                && (!this.currentOptions.image || this.currentOptions.thumbnailsRemainingCount)) {
                this.openPreview(this.selectedIndex);
            }
        };
        NgxGalleryComponent.prototype.show = function (index) {
            this.select(index);
        };
        NgxGalleryComponent.prototype.showNext = function () {
            this.image.showNext();
        };
        NgxGalleryComponent.prototype.showPrev = function () {
            this.image.showPrev();
        };
        NgxGalleryComponent.prototype.canShowNext = function () {
            if (this.images && this.currentOptions) {
                return (this.currentOptions.imageInfinityMove || this.selectedIndex < this.images.length - 1)
                    ? true : false;
            }
            else {
                return false;
            }
        };
        NgxGalleryComponent.prototype.canShowPrev = function () {
            if (this.images && this.currentOptions) {
                return (this.currentOptions.imageInfinityMove || this.selectedIndex > 0) ? true : false;
            }
            else {
                return false;
            }
        };
        NgxGalleryComponent.prototype.previewSelect = function (index) {
            this.previewChange.emit({ index: index, image: this.images[index] });
        };
        NgxGalleryComponent.prototype.moveThumbnailsRight = function () {
            this.thubmnails.moveRight();
        };
        NgxGalleryComponent.prototype.moveThumbnailsLeft = function () {
            this.thubmnails.moveLeft();
        };
        NgxGalleryComponent.prototype.canMoveThumbnailsRight = function () {
            return this.thubmnails.canMoveRight();
        };
        NgxGalleryComponent.prototype.canMoveThumbnailsLeft = function () {
            return this.thubmnails.canMoveLeft();
        };
        NgxGalleryComponent.prototype.resetThumbnails = function () {
            if (this.thubmnails) {
                this.thubmnails.reset(this.currentOptions.startIndex);
            }
        };
        NgxGalleryComponent.prototype.select = function (index) {
            this.selectedIndex = index;
            this.change.emit({
                index: index,
                image: this.images[index]
            });
        };
        NgxGalleryComponent.prototype.checkFullWidth = function () {
            if (this.currentOptions && this.currentOptions.fullWidth) {
                this.width = document.body.clientWidth + 'px';
                this.left = (-(document.body.clientWidth -
                    this.myElement.nativeElement.parentNode.innerWidth) / 2) + 'px';
            }
        };
        NgxGalleryComponent.prototype.setImages = function () {
            var _this = this;
            this.images.forEach(function (img) {
                img.type = _this.helperService.getFileType(img.url || img.big || img.medium || img.small || '');
            });
            this.smallImages = this.images.map(function (img) { return img.small; });
            this.mediumImages = this.images.map(function (img, i) { return new NgxGalleryOrderedImage({
                src: img.medium,
                type: img.type,
                index: i
            }); });
            this.bigImages = this.images.map(function (img) { return img.big; });
            this.descriptions = this.images.map(function (img) { return img.description; });
            this.links = this.images.map(function (img) { return img.url; });
            this.labels = this.images.map(function (img) { return img.label; });
        };
        NgxGalleryComponent.prototype.setBreakpoint = function () {
            this.prevBreakpoint = this.breakpoint;
            var breakpoints;
            if (typeof window !== 'undefined') {
                if (this.options != undefined) {
                    breakpoints = this.options.filter(function (opt) { return opt.breakpoint >= window.innerWidth; })
                        .map(function (opt) { return opt.breakpoint; });
                }
            }
            if (breakpoints && breakpoints.length) {
                this.breakpoint = breakpoints.pop();
            }
            else {
                this.breakpoint = undefined;
            }
        };
        NgxGalleryComponent.prototype.sortOptions = function () {
            if (this.options != undefined) {
                this.options = __spread(this.options.filter(function (a) { return a.breakpoint === undefined; }), this.options
                    .filter(function (a) { return a.breakpoint !== undefined; })
                    .sort(function (a, b) { return b.breakpoint - a.breakpoint; }));
            }
        };
        NgxGalleryComponent.prototype.setOptions = function () {
            var _this_1 = this;
            this.currentOptions = new NgxGalleryOptions({});
            if (this.options != undefined) {
                this.options
                    .filter(function (opt) { return opt.breakpoint === undefined || opt.breakpoint >= _this_1.breakpoint; })
                    .map(function (opt) { return _this_1.combineOptions(_this_1.currentOptions, opt); });
            }
            this.width = this.currentOptions.width;
            this.height = this.currentOptions.height;
        };
        NgxGalleryComponent.prototype.combineOptions = function (first, second) {
            Object.keys(second).map(function (val) { return first[val] = second[val] !== undefined ? second[val] : first[val]; });
        };
NgxGalleryComponent.ɵfac = function NgxGalleryComponent_Factory(t) { return new (t || NgxGalleryComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NgxGalleryHelperService)); };
NgxGalleryComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryComponent, selectors: [["ngx-gallery"]], viewQuery: function NgxGalleryComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NgxGalleryPreviewComponent, true);
        ɵngcc0.ɵɵviewQuery(NgxGalleryImageComponent, true);
        ɵngcc0.ɵɵviewQuery(NgxGalleryThumbnailsComponent, true);
    } if (rf & 2) {
        var _t;
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
    } }, directives: [ɵngcc2.NgIf, NgxGalleryPreviewComponent, NgxGalleryImageComponent, NgxGalleryThumbnailsComponent], styles: ["[_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{float:left}[_nghost-%COMP%]     *{box-sizing:border-box}[_nghost-%COMP%]     .ngx-gallery-icon{color:#fff;display:inline-block;font-size:25px;position:absolute;z-index:2000}[_nghost-%COMP%]     .ngx-gallery-icon .ngx-gallery-icon-content{display:block}[_nghost-%COMP%]     .ngx-gallery-clickable{cursor:pointer}[_nghost-%COMP%]     .ngx-gallery-icons-wrapper .ngx-gallery-icon{cursor:pointer;font-size:20px;margin-right:5px;margin-top:5px;position:relative}[_nghost-%COMP%]     .ngx-gallery-icons-wrapper{float:right}[_nghost-%COMP%]   .ngx-gallery-layout[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}[_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-top[_ngcontent-%COMP%]   ngx-gallery-image[_ngcontent-%COMP%]{order:2}[_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-bottom[_ngcontent-%COMP%]   ngx-gallery-image[_ngcontent-%COMP%], [_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-top[_ngcontent-%COMP%]   ngx-gallery-thumbnails[_ngcontent-%COMP%]{order:1}[_nghost-%COMP%]   .ngx-gallery-layout.thumbnails-bottom[_ngcontent-%COMP%]   ngx-gallery-thumbnails[_ngcontent-%COMP%]{order:2}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryComponent, [{
        type: core.Component,
        args: [{
                selector: 'ngx-gallery',
                template: "\n    <div class=\"ngx-gallery-layout {{currentOptions?.layout}}\">\n        <ngx-gallery-image *ngIf=\"currentOptions?.image\" [style.height]=\"getImageHeight()\" [images]=\"mediumImages\" [clickable]=\"currentOptions?.preview\" [selectedIndex]=\"selectedIndex\" [arrows]=\"currentOptions?.imageArrows\" [arrowsAutoHide]=\"currentOptions?.imageArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [swipe]=\"currentOptions?.imageSwipe\" [animation]=\"currentOptions?.imageAnimation\" [size]=\"currentOptions?.imageSize\" [autoPlay]=\"currentOptions?.imageAutoPlay\" [autoPlayInterval]=\"currentOptions?.imageAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.imageAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.imageInfinityMove\"  [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.imageActions\" [descriptions]=\"descriptions\" [showDescription]=\"currentOptions?.imageDescription\" [bullets]=\"currentOptions?.imageBullets\" (onClick)=\"openPreview($event)\" (onActiveChange)=\"selectFromImage($event)\"></ngx-gallery-image>\n        <ngx-gallery-thumbnails *ngIf=\"currentOptions?.thumbnails\" [style.marginTop]=\"getThumbnailsMarginTop()\" [style.marginBottom]=\"getThumbnailsMarginBottom()\" [style.height]=\"getThumbnailsHeight()\" [images]=\"smallImages\" [links]=\"currentOptions?.thumbnailsAsLinks ? links : []\" [labels]=\"labels\" [linkTarget]=\"currentOptions?.linkTarget\" [selectedIndex]=\"selectedIndex\" [columns]=\"currentOptions?.thumbnailsColumns\" [rows]=\"currentOptions?.thumbnailsRows\" [margin]=\"currentOptions?.thumbnailMargin\" [arrows]=\"currentOptions?.thumbnailsArrows\" [arrowsAutoHide]=\"currentOptions?.thumbnailsArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [clickable]=\"currentOptions?.image || currentOptions?.preview\" [swipe]=\"currentOptions?.thumbnailsSwipe\" [size]=\"currentOptions?.thumbnailSize\" [moveSize]=\"currentOptions?.thumbnailsMoveSize\" [order]=\"currentOptions?.thumbnailsOrder\" [remainingCount]=\"currentOptions?.thumbnailsRemainingCount\" [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.thumbnailActions\"  (onActiveChange)=\"selectFromThumbnails($event)\"></ngx-gallery-thumbnails>\n        <ngx-gallery-preview [images]=\"bigImages\" [descriptions]=\"descriptions\" [showDescription]=\"currentOptions?.previewDescription\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [closeIcon]=\"currentOptions?.closeIcon\" [fullscreenIcon]=\"currentOptions?.fullscreenIcon\" [spinnerIcon]=\"currentOptions?.spinnerIcon\" [arrows]=\"currentOptions?.previewArrows\" [arrowsAutoHide]=\"currentOptions?.previewArrowsAutoHide\" [swipe]=\"currentOptions?.previewSwipe\" [fullscreen]=\"currentOptions?.previewFullscreen\" [forceFullscreen]=\"currentOptions?.previewForceFullscreen\" [closeOnClick]=\"currentOptions?.previewCloseOnClick\" [closeOnEsc]=\"currentOptions?.previewCloseOnEsc\" [keyboardNavigation]=\"currentOptions?.previewKeyboardNavigation\" [animation]=\"currentOptions?.previewAnimation\" [autoPlay]=\"currentOptions?.previewAutoPlay\" [autoPlayInterval]=\"currentOptions?.previewAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.previewAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.previewInfinityMove\" [zoom]=\"currentOptions?.previewZoom\" [zoomStep]=\"currentOptions?.previewZoomStep\" [zoomMax]=\"currentOptions?.previewZoomMax\" [zoomMin]=\"currentOptions?.previewZoomMin\" [zoomInIcon]=\"currentOptions?.zoomInIcon\" [zoomOutIcon]=\"currentOptions?.zoomOutIcon\" [actions]=\"currentOptions?.actions\" [rotate]=\"currentOptions?.previewRotate\" [rotateLeftIcon]=\"currentOptions?.rotateLeftIcon\" [rotateRightIcon]=\"currentOptions?.rotateRightIcon\" [download]=\"currentOptions?.previewDownload\" [downloadIcon]=\"currentOptions?.downloadIcon\" [bullets]=\"currentOptions?.previewBullets\" (onClose)=\"onPreviewClose()\" (onOpen)=\"onPreviewOpen()\" (onActiveChange)=\"previewSelect($event)\" [class.ngx-gallery-active]=\"previewEnabled\"></ngx-gallery-preview>\n    </div>\n    ",
                providers: [NgxGalleryHelperService],
                styles: [":host{display:inline-block}:host>*{float:left}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep .ngx-gallery-icon{color:#fff;display:inline-block;font-size:25px;position:absolute;z-index:2000}:host ::ng-deep .ngx-gallery-icon .ngx-gallery-icon-content{display:block}:host ::ng-deep .ngx-gallery-clickable{cursor:pointer}:host ::ng-deep .ngx-gallery-icons-wrapper .ngx-gallery-icon{cursor:pointer;font-size:20px;margin-right:5px;margin-top:5px;position:relative}:host ::ng-deep .ngx-gallery-icons-wrapper{float:right}:host .ngx-gallery-layout{display:flex;flex-direction:column;height:100%;width:100%}:host .ngx-gallery-layout.thumbnails-top ngx-gallery-image{order:2}:host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-image,:host .ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails{order:1}:host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails{order:2}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: NgxGalleryHelperService }]; }, { imagesReady: [{
            type: core.Output
        }], change: [{
            type: core.Output
        }], previewOpen: [{
            type: core.Output
        }], previewClose: [{
            type: core.Output
        }], previewChange: [{
            type: core.Output
        }], options: [{
            type: core.Input
        }], onResize: [{
            type: core.HostListener,
            args: ['window:resize']
        }], width: [{
            type: core.HostBinding,
            args: ['style.width']
        }], left: [{
            type: core.HostBinding,
            args: ['style.left']
        }], height: [{
            type: core.HostBinding,
            args: ['style.height']
        }], images: [{
            type: core.Input
        }], preview: [{
            type: core.ViewChild,
            args: [NgxGalleryPreviewComponent]
        }], image: [{
            type: core.ViewChild,
            args: [NgxGalleryImageComponent]
        }], thubmnails: [{
            type: core.ViewChild,
            args: [NgxGalleryThumbnailsComponent]
        }] }); })();
        return NgxGalleryComponent;
    }());
    NgxGalleryComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: NgxGalleryHelperService }
    ]; };
    NgxGalleryComponent.propDecorators = {
        options: [{ type: core.Input }],
        images: [{ type: core.Input }],
        imagesReady: [{ type: core.Output }],
        change: [{ type: core.Output }],
        previewOpen: [{ type: core.Output }],
        previewClose: [{ type: core.Output }],
        previewChange: [{ type: core.Output }],
        preview: [{ type: core.ViewChild, args: [NgxGalleryPreviewComponent,] }],
        image: [{ type: core.ViewChild, args: [NgxGalleryImageComponent,] }],
        thubmnails: [{ type: core.ViewChild, args: [NgxGalleryThumbnailsComponent,] }],
        width: [{ type: core.HostBinding, args: ['style.width',] }],
        height: [{ type: core.HostBinding, args: ['style.height',] }],
        left: [{ type: core.HostBinding, args: ['style.left',] }],
        onResize: [{ type: core.HostListener, args: ['window:resize',] }]
    };

    var NgxGalleryActionComponent = /** @class */ (function () {
        function NgxGalleryActionComponent() {
            this.disabled = false;
            this.titleText = '';
            this.onClick = new core.EventEmitter();
        }
        NgxGalleryActionComponent.prototype.handleClick = function (event) {
            if (!this.disabled) {
                this.onClick.emit(event);
            }
            event.stopPropagation();
            event.preventDefault();
        };
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryActionComponent, [{
        type: core.Component,
        args: [{
                selector: 'ngx-gallery-action',
                template: "<div class=\"ngx-gallery-icon\" [class.ngx-gallery-icon-disabled]=\"disabled\"\naria-hidden=\"true\"\ntitle=\"{{ titleText }}\"\n(click)=\"handleClick($event)\">\n    <i class=\"ngx-gallery-icon-content {{ icon }}\"></i>\n</div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [""]
            }]
    }], function () { return []; }, { disabled: [{
            type: core.Input
        }], titleText: [{
            type: core.Input
        }], onClick: [{
            type: core.Output
        }], icon: [{
            type: core.Input
        }] }); })();
        return NgxGalleryActionComponent;
    }());
    NgxGalleryActionComponent.propDecorators = {
        icon: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        titleText: [{ type: core.Input }],
        onClick: [{ type: core.Output }]
    };

    var NgxGalleryArrowsComponent = /** @class */ (function () {
        function NgxGalleryArrowsComponent() {
            this.onPrevClick = new core.EventEmitter();
            this.onNextClick = new core.EventEmitter();
        }
        NgxGalleryArrowsComponent.prototype.handlePrevClick = function () {
            this.onPrevClick.emit();
        };
        NgxGalleryArrowsComponent.prototype.handleNextClick = function () {
            this.onNextClick.emit();
        };
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryArrowsComponent, [{
        type: core.Component,
        args: [{
                selector: 'ngx-gallery-arrows',
                template: "<div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-left\">\n    <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handlePrevClick()\" [class.ngx-gallery-disabled]=\"prevDisabled\">\n        <i class=\"ngx-gallery-icon-content {{arrowPrevIcon}}\"></i>\n    </div>\n</div>\n<div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-right\">\n    <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handleNextClick()\" [class.ngx-gallery-disabled]=\"nextDisabled\">\n        <i class=\"ngx-gallery-icon-content {{arrowNextIcon}}\"></i>\n    </div>\n</div>",
                styles: [".ngx-gallery-arrow-wrapper{display:table;height:100%;position:absolute;table-layout:fixed;width:1px;z-index:2000}.ngx-gallery-arrow-left{left:0}.ngx-gallery-arrow-right{right:0}.ngx-gallery-arrow{cursor:pointer;top:50%;transform:translateY(-50%)}.ngx-gallery-arrow.ngx-gallery-disabled{cursor:default;opacity:.6}.ngx-gallery-arrow-left .ngx-gallery-arrow{left:10px}.ngx-gallery-arrow-right .ngx-gallery-arrow{right:10px}"]
            }]
    }], function () { return []; }, { onPrevClick: [{
            type: core.Output
        }], onNextClick: [{
            type: core.Output
        }], prevDisabled: [{
            type: core.Input
        }], nextDisabled: [{
            type: core.Input
        }], arrowPrevIcon: [{
            type: core.Input
        }], arrowNextIcon: [{
            type: core.Input
        }] }); })();
        return NgxGalleryArrowsComponent;
    }());
    NgxGalleryArrowsComponent.propDecorators = {
        prevDisabled: [{ type: core.Input }],
        nextDisabled: [{ type: core.Input }],
        arrowPrevIcon: [{ type: core.Input }],
        arrowNextIcon: [{ type: core.Input }],
        onPrevClick: [{ type: core.Output }],
        onNextClick: [{ type: core.Output }]
    };

    var NgxGalleryBulletsComponent = /** @class */ (function () {
        function NgxGalleryBulletsComponent() {
            this.active = 0;
            this.onChange = new core.EventEmitter();
        }
        NgxGalleryBulletsComponent.prototype.getBullets = function () {
            return Array(this.count);
        };
        NgxGalleryBulletsComponent.prototype.handleChange = function (event, index) {
            this.onChange.emit(index);
        };
NgxGalleryBulletsComponent.ɵfac = function NgxGalleryBulletsComponent_Factory(t) { return new (t || NgxGalleryBulletsComponent)(); };
NgxGalleryBulletsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxGalleryBulletsComponent, selectors: [["ngx-gallery-bullets"]], inputs: { active: "active", count: "count" }, outputs: { onChange: "onChange" }, decls: 1, vars: 1, consts: [["class", "ngx-gallery-bullet", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "ngx-gallery-bullet", 3, "ngClass", "click"]], template: function NgxGalleryBulletsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NgxGalleryBulletsComponent_div_0_Template, 1, 3, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.getBullets());
    } }, directives: [ɵngcc2.NgForOf, ɵngcc2.NgClass], styles: ["[_nghost-%COMP%]{bottom:0;display:inline-flex;left:50%;padding:10px;position:absolute;transform:translateX(-50%);z-index:2000}.ngx-gallery-bullet[_ngcontent-%COMP%]{background:#fff;border-radius:50%;cursor:pointer;height:10px;width:10px}.ngx-gallery-bullet[_ngcontent-%COMP%]:not(:first-child){margin-left:5px}.ngx-gallery-bullet.ngx-gallery-active[_ngcontent-%COMP%], .ngx-gallery-bullet[_ngcontent-%COMP%]:hover{background:#000}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryBulletsComponent, [{
        type: core.Component,
        args: [{
                selector: 'ngx-gallery-bullets',
                template: "<div class=\"ngx-gallery-bullet\" *ngFor=\"let bullet of getBullets(); let i = index;\" (click)=\"handleChange($event, i)\" [ngClass]=\"{ 'ngx-gallery-active': i == active }\"></div>",
                styles: [":host{bottom:0;display:inline-flex;left:50%;padding:10px;position:absolute;transform:translateX(-50%);z-index:2000}.ngx-gallery-bullet{background:#fff;border-radius:50%;cursor:pointer;height:10px;width:10px}.ngx-gallery-bullet:not(:first-child){margin-left:5px}.ngx-gallery-bullet.ngx-gallery-active,.ngx-gallery-bullet:hover{background:#000}"]
            }]
    }], function () { return []; }, { active: [{
            type: core.Input
        }], onChange: [{
            type: core.Output
        }], count: [{
            type: core.Input
        }] }); })();
        return NgxGalleryBulletsComponent;
    }());
    NgxGalleryBulletsComponent.propDecorators = {
        count: [{ type: core.Input }],
        active: [{ type: core.Input }],
        onChange: [{ type: core.Output }]
    };

    var NgxGalleryModule = /** @class */ (function () {
        function NgxGalleryModule() {
        }
NgxGalleryModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxGalleryModule });
NgxGalleryModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxGalleryModule_Factory(t) { return new (t || NgxGalleryModule)(); }, imports: [[
            common.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxGalleryModule, { declarations: [NgxGalleryComponent, NgxGalleryPreviewComponent, NgxGalleryImageComponent, NgxGalleryThumbnailsComponent, NgxGalleryActionComponent, NgxGalleryArrowsComponent, NgxGalleryBulletsComponent], imports: [ɵngcc2.CommonModule], exports: [NgxGalleryComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryModule, [{
        type: core.NgModule,
        args: [{
                declarations: [
                    NgxGalleryComponent,
                    NgxGalleryPreviewComponent,
                    NgxGalleryImageComponent,
                    NgxGalleryThumbnailsComponent,
                    NgxGalleryActionComponent,
                    NgxGalleryArrowsComponent,
                    NgxGalleryBulletsComponent
                ],
                imports: [
                    common.CommonModule
                ],
                exports: [NgxGalleryComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA, core.NO_ERRORS_SCHEMA]
            }]
    }], function () { return []; }, null); })();
        return NgxGalleryModule;
    }());

    var NgxGalleryImage = /** @class */ (function () {
        function NgxGalleryImage(obj) {
            this.small = obj.small;
            this.medium = obj.medium;
            this.big = obj.big;
            this.description = obj.description;
            this.url = obj.url;
            this.type = obj.type;
            this.label = obj.label;
        }
        return NgxGalleryImage;
    }());

    /*
     * Public API Surface of ngx-gallery
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgxGalleryAction = NgxGalleryAction;
    exports.NgxGalleryActionComponent = NgxGalleryActionComponent;
    exports.NgxGalleryAnimation = NgxGalleryAnimation;
    exports.NgxGalleryArrowsComponent = NgxGalleryArrowsComponent;
    exports.NgxGalleryBulletsComponent = NgxGalleryBulletsComponent;
    exports.NgxGalleryComponent = NgxGalleryComponent;
    exports.NgxGalleryHelperService = NgxGalleryHelperService;
    exports.NgxGalleryImage = NgxGalleryImage;
    exports.NgxGalleryImageComponent = NgxGalleryImageComponent;
    exports.NgxGalleryImageSize = NgxGalleryImageSize;
    exports.NgxGalleryLayout = NgxGalleryLayout;
    exports.NgxGalleryModule = NgxGalleryModule;
    exports.NgxGalleryOptions = NgxGalleryOptions;
    exports.NgxGalleryOrder = NgxGalleryOrder;
    exports.NgxGalleryOrderedImage = NgxGalleryOrderedImage;
    exports.NgxGalleryPreviewComponent = NgxGalleryPreviewComponent;
    exports.NgxGalleryThumbnailsComponent = NgxGalleryThumbnailsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-gallery-images-video.umd.js.map