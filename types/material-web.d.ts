import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type MdElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  [attribute: string]: unknown
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'md-filled-button': MdElementProps
      'md-outlined-button': MdElementProps
      'md-filled-tonal-button': MdElementProps
      'md-text-button': MdElementProps
      'md-elevated-button': MdElementProps
      'md-icon': MdElementProps
      'md-icon-button': MdElementProps
      'md-filled-icon-button': MdElementProps
      'md-filled-tonal-icon-button': MdElementProps
      'md-outlined-text-field': MdElementProps
      'md-filled-text-field': MdElementProps
      'md-outlined-select': MdElementProps
      'md-select-option': MdElementProps
      'md-divider': MdElementProps
      'md-elevation': MdElementProps
      'md-ripple': MdElementProps
      'md-focus-ring': MdElementProps
      'md-assist-chip': MdElementProps
      'md-chip-set': MdElementProps
      'md-filter-chip': MdElementProps
      'md-tabs': MdElementProps
      'md-primary-tab': MdElementProps
      'md-secondary-tab': MdElementProps
      'md-checkbox': MdElementProps
      'md-radio': MdElementProps
      'md-switch': MdElementProps
      'md-slider': MdElementProps
      'md-linear-progress': MdElementProps
      'md-circular-progress': MdElementProps
      'md-fab': MdElementProps
      'md-list': MdElementProps
      'md-list-item': MdElementProps
      'md-dialog': MdElementProps
      'md-menu': MdElementProps
      'md-menu-item': MdElementProps
    }
  }
}
