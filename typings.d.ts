type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Event extends Base {
  body: Block[];
  hero_image: Image;
  slug: Slug;
  title: string;
  date: string;
  venue: string;
  description: string;
  image1: Image;
  image2: Image;
  image3: Image;
}

interface Info extends Base {
  body: Block[];
  hero_image: Image;
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface hero_image {
  _type: "image";
  asset: Reference;
}

interface Image1 {
  _type: "image";
  asset: Reference;
}

interface Image2 {
  _type: "image";
  asset: Reference;
}

interface Image3 {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}

interface Description {
  _type: "string";
  current: string;
}
