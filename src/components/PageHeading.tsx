export default function PageHeading({ title }: { title: string }) {
    return (
        <h2 className="
            mt-10
            xl:mt-14 
            font-(family-name:--font-aboreto) 
            self-center 
            pt-4 
            pb-2 
            px-10 
            text-2xl 
            text-(--main-100)
            uppercase
            tracking-widest">
                {title}
        </h2>
    )
}