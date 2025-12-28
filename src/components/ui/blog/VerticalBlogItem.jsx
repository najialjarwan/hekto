import { Pen, Calendar } from '@/assets/icons';

const VerticalBlogItem = ({ content }) => {
    return (
        <div
            className="
            w-fit h-fit
            flex flex-col items-start"
        >

            <img
                src={content.image}
                alt=""
                className=""
            />

            <div className="mt-[19px] ml-[14px] flex gap-[44px]">
                <p className='flex items-center gap-[4px]'>
                    <Pen />
                    <span>{content.author}</span>
                </p>
                <p className='flex items-center gap-[4px]'>
                    <Calendar />
                    <span>{content.date}</span>
                </p>
            </div>

        </div>
    );
}

export default VerticalBlogItem;