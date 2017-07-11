// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// -------- Your Code Goes Below this Line --------
for (let i = 0; i < formData.length; i++) {

  // Set constants
  const item = formData[i];
  const { options, type, id, icon, label } = item;
  const form = document.querySelector("#fields");
  const input = document.createElement("input");
  const select = document.createElement("select");
  const textarea = document.createElement("textarea");
  let option;

  // Set attributes for input fields
  input.setAttribute("options", options);
  input.setAttribute("id", id);
  input.setAttribute("type", item);
  input.setAttribute("placeholder", label);

  // Set attributes for alternative input fields
  select.setAttribute("placeholder", label);
  textarea.setAttribute("placeholder", label);

  if (item.type == "textarea") {
    input.setAttribute("rows", 5)
  }

  if (item.type != "select" && item.type != "textarea") {
    form.appendChild(input);
  }

  // Create options dropdown
  if (item.type === "select") {
    form.appendChild(select);
    for (let v = 0; v < options.length; v++) {
      option = document.createElement("option");
      option.innerHTML = options[v].label;
      option.setAttribute("value", options[v].value);
      select.appendChild(option);
    }
  }

  if (item.type === "textarea") {
    form.appendChild(textarea);
  }
}
