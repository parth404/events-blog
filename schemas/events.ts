const events = {
  name: "events",
  title: "Events",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "description",
      title: "Description",
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
      name: "venue",
      title: "Venue",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
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
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};

export default events;
