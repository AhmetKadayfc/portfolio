import Link from "next/link";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Particles from "./components/particles";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/ahmet-kadayifci/",
		label: "LinkedIn",
		handle: "@ahmet-kadayifci",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:ahmettkadayifci@gmail.com",
		label: "Email",
		handle: "ahmettkadayifci@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/Ahmetkadayfc",
		label: "Github",
		handle: "Ahmetkadayfc",
	},
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {socials.map((s) => (
            <Link
								key={s.label}
								href={s.href}
								target="_blank"
								className="pb-16 pt-4 px-8 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:pb-20 md:pt-14 md:px-20"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>
							</Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Ahmet Kadayıfçı
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-6 text-center animate-fade-in md:my-0">
        <h2 className="text-md text-zinc-500 p-6">
          Merhaba, ben Ahmet! Yazılım dünyasında kodlarla yeni şeyler yaratmayı ve problemleri çözmeyi seviyorum.<br /> Özellikle backend sistemleri üzerine çalışarak, kullanıcıların fark etmediği ama uygulamanın kalbi olan o sağlam temelleri inşa ediyorum.
        </h2>
      </div>
    </div>
  );

}
