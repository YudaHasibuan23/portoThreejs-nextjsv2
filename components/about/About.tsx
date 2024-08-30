import AboutGlobeAnimate from "./AboutGlobeAnimate"
import AnimateBody from "./AnimateBody"
import AnimateHeading from "./AnimateHeading"
import AnimateParagraph from "./AnimateParagraph"
import AnimateTitle from "./AnimateTitle"
import DiscordServer from "./DiscordServer"
import GithubGraph from "./GithubGraph"
import SocialMedia from "./SocialMedia"
import Spotify from "./Spotify"
import TiktokEmbed from "./TiktokEmbed"

export default function About() {
  return (
    <section
      id="about"
      className="relative mb-10 flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <div className="mb-10 flex w-full items-center justify-between gap-x-2 md:mb-16">
          <AnimateTitle
            title={"About me"}
            className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.0001em]"
          />
          <AboutGlobeAnimate />
        </div>

        <div className="mx-auto flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="lg:mg-16 mb-10 flex w-full flex-col gap-4 text-[18px] font-light leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:max-w-[90%] lg:text-base ">
            <AnimateParagraph
              paragraph="Hi everyone!👋🏼"
              delay={1.5}
              
            />
            <AnimateParagraph
              paragraph="Saya M Yuda, saat ini tinggal di Lhoksumawe, Indonesia. Saya memiliki lebih dari 3 tahun pengalaman sebagai Frontend Developer yang serba bisa, mahir dalam membuat, mengembangkan, dan mengelola situs web yang kompleks, dengan spesialisasi dalam React.js dan Next"
              delay={1.8}
              
            />
            <AnimateParagraph
              paragraph="Sebagai pengembang otodidak, saya terdorong oleh hasrat untuk menciptakan situs web yang menarik dan interaktif. Saya bukan hanya seorang pengkode tetapi juga seorang pemikir kreatif, pemecah masalah, dan pembelajar seumur hidup yang selalu bersemangat untuk menjelajahi teknologi baru,saya berasal dari universitas malikussaleh dan pada saat ini saya semester 7."
              delay={2}
              
            />
            
          
          </div>

          <div className="mb-24 flex w-full flex-col gap-4 leading-relaxed tracking-wide sm:mb-32 md:mb-40 md:gap-6 md:leading-relaxed lg:mb-16 lg:max-w-[90%]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="Web Devlop Tools" delay={0.5} />
              
              <AnimateBody
                text="GROQ"
                delay={1}
                className="text-sm"
              />
                <AnimateBody
                text="React Js, Vue Js, Three Js, Next js, Nuxt Js, Astro Js, Laravel"
                delay={1}
                className="text-sm"
              />
              <AnimateBody
                text="Tailwind CSS, SASS."
                delay={1}
                className="text-sm"
              />
            
              
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="Design & UI Tools" delay={1.4} />
              <AnimateBody
                text="Canva"
                delay={1.5}
                className="text-sm"
              />
               <AnimateBody
                text="Framer Motion"
                delay={1.5}
                className="text-sm"
              />
              <AnimateBody
                text="Figma"
                delay={1.5}
                className="text-sm"
              />
              
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="Cyber Security" delay={1.4} />
              
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="Machine Learning" delay={1.4} />
              <AnimateBody
                text="Keras"
                delay={1.5}
                className="text-sm"
              />
               <AnimateBody
                text="TensorFlow"
                delay={1.5}
                className="text-sm"
              />
              <AnimateBody
                text="PyTorch & Scikit-learn"
                delay={1.5}
                className="text-sm"
              />
              <AnimateBody
                text="Python"
                delay={1.5}
                className="text-sm"
              />
              
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-4 lg:max-w-[1200px] ">
          <GithubGraph />
          <SocialMedia />
        </div>
      </div>
    </section>
  )
}
