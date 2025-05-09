//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
// import Express from "express";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
); 

// const app = Express();
// const PORT = 3000;
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


