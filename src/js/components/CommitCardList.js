import { CommitCard } from "./CommitCard.js";

export class CommitCardList {
  constructor(box, commitData) {
    this._box = box;
    this.render(commitData);
  }

  addCard(commitDataItem) {
    const { cardElement } = new CommitCard(commitDataItem);
    this._box.appendChild(cardElement);
  }

  render(commitData) {
    commitData.forEach((elem) => {
      this.addCard(elem)
    })
  }
}