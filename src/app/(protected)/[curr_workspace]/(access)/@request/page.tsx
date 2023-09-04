import Avatar from "@/components/atoms/Avatar"
import Button from "@/components/atoms/Button"

import person1 from "@/assets/images/Person=Marcus Chen.png"
import person2 from "@/assets/images/Person=Lily Patel.png"
import person3 from "@/assets/images/Person=Harper Singh.png"
import person4 from "@/assets/images/Person=David Singh.png"
import person5 from "@/assets/images/Person=Ava Gupta.png"
import person6 from "@/assets/images/Person=Adam Green.png"

const persons = [person1, person2, person3, person4, person5, person6]

export default function Request() {
  return (
    <div className="mx-auto mb-24 flex w-full max-w-md flex-col items-center space-y-16 px-4
      sm:mx-24 sm:mb-44 sm:w-auto sm:max-w-none md:mx-28 md:mb-48">
      <div className="flex">
        {persons.map((person, index) => (
          <Avatar
            key={`person-${index}`}
            src={person}
            alt="Avatar"
            className="-m-3 h-16 w-16 rounded-[20px] border-[6px] border-noble-black-700
              nth-[4n+1]:hidden sm:-m-4 sm:h-20 sm:w-20 sm:rounded-[28px] sm:border-8 sm:nth-[4n+1]:block"
          />
        ))}
      </div>
      <div className="space-y-6 text-center">
        <p className="text-heading-s-medium text-noble-black-0 sm:text-heading-m-medium md:text-heading-l-medium">
          Sophia, Kamil, Emily and 2,012 others are already here!
        </p>
        <p className="text-body-m-medium text-noble-black-300 sm:text-body-l-medium md:text-body-xl-medium">
          {"But... it looks like you don't have access to this workspace."}
        </p>
      </div>
      <div className="flex flex-col items-center space-y-6">
        <Button label="Access request" size="large" />
        <p className="whitespace-nowrap text-body-s-medium text-noble-black-400">
          or
        </p>
        <Button label="Back" variant="tertiary" size="large" />
      </div>
    </div>
  )
}
