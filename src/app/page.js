import Hadith from "@/components/hadith/Hadith"
import Hero from "@/components/hero/Hero"
import Names from "@/components/names/Names"


export default function Home() {
  return (
    <main>
      <Hero />
      <section className="bg-black">
        <Hadith />
        {/* <details open class="w-96 bg-white p-4 rounded-xl shadow-md group mx-auto  max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-500 overflow-hidden">
          <summary
            class="outline-none cursor-pointer focus:underline focus:text-indigo-600 font-semibold marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]"
          >
            Title
          </summary>

          <hr class="my-2 scale-x-150" />

          <div class="text-sm -m-4 -mt-2 p-4 bg-gray-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium nisi
            at turpis euismod malesuada. Nulla ultrices ullamcorper justo, ut aliquet
            purus lacinia vitae. Nunc vitae tempus odio, nec molestie magna. Proin non
            tortor enim. Fusce eget dui enim. Phasellus tristique vitae arcu molestie
            porta. Etiam vitae dui sed lorem viverra pulvinar ac sed ligula. Etiam
            hendrerit felis risus, in laoreet dui viverra eget. Nunc lobortis turpis
            tellus, ac dignissim felis suscipit sed. Cras consequat, erat eget
            lobortis vehicula, velit justo consectetur dolor, sit amet pretium elit
            tortor eget est. Phasellus ut laoreet lacus, ut tincidunt sem.
          </div>
        </details> */}
        <div class="max-w-2xl mx-auto bg-white p-16 rounded">

          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button type="button" class="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <span>What is Flowbite?</span>
                <svg data-accordion-icon class="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
              <div class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
                <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive
                  components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a
                  href="#" target="_blank"
                  class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing
                  websites even faster with components on top of Tailwind CSS.</p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
              <button type="button" class="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 border-b-0 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span>Is there a Figma file available?</span>
                <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
              <div class="p-5 border border-gray-200 dark:border-gray-700 border-b-0">
                <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the
                  Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/"
                  target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a>
                  based on the utility classes from Tailwind CSS and components from Flowbite.</p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
              <button type="button" class="flex items-center border focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 border-gray-200 dark:border-gray-700 justify-between p-5 w-full font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                <span>What are the differences between Flowbite and Tailwind UI?</span>
                <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
              <div class="p-5 border border-gray-200 dark:border-gray-700 border-t-0">
                <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from
                  Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another
                  difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.</p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite,
                  Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best
                  of two worlds.</p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                <ul class="list-disc pl-5 dark:text-gray-400 text-gray-500">
                  <li><a href="https://flowbite.com/pro/" target="_blank"
                    class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                  <li><a href="https://tailwindui.com/" rel="nofollow" target="_blank"
                    class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                </ul>
              </div>
            </div>
          </div>

          <p class="mt-5">This accordion component is part of a larger, open-source library of Tailwind CSS components. Learn
            more
            by going to the official <a class="text-blue-600 hover:underline"
              href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite Documentation</a>.
          </p>
          <script src="https://unpkg.com/flowbite@1.3.3/dist/flowbite.js"></script>
        </div>
        <Names />
      </section>

    </main>
  )
}
