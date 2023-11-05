import { Link } from "react-router-dom";

const BlogDetail = () => {
    return (
        <div className="max-w-6xl mx-auto my-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-6">
                    <img className="rounded-xl shadow-lg" src="https://i.ibb.co/qFCQbRw/00001.webp" alt="" />
                    <span className="btn btn-ghost btn-sm bg-gray-300 rounded-full text-white mr-3">category</span>
                    <Link><button className="btn btn-primary btn-sm rounded-full text-white">Update</button></Link>
                    <h1 className="text-3xl text-primary font-bold">Mastering the Art of Blogging</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit animi, nesciunt repellat laborum a repellendus ullam ut commodi facere adipisci iusto molestias est laudantium ipsum blanditiis odit magni ipsam sapiente aliquam, consequuntur dicta nisi, impedit nam. Excepturi reprehenderit accusantium tempore!</p>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur, doloribus iusto accusamus deserunt eveniet quas et voluptates ea nihil quo, quam, exercitationem culpa blanditiis odio magni fugit ab! Voluptatum amet vitae iste! Pariatur iste, accusantium debitis ab, excepturi laboriosam culpa sed vel, sint molestiae sapiente laborum fugit quod eveniet quam minus deleniti quisquam eos modi. Quos eaque delectus reprehenderit odit, voluptate ducimus ea earum rem fugiat excepturi nobis eveniet obcaecati? Asperiores fugit labore, provident aut voluptatem dolore iste? Rerum cumque iusto eaque natus commodi dolorem temporibus, odit at fuga delectus nemo neque. Laboriosam accusantium amet, officiis nihil vero illo, omnis iusto vel perspiciatis maiores nesciunt? Minus, incidunt quibusdam laborum quisquam eum numquam</p>

                    {/* Add comment */}
                    <form>
                        <div className="w-full flex flex-col justify-center">
                        <textarea name="" id="" cols="35" rows="3" placeholder="Type your comment..." className="p-2 rounded-xl rounded-b-none"></textarea>
                            <input className="btn btn-secondary btn-sm rounded-t-none" type="submit" value="submit" />
                        </div>
                    </form>

                    {/* Show Comments */}
                    <div className="bg-white p-5 rounded-xl">
                        <div className="flex justify-start items-center gap-3">
                            <img className="w-[40px] rounded-full" src="https://i.ibb.co/9qmtc5b/person-1.jpg" alt="" />
                            <p className="text-lg font-bold ">jonn</p>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ab cum, est illo blanditiis dolorum nam laudantium expedita, hic incidunt amet delectus quidem quibusdam quo deserunt vel adipisci corrupti dolore.</p>
                    </div>

                </div>

                {/* Side Panal */}
                <div className="h-fit bg-gray-300 py-10 rounded-xl hidden md:flex flex-col">
                    <div className="w-full flex justify-center">
                        <img className="w-[150px] rounded-full" src="https://i.ibb.co/9qmtc5b/person-1.jpg" alt="" />
                    </div>
                    <h6 className="text-xl text-center">jon likton</h6>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;