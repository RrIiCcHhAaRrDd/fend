# Evaluate a news article with Natural Language Processing

## App Information

This website is designed to take a piece of text from a news source which is then sent to the Meaningcloud Sentiment Analysis API.
This API anaylses the text to determine if it possseses positive, neutral or negative sentiment, othwerwise known as its polarity. In addition, the text is also analysed for its objectivity and graded accordingly.

The app uses Service Workers provided by the Workbox plugin. This allows for offline funtionality.  

## Dependencies

- dotenv: "^8.2.0"
- express: "^4.17.1"
- "jest-fetch-mock: "^3.0.3"
- "webpack: "^4.35.3"
- "webpack-cli: "^3.3.5"

### devDependencies

- @babel/core: "^7.13.15"
- @babel/plugin-transform-modules-commonjs: "^7.13.8"
- @babel/preset-env: "^7.13.15"
- babel-loader: "^8.2.2"
- body-parser": "^1.19.0"
- clean-webpack-plugin": "^3.0.0"
- cors: "^2.8.5"
- css-loader: "^5.2.1"
- html-webpack-plugin: "^3.2.0"
- jest: "^26.6.3"
- mini-css-extract-plugin: "^1.4.1"
- node-fetch: "^2.6.1"
- node-sass: "^5.0.0"
- optimize-css-assets-webpack-plugin: "^5.0.4"
- sass: "^1.32.8"
- sass-loader: "^10.1.1"
- style-loader: "^2.0.0"
- terser-webpack-plugin: "^5.1.1"
- webpack-dev-server: "^3.11.2"
- workbox-webpack-plugin: "^6.1.5"
