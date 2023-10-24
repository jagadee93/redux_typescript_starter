import React, { useState } from "react";
const imgList = [
  {
    title: "Anime",
    src: "https://picsum.photos/200",
    id: 1,
  },
  {
    title: "Action",
    src: "https://picsum.photos/200",
    id: 1,
  },
  {
    title: "Bad",
    src: "https://picsum.photos/200",
    id: 1,
  },
  {
    title: "good",
    src: "https://picsum.photos/200",
    id: 1,
  },
];

const FilterImg = () => {
  const [search, setSearch] = useState("");

  const [images, setImages] = useState(imgList);
  function filterImages(e) {
    e.preventDefault();
    const filteredImages = imgList.filter((img) => {
      return img.title.includes(search);
    });

    setImages(filteredImages);
  }
  return (
    <div>
      <form onSubmit={filterImages}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="enter title"
        />
        {images.map((img) => {
          return (
            <div key={img.id}>
              <h1>{img.title}</h1>
              <img src={img.src} alt={img.title} />
            </div>
          );
        })}
        <button>Filter Images</button>
      </form>
    </div>
  );
};

export default FilterImg;
