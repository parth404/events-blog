const gallery = {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // <== Defaults to false
      },
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
    {
      name: "alt",
      title: "Alt Text",
      type: "string",
    },
  ],
};

export default gallery;
