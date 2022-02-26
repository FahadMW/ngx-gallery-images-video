/*
 * Public API Surface of ngx-gallery
 */
export * from './lib/ngx-gallery.component';
export * from './lib/ngx-gallery.module';
export * from './lib/ngx-gallery-action/ngx-gallery-action.component';
export * from './lib/ngx-gallery-image/ngx-gallery-image.component';
export * from './lib/ngx-gallery-thumbnails/ngx-gallery-thumbnails.component';
export * from './lib/ngx-gallery-preview/ngx-gallery-preview.component';
export * from './lib/ngx-gallery-arrows/ngx-gallery-arrows.component';
export * from './lib/ngx-gallery-bullets/ngx-gallery-bullets.component';
export * from './lib/ngx-gallery-options';
export * from './lib/ngx-gallery-image.model';
export * from './lib/ngx-gallery-animation.model';
export * from './lib/ngx-gallery-helper.service';
export * from './lib/ngx-gallery-image-size.model';
export * from './lib/ngx-gallery-layout.model';
export * from './lib/ngx-gallery-order.model';
export * from './lib/ngx-gallery-ordered-image.model';
export * from './lib/ngx-gallery-action.model';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ2FsbGVyeS9zcmMvIiwic291cmNlcyI6WyJwdWJsaWMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsY0FBYyw2QkFBNkIsQ0FBQztBQUM1QyxjQUFjLDBCQUEwQixDQUFDO0FBQ3pDLGNBQWMsdURBQXVELENBQUM7QUFDdEUsY0FBYyxxREFBcUQsQ0FBQztBQUNwRSxjQUFjLCtEQUErRCxDQUFDO0FBQzlFLGNBQWMseURBQXlELENBQUM7QUFDeEUsY0FBYyx1REFBdUQsQ0FBQztBQUN0RSxjQUFjLHlEQUF5RCxDQUFDO0FBQ3hFLGNBQWMsMkJBQTJCLENBQUM7QUFDMUMsY0FBYywrQkFBK0IsQ0FBQztBQUM5QyxjQUFjLG1DQUFtQyxDQUFDO0FBQ2xELGNBQWMsa0NBQWtDLENBQUM7QUFDakQsY0FBYyxvQ0FBb0MsQ0FBQztBQUNuRCxjQUFjLGdDQUFnQyxDQUFDO0FBQy9DLGNBQWMsK0JBQStCLENBQUM7QUFDOUMsY0FBYyx1Q0FBdUMsQ0FBQztBQUN0RCxjQUFjLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFB1YmxpYyBBUEkgU3VyZmFjZSBvZiBuZ3gtZ2FsbGVyeVxuICovXG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbmd4LWdhbGxlcnkubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL25neC1nYWxsZXJ5LWFjdGlvbi9uZ3gtZ2FsbGVyeS1hY3Rpb24uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL25neC1nYWxsZXJ5LWltYWdlL25neC1nYWxsZXJ5LWltYWdlLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzL25neC1nYWxsZXJ5LXRodW1ibmFpbHMuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL25neC1nYWxsZXJ5LXByZXZpZXcvbmd4LWdhbGxlcnktcHJldmlldy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktYXJyb3dzL25neC1nYWxsZXJ5LWFycm93cy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbmd4LWdhbGxlcnktYnVsbGV0cy9uZ3gtZ2FsbGVyeS1idWxsZXRzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1vcHRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL25neC1nYWxsZXJ5LWltYWdlLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL25neC1nYWxsZXJ5LWFuaW1hdGlvbi5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1oZWxwZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1pbWFnZS1zaXplLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL25neC1nYWxsZXJ5LWxheW91dC5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1vcmRlci5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtZ2FsbGVyeS1vcmRlcmVkLWltYWdlLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL25neC1nYWxsZXJ5LWFjdGlvbi5tb2RlbCc7Il19