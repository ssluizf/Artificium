import Avatar from "@/components/atoms/Avatar"
import Button from "@/components/atoms/Button"

import person1 from "@/assets/images/Person=Marcus Chen.png"
import person2 from "@/assets/images/Person=Lily Patel.png"
import person3 from "@/assets/images/Person=Harper Singh.png"
import person4 from "@/assets/images/Person=David Singh.png"
import person5 from "@/assets/images/Person=Ava Gupta.png"
import person6 from "@/assets/images/Person=Adam Green.png"
import avatar from "@/assets/images/Vertexia.png"

const persons = [person1, person2, person3, person4, person5, person6]

export default function Join() {
  return (
    <div
      className="mx-auto mb-24 flex w-full max-w-md flex-col items-center space-y-16
        px-4 sm:mx-24 sm:mb-44 sm:w-auto sm:max-w-none md:mx-28 md:mb-48"
    >
      <div className="flex flex-col items-center space-y-6">
        <Avatar
          src={avatar}
          alt="Worspace Image"
          className="h-20 w-20 rounded-[32px]"
        />
        <div className="space-y-2 text-center">
          <p className="text-heading-m-bold text-noble-black-0 sm:text-heading-l-bold md:text-heading-xl-bold">
            Vertexia
          </p>
          <p className="text-body-m-medium text-stem-green-500 sm:text-body-l-medium md:text-body-xl-medium">
            vertexia.artficium.app
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <Button label="Change workspace" variant="ghost" size="large" />
        <Button label="Join Now" size="large" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="flex">
          {persons.map((person, index) => (
            <Avatar
              key={`person-${index}`}
              src={person}
              alt="Avatar"
              className="-m-2 h-10 w-10 rounded-xl border-4 border-noble-black-700 nth-[4n+1]:hidden sm:h-12 sm:w-12 sm:rounded-2xl sm:nth-[4n+1]:block"
            />
          ))}
        </div>
        <p className="whitespace-nowrap text-body-s-medium text-noble-black-300 md:text-body-m-medium">
          and 873 others have already joined
        </p>
      </div>
    </div>
  )
}
