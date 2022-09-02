import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["items", "form"]

  connect() {
    // console.log('Hello from controller')
    // console.log(this.element)
    // console.log(this.itemsTarget)
    // console.log(this.formTarget)
  }

send(event) {
  event.preventDefault()

  // console.log(this.formTarget.action);
  fetch(this.formTarget.action, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: new FormData(this.formTarget),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      if (data.inserted_item) {
        this.itemsTarget.insertAdjacentHTML("beforeend", data.inserted_item);
      }
      this.formTarget.outerHTML = data.form
    })
  }
}


// ## fx javascript
// ## fetch(url, options={})

// # promise -> response
// # - pending ...
// # - fullfilled
// # - rejected

// # .then
// # .catch **** promise is rejected
