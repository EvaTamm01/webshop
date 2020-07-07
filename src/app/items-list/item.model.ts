//export class Item {
//   public imgSrc: string;
//   public title: string;
//   public price: string;
//   public category: string;
//   constructor(_imgSrc: string, title: string, price: string, category: string) {
//    this.imgSrc = _imgSrc;
//    this.title = title;
//    this.price = price;
//    this.category = category;
//   }
// }

export class Item {
  constructor(
  public imgSrc: string,
  public title: string,
  public price: string,
  public category: string) {}
  
}