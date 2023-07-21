type Props = {
  socials: Socials[];
};

function Contact({ socials }: Props) {
  return (
    <section
      id="contact"
      className="p-5 h-[30rem] md:h-[40rem] w-full flex md:justify-center md:text-center items-center"
    >
      <div className="max-w-contentContainer text-white">
        <h1 className="select-none text-3xl  md:text-6xl lg:text-7xl max-w-contentContainer mx-auto font-extrabold tracking-wide md:tracking-widest uppercase">
          get in touch
        </h1>
        <p className="md:text-xl max-w-4xl tracking-wider select-none py-12">
          Hello there! We&apos;re thrilled to have you here. Our virtual door is
          wide open for you, so don&apos;t be shy—drop us a line anytime! Have a
          question? Need assistance? Or simply want to share your thoughts?
          We&apos;re all ears and can&apos;t wait to hear from you.
        </p>
        <a href={`mailto:${socials[0].mail}`}>
          <button className="uppercase text-white font-poppins font-bold tracking-wide text-2xl bg-black/20 p-3 hover:scale-110 transition-transform ease-in-out duration-300 hover:bg-white hover:text-black hover:border-transparent shadow-white shadow-md border-2 ">
            say hello
          </button>
        </a>
      </div>
    </section>
  );
}

export default Contact;
