import { Unit } from 'src/products/enums/unit.enum';

interface SeedProduct {
  description: string;
  images: string[];
  price: number;
  unit: Unit;
  slug: string;
  tags: string[];
  title: string;
  available: boolean; // Added available field
}

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
      images: ['1740176-00-A_0_2000.jpg', '1740176-00-A_1.jpg'],
      price: 75,
      unit: Unit.CENTIMETRO,
      slug: 'mens_chill_crew_neck_sweatshirt',
      tags: ['sweatshirt', 'shirts'],
      title: 'Men’s Chill Crew Neck Sweatshirt',
      available: true, // Added available field
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: ['1740507-00-A_0_2000.jpg', '1740507-00-A_1.jpg'],
      price: 200,
      unit: Unit.KILOGRAMO,
      slug: 'men_quilted_shirt_jacket',
      tags: ['jacket', 'shirts'],
      title: "Men's Quilted Shirt Jacket",
      available: true, // Added available field
    },
    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: ['1740250-00-A_0_2000.jpg', '1740250-00-A_1.jpg'],
      price: 130,
      unit: Unit.CENTIMETRO,
      slug: 'men_raven_lightweight_zip_up_bomber_jacket',
      tags: ['shirt', 'shirts'],
      title: "Men's Raven Lightweight Zip Up Bomber Jacket",
      available: true, // Added available field
    },
    {
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      images: ['1740280-00-A_0_2000.jpg', '1740280-00-A_1.jpg'],
      price: 45,
      unit: Unit.LITRO,
      slug: 'men_turbine_long_sleeve_tee',
      tags: ['shirt', 'shirts'],
      title: "Men's Turbine Long Sleeve Tee",
      available: true, // Added available field
    },
    {
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      images: ['1741416-00-A_0_2000.jpg', '1741416-00-A_1.jpg'],
      price: 40,
      unit: Unit.CENTIMETRO,
      slug: 'men_turbine_short_sleeve_tee',
      tags: ['shirt', 'shirts'],
      title: "Men's Turbine Short Sleeve Tee",
      available: true, // Added available field
    },
  {
    description:
    "The Women's Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
    images: ['1740176-00-B_0_2000.jpg', '1740176-00-B_1.jpg'],
    price: 75,
    unit: Unit.CENTIMETRO,
    slug: 'womens_chill_crew_neck_sweatshirt',
    tags: ['sweatshirt', 'shirts'],
    title: 'Women’s Chill Crew Neck Sweatshirt',
    available: true,
  },
  {
    description:
    "The Women's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
    images: ['1740507-00-B_0_2000.jpg', '1740507-00-B_1.jpg'],
    price: 200,
    unit: Unit.KILOGRAMO,
    slug: 'women_quilted_shirt_jacket',
    tags: ['jacket', 'shirts'],
    title: "Women's Quilted Shirt Jacket",
    available: true,
  },
  {
    description:
    "Introducing the Tesla Raven Collection. The Women's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
    images: ['1740250-00-B_0_2000.jpg', '1740250-00-B_1.jpg'],
    price: 130,
    unit: Unit.CENTIMETRO,
    slug: 'women_raven_lightweight_zip_up_bomber_jacket',
    tags: ['shirt', 'shirts'],
    title: "Women's Raven Lightweight Zip Up Bomber Jacket",
    available: true,
  },
  {
    description:
    "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
    images: ['1740280-00-B_0_2000.jpg', '1740280-00-B_1.jpg'],
    price: 45,
    unit: Unit.LITRO,
    slug: 'women_turbine_long_sleeve_tee',
    tags: ['shirt', 'shirts'],
    title: "Women's Turbine Long Sleeve Tee",
    available: true,
  },
  {
    description:
    "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
    images: ['1741416-00-B_0_2000.jpg', '1741416-00-B_1.jpg'],
    price: 40,
    unit: Unit.CENTIMETRO,
    slug: 'women_turbine_short_sleeve_tee',
    tags: ['shirt', 'shirts'],
    title: "Women's Turbine Short Sleeve Tee",
    available: true,
  },
  {
    description:
    "The Men's Classic Crew Neck Sweatshirt features a timeless design with a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
    images: ['1740176-00-C_0_2000.jpg', '1740176-00-C_1.jpg'],
    price: 80,
    unit: Unit.UNIDAD,
    slug: 'mens_classic_crew_neck_sweatshirt',
    tags: ['sweatshirt', 'shirts'],
    title: 'Men’s Classic Crew Neck Sweatshirt',
    available: true,
  },
  {
    description:
    "The Men's Modern Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
    images: ['1740507-00-C_0_2000.jpg', '1740507-00-C_1.jpg'],
    price: 210,
    unit: Unit.KILOGRAMO,
    slug: 'men_modern_quilted_shirt_jacket',
    tags: ['jacket', 'shirts'],
    title: "Men's Modern Quilted Shirt Jacket",
    available: true,
  },
  {
    description:
    "Introducing the Tesla Falcon Collection. The Men's Falcon Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
    images: ['1740250-00-C_0_2000.jpg', '1740250-00-C_1.jpg'],
    price: 140,
    unit: Unit.CENTIMETRO,
    slug: 'men_falcon_lightweight_zip_up_bomber_jacket',
    tags: ['shirt', 'shirts'],
    title: "Men's Falcon Lightweight Zip Up Bomber Jacket",
    available: true,
  },
  {
    description:
    "Introducing the Tesla Falcon Collection. Designed for style, comfort and everyday lifestyle, the Men's Falcon Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
    images: ['1740280-00-C_0_2000.jpg', '1740280-00-C_1.jpg'],
    price: 50,
    unit: Unit.LITRO,
    slug: 'men_falcon_long_sleeve_tee',
    tags: ['shirt', 'shirts'],
    title: "Men's Falcon Long Sleeve Tee",
    available: true,
  },
  {
    description:
    "Introducing the Tesla Falcon Collection. Designed for style, comfort and everyday lifestyle, the Men's Falcon Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
    images: ['1741416-00-C_0_2000.jpg', '1741416-00-C_1.jpg'],
    price: 45,
    unit: Unit.MILILITRO,
    slug: 'men_falcon_short_sleeve_tee',
    tags: ['shirt', 'shirts'],
    title: "Men's Falcon Short Sleeve Tee",
    available: true,
  },
  {
    description:
    "The Women's Classic Crew Neck Sweatshirt features a timeless design with a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
    images: ['1740176-00-D_0_2000.jpg', '1740176-00-D_1.jpg'],
    price: 80,
    unit: Unit.CENTIMETRO,
    slug: 'womens_classic_crew_neck_sweatshirt',
    tags: ['sweatshirt', 'shirts'],
    title: 'Women’s Classic Crew Neck Sweatshirt',
    available: true,
  },
  {
    description:
    "The Women's Modern Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
    images: ['1740507-00-D_0_2000.jpg', '1740507-00-D_1.jpg'],
    price: 210,
    unit: Unit.KILOGRAMO,
    slug: 'women_modern_quilted_shirt_jacket',
    tags: ['jacket', 'shirts'],
    title: "Women's Modern Quilted Shirt Jacket",
    available: true,
  },
  {
    description:
    "Introducing the Tesla Falcon Collection. The Women's Falcon Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
    images: ['1740250-00-D_0_2000.jpg', '1740250-00-D_1.jpg'],
    price: 140,
    unit: Unit.METRO,
    slug: 'women_falcon_lightweight_zip_up_bomber_jacket',
    tags: ['shirt', 'shirts'],
    title: "Women's Falcon Lightweight Zip Up Bomber Jacket",
    available: true,
  },
  {
    description:
    "Introducing the Tesla Falcon Collection. Designed for style, comfort and everyday lifestyle, the Women's Falcon Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
    images: ['1740280-00-D_0_2000.jpg', '1740280-00-D_1.jpg'],
    price: 50,
    unit: Unit.LITRO,
    slug: 'women_falcon_long_sleeve_tee',
    tags: ['shirt', 'shirts'],
    title: "Women's Falcon Long Sleeve Tee",
    available: true,
  },
  {
    description:
    "Introducing the Tesla Falcon Collection. Designed for style, comfort and everyday lifestyle, the Women's Falcon Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
    images: ['1741416-00-D_0_2000.jpg', '1741416-00-D_1.jpg'],
    price: 45,
    unit: Unit.GRAMO,
    slug: 'women_falcon_short_sleeve_tee',
    tags: ['shirt', 'shirts'],
    title: "Women's Falcon Short Sleeve Tee",
    available: true,
  },
  {
    description:
    "The Men's Premium Crew Neck Sweatshirt features a luxurious design with a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
    images: ['1740176-00-E_0_2000.jpg', '1740176-00-E_1.jpg'],
    price: 85,
    unit: Unit.CENTIMETRO,
    slug: 'mens_premium_crew_neck_sweatshirt',
    tags: ['sweatshirt', 'shirts'],
    title: 'Men’s Premium Crew Neck Sweatshirt',
    available: true,
  },
  {
    description:
    "The Men's Advanced Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
    images: ['1740507-00-E_0_2000.jpg', '1740507-00-E_1.jpg'],
    price: 220,
    unit: Unit.KILOGRAMO,
    slug: 'men_advanced_quilted_shirt_jacket',
    tags: ['jacket', 'shirts'],
    title: "Men's Advanced Quilted Shirt Jacket",
    available: true,
  },
  {
    description:
    "Introducing the Tesla Hawk Collection. The Men's Hawk Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
    images: ['1740250-00-E_0_2000.jpg', '1740250-00-E_1.jpg'],
    price: 150,
    unit: Unit.CENTIMETRO,
    slug: 'men_hawk_lightweight_zip_up_bomber_jacket',
    tags: ['shirt', 'shirts'],
    title: "Men's Hawk Lightweight Zip Up Bomber Jacket",
    available: true,
  },
  {
    description:
    "Introducing the Tesla Hawk Collection. Designed for style, comfort and everyday lifestyle, the Men's Hawk Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
    images: ['1740280-00-E_0_2000.jpg', '1740280-00-E_1.jpg'],
    price: 55,
    unit: Unit.LITRO,
    slug: 'men_hawk_long_sleeve_tee',
    tags: ['shirt', 'shirts'],
    title: "Men's Hawk Long Sleeve Tee",
    available: true,
  },
  {
    description:
    "Introducing the Tesla Hawk Collection. Designed for style, comfort and everyday lifestyle, the Men's Hawk Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
    images: ['1741416-00-E_0_2000.jpg', '1741416-00-E_1.jpg'],
    price: 50,
    unit: Unit.CENTIMETRO,
    slug: 'men_hawk_short_sleeve_tee',
    tags: ['shirt', 'shirts'],
    title: "Men's Hawk Short Sleeve Tee",
    available: true,
  }
  ],
};
