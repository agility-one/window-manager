/**
 * @typedef {object} Window~WindowOptions
 * @property {number} [x=0]
 * @property {number} [y=0]
 * @property {number} [width]
 * @property {number} [height]
 * @property {boolean} [movable=true]
 * @property {boolean} [resizable=true]
 * @property {boolean} [maximizable=true]
 * @property {boolean} [minimizable=true]
 * @property {boolean} [closable=true]
 * @property {boolean} [noSnap] don't snap this window or use this window as a snap target
 * @property {boolean} [titlebar=true]
 * @property {string} [titlebarHeight=36px]
 * @property {boolean} [titleCenter]
 * @property {string} [minWidth=200px]
 * @property {string} [minHeight=60px]
 * @property {string} [borderRadius=4px]
 * @property {number} [minimizeSize=50]
 * @property {string} [modalBackground=rgba(0,0,0,0.6)]
 * @property {string} [shadow='0 0 12px 1px rgba(0, 0, 0, 0.6)']
 * @property {number} [animateTime=250]
 * @property {(string|function)} [ease] easing name (see {@link https://www.npmjs.com/package/penner} for list or function)
 * @property {string} [backgroundColorWindow=#fefefe]
 * @property {string} [backgroundColorTitlebarActive=#365d98]
 * @property {string} [backgroundColorTitlebarInactive=#888888]
 * @property {string} [foregroundColorButton=#ffffff]
 * @property {string} [foregroundColorTitle=#ffffff]
 * @property {string} [backgroundMinimizeButton=...]
 * @property {string} [backgroundMaximizeButton=...]
 * @property {string} [backgroundCloseButton=...]
 * @property {string} [backgroundResize=...]
 */
const WindowOptions = {
    x: 0,
    y: 0,

    minWidth: '200px',
    minHeight: '60px',

    borderRadius: '4px',
    minimizeSize: 50,
    modalBackground: 'rgba(0, 0, 0, 0.6)',
    shadow: '0 0 12px 1px rgba(0, 0, 0, 0.6)',
    movable: true,
    resizable: true,
    maximizable: true,
    minimizable: true,
    closable: true,

    titlebar: true,
    titlebarHeight: '36px',

    animateTime: 250,
    ease: 'easeInOutSine',

    backgroundColorWindow: '#fefefe',
    backgroundColorTitlebarActive: '#365d98',
    backgroundColorTitlebarInactive: '#888888',
    foregroundColorButton: '#ffffff',
    foregroundColorTitle: '#ffffff',

    backgroundCloseButton: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAfElEQVQ4jdXUwQ2AIBBEUULLVkET2N228b1gVFxkIWuik3gbHhCQEH4TYAEESEA09GPpCrBoBeFIfkILlk990UqJa1RUwQCSZdYbaumY0WGsg67lG8M66BxWofWq9tU2sbFZZuO6ZddDaWBz18YyYAjlhV/P/XHwfb4+mw0FvmLroLRViAAAAABJRU5ErkJggg==)',
    backgroundMaximizeButton: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAVklEQVQ4jWNgoAX4////1v+Ug60MDAwMjFAD/1PDYYyMjIxM1DAIGVDdQBY0vgmZ5pxB4cFClUzDUPQP/jAcNXDUwMFgIEpepkYxBnPhNkoNopIZmAAAdghhoHiIrEcAAAAASUVORK5CYII=)',
    backgroundMinimizeButton: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAOElEQVQ4jWNgGAWjYBSMgiEJGGGM////p1FkECPjLHQD/1NoICMDAwMDEyWGYAMsSOxz1DacKgAAbrQI132oX0IAAAAASUVORK5CYII=)',
    backgroundRestoreButton: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAA2klEQVQ4ja2UzQ3CMAyFnyuuSD0wBjvAKGUDRmAERugO5U6G6ABw51CJAR6XBIX8OCHquyR27U9pnltgZYnbkNwB2Ff2zSLyUitITqzXlON03n5beTq1dhPETwBjATZoD0PgQ0QuWgPJ4z9AvzFnUp8AxyaRNCSNFzeZ1CGvJpOyr2yVMmmw6xjEVcDIJHd3Lh+aFAJ7ryB1+S6/5E7gA98ADgDuQU0YA8CtBnjC75hc7XpO9M1FoJ0j42KSi82bqEuRNjZNKrncJ0yJaqCY9FXrlyIKcN0fbqs+F7nRockDNMcAAAAASUVORK5CYII=)',

    backgroundResize: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzREODAwQzcyRjZDMTFFMjg5NkREMENBNjJERUE4Q0IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzREODAwQzgyRjZDMTFFMjg5NkREMENBNjJERUE4Q0IiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNEQ4MDBDNTJGNkMxMUUyODk2REQwQ0E2MkRFQThDQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNEQ4MDBDNjJGNkMxMUUyODk2REQwQ0E2MkRFQThDQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuQy0VQAAACLSURBVHjaYpw9ezYDEUARiO8zEaHQHohPArEcCxEK1wGxPxA/wmeyDZLCIyABJjwKNwJxEFShIi7FyAoPArEZEB8DYi0mHFaHIikEaUwE4mtMWBRGAPE+NIU7kJ0BUxiNQyFInpMJKgFTuBuLQj8gXg3yJCicHyFZDQJfgDgOqhEE3gGxD8jNAAEGADlXJQUd3J75AAAAAElFTkSuQmCC) no-repeat',
}

module.exports = WindowOptions