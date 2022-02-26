import { Injectable, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class NgxGalleryHelperService {
    constructor(renderer) {
        this.renderer = renderer;
        this.swipeHandlers = new Map();
    }
    manageSwipe(status, element, id, nextHandler, prevHandler) {
        const handlers = this.getSwipeHandlers(id);
        // swipeleft and swiperight are available only if hammerjs is included
        try {
            if (status && !handlers) {
                this.swipeHandlers.set(id, [
                    this.renderer.listen(element.nativeElement, 'swipeleft', () => nextHandler()),
                    this.renderer.listen(element.nativeElement, 'swiperight', () => prevHandler())
                ]);
            }
            else if (!status && handlers) {
                handlers.map((handler) => handler());
                this.removeSwipeHandlers(id);
            }
        }
        catch (e) { }
    }
    validateUrl(url) {
        if (url.replace) {
            return url.replace(new RegExp(' ', 'g'), '%20')
                .replace(new RegExp('\'', 'g'), '%27');
        }
        else {
            return url;
        }
    }
    getBackgroundUrl(image) {
        return 'url(\'' + this.validateUrl(image) + '\')';
    }
    getSwipeHandlers(id) {
        return this.swipeHandlers.get(id);
    }
    removeSwipeHandlers(id) {
        this.swipeHandlers.delete(id);
    }
    getFileType(fileSource) {
        if (fileSource.startsWith('data:')) {
            return fileSource.substr(5, Math.min(fileSource.indexOf(';'), fileSource.indexOf('/')) - 5);
        }
        let fileExtension = this.get_url_extension(fileSource);
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
    }
    get_url_extension(url) {
        return url.split(/[#?]/)[0].split('.').pop().trim();
    }
}
NgxGalleryHelperService.ɵfac = function NgxGalleryHelperService_Factory(t) { return new (t || NgxGalleryHelperService)(ɵngcc0.ɵɵinject(ɵngcc0.Renderer2)); };
NgxGalleryHelperService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NgxGalleryHelperService, factory: NgxGalleryHelperService.ɵfac });
NgxGalleryHelperService.ctorParameters = () => [
    { type: Renderer2 }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxGalleryHelperService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc0.Renderer2 }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktaGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL25neC1nYWxsZXJ5L3NyYy9saWIvbmd4LWdhbGxlcnktaGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBR2xFLE1BQU0sT0FBTyx1QkFBdUI7QUFDcEMsSUFHSSxZQUFvQixRQUFtQjtBQUFJLFFBQXZCLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUZoQyxrQkFBYSxHQUE0QixJQUFJLEdBQUcsRUFBc0IsQ0FBQztBQUNuRixJQUMrQyxDQUFDO0FBQ2hELElBQ0ksV0FBVyxDQUFDLE1BQWUsRUFBRSxPQUFtQixFQUFFLEVBQVUsRUFBRSxXQUFxQixFQUFFLFdBQXFCO0FBQUksUUFFMUcsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELFFBQ1Esc0VBQXNFO0FBQzlFLFFBQVEsSUFBSTtBQUNaLFlBQVksSUFBSSxNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDckMsZ0JBQWdCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTtBQUMzQyxvQkFBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDakcsb0JBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2xHLGlCQUFpQixDQUFDLENBQUM7QUFDbkIsYUFBYTtBQUFDLGlCQUFLLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUSxFQUFFO0FBQzVDLGdCQUFnQixR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bXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neEdhbGxlcnlIZWxwZXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgc3dpcGVIYW5kbGVyczogTWFwPHN0cmluZywgRnVuY3Rpb25bXT4gPSBuZXcgTWFwPHN0cmluZywgRnVuY3Rpb25bXT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgICBtYW5hZ2VTd2lwZShzdGF0dXM6IGJvb2xlYW4sIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIGlkOiBzdHJpbmcsIG5leHRIYW5kbGVyOiBGdW5jdGlvbiwgcHJldkhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmdldFN3aXBlSGFuZGxlcnMoaWQpO1xuXG4gICAgICAgIC8vIHN3aXBlbGVmdCBhbmQgc3dpcGVyaWdodCBhcmUgYXZhaWxhYmxlIG9ubHkgaWYgaGFtbWVyanMgaXMgaW5jbHVkZWRcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgJiYgIWhhbmRsZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2lwZUhhbmRsZXJzLnNldChpZCwgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzd2lwZWxlZnQnLCAoKSA9PiBuZXh0SGFuZGxlcigpKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc3dpcGVyaWdodCcsICgpID0+IHByZXZIYW5kbGVyKCkpXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzdGF0dXMgJiYgaGFuZGxlcnMpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5tYXAoKGhhbmRsZXIpID0+IGhhbmRsZXIoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTd2lwZUhhbmRsZXJzKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkgeyB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAodXJsLnJlcGxhY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmwucmVwbGFjZShuZXcgUmVnRXhwKCcgJywgJ2cnKSwgJyUyMCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnXFwnJywgJ2cnKSwgJyUyNycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEJhY2tncm91bmRVcmwoaW1hZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gJ3VybChcXCcnICsgdGhpcy52YWxpZGF0ZVVybChpbWFnZSkgKyAnXFwnKSc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRTd2lwZUhhbmRsZXJzKGlkOiBzdHJpbmcpOiBGdW5jdGlvbltdIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3dpcGVIYW5kbGVycy5nZXQoaWQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlU3dpcGVIYW5kbGVycyhpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3dpcGVIYW5kbGVycy5kZWxldGUoaWQpO1xuICAgIH1cblxuICAgIGdldEZpbGVUeXBlKGZpbGVTb3VyY2U6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChmaWxlU291cmNlLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWxlU291cmNlLnN1YnN0cig1LCBNYXRoLm1pbihmaWxlU291cmNlLmluZGV4T2YoJzsnKSwgZmlsZVNvdXJjZS5pbmRleE9mKCcvJykpIC0gNSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbGVFeHRlbnNpb24gPSB0aGlzLmdldF91cmxfZXh0ZW5zaW9uKGZpbGVTb3VyY2UpO1xuICAgICAgICBpZiAoIWZpbGVFeHRlbnNpb25cbiAgICAgICAgICAgIHx8IGZpbGVFeHRlbnNpb24gPT0gJ2pwZWcnIHx8IGZpbGVFeHRlbnNpb24gPT0gJ2pwZydcbiAgICAgICAgICAgIHx8IGZpbGVFeHRlbnNpb24gPT0gJ3BuZycgfHwgZmlsZUV4dGVuc2lvbiA9PSAnYm1wJ1xuICAgICAgICAgICAgfHwgZmlsZUV4dGVuc2lvbiA9PSAnZ2lmJykge1xuICAgICAgICAgICAgcmV0dXJuICdpbWFnZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmlsZVNvdXJjZS5zdWJzdHIoMCwgMTApID09PSAnZGF0YTp2aWRlbycgfHxcbiAgICAgICAgICAgIGZpbGVFeHRlbnNpb24gPT0gJ2F2aScgfHwgZmlsZUV4dGVuc2lvbiA9PSAnZmx2J1xuICAgICAgICAgICAgfHwgZmlsZUV4dGVuc2lvbiA9PSAnd212JyB8fCBmaWxlRXh0ZW5zaW9uID09ICdtb3YnXG4gICAgICAgICAgICB8fCBmaWxlRXh0ZW5zaW9uID09ICdtcDQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ZpZGVvJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ3Vua25vd24nO1xuICAgIH1cblxuICAgIGdldF91cmxfZXh0ZW5zaW9uKHVybCkge1xuICAgICAgICByZXR1cm4gdXJsLnNwbGl0KC9bIz9dLylbMF0uc3BsaXQoJy4nKS5wb3AoKS50cmltKCk7XG4gICAgfVxufSJdfQ==