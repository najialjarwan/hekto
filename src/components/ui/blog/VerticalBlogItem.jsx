
const VerticalBlogItem = ({ content }) => {
    return (
        <div
            className="
            w-[370px] h-[493px]
            flex flex-col items-start"
        >

            <img 
                src={content.iamge}
                alt="" 
                className=""
                />

            <div className=""></div>

        </div>
    );
}

export default VerticalBlogItem;