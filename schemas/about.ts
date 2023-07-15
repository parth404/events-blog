const about = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "hero_image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "block1",
      title: "Block1",
      type: "string",
    },
    {
      name: "block2",
      title: "Block2",
      type: "string",
    },
    {
      name: "block3",
      title: "Block3",
      type: "string",
    },
  ],
};

export default about;
