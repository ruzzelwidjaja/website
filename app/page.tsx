
export default function Home() {
  return (
    <main className="mx-auto max-w-[692px] px-6 text-gray-1200 antialiased sm:my-32 my-16">
      <header className="mb-32 flex flex-col items-start">
        <a className="text-medium inline-block font-medium no-underline text-slate-100 " href="/">Ruzzell Widjaja</a>
        <span className="text-medium font-medium leading-none text-neutral-400">Software Engineer</span>
      </header>

      <div>
        <span className="mb-5 block font-medium sm:mb-4 text-slate-100">Today</span>
        <p className="text-neutral-400">
          I work as a software engineer intern at {' '} 
          <a href="https://bounceinsights.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-3 hover:bg-[url('/static/Squiggle.svg')] hover:no-underline text-neutral-300">
            Bounce Insights ↗ {" "}
          </a>
          ‎ in Dublin.
        </p>
        <div className="mb-3 mt-16 sm:mt-32">
          <span className="mb-5 block font-medium sm:mb-4 text-slate-100">Projects</span>
          <div className="flex flex-col gap-7 sm:gap-4">
            <a href="https://countrycatalog.vercel.app/" target="_blank" className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-zinc-800 sm:py-3">
              <span className="text-neutral-200">Country Catalog</span>
              <span className="text-neutral-400">Search information about any country in the world and generate a travel guide.</span>
            </a>
            <a href="/" className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-zinc-800 sm:py-3">
              <span className="text-neutral-200">Dublin Bus Journey Planner</span>
              <span className="text-neutral-400">Web app to predict journey times accurately for Dublin Bus trips, provide clear directions, and more.</span>
            </a>
          </div>
        </div>

        <div className="mt-16 sm:mt-32">
          <span className="mb-5 block font-medium sm:mb-4 text-slate-100">More</span>
          <span className="text-neutral-400">
            You can connect with me on{' '}
            <a href="http://linkedin.com/in/ruzzelwidjaja" target="_blank" rel="noopener noreferrer" className="hover:underline text-neutral-300">
              LinkedIn ↗ 
            </a>
            {' '}or see more of my code on{' '}
            <a href="http://github.com/ruzzelwidjaja" target="_blank" rel="noopener noreferrer" className="hover:underline text-neutral-300">
              GitHub ↗ 
            </a>
            .
          </span>

        </div>
      </div>
    </main>
  );
}
