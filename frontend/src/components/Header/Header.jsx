import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import CountrySearch from '../../pages/CountrySearch/CountrySearch';
import { Loader } from '../Loader/Loader';
import HeaderSCSS from './Header.module.scss'

export const HeaderAll = () => {
    return (
        <section className={HeaderSCSS.section}>
            <header className={HeaderSCSS.header}>
                <h2 className={HeaderSCSS.title}> The flags of the world</h2>
                </header>
            <CountrySearch/>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </section>
    );
};