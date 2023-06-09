import { Store } from "@/utils/Store";
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  return (
    <>
      <Head>
        <title>{title ? title + " - Amazona" : "Amazona"}</title>
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <nav className='flex h-12 items-center px-4 justify-between shadow-md'>
            <Link legacyBehavior href='/'>
              <a className='text-lg font-bold'>amazona</a>
            </Link>
            <div>
              <Link legacyBehavior href='/cart'>
                <a className='p-2'>
                  Cart
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </a>
              </Link>
              <Link legacyBehavior href='/Login'>
                <a className='p-2'>Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='flex h-10 justify-center items-center shadow-inner'>
          Footer
        </footer>
      </div>
    </>
  );
}
