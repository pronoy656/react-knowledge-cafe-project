

const Blog = ({blog,handleAddBookMark,handleMarkAsRead}) => {
    const {id,title,cover,author_img,author_image,posted_date,reading_time,hashtags} = blog;
    return (
        <div>
           <div className="mt-4">
           <img src={cover} alt={`Cover Picture Of the title ${title}`} />
           </div>
         <div className="flex justify-between items-center mt-8">
            <div className="flex gap-x-6">
                <div className="w-16 h-16">
                    <img className="rounded-3xl" src={author_image} alt="" />
                </div>
                <div>
                    <p className="text-2xl font-bold">{author_img}</p>
                    <p className="text-base font-semibold">{posted_date}</p>
                </div>
            </div>
            <div className="flex gap-x-3 justify-center items-center">
                <p className="text-xl font-medium">{reading_time}min read</p>
                <button onClick={()=> handleAddBookMark (blog)} className="border border-1-green p-4 rounded-3xl bg-green-200 text-xl font-medium">mark</button>
               
            </div>
          </div>
           <div className="text-4xl font-bold mt-4"> 
           <h2 >Title :{title}</h2>
           </div>
           <div className="mt-4">
            <p>{hashtags}</p>
           </div>
           <button onClick={()=> handleMarkAsRead(reading_time,id)} className="border border-1-green p-3 rounded-3xl bg-green-200 text-xl font-medium mt-3">Mark as Read</button>
        </div>
    );
};

export default Blog;