

export const Footer = () => {
  return (
    
<footer className=" bg-gradient-to-b from-gray-100 via-gray-100 to-gray-100  z-20   w-full">
    <div
        className="flex flex-col gap-8 flex-wrap max-w-[50vw] mx-auto md:max-w-full justify-center md:flex-row md:justify-between md:px-16 py-5 items-start  h-full"
    >
        <a href="/home" className="flex my-auto items-center">
            <img
                src={`https://byalvear.com/img/home/iso-light.png`}
                alt=""
                className="size-[70%] mx-auto my-auto md:w-[10rem] md:h-[10rem]"
            />
        </a>
        <div className="space-y-4 flex flex-col justify-start">
            <h4 className="font-bold text-2xl">Contacto</h4>
            <div className="text-sm">
                <p className="font-semibold space-y-1">Escribinos en</p>
                <a
                    href="mailto:consultas@byalvear.com"
                    className="underline underline-offset-4 flex gap-1 items-center transition-all hover:text-primary duration-500"
                    >consultas@byalvear.com</a
                >
            </div>
            <div className="text-sm">
                <p className="font-semibold space-y-1">Proyectos de Software</p>
                <a
                    href="mailto:desarrollos@byalvear.com"
                    className="underline underline-offset-4 flex gap-1 items-center transition-all hover:text-primary duration-500"
                    >desarrollos@byalvear.com</a
                >
            </div>
            <div className="text-sm">
                <p className="font-semibold space-y-1">Soporte & Errores</p>
                <a
                    href="mailto:ayuda@byalvear.com"
                    className="underline underline-offset-4 flex gap-1 items-center transition-all hover:text-primary duration-500"
                    >ayuda@byalvear.com</a
                >
            </div>
        </div>
        <div className="space-y-4 flex flex-col h-full justify-start">
            <h4 className="font-bold text-2xl">Redes Sociales</h4>
            <a href="https://www.instagram.com/by.alvear/" className="flex items-center gap-1 transition-all hover:text-primary duration-500"
                >@by.alvear
            </a>
        </div>
        <div></div>
    </div>
    <div
        className="md:px-10 py-2 w-full flex gap-2 mx-auto md:gap-5 md:justify-start justify-center flex-col md:flex-row text-center"
    >
        <span className="col-span-1 text-sm text-gray-500">© byAlvear 2024</span>
        <div className="border-t  md:border-t-0 md:border-l border-gray-300 "></div>
        <span className="text-sm text-gray-500">DevsAlvear</span>
    </div>
</footer>

  )
}
