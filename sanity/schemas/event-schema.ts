const events = {
  name: "events",
  title: "Events",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      // validation: (rule) => [
      //   rule
      //     .required()
      //     .min(10)
      //     .error("A title of min. 10 characters is required"),
      //   rule.max(50).warning("Shorter titles are usually better"),
      // ],
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "DD-MM-YY",
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
    {
      name: "image",
      title: "Image",
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
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default events;
