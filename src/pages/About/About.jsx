import HeroImg from "@/assets/images/hero.jpg";



export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Hazrat Ali Software Engineering
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
              Hello, I'm Hazrat Ali, a dedicated Software Developer with a passion for crafting robust and innovative solutions. My journey in the world of technology has been an exciting exploration, and I'm thrilled to share a bit about myself with you.{" "}
                <span className="font-bold text-white">
                Proficient in MERN Stack and Python: I specialize in MERN (MongoDB, Express.js, React, Node.js) stack development, harnessing the power of these technologies to build dynamic and scalable applications. Additionally, my proficiency extends to Python, where I've had the pleasure of working on diverse projects, including those leveraging the Django framework
                </span>
                , Passion for Problem-Solving: What fuels my enthusiasm for software development is the thrill of problem-Solving. I thrive on challenges, and the dynamic nature of the tech world keeps me constantly engaged. My goal is not just to write code but to architect solutions that stand the test of time.
              </p>
              <p className="text-white">
              Let's Collaborate: Whether you have a project in mind, wish to discuss the latest trends in tech, or just want to connect with a fellow enthusiast, I'm always open to collaboration and conversation. Feel free to reach out to me via email or connect with me on LinkedIn.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                  Thank you for visiting my corner of the web. Let's embark on a journey of innovation together
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Hazrat Ali, Creator of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={HeroImg}
                        alt="hero logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Hazrat Ali</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
// About js
