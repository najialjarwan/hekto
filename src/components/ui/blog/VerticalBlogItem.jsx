import { Pen, Calendar } from '@/assets/icons';

const VerticalBlogItem = ({ content }) => {
    return (
        <div
            className="
            w-fit h-fit
            flex flex-col items-start
            shadow-2
            group"
        >

            <img
                src={content.image}
                alt=""
                className="rounded-[8px]"
            />

            <div
                className="
                mt-[19px] mb-[31px] ml-[14px]
                flex gap-[44px]
                text-text text-[14px] leading-none font-primary font-normal not-italic"
            >
                <p
                    className='
                    flex items-center gap-[4px]'
                >
                    <Pen />
                    <span>{content.author}</span>
                </p>
                <p
                    className='
                    flex items-center gap-[4px]'
                >
                    <Calendar />
                    <span>{content.date}</span>
                </p>
            </div>

            <div
                className="
                ml-[19px]
                flex flex-col items-start"
            >
                <header
                    className="
                    mb-[17px]
                    text-text text-[18px] leading-none font-primary font-bold not-italic
                    group-hover:text-pink"
                >
                    {content.title}
                </header>
                <p
                    className="
                    w-[301px] mb-[14px]
                    text-[#72718F] text-[16px] leading-[30px] font-secondary font-normal"
                >
                    {content.text}
                </p>
                <button
                    className="
                    mb-[35px]
                    text-text text-[16px] align-top leading-[30px] font-secondary font-normal
                    underline underline-offset-4 decoration-1
                    group-hover:text-pink cursor-pointer"
                >
                    Read More
                </button>
            </div>

        </div>
    );
}

export default VerticalBlogItem;