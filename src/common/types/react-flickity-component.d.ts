

declare module 'react-flickity-component' {
  import * as React from 'react';
  
  export interface IFlickityOptions {
    /**
     * Enables dragging and flicking. Enabled by default when carousel has 2 or more slides draggable: '>1'.
     */
    draggable?: boolean;

    /**
     * Enables content to be freely scrolled and flicked without aligning cells to an end position.
     */
    freeScroll?: boolean;

    /**
     * At the end of cells, wrap-around to the other end for infinite scrolling.
     */
    wrapAround?: boolean;

    /**
     * Groups cells together in slides. Flicking, page dots, and previous/next buttons are mapped
     * to group slides, not individual cells.  is-selected class is added to the multiple cells in the selected slide.
     */
    groupCells?: true | number | string;

    /**
     * Automatically advances to the next cell.
     *
     * Auto-playing will pause when mouse is hovered over, and resume when mouse is hovered off.
     * Auto-playing will stop when the carousel is clicked or a cell is selected.
     */
    autoPlay?: boolean | number;

    /**
     * Auto-playing will pause when the user hovers over the carousel. Set pauseAutoPlayOnHover: false to disable this behavior.
     */
    pauseAutoPlayOnHover?: boolean;

    /**
     * Changes height of carousel to fit height of selected slide.
     */
    adaptiveHeight?: boolean;

    /**
     * The number of pixels a mouse or touch has to move before dragging begins.
     * Increase dragThreshold to allow for more wiggle room for vertical page scrolling on touch devices.
     * Default dragThreshold: 3.
     */
    dragThreshold?: number;

    /**
     * Align cells within the carousel element.
     */
    cellAlign?: 'left' | 'center' | 'right';

    /**
     * Sets positioning in percent values, rather than pixel values.
     * If your cells do not have percent widths, we recommended percentPosition: false.
     */
    percentPosition?: boolean;
  }

  export interface IFlickityProps {

    /**
     * Applied to top level wrapper
     */
    className?: string;

    /**
     * Wrapper's element type
     * default 'div'
     */
    elementType?: string;

    /**
     * Flickity Options
     */
    options?: IFlickityOptions;

    /**
     * Run reloadCells and resize on componentDidUpdate
     */
    reloadOnUpdate?: boolean;

    /**
     * like ref function, get Flickity instance in parent component
     */
    flickityRef?: Function;

    disableImagesLoaded?: boolean;
  }
  let Flickity: React.ComponentClass<IFlickityProps>;
  export default Flickity;
}
