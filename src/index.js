import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import router from './routes/router';
import { RouterProvider } from 'react-router-dom';
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<body style={{height:'100&'}}>



// </body>);

ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

