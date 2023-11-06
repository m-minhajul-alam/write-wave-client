import DataTablt from "react-data-table-component"

const FeaturedBlog = () => {
    const columns = [
        {
            name: "SL"
        },
        {
            name: "Photo"
        },
        {
            name: "Name"
        },
        {
            name: "Title"
        },
    ]


    return (
        <div className="my-4 rounded-xl">
            <div>
                <h1 className="text-primary text-3xl text-center font-bold py-5">Featured Blog</h1>
                <p className="text-sm text-center font-bold mb-3">Discover outstanding content  in our <br /> Featured Blog section..</p>
            </div>

            <DataTablt
                columns={columns}
                persistTableHead
            ></DataTablt>
        </div>
    );
}

export default FeaturedBlog;