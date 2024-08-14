/* const producto1 = {
    nombre: "celular",
    precio: 100000,
    stock: 2
    };
 console.log(producto1)

producto1.id = "id123";
producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";
 console.log(producto1) */


 class Product {
    constructor(id, title, price, stock, images, onsale, supplier) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.stock = stock;
      this.images = images;
      this.onsale = onsale;
      this.supplier = supplier;
    }

    sellUnits(units) {
		this.stock = this.stock - units
	}

 /*    get getSupplier() {
        return this._supplier;
        }

    set setSupplier(newName) {
        this._supplier = newName;
        } */
  }


  const prod1 = new Product(1,"celular",20,50,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",50);
  const prod2 = new Product(1,"celular",20)
  console.table(prod2)