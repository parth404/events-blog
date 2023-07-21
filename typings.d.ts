type Object = {
  title: string;
};

interface SlugData {
  title: string;
  slug: string;
}

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  content: Block[];
  hero_image: Image;
  slug: Slug;
  title: string;
  date: string;
  venue: string;
  description: string;
  alt: string;
  next: SlugData;
  prev: SlugData;
}

interface Info extends Base {
  title: string;
  subtitle: string;
  block1: string;
  block2: string;
  block3: string;
  alt: string;
  hero_image: Image;
}

interface Gallery extends Base {
  alt: string;
  image: Image;
}

interface galleryItem extends Base {
  alt: string;
  image: Image;
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

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface hero_image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _ref: "string";
  _type: "reference";
}

interface Title {
  _type: "string";
  current: string;
}

interface Socials extends Base {
  _type: "string";
  facebook: string;
  instagram: string;
  youtube: string;
  mail: string;
}

interface Description {
  _type: "string";
  current: string;
}
