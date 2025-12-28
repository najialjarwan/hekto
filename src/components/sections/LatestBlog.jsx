import VerticalBlogItem from "@blog/VerticalBlogItem";

const blogContent = [
    {
        image: "src/assets/images/JIUjvqe2ZHg.png",
        author: "Sober Ali",
        date: "21 August,2020",
        title: "Top esssential Trends in 2021",
        text: "More off this less hello samlande lied muchover tightly circa horse taped mightly",
    },
    {
        image: "src/assets/images/2dcYhvbHV-M.png",
        author: "Sober Ali",
        date: "21 August,2020",
        title: "Top esssential Trends in 2021",
        text: "More off this less hello samlande lied muchover tightly circa horse taped mightly",
    },
    {
        image: "src/assets/images/2dcYhvbHV-M-1.png",
        author: "Sober Ali",
        date: "21 August,2020",
        title: "Top esssential Trends in 2021",
        text: "More off this less hello samlande lied muchover tightly circa horse taped mightly",
    },
]

const LatestBlog = ({ title }) => {
    return (
        <section
            data-title={title}
            className="
            mb-[115px]
            flex flex-col items-start gap-20"
        >

            <header
                className="
                caption-title"
            >
                {title}
            </header>

            <main
                className="
                flex flex-row gap-[56px]"
            >
                {blogContent.map((content, i) => (
                    <VerticalBlogItem
                        key={i}
                        content={content}
                    />
                ))}
            </main>
        </section>
    );
}

export default LatestBlog;