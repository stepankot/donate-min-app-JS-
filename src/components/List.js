import { Component } from "../core/Component";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";

    this.$donateTitle = document.createElement("h2");
    this.$donateTitle.className = "donates-container__title";
    this.$donateTitle.textContent = "Список донатов";

    this.$donatesContainerItems = document.createElement("div");
    this.$donatesContainerItems.className = "donates-container__donates";

    this.$rootElement.appendChild(this.$donateTitle);
    this.$rootElement.appendChild(this.$donatesContainerItems);
  }

  addItem(item) {
    this.$donatesContainerItems.appendChild(item.$rootElement);
  }

  deleteItem(item) {
    this.$donatesContainerItems.remove(item.$rootElement);
  }
}
