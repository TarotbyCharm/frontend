import React from "react";

export default function BlogCard() {
  return (
    <div className="border p-4">
      <img
        src="https://img.freepik.com/free-photo/numerology-collage-concept_23-2150061758.jpg?t=st=1737230077~exp=1737233677~hmac=accc89e5e7f17911d42be59e88f1674c839c03c1450e8b7fafaf0e30ccee24e3&w=1800"
        className="h-auto w-auto"
        alt="poster"
      />
      <div className="flex items-center gap-4 my-4">
        <img
          src="https://ui-avatars.com/api/?name=Shin"
          className="h-10"
          alt="Man"
        />
        <div>
          <h4>Shin</h4>
          <p>26 Dec 2024</p>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-3xl font-medium mb-3">What is Astrology?</h1>
        <p className="text-gray-400 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit placeat velit explicabo aspernatur hic distinctio omnis
          nemo asperiores aperiam quis assumenda ipsam, nostrum accusantium
          excepturi tenetur illum aliquam repellendus.
        </p>
      </div>
    </div>
  );
}
