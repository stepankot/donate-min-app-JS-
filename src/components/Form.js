import { Component } from "../core/Component";

export class Form extends Component {
  setup(props) {
    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";

    this.state = {
      amount: "",
    };

    this.$labelText = document.createElement("label");
    this.$labelText.className = "donate-form__input-label";
    this.$labelText.textContent = "Введите сумму в $";
    //Input
    this.$inputField = document.createElement("input");
    this.$inputField.className = "donate-form__donate-input";
    this.$inputField.name = "amount";
    this.$inputField.type = "number";
    this.$inputField.max = 100;
    this.$inputField.min = 1;
    this.$inputField.setAttribute("requeried", "");
    this.$inputField.addEventListener("input", this.handleInput.bind(this));

    //Кнопка
    this.$sumbitButton = document.createElement("button");
    this.$sumbitButton.textContent = "Задонатить";
    this.$sumbitButton.className = "donate-form__submit-button";
    this.$sumbitButton.type = "sumbit";
    this.$sumbitButton.setAttribute("disabled", "");
    this.$sumbitButton.addEventListener("click", this.handleSubmit.bind(this));
    this.$labelText.appendChild(this.$inputField);
    this.$rootElement.appendChild(this.$labelText);
    this.$rootElement.appendChild(this.$sumbitButton);
  }

  isValid() {
    if (Number(this.state.amount) >= 1 && Number(this.state.amount) <= 100) {
      return true;
    } else {
      return false;
    }
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    console.log(this.state.amount);
    if (this.isValid()) {
      this.$sumbitButton.disabled = false;
    }

    if (!this.isValid()) {
      this.$sumbitButton.disabled = true;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.props.onSumbit(Number(this.state.amount)); //Фиксируем
      this.$inputField.value = "";
      this.state.amount = "";
      this.$sumbitButton.disabled = true;
    }
  }
}
