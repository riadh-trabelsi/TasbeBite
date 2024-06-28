import { TabGroup, TabPanels } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

const product = {
  rating: 5,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function () {
  return (
    <div className="">
      <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8  ">
        <div className="lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8 bg-sky-100  rounded-lg">
          {/* Image gallery */}
          <TabGroup className="lg:col-span-2">
            {/* Image selector */}
            <div className="mx-auto hidden w-full max-w-2xl sm:block lg:max-w-none"></div>

            <TabPanels className="aspect-h-1 aspect-w-1 w-full h-full flex">
              <img
                src="https://cdn.pixabay.com/photo/2017/10/16/09/02/cake-2856551_1280.jpg"
                alt=""
                className="max-h-full"
              />
            </TabPanels>
          </TabGroup>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Moelleux au chocolat
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-indigo-500"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6 text-base text-black" />
              <p>
                Le fondant au chocolat est souvent fort en sucre, œuf et
                chocolat, et contient peu de farine (une unité de sucre pour un
                tiers de farine1) par rapport à d'autres recettes de gâteau au
                chocolat. C'est sa texture dense et un peu collante (il adhère
                au palais), obtenue en caramélisant légèrement les ingrédients
                grâce à une cuisson lente2 qui le caractérise.
              </p>
            </div>

            <form className="mt-6">
              <div></div>

              <div className="mt-10 flex">
                <button
                  type="button"
                  className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-black hover:bg-gray-100 hover:text-gray-500"
                >
                  <HeartIcon
                    className="h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                <p>Add to favorites</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
