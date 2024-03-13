

const BookMark = ({bookmark}) => {
    const{title} = bookmark
    return (
        <div className="bg-slate-200 mt-4 p-4 rounded-2xl">
            <h1 className="text-2xl">{title}</h1>
        </div>
    );
};

export default BookMark;