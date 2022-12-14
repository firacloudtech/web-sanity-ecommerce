export interface ProductType {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  details: string;
  image: Image[];
  name: string;
  price: number;
  slug: Slug;
}

export interface Image {
  _key: string;
  _type: string;
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Slug {
  _type: string;
  current: string;
}
