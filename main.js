const setAttributesToElements = (elements, options, id, type, label) => {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (type === 'select') {
      element.setAttribute("options", options);
    }
    element.setAttribute("id", id);
    element.setAttribute("type", type);
    element.setAttribute("placeholder", label);
  }
};

const createSelectOptions = ({ form, select, options }) => {
  form.appendChild(select);
  const firstOption = document.createElement("option");
  firstOption.innerHTML = "Select language...";
  firstOption.setAttribute("value", "disabled");
  select.appendChild(firstOption);
  for (let v = 0; v < options.length; v++) {
    const option = document.createElement("option");
    option.innerHTML = options[v].label;
    option.setAttribute("value", options[v].value);
    select.appendChild(option);
  }
};

const createElements = (elements) => {
  return elements.reduce((result, element) => {
    result.push(document.createElement(element));
    return result;
  }, []);
}

for (let i = 0; i < formData.length; i++) {
  // Set constants
  const { options, type, id, icon, label } = formData[i];
  const form = document.querySelector("#fields");
  // Destructuring at its finest
  const [input, select, textarea] = createElements(["input", "select", "textarea"]);

  // Set attributes for fields
  const elements = [input, select, textarea];
  setAttributesToElements(elements, options, id, type, label);

  if (type === "textarea") {
    input.setAttribute("rows", 5)
    form.appendChild(textarea);
  }

  if (type !== "select" && type !== "textarea") {
    form.appendChild(input);
  }

  // Create options dropdown
  if (type === "select") {
    createSelectOptions({ options, form, select });
  }
}
