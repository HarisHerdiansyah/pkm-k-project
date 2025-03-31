import React from "react";

// declare module "aframe";
// declare module "aframe-react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "a-scene": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        environment?: string;
      };
      "a-box": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        color?: string;
        depth?: number | string;
        height?: number | string;
        width?: number | string;
        position?: string;
      };
      "a-assets": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        id?: string;
        autoplay?: boolean;
        src?: string;
        loop?: string;
      };
      "a-videosphere": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        rotation?: string;
        visible?: string;
      };
      "a-video": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        width?: string;
        height?: string;
        position?: string;
        rotation?: string;
      };
      "a-camera": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        position?: string;
      };
      "a-cursor": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        fuse?: string;
        fuseTimeout?: string;
      };
      "a-text": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        value?: string;
        position?: string;
      };
      "a-entity": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        value?: string;
        position?: string;
        text?: string;
        geometry?: string;
        material?: string;
      };
    }
  }
}
