import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Shing',
      email: 'shing@test.com',
      password: bcrypt.hashSync('123'),
      isAdmin: true,
    },
    {
      name: 'Mae',
      email: 'mae@test.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      name: 'Nike Slim pants',
      slug: 'nike-slim-pants',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality pants',
    },
    {
      name: 'Adidas Slim shirt',
      slug: 'adidas-slim-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      name: 'Adidas Slim pants',
      slug: 'adidas-slim-pants',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
  ],
};

export default data;
