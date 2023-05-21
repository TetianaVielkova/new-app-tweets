import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
    return (
        <div className={css.containerFluid}>
        <div className={css.background}>
        <div className={css.cube}></div>
        <div className={css.cube}></div>
        <div className={css.cube}></div>
        <div className={css.cube}></div>
        <div className={css.cube}></div>
        </div>
        <header className={css.header}>
            <NavLink className={({ isActive }) => isActive ? css.navLinkActive : css.navLink} to="/">HOME</NavLink>
            <NavLink className={({ isActive }) => isActive ? css.navLinkActive : css.navLink} to="/tweets">TWEETS</NavLink>
        </header>
        <div className={css.titleContainer}>
            <h1 className={css.title}>Find your friends and follow them</h1>
        </div>
        </div>
    );
} 