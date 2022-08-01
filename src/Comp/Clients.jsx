import person1 from "../img/person/person-1.jpg";
import person2 from "../img/person/person-2.jpg";
import person3 from "../img/person/person-3.jpg";
import person4 from "../img/person/person-4.jpg";
import person5 from "../img/person/person-5.jpg";

const data = [
  {
    id: 1,
    name: "Bertie Yates",
    info:
      "There are many variations of passages of Lorem Ipsum available , but the majority have suffered",
    image: person1
  },
  {
    id: 2,
    name: "Hester Hogan",
    info:
      "There are many variations of passages of Lorem Ipsum available , but the majority have suffered",
    image: person2
  },
  {
    id: 3,
    name: "Larry Little",
    info:
      "There are many variations of passages of Lorem Ipsum available , but the majority have suffered",
    image: person3
  },
  {
    id: 4,
    name: "Sean Walsh",
    info:
      "There are many variations of passages of Lorem Ipsum available , but the majority have suffered",
    image: person4
  },
  {
    id: 5,
    name: "Lola Gardner",
    info:
      "There are many variations of passages of Lorem Ipsum available , but the majority have suffered",
    image: person5
  }
];

const Clients = () => {
  return (
    <>
      <div className="flex text-center gap-y-3 justify-center mb-8 ">
        <h2 className="text-[2rem] font-bold tracking-wider text-slate-900 ">
          Clients <span className="text-violet-500">Commentries</span>
        </h2>
      </div>
      <div className="flex  flex-wrap gap-y-4 py-8  gap-x-8 px-12 justify-center items-center">
        {data &&
          data.map((i) => (
            <div
              key={i.id}
              className=" hover:bg-white bg-[#f9f9f9] lg:even:mt-24 w-60 h-70 p-8 flex flex-col shadow-2xl  rounded-2xl"
            >
              <div className="flex justify-center py-4">
                <div className="rounded-full drop-shadow-2xl  h-[75px] w-[75px]">
                  <img
                    className="  w-full h-full shaodw-2xl rounded-full object-cover "
                    src={i.image}
                    alt="logo"
                  />
                </div>
              </div>

              <h1 className="text-center text-2xl font-bold text-slate-900">
                {i.name}
              </h1>
              <h2 className="text-center">{i.info}</h2>
            </div>
          ))}
      </div>
    </>
  );
};

export default Clients;
