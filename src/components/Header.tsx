import { Icon } from '@iconify/react';

export const Header = () => {
    return (
        <header className="h-[15vh] flex item-center justify-between w-full py-2 px-10 z-20">
            <div className="flex items-center ">

                <div className="size-12 rounded-full overflow-hidden shadow-xl">
                    <img src="https://byalvear.com/img/home/logo-light.png " alt="" className="w-full h-full object-contain" />
                </div>

                <h1 className="text-2xl font-bold ml-2 ">byAlvear</h1>
            </div>
            <div className="flex items-center">
                <button className="flex gap-2 bg-primary animate-pulse rounded-full text-primary-foreground px-4 py-1 items-center justify-center">Jugar<Icon icon="tabler:player-play" className='size-5'></Icon></button>
            </div>
        </header>
    )
}
