import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitterX, BsGithub, BsDribbble } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-bold dark:text-white'>
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Arslan's</span> Blog
                </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <Footer.Title title='About Us' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://devifylabs.com/' target='_blank' rel='noopener noreferrer'>
                            Devify Labs
                        </Footer.Link>
                        <Footer.Link href='https://www.upwork.com/agencies/425236720825561088/' target='_blank' rel='noopener noreferrer'>
                            Upwork
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Our Portfolio' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://www.hidescanada.com' target='_blank' rel='noopener noreferrer'>
                            Hides Canada
                        </Footer.Link>
                        <Footer.Link href='https://lashible.com/' target='_blank' rel='noopener noreferrer'>
                            Lashible
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Legal' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='#'>
                            Policy
                        </Footer.Link>
                        <Footer.Link href='#'>
                            Terms
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />            
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright 
                    href='#' 
                    by='Arslan Blog' 
                    year={new Date().getFullYear()} 
                />
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsFacebook} />
                    <Footer.Icon href='#' icon={BsInstagram} />
                    <Footer.Icon href='#' icon={BsTwitterX} />
                    <Footer.Icon href='#' icon={BsGithub} />
                    <Footer.Icon href='#' icon={BsDribbble} />
                </div>
            </div>
        </div>
    </Footer>
  )
}
