// Câu 1: Constructor function Product
let Product = function (id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
};

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, 2 danh mục khác nhau
let products = [
  new Product(1, "Laptop Dell", 25000000, 5, "Electronics", true),
  new Product(2, "Iphone 15", 35000000, 3, "Electronics", true),
  new Product(3, "Áo thun", 500000, 50, "Clothing", true),
  new Product(4, "Quần jean", 800000, 20, "Clothing", true),
  new Product(5, "Dây đeo", 100000, 0, "Accessories", true),
  new Product(6, "Tai nghe", 2000000, 10, "Accessories", false),
  new Product(7, "Chuột không dây", 1500000, 15, "Electronics", true),
  new Product(8, "Bàn phím cơ", 3000000, 8, "Electronics", true),
];

// Câu 3: Tạo mảng mới chỉ chứa name, price
let productNamePrice = products.map(function (product) {
  return {
    name: product.name,
    price: product.price,
  };
});


// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
let productsInStock = products.filter(function (product) {
  return product.quantity > 0;
});


// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30,000,000 hay không
let hasPriceover30M = products.some(function (product) {
  return product.price > 30000000;
});


// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
let allAccessoriesAvailable = products
  .filter(function (product) {
    return product.category === "Accessories";
  })
  .every(function (product) {
    return product.isAvailable === true;
  });


// Câu 7: Tính tổng giá trị kho hàng (price × quantity)
let totalInventoryValue = products.reduce(function (sum, product) {
  return sum + product.price * product.quantity;
}, 0);

// Câu 8: Dùng for...of duyệt mảng products và in ra: Tên - Danh mục - Trạng thái
for (let product of products) {
  let status = product.isAvailable ? "Đang bán" : "Hết bán";
  console.log(`${product.name} - ${product.category} - ${status}`);
}

// Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng (sử dụng 1 sản phẩm làm ví dụ)
for (let key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
let availableProductsInStock = products
  .filter(function (product) {
    return product.isAvailable === true && product.quantity > 0;
  })
  .map(function (product) {
    return product.name;
  });



console.log(productNamePrice);
console.log(productsInStock);
console.log(hasPriceover30M);
console.log(allAccessoriesAvailable);
console.log(totalInventoryValue);
console.log(availableProductsInStock);
