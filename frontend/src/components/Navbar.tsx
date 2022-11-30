import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'

const Navbar = () =>
  <nav className="bg-inventuresBlue flex min-h-[64px] items-center justify-between px-5">
    <div className='flex space-x-4 items-center'>
      <button>
        <Bars3Icon className='h-6 w-6 text-white'/>
      </button>
      <h2 className='font-medium text-2xl text-white'>Mi pastillero</h2>
    </div>
    <div className='flex space-x-8'>
      <button>
        <MagnifyingGlassIcon className='h-6 w-6 text-white'/>
      </button>
      <button>
        <ShoppingCartIcon className='h-6 w-6 text-white'/>
      </button>
    </div>
  </nav>

export default Navbar;