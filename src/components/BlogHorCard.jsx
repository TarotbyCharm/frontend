import React from "react";

export default function BlogHorCard() {
  return (
    <div className="border p-4">
      <div className="flex gap-4">
        <div className="w-1/3">
          <div className="flex items-center gap-4">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              laboriosam natus odit at, doloremque accusantium voluptatibus a
              adipisci illo. Quos amet excepturi possimus deleniti perspiciatis
              doloremque itaque ea facere pariatur nihil quisquam saepe et
              molestias nulla odio modi est corrupti officiis nobis officia,
              mollitia natus. Autem reiciendis exercitationem nulla optio.
              reiciendis exercitationem nullareiciendis exercitationem
              nullareiciendis exercitationem.
            </p>
          </div>
        </div>
        <div className="w-2/3">
          <img
            src="https://img.freepik.com/free-photo/numerology-collage-concept_23-2150061758.jpg?t=st=1737230077~exp=1737233677~hmac=accc89e5e7f17911d42be59e88f1674c839c03c1450e8b7fafaf0e30ccee24e3&w=1800"
            alt="poster"
          />
        </div>
      </div>
    </div>
  );
}
