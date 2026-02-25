import Image from "next/image";
import nextLogo from "../public/next.svg";
import comoTan from "../public/como-tan.jpg";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col space-y-10 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src={nextLogo}
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="w-full flex flex-col items-center gap-6 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Bienvenidos a mi pagina
          </h1>

          <p className="text-lg">
            como tan muchachossss???? yo los veo a ustedes muyyy bien
          </p>

          <Image
            className="dark:invert"
            src={comoTan}
            alt="como tan"
            width={300}
            height={300}
            priority
          />
        </div>
      </main>
    </div>
  );
}
