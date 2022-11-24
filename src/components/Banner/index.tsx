interface PropTypes {
    image: string
}

export const Banner = ({image}: PropTypes) => {
    return (
        <>
        <div className={`${image} w-[240px] h-[360px] bg-cover`}></div>
        </>
    )
}