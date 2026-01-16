import { ScrollViewStyleReset } from 'expo-router/html';

// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="google-site-verification"
          content="cuhph8Rq01ITPXiqWkJ23hKWKjm8c9NUgmXdoQnUYmY"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <script src="./p5.min.js"></script>
        <title>Kenji Okura</title>

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1.00001,viewport-fit=cover"
        />

        <ScrollViewStyleReset />
        <script src="./sketch.js"></script>
        <script src="./system.js"></script>
        <script src="./night-steak.js"></script>
        <script src="./night-sky.js"></script>

        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
      </head>
      <body>
        <main></main>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            zIndex: 1,
            height: '100dvh',
          }}>
          {children}
        </div>
      </body>
    </html>
  );
}

const responsiveBackground = `
body {
  background-color: #fff;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
  }
}`;
