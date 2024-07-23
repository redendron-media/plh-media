// src/app/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Your existing head content */}
          <script src="https://lq3-production01.s3.amazonaws.com/lead_quizzes_3.0/tracking/js/properties/lp9-azp0ack5_w.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
