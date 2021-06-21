const products = [
  {
    name: 'Tie Front Blouse',
    images: [
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622644320/fashionshop/products/1-4_fbwpjf.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622644346/fashionshop/products/2-3_hpjbsm.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622644359/fashionshop/products/3-3_r257pi.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622644429/fashionshop/products/4-3_az3fwy.jpg',
    ],
    description: `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.

      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.`,
    brand: 'Prada',
    category: 'clothes',
    price: 157.58,

    rating: 4.5,
    sale: 0,
    numReviews: 0,
    size: { s: 0, m: 6, l: 9, xl: 1 },
    countInStock: 16,
  },
  {
    name: 'Tye Shorts – Found On The Beach Slim carrot fit',
    images: [
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645094/fashionshop/products/1-2_lfwe3h.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645107/fashionshop/products/2-2_moztfa.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645134/fashionshop/products/3-2-850x1133_ji2e9i.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645144/fashionshop/products/4-2-850x1133_z2pgti.jpg',
    ],
    description: `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.

    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.`,
    brand: 'Chanel',
    category: 'clothes',
    price: 109.0,

    rating: 5,
    sale: 20,
    numReviews: 0,
    size: { s: 0, m: 6, l: 9, xl: 1 },
    countInStock: 16,
  },
  {
    name: 'Structured Hawaii Shirt Regular fit',
    images: [
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622646930/fashionshop/products/1-8_ub2eca.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645331/fashionshop/products/2-7-850x1133_fs1flt.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645345/fashionshop/products/3-7-850x1133_hno2cv.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645362/fashionshop/products/4-7_bmzkff.jpg',
    ],
    description: `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.`,
    brand: 'Dior',
    category: 'clothes',
    price: 172.6,

    rating: 4,
    sale: 5,
    numReviews: 0,
    size: { s: 0, m: 6, l: 9, xl: 1 },
    countInStock: 16,
  },
  {
    name: 'Sleeveless Pleated Top',
    images: [
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645554/fashionshop/products/1-11_jfdo6f.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645583/fashionshop/products/2-10-850x1133_x1smgh.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645622/fashionshop/products/3-10_jzuexx.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645648/fashionshop/products/4-10-850x1133_t2matz.jpg',
    ],
    description: `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.`,
    brand: 'Dior',
    category: 'clothes',
    price: 110.23,

    rating: 5,
    sale: 0,
    numReviews: 0,
    size: { s: 0, m: 6, l: 9, xl: 1 },
    countInStock: 16,
  },
  {
    name: 'Suede Trucker Jacket',
    images: [
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645675/fashionshop/products/1-6_e1lthj.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645707/fashionshop/products/2-5_ec7sck.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645745/fashionshop/products/3-5_rektvj.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645772/fashionshop/products/4-5-850x1133_vyd0kn.jpg',
    ],
    description: `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.`,
    brand: 'Chanel',
    category: 'clothes',
    price: 124.85,

    rating: 5,
    sale: 10,
    numReviews: 0,
    size: { s: 0, m: 6, l: 9, xl: 1 },
    countInStock: 16,
  },
  {
    name: 'Tie Front Blouse',
    images: [
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622644320/fashionshop/products/1-4_fbwpjf.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622644346/fashionshop/products/2-3_hpjbsm.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622644359/fashionshop/products/3-3_r257pi.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622644429/fashionshop/products/4-3_az3fwy.jpg',
    ],
    description: `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.

      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.`,
    brand: 'Prada',
    category: 'clothes',
    price: 157.58,

    rating: 4.5,
    sale: 0,
    numReviews: 0,
    size: { s: 0, m: 6, l: 9, xl: 1 },
    countInStock: 16,
  },
  {
    name: 'Tye Shorts – Found On The Beach Slim carrot fit',
    images: [
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645094/fashionshop/products/1-2_lfwe3h.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645107/fashionshop/products/2-2_moztfa.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645134/fashionshop/products/3-2-850x1133_ji2e9i.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645144/fashionshop/products/4-2-850x1133_z2pgti.jpg',
    ],
    description: `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.

    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.`,
    brand: 'Chanel',
    category: 'clothes',
    price: 109.0,

    rating: 5,
    sale: 20,
    numReviews: 0,
    size: { s: 0, m: 6, l: 9, xl: 1 },
    countInStock: 16,
  },
  {
    name: 'Structured Hawaii Shirt Regular fit',
    images: [
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622646930/fashionshop/products/1-8_ub2eca.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645331/fashionshop/products/2-7-850x1133_fs1flt.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645345/fashionshop/products/3-7-850x1133_hno2cv.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645362/fashionshop/products/4-7_bmzkff.jpg',
    ],
    description: `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.`,
    brand: 'Dior',
    category: 'clothes',
    price: 172.6,

    rating: 4,
    sale: 5,
    numReviews: 0,
    size: { s: 0, m: 6, l: 9, xl: 1 },
    countInStock: 16,
  },
  {
    name: 'Sleeveless Pleated Top',
    images: [
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645554/fashionshop/products/1-11_jfdo6f.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645583/fashionshop/products/2-10-850x1133_x1smgh.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645622/fashionshop/products/3-10_jzuexx.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645648/fashionshop/products/4-10-850x1133_t2matz.jpg',
    ],
    description: `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.`,
    brand: 'Dior',
    category: 'clothes',
    price: 110.23,

    rating: 5,
    sale: 0,
    numReviews: 0,
    size: { s: 0, m: 6, l: 9, xl: 1 },
    countInStock: 16,
  },
  {
    name: 'Suede Trucker Jacket',
    images: [
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645675/fashionshop/products/1-6_e1lthj.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645707/fashionshop/products/2-5_ec7sck.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645745/fashionshop/products/3-5_rektvj.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645772/fashionshop/products/4-5-850x1133_vyd0kn.jpg',
    ],
    description: `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.`,
    brand: 'Chanel',
    category: 'clothes',
    price: 124.85,

    rating: 5,
    sale: 10,
    numReviews: 0,
    size: { s: 0, m: 6, l: 9, xl: 1 },
    countInStock: 16,
  },
  {
    name: 'Tie Front Blouse',
    images: [
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622644320/fashionshop/products/1-4_fbwpjf.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622644346/fashionshop/products/2-3_hpjbsm.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622644359/fashionshop/products/3-3_r257pi.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622644429/fashionshop/products/4-3_az3fwy.jpg',
    ],
    description: `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.

      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.`,
    brand: 'Prada',
    category: 'clothes',
    price: 157.58,

    rating: 4.5,
    sale: 0,
    numReviews: 0,
    size: { s: 0, m: 6, l: 9, xl: 1 },
    countInStock: 16,
  },
  {
    name: 'Tye Shorts – Found On The Beach Slim carrot fit',
    images: [
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645094/fashionshop/products/1-2_lfwe3h.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645107/fashionshop/products/2-2_moztfa.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645134/fashionshop/products/3-2-850x1133_ji2e9i.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645144/fashionshop/products/4-2-850x1133_z2pgti.jpg',
    ],
    description: `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.

    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.`,
    brand: 'Chanel',
    category: 'clothes',
    price: 109.0,

    rating: 5,
    sale: 20,
    numReviews: 0,
    size: { s: 0, m: 6, l: 9, xl: 1 },
    countInStock: 16,
  },
  {
    name: 'Structured Hawaii Shirt Regular fit',
    images: [
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622646930/fashionshop/products/1-8_ub2eca.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645331/fashionshop/products/2-7-850x1133_fs1flt.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645345/fashionshop/products/3-7-850x1133_hno2cv.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645362/fashionshop/products/4-7_bmzkff.jpg',
    ],
    description: `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.`,
    brand: 'Dior',
    category: 'clothes',
    price: 172.6,

    rating: 4,
    sale: 5,
    numReviews: 0,
    size: { s: 0, m: 6, l: 9, xl: 1 },
    countInStock: 16,
  },
  {
    name: 'Sleeveless Pleated Top',
    images: [
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645554/fashionshop/products/1-11_jfdo6f.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645583/fashionshop/products/2-10-850x1133_x1smgh.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645622/fashionshop/products/3-10_jzuexx.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645648/fashionshop/products/4-10-850x1133_t2matz.jpg',
    ],
    description: `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.`,
    brand: 'Dior',
    category: 'clothes',
    price: 110.23,

    rating: 5,
    sale: 0,
    numReviews: 0,
    size: { s: 0, m: 6, l: 9, xl: 1 },
    countInStock: 16,
  },
  {
    name: 'Suede Trucker Jacket',
    images: [
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645675/fashionshop/products/1-6_e1lthj.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645707/fashionshop/products/2-5_ec7sck.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645745/fashionshop/products/3-5_rektvj.jpg',
      'https://res.cloudinary.com/phongbuiduy/image/upload/v1622645772/fashionshop/products/4-5-850x1133_vyd0kn.jpg',
    ],
    description: `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.`,
    brand: 'Chanel',
    category: 'clothes',
    price: 124.85,

    rating: 5,
    sale: 10,
    numReviews: 0,
    size: { s: 0, m: 6, l: 9, xl: 1 },
    countInStock: 16,
  },
];

export default products;
