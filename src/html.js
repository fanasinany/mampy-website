import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <style>{`
       .overlay-loading {
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        z-index: 999999999;
        pointer-events: none;
        top: 0;
        left: 0;
      }
  
      .overlay-loading div {
        width: 20%;
        background-color: #2a2a2a;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
  
      .overlay-loading div:nth-child(1) {
        transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 630ms;
      }
  
      .overlay-loading div:nth-child(2) {
        transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 560ms;
      }
  
      .overlay-loading div:nth-child(3) {
        transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 490ms;
      }
  
      .overlay-loading div:nth-child(4) {
        transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 420ms;
      }
  
      .overlay-loading div:nth-child(5) {
        transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 350ms;
      }
  
      .overlay-loading div:nth-child(6) {
        transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 280ms;
      }
  
      .overlay-loading div:nth-child(7) {
        transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 210ms;
      }
  
      .overlay-loading.loaded div {
        transform: translateY(-100%);
      }
      `}</style>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div class="overlay-loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};