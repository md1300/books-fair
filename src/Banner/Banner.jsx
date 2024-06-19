

const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-3">
     <div className="card-body col-span-2">  
      <h2 className="card-title text-4xl">Books To Freshen Up <br/> Your Bookshelf</h2>
      
       <div className="card-actions ">
        <button className="btn btn-primary">View The List</button>
       </div>
     </div>
     <div className="col-span-1"><img  src={'banner.jpg'} alt="books"/></div>
       </div>
        </div>
    );
};

export default Banner;