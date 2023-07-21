import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

const socialQuery = groq`*[_type=='socials']{
  ...,
}`;

async function Footer(): Promise<JSX.Element> {
  const socials = await client.fetch(socialQuery);
  return (
    <section className="mt-12 md:mt-6 p-5 w-full inset-9 mx-auto text-white uppercase block md:flex justify-between">
      <div className="text-center md:text-left py-6 md:py-0 select-none">
        &copy; technodelic pvt ltd
      </div>
      <div className="flex justify-center gap-4 md:gap-6 px-6">
        <div>
          <a href={socials[0].youtube} target="blank" rel="noopener noreferrer">
            <svg
              width="22"
              height="22"
              viewBox="0 0 512 512"
              className="hover:scale-150 duration-500"
            >
              <path
                d="M265 96c65.3 0 118.7 1.1 168.1 3.3h1.4c23.1 0 42 22 42 49.1v1.1l.1 1.1c2.3 34 3.4 69.3 3.4 104.9.1 35.6-1.1 70.9-3.4 104.9l-.1 1.1v1.1c0 13.8-4.7 26.6-13.4 36.1-7.8 8.6-18 13.4-28.6 13.4h-1.6c-52.9 2.5-108.8 3.8-166.4 3.8h-10.6.1-10.9c-57.8 0-113.7-1.3-166.2-3.7h-1.6c-10.6 0-20.7-4.8-28.5-13.4-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-.2c-.1-35.3 1-70.5 3.3-104.6l.1-1.1v-1.1c0-27.2 18.8-49.3 41.9-49.3h1.4c49.5-2.3 102.9-3.3 168.2-3.3H265m0-32.2h-18c-57.6 0-114.2.8-169.6 3.3-40.8 0-73.9 36.3-73.9 81.3C1 184.4-.1 220 0 255.7c-.1 35.7.9 71.3 3.4 107 0 45 33.1 81.6 73.9 81.6 54.8 2.6 110.7 3.8 167.8 3.8h21.6c57.1 0 113-1.2 167.9-3.8 40.9 0 74-36.6 74-81.6 2.4-35.7 3.5-71.4 3.4-107.1.1-35.7-1-71.3-3.4-107.1 0-45-33.1-81.1-74-81.1C379.2 64.8 322.7 64 265 64z"
                fill="currentColor"
              />
              <path
                d="M207 353.8V157.4l145 98.2-145 98.2z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <div>
          <a
            href={socials[0].instagram}
            target="blank"
            rel="noopener noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 22"
              className="hover:scale-150 duration-500"
            >
              <path
                fill="none"
                stroke="currentColor"
                d="M5.87.123C4.242.196 2.83.594 1.691 1.729.548 2.869.155 4.286.081 5.897.036 6.902-.232 14.498.544 16.49a5.04 5.04 0 0 0 2.91 2.903c.634.246 1.356.412 2.416.461 8.86.401 12.145.183 13.53-3.364.246-.631.415-1.353.462-2.41.405-8.883-.066-10.809-1.61-12.351C17.027.507 15.586-.325 5.87.123m.081 17.944c-.97-.043-1.496-.205-1.848-.341a3.255 3.255 0 0 1-1.888-1.883c-.591-1.514-.395-8.703-.342-9.866.051-1.14.282-2.18 1.086-2.985.995-.992 2.28-1.479 11.034-1.084 1.142.052 2.186.282 2.992 1.084.995.993 1.489 2.288 1.087 11.008-.044.968-.206 1.493-.342 1.843-.901 2.308-2.973 2.628-11.779 2.224M14.09 4.69c0 .657.534 1.19 1.194 1.19.66 0 1.195-.533 1.195-1.19a1.195 1.195 0 0 0-2.39 0M4.863 9.988a5.103 5.103 0 0 0 5.11 5.097 5.103 5.103 0 0 0 5.109-5.097 5.102 5.102 0 0 0-5.11-5.096 5.102 5.102 0 0 0-5.11 5.096m1.794 0A3.313 3.313 0 0 1 9.972 6.68a3.313 3.313 0 0 1 3.317 3.308 3.313 3.313 0 0 1-3.317 3.31 3.313 3.313 0 0 1-3.316-3.31"
              ></path>
            </svg>
          </a>
        </div>
        <div>
          <a
            href={socials[0].facebook}
            target="blank"
            rel="noopener noreferrer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              className="hover:scale-150 duration-500"
            >
              <path
                fill="none"
                stroke="currentColor"
                d="M7.5 14.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm0 0v-8a2 2 0 0 1 2-2h.5m-5 4h5"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
