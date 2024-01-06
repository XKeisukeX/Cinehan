export default function Home() {
    return <section id="home" class="mb-5">
    <div class="container space-y-10">
        <div class="md:-m-7 md:pt-10">
            <h2 class="font-bold text-2xl text-white">Recommended</h2>
        </div>
        
        <div class="border-2 border-solid border-gray-500 rounded-xl">
            <div class="sm-img rounded-xl">
                <div class="py-6 px-6">
                    <h2 class="text-3xl font-semibold capitalize pt-1 text-white">Spider-man: no way home</h2>
                    <p class="leading-relaxed lg:w-3/5 py-4 text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia dolores iste accusantium, vel error molestiae possimus distinctio nihil placeat vero suscipit, natus aliquam optio. Neque ullam harum hic excepturi libero.</p>
                    <div class="flex items-center gap-2">
                    <button class="py-1 px-4 rounded-xl bg-white text-color-secondary font-semibold text-sm hover:bg-color-secondary hover:text-white ease-in duration-200"><i class="fa fa-play"></i>Play</button>
                    <button class="py-1 px-4 rounded-xl bg-white text-color-secondary font-semibold text-sm hover:bg-color-secondary hover:text-white ease-in duration-200"><i class="fa fa-info-circle"></i>More info</button>
                    </div>
                </div>
            </div>
        </div>

    <div class="space-y-10">
        <div class="md:-m-7">
            <h2 class="font-bold text-2xl text-white">Popular on <span class="text-color-secondary">Cine</span>han</h2>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-6">
            <div class=" lg:h-[25vh] h-[50vh] lg:hover:-translate-y-2 transition duration-300">
                <div class="la-img rounded-lg w-full h-full  ease-in duration-200 cursor-pointer lg:opacity-70 lg:hover:opacity-100">
                    <div class="py-4 px-4 text-center">
                        <i class="fa fa-play-circle-o text-5xl text-white lg:mt-10 mt-28 hover:text-color-secondary ease-in duration-200"></i>
                    </div>
                </div>
            </div>

            <div class="lg:h-[25vh] h-[50vh] lg:hover:-translate-y-2 transition duration-300">
                <div class="tp-img rounded-lg w-full h-full ease-in duration-200 cursor-pointer lg:opacity-70 lg:hover:opacity-100">
                    <div class="py-4 px-4 text-center">
                        <i class="fa fa-play-circle-o text-5xl text-white lg:mt-10 mt-28 hover:text-color-secondary ease-in duration-200"></i>
                    </div>
                </div>
            </div>

            <div class="lg:h-[25vh] h-[50vh] lg:hover:-translate-y-2 transition duration-300">
                <div class="hp-img rounded-lg w-full h-full ease-in duration-200 cursor-pointer lg:opacity-70 lg:hover:opacity-100">
                    <div class="py-4 px-4 text-center">
                        <i class="fa fa-play-circle-o text-5xl text-white lg:mt-10 mt-28 hover:text-color-secondary ease-in duration-200"></i>
                    </div>
                </div>
            </div>

            <div class="lg:h-[25vh] h-[50vh] lg:hover:-translate-y-2 transition duration-300">
                <div class="cn-img rounded-lg w-full h-full ease-in duration-200 cursor-pointer lg:opacity-70 lg:hover:opacity-100">
                    <div class="py-4 px-4 text-center ">
                        <i class="fa fa-play-circle-o text-5xl text-white lg:mt-10 mt-28 hover:text-color-secondary ease-in duration-200"></i>
                    </div>
                </div>
            </div>

            <div class="lg:h-[25vh] h-[50vh] lg:hover:-translate-y-2 transition duration-300">
                <div class="ism-img rounded-lg w-full h-full ease-in duration-200 cursor-pointer lg:opacity-70 lg:hover:opacity-100">
                    <div class="py-4 px-4 text-center">
                        <i class="fa fa-play-circle-o text-5xl text-white lg:mt-10 mt-28 hover:text-color-secondary ease-in duration-200"></i>
                    </div>
                </div>
            </div>

            <div class="lg:h-[25vh] h-[50vh] lg:hover:-translate-y-2 transition duration-300">
                <div class="jc-img rounded-lg w-full h-full ease-in duration-200 cursor-pointer lg:opacity-70 lg:hover:opacity-100">
                    <div class="py-4 px-4 text-center">
                        <i class="fa fa-play-circle-o text-5xl text-white lg:mt-10 mt-28 hover:text-color-secondary ease-in duration-200"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
</section>

}