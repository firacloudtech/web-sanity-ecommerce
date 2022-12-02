export default {
  name: "Product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "image",
      type: "array",
      title: "Image",
      of: [
        {
          type: "image",
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "details",
      type: "string",
    },
  ],
};
