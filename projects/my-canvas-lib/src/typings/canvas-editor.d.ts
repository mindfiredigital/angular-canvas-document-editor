
declare module '@mindfiredigital/canvas-editor' {
  // Enums
  export enum EditorMode {
    VIEW = 'view',
    EDIT = 'edit',
    // Add other modes as necessary
  }

  export enum PageMode {
    SINGLE = 'single',
    MULTI = 'multi',
    // Add other modes as necessary
  }

  export enum RowFlex {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
    JUSTIFY = 'justify',
  }

  export enum ListType {
    UNORDERED = 'unordered',
    ORDERED = 'ordered',
  }

  export enum ListStyle {
    DISC = 'disc',
    CIRCLE = 'circle',
    SQUARE = 'square',
    DECIMAL = 'decimal',
  }

  // Interfaces
  export interface IElement {
    id: string;
    type: string;
    content: string;
    // Add other properties as necessary
  }

  export interface IRangeStyle {
    color: string;
    fontSize: number;
    // Add other properties as per your usage
  }

  // DOMEventHandlers as a class with static methods
  export class DOMEventHandlers {
    static register(container: HTMLElement, editorContent: any, options: any): void;
    static setContent(content: any): void;
    static handleBold(): void;
    static handleItalic(): void;
    static handleUnderline(): void;
    static handleStrikeout(): void;
    static handleUndo(): void;
    static handleRedo(): void;
    static handleAlign(alignment: RowFlex): void;
    static handleList(type: ListType, style: ListStyle): void;
    static setFontColor(color: string): void;
    static setImage(image: { base64: string; width: number; height: number }): void;
    static setPaperMargins(margins: any): void;
    static getSelectedText(): string;
    // Add other static methods as per your usage
  }
}