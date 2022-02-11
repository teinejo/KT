import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public arr: Array<any> = [
    {"id":1,"title":"Gryphon said, in a.","author":"Alanis Swaniawski","genre":"Nulla","description":"I suppose.' So she went on, 'that they'd let Dinah stop in the trial one way of nursing it, (which was to get very tired of swimming about here, O Mouse!' (Alice thought this a good deal: this.","isbn":"9794382621090","image":"http:\/\/placeimg.com\/480\/640\/any","published":"1989-01-14","publisher":"Suscipit In"},
    {"id":2,"title":"PRECIOUS nose'; as.","author":"Leonor Roberts","genre":"Minus","description":"Queen. 'Never!' said the Gryphon replied very politely, 'if I had to pinch it to speak with. Alice waited a little, half expecting to see anything; then she walked up towards it rather timidly.","isbn":"9794760874858","image":"http:\/\/placeimg.com\/480\/640\/any","published":"2013-08-20","publisher":"Magni Ut"},
    {"id":3,"title":"So she began: 'O.","author":"Makayla Cummerata","genre":"Doloribus","description":"VERY wide, but she was exactly the right word) '--but I shall only look up and down in a low voice. 'Not at all,' said Alice: 'she's so extremely--' Just then her head to hide a smile: some of the.","isbn":"9796321516252","image":"http:\/\/placeimg.com\/480\/640\/any","published":"2008-10-17","publisher":"Amet Suscipit"},
    {"id":4,"title":"English); 'now I'm.","author":"Dedrick Veum","genre":"Nisi","description":"Alice, 'to speak to this last remark. 'Of course twinkling begins with an anxious look at me like a telescope.' And so it was a dead silence. Alice noticed with some difficulty, as it happens; and.","isbn":"9781190984233","image":"http:\/\/placeimg.com\/480\/640\/any","published":"2001-07-06","publisher":"Rerum Autem"},
    {"id":5,"title":"I hadn't begun my.","author":"Rudolph Watsica","genre":"Quibusdam","description":"WAS a narrow escape!' said Alice, seriously, 'I'll have nothing more happened, she decided to remain where she was surprised to find that the meeting adjourn, for the moment he was gone, and the.","isbn":"9788813090074","image":"http:\/\/placeimg.com\/480\/640\/any","published":"1990-01-17","publisher":"Nulla Voluptatum"},
    {"id":6,"title":"Tortoise, if he.","author":"Deron Morar","genre":"Atque","description":"How brave they'll all think me at all.' 'In that case,' said the voice. 'Fetch me my gloves this moment!' Then came a little startled when she got used to it as far as they came nearer, Alice could.","isbn":"9792307314560","image":"http:\/\/placeimg.com\/480\/640\/any","published":"1984-12-31","publisher":"Asperiores Ipsum"},
    {"id":7,"title":"Alice, so please.","author":"Jaren Hoeger","genre":"Non","description":"Alice would not join the dance? \"You can really have no answers.' 'If you can't think! And oh, I wish you could only hear whispers now and then; such as, 'Sure, I don't think,' Alice went on.","isbn":"9793620087407","image":"http:\/\/placeimg.com\/480\/640\/any","published":"2020-05-17","publisher":"Ducimus Sunt"},
    {"id":8,"title":"Queen's ears--'.","author":"Margarett Windler","genre":"Aspernatur","description":"Alice, a little while, however, she went on, without attending to her; 'but those serpents! There's no pleasing them!' Alice was silent. The King laid his hand upon her arm, that it might be hungry.","isbn":"9786889915536","image":"http:\/\/placeimg.com\/480\/640\/any","published":"1985-10-14","publisher":"Et Suscipit"},
    {"id":9,"title":"However, at last.","author":"Adaline Dare","genre":"Porro","description":"Shall I try the effect: the next moment a shower of saucepans, plates, and dishes. The Duchess took her choice, and was a dispute going on between the executioner, the King, and the happy summer.","isbn":"9788404081627","image":"http:\/\/placeimg.com\/480\/640\/any","published":"2010-06-18","publisher":"Veniam Rerum"},
    {"id":10,"title":"She hastily put.","author":"Elsie Strosin","genre":"Explicabo","description":"Improve his shining tail, And pour the waters of the e--e--evening, Beautiful, beautiful Soup!' CHAPTER XI. Who Stole the Tarts? The King and the Gryphon went on. 'I do,' Alice said nothing; she had.","isbn":"9794575735726","image":"http:\/\/placeimg.com\/480\/640\/any","published":"1975-04-16","publisher":"Commodi Saepe"}
  ];
  title = "kt-1";

  delete(id: number, index: number){
    this.arr.splice(index, 1)
  }
}

