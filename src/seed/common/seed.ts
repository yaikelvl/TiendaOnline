import { Unit } from 'src/products/enums/unit.enum';

interface SeedProduct {
  description: string;
  images: string[];
  price: number;
  unit: Unit;
  slug: string;
  tags: string[];
  title: string;
}

type ValidSizes = 'UN' | 'KG' | 'G' | 'L' | 'ML' | 'CM' | 'IN' | 'FT';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

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
    },
    {
      description:
        'Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.',
      images: ['7654393-00-A_2_2000.jpg', '7654393-00-A_3.jpg'],
      price: 35,
      unit: Unit.CENTIMETRO,
      slug: 'men_cybertruck_owl_tee',
      tags: ['shirt', 'shirts'],
      title: "Men's Cybertruck Owl Tee",
    },
    {
      description:
        "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      images: ['1703767-00-A_0_2000.jpg', '1703767-00-A_1.jpg'],
      price: 35,
      unit: Unit.PULGADA,
      slug: 'men_solar_roof_tee',
      tags: ['shirt', 'shirts'],
      title: "Men's Solar Roof Tee",
    },
    {
      description:
        "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      images: ['1700280-00-A_0_2000.jpg', '1700280-00-A_1.jpg'],
      price: 35,
      unit: Unit.MILILITRO,
      slug: 'men_let_the_sun_shine_tee',
      tags: ['shirt', 'shirts'],
      title: "Men's Let the Sun Shine Tee",
    },
    {
      description:
        "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
      images: ['8764734-00-A_0_2000.jpg', '8764734-00-A_1.jpg'],
      price: 35,
      unit: Unit.PIE,
      slug: 'men_3d_large_wordmark_tee',
      tags: ['shirt', 'shirts'],
      title: "Men's 3D Large Wordmark Tee",
    },
    {
      description:
        "The Women's Chill Crew Neck Sweatshirt offers a premium, heavyweight exterior and soft fleece interior for comfort in any season. It features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ['1740176-01-A_0_2000.jpg', '1740176-01-A_1.jpg'],
      price: 75,
      unit: Unit.CENTIMETRO,
      slug: 'womens_chill_crew_neck_sweatshirt',
      tags: ['sweatshirt', 'shirts'],
      title: "Women's Chill Crew Neck Sweatshirt",
    },
    {
      description:
        "The Women's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: ['1740507-01-A_0_2000.jpg', '1740507-01-A_1.jpg'],
      price: 200,
      unit: Unit.KILOGRAMO,
      slug: 'women_quilted_shirt_jacket',
      tags: ['jacket', 'shirts'],
      title: "Women's Quilted Shirt Jacket",
    },
    {
      description:
        "The Women's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: ['1740250-01-A_0_2000.jpg', '1740250-01-A_1.jpg'],
      price: 130,
      unit: Unit.UNIDAD,
      slug: 'women_raven_lightweight_zip_up_bomber_jacket',
      tags: ['shirt', 'shirts'],
      title: "Women's Raven Lightweight Zip Up Bomber Jacket",
    },
    {
      description:
        "The Women's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      images: ['1740280-01-A_0_2000.jpg', '1740280-01-A_1.jpg'],
      price: 45,
      unit: Unit.CENTIMETRO,
      slug: 'women_turbine_long_sleeve_tee',
      tags: ['shirt', 'shirts'],
      title: "Women's Turbine Long Sleeve Tee",
    },
    {
      description:
        "The Women's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      images: ['1741416-01-A_0_2000.jpg', '1741416-01-A_1.jpg'],
      price: 40,
      unit: Unit.METRO,
      slug: 'women_turbine_short_sleeve_tee',
      tags: ['shirt', 'shirts'],
      title: "Women's Turbine Short Sleeve Tee",
    },
  ],
};
