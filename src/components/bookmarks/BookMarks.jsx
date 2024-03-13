import BookMark from "../bookmark/BookMark";


const BookMarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 text-2xl font-bold bg-slate-300 rounded-lg p-4">
            <h1 className="text-center mb-3">
                Reading Time: <span className="text-red-600">{readingTime}</span>
            </h1>
            <h1 className="text-center">BookMarked Blogs: <span className="text-red-600">{bookmarks.length}</span></h1>
            {
                bookmarks.map((bookmark,idx) => <BookMark key={idx} bookmark = {bookmark}></BookMark>)
            }
        </div>
    );
};

export default BookMarks;