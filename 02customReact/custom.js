function customRender(reactElement, container) {
  /*
  // const domElement= document.createElement('a')
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("target", reactElement.props.target);
  domElement.setAttribute("href", reactElement.props.href);
  container.appendChild(domElement);
  */
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    if (prop === "style") {
      const styles = reactElement.props[prop];
      for (const styleName in styles) {
        domElement.style[styleName] = styles[styleName];
      }
    }
    if (prop === "className") {
      domElement.setAttribute("class", reactElement.props[prop]);
    } else domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reeactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
    style: {
      color: "yellow",
      textDecoration: "none",
      fontSize: "20px",
    },
    className: "custom-link",
  },
  children: "Click me to visit Google",
};

const mainContainer = document.querySelector("#root");

customRender(reeactElement, mainContainer);
