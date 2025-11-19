import { Component } from "../core/Component";

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    };

    this.onDelete = props.onDelete;

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";
    this.$rootElement.id = this.state.id;

    this.$rootElement.textContent = `${this.state.date
      .toLocaleDateString()
      .replaceAll(".", "/")}, ${this.state.date.toLocaleTimeString()}-`;

    this.$donateSum = document.createElement("b");
    this.$donateSum.textContent = ` $${this.state.amount}`;

    this.$rootElement.appendChild(this.$donateSum);

    this.$onDeleteBtn = document.createElement("button");
    this.$onDeleteBtn.textContent = "Удалить";
    this.$onDeleteBtn.className = "delete-button";
    this.$onDeleteBtn.addEventListener("click", this.onItemDelete.bind(this));

    this.$rootElement.appendChild(this.$onDeleteBtn);
  }

  onItemDelete(event) {
    const item = event.target.closest("div");
    const amount = this.getAmount();
    // Прокидываем в функцию item и amount
    this.onDelete(item, amount);
  }

  getAmount() {
    return this.state.amount;
  } // Геттер для получения кол-во задоначненых баксов элемета
}
