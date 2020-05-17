import { CommitCard } from "./CommitCard.js";

export class CommitCardList {
  constructor(box, commitsData) {
    this._box = box;
    this.render(commitsData);
  }

  addCard(commitDataItem) {
    const { cardElement } = new CommitCard(commitDataItem);
    this._box.appendChild(cardElement);
	}
	

  render(commitsData) {
    commitsData.forEach((elem) => {
      this.addCard(elem)
    })
  }
}