import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donate: [],
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    this.$totalAmount = document.createElement("h1");
    this.$totalAmount.className = "total-amount";
    this.$totalAmount.textContent = "Итого: $";

    this.$spanAmount = document.createElement("span");
    this.$spanAmount.textContent = this.state.total;

    this.$totalAmount.appendChild(this.$spanAmount);

    this.$total = this.$spanAmount;

    // Компонент формы
    this.$rootElement.appendChild(this.$totalAmount);
    const donateForm = new Form({ onSumbit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);

    // Компонент листов с донатом
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);

    this.donateList = donateList;
  }

  onItemCreate(amount) {
    const item = new ListItem({
      amount,
      onDelete: this.onItemDelete.bind(this),
    });
    this.state.donate.push(item);
    this.state.total += amount;
    this.$spanAmount.textContent = this.state.total;
    this.donateList.addItem(item);
  }

  onItemDelete(item, amount) {
    //Найти индекс элемента по его айди в массиве объектов
    //Получаем индекс элемента в массиве this.donate

    const findedIndex = this.state.donate.findIndex((element) => {
      return element.$rootElement.id === item.id;
    });

    // Удаляем из списка элементов и с страницы
    this.state.donate.slice(findedIndex, 1);
    item.remove();

    // Изменяем значение total title
    this.state.total -= amount;
    this.$spanAmount.textContent = this.state.total;
  }
}
