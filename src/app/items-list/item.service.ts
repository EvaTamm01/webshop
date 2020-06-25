import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/SA4AAOSwEeBcn0Cw/s-l225.webp","title":"Samsung Galaxy S9 SM-G960F - 64GB - (Unlocked) Smartphone Various Colours Grades","price":"$237.75 to $275.82","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3TUAAOSwcB1d5WKA/s-l225.webp","title":"Xiaomi Note 8t Dual SIM 64gb ROM Moonshadow Grey guarantee Italy 24 months","price":"$168.33","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/d9oAAOSwnexelsft/s-l225.webp","title":"Samsung Galaxy S8 G950 64GB Factory Unlocked 4G Android Smartphone SIM Free ","price":"$119.60 to $123.40","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/dfEAAOSwOh1ehwf0/s-l225.webp","title":"Xiaomi redmi note 9s 128gb Blue. 6gb ram, snapdragon 720g.!!! Global version!!!","price":"$258.06","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/GlEAAOSwSwdeTSBV/s-l225.webp","title":"Grade a +++ Smartphone Apple iPhone 7 32gb 128gb 256gb Refurbished and guaranteed","price":"$201.89 to $207.50","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mNYAAOSwaGBbmorI/s-l225.webp","title":"Apple iPhone 7 - 32GB 128GB 256GB - Unlocked SIM Free Smartphone Colours Grades","price":"$162.96 to $225.66","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/x9UAAOSwUMpeFxae/s-l225.webp","title":"Umidigi f1 Android 9.0 Smartphone 6.3\" 128gb+4gb Mobile Phone NFC 2sim","price":"$123.44","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/aHQAAOSwvT5dTHWw/s-l225.webp","title":"Apple iPhone 7 32GB Unlocked Various Colours","price":"$100.32 to $206.91","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/pqkAAOSwVRBb9TjJ/s-l225.webp","title":"Apple iPhone 7 - 32GB/128GB/256GB - All Colours - UNLOCKED - Various Grades ","price":"$163.01 to $238.25","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mWEAAOSwiJhbqQqW/s-l225.webp","title":"Samsung Galaxy s7 Smartphone 5,1 inch touch display 32gb Internal Memory Mobile Phone","price":"$123.44","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/lr0AAOSw1ZJejuDD/s-l225.webp","title":"Xiaomi Redmi Note 8 Pro Mineral Black 128gb ROM 6 GB RAM 24 months guarantee Italy","price":"$246.88","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/8GMAAOSwRkhe647z/s-l225.webp","title":"New ListingNEW XIAOMI REDMI NOTE 8T 64GB DUAL SIM SEALED PHONE WHITE GREY BLUE","price":"$185.58","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/s40AAOSwqRFez-NE/s-l225.webp","title":"LG G6 H870 32GB - BLACK  - UNLOCKED - Smartphone Mobile Phone Android","price":"$124.15","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Q0IAAOSwfrleUAki/s-l225.webp","title":"FACTORY UNLOCKED SAMSUNG Galaxy S20 S20+ PLUS S20 ULTRA 5G Smart Phone","price":"$900.00 to $1,080.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/eUcAAOSwQApeKchR/s-l225.webp","title":"Xr Apple iPhone 64gb new + Invoice +8 accessories gift","price":"$548.78","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3~sAAOSwj5BcO97H/s-l225.webp","title":"Apple iPhone 8 64 GB Free + warranty + invoice + 8 ACCESSORIES + FREE GIFT","price":"$346.78","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/XvQAAOSwPW9ezOa0/s-l225.webp","title":"Xiaomi redmi note 9 pro 128gb Green. 6gb ram, snapdragon 720g. Global version!!","price":"$302.95","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/OQgAAOSwKW1ev0dT/s-l225.webp","title":"New ListingKyocera DuraXE NEWEST MODEL E4710 -PTT - AT&T LTE 4G RUGGED  5MP CAM FLIP PHONE","price":"$345.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/YykAAOSw6rVe6oB3/s-l225.webp","title":"New ListingLOT OF 6 ! Cricket Samsung Galaxy​ Sol 3 4G LTE 8MP 5\" HD 16GB Prepaid Phone ","price":"$450.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/QzIAAOSwOahe5oj0/s-l225.webp","title":"New Samsung Galaxy A10s Dual Sim 2019 4G LTE Smartphone Black Blue Green Red","price":"$150.42","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qRcAAOSwcpte60l4/s-l225.webp","title":"New ListingUK Xiaomi Redmi Note 9S 6GB 128GB  White Unlocked Smartphone Android Phone","price":"$288.41","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/sycAAOSwSmJdAIE4/s-l225.webp","title":"Apple iPhone 7 32GB 128GB 256GB Unlocked  Smartphone GSM All Colors","price":"$287.64 to $363.70","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/JZEAAOSw35Be62zE/s-l225.webp","title":"New ListingNEW HUAWEI P40 DUAL SIM FREE 128GB 5G LTE UNLOCKED PHONE SEALED BLACK WHITE","price":"$739.85","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/zF8AAOSw4kNepovD/s-l225.webp","title":"UMIDIGI A7 Pro 4GB+64GB /128GB Smartphone 6.3\" Factory Unlocked 2SIM Android 10 ","price":"$129.98 to $149.35","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mMUAAOSwaeBeZpeQ/s-l225.webp","title":"XIAOMI MI 9T PRO BRAND NEW SEALED FACTORY UNLOCKED ORIGINAL GLOBAL VERSION","price":"$475.27 to $500.35","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/F9cAAOSw3e1e6ijw/s-l225.webp","title":"New ListingMobile phones","price":"$31.35","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Py0AAOSw6vZdcjHg/s-l225.webp","title":"Apple iPhone 7 Plus 32GB 128GB 256GB 12.0MP iOS Mobile Smartphone All Colours","price":"$450.17 to $526.67","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/c4sAAOSwWG5enWXR/s-l225.webp","title":"SONY XPERIA XZ2 64GB - All Colours - Unlocked - Smartphone Mobile Phone Android","price":"$149.23 to $199.39","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/6jUAAOSw9RZeJZur/s-l225.webp","title":"Apple iPhone 8 Plus 64GB Unlocked Various Colours","price":"$188.10 to $326.04","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/WpcAAOSwSDtejFdi/s-l225.webp","title":"Apple iPhone 7 - 32GB 128GB 256GB - Unlocked SIM Free Smartphone Colours Grades","price":"$175.55 to $263.28","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/zF8AAOSw4kNepovD/s-l225.webp","title":"Umidigi A7 Pro 4GB+64GB/128GB Smartphone 6.3 inch Cell Phone No Contract Android 10","price":"$123.44 to $145.88","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/J7AAAOSwHHJdVLo7/s-l225.webp","title":"Umidigi Smartphone No Contract Unlocked 5.7 inch A3 Pro 3GB+32GB DUAL SIM","price":"$74.06","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/QQoAAOSwyEJe630E/s-l225.webp","title":"New ListingNokia 3.1 Plus Blue, Brand new, Sealed Box phone.","price":"$213.17","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/VaIAAOSwo1FdoKwq/s-l225.webp","title":"New SAMSUNG Galaxy A30s 128GB/64GB  Dual SIM Android Phone  3 COLOURS UNLOCKED","price":"$231.85 to $244.39","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/rUoAAOSwwxxe3zPG/s-l225.webp","title":"XIAOMI MI NOTE 10 LITE BRAND NEW SEALED FACTORY UNLOCKED GLOBAL VERSION","price":"$407.55 to $432.63","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qAEAAOSwWzVbte8z/s-l225.webp","title":"Apple iPhone 8 - 64GB 256GB Unlocked Smartphone Silver Grey Gold Colours Grades ","price":"$250.74 to $275.82","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/yjAAAOSwep1dsGvf/s-l225.webp","title":"Samsung Galaxy Note 9 N960U 128/512 ATT T-Mobile Sprint Verizon Carrier Unlocked","price":"$309.00 to $339.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/VakAAOSwSjle61uA/s-l225.webp","title":"New ListingI phone 7 unlocked, fully working condition, no damages 32GB","price":"$313.50","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/yY8AAOSw~B1aOCgA/s-l225.webp","title":"Apple iPhone 7 128gb 1 year warranty + free + invoice + 8 accessories gift","price":"$279.44","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/EXEAAOSwjE1e49CB/s-l225.webp","title":"New ListingSonim XP3 XP3800 | 4G LTE  8GB Rugged Flip Phone AT&T GSM Cricket - Black","price":"$198.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~vwAAOSwz0Be19m7/s-l225.webp","title":"Xiaomi Redmi Note 9 Pro Dual 4G LTE Factory Unlocked Smartphone Global Version","price":"$247.99 to $269.69","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qAkAAOSwjaNc-9z-/s-l225.webp","title":"LG G8 ThinQ - 128GB -Gray (Sprint AT&T T-mobile) A UNLOCKED","price":"$229.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/d0EAAOSw7gpdjMhU/s-l225.webp","title":"New ListingSamsung Galaxy S7 (SM-G930F) - 5.1\" 32GB Vodafone Mobile Phone in Black Onyx","price":"$250.79","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/JGQAAOSw671dHGuv/s-l225.webp","title":"Samsung Galaxy Note8 64GB - Unlocked Smartphone Choose color/condition","price":"$279.00 to $299.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5w0AAOSwXiVeILW1/s-l225.webp","title":"Samsung Galaxy S9 (SM-G960F) 64GB Unlocked Various Colours","price":"$213.18","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Uv0AAOSwRTJeYgE7/s-l225.webp","title":"Samsung Galaxy S20 Ultra (5G) G988N 256GB Cosmic Gray *Brand New*Snapdragon 865!","price":"$1,050.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/VGEAAOSwvCpd3F5b/s-l225.webp","title":"New in Sealed Box LG G8 ThinQ G820UM1 AT&T 128GB Android Pie Unlocked Smartphone","price":"$273.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/oucAAOSwONddnycZ/s-l225.webp","title":"New ListingSamsung Galaxy S7 (SM-G930F) - 5.1\" 32GB Vodafone Mobile Phone in Pink Gold","price":"$250.79","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/FMcAAOSwvqde63IF/s-l225.webp","title":"New ListingSamsung Galaxy S8+ SM-G955F - 64GB  - Orchid Gray (Unlocked) Smartphone","price":"$250.80","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/r5QAAOSwJeVdojPd/s-l225.webp","title":"BNIB New Nokia 5140i - Black (Unlocked) 100% Original","price":"$274.63","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/WnAAAOSwx5Jcq0Bf/s-l225.webp","title":"New in Box LG V40 ThinQ V405US 64/128GB AT&T Verizon Sprint Unlocked Smartphone","price":"$231.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/D~0AAOSwtK1e60G3/s-l225.webp","title":"New ListingBRAND NEW SAMSUNG GALAXY A70 SM-A705F 128GB 2019 4G LTE DUAL SIM UNLOCKED PHONE","price":"$413.76","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/aToAAOSw8zdetdPJ/s-l225.webp","title":"OnePlus 7 Pro GM1915 256GB GSM Unlocked Worldwide 4G LTE Smartphone Black","price":"$284.95","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Gb8AAOSwW2ZekDjf/s-l225.webp","title":"Samsung Galaxy S6 EDGE SM-G925F 32GB (Unlocked) Smartphone Mobile Phone Colors","price":"$105.90 to $134.49","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/z3UAAOSwpUteDmNP/s-l225.webp","title":"Apple iPhone 7 - 256GB - Black (Verizon) Smartphone","price":"$249.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/QNEAAOSw6yBeakhg/s-l225.webp","title":"Samsung Galaxy Wide4 A20  SM-A205N 32GB - Black (Unlocked) *excellent condition*","price":"$130.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/4L4AAOSw3wZe64rM/s-l225.webp","title":"New ListingApple iPhone 7 Plus -  128GB black  - Unlocked SIM Free Smartphone","price":"$326.03","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/KvMAAOSwGhpe65YX/s-l225.webp","title":"New ListingApple iPhone 7 plus - 32 Gb - black unlocked great condition","price":"$199.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/SkcAAOSwtAlbqsuF/s-l225.webp","title":"LG G7 ThinQ 64GB Smartphone (GSM Unlocked) - Grey A Stock","price":"$139.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/YPAAAOSwWc1eoUTI/s-l225.webp","title":"Xiaomi Redmi Note 8 Pro 6GB 64GB MIUI 10 Helio G90T Octa Core 64MP Cameras Phone","price":"$225.71","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/VCsAAOSwRXxe641g/s-l225.webp","title":"New ListingMotorola Moto G7 Power 6.2\" 4G - Purple - Smart Phone - New Condition - Unlocked","price":"$188.04","category":"phones"}]

  constructor() { }

  getItems(): Item[] {
    return this.items.slice();
  }

  getItem(index: number): Item {
    return this.items[index];
  }

}
