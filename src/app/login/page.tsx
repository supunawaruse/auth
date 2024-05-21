'use client';
import Link from 'next/link';
import { socialLogin } from '../../lib/actions';
import MicrosoftAuthBtn from '@/components/azureButton';

export default function Login() {
    return (
        <div
            className="flex h-full px-5 md:pr-0 lg:pl-20 shadow-inner bg-primaryTheme-50 justify-center md:justify-normal bg-cover sm:bg-contain bg-no-repeat"
            style={{
                backgroundImage: 'url(../../../static/images/login_bg.svg)'
            }}
        >
            <div className="grid text-center md:text-left grid-cols-1 lg:grid-cols-2 min-w-full">
                <div
                    className="self-center lg:w-4/6 py-16 2xl:py-24 3xl:py-40 px-8"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        backdropFilter: 'blur(13.2px)',
                        WebkitBackdropFilter: 'blur(13.2px)',
                        borderRadius: 10,
                        border: '2px solid #ffffff8a'
                    }}
                >
                    <h1 className="font-normal text-5xl leading-loose lg:leading-loose mb-3 md:mb-6 text-primarySub-300 text-center">
                        Log In
                    </h1>
                    <form className="flex flex-col items-center" action={socialLogin}>
                        <MicrosoftAuthBtn />
                    </form>

                    <h6 className="text-primarySub-700 font-normal text-xs px-12 mt-8 text-center">
                        By proceeding you confirm you have read and understood the{' '}
                        <Link href="/privacy-policy" className="underline">
                            Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link href="/terms-conditions" className="underline">
                            Terms & Conditions
                        </Link>{' '}
                        of Flowyzer
                    </h6>
                </div>
                <div className="hidden lg:flex pt-20">
                    <div
                        className="lg:flex lg:flex-1 w-full items-end justify-end bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: 'url(../../../static/images/back.svg)'
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}