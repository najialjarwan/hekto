
const blogItems = [
    {
        image: "src/assets/images/JIUjvqe2ZHg.png",
        author: "Sober Ali",
        date: "21 August,2020",
        title: "Top esssential Trends in 2021",
        text: "More off this less hello samlande lied muchover tightly circa horse taped mightly",
    },
    {
        image: "src/assets/images/JIUjvqe2ZHg.png",
        author: "Sober Ali",
        date: "21 August,2020",
        title: "Top esssential Trends in 2021",
        text: "More off this less hello samlande lied muchover tightly circa horse taped mightly",
    },
    {
        image: "src/assets/images/JIUjvqe2ZHg.png",
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

            </main>
        </section>
    );
}

export default LatestBlog;