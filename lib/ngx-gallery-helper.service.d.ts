import { ElementRef, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NgxGalleryHelperService {
    private renderer;
    private swipeHandlers;
    constructor(renderer: Renderer2);
    manageSwipe(status: boolean, element: ElementRef, id: string, nextHandler: Function, prevHandler: Function): void;
    validateUrl(url: string): string;
    getBackgroundUrl(image: string): string;
    private getSwipeHandlers;
    private removeSwipeHandlers;
    getFileType(fileSource: string): string;
    get_url_extension(url: any): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxGalleryHelperService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NgxGalleryHelperService>;
}

//# sourceMappingURL=ngx-gallery-helper.service.d.ts.map