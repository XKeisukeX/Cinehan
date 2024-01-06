export default function Navbar() {
    return  <header>
        <nav class="container flex items-center justify-between p-6 relative">
    <div class="text-white flex gap-1 items-center">
        <i class="fa fa-film text-2xl text-color-secondary"></i>
        <a href="/" class="text-2xl font-bold"><span class="text-color-secondary">Cine</span>han</a>
    </div>
    <div>
        <ul class="hidden lg:flex items-center space-x-6">
            <li><a href="/" class="font-medium text-color-secondary ease-in duration-200">Home</a></li>
            <li><a href="/Trending" class="font-medium hover:text-color-secondary ease-in duration-200 text-white">Trending</a></li>
            <li><a href="/Movies" class="font-medium hover:text-color-secondary ease-in duration-200 text-white">Movies</a></li>
            <li><a href="/Series" class="font-medium hover:text-color-secondary ease-in duration-200 text-white">Series</a></li>

            <div class="md:hidden flex items-center gap-2">
                <input type="text" class="py-1 px-4 text-color-primary font-thin rounded-full focus:outline-none hover:focus:outline-gray-500" placeholder="Search" />
                <button><i class="fa fa-search text-white text-xl hover:text-lg hover:opacity-80 ease-in duration-200"></i></button>
            </div>

            <li><button class="py-1 px-4 text-white bg-color-secondary rounded-lg font-semibold hover:opacity-80 ease-in duration-200"><i class="fa fa-sign-in"></i>Login</button></li>
        </ul>
    </div>

    <div class="lg:hidden flex items-center gap-2 absolute top-20 left-5">
        <input type="text" class="py-1 px-4 text-color-primary font-thin rounded-full focus:outline-none hover:focus:outline-gray-500" placeholder="Search" />
        <button><i class="fa fa-search text-white text-xl hover:text-lg hover:opacity-80 ease-in duration-200"></i></button>
    </div>

    <div class="lg:hidden">
        <i class="fa fa-bars text-2xl text-white"></i>
    </div>

    </nav>
    </header>
}