const upcoming = {
  name: "upcoming",
  title: "Upcoming Events",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          min: {
            (arg0: number): {
              (): any;
              new (): any;
              max: {
                (arg0: number): {
                  (): any;
                  new (): any;
                  error: { (arg0: string): any; new (): any };
                };
                new (): any;
              };
            };
            new (): any;
          };
        };
      }) => Rule.required().min(1).max(3).error("Value must be between 1 to 3"),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          min: {
            (arg0: number): {
              (): any;
              new (): any;
              max: {
                (arg0: number): {
                  (): any;
                  new (): any;
                  error: { (arg0: string): any; new (): any };
                };
                new (): any;
              };
            };
            new (): any;
          };
        };
      }) =>
        Rule.required()
          .min(10)
          .max(40)
          .error("Title must be between 10 to 40 characters"),
    },
    {
      name: "eventDate",
      title: "Event Date",
      type: "date",
      options: {
        dateFormat: "DD-MM-YY",
      },
    },
    {
      name: "artist",
      title: "Artist",
      type: "string",
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
    },
  ],
};

export default upcoming;
