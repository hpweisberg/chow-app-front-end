const PostCardNew = () => {

  return (
    // <main className="container relative flex h-40 mx-0 text-black rounded-md shadow w-8096 bg-slashadow-lg">
    //   <img src="https://picsum.photos/160" alt="random image" className="object-cover w-48 rounded-lg shadow-lg xs:w-40 sm:w-48 md:w-56 -left-6 -top-4 md:top-0 xs:-top-1" />
    //   <div className="w-screen border border-red-200 ">

    //     <div className="flex justify-between gap-2 ">
    //       <h3 className="pl-1 ">Hi-Ho Burgers</h3>
    //       <h3>HIHO cheeseburger</h3>
    //       <h3 className="pr-1">Dinner</h3>
    //     </div>
    //     {/* <div className="flex justify-between gap-2 ">
    //       <p>5/5</p>
    //       <p className="pr-1 truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam explicabo delectus sequi sunt quasi repudiandae nemo minima distinctio tempore.</p>
    //     </div> */}
    //   </div>
    // </main>
    <div className="mb-1 overflow-hidden bg-white border border-red-500 rounded-lg shadow-lg max-h-48">
    <div className="flex">
      <div className="w-1/4">
        <img src='https://picsum.photos/500' alt="Restaurant" className="object-cover h-full " />
      </div>
      <div className="w-3/4 p-4">
        <div className="flex justify-between">
        <div className="mb-2">
          <h3 className="text-xl font-bold">Hi-Ho Burgers</h3>
          <p className="text-gray-700">HIHO cheeseburger</p>
        </div>
          <p className="text-gray-700">Dinner</p>
        </div>
        <div className="overflow-auto h-18">
          <p className="text-lg font-bold">5/5</p>
          <p className="overflow-hidden text-gray-700 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis consequuntur possimus non, cum dolor fugiat ut eligendi error libero provident molestias, impedit mollitia facere repellat tempora eos ducimus laborum natus.</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default PostCardNew;