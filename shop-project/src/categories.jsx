import { StarIcon } from "@heroicons/react/20/solid";
const people = [
    {
      name: 'pasta pomodoro e basilico',
      imageUrl:
        'https://cdn.pixabay.com/photo/2022/10/21/20/28/tomato-7537917_1280.jpg',
        rating: 4,
    },
    {
        name: 'hamburger pur boeuf',
        imageUrl:
          'https://cdn.pixabay.com/photo/2022/05/12/17/05/hamburger-7191898_1280.jpg',
          rating: 4,
        },
      {
        name: 'Tiramisu',
        imageUrl:
          'https://cdn.pixabay.com/photo/2017/06/12/22/36/the-cake-2397051_1280.jpg',
          rating:5,
        },
    // More people...
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  export default function Example() {
    return (
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Super Delicious</h2>
            
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {people.map((person) => (
              <li key={person.name} className="rounded-2xl  px-8 py-10">
                <img className="mx-auto  rounded-md " src={person.imageUrl} alt="" />
                
                <div className="mt-3">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        person.rating > rating
                          ? "text-indigo-500"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{person.rating} out of 5 stars</p>
              </div>
            </div>
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-black">{person.name}</h3>
              </li>
            ))}
          </ul>
        
        </div>
      </div>
    )
  }
  